<script setup>
// One of EJ's scanned notebook marks (arrows, rings, circled numbers), inline
// and in currentColor so it follows light/dark mode. Geometry comes from
// utils/handDrawnMarks.js (scripts/extract-hand-drawn.py).
import marks from '~/utils/handDrawnMarks.js'

const props = defineProps({
  name: { type: String, required: true },
  // height; number => px, string => any CSS length
  size: { type: [Number, String], default: '1em' },
  // fill the parent box (rings around chips); distorts to fit like a real pen loop
  stretch: { type: Boolean, default: false },
  // wipe the mark in, the way a pen would lay it down
  draw: { type: Boolean, default: false },
  // wipe direction: 'right' for arrows and underlines, 'down' for tall marks
  from: { type: String, default: 'right' },
})

const mark = computed(() => marks[props.name])
const style = computed(() => {
  // stretched marks are sized by the parent's CSS (rings sit outside their box)
  if (props.stretch) return {}
  const [, , w, h] = mark.value.viewBox.split(' ').map(Number)
  const height = typeof props.size === 'number' ? `${props.size}px` : props.size
  return { height, width: `calc(${height} * ${w / h})` }
})
</script>

<template>
  <svg
    v-if="mark"
    class="hand-mark"
    :class="[draw && 'draw', `from-${from}`, stretch && 'stretch']"
    :viewBox="mark.viewBox"
    :style="style"
    :preserveAspectRatio="stretch ? 'none' : 'xMidYMid meet'"
    aria-hidden="true"
    focusable="false"
  >
    <template v-for="(p, i) in mark.paths" :key="i">
      <path v-if="p.stroke" :d="p.d" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
      <path v-else :d="p.d" fill="currentColor" />
    </template>
  </svg>
</template>

<style scoped>
.hand-mark {
  display: inline-block;
  vertical-align: -0.15em;
  overflow: hidden;
  clip-path: inset(0);
}
.hand-mark:where(.stretch) { width: 100%; height: 100%; }
/* the site resets svg to max-width:100%; rings must be allowed past their box */
.hand-mark.stretch { max-width: none; }
/* stretching exposes hairline slivers at the crop edge; trim them */
.hand-mark.stretch { clip-path: inset(2px); }
.draw.from-right { animation: wipe-right 0.45s cubic-bezier(0.3, 0.7, 0.4, 1) both; }
.draw.from-down { animation: wipe-down 0.5s cubic-bezier(0.3, 0.7, 0.4, 1) both; }
@keyframes wipe-right { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0); } }
@keyframes wipe-down { from { clip-path: inset(0 0 100% 0); } to { clip-path: inset(0); } }
.stretch.draw.from-down { animation-name: wipe-down-trim; }
@keyframes wipe-down-trim { from { clip-path: inset(2px 2px 100% 2px); } to { clip-path: inset(2px); } }
@media (prefers-reduced-motion: reduce) {
  .draw { animation: none; }
}
</style>
