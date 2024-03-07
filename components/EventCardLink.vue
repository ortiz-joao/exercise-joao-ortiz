<script setup>
const props = defineProps(["event"])


</script>
<template>
    <NuxtLink class="group flex flex-col m-2 first:ml-0 last:mr-0 basis-full 2xl:basis-1/5 xl:basis-1/4 lg:basis-1/3 md:basis-1/3 shrink-0 grow-0" :to="`/events/${event.slug}`">
        <div class="h-[150px] overflow-hidden shadow-md p-2 bg-violet-950 rounded-md text-white flex flex-col items-start relative group-hover:scale-105">
            <div class="mb-5 z-10">
                {{ event.location.country }}
                {{ event.location.name }}
                {{ event.location.location }}
            </div>
            <div class="z-10 mt-auto">
                {{ formatDate(event.starts_at) }}
            </div>
            <div class="z-10 absolute bottom-2 right-2 bg-white text-violet-950 text-sm font-semibold px-2 rounded-full">
                {{ event.category }}
            </div>
            <img class="absolute w-auto min-h-full z-0 left-0 top-0 opacity-20" :src="event.theme.background_image.url" />
        </div>
        <h2 >{{ event.name }}</h2>
    </NuxtLink>
</template>
<style>
* {
    transition: all 0.2s; 
}
</style>