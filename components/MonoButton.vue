<template>
  <NuxtLink v-if="to" :to="to" :class="[
    'btn-mono inline-flex items-center justify-center',
    'px-4 py-2 rounded-md transition-all duration-300 font-medium',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
    primary ? 'bg-primary-500 text-white hover:bg-primary-600' :
      'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700',
    subtle ? 'bg-transparent border border-stone-200 dark:border-stone-700' : '',
    large ? 'text-base md:text-lg px-5 py-3' : 'text-sm',
    block ? 'w-full' : '',
    className
  ]">
    <slot></slot>
  </NuxtLink>

  <button v-else type="button" :class="[
    'btn-mono inline-flex items-center justify-center',
    'px-4 py-2 rounded-md transition-all duration-300 font-medium',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
    primary ? 'bg-primary-500 text-white hover:bg-primary-600' :
      'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700',
    subtle ? 'bg-transparent border border-stone-200 dark:border-stone-700' : '',
    large ? 'text-base md:text-lg px-5 py-3' : 'text-sm',
    block ? 'w-full' : '',
    className
  ]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    default: '',
  },
  primary: {
    type: Boolean,
    default: false,
  },
  subtle: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
});

defineEmits(['click']);
</script>

<style scoped>
.btn-mono {
  font-family: var(--font-mono);
  letter-spacing: -0.01em;
  position: relative;
  overflow: hidden;
}

.btn-mono::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.btn-mono:hover::after {
  opacity: 0.3;
}
</style>