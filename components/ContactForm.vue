<template>
  <div>
    <div id="embedded-form" />
  </div>
</template>

<script setup>
onMounted(() => {
  window.hbspt.forms.create({
    region: "embedded-form",
    portalId: "44885066",
    formId: "ca331e10-7da4-4d24-a6d6-7036166c0f28"
  });
})
</script>
