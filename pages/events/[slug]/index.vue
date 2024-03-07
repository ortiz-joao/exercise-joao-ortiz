<script setup>
definePageMeta({
  pageTransition: {
    name: 'slide'
  }
})

const route = useRoute()

const {data: event, pending, error} = useFetch(`http://127.0.0.1:3001/events/${route.params.slug}`)

const backgroundColour = ref('')

watch(event, async(newEvent) => {
    if(newEvent.data && newEvent.data.theme) {
        backgroundColour.value = `background: rgb(2,0,36); background: linear-gradient(0deg, rgba(2,0,36,0) 10%, ${newEvent.data.theme.accent_colour} 100%);`
    }
})
</script>
<template>
    <div class="bg-gray-900 h-screen w-screen overflow-hidden">
        <div v-if="pending">
            loading...
        </div>
        <div v-else-if="error">
            An error occurred
            Error:{{ error }}
        </div>
        <main :style="backgroundColour" class="w-full h-full m-auto p-5 sm:p-[10vw]" v-else>
            <header class=" text-white py-2 mb-5 relative">
                <div class="absolute top-2 right-2 bg-white text-violet-950 text-md font-semibold px-2 rounded-full">
                    {{ event.data.category }}
                </div>
                <NuxtLink to="/events">< Events</NuxtLink>
                <h1 class="text-3xl sm:text-5xl font-bold">
                    {{ event.data.name }}
                </h1>
            </header>
            <article class="flex flex-col sm:flex-row py-5">
                <hr class="sm:hidden">
                <div class="py-2 flex flex-col basis-1/3">
                    <h2 class="text-gray-200 text-sm hidden sm:block">Date</h2>
                    <span class="text-l text-white font-semibold">
                        {{ formatEventDay(event.data.starts_at) }}
                    </span>
                    <span class="text-gray-400 text-md">
                        {{ formatEventHours(event.data.starts_at) }} - {{ formatEventHours(event.data.starts_at) }}
                    </span>
                </div>
                <hr class="sm:hidden">
                <div class="py-2 flex flex-col basis-1/3">
                    <h2 class="text-gray-200 text-sm hidden sm:block">Location</h2>
                    <span class="text-l text-white font-semibold">{{ event.data.location.location}} - {{ event.data.location.name }}</span>
                    <span class="text-gray-400 text-md">{{ event.data.location.country }}</span>
                </div>
                <hr class="sm:hidden">
                <div class="py-2 flex flex-col basis-1/3">
                    <h2 class="text-gray-200 text-sm hidden sm:block">Price range</h2>
                    <span class="text-l text-white font-semibold">
                        {{ event.data.price_range.minimum.amount }} - {{ event.data.price_range.maximum.amount }}
                    </span>
                    <span class="text-gray-400 text-md">
                        {{ event.data.price_range.minimum.currency }}
                    </span>
                </div>
            </article>
            <div class="flex items-center justify-center">
                <img style="max-height: 50vh" :src="event.data.theme.background_image.url">
            </div>
        </main>  
    </div>
</template>
