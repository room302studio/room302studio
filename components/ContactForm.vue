<template>
  <div>
    <div class="bg-white my-16 p-2 md:p-4 md:px-8 rounded" id="embedded-form" />
  </div>
</template>

<script setup>
onMounted(() => {
  window.hbspt.forms.create({
    // region: "embedded-form",
    target: '#embedded-form',
    portalId: "44885066",
    formId: "ca331e10-7da4-4d24-a6d6-7036166c0f28"
  });
})
</script>
