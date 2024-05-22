<template>
  <div class="px-2 py-5 sm:px-5 text-gray-900 dark:text-gray-100">
    <div class="grid grid-cols-4">
      <div v-for="member in members" :key="member._id" class="mb-8">
        <MemberBio :name="member.name" :email="member.email" :headshot="member.photo" :role="member.role">
          <ContentRenderer :value="member" />
        </MemberBio>
      </div>
    </div>
  </div>
</template>
<script setup>

const { data: members } = await useAsyncData("members", () =>
  queryContent("members").find(),
);
</script>
<style></style>
