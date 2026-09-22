export default defineAppConfig({
  ui: {
    primary: "orange",
    gray: "stone",
    button: {
      color: {
        // Nuxt UI's solid preset uses white text in light mode, which is only
        // 2.8:1 on our orange-500 — below the 3:1 minimum for 18px text. Dark
        // mode already uses dark text (and passes), so this brings light mode
        // in line at 6.7:1. The orange itself is untouched.
        primary: {
          solid:
            "shadow-sm text-stone-900 dark:text-stone-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 aria-disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 dark:aria-disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400",
        },
      },
    },
  },
});
