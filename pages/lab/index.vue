<template>
  <main
    class="min-h-screen py-20 md:py-28 bg-gradient-to-b from-stone-50/80 to-white dark:from-stone-900/80 dark:to-stone-950">
    <ContentQuery path="/lab" v-slot="{ data }">
      <div class="max-w-4xl mx-auto px-4 md:px-6">

        <!-- Experiments Index (always visible) -->
        <section class="mb-12">
          <h2 class="text-sm uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-4">
            Experiments
          </h2>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/lab/gradients"
              class="inline-flex items-start gap-3 px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-white/70 dark:bg-stone-900/50 hover:bg-stone-50 dark:hover:bg-stone-800/60 transition">
              <UIcon name="i-heroicons-swatch" class="w-5 h-5 mt-1 text-stone-500 dark:text-stone-400" />
              <div class="text-left">
                <div class="font-medium leading-snug text-stone-800 dark:text-stone-200">Gradient Generator</div>
                <p class="text-xs text-stone-600 dark:text-stone-400 max-w-[220px]">Play with color palettes, glitch
                  effects, and export poster-ready backgrounds.</p>
              </div>
            </NuxtLink>
          </div>
        </section>

        <template v-if="data && data[0]">
          <!-- Hero section with subtle animation -->
          <section class="py-20 md:py-32 relative overflow-hidden">
            <div class="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
              <h1 class="text-5xl md:text-7xl font-extralight mb-6 md:mb-8 tracking-tight flex items-center gap-4">
                <UIcon name="i-heroicons-beaker" class="text-primary-500 text-3xl md:text-4xl opacity-80" />
                <span class="text-stone-800 dark:text-stone-200">{{ data[0].title }}</span>
              </h1>
              <p class="text-lg md:text-xl font-light max-w-2xl leading-relaxed text-stone-600 dark:text-stone-400">
                {{ data[0].description }}
              </p>
            </div>
            <!-- Enhanced ambient background element -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-stone-100/20 to-transparent dark:from-stone-950/20 backdrop-blur-3xl -z-10 opacity-60" />
          </section>

          <!-- Timeline with improved visual treatment -->
          <div class="lab-timeline relative border-l border-stone-300/50 dark:border-stone-700/50 ml-4 md:ml-8 pb-20">
            <div v-for="(item, index) in filteredLabItems(processedItems)" :key="item.id"
              class="lab-item relative mb-16 transition-all duration-300 hover:translate-x-1">
              <!-- Timeline marker and experiment number -->
              <div
                class="absolute -left-[5px] h-3 w-3 rounded-full bg-primary-500 mt-7 shadow-lg shadow-primary-500/20">
              </div>
              <div class="absolute -left-12 font-mono text-[10px] text-stone-400 dark:text-stone-500 mt-7">
                #{{ processedItems.length - index }}
              </div>

              <!-- Lab item content with inline expansion -->
              <div class="ml-6 group">
                <!-- Content preview with toggle functionality -->
                <div
                  class="mb-5 cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  @click="toggleItemExpansion(item.id)"
                  :class="{ 'opacity-50 hover:opacity-90 transition-opacity': (activeTag && !item.tags.includes(activeTag)) || (activeType && item.type !== activeType) }">
                  <!-- Video -->
                  <div v-if="item.type === 'video'"
                    class="aspect-video bg-stone-900 rounded-xl overflow-hidden relative group">
                    <img :src="item.thumbnail" :alt="item.title"
                      class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500" />
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div
                        class="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-500/70">
                        <UIcon name="i-heroicons-play" class="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <!-- Subtle type indicator and source hint -->
                    <div
                      class="absolute bottom-0 left-0 right-0 py-2 px-4 bg-gradient-to-t from-black/70 to-transparent">
                      <div class="flex justify-between items-center">
                        <span class="text-[10px] uppercase tracking-wider opacity-80 text-white font-light">
                          video
                        </span>
                        <a :href="item.url" download class="cursor-pointer" @click.stop>
                          <UIcon name="i-heroicons-arrow-down-tray"
                            class="h-3.5 w-3.5 text-white opacity-70 hover:opacity-100 transition-opacity" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- Image -->
                  <div v-else-if="item.type === 'image'"
                    class="aspect-video bg-stone-900 rounded-xl overflow-hidden relative group">
                    <!-- Improved image display with subtle border for screenshots -->
                    <div class="absolute inset-0 flex items-center justify-center p-0.5">
                      <img :src="item.url" :alt="item.title"
                        class="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                    </div>

                    <!-- Subtle gradient overlay at bottom for text -->
                    <div
                      class="absolute bottom-0 left-0 right-0 py-2 px-4 bg-gradient-to-t from-black/70 to-transparent">
                      <div class="flex justify-between items-center">
                        <span class="text-[10px] uppercase tracking-wider opacity-80 text-white font-light">
                          image
                        </span>
                        <a :href="item.url" download class="cursor-pointer" @click.stop>
                          <UIcon name="i-heroicons-arrow-down-tray"
                            class="h-3.5 w-3.5 text-white opacity-70 hover:opacity-100 transition-opacity" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- Note -->
                  <div v-else-if="item.type === 'note'"
                    class="pt-5 pb-4 px-5 min-h-[140px] max-h-[140px] overflow-hidden relative bg-stone-50 dark:bg-stone-900/80 rounded-xl border border-stone-200/50 dark:border-stone-700/50">
                    <!-- Small type indicator -->
                    <div class="absolute top-3 right-3 flex items-center gap-1">
                      <span
                        class="text-[9px] uppercase tracking-wider opacity-70 text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-full">
                        note
                      </span>
                    </div>

                    <!-- Display content with improved typography -->
                    <div v-if="item.content"
                      class="font-mono text-xs leading-relaxed text-stone-700 dark:text-stone-300 space-y-2 pr-8"
                      v-html="highlightHashtags(truncateText(item.content, 160))"></div>

                    <!-- Subtle gradient fadeout -->
                    <div v-if="item.content && item.content.length > 160"
                      class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-50 dark:from-stone-950 via-stone-50/90 dark:via-stone-900/90 to-transparent rounded-b-xl">
                    </div>
                  </div>
                </div>

                <!-- Item metadata with more elegant typography -->
                <div class="cursor-pointer" @click="toggleItemExpansion(item.id)"
                  :class="{ 'opacity-50 hover:opacity-90 transition-opacity': (activeTag && !item.tags.includes(activeTag)) || (activeType && item.type !== activeType) }">
                  <h3
                    class="text-base font-medium mb-2 text-stone-800 dark:text-stone-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex items-center">
                    {{ item.title }}
                    <UIcon
                      :name="expandedItems.includes(item.id) ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
                      class="h-4 w-4 ml-1.5 text-stone-400" />
                  </h3>

                  <!-- Tags as minimal inline labels -->
                  <div v-if="item.tags.length > 0" class="flex flex-wrap gap-2 mb-3">
                    <span v-for="tag in item.tags.slice(0, 3)" :key="tag" @click.stop="setTagFilter(tag)"
                      class="text-[10px] font-mono px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-full cursor-pointer transition-colors">
                      #{{ tag }}
                    </span>
                    <span v-if="item.tags.length > 3"
                      class="text-[10px] text-stone-400 dark:text-stone-500 px-1.5 py-0.5">
                      +{{ item.tags.length - 3 }}
                    </span>
                  </div>
                </div>

                <!-- Expanded content (no modal) -->
                <div v-if="expandedItems.includes(item.id)"
                  class="mt-5 mb-5 overflow-hidden transition-all duration-500 rounded-xl border border-stone-200/50 dark:border-stone-700/50 shadow-lg">
                  <!-- Video expanded -->
                  <div v-if="item.type === 'video'" class="bg-stone-900 rounded-xl overflow-hidden">
                    <video controls autoplay :poster="item.thumbnail" class="w-full">
                      <source :src="item.url" type="video/mp4">
                      <track v-if="item.captions" kind="captions" :src="item.captions" default>
                    </video>

                    <!-- Download link -->
                    <div class="bg-black/90 text-white py-2 px-4 flex justify-between items-center text-xs">
                      <div class="font-mono opacity-60 truncate max-w-[70%]" :title="item.url">
                        {{ item.url }}
                      </div>
                      <a :href="item.url" download
                        class="flex items-center gap-1.5 py-1 px-3 hover:bg-white/20 rounded-md transition-colors">
                        <UIcon name="i-heroicons-arrow-down-tray" class="w-3.5 h-3.5" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>

                  <!-- Image expanded -->
                  <div v-else-if="item.type === 'image'" class="bg-stone-900 rounded-xl overflow-hidden flex flex-col">
                    <!-- Special treatment for screenshots -->
                    <div class="py-3 px-4 text-white flex items-center justify-between bg-black/90">
                      <div class="flex items-center">
                        <span v-if="isScreenshot(item.url)" class="text-[11px] font-light mr-2 opacity-70">
                          Screenshot
                        </span>
                        <span class="text-xs font-mono opacity-60 truncate">
                          {{ extractFilename(item.url) }}
                        </span>
                      </div>
                    </div>

                    <div class="relative flex items-center justify-center py-6 px-5 bg-stone-800/50">
                      <img :src="item.url" :alt="item.title" class="max-w-full max-h-[60vh] object-contain shadow-xl">
                    </div>

                    <!-- Download link -->
                    <div class="bg-black/90 text-white py-2 px-4 flex justify-between items-center text-xs">
                      <div class="font-mono opacity-60 truncate max-w-[70%]" :title="item.url">
                        {{ item.url }}
                      </div>
                      <a :href="item.url" download
                        class="flex items-center gap-1.5 py-1 px-3 hover:bg-white/20 rounded-md transition-colors">
                        <UIcon name="i-heroicons-arrow-down-tray" class="w-3.5 h-3.5" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>

                  <!-- Note expanded -->
                  <div v-else-if="item.type === 'note'"
                    class="pt-6 pb-6 px-6 border-l-2 border-primary-300 dark:border-primary-700 bg-stone-50 dark:bg-stone-900/70">
                    <div
                      class="font-mono text-sm leading-relaxed text-stone-700 dark:text-stone-300 whitespace-pre-wrap"
                      v-html="highlightHashtags(item.content || '')">
                    </div>
                  </div>

                  <!-- Description -->
                  <div v-if="item.description && item.description !== item.content"
                    class="mt-4 text-stone-600 dark:text-stone-400 text-sm px-4 pb-4">
                    {{ item.description }}
                  </div>

                  <!-- All tags -->
                  <div v-if="item.tags.length > 0" class="px-4 pb-4 pt-2 flex flex-wrap gap-2">
                    <span v-for="tag in item.tags" :key="tag" @click.stop="setTagFilter(tag)"
                      class="text-[11px] font-mono px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-full cursor-pointer transition-colors">
                      #{{ tag }}
                    </span>
                  </div>
                </div>

                <!-- Subtle divider -->
                <div class="mt-8 mb-10 border-t border-stone-200/30 dark:border-stone-700/30 w-full"></div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <!-- Loading state -->
      <div v-if="pending" class="flex justify-center py-20">
        <div class="h-12 w-12 border-2 border-t-primary-500 rounded-full animate-spin"></div>
      </div>
    </ContentQuery>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// SEO
useHead({
  title: "The Lab | Room 302 Studio",
});

useSeoMeta({
  title: "The Lab | Room 302 Studio",
  description: "Explore our experimental digital workbench with videos, prototypes, and visual explorations.",
  ogImage: "https://room302studio.com/og-image.jpg",
  ogUrl: "https://room302studio.com/lab",
});

interface LabItem {
  id: string;
  type: 'video' | 'image' | 'note';
  title: string;
  description?: string;
  url?: string;
  thumbnail?: string;
  captions?: string;
  content?: string;
  tags: string[];
  width: string;
  position: {
    x: number;
    y: number;
  };
  zIndex: number;
}

// Fetch content
const { pending, data } = useAsyncData('lab-content', () => queryContent('/lab').find());

// State
const expandedItems = ref<string[]>([]);
const activeTag = ref('');
const activeType = ref('');

// Process items to extract tags from content if auto_extract_tags is true
const processedItems = computed<LabItem[]>(() => {
  if (!data.value || !data.value[0]) return [];

  const labData = data.value[0];

  // Extract lab items from the markdown body
  const extractedItems: LabItem[] = [];

  // Only process if we have a body with children
  if (labData.body && labData.body.children) {
    let currentItem: Partial<LabItem> | null = null;
    let currentItemIndex = 0;

    // Loop through all body children
    labData.body.children.forEach((node: any, index: number) => {
      // Check for heading level 2 which starts a new item
      if (node.tag === 'h2') {
        // If we have a current item being built, add it to our items list
        if (currentItem && Object.keys(currentItem).length > 1) {
          extractedItems.push(currentItem as LabItem);
        }

        // Generate an ID for the item
        currentItemIndex++;
        const itemId = String(currentItemIndex);

        // Create a new item with the heading title
        currentItem = {
          id: itemId,
          title: getTextContent(node),
          type: 'note', // Default type
          tags: [],
          content: '',
          width: '350px',
          position: { x: 0, y: 0 },
          zIndex: 1
        };
      }
      // Process content inside the current item section
      else if (currentItem) {
        // Handle horizontal rule as a section separator
        if (node.tag === 'hr') {
          // If we have a current item being built, add it to our items list
          if (currentItem && Object.keys(currentItem).length > 1) {
            extractedItems.push(currentItem as LabItem);
            currentItem = null;
          }
        }
        // Extract metadata from paragraphs
        else if (node.tag === 'p') {
          // First check if this paragraph contains metadata in bold format
          const metadataFound = processMetadataParagraph(node, currentItem);

          // If no metadata found, treat as content/description
          if (!metadataFound && node.children) {
            const paragraphText = getTextContent(node);

            // If the item already has content, add this as additional content
            if (currentItem.content) {
              currentItem.content += '\n\n' + paragraphText;
            }
            // Otherwise set as initial content
            else {
              currentItem.content = paragraphText;
            }

            // If no description yet, also use first paragraph as description
            if (!currentItem.description) {
              currentItem.description = paragraphText;
            }
          }
        }
      }
    });

    // Add the last item if it exists
    if (currentItem && Object.keys(currentItem).length > 1) {
      extractedItems.push(currentItem as LabItem);
    }
  } else if (labData.items) {
    // Fall back to using the items array if available
    return [...labData.items].map(item => {
      const processedItem = { ...item } as LabItem;
      if (!processedItem.tags) {
        processedItem.tags = [];
      }
      return processedItem;
    });
  }

  // Process each item for tags and clean content
  return extractedItems.map(item => {
    const processedItem = { ...item } as LabItem;

    // Clean content to remove raw URL/metadata text if it appears in the content
    if (processedItem.content) {
      // Remove any raw metadata lines like "Type: xxx", "URL: xxx", etc.
      processedItem.content = processedItem.content.replace(/^(Type|URL|Thumbnail):\s.+$/gm, '').trim();
    }

    // If auto_extract_tags is true, extract tags from content
    if (labData.auto_extract_tags && processedItem.content) {
      // Extract hashtags from content
      const hashtagRegex = /#(\w+)/g;
      const matches = [...processedItem.content.matchAll(hashtagRegex)];

      // Combine extracted tags with any existing tags
      const extractedTags = matches.map(match => match[1]);
      processedItem.tags = [...new Set([...processedItem.tags || [], ...extractedTags])];
    }

    return processedItem;
  });
});

// Helper function to extract text content from a node
function getTextContent(node: any): string {
  if (!node.children) return '';

  return node.children.map((child: any) => {
    if (child.type === 'text') return child.value || '';
    if (child.children) return getTextContent(child);
    return '';
  }).join('');
}

// Helper function to process metadata paragraphs
function processMetadataParagraph(node: any, item: Partial<LabItem>): boolean {
  if (!node.children) return false;

  let foundMetadata = false;

  // Look for Type, URL, Thumbnail information
  node.children.forEach((child: any) => {
    // Check for bold text indicating metadata
    if (child.tag === 'strong' && child.children && child.children[0]) {
      const text = child.children[0].value || '';

      // Process different metadata types
      if (text.match(/type:/i)) {
        const value = text.replace(/type:/i, '').trim();
        if (value) {
          item.type = value.toLowerCase() as any;
          foundMetadata = true;
        }
      } else if (text.match(/url:/i)) {
        const value = text.replace(/url:/i, '').trim();
        if (value) {
          item.url = value;
          foundMetadata = true;
        }
      } else if (text.match(/thumbnail:/i)) {
        const value = text.replace(/thumbnail:/i, '').trim();
        if (value) {
          item.thumbnail = value;
          foundMetadata = true;
        }
      } else if (text.match(/captions:/i)) {
        const value = text.replace(/captions:/i, '').trim();
        if (value) {
          item.captions = value;
          foundMetadata = true;
        }
      }
    }
  });

  return foundMetadata;
}

// Get all unique tags across all items
const allTags = computed(() => {
  const tags = new Set<string>();
  processedItems.value.forEach(item => {
    if (item.tags) {
      item.tags.forEach(tag => tags.add(tag));
    }
  });
  return Array.from(tags);
});

// Filter items
function filteredLabItems(items: LabItem[]) {
  if (!items) return [];
  return items.filter(item => {
    return (!activeTag.value || (item.tags && item.tags.includes(activeTag.value)))
      && (!activeType.value || item.type === activeType.value);
  });
}

// Generate rotation
function getRandomRotation(id: string) {
  const idSum = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return ((idSum % 5) - 2.5); // Range: -2.5 to +2.5 degrees
}

// Function to toggle item expansion
function toggleItemExpansion(id: string) {
  const index = expandedItems.value.indexOf(id);
  if (index === -1) {
    expandedItems.value.push(id);
  } else {
    expandedItems.value.splice(index, 1);
  }
}

// Function to determine if an image is likely a screenshot
function isScreenshot(url: string = ''): boolean {
  const filename = extractFilename(url).toLowerCase();
  return filename.includes('screen') ||
    filename.includes('screenshot') ||
    filename.includes('shot') ||
    filename.includes('capture');
}

// Function to extract filename from URL for display
function extractFilename(url: string = ''): string {
  if (!url) return '';
  // Get the part after the last slash
  const parts = url.split('/');
  const filename = parts[parts.length - 1];
  // Remove any query parameters
  return filename.split('?')[0];
}

// Reset all filters
function resetFilters() {
  activeTag.value = '';
  activeType.value = '';
}

// Set tag filter when clicking on a tag
function setTagFilter(tag: string) {
  activeTag.value = tag === activeTag.value ? '' : tag;
}

// Helper function to truncate text for previews
function truncateText(text: string, limit: number): string {
  if (text.length <= limit) return text;
  return text.substring(0, limit) + '...';
}

// Function to highlight hashtags in content
function highlightHashtags(content: string): string {
  return content.replace(/#(\w+)/g, '<span class="text-primary-500">#$1</span>');
}
</script>

<style scoped>
.lab-item {
  transition: all 0.3s ease;
}

.lab-item:hover {
  z-index: 10;
}

.lab-item>div {
  cursor: pointer;
  transition: all 0.25s;
}

@media (max-width: 768px) {
  .lab-timeline {
    margin-left: 20px;
  }

  .lab-item {
    margin-bottom: 2rem;
  }
}
</style>