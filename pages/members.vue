<template>
  <div class="px-2 py-5 sm:px-5 text-gray-900 dark:text-gray-100">

    <div class="grid grid-cols-4">
      <div v-for="member in members" :key="member._id" class="mb-8">
        <MemberBio :name="member.name" :email="member.email" :headshot="member.photo" :role="member.role">
          <ContentRenderer :value="member" />
        </MemberBio>
      </div>
    </div>

    <hr class="my-5 border-gray-300 dark:border-gray-700" />

    <h2 class="my-4 text-2xl font-bold py-3 px-4 md:px-0">Collaborators</h2>
    <div class="text-sm">
      <p class="p-4 md:p-0">
        Special thanks to the following people and organizations for their
        collaboration and support.
      </p>

      <ul class="list-none pl-0">
        <li v-for="collaborator in sortedCollaborators" :key="collaborator"
          class="inline-block py-2 px-5 text-gray-500 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-md m-2 font-display tracking-widest text-3xl">
          {{ collaborator }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const collaborators = [
  "Jeremia Kimelman",
  "Omari Matthew",
  "Jeff Klein",
  "RJ Andrews",
  "The Plotline",
  "Innocence Project New Orleans",
  "Public Data Works",
];

// make a computed to sort collaborators in alphabetical order

const sortedCollaborators = collaborators.sort();

const { data: members } = await useAsyncData("members", () =>
  queryContent("members").find(),
);
</script>
<style></style>
