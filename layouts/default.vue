<template>
  <div class="">
    <!-- background texture image, full-width at the top of the page behind everything -->

    <img :src="['/bg_texture.png']" alt=""
      class="absolute top-0 left-0 w-full -z-10 pointer-events-none dark:hidden opacity-40" />

    <div class="absolute -z-10 left-0 top-0 pointer-events-none">
      <TresCanvas window-size alpha shadows class="pointer-events-none opacity-40 dark:opacity-80"
        style="pointer-events: none !important">
        <TresPerspectiveCamera ref="cam" :position="[cameraPosition.x, cameraPosition.y, cameraPosition.z]"
          :lookAt="[cameraTarget.x, cameraTarget.y, cameraTarget.z]" :fov="45" :near="0.4" :far="1000" />

        <!-- add some subtle ambient lights -->
        <!-- <TresAmbientLight :intensity="0.5" :position="[0, 0, 0]" /> -->

        <!-- add a directional light to cast shadows -->
        <!-- <TresDirectionalLight :position="lightPosition" :intensity="20" color="#fff" /> -->

        <TresGroup :rotation="[
          sphereGroupRotation.x,
          sphereGroupRotation.y,
          sphereGroupRotation.z,
        ]">
          <TresMesh v-for="sphere in spheres" :key="sphere.id" :position="[sphere.x, sphere.y, sphere.z]">
            <TresSphereGeometry :args="[sphere.size]" />
            <TresMeshBasicMaterial :color="sphere.color" :opacity="1" transparent={false} />
          </TresMesh>
        </TresGroup>

        <EffectComposer>
          <Pixelation :granularity="pixelationAmount" />
        </EffectComposer>
      </TresCanvas>
    </div>
    <SiteNav class="max-w-screen-2xl mx-auto" />
    <div class="max-w-screen-2xl mx-auto">
      <slot />
    </div>
    <GlobalFooter />
  </div>
</template>

<script setup>
import { animate, createAnimatable, stagger } from "~/anime.esm.js";
import { TresCanvas, useLoader, extend } from "@tresjs/core";
import { createNoise3D } from "simplex-noise";
import {
  EffectComposer,
  DepthOfField,
  Glitch,
  Noise,
  Outline,
  Pixelation,
  Vignette,
} from "@tresjs/post-processing";
import { useDark } from "@vueuse/core";
import { useRoute } from "vue-router";

const isDark = useDark();
const pixelationAmount = ref(0);
const cameraPosition = ref({ x: 0, y: 0, z: 1 });
const cameraTarget = ref({ x: 0, y: 0, z: 0 });
const cam = shallowRef(null);
const sphereGroupRotation = ref({ x: 0, y: 0, z: 0 });
const noise3D = createNoise3D();
const spheres = ref([]);
const { onLoop } = useRenderLoop();
const { y } = useWindowScroll();
const { x: mouseX, y: mouseY } = useMouse();
const route = useRoute();

// Add the missing getRandom3DPosition function
const getRandom3DPosition = (index) => {
  const multiplier = 50;
  const x = noise3D(Math.random(), Math.random(), index) * multiplier;
  const y = noise3D(Math.random(), Math.random(), index) * multiplier;
  const z = noise3D(Math.random(), Math.random(), index) * multiplier;

  return { x, y, z };
};

// Simplified config
const config = {
  spheres: {
    count: 720,
    baseSize: 0.004,
    variantSize: 0.015,
    baseColor: '#333333',
    darkModeBaseColor: '#888888',
    accentColor: '#ff6600',
    accentFrequency: 0.04,
    gridSize: 40,
    gridPadding: 0.5,
  },
  camera: {
    default: { x: 0, y: 0, z: 2 }, // Safe default position
    mouseInfluence: 0.0003
  },
  animation: {
    durations: {
      transition: 1000,
      formation: 800,
      mouseMove: 200,
      scroll: 100
    },
    easings: {
      transition: 'cubicBezier(0.4, 0, 0.2, 1)',
      formation: 'cubicBezier(0.4, 0, 0.2, 1)',
      mouseMove: 'cubicBezier(0.4, 0, 0.2, 1)',
      scroll: 'cubicBezier(0.4, 0, 0.2, 1)',
    },
    scroll: {
      sensitivity: 0.0001,
      maxTilt: 0.1,
      cameraLift: 0.05,
      rotationFactor: 0.3
    }
  }
}

// Initialize spheres with dark mode awareness
const initSpheres = () => {
  const { gridSize, gridPadding } = config.spheres;
  const gridOffset = (gridSize * gridPadding) / 2;

  for (let i = 0; i < config.spheres.count; i++) {
    const isAccent = Math.random() < config.spheres.accentFrequency;
    const baseColor = isDark.value ? config.spheres.darkModeBaseColor : config.spheres.baseColor;
    const color = isAccent ? config.spheres.accentColor : baseColor;

    // More random initial positioning
    const noise = getRandom3DPosition(i);
    const x = ((i % gridSize) * gridPadding - gridOffset) + noise.x * 0.3;
    const y = (Math.floor(i / gridSize) * gridPadding - gridOffset) + noise.y * 0.3;
    const z = noise.z;

    // Smaller size variation
    const sizeVariation = noise3D(x, y, z) * config.spheres.variantSize;
    const size = config.spheres.baseSize + (isAccent ? sizeVariation * 1.5 : sizeVariation);

    spheres.value.push({
      id: `sphere-${i}`,
      x, y, z,
      size,
      color,
      initialY: y,
    });
  }
};

// Add formation calculations
const getFormation = (i, total, type = 'grid') => {
  const t = i / total;

  switch (type) {
    case 'contact':
      // Create a perfect square grid
      const contactGridSize = Math.ceil(Math.sqrt(total));
      const spacing = 0.15;
      const row = Math.floor(i / contactGridSize);
      const col = i % contactGridSize;
      const offset = (contactGridSize * spacing) / 2;

      // Add subtle wave motion based on position
      const waveX = Math.sin(row * 0.5 + col * 0.3) * 0.02;
      const waveY = Math.cos(col * 0.4 + row * 0.2) * 0.02;

      return {
        x: (col * spacing - offset) + waveX,
        y: -(row * spacing - offset) + waveY,
        z: 0.5 + Math.sin(row * col * 0.1) * 0.1 // Subtle depth variation
      };

    case 'circle':
      // Create multiple rings with golden ratio spacing
      const phi = (1 + Math.sqrt(5)) / 2;
      const ringIndex = Math.floor(i / 50); // Groups of 50 spheres per ring
      const ringRadius = 0.3 + (ringIndex * 0.2); // Increasing radius for each ring

      // Spiral angle based on golden ratio
      const angle = (i * phi * Math.PI * 2) % (Math.PI * 2);

      // Add some vertical displacement using noise
      const heightNoise = noise3D(Math.cos(angle), Math.sin(angle), ringIndex) * 0.2;

      // Add subtle radial variation
      const radiusNoise = noise3D(Math.sin(angle), Math.cos(angle), ringIndex) * 0.05;

      return {
        x: Math.cos(angle) * (ringRadius + radiusNoise),
        y: Math.sin(angle) * (ringRadius + radiusNoise) + heightNoise,
        z: -ringIndex * 0.1 + heightNoise // Gradual depth change
      };

    case 'grid':
    default:
      // Return to original grid position
      const { gridSize, gridPadding } = config.spheres;
      const gridOffset = (gridSize * gridPadding) / 2;
      const noise = getRandom3DPosition(i);

      return {
        x: ((i % gridSize) * gridPadding - gridOffset) + noise.x * 0.3,
        y: (Math.floor(i / gridSize) * gridPadding - gridOffset) + noise.y * 0.3,
        z: noise.z
      };
  }
};

// Add subtle continuous animation
const animateScene = () => {
  spheres.value.forEach((sphere, i) => {
    if (route.name === 'contact') {
      // Subtle floating animation for contact grid
      const row = Math.floor(i / Math.sqrt(spheres.value.length));
      const col = i % Math.sqrt(spheres.value.length);

      sphere.z += Math.sin(Date.now() * 0.001 + row * col * 0.1) * 0.0001;
    }
  });
};

// Enhanced route transition
watch(route, (newRoute) => {
  const { durations, easings } = config.animation;
  let formation = 'grid';
  if (newRoute.name === 'our-work') formation = 'circle';
  if (newRoute.name === 'contact') formation = 'contact';

  // Camera positions with subtle variations
  const cameraZ = {
    grid: 2,
    circle: 3,
    contact: 2.5 + Math.sin(Date.now() * 0.001) * 0.1
  }[formation];

  const cameraY = {
    grid: 0,
    circle: 0.5,
    contact: 0.2
  }[formation];

  // Staggered sphere animations
  spheres.value.forEach((sphere, i) => {
    const position = getFormation(i, spheres.value.length, formation);
    const staggerDelay = i * 2; // 2ms delay between each sphere
    const randomOffset = Math.random() * 100; // Add some randomness

    animate(sphere, {
      ...position,
      duration: durations.formation,
      delay: staggerDelay + randomOffset,
      easing: 'spring(1, 90, 10, 0)', // Springy motion
    });

    // Subtle size pulse on transition
    animate(sphere, {
      size: sphere.size * (1 + Math.sin(i * 0.1) * 0.1),
      duration: 600,
      delay: staggerDelay,
      direction: 'alternate',
      easing: 'easeInOutQuad',
    });
  });

  // Smooth camera transition
  animate(cameraPosition.value, {
    z: cameraZ,
    x: 0,
    y: cameraY,
    duration: durations.transition * 1.2,
    easing: 'spring(1, 80, 10, 0)',
  });
});

// Enhanced mouse interaction
const handleMouseMovement = () => {
  const { durations, easings } = config.animation;
  const normalizedX = (mouseX.value / window.innerWidth - 0.5) * 2;
  const normalizedY = (mouseY.value / window.innerHeight - 0.5) * 2;

  // Add subtle sphere reaction to mouse
  if (route.name === 'contact') {
    spheres.value.forEach((sphere, i) => {
      const distance = Math.sqrt(
        Math.pow(sphere.x - normalizedX, 2) +
        Math.pow(sphere.y - normalizedY, 2)
      );

      if (distance < 0.5) {
        animate(sphere, {
          z: 0.5 + (0.5 - distance) * 0.2,
          duration: 400,
          easing: 'easeOutQuad',
        });
      }
    });
  }

  // Smooth camera follow
  animate(cameraPosition.value, {
    x: normalizedX * config.camera.mouseInfluence,
    y: -normalizedY * config.camera.mouseInfluence,
    duration: durations.mouseMove,
    easing: 'spring(1, 90, 10, 0)',
  });
};

// Add back scroll animation with new config
watch(y, (newY) => {
  const { durations, easings, scroll } = config.animation;

  animate(cameraPosition.value, {
    y: -newY * scroll.sensitivity + scroll.cameraLift,
    z: 2 + Math.abs(newY * scroll.sensitivity * 0.2),
    duration: durations.scroll,
    easing: easings.scroll,
  });

  // Very subtle target adjustment
  animate(cameraTarget.value, {
    y: -newY * scroll.sensitivity * 0.1,
    duration: durations.scroll,
    easing: easings.scroll,
  });

  // Gentler rotation
  animate(sphereGroupRotation.value, {
    y: newY * scroll.sensitivity * scroll.rotationFactor,
    duration: durations.scroll,
    easing: easings.scroll,
  });
});

// Add this near your other route watchers
watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    // Only force scroll on blog routes to avoid interfering with other animations
    if (newPath.includes('/blog') || oldPath?.includes('/blog')) {
      window.scrollTo({
        top: 0,
        behavior: newPath.includes('/blog/') ? 'instant' : 'smooth'
      });
    }
  }
);

onMounted(() => {
  initSpheres();
  useEventListener('mousemove', handleMouseMovement);
});
</script>

<style scoped>
.bg-with-texture {
  background: url("/bg_texture.png");
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #f5f5f5;
  /* min-height: 100vh; */
  position: relative;
  overflow: hidden;
}
</style>
