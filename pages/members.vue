<template>
  <div class="px-2 py-5 sm:px-5 text-stone-900 dark:text-stone-100">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      <div v-for="member in members" :key="member.id">
        <MemberBio :name="member.name" :email="member.authorEmail" :headshot="member.photo" :role="member.role">
          <ContentRenderer :value="member" />
        </MemberBio>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data: members } = await useAsyncData("members", () =>
  queryCollection("members").all(),
);
</script>
<style></style>
