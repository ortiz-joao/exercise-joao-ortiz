<script setup>
const { data: events, pending, error } = await useFetch("http://127.0.0.1:3001/events")

const categories = [
    {
        "name": "museum"
    },
    {
        "name": "sports"
    },
    {
        "name": "party"
    },
    {
        "name": "live"
    },
    {
        "name": "concert"
    },
    {
        "name": "music"
    },
    {
        "name": "drive-in"
    },
    {
        "name": "kids"
    },
    {
        "name": "conference"
    },
    {
        "name": "dance"
    },
    {
        "name": "festival"
    },
    {
        "name": "travel"
    },
    {
        "name": "cinema"
    },
    {
        "name": "theater"
    },
    {
        "name": "stand-up"
    },
    {
        "name": "club"
    },
    {
        "name": "family"
    },
    {
        "name": "books"
    },
    {
        "name": "food"
    }
]

const nameFilter = ref("")
const locationFilter = ref("")
const categoryFilter = ref("")

const filteredEvents = computed(() => {
    if (events.value.data) {
        return (nameFilter.value !== "" || locationFilter.value !== "" || categoryFilter.value !== "") ? events.value.data.filter(event => {
            let value = null
            if (nameFilter.value !== "") {
                if (event.name.toLowerCase().includes(nameFilter.value) && value === null) {
                    value = true
                } else {
                    return false
                }
            }

            if (locationFilter.value !== "") {
                if ((event.location.name.toLowerCase().includes(locationFilter.value) || event.location.country.toLowerCase().includes(locationFilter.value) || event.location.location.toLowerCase().includes(locationFilter.value))) {
                    value = true
                } else {
                    return false
                }
            }

            if (categoryFilter.value !== "") {
                if (event.category === categoryFilter.value) {
                    value = true
                } else {
                    return false
                }
            }

            return value
        }).slice(0, 10) : events.value.data.slice(0, 10)
    }
    return []
})
</script>

<template>
    <main class="bg-gray-100 h-screen flex flex-col items-center">
        <header class="p-2 mb-2">
            <h1 class="text-violet-900 text-3xl font-bold">Events list</h1>
        </header>
        <div>
            <h2 class="text-lg font-semibold text-center">Filters</h2>
            <form class="flex flex-row">
                <label class="flex flex-col">
                    Name
                    <input class="pl-1 outline rounded-md" type="text" v-model="nameFilter" />
                </label>
                <label class="ml-3 flex flex-col">
                    Location
                    <input class="pl-1 outline rounded-md" type="text" v-model="locationFilter" />
                </label>
                <label class="ml-3 flex flex-col">
                    Category
                    <select class="pl-1 outline rounded" name="categories" v-model="categoryFilter">
                        <template v-for="category in categories">
                            <option class="capitalize" :value="category.name">{{ category.name }}</option>
                        </template>
                    </select>
                </label>
            </form>
        </div>
        <div v-if="pending">Loading events</div>
        <div v-else-if="error">Error fetching events</div>
        <article class="flex flex-row w-full flex-wrap p-4 justify-center" v-else>

            <template v-for="event in filteredEvents">
                <EventCardLink :event="event" />
            </template>
        </article>
    </main>
</template>
