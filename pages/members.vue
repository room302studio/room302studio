<template>
  <div class="pa2 pa5-l near-black">
    <h2>Studio Members</h2>
    <div class="member mv5">
      <h3 class="orange ma0 pa0 pb2">Curran Kelleher</h3>
      <div class="member-bio measure">
        <p>TK.</p>

        <p>TK</p>
      </div>
    </div>

    <div class="member mv5">
      <img src="member-headshots/ej-headshot.png" alt="EJ Fox" class="h4 br2"/>
      <h3 class="orange ma0 pa0 pb2">EJ Fox</h3>      
      <div class="member-bio measure">
        <p>EJ Fox is a data visualization designer and developer with a passion for creating innovative and captivating
          visuals. After beginning his career with static infographics, EJ honed his skills and transitioned into the
          dynamic world of coding. At NBC News, EJ helped created the modern version of the Big Board which continues to
          be a staple in election coverage to this day.</p>

        <p>At Room 302 Studio, EJ brings a unique perspective, pushing boundaries and exploring uncharted territory.
          Drawing inspiration from nature, ecology, and spirituality, he's dedicated to crafting experiences that leave a
          lasting impression, setting him apart as a key contributor to our creative community.</p>
      </div>
    </div>

    <div class="member mv5">
      <h3 class="orange ma0 pa0 pb2">Ian Johnson</h3>
      <div class="member-bio measure">
        <p>TK</p>

        <p>TK</p>
      </div>
    </div>

    <hr class="mv5" />

    <h2 class="mv4">Collaborators</h2>
    <div class="f6">
      <p>
        Special thanks to the following people and organizations for their collaboration.
      </p>

      <ul class="list pl0 sans-serif">
        <li v-for="collaborator in sortedCollaborators" :key="collaborator" class="tracked dib pv1 ph3 gray bg-white b--light-gray ba br2 ma2 fw2">
          {{ collaborator }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const collaborators = [
  'Jeremia Kimelman',
  'Jeff Klein',
  'RJ Andrews',
  'The Plotline',
  'Innocence Project New Orleans',
  'Public Data Works'
]

// make a computed to sort collaborators in alphabetical order

const sortedCollaborators = collaborators.sort()


</script>
<style>
</style>