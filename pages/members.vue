<template>
  <div class="pa2 pa5-ns near-black">
    <h2>Studio Members</h2>
    <div class="member mv5">
      <img src="/member-headshots/curran-headshot.png" alt="Curran" class="h4 br2" />
      <h3 class="orange ma0 pa0 pb2">Curran Kelleher</h3>
      <div class="member-bio measure">
        <p>Curran Kelleher is a data visualization expert and educator, committed to empowering others through sharing
          knowledge and creating cutting-edge tools. With experience at renowned organizations like Stamen and McKinsey,
          Curran brings a wealth of expertise to the table.</p>

        <p>Recognized in the dataviz community for his high-quality educational content, Curran's passion for teaching
          is evident in every project he undertakes. As the creator of VizHub, a groundbreaking platform for creating and
          collaborating on D3 visualizations, he has transformed the way practitioners work and learn. Currently based
          in India, Curran continues to explore new horizons, challenging the boundaries of data visualization and
          inspiring others along the way.</p>
      </div>
    </div>

    <!-- EJ Fox -->

    <div class="member mv5">
      <img src="/member-headshots/ej-headshot.png" alt="EJ Fox" class="h4 br2" />
      <h3 class="orange ma0 pa0 pb2">EJ Fox</h3>
      <div class="member-bio measure">
        <p>EJ Fox is a data visualization designer and developer with a passion for creating innovative and captivating
          visuals. After beginning his career with static infographics, EJ honed his skills and transitioned into the
          dynamic world of coding. At NBC News, EJ helped create the modern version of the Big Board which continues to
          be a staple in election coverage to this day.</p>

        <p>At Room 302 Studio, EJ brings a unique perspective, pushing boundaries and exploring uncharted territory.
          Drawing inspiration from nature, ecology, and art, he's dedicated to crafting experiences that leave a
          lasting impression.</p>
      </div>
    </div>

    <!-- Israel Gonzalez -->

    <!-- <div class="member mv5">
      <img src="/member-headshots/israel-headshot.png" alt="Israel Gonzalez" class="h4 br2" />
      <h3 class="orange ma0 pa0 pb2">Israel Gonzalez</h3>
      <div class="member-bio measure">
        <p></p>
        <p></p>
      </div>
    </div> -->
    

    <h3 class="mv0 pv0 sans-serif b tracked gray">On sabbatical: </h3>

    <!-- Ian Johnson -->
    <div class="member mv5 o-20">
      <img src="/member-headshots/ian-headshot.png" alt="Ian" class="h4 br2" />
      <h3 class="orange ma0 pa0 pb2">Ian Johnson</h3>
      <div class="member-bio measure">
        <p>Ian Johnson is a data alchemist focused on building web-based data
          interfaces. Ian studied scientific computing in school and learned design
          on the job, bringing the two together to tackle sophisticated data
          projects.</p>

        <p>Ian is passionate about creating and learning in the open by
          organizing workshops, meetups and developing open source tools like
          Blockbuilder, a tool that has enhanced the prototyping and learning
          experience for thousands of data visualization practitioners. Ian uses his
          bottomless supply of curiosity combined with a strong desire to share his
          learnings to enrich everyone who crosses his path.</p>
      </div>
    </div>



    <hr class="mv5" />

    <h2 class="mv4">Collaborators</h2>
    <div class="f6">
      <p>
        Special thanks to the following people and organizations for their collaboration and support.
      </p>

      <ul class="list pl0 sans-serif">
        <li v-for="collaborator in sortedCollaborators" :key="collaborator"
          class="tracked dib pv1 ph3 gray bg-white b--light-gray ba br2 ma2 fw2">
          {{ collaborator }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const collaborators = [
  'Jeremia Kimelman',
  'Omari Matthew',
  'Jeff Klein',
  'RJ Andrews',
  'The Plotline',
  'Innocence Project New Orleans',
  'Public Data Works'
]

// make a computed to sort collaborators in alphabetical order

const sortedCollaborators = collaborators.sort()


</script>
<style></style>