<template>
  <div class="px-2 py-5 sm:px-5 text-gray-900 dark:text-gray-100">
    <MemberBio name="Curran Kelleher" email="curran@room302.studio" headshot="/member-headshots/curran-headshot.png">
      <p>Curran Kelleher is a data visualization expert and educator, committed to empowering others through sharing
        knowledge and creating cutting-edge tools. With experience at renowned organizations like Stamen and McKinsey,
        Curran brings a wealth of expertise to the table.</p>

      <p>Recognized in the dataviz community for his high-quality educational content, Curran's passion for teaching
        is evident in every project he undertakes. As the creator of VizHub, a groundbreaking platform for creating and
        collaborating on D3 visualizations, he has transformed the way practitioners work and learn. Currently based
        in India, Curran continues to explore new horizons, challenging the boundaries of data visualization and
        inspiring others along the way.</p>
    </MemberBio>

    <MemberBio name="EJ Fox" email="ejfox@room302.studio" headshot="/member-headshots/ej-headshot.png">
      <p>EJ Fox is a data visualization designer and developer with a passion for creating innovative and captivating
        visuals. After beginning his career with static infographics, EJ honed his skills and transitioned into the
        dynamic world of coding. At NBC News, EJ helped create the modern version of the Big Board which continues to
        be a staple in election coverage to this day.</p>

      <p>At Room 302 Studio, EJ brings a unique perspective, pushing boundaries and exploring uncharted territory.
        Drawing inspiration from nature, ecology, and art, he's dedicated to crafting experiences that leave a
        lasting impression.</p>
    </MemberBio>
    <MemberBio name="Israel Gonzalez" email="israel@room302.studio" headshot="/member-headshots/israel-headshot.png">
      <p>Israel, a devoted software engineer, has an unwavering commitment to overcoming complex challenges. From his
        initial coding experiences with game development during his middle school years, Israel has adventured through
        an array of technical terrains including machine learning, data visualization, and mobile applications.</p>

      <p>At Room 302 Studio, Israel showcases his innovative approach and eagerness to harness the potential of AI
        language models. He is committed to tackling diverse problems head on, from autonomous problem-solving and
        simulations, to robotics and scientific research. Inspired by his thirst for problem-solving, Israel is
        dedicated to making a significant impact through technology.</p>
    </MemberBio>


    <h3 class="my-0 py-0 font-bold tracking-widest dark:text-gray-200 text-4xl text-center">On sabbatical:
    </h3>

    <!-- Ian Johnson -->
    <!-- <div class="member my-5 opacity-20">
      <img src="/member-headshots/ian-headshot.png" alt="Ian" class="h-16 rounded-md" />
      <h3 class="text-specialorange-500 my-0 py-2 text-lg font-bold">Ian Johnson</h3>
      <div class="member-bio prose">
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
    </div> -->

    <MemberBio name="Ian Johnson" email="ian@room302.studio" headshot="/member-headshots/ian-headshot.png"
      class="opacity-20">
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
    </MemberBio>



    <hr class="my-5 border-gray-300 dark:border-gray-700" />

    <h2 class="my-4 text-2xl font-bold py-3 px-4 md:px-0">Collaborators</h2>
    <div class="text-sm">
      <p class="p-4 md:p-0">
        Special thanks to the following people and organizations for their collaboration and support.
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
