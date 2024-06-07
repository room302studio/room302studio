<template>
  <div class="p-1 md:p-4 lg:p-8">
    <h1 class="text-4xl text-center">Livestream management</h1>

    <!-- make a card for each scheduled livestream -->
    <div class="py-12">
      <h2>Scheduled Livestreams</h2>
      <section class="flex-wrap flex items-start">
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-1 lg:p-4" v-for="livestream in livestreams" :key="livestream.id"
          v-show="livestream.confirmed">

          <UCard>
            <NuxtLink :to="`/livestreams/${livestream.id}`" class="text-blue-500 hover:underline">
              <h3>{{ livestream.title }}</h3>
            </NuxtLink>
            <UBadge v-if="!livestream.confirmed" color="primary" variant="outline">Unconfirmed</UBadge>
            <p>{{ livestream.description }}</p>
            <p>{{ streamStartNiceTimeFormat(livestream.start_time) }}</p>
            <!-- show relative time -->
            <p v-if="livestream.confirmed">Going live in {{ timeRelativeToNow(livestream.start_time) }}</p>
          </UCard>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { parse, format, isBefore, isAfter, formatDistanceToNow } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

const supabase = useSupabaseClient()

const isDark = useDark()

const { data: livestreams, error, refresh } = useAsyncData(async () => {
  const { data, error } = await supabase.from('livestreams').select('*')
  if (error) {
    console.error(error)
  } else {
    return data
  }
})

function streamStartNiceTimeFormat(timeString) {
  const parsedTime = parse(timeString, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date());
  return format(parsedTime, timeFormatString)
}

function timeRelativeToNow(timeString) {
  const parsedTime = parse(timeString, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date());
  return formatDistanceToNow(parsedTime);
}

const timeFormatString = 'h:mma'

const pacificTime = computed(() => {
  const [hours, minutes] = time.value.split(':')
  const currentDate = new Date()
  const pacificDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    hours,
    minutes
  )
  return formatInTimeZone(pacificDate, 'America/Los_Angeles', timeFormatString)
})

const centralTime = computed(() => {
  const [hours, minutes] = time.value.split(':')
  const currentDate = new Date()
  const centralDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    hours,
    minutes
  )
  return formatInTimeZone(centralDate, 'America/Chicago', timeFormatString)
})


</script>

<style scoped></style>
