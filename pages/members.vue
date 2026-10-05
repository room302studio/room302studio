<template>
  <div>
    <section>
      <h1>Team</h1>
      <div class="grid-2">
        <div v-for="member in members" :key="member.id">
          <MemberBio :name="member.name" :email="member.authorEmail" :headshot="member.photo" :role="member.role">
            <ContentRenderer :value="member" />
          </MemberBio>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: members } = await useAsyncData("members", () =>
  queryCollection("members").all(),
);

useSeoMeta({
  title: "Team — Room 302 Studio",
  description:
    "Meet the people behind Room 302 Studio — a small team building data visualizations, interactive tools, and prototypes.",
  ogTitle: "Team — Room 302 Studio",
  ogDescription:
    "Meet the people behind Room 302 Studio.",
});
</script>
