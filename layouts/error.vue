<template>
  <div class="error-page">
    <div class="floating-grid"></div>
    <div class="floating-container">
      <SiteNav class="nav-element" />
      
      <div class="content-container">
        <div class="decorative-circle"></div>
        <h1 class="error-title">404</h1>
        <p class="error-message">Looks like this page has floated away...</p>
        
        <div class="button-container">
          <MonoButton 
            to="/" 
            primary 
            large 
            class="home-button"
          >
            Back to Home
          </MonoButton>
        </div>
      </div>
      
      <GlobalFooter class="footer-element" />
    </div>
  </div>
</template>

<script setup>
import { clearError } from '#app';

defineProps({
  error: Object
});

// Reset the error when this component is unmounted
onUnmounted(() => {
  clearError({ redirect: '/' });
});
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: rgb(250 250 249); /* stone-50 */
  color: rgb(28 25 23); /* stone-900 */
}

@media (prefers-color-scheme: dark) {
  .error-page {
    background-color: rgb(12 10 9); /* stone-950 */
    color: rgb(245 245 244); /* stone-100 */
  }
}

.floating-container {
  position: relative;
  width: 100%;
  max-width: 1536px; /* 2xl */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  animation: container-float 20s ease-in-out infinite alternate;
}

.nav-element {
  opacity: 0.4;
  transform: translateY(-20px);
  animation: float-away 15s ease-in-out infinite alternate;
}

.content-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.decorative-circle {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(225, 112, 85, 0.1) 0%, rgba(225, 112, 85, 0) 70%);
  z-index: -1;
  animation: circle-pulse 8s ease-in-out infinite alternate;
}

.error-title {
  font-size: 10rem;
  font-weight: 200;
  margin-bottom: 0;
  line-height: 1;
  transform: translateY(0);
  opacity: 0.7;
  animation: title-float 18s ease-in-out infinite alternate;
  font-family: var(--font-sans);
}

.error-message {
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
  opacity: 0.5;
  transform: translateY(0);
  animation: message-float 15s ease-in-out infinite alternate;
  font-family: var(--font-sans);
}

.button-container {
  z-index: 10;
  position: relative;
  transform: translateY(0);
  animation: button-pulse 3s ease-in-out infinite;
}

.footer-element {
  opacity: 0.4;
  transform: translateY(20px);
  animation: float-away 12s ease-in-out infinite alternate;
}

@keyframes float-away {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(2deg);
    opacity: 0.1;
  }
}

@keyframes title-float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.7;
  }
  100% {
    transform: translateY(-60px) rotate(-3deg);
    opacity: 0.2;
  }
}

@keyframes message-float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.6;
  }
  100% {
    transform: translateY(40px) rotate(1deg);
    opacity: 0.1;
  }
}

@keyframes container-float {
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(-20px) scale(0.98);
  }
}

@keyframes button-pulse {
  0% {
    transform: translateY(0) scale(1);
    box-shadow: 0 0 0 0 rgba(225, 112, 85, 0);
  }
  50% {
    transform: translateY(0) scale(1.03);
    box-shadow: 0 0 30px 2px rgba(225, 112, 85, 0.2);
  }
  100% {
    transform: translateY(0) scale(1);
    box-shadow: 0 0 0 0 rgba(225, 112, 85, 0);
  }
}

@keyframes circle-pulse {
  0% {
    transform: scale(1) translateY(0);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.2) translateY(-10px);
    opacity: 0.4;
  }
  100% {
    transform: scale(0.9) translateY(10px);
    opacity: 0.1;
  }
}

/* Make sure button doesn't float away */
.home-button {
  position: relative;
  z-index: 100;
  transition: all 0.3s ease-in-out !important;
  transform: scale(1) !important;
}

.home-button:hover {
  transform: scale(1.05) !important;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .error-title {
    font-size: 6rem;
  }
  
  .error-message {
    font-size: 1.2rem;
  }
}

.floating-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(to right, rgba(128, 128, 128, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(128, 128, 128, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  opacity: 0.7;
  animation: grid-float 25s linear infinite alternate;
}

@keyframes grid-float {
  0% {
    transform: translateX(0) translateY(0) scale(1);
    background-size: 50px 50px;
  }
  100% {
    transform: translateX(20px) translateY(-20px) scale(1.05);
    background-size: 48px 48px;
  }
}

/* Optimize animations for reduced motion preference */
@media (prefers-reduced-motion) {
  .floating-container,
  .nav-element,
  .footer-element,
  .error-title,
  .error-message,
  .button-container,
  .floating-grid,
  .decorative-circle {
    animation: none;
    transform: none;
  }
  
  .nav-element,
  .footer-element {
    opacity: 0.8;
  }
}
</style> 