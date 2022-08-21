<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type { Product } from '@/types/Product'
import { computed } from '@vue/reactivity'
import { store } from '@/store';

const props = defineProps({
  searchQuery: String
})

const filteredProductList = computed(() => {
  if (props.searchQuery) {
    const normalizedSearchQuery = props.searchQuery.toLowerCase();
    return store.products.filter((pdt) => (pdt.name.toLowerCase().startsWith(normalizedSearchQuery)))
  } else {
    return store.products
  }
})
</script>

<template>
  <div class="products-list" v-if="filteredProductList.length !== 0">
    <ProductCard v-for="(product) in filteredProductList" :product="product" :key="product.id" />
  </div>
  <div class="empty-placeholder" v-else>
    No results found
  </div>
</template>

<style scoped>
.products-list {
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 5rem;
}

.empty-placeholder {
  margin: 20px;
}
</style>