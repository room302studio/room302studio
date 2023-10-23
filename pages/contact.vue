<template>
  <div class="py-20 bg-gray-100 dark:bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8">
    <UCard class="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-lg mx-auto">
      <h2 class="text-3xl font-bold text-gray-800 dark:text-white py-4">Get in touch</h2>
      <form name="contact" netlify>
        <div class="mb-4">
          <UInput id="name" type="text" name="name" placeholder="Your Name" label="Your Name" />
        </div>
        <div class="mb-4">
          <UInput id="email" type="email" name="email" placeholder="Email" label="Email" />
        </div>
        <div class="mb-4">
          <UInput id="position" type="text" name="position" placeholder="Position at company"
            label="Position at company" />
        </div>
        <div class="mb-4">
          <UInput id="size" type="text" name="size" placeholder="Size of company" label="Size of company" />
        </div>
        <div class="mb-4">
          <UCheckbox id="dataset" type="checkbox" name="dataset" label="Can you provide a sample dataset?" />
        </div>
        <div class="mb-4">
          <URadio id="budget-5-10k" type="radio" name="budget" value="5-10k" label="5-10k" />
          <URadio id="budget-10-20k" type="radio" name="budget" value="10-20k" label="10-20k" />
          <URadio id="budget-20-50k" type="radio" name="budget" value="20-50k" label="20-50k" />
          <URadio id="budget-50k-100k" type="radio" name="budget" value="50k-100k" label="50k-100k" />
          <URadio id="budget-100k-plus" type="radio" name="budget" value="100k+" label="100k+" />
        </div>
        <div class="mb-4">
          <UCheckbox id="opensource" type="checkbox" name="opensource"
            label="Are we allowed to open-source/work in the open on this project?" />
        </div>
        <div class="flex justify-end">
          <UButton type="submit">Send Inquiry</UButton>
        </div>
      </form>
    </UCard>
  </div>
</template>
