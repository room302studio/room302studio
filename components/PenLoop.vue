<script setup>
// A loop "drawn" around something by hand, generated rather than scanned:
// a slightly wobbly, tilted ellipse that overshoots where it started, like a
// pen circling an answer. Seeded, so each label gets its own loop and it never
// changes between renders. Stroke stays a fixed pixel weight at any size
// (non-scaling stroke), so it can sit at the same weight as the text.
const props = defineProps({
  seed: { type: String, default: 'room302' },
  weight: { type: Number, default: 1.5 }, // px
  draw: { type: Boolean, default: false },
})

function rng(str) {
  let h = 2166136261
  for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return ((h ^= h >>> 16) >>> 0) / 4294967296
  }
}

const d = computed(() => {
  const r = rng(props.seed)
  const W = 200, H = 100, cx = 100, cy = 50, rx = 94, ry = 44
  const start = -2.5 + r() * 0.5            // begin upper-left, like most people
  const sweep = Math.PI * 2 + 0.45 + r() * 0.35 // go round and overshoot the start
  const tilt = (r() - 0.5) * 0.09           // a few degrees off level
  const drift = 0.04 + r() * 0.05           // the second pass lands a bit outside
  const p1 = r() * 6.28, p2 = r() * 6.28, a1 = 0.025 + r() * 0.02, a2 = 0.015 + r() * 0.015
  const N = 44
  const pts = []
  for (let i = 0; i <= N; i++) {
    const t = i / N
    const th = start + sweep * t
    const k = 1 + a1 * Math.sin(2 * th + p1) + a2 * Math.sin(3 * th + p2) + drift * t * t
    let x = Math.cos(th) * rx * k, y = Math.sin(th) * ry * k
    ;[x, y] = [x * Math.cos(tilt) - y * Math.sin(tilt), x * Math.sin(tilt) + y * Math.cos(tilt)]
    pts.push([cx + x, cy + y])
  }
  // Catmull-Rom through the points, as cubic Béziers
  let path = `M${pts[0][0].toFixed(2)},${pts[0][1].toFixed(2)}`
  for (let i = 0; i < pts.length - 1; i++) {
    const [p0, p1_, p2_, p3] = [pts[i - 1] || pts[i], pts[i], pts[i + 1], pts[i + 2] || pts[i + 1]]
    const c1 = [p1_[0] + (p2_[0] - p0[0]) / 6, p1_[1] + (p2_[1] - p0[1]) / 6]
    const c2 = [p2_[0] - (p3[0] - p1_[0]) / 6, p2_[1] - (p3[1] - p1_[1]) / 6]
    path += `C${c1[0].toFixed(2)},${c1[1].toFixed(2)} ${c2[0].toFixed(2)},${c2[1].toFixed(2)} ${p2_[0].toFixed(2)},${p2_[1].toFixed(2)}`
  }
  return path
})
</script>

<template>
  <svg class="pen-loop" :class="{ draw }" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <path :d="d" pathLength="1" fill="none" stroke="currentColor" :stroke-width="weight" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
  </svg>
</template>

<style scoped>
.pen-loop { display: block; max-width: none; overflow: visible; }
.draw path { stroke-dasharray: 1; stroke-dashoffset: 1; animation: pen 0.55s cubic-bezier(0.35, 0.6, 0.3, 1) forwards; }
@keyframes pen { to { stroke-dashoffset: 0; } }
@media (prefers-reduced-motion: reduce) {
  .draw path { animation: none; stroke-dashoffset: 0; }
}
</style>
