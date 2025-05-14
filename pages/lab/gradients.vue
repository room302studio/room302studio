<template>
  <div class="py-12 px-4">
    <h1 class="text-center text-2xl font-semibold mb-8">Gradient Generator</h1>
    <div class="gradient-tool flex flex-col md:flex-row items-start gap-8 max-w-screen-lg mx-auto">
      <!-- Canvas + actions -->
      <div class="flex flex-col items-center gap-4">
        <canvas ref="canvasRef" :width="width" :height="height" class="rounded-sm shadow-md max-w-full h-auto"></canvas>

        <div class="flex gap-3">
          <button @click="shuffleGradient" class="px-4 py-2 bg-primary-500 text-white rounded">
            Shuffle 🎲
          </button>
          <button @click="downloadImage" class="px-4 py-2 bg-gray-800 text-white rounded">
            Download PNG
          </button>
        </div>
      </div>

      <!-- Control panel -->
      <div class="controls flex flex-col gap-4 w-full md:w-72">
        <!-- Unlock All -->
        <div>
          <button @click="unlockAll" class="w-full px-2 py-1 bg-primary-500 text-white rounded">
            Unlock All 🔓
          </button>
        </div>

        <!-- Palette toggle -->
        <div>
          <label class="block text-sm font-medium mb-1 flex items-center gap-1">
            Color Scheme
            <button @click.stop="locks.palette = !locks.palette" class="text-xs">
              {{ locks.palette ? '🔒' : '🔓' }}
            </button>
          </label>
          <select v-model="paletteType" class="w-full border rounded p-2">
            <option value="brand">Brand Orange 🔥</option>
            <option value="inverted">Inverted Brand 🔄</option>
            <option value="complementary">Ocean Complement 🌊</option>
            <option value="monochrome">Mono Orange 🎨</option>
            <option value="cool">Cool Brand ❄️</option>
            <option value="metallic">Luxury Metals ✨</option>
          </select>
        </div>

        <!-- Gradient type -->
        <div>
          <label class="block text-sm font-medium mb-1 flex items-center gap-1">
            Gradient Type
            <button @click.stop="locks.gradient = !locks.gradient" class="text-xs">
              {{ locks.gradient ? '🔒' : '🔓' }}
            </button>
          </label>
          <select v-model="gradientType" class="w-full border rounded p-2">
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
          </select>
        </div>

        <!-- Angle (only for linear) -->
        <div v-if="gradientType === 'linear'">
          <label class="block text-sm font-medium mb-1 flex items-center gap-1">
            Angle: {{ angle }}°
            <button @click.stop="locks.angle = !locks.angle" class="text-xs">
              {{ locks.angle ? '🔒' : '🔓' }}
            </button>
          </label>
          <input type="range" v-model="angle" min="0" max="360" class="w-full" />
        </div>

        <!-- Color stops -->
        <div>
          <label class="block text-sm font-medium mb-1 flex items-center gap-1">
            Color Stops: {{ stops }}
            <button @click.stop="locks.stops = !locks.stops" class="text-xs">
              {{ locks.stops ? '🔒' : '🔓' }}
            </button>
          </label>
          <input type="range" v-model="stops" min="2" max="5" class="w-full" />
        </div>

        <!-- Grain (formerly noise) -->
        <div>
          <label class="block text-sm font-medium mb-1 flex items-center gap-1">
            Grain: {{ grain }}
            <button @click.stop="locks.grain = !locks.grain" class="text-xs">
              {{ locks.grain ? '🔒' : '🔓' }}
            </button>
          </label>
          <input type="range" v-model="grain" min="0" max="100" class="w-full" />
        </div>

        <!-- Pixelate -->
        <div>
          <label class="block text-sm font-medium mb-1 flex items-center gap-1">
            Pixelate: {{ pixelate }}
            <button @click.stop="locks.pixelate = !locks.pixelate" class="text-xs">
              {{ locks.pixelate ? '🔒' : '🔓' }}
            </button>
          </label>
          <input type="range" v-model="pixelate" min="0" max="40" class="w-full" />
        </div>

        <!-- Shape overlay -->
        <div>
          <label class="block text-sm font-medium mb-1 flex items-center gap-1">
            Shape Overlay
            <button @click.stop="locks.shape = !locks.shape" class="text-xs">
              {{ locks.shape ? '🔒' : '🔓' }}
            </button>
          </label>
          <select v-model="shapeType" class="w-full border rounded p-2">
            <option value="none">None</option>
            <option value="circle">Circle</option>
            <option value="square">Square</option>
            <option value="triangle">Triangle</option>
          </select>
        </div>

        <div v-if="shapeType !== 'none'">
          <label class="block text-sm font-medium mb-1 flex items-center gap-1">
            Shape Opacity: {{ shapeOpacity }}%
            <button @click.stop="locks.shape = !locks.shape" class="text-xs">
              {{ locks.shape ? '🔒' : '🔓' }}
            </button>
          </label>
          <input type="range" v-model="shapeOpacity" min="5" max="100" class="w-full" />
        </div>

        <!-- Blur -->
        <div>
          <label class="block text-sm font-medium mb-1">Blur: {{ blur }}px</label>
          <input type="range" v-model="blur" min="0" max="20" class="w-full" />
        </div>

        <!-- Dithering -->
        <div>
          <label class="block text-sm font-medium mb-1 flex items-center gap-1">
            Dithering
            <button @click.stop="locks.dithering = !locks.dithering" class="text-xs">
              {{ locks.dithering ? '🔒' : '🔓' }}
            </button>
          </label>
          <div class="flex items-center gap-2">
            <input type="checkbox" v-model="ditheringEnabled" />
            <span v-if="ditheringEnabled">Step: {{ ditheringStep }}</span>
          </div>
          <input v-if="ditheringEnabled" type="range" v-model="ditheringStep" min="2" max="128" class="w-full" />
        </div>

        <!-- RGB Shift -->
        <div>
          <label class="block text-sm font-medium mb-1 flex items-center gap-1">
            RGB Shift: {{ rgbShift }}px
            <button @click.stop="locks.rgb = !locks.rgb" class="text-xs">
              {{ locks.rgb ? '🔒' : '🔓' }}
            </button>
          </label>
          <input type="range" v-model="rgbShift" min="0" max="20" class="w-full" />
        </div>

        <!-- Scanline Glitch -->
        <div>
          <label class="block text-sm font-medium mb-1 flex items-center gap-1">
            Scanline Amp: {{ scanlineAmp }}px
            <button @click.stop="locks.scanline = !locks.scanline" class="text-xs">
              {{ locks.scanline ? '🔒' : '🔓' }}
            </button>
          </label>
          <input type="range" v-model="scanlineAmp" min="0" max="40" class="w-full" />
        </div>

        <!-- Animate -->
        <div>
          <label class="block text-sm font-medium mb-1 flex items-center gap-1">
            Animate
            <button @click.stop="locks.animate = !locks.animate" class="text-xs">
              {{ locks.animate ? '🔒' : '🔓' }}
            </button>
          </label>
          <input type="checkbox" v-model="animate" />
        </div>

        <!-- Favorites -->
        <div>
          <label class="block text-sm font-medium mb-1">Favorites</label>
          <div class="flex flex-wrap gap-2 mb-2 max-h-40 overflow-auto">
            <div v-for="(fav, idx) in favorites" :key="idx" class="relative">
              <img :src="fav.preview || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='"
                class="w-16 h-16 object-cover cursor-pointer border rounded"
                :class="selectedFavoriteIndex === idx ? 'ring-2 ring-primary-500' : ''"
                @click="selectedFavoriteIndex = idx; applyFavorite(idx)" />
              <button
                class="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                @click.stop="deleteFavorite(idx)">×</button>
            </div>
          </div>
          <button @click="saveFavorite" class="w-full px-2 py-1 bg-gray-800 text-white rounded">Save Current ✨</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, onUnmounted } from "vue";

const width = 1080;
const height = 1350;
const canvasRef = ref<HTMLCanvasElement | null>(null);

// UI Reactive state
const paletteType = ref<'brand' | 'inverted' | 'complementary' | 'monochrome' | 'cool' | 'metallic'>('brand');
const gradientType = ref<'linear' | 'radial'>('linear');
const angle = ref(45);
const stops = ref(3);
const grain = ref(10); // 0–100
const blur = ref(0); // px
const pixelate = ref(0); // 0–40 (0 => none)

// New glitch / post-processing controls
const ditheringEnabled = ref(false); // Floyd–Steinberg toggle
const ditheringStep = ref(64);       // 2–128 (coarseness)

const rgbShift = ref(0);    // px offset for R/B channels
const scanlineAmp = ref(0); // max horizontal shift of scanlines (px)

const animate = ref(false); // run rAF loop

// Shape overlay
const shapeType = ref<'none' | 'circle' | 'square' | 'triangle'>('none');
const shapeOpacity = ref(20); // percent

// Brand palette (tailwind primary scale + variants)
const brandPalette = [
  "#e17055", // Primary orange
  "#f28a72",
  "#d45a3e",
  "#fbd0c7",
  "#b14730",
  "#913c2b",
];

// Inverted brand colors (flip the primary orange to get teal)
const invertedPalette = [
  "#1e8faa", // Inverted primary
  "#0d758d",
  "#2ba5c1",
  "#04d3e8",
  "#4ecfcf",
  "#6ed2d4",
];

// Complementary blues/teals (based on color wheel)
const complementaryPalette = [
  "#55b7e1", // Primary complement
  "#72daf2",
  "#3ea6d4",
  "#c7f3fb",
  "#3047b1",
  "#2b5991",
];

// Monochromatic orange (more steps between light and dark)
const monochromePalette = [
  "#e17055", // Primary
  "#ff9478", // Lighter
  "#ffa088",
  "#cc563d", // Darker
  "#b44b35",
  "#992f1c",
];

// Cool variant (desaturated, cooler temperature)
const coolPalette = [
  "#d4846d", // Cooled primary
  "#c17a65",
  "#b36f5b",
  "#a66557",
  "#8d4e42",
  "#7a4339",
];

const metallicPalette = [
  "#FFD700",  // Pure gold
  "#DAA520",  // Golden rod
  "#B8860B",  // Dark golden rod
  "#C0C0C0",  // Silver
  "#E8E8E8",  // Bright silver
  "#A9A9A9",  // Dark silver
  "#B87333",  // Copper
  "#CD7F32",  // Bronze
];

function getActivePalette() {
  switch (paletteType.value) {
    case 'brand':
      return brandPalette;
    case 'inverted':
      return invertedPalette;
    case 'complementary':
      return complementaryPalette;
    case 'monochrome':
      return monochromePalette;
    case 'cool':
      return coolPalette;
    case 'metallic':
      return metallicPalette;
    default:
      return brandPalette;
  }
}

// Watch for palette type changes
watch(paletteType, () => {
  // Update colors when palette changes
  if (!locks.palette) {
    currentColors = pickColors(stops.value);
    drawGradient();
  }
});

// Current color set (matches stops count)
let currentColors = pickColors(stops.value);

function getRandomAngle() {
  return Math.random() * 360;
}

function pickColors(count = 3) {
  const shuffled = [...getActivePalette()].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function clamp(value: number) {
  return Math.max(0, Math.min(255, value));
}

function drawGradient() {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Ensure currentColors matches stop count
  if (currentColors.length !== stops.value) {
    currentColors = pickColors(stops.value);
  }

  ctx.save();

  // Apply blur via filter if needed
  ctx.filter = blur.value > 0 ? `blur(${blur.value}px)` : 'none';

  let gradient: CanvasGradient;

  if (gradientType.value === 'linear') {
    const radians = (angle.value * Math.PI) / 180;
    const x0 = width / 2 + Math.cos(radians) * width;
    const y0 = height / 2 + Math.sin(radians) * height;
    const x1 = width / 2 - Math.cos(radians) * width;
    const y1 = height / 2 - Math.sin(radians) * height;
    gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  } else {
    gradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      Math.max(width, height) / 1.2
    );
  }

  const step = 1 / (currentColors.length - 1);
  currentColors.forEach((color, i) => gradient.addColorStop(i * step, color));

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.restore(); // reset filter for next operations

  // Grain & pixel-level effects (dither, rgb shift)
  let imgData = ctx.getImageData(0, 0, width, height);

  // Grain
  if (grain.value > 0) {
    const data = imgData.data;
    const n = grain.value;
    for (let i = 0; i < data.length; i += 4) {
      const rand = (Math.random() - 0.5) * 2 * n;
      data[i] = clamp(data[i] + rand);
      data[i + 1] = clamp(data[i + 1] + rand);
      data[i + 2] = clamp(data[i + 2] + rand);
    }
  }

  // Floyd-Steinberg dithering
  if (ditheringEnabled.value && ditheringStep.value > 0) {
    applyDithering(imgData, ditheringStep.value);
  }

  // RGB channel shift
  if (rgbShift.value > 0) {
    applyRGBShift(imgData, rgbShift.value);
  }

  ctx.putImageData(imgData, 0, 0);

  // Shape overlay
  if (shapeType.value !== 'none') {
    ctx.save();
    ctx.fillStyle = `rgba(255,255,255,${shapeOpacity.value / 100})`;
    ctx.translate(width / 2, height / 2);
    const size = Math.min(width, height) * 0.6;

    switch (shapeType.value) {
      case 'circle':
        ctx.beginPath();
        ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'square':
        ctx.fillRect(-size / 2, -size / 2, size, size);
        break;
      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(size / 2, size / 2);
        ctx.lineTo(-size / 2, size / 2);
        ctx.closePath();
        ctx.fill();
        break;
    }
    ctx.restore();
  }

  // Pixelate effect
  if (pixelate.value > 0) {
    const factor = pixelate.value;
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = Math.max(1, Math.floor(width / factor));
    tempCanvas.height = Math.max(1, Math.floor(height / factor));
    const tctx = tempCanvas.getContext('2d');
    if (tctx) {
      tctx.imageSmoothingEnabled = false;
      tctx.drawImage(canvas, 0, 0, tempCanvas.width, tempCanvas.height);
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(
        tempCanvas,
        0,
        0,
        tempCanvas.width,
        tempCanvas.height,
        0,
        0,
        width,
        height
      );
      ctx.imageSmoothingEnabled = true;
    }
  }

  // Scanline glitch (after pixelate so stripes are sharp)
  if (scanlineAmp.value > 0) {
    applyScanlines(ctx, scanlineAmp.value);
  }
}

function shuffleGradient() {
  // Quick shuffle with same lock respect as shuffleAll
  if (!locks.palette) {
    paletteType.value = Math.random() > 0.5 ? 'brand' : 'metallic';
  }

  if (!locks.gradient) {
    gradientType.value = Math.random() > 0.5 ? 'linear' : 'radial';
  }

  if (!locks.angle) {
    angle.value = Math.floor(Math.random() * 360);
  }

  if (!locks.stops) {
    stops.value = Math.floor(Math.random() * 4) + 2;
  }

  if (!locks.grain) {
    grain.value = Math.floor(Math.random() * 101);
  }

  if (!locks.blur) {
    blur.value = Math.floor(Math.random() * 21);
  }

  if (!locks.pixelate) {
    pixelate.value = Math.floor(Math.random() * 41);
  }

  if (!locks.shape) {
    shapeType.value = ['none', 'circle', 'square', 'triangle'][Math.floor(Math.random() * 4)] as typeof shapeType.value;
    shapeOpacity.value = Math.floor(Math.random() * 96) + 5;
  }

  if (!locks.dithering) {
    ditheringEnabled.value = Math.random() > 0.5;
    ditheringStep.value = Math.floor(Math.random() * 127) + 2;
  }

  if (!locks.rgb) {
    rgbShift.value = Math.floor(Math.random() * 21);
  }

  if (!locks.scanline) {
    scanlineAmp.value = Math.floor(Math.random() * 41);
  }

  if (!locks.animate) {
    animate.value = Math.random() > 0.5;
  }

  // Always pick new colors within current constraints
  if (!locks.palette && !locks.stops) {
    currentColors = pickColors(stops.value);
  } else if (!locks.palette) {
    currentColors = pickColors(currentColors.length);
  }

  drawGradient();
}

function downloadImage() {
  const canvas = canvasRef.value;
  if (!canvas) return;
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "gradient.png";
    a.click();
    URL.revokeObjectURL(url);
  }, "image/png");
}

// Re-draw whenever relevant controls change
watch(
  [
    gradientType,
    angle,
    stops,
    grain,
    blur,
    pixelate,
    shapeType,
    shapeOpacity,
    ditheringEnabled,
    ditheringStep,
    rgbShift,
    scanlineAmp,
  ],
  () => {
    if (!animate.value) drawGradient();
  }
);

// Animation control
let frameId: number | null = null;

watch(animate, (enabled) => {
  if (enabled) {
    const loop = () => {
      drawGradient();
      frameId = requestAnimationFrame(loop);
    };
    loop();
  } else if (frameId !== null) {
    cancelAnimationFrame(frameId);
    frameId = null;
  }
}, { immediate: false });

onUnmounted(() => {
  if (frameId !== null) cancelAnimationFrame(frameId);
});

// Locks for controls
const locks = reactive({
  palette: false,
  gradient: false,
  angle: false,
  stops: false,
  grain: false,
  blur: false,
  pixelate: false,
  shape: false,
  dithering: false,
  rgb: false,
  scanline: false,
  animate: false,
});

/* ------------------------------------------------------------------
   Post-processing helpers
-------------------------------------------------------------------*/
function applyDithering(imgData: ImageData, step: number) {
  const { data, width: w, height: h } = imgData;
  const distribute = (x: number, y: number, er: number, eg: number, eb: number, factor: number) => {
    if (x < 0 || x >= w || y < 0 || y >= h) return;
    const idx = (y * w + x) * 4;
    data[idx] = clamp(data[idx] + er * factor);
    data[idx + 1] = clamp(data[idx + 1] + eg * factor);
    data[idx + 2] = clamp(data[idx + 2] + eb * factor);
  };

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const oldR = data[idx];
      const oldG = data[idx + 1];
      const oldB = data[idx + 2];

      const newR = Math.round(oldR / step) * step;
      const newG = Math.round(oldG / step) * step;
      const newB = Math.round(oldB / step) * step;

      data[idx] = newR;
      data[idx + 1] = newG;
      data[idx + 2] = newB;

      const errR = oldR - newR;
      const errG = oldG - newG;
      const errB = oldB - newB;

      distribute(x + 1, y, errR, errG, errB, 7 / 16);
      distribute(x - 1, y + 1, errR, errG, errB, 3 / 16);
      distribute(x, y + 1, errR, errG, errB, 5 / 16);
      distribute(x + 1, y + 1, errR, errG, errB, 1 / 16);
    }
  }
}

function applyRGBShift(imgData: ImageData, shift: number) {
  const { data, width: w, height: h } = imgData;
  const copy = new Uint8ClampedArray(data);
  const clampX = (x: number) => (x < 0 ? 0 : x >= w ? w - 1 : x);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const rIdx = (y * w + clampX(x + shift)) * 4;
      const bIdx = (y * w + clampX(x - shift)) * 4;

      data[idx] = copy[rIdx];       // R
      // G remains
      data[idx + 2] = copy[bIdx + 2]; // B
    }
  }
}

function applyScanlines(ctx: CanvasRenderingContext2D, amp: number) {
  const stripeH = 4;
  const temp = document.createElement('canvas');
  temp.width = width;
  temp.height = height;
  const tctx = temp.getContext('2d');
  if (!tctx) return;
  tctx.drawImage(ctx.canvas, 0, 0);

  for (let y = 0; y < height; y += stripeH) {
    const offset = (Math.random() * 2 - 1) * amp;
    ctx.drawImage(temp, 0, y, width, stripeH, offset, y, width, stripeH);
  }
}

onMounted(drawGradient);

/* ------------------------------------------------------------------
   Favorites (localStorage) logic
-------------------------------------------------------------------*/

interface Preset {
  paletteType: typeof paletteType.value;
  gradientType: typeof gradientType.value;
  angle: number;
  stops: number;
  grain: number;
  blur: number;
  pixelate: number;
  shapeType: typeof shapeType.value;
  shapeOpacity: number;
  ditheringEnabled: boolean;
  ditheringStep: number;
  rgbShift: number;
  scanlineAmp: number;
  animate: boolean;
  preview: string;
}

const favorites = ref<Preset[]>([]);
const selectedFavoriteIndex = ref<number | null>(null);

const FAVORITES_KEY = 'gradientFavorites';

function loadFavorites() {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) favorites.value = JSON.parse(stored);
  } catch (e) {
    console.error('Failed to parse favorites', e);
  }
}

function persistFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites.value));
}

function currentPreset(): Preset {
  return {
    paletteType: paletteType.value,
    gradientType: gradientType.value,
    angle: angle.value,
    stops: stops.value,
    grain: grain.value,
    blur: blur.value,
    pixelate: pixelate.value,
    shapeType: shapeType.value,
    shapeOpacity: shapeOpacity.value,
    ditheringEnabled: ditheringEnabled.value,
    ditheringStep: ditheringStep.value,
    rgbShift: rgbShift.value,
    scanlineAmp: scanlineAmp.value,
    animate: animate.value,
    preview: generatePreview(),
  };
}

function generatePreview(): string {
  const canvas = canvasRef.value;
  if (!canvas) return '';
  const pw = 120;
  const ph = Math.round((pw * height) / width);
  const temp = document.createElement('canvas');
  temp.width = pw;
  temp.height = ph;
  const tctx = temp.getContext('2d');
  if (!tctx) return '';
  tctx.drawImage(canvas, 0, 0, pw, ph);
  return temp.toDataURL('image/png');
}

function saveFavorite() {
  favorites.value.push(currentPreset());
  persistFavorites();
  selectedFavoriteIndex.value = favorites.value.length - 1;
}

function applyFavorite(idx: number) {
  const p = favorites.value[idx];
  if (!p) return;

  paletteType.value = p.paletteType;
  gradientType.value = p.gradientType;
  angle.value = p.angle;
  stops.value = p.stops;
  grain.value = p.grain;
  blur.value = p.blur;
  pixelate.value = p.pixelate;
  shapeType.value = p.shapeType;
  shapeOpacity.value = p.shapeOpacity;
  ditheringEnabled.value = p.ditheringEnabled;
  ditheringStep.value = p.ditheringStep;
  rgbShift.value = p.rgbShift;
  scanlineAmp.value = p.scanlineAmp;
  animate.value = p.animate;

  drawGradient();
}

function deleteFavorite(idx: number) {
  favorites.value.splice(idx, 1);
  persistFavorites();
  if (selectedFavoriteIndex.value === idx) {
    selectedFavoriteIndex.value = null;
  }
}

// Initial load
loadFavorites();

// Unlock all controls
function unlockAll() {
  Object.keys(locks).forEach(key => {
    (locks as Record<string, boolean>)[key] = false;
  });
}
</script>

<style scoped>
.gradient-tool button:hover {
  opacity: 0.9;
}

.controls input[type='range'] {
  accent-color: #e17055;
}

/* Optional: smoother slider thumb on WebKit */
.controls input[type='range']::-webkit-slider-thumb {
  border-radius: 50%;
}
</style>