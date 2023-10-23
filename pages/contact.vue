<template>
    <div class="pa2 pa5-l f3 lh-copy">
    <form name="contact" netlify>
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Position at company <input type="text" name="position" /></label>
      </p>
      <p>
        <label>Size of company <input type="text" name="size" /></label>
      </p>
      <p>
        <label>Can you provide a sample dataset? <input type="checkbox" name="dataset" /></label>
      </p>
      <p>
        <label>Budget (select one): <br />
          <input type="radio" name="budget" value="5-10k" /> 5-10k<br />
          <input type="radio" name="budget" value="10-20k" /> 10-20k<br />
          <input type="radio" name="budget" value="20-50k" /> 20-50k<br />
          <input type="radio" name="budget" value="50k-100k" /> 50k-100k<br />
          <input type="radio" name="budget" value="100k+" /> 100k+
        </label>
      </p>
      <p>
        <label>Are we allowed to open-source/work in the open on this project? <input type="checkbox"
            name="opensource" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>
<script setup>

</script>