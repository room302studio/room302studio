<template>
  <main class="min-h-screen py-36 md:py-48 bg-stone-50/50 dark:bg-stone-900/80">
    <div class="max-w-5xl mx-auto pad">
      <!-- Blog header section -->
      <header class="mb-24 md:mb-32">
        <div class="flex items-center justify-between mb-4">
          <div class="font-mono text-primary-500 uppercase tracking-wide text-sm">Room 302 — Blog</div>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-400 transition-colors font-mono group"
            title="Subscribe via RSS">
            <UIcon name="i-heroicons-rss" class="w-4 h-4 group-hover:animate-pulse" />
            <span>RSS Feed</span>
          </a>
        </div>
        <h1
          class="font-fraunces text-5xl md:text-6xl xl:text-7xl font-light mb-10 text-stone-800 dark:text-stone-200 tracking-tight">
          Blog
        </h1>
        <p
          class="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl tracking-wide leading-relaxed font-light">
          Innovation lab insights: rapid prototyping, data visualization mastery, and our 0-60 approach to building the future.
        </p>
      </header>

      <ContentQuery path="/blog/" :sort="{ date: -1 }" v-slot="{ data }">
        <!-- Featured posts section -->
        <div v-if="featuredPosts(data).length > 0" class="mb-40 md:mb-48">
          <div class="mb-12 flex items-center gap-3">
            <UIcon name="i-heroicons-star" class="w-5 h-5 text-primary-500" />
            <h2 class="text-sm uppercase tracking-wider text-stone-400 dark:text-stone-500 font-mono">Featured</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-12">
            <div v-for="article in featuredPosts(data)" :key="article._path" class="group">
              <div class="max-w-3xl mx-auto">
                <ContentQuery :path="article._path" v-slot="{ data: articleData }" find="one">
                  <NuxtLink :to="article._path"
                    class="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-xl transition-all hover:translate-y-[-2px] duration-300">
                    <div class="space-y-6">
                      <div v-if="articleData.image"
                        class="aspect-[16/9] w-full bg-cover bg-center rounded-xl ring-2 ring-inset ring-primary-500/30 overflow-hidden group-hover:ring-primary-500/50 transition-all duration-300">
                        <div class="w-full h-full bg-cover bg-center group-hover:scale-[1.05] transition-transform duration-500"
                          :style="{ 'background-image': `url(${articleData.image})` }">
                        </div>
                      </div>

                      <div class="space-y-4">
                        <div class="font-mono text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500">
                          {{ formatDate(article.date) }}
                        </div>
                        <h3
                          class="font-fraunces text-2xl md:text-3xl font-light tracking-tight text-stone-800 dark:text-stone-200 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {{ article.title }}
                        </h3>
                        <p v-if="articleData.description"
                          class="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                          {{ articleData.description }}
                        </p>
                      </div>
                    </div>
                  </NuxtLink>
                </ContentQuery>
              </div>
            </div>
          </div>

          <!-- Divider after featured posts -->
          <div class="mt-32 md:mt-40 flex items-center justify-center">
            <div class="w-24 h-px bg-stone-200 dark:bg-stone-800"></div>
            <div class="mx-8 text-stone-300 dark:text-stone-700 font-fraunces text-2xl">&#10022;</div>
            <div class="w-24 h-px bg-stone-200 dark:bg-stone-800"></div>
          </div>
        </div>

        <!-- Regular posts -->
        <div class="space-y-32 md:space-y-40">
          <div v-for="(article, index) in regularPosts(data)" :key="article._path" :class="[article.hidden ? 'hidden' : '']"
            class="article-item group">
            <div class="max-w-3xl mx-auto">
              <ContentQuery :path="article._path" v-slot="{ data }" find="one">
                <NuxtLink :to="article._path"
                  class="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-xl transition-all hover:translate-y-[-2px] duration-300">
                  <div class="space-y-10">
                    <!-- Metadata: Date, Author, Read Time -->
                    <div
                      class="font-mono text-sm uppercase tracking-wider text-stone-500 dark:text-stone-400 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <div class="flex items-center">
                        <UIcon name="i-heroicons-calendar"
                          class="text-stone-400/50 dark:text-stone-500/50 mr-2 text-xs" />
                        {{ formatDate(article.date) }}
                      </div>
                      <div v-if="article.author" class="flex items-center">
                        <UIcon name="i-heroicons-user"
                          class="text-stone-400/50 dark:text-stone-500/50 mr-2 text-xs" />
                        {{ article.author }}
                      </div>
                      <div v-if="data.body" class="flex items-center text-stone-400 dark:text-stone-500">
                        <UIcon name="i-heroicons-clock"
                          class="text-stone-400/50 dark:text-stone-500/50 mr-2 text-xs" />
                        {{ calculateReadTime(data.body) }} min read
                      </div>
                    </div>

                    <!-- Tags -->
                    <div v-if="article.tags" class="flex flex-wrap gap-2">
                      <span v-for="tag in parseTagsArray(article.tags)" :key="tag"
                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wide bg-primary-500/10 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400 ring-1 ring-inset ring-primary-500/20 dark:ring-primary-500/30">
                        {{ tag }}
                      </span>
                    </div>

                    <div v-if="data.image"
                      class="aspect-[21/9] w-full bg-cover bg-center rounded-xl ring-1 ring-inset ring-stone-900/10 dark:ring-white/10 overflow-hidden group-hover:ring-primary-500/20 transition-all duration-300">
                      <div class="w-full h-full bg-cover bg-center group-hover:scale-[1.02] transition-transform duration-300"
                        :style="{ 'background-image': `url(${data.image})` }">
                      </div>
                    </div>

                    <div class="space-y-6 max-w-prose">
                      <h2
                        class="font-fraunces text-3xl md:text-4xl font-light tracking-tight text-stone-800 dark:text-stone-200 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {{ article.title }}
                      </h2>

                      <div
                        class="text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-light max-w-[65ch] tracking-wide">
                        <span v-if="data.description">{{ data.description }}</span>
                      </div>

                      <!-- Read more link with subtle icon -->
                      <div
                        class="pt-8 font-mono text-primary-500 dark:text-primary-500 text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        <span>Read more</span>
                        <span
                          class="ml-2 text-primary-500/70 group-hover:text-primary-600 group-hover:translate-x-1 inline-block transition-all duration-300">→</span>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </ContentQuery>
            </div>

            <!-- Refined divider with literary styling -->
            <div v-if="index !== data.length - 1" class="mt-28 md:mt-36 flex items-center justify-center">
              <div class="w-20 h-px bg-stone-200 dark:bg-stone-800"></div>
              <div class="mx-6 text-stone-300 dark:text-stone-700 font-fraunces">&#10022;</div>
              <div class="w-20 h-px bg-stone-200 dark:bg-stone-800"></div>
            </div>
          </div>
        </div>
      </ContentQuery>

      <!-- Newsletter Signup CTA -->
      <section class="mt-40 md:mt-48 mb-32">
        <div class="max-w-3xl mx-auto text-center">
          <div class="mb-12">
            <div class="font-mono text-primary-500 uppercase tracking-wide text-sm mb-6">Stay Updated</div>
            <h2
              class="font-fraunces text-3xl md:text-4xl xl:text-5xl font-light mb-6 text-stone-800 dark:text-stone-200 tracking-tight">
              Join our mailing list
            </h2>
            <p class="text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto leading-relaxed font-light tracking-wide">
              Get updates on new tools, experiments, and insights from our innovation lab. We share what we're building, lessons learned, and the occasional behind-the-scenes look at our process.
            </p>
          </div>
          <div class="max-w-xl mx-auto">
            <MailchimpSignupForm />
          </div>
        </div>
      </section>

      <div class="mt-32 flex justify-center">
        <MonoButton to="/" primary large>Back to home</MonoButton>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { watch } from 'vue';

const router = useRouter();

// Watch route changes to scroll to top
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
);

// Format date function
const formatDate = (dateString: string) => {
  if (!dateString) return '';

  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Calculate read time based on word count (average 200 words/min)
const calculateReadTime = (content: any) => {
  if (!content) return 0;

  // Extract text content from the markdown body
  const text = JSON.stringify(content);
  const wordCount = text.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return readTime;
};

// Parse tags from frontmatter (handles both string and array formats)
const parseTagsArray = (tags: string | string[]) => {
  if (!tags) return [];

  if (Array.isArray(tags)) {
    return tags;
  }

  // If tags is a string, split by spaces
  return tags.split(/\s+/).filter(tag => tag.length > 0);
};

// Get featured posts (posts with featured: true in frontmatter)
const featuredPosts = (posts: any[]) => {
  return posts.filter(post => post.featured === true && !post.hidden && !post.inprogress);
};

// Get regular (non-featured) posts
const regularPosts = (posts: any[]) => {
  return posts.filter(post => post.featured !== true && !post.hidden && !post.inprogress);
};

const metaDescription = "Innovation lab insights: rapid prototyping, data visualization mastery, and our 0-60 approach to building the future.";

useHead({
  title: "Journal | Room 302 Studio",
})

useSeoMeta({
  title: "Journal | Room 302 Studio",
  description: metaDescription,
  ogTitle: "Journal | Room 302 Studio",
  ogDescription: metaDescription,
  ogImage: "https://room302studio.com/og-image.jpg",
  ogUrl: "https://room302studio.com/blog",
  twitterTitle: "Journal | Room 302 Studio",
  twitterDescription: metaDescription,
})
</script>

<style scoped>
.pad {
  @apply px-8 md:px-12 lg:px-32;
}

.font-fraunces {
  font-family: 'Fraunces', serif;
  font-weight: 300;
  letter-spacing: -0.025em;
}

.font-mono {
  font-family: var(--font-mono);
  letter-spacing: -0.01em;
}
</style>
