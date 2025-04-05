<template>
  <div class="data-viz-component" :class="type">
    <!-- Grid visualization -->
    <div v-if="type === 'grid'" class="grid-viz" :style="{ '--columns': columns, '--rows': rows }">
      <div v-for="(item, index) in totalItems" :key="index" class="grid-item"
        :class="{ 'highlighted': highlightedItems.includes(index) }" :style="{
          '--delay': `${index * 0.01}s`,
          '--opacity': item.opacity || (Math.random() * 0.5 + 0.5)
        }"></div>
    </div>

    <!-- Line chart visualization -->
    <div v-else-if="type === 'line'" class="line-viz">
      <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
        <!-- Grid lines -->
        <line v-for="i in gridLines" :key="`h-${i}`" x1="0" :x2="width" :y1="i * (height / gridLines)"
          :y2="i * (height / gridLines)" class="grid-line" />

        <!-- Data line -->
        <path :d="linePath" class="data-line" fill="none" />

        <!-- Data points -->
        <circle v-for="(point, index) in dataPoints" :key="index" :cx="point.x" :cy="point.y" r="3" class="data-point"
          :style="{ '--delay': `${index * 0.1}s` }" />
      </svg>
    </div>

    <!-- Bar chart visualization -->
    <div v-else-if="type === 'bar'" class="bar-viz" :style="{ '--bar-count': dataPoints.length }">
      <div v-for="(point, index) in dataPoints" :key="index" class="bar-item" :style="{
        '--height': `${point.value}%`,
        '--delay': `${index * 0.05}s`
      }">
        <span class="bar-label" v-if="showLabels">{{ point.label }}</span>
      </div>
    </div>

    <!-- Minimal scatter plot -->
    <div v-else-if="type === 'scatter'" class="scatter-viz"
      :style="{ '--width': width + 'px', '--height': height + 'px' }">
      <div v-for="(point, index) in dataPoints" :key="index" class="scatter-point" :style="{
        '--x': `${point.x}%`,
        '--y': `${point.y}%`,
        '--size': `${point.size || 6}px`,
        '--delay': `${index * 0.03}s`,
        '--opacity': point.opacity || 0.8
      }"></div>
    </div>

    <!-- Tufte-inspired sparkline -->
    <div v-else-if="type === 'sparkline'" class="sparkline-viz">
      <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
        <path :d="linePath" class="sparkline-path" fill="none" />
        <circle v-if="highlightPoint >= 0 && dataPoints[highlightPoint]" :cx="dataPoints[highlightPoint].x"
          :cy="dataPoints[highlightPoint].y" r="2" class="sparkline-highlight" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'grid',
    validator: (value) => ['grid', 'line', 'bar', 'scatter', 'sparkline'].includes(value)
  },
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Number,
    default: 10
  },
  rows: {
    type: Number,
    default: 5
  },
  width: {
    type: Number,
    default: 200
  },
  height: {
    type: Number,
    default: 60
  },
  gridLines: {
    type: Number,
    default: 4
  },
  highlightedItems: {
    type: Array,
    default: () => []
  },
  highlightPoint: {
    type: Number,
    default: -1
  },
  showLabels: {
    type: Boolean,
    default: false
  }
});

// Total items for grid visualization
const totalItems = computed(() => {
  if (props.type === 'grid') {
    const total = props.columns * props.rows;
    return Array.from({ length: total }, (_, i) => ({
      id: i,
      opacity: Math.random() * 0.5 + 0.5
    }));
  }
  return [];
});

// Computed data points for line/bar/scatter visualizations
const dataPoints = computed(() => {
  if (props.type === 'line' || props.type === 'sparkline') {
    // For line charts, convert data to x,y coordinates
    return props.data.map((point, index) => ({
      x: (index / (props.data.length - 1)) * props.width,
      y: props.height - (point.value / 100) * props.height
    }));
  } else if (props.type === 'bar') {
    // For bar charts, just pass through the data
    return props.data;
  } else if (props.type === 'scatter') {
    // For scatter plots, use the data directly
    return props.data;
  }
  return [];
});

// Generate SVG path for line chart
const linePath = computed(() => {
  if ((props.type === 'line' || props.type === 'sparkline') && dataPoints.value.length > 0) {
    return dataPoints.value.reduce((path, point, index) => {
      return path + (index === 0 ? `M ${point.x},${point.y}` : ` L ${point.x},${point.y}`);
    }, '');
  }
  return '';
});
</script>

<style scoped>
/* Base styles */
.data-viz-component {
  font-family: 'IBM Plex Sans', sans-serif;
  --primary-color: var(--color-primary-500, #3b82f6);
  --secondary-color: var(--color-primary-300, #93c5fd);
  --grid-color: rgba(120, 120, 120, 0.1);
  --text-color: rgba(120, 120, 120, 0.8);
}

/* Grid visualization */
.grid-viz {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
  gap: 4px;
  width: 100%;
}

.grid-item {
  aspect-ratio: 1;
  background-color: var(--primary-color);
  opacity: var(--opacity, 0.6);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: var(--delay, 0s);
  opacity: 0;
}

.grid-item.highlighted {
  opacity: 1;
  transform: scale(1.1);
  background-color: var(--secondary-color);
}

/* Line chart visualization */
.line-viz {
  width: 100%;
  position: relative;
}

.grid-line {
  stroke: var(--grid-color);
  stroke-width: 1;
  stroke-dasharray: 4 4;
}

.data-line {
  stroke: var(--primary-color);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: drawLine 1.5s ease forwards;
}

.data-point {
  fill: var(--primary-color);
  animation: fadeIn 0.5s ease forwards;
  animation-delay: var(--delay, 0s);
  opacity: 0;
}

/* Bar chart visualization */
.bar-viz {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  gap: 4px;
}

.bar-item {
  flex: 1;
  height: var(--height, 50%);
  background-color: var(--primary-color);
  opacity: 0.8;
  border-radius: 2px 2px 0 0;
  position: relative;
  animation: growUp 1s ease forwards;
  animation-delay: var(--delay, 0s);
  transform-origin: bottom;
  transform: scaleY(0);
}

.bar-label {
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 10px;
  color: var(--text-color);
}

/* Scatter plot */
.scatter-viz {
  position: relative;
  width: var(--width, 100%);
  height: var(--height, 200px);
}

.scatter-point {
  position: absolute;
  width: var(--size, 6px);
  height: var(--size, 6px);
  border-radius: 50%;
  background-color: var(--primary-color);
  opacity: var(--opacity, 0.8);
  left: var(--x, 50%);
  top: var(--y, 50%);
  transform: translate(-50%, -50%) scale(0);
  animation: popIn 0.5s ease forwards;
  animation-delay: var(--delay, 0s);
}

/* Sparkline (Tufte-inspired) */
.sparkline-viz {
  width: 100%;
  height: 100%;
}

.sparkline-path {
  stroke: var(--primary-color);
  stroke-width: 1.5;
  animation: drawLine 1.5s ease forwards;
}

.sparkline-highlight {
  fill: var(--secondary-color);
  stroke: var(--primary-color);
  stroke-width: 1;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: var(--opacity, 0.8);
  }
}

@keyframes drawLine {
  from {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }

  to {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
  }
}

@keyframes growUp {
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
}

@keyframes popIn {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }

  70% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: var(--opacity, 0.8);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: var(--opacity, 0.8);
  }
}

.data-viz-title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
</style>