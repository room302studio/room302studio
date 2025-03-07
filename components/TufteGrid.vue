<template>
  <div class="tufte-grid" :style="gridStyle">
    <div v-for="(cell, index) in cells" :key="index" class="grid-cell" :class="{
      'highlighted': highlightedCells.includes(index),
      'emphasized': emphasizedCells.includes(index)
    }" :style="getCellStyle(cell, index)"></div>

    <div v-if="showAxisLabels" class="axis-labels">
      <div v-for="(label, index) in xAxisLabels" :key="`x-${index}`" class="x-axis-label"
        :style="{ left: `${(index / (xAxisLabels.length - 1)) * 100}%` }">
        {{ label }}
      </div>
      <div v-for="(label, index) in yAxisLabels" :key="`y-${index}`" class="y-axis-label"
        :style="{ bottom: `${(index / (yAxisLabels.length - 1)) * 100}%` }">
        {{ label }}
      </div>
    </div>

    <div v-if="caption" class="grid-caption">
      {{ caption }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  rows: {
    type: Number,
    default: 10
  },
  columns: {
    type: Number,
    default: 20
  },
  cellSize: {
    type: Number,
    default: 8
  },
  gap: {
    type: Number,
    default: 2
  },
  highlightedCells: {
    type: Array,
    default: () => []
  },
  emphasizedCells: {
    type: Array,
    default: () => []
  },
  cellData: {
    type: Array,
    default: () => []
  },
  showAxisLabels: {
    type: Boolean,
    default: false
  },
  xAxisLabels: {
    type: Array,
    default: () => []
  },
  yAxisLabels: {
    type: Array,
    default: () => []
  },
  caption: {
    type: String,
    default: ''
  },
  aspectRatio: {
    type: String,
    default: 'auto'
  }
});

const gridStyle = computed(() => {
  return {
    '--columns': props.columns,
    '--rows': props.rows,
    '--cell-size': `${props.cellSize}px`,
    '--gap': `${props.gap}px`,
    '--aspect-ratio': props.aspectRatio
  };
});

const cells = computed(() => {
  const totalCells = props.rows * props.columns;

  // If cellData is provided, use it
  if (props.cellData.length > 0) {
    return props.cellData;
  }

  // Otherwise generate default cells
  return Array.from({ length: totalCells }, (_, i) => ({
    opacity: Math.random() * 0.5 + 0.1,
    color: null
  }));
});

function getCellStyle(cell, index) {
  const baseStyle = {
    '--opacity': cell.opacity || 0.2,
    '--delay': `${index * 0.001}s`
  };

  if (cell.color) {
    baseStyle['--cell-color'] = cell.color;
  }

  return baseStyle;
}
</script>

<style scoped>
.tufte-grid {
  display: grid;
  grid-template-columns: repeat(var(--columns), var(--cell-size));
  grid-template-rows: repeat(var(--rows), var(--cell-size));
  gap: var(--gap);
  width: fit-content;
  position: relative;
  padding-bottom: 1.5rem;
  aspect-ratio: var(--aspect-ratio);
}

.grid-cell {
  width: var(--cell-size);
  height: var(--cell-size);
  background-color: var(--cell-color, var(--color-primary-500, #3b82f6));
  opacity: var(--opacity);
  border-radius: 1px;
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

.grid-cell.highlighted {
  opacity: 0.8;
  transform: scale(1.2);
  z-index: 2;
}

.grid-cell.emphasized {
  opacity: 1;
  background-color: var(--color-primary-300, #93c5fd);
}

.axis-labels {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.x-axis-label {
  position: absolute;
  bottom: -20px;
  transform: translateX(-50%);
  font-size: 0.625rem;
  color: var(--color-stone-500, #78716c);
  text-align: center;
}

.y-axis-label {
  position: absolute;
  left: -25px;
  transform: translateY(50%);
  font-size: 0.625rem;
  color: var(--color-stone-500, #78716c);
  text-align: right;
}

.grid-caption {
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 100%;
  font-size: 0.75rem;
  color: var(--color-stone-600, #57534e);
  font-style: italic;
  text-align: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: var(--opacity);
  }
}

@media (max-width: 768px) {
  .tufte-grid {
    --cell-size: 6px;
    --gap: 1px;
  }

  .x-axis-label,
  .y-axis-label {
    font-size: 0.5rem;
  }

  .x-axis-label {
    bottom: -15px;
  }

  .y-axis-label {
    left: -20px;
  }

  .grid-caption {
    bottom: -25px;
    font-size: 0.625rem;
  }
}
</style>