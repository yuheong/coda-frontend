<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const searchText = ref("")
const originalPath = ref("")

watch(route, () => {
    if (!originalPath.value) {
        originalPath.value = route.path
    }
})

watch(searchText, () => {
    if (searchText.value.length > 0) {
        router.push({ path: "/search", query: { query: searchText.value } })
    } else {
        router.push(originalPath.value)
    }
})
</script>

<template>
    <div class="search-bar">
        <input v-model="searchText" type="text" placeholder="Search for an app">
    </div>
</template>

<style scoped>
.search-bar {
    margin-left: auto;
    margin-right: auto;
}

input {
    padding: 10px;
    height: 30px;
    width: 350px;
    border: 1px;
    border-radius: 5px;
}
</style>