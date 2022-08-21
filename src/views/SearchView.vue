<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import ProductList from "../components/ProductList.vue";

const route = useRoute()
const searchQuery = ref(route.query.query?.toString())

watch(route, () => {
    if (route.query.query) {
        searchQuery.value = route.query.query.toString()
        console.log(searchQuery.value)
    }
})
</script>

<template>
    <main>
        <div class="search-query">Searching results for {{ searchQuery }}</div>
        <ProductList :searchQuery="searchQuery" />
    </main>
</template>

<style scoped>
.search-query {
    margin: 20px;
    font-size: 1.5rem;
}
</style>
