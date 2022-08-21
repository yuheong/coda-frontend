<script setup lang="ts">
import type { Product } from '@/types/Product';
import type { PropType } from 'vue';

const props = defineProps({
  product: Object as PropType<Product>
})

</script>

<template>
  <div class="product-card" v-if="product">
    <h2>{{ product.name }}</h2>
    <a :href="product.productUrl">
      <img :src="product.logoLocation" width="640" :alt="product.productTitle" />
    </a>

    <div>{{ product.productTitle }}</div>
  </div>

</template>

<style scoped>
h2 {
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

.product-card {
  background-color: #360636;
  padding: 15px 20px;
  border-radius: 12px;
}
</style>