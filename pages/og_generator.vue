# Create a new page for generating OG images
<template>
  <div class="min-h-screen p-8">
    <h1 class="text-2xl mb-8 font-mono">OG Image Generator</h1>

    <!-- Controls -->
    <div class="mb-8 space-y-6">
      <div>
        <label class="block text-sm font-mono mb-2">Page</label>
        <select v-model="currentPage" class="bg-stone-100 dark:bg-stone-800 px-4 py-2 rounded-lg font-mono">
          <option v-for="page in pages" :key="page" :value="page">{{ page }}</option>
        </select>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-mono mb-2">Background</label>
          <div class="flex gap-3 flex-wrap">
            <div @click="useColor('black')" class="h-10 w-10 bg-black cursor-pointer rounded-md"
              :class="{ 'ring-2 ring-primary-500': currentBackground === 'black' }"></div>
            <div @click="useColor('orange')" class="h-10 w-10 bg-primary-500 cursor-pointer rounded-md"
              :class="{ 'ring-2 ring-primary-500': currentBackground === 'orange' }"></div>
            <div @click="useColor('gradient')"
              class="h-10 w-10 bg-gradient-to-r from-black to-primary-500 cursor-pointer rounded-md"
              :class="{ 'ring-2 ring-primary-500': currentBackground === 'gradient' }"></div>
            <div @click="useColor('dark')" class="h-10 w-10 bg-stone-800 cursor-pointer rounded-md"
              :class="{ 'ring-2 ring-primary-500': currentBackground === 'dark' }"></div>
            <div @click="useColor('orange-white')"
              class="h-10 w-10 bg-gradient-to-r from-primary-500 to-white cursor-pointer rounded-md"
              :class="{ 'ring-2 ring-primary-500': currentBackground === 'orange-white' }"></div>
            <div @click="useColor('black-white')"
              class="h-10 w-10 bg-gradient-to-r from-black to-white cursor-pointer rounded-md"
              :class="{ 'ring-2 ring-primary-500': currentBackground === 'black-white' }"></div>
            <div @click="useColor('orange-complement')"
              class="h-10 w-10 bg-gradient-to-r from-primary-500 to-cyan-500 cursor-pointer rounded-md"
              :class="{ 'ring-2 ring-primary-500': currentBackground === 'orange-complement' }"></div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-mono mb-2">Dots: {{ numDots }}</label>
          <input type="range" v-model.number="numDots" min="0" max="800" step="50"
            class="w-full bg-stone-100 dark:bg-stone-800" @change="generateDots">
        </div>
      </div>

      <div>
        <label class="block text-sm font-mono mb-2">Glow Intensity: {{ glowIntensity.toFixed(1) }}</label>
        <input type="range" v-model.number="glowIntensity" min="0.1" max="1.5" step="0.1"
          class="w-full bg-stone-100 dark:bg-stone-800" @change="generateDots">
      </div>
    </div>

    <!-- Preview -->
    <div ref="previewContainer" class="mb-8 overflow-hidden">
      <div ref="preview" class="og-preview" :style="previewStyle">
        <div class="content">
          <img src="/room302-logo.svg" alt="Room 302 Studio" class="logo" />
          <div class="dots">
            <div v-for="(dot, i) in dots" :key="i" class="dot" :style="{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              opacity: dot.opacity,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              boxShadow: `0 0 ${dot.size * 2}px rgba(255, 255, 255, ${dot.glowIntensity})`
            }" />
          </div>
          <div class="text-container">
            <h1 class="title">{{ currentPage }}</h1>
            <p class="description">{{ currentDescription }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="space-x-4">
      <button @click="downloadImage"
        class="bg-primary-500 text-white px-6 py-3 rounded-lg font-mono hover:bg-primary-600 transition-colors">
        Download Image
      </button>
      <button @click="generateDots"
        class="bg-stone-200 dark:bg-stone-800 px-6 py-3 rounded-lg font-mono hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors">
        Regenerate Dots
      </button>
      <button @click="randomizeGradient" v-if="isGradientBackground"
        class="bg-stone-200 dark:bg-stone-800 px-6 py-3 rounded-lg font-mono hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors">
        Randomize Gradient
      </button>
    </div>
  </div>
</template>

<script setup>
import html2canvas from 'html2canvas'
import { createNoise2D } from 'simplex-noise'

const pages = ['Room 302 Studio', 'Innovation Services', 'Our Work', 'Journal', 'Contact Us', 'R&D Lab']
const currentPage = ref('Room 302 Studio')
const preview = ref(null)
const previewContainer = ref(null)
const dots = ref([])
const numDots = ref(300)
const currentBackground = ref('black')
const glowIntensity = ref(0.8)
const gradientAngle = ref(135)

const backgrounds = {
  black: {
    background: '#1c1917'
  },
  orange: {
    background: '#e17055'
  },
  gradient: {
    get background() {
      return `linear-gradient(${gradientAngle.value}deg, #1c1917, #e17055)`
    }
  },
  dark: {
    background: '#292524'
  },
  'orange-white': {
    get background() {
      return `linear-gradient(${gradientAngle.value}deg, #e17055, #ffffff)`
    }
  },
  'black-white': {
    get background() {
      return `linear-gradient(${gradientAngle.value}deg, #1c1917, #ffffff)`
    }
  },
  'orange-complement': {
    get background() {
      return `linear-gradient(${gradientAngle.value}deg, #e17055, #55a7e1)`
    }
  }
}

const pageDescriptions = {
  'Room 302 Studio': 'We are an innovation lab that turns concepts into reality.',
  'Innovation Services': 'We help you see the future by exploring possibilities, nurturing ideas, and bringing them to life with care and expertise.',
  'Our Work': 'Explore our portfolio of digital experiences and data visualizations.',
  'Journal': 'Thoughts, processes, and ideas from Room 302 Studio.',
  'Contact Us': 'Get in touch with Room 302 Studio. Email us to start a conversation about your project.',
  'R&D Lab': 'Explore our experimental digital workbench with videos, prototypes, and visual explorations.'
}

const currentDescription = computed(() => pageDescriptions[currentPage.value] || '')

const useColor = (color) => {
  currentBackground.value = color
}

const previewStyle = computed(() => backgrounds[currentBackground.value])

const randomizeGradient = () => {
  gradientAngle.value = Math.floor(Math.random() * 360)
  generateDots()
}

// Generate dots with a clean, minimal approach
const generateDots = () => {
  const noise2D = createNoise2D()

  dots.value = Array.from({ length: numDots.value }, () => {
    // Position with some noise influence for organic feel
    let x = Math.random() * 100
    let y = Math.random() * 100

    // Add subtle noise-based variation
    const noiseVal = noise2D(x * 0.01, y * 0.01)
    x += noiseVal * 3
    y += noiseVal * 3

    // Keep within bounds
    x = Math.max(0, Math.min(100, x))
    y = Math.max(0, Math.min(100, y))

    return {
      x,
      y,
      opacity: 0.1 + Math.random() * 0.4,
      size: 1 + Math.random() * 2,
      glowIntensity: (0.3 + Math.random() * 0.5) * glowIntensity.value
    }
  })
}

const downloadImage = async () => {
  if (!preview.value) return

  try {
    // First, make sure the preview is at 100% scale for capture
    const originalTransform = preview.value.style.transform
    preview.value.style.transform = 'scale(1)'

    // For gradient backgrounds, we need to ensure we're passing a valid background color
    let bgColor = '#000000'
    if (currentBackground.value === 'black') {
      bgColor = '#1c1917'
    } else if (currentBackground.value === 'orange') {
      bgColor = '#e17055'
    } else if (currentBackground.value === 'dark') {
      bgColor = '#292524'
    }

    const canvas = await html2canvas(preview.value, {
      width: 1200,
      height: 630,
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: bgColor,
      logging: false,
      onclone: (clonedDoc) => {
        // Make sure the cloned element maintains the background
        const clonedPreview = clonedDoc.querySelector('.og-preview')
        if (clonedPreview) {
          // Apply inline style to ensure background is captured
          if (typeof backgrounds[currentBackground.value].background === 'string') {
            clonedPreview.style.background = backgrounds[currentBackground.value].background
          } else {
            // For getter backgrounds (gradients)
            clonedPreview.style.background = backgrounds[currentBackground.value].background
          }
        }
      }
    })

    // Restore original transform
    preview.value.style.transform = originalTransform

    const link = document.createElement('a')
    link.download = `${currentPage.value.toLowerCase().replace(/\s+/g, '-')}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  } catch (error) {
    console.error('Error generating image:', error)
    alert('There was an error generating the image. Please try again.')
  }
}

// Generate dot positions on mount
onMounted(() => {
  generateDots()
})

// Display the randomize gradient button for all gradient backgrounds
const isGradientBackground = computed(() =>
  ['gradient', 'orange-white', 'black-white', 'orange-complement'].includes(currentBackground.value)
)
</script>

<style scoped>
.og-preview {
  width: 1200px;
  height: 630px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-sizing: border-box;
  transform-origin: top left;
  transform: scale(0.5);
  position: relative;
  overflow: hidden;
}

.content {
  text-align: center;
  padding: 0 48px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  z-index: 2;
}

.dots {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: 1;
}

.dot {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  opacity: 0.15;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
}

.logo {
  width: 80px;
  height: auto;
  opacity: 0.15;
  position: absolute;
  top: 48px;
  left: 48px;
  transform: none;
  z-index: 2;
  filter: brightness(0) invert(1);
}

.text-container {
  text-align: center;
  max-width: 900px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.title {
  font-family: 'Fraunces', serif;
  font-size: 100px;
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0;
}

.description {
  font-family: 'Fraunces', serif;
  font-size: 32px;
  font-weight: 300;
  line-height: 1.4;
  opacity: 0.8;
  max-width: 720px;
  margin: 0 auto;
}
</style>