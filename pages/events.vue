<template>
<div class="pa2 tc">
  <h1>Hello world {{data}}</h1>
  <h2>Room 302 Studio Events</h2>

  <h4>Coming soon...</h4>

  <h4>Want to know about what we are planning?</h4>

  <pre>{{ data }}</pre>

  <MailchimpSignupForm />
</div>
</template>
<script>
const test = ref(null)
const { data } = await useAsyncData('events', () => queryContent('/events/').findAll())

</script>