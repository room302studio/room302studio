<template>
  <div class="tufte-annotation" :class="{ 'right-aligned': rightAligned, 'with-line': withLine }">
    <div class="annotation-content">
      <div v-if="label" class="annotation-label">{{ label }}</div>
      <div v-if="value" class="annotation-value">{{ value }}</div>
      <div v-if="description" class="annotation-description">{{ description }}</div>
      <slot></slot>
    </div>
    <div v-if="withLine" class="annotation-line"></div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  rightAligned: {
    type: Boolean,
    default: false
  },
  withLine: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped>
.tufte-annotation {
  position: relative;
  margin: 1.5rem 0;
  font-family: 'IBM Plex Sans', sans-serif;
  line-height: 1.6;
}

.annotation-content {
  position: relative;
  max-width: 240px;
}

.annotation-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-primary-500, #3b82f6);
  margin-bottom: 0.25rem;
  font-weight: 500;
  font-family: var(--font-mono);
}

.annotation-value {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  color: var(--color-stone-800, #292524);
  font-family: var(--font-mono);
  letter-spacing: -0.02em;
}

.dark .annotation-value {
  color: var(--color-stone-200, #e7e5e4);
}

.annotation-description {
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--color-stone-600, #57534e);
  font-weight: 400;
  font-family: var(--font-sans);
}

.dark .annotation-description {
  color: var(--color-stone-400, #a8a29e);
}

.annotation-line {
  position: absolute;
  top: 50%;
  width: 40px;
  height: 1px;
  background-color: var(--color-stone-300, #d6d3d1);
}

.dark .annotation-line {
  background-color: var(--color-stone-700, #44403c);
}

.tufte-annotation:not(.right-aligned) .annotation-line {
  right: -50px;
}

.tufte-annotation.right-aligned .annotation-line {
  left: -50px;
}

.tufte-annotation.right-aligned {
  text-align: right;
}

@media (max-width: 768px) {
  .tufte-annotation {
    margin: 1rem 0;
  }

  .annotation-content {
    max-width: 100%;
  }

  .annotation-line {
    display: none;
  }
}
</style>