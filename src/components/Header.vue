<script setup lang="ts">
import { store } from "@/store";
import SearchBar from "./SearchBar.vue";
</script>

<template>
    <div class="top-header">
        <a href="/">
            <h1>Coda Shop</h1>
        </a>
        <SearchBar />
    </div>

</template>

<style scoped>
.top-header {
    background-color: #5f1e5f;
    width: 100vw;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
}

a {
    color: rgba(236, 236, 236, 0.927);
}

a:hover {
    background-color: transparent;
}
</style>