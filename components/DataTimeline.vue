<template>
  <div class="data-timeline" :class="{ 'dark-mode': isDarkMode }">
    <!-- Main timeline track -->
    <div class="timeline-track">
      <div class="timeline-progress" :style="{ width: `${progress}%` }"></div>
    </div>

    <!-- Timeline nodes -->
    <div class="timeline-nodes">
      <div v-for="(node, index) in nodes" :key="index" class="timeline-node"
        :class="{ 'active': activeNodeIndex >= index, 'current': activeNodeIndex === index }"
        :style="{ left: `${node.position}%` }" @click="$emit('node-click', index)">
        <div class="node-marker">
          <div class="node-inner"></div>
        </div>
        <div class="node-label" :class="{ 'above': index % 2 === 0 }">
          {{ node.label }}
        </div>
        <div v-if="node.data && showData" class="node-data" :class="{ 'above': index % 2 !== 0 }">
          <div class="data-value">{{ node.data.value }}</div>
          <div class="data-label">{{ node.data.label }}</div>
        </div>
      </div>
    </div>

    <!-- Annotations -->
    <div v-if="annotations && annotations.length > 0" class="timeline-annotations">
      <div v-for="(annotation, index) in annotations" :key="`annotation-${index}`" class="timeline-annotation"
        :style="{ left: `${annotation.position}%` }" :class="{ 'above': annotation.above }">
        <div class="annotation-line"></div>
        <div class="annotation-content">
          <div v-if="annotation.label" class="annotation-label">{{ annotation.label }}</div>
          <div v-if="annotation.value" class="annotation-value">{{ annotation.value }}</div>
          <div v-if="annotation.description" class="annotation-description">{{ annotation.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  nodes: {
    type: Array,
    required: true
  },
  activeNodeIndex: {
    type: Number,
    default: -1
  },
  progress: {
    type: Number,
    default: 0
  },
  annotations: {
    type: Array,
    default: () => []
  },
  showData: {
    type: Boolean,
    default: true
  },
  isDarkMode: {
    type: Boolean,
    default: false
  }
});

defineEmits(['node-click']);
</script>

<style scoped>
.data-timeline {
  position: relative;
  width: 100%;
  padding: 60px 0;
  --primary-color: var(--color-primary-500, #3b82f6);
  --secondary-color: var(--color-primary-300, #93c5fd);
  --track-color: var(--color-stone-200, #e7e5e4);
  --progress-color: var(--color-primary-500, #3b82f6);
  --text-color: var(--color-stone-800, #292524);
  --text-secondary: var(--color-stone-600, #57534e);
  --node-size: 12px;
  --node-inner-size: 4px;
  --active-node-size: 16px;
  --active-node-inner-size: 6px;
  --current-node-size: 20px;
  --current-node-inner-size: 8px;
}

.data-timeline.dark-mode {
  --track-color: var(--color-stone-700, #44403c);
  --text-color: var(--color-stone-200, #e7e5e4);
  --text-secondary: var(--color-stone-400, #a8a29e);
}

/* Timeline track */
.timeline-track {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--track-color);
  z-index: 1;
}

.timeline-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: var(--progress-color);
  transition: width 0.5s ease;
  z-index: 2;
}

/* Timeline nodes */
.timeline-nodes {
  position: relative;
  width: 100%;
  height: 120px;
}

.timeline-node {
  position: absolute;
  top: 60px;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 3;
}

.node-marker {
  width: var(--node-size);
  height: var(--node-size);
  border-radius: 50%;
  border: 1px solid var(--track-color);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.dark-mode .node-marker {
  background-color: var(--color-stone-900, #1c1917);
}

.node-inner {
  width: var(--node-inner-size);
  height: var(--node-inner-size);
  border-radius: 50%;
  background-color: var(--track-color);
  transition: all 0.3s ease;
}

.timeline-node.active .node-marker {
  width: var(--active-node-size);
  height: var(--active-node-size);
  border-color: var(--primary-color);
}

.timeline-node.active .node-inner {
  width: var(--active-node-inner-size);
  height: var(--active-node-inner-size);
  background-color: var(--primary-color);
}

.timeline-node.current .node-marker {
  width: var(--current-node-size);
  height: var(--current-node-size);
  border-color: var(--primary-color);
  border-width: 2px;
}

.timeline-node.current .node-inner {
  width: var(--current-node-inner-size);
  height: var(--current-node-inner-size);
  background-color: var(--primary-color);
}

/* Node labels */
.node-label {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-color);
  transition: all 0.3s ease;
  text-align: center;
  width: max-content;
  max-width: 120px;
}

.node-label.above {
  bottom: calc(var(--node-size) + 12px);
}

.node-label:not(.above) {
  top: calc(var(--node-size) + 12px);
}

.timeline-node.active .node-label {
  color: var(--primary-color);
}

/* Node data */
.node-data {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: var(--text-secondary);
  opacity: 0;
  transition: all 0.3s ease;
  text-align: center;
  width: max-content;
  max-width: 120px;
}

.node-data.above {
  bottom: calc(var(--node-size) + 40px);
}

.node-data:not(.above) {
  top: calc(var(--node-size) + 40px);
}

.timeline-node.active .node-data {
  opacity: 1;
}

.data-value {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--primary-color);
}

.data-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

/* Annotations */
.timeline-annotations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.timeline-annotation {
  position: absolute;
  transform: translateX(-50%);
  width: 180px;
}

.timeline-annotation.above {
  top: 0;
}

.timeline-annotation:not(.above) {
  bottom: 0;
}

.annotation-line {
  position: absolute;
  width: 1px;
  background-color: var(--track-color);
  left: 50%;
  transform: translateX(-50%);
}

.timeline-annotation.above .annotation-line {
  top: 20px;
  height: 40px;
}

.timeline-annotation:not(.above) .annotation-line {
  bottom: 20px;
  height: 40px;
}

.annotation-content {
  position: relative;
  padding: 0 10px;
}

.timeline-annotation.above .annotation-content {
  margin-top: 0;
}

.timeline-annotation:not(.above) .annotation-content {
  margin-bottom: 0;
}

.annotation-label {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
}

.annotation-value {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 0.25rem;
  color: var(--text-color);
}

.annotation-description {
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--text-secondary);
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .data-timeline {
    padding: 40px 0;
  }

  .timeline-track {
    top: 40px;
  }

  .timeline-nodes {
    height: 100px;
  }

  .timeline-node {
    top: 40px;
  }

  .node-label {
    font-size: 0.75rem;
    max-width: 80px;
  }

  .node-data {
    display: none;
  }

  .timeline-annotation {
    width: 120px;
  }

  .annotation-value {
    font-size: 0.875rem;
  }

  .annotation-description {
    font-size: 0.75rem;
  }
}
</style>