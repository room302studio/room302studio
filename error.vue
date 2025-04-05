<template>
  <div class="error-page">
    <div class="psychedelic-background"></div>
    <div class="warping-grid"></div>
    
    <div class="nav-container">
      <SiteNav class="nav-element" />
    </div>
    
    <div class="error-container">
      <div class="error-content">
        <h1 class="error-code">4<span class="zero">0</span>4</h1>
        <p class="error-message">Page not found</p>
        <div class="floating-objects">
          <div class="floating-object obj1"></div>
          <div class="floating-object obj2"></div>
          <div class="floating-object obj3"></div>
        </div>
        <MonoButton @click="handleError" primary large class="home-button">
          Back to Reality
        </MonoButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { clearError } from '#app';

const props = defineProps({
  error: Object
});

function handleError() {
  clearError({ redirect: '/' });
}
</script>

<style scoped>
.error-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-color: rgb(250 250 249);
  color: rgb(28 25 23);
}

@media (prefers-color-scheme: dark) {
  .error-page {
    background-color: rgb(12 10 9);
    color: rgb(245 245 244);
  }
}

.psychedelic-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(225, 112, 85, 0.1), transparent 60%);
  z-index: 0;
  animation: pulse-background 15s ease-in-out infinite alternate;
}

.warping-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(to right, rgba(225, 112, 85, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(225, 112, 85, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  animation: warp-grid 20s ease-in-out infinite alternate;
}

.nav-container {
  position: relative;
  z-index: 10;
  transform-style: preserve-3d;
  perspective: 1000px;
  overflow: visible;
  margin-top: 1rem;
  animation: nav-container-transform 15s ease-in-out infinite alternate;
}

.nav-element {
  position: relative;
  z-index: 10;
  transform-style: preserve-3d;
  transform: rotateX(10deg) rotateY(5deg);
  transition: transform 0.5s ease;
  animation: wild-nav-transform 20s ease-in-out infinite alternate;
}

.error-container {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.error-content {
  text-align: center;
  position: relative;
  animation: content-pulse 8s ease-in-out infinite alternate;
}

.error-code {
  font-size: 12rem;
  font-weight: 200;
  line-height: 1;
  margin-bottom: 0;
  position: relative;
  animation: glitch-text 5s ease-in-out infinite;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.zero {
  display: inline-block;
  animation: rotate-zero 10s linear infinite, color-shift 5s ease-in-out infinite;
}

.error-message {
  font-size: 1.8rem;
  font-style: italic;
  margin-top: 1rem;
  margin-bottom: 3rem;
  animation: message-float 10s ease-in-out infinite alternate;
}

.floating-objects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-object {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
  filter: blur(2px);
}

.obj1 {
  width: 80px;
  height: 80px;
  background: radial-gradient(circle at 30%, #e17055, transparent);
  left: 10%;
  top: 20%;
  animation: float-obj1 20s ease-in-out infinite alternate;
}

.obj2 {
  width: 120px;
  height: 120px;
  background: radial-gradient(circle at 70%, #e17055, transparent);
  right: 15%;
  top: 30%;
  animation: float-obj2 15s ease-in-out infinite alternate-reverse;
}

.obj3 {
  width: 60px;
  height: 60px;
  background: radial-gradient(circle at 50%, #e17055, transparent);
  left: 30%;
  bottom: 20%;
  animation: float-obj3 25s ease-in-out infinite alternate;
}

.home-button {
  position: relative;
  z-index: 100;
  transition: all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  animation: button-throb 3s ease-in-out infinite;
}

.home-button:hover {
  transform: scale(1.1) rotate(1deg) !important;
  box-shadow: 0 0 30px rgba(225, 112, 85, 0.4);
}

/* Animations */
@keyframes warp-grid {
  0% {
    transform: perspective(1000px) rotateX(0deg) scale(1);
    background-size: 50px 50px;
    opacity: 0.3;
  }
  50% {
    background-size: 55px 45px;
    opacity: 0.6;
  }
  100% {
    transform: perspective(1000px) rotateX(10deg) scale(1.1);
    background-size: 45px 55px;
    opacity: 0.2;
  }
}

@keyframes pulse-background {
  0% {
    transform: scale(1);
    opacity: 0.2;
    background: radial-gradient(circle at 30% 30%, rgba(225, 112, 85, 0.2), transparent 70%);
  }
  50% {
    transform: scale(1.2);
    opacity: 0.4;
    background: radial-gradient(circle at 50% 50%, rgba(225, 112, 85, 0.3), transparent 60%);
  }
  100% {
    transform: scale(0.9);
    opacity: 0.1;
    background: radial-gradient(circle at 70% 70%, rgba(225, 112, 85, 0.1), transparent 80%);
  }
}

@keyframes wild-nav-transform {
  0% {
    transform: rotateX(5deg) rotateY(3deg) translateZ(0px) scale(0.98);
    filter: hue-rotate(0deg);
  }
  25% {
    transform: rotateX(-3deg) rotateY(5deg) translateZ(20px) scale(1);
    filter: hue-rotate(15deg);
  }
  50% {
    transform: rotateX(8deg) rotateY(-4deg) translateZ(10px) scale(0.99);
    filter: hue-rotate(0deg);
  }
  75% {
    transform: rotateX(-2deg) rotateY(-7deg) translateZ(15px) scale(1.01);
    filter: hue-rotate(-15deg);
  }
  100% {
    transform: rotateX(6deg) rotateY(2deg) translateZ(5px) scale(0.97);
    filter: hue-rotate(0deg);
  }
}

@keyframes nav-container-transform {
  0% {
    transform: rotateX(0deg) perspective(1000px);
  }
  50% {
    transform: rotateX(5deg) perspective(900px);
  }
  100% {
    transform: rotateX(-3deg) perspective(1100px);
  }
}

@keyframes content-pulse {
  0% {
    transform: scale(1) translateY(0);
  }
  50% {
    transform: scale(1.02) translateY(-5px);
  }
  100% {
    transform: scale(0.98) translateY(5px);
  }
}

@keyframes glitch-text {
  0% {
    text-shadow: 0.05em 0 0 rgba(225, 112, 85, 0.75), -0.05em -0.025em 0 rgba(62, 180, 137, 0.75);
    transform: skew(0deg);
  }
  25% {
    text-shadow: -0.05em -0.025em 0 rgba(225, 112, 85, 0.75), 0.025em 0.025em 0 rgba(62, 180, 137, 0.75);
    transform: skew(0.5deg);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(225, 112, 85, 0.75), -0.05em 0 0 rgba(62, 180, 137, 0.75);
    transform: skew(-0.5deg);
  }
  75% {
    text-shadow: -0.025em 0 0 rgba(225, 112, 85, 0.75), 0.05em -0.025em 0 rgba(62, 180, 137, 0.75);
    transform: skew(0.75deg);
  }
  100% {
    text-shadow: -0.05em -0.025em 0 rgba(225, 112, 85, 0.75), 0.025em 0.05em 0 rgba(62, 180, 137, 0.75);
    transform: skew(-1deg);
  }
}

@keyframes rotate-zero {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

@keyframes color-shift {
  0% {
    color: inherit;
  }
  33% {
    color: #e17055;
  }
  66% {
    color: #3eb489;
  }
  100% {
    color: inherit;
  }
}

@keyframes message-float {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-10px) translateX(5px);
    opacity: 0.9;
  }
  100% {
    transform: translateY(5px) translateX(-8px);
    opacity: 0.6;
  }
}

@keyframes float-obj1 {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  100% {
    transform: translate(100px, 50px) scale(1.5);
    opacity: 0.1;
  }
}

@keyframes float-obj2 {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.2;
  }
  100% {
    transform: translate(-80px, -30px) scale(1.3);
    opacity: 0.4;
  }
}

@keyframes float-obj3 {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.1;
  }
  100% {
    transform: translate(50px, -80px) scale(1.2);
    opacity: 0.3;
  }
}

@keyframes button-throb {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(225, 112, 85, 0);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(225, 112, 85, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(225, 112, 85, 0);
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .error-code {
    font-size: 8rem;
  }
  
  .error-message {
    font-size: 1.4rem;
  }
  
  .obj1, .obj2, .obj3 {
    transform: scale(0.7);
  }
}

/* Optimize animations for reduced motion preference */
@media (prefers-reduced-motion) {
  .psychedelic-background,
  .warping-grid,
  .nav-container,
  .nav-element,
  .error-content,
  .error-code,
  .zero,
  .error-message,
  .obj1, .obj2, .obj3,
  .home-button {
    animation: none;
    transform: none;
    transition: none;
  }
  
  .floating-object {
    display: none;
  }
}
</style> 