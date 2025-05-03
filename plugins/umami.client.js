export default defineNuxtPlugin(() => {
  const script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.dataset.websiteId = "7b6c928e-a893-4042-8cf1-47479b5e6864";
  script.src = "https://umami.tools.ejfox.com/script.js";
  document.head.appendChild(script);
});
