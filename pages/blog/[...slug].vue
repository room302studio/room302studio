<template>
  <main class="min-h-screen py-16 md:py-24">
    <!-- Breadcrumb -->
    <div class="max-w-3xl mx-auto px-6 md:px-8 mb-12 md:mb-16">
      <NuxtLink to="/blog"
        class="inline-flex items-center text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 transition-colors text-sm uppercase tracking-wider font-medium group">
        <UIcon name="i-heroicons-arrow-long-left"
          class="mr-2 w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
        <span>Blog</span>
      </NuxtLink>
    </div>

    <!-- Content area with refined styling -->
    <article id="blog-content" class="max-w-3xl mx-auto px-6 md:px-8 prose dark:prose-invert 
             prose-headings:font-light
             prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:leading-tight prose-h1:mb-6
             prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
             prose-p:text-base md:prose-p:text-lg prose-p:leading-relaxed
             prose-a:text-stone-800 dark:prose-a:text-stone-200 hover:prose-a:text-primary-600 dark:hover:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
             prose-blockquote:border-l-stone-300 dark:prose-blockquote:border-l-stone-700 prose-blockquote:bg-stone-50 dark:prose-blockquote:bg-stone-900/50 prose-blockquote:py-1 prose-blockquote:px-6
             prose-img:rounded-lg prose-img:shadow-md">

      <!-- Blog post metadata with refined typography -->
      <div v-if="data" class="not-prose mb-12 md:mb-16">
        <!-- Featured image with animation -->
        <div v-if="data.image" class="aspect-[16/9] mb-12 overflow-hidden rounded-lg shadow-lg">
          <img :src="data.image" :alt="data.title"
            class="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
        </div>

        <!-- Article metadata -->
        <div class="flex items-center border-b border-stone-200 dark:border-stone-800 pb-6">
          <div v-if="data.author || data.date" class="flex items-center text-sm text-stone-500 dark:text-stone-400">
            <span v-if="data.author" class="mr-3">{{ data.author }}</span>
            <time v-if="data.date" :datetime="data.date" class="font-mono">
              {{ formatDate(data.date) }}
            </time>
          </div>

          <div v-if="data.readingTime" class="ml-auto text-xs text-stone-400 dark:text-stone-500 font-mono">
            {{ data.readingTime }} min read
          </div>
        </div>
      </div>

      <!-- Content renderer with fallback -->
      <ContentRenderer :value="data">
        <template #empty>
          <div class="py-12 text-center">
            <h2 class="text-2xl font-light mb-4">We couldn't find this blog post</h2>
            <p class="text-stone-600 dark:text-stone-400 mb-8">The page you're looking for doesn't exist or may have
              been moved.</p>
            <UButton to="/blog" color="gray" variant="soft" class="mt-4 px-6 py-2">
              Browse all articles
            </UButton>
          </div>
        </template>
      </ContentRenderer>
    </article>

    <!-- Reading progress indicator -->
    <div class="fixed top-0 left-0 right-0 h-1 bg-stone-200 dark:bg-stone-800 z-20">
      <div class="h-full bg-stone-400 dark:bg-stone-600 transition-all duration-150"
        :style="{ width: readingProgress + '%' }"></div>
    </div>
  </main>
</template>

<script setup>
// use the blog layout
definePageMeta({
  layout: "blog",
});

const route = useRoute();
const readingProgress = ref(0);

const { data } = await useAsyncData(async () => {
  return queryContent("blog", route.params.slug[0]).findOne();
});

// Format date in a more readable format
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};

// Calculate reading progress
const calculateReadingProgress = () => {
  const article = document.getElementById('blog-content');
  if (!article) return;

  const scrollTop = window.scrollY;
  const scrollHeight = article.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  // Calculate reading progress
  const windowHeight = scrollHeight - clientHeight;
  const progress = windowHeight > 0 ? (scrollTop / windowHeight) * 100 : 100;

  // Clamp between 0 and 100
  readingProgress.value = Math.min(100, Math.max(0, progress));
};

// SEO
useSeoMeta({
  title: () => data.value?.title ? `${data.value.title} | Room 302 Studio Blog` : 'Blog | Room 302 Studio',
  description: () => data.value?.description || 'Read the latest articles from Room 302 Studio',
  ogTitle: () => data.value?.title ? `${data.value.title} | Room 302 Studio Blog` : 'Blog | Room 302 Studio',
  ogDescription: () => data.value?.description || 'Read the latest articles from Room 302 Studio',
  ogImage: () => data.value?.image || 'https://room302studio.com/og-image.jpg',
});

useContentHead(data);

onMounted(() => {
  // Initialize reading progress
  calculateReadingProgress();

  // Add scroll event listener
  window.addEventListener('scroll', calculateReadingProgress);

  // Ensure we start at the top when entering a blog post
  window.scrollTo({
    top: 0,
    behavior: 'instant' // Use instant for blog posts to avoid content jumping
  });
});

onBeforeUnmount(() => {
  // Clean up event listener
  window.removeEventListener('scroll', calculateReadingProgress);
});

// Also watch route changes within blog posts
const router = useRouter();
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }
);
</script>

<style lang="scss">
// Enhance typography with subtle improvements
#blog-content {
  font-feature-settings: "liga" 1, "kern" 1;
  text-rendering: optimizeLegibility;

  // Smooth transitions for all elements
  * {
    transition: color 0.3s ease, background-color 0.3s ease;
  }

  // Enhanced image styling
  img {
    @apply rounded-lg shadow-md;

    &:hover {
      @apply shadow-lg;
    }
  }

  // Refined blockquote styling
  blockquote {
    @apply text-stone-600 dark:text-stone-300 font-light italic my-8;
    letter-spacing: 0.01em;
    border-left-width: 2px;
  }

  // Code blocks with better styling
  pre {
    @apply bg-stone-100 dark:bg-stone-900 p-4 rounded-md overflow-x-auto my-8;
  }

  code {
    @apply font-mono text-sm bg-stone-100 dark:bg-stone-900 px-1.5 py-0.5 rounded;
  }

  // Subtle style for horizontal rule
  hr {
    @apply border-stone-200 dark:border-stone-800 my-12;
  }

  // Enhance list styling
  ul,
  ol {
    @apply pl-5;

    li {
      @apply mb-2;

      &::marker {
        @apply text-stone-400 dark:text-stone-600;
      }
    }
  }

  // Table styling
  table {
    @apply w-full my-8 text-sm border-collapse;

    th {
      @apply bg-stone-100 dark:bg-stone-900 text-left font-medium p-3 border-b border-stone-200 dark:border-stone-800;
    }

    td {
      @apply p-3 border-b border-stone-200 dark:border-stone-800;
    }

    tr:last-child td {
      @apply border-b-0;
    }
  }

  // Headings with subtle underline on hover
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;

    &:hover::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 2rem;
      height: 1px;
      @apply bg-stone-300 dark:bg-stone-700;
    }
  }
}

// Subtle animations for page transitions
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
