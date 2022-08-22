<script setup lang="ts">
import type { Product } from '@/types/Product';
import type { PropType } from 'vue';

const props = defineProps({
  product: Object as PropType<Product>
})

</script>

<template>
  <div class="product-card" v-if="product">
    <a class="product-card-link" :href="product.productUrl">
      <h2>{{ product.name }}</h2>
      <img :src="product.logoLocation" width="640" :alt="product.productTitle" />

      <div class="product-tagline">{{ product.productTagline }}</div>
    </a>
  </div>

</template>

<style scoped>
h2 {
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

.product-card-link {
  color: #f0f0f0;
}

.product-card {
  background-color: #360636;
  padding: 15px 10px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
}

.product-tagline {
  margin-top: 10px;
  text-align: center;
}
</style>