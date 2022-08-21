<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import SupportIcon from './icons/IconSupport.vue'
import ProductCard from './ProductCard.vue'
import products from "../api/mocks/products.json"
import type { Product } from '@/types/Product'
import { computed } from '@vue/reactivity'

const props = defineProps({
  searchQuery: String
})

const productList = ref([] as Array<Product>)

onMounted(() => {
  productList.value = products.products
})

const filteredProductList = computed(() => {
  if (props.searchQuery) {
    console.log("aaa", props.searchQuery)
    const normalizedSearchQuery = props.searchQuery.toLowerCase();
    return productList.value.filter((pdt) => (pdt.name.toLowerCase().startsWith(normalizedSearchQuery)))
  } else {
    return productList.value
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

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a target="_blank" href="https://vuejs.org/">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
  </WelcomeItem>
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