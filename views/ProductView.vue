<script setup lang="ts">
import type { Product } from "@/types/Product";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"
import products from "../api/mocks/products.json"

const route = useRoute();

const product_name = route.params.product_name
const product = ref({} as Product)
const isEditing = ref(false)

onMounted(() => {
  product.value = products.products.find((pdt) => (pdt.productUrl === `/ca/${product_name}`))
  console.log(product.value)
})
</script>

<template>
  <main>
    <div class="product">
      <h1>{{ product.name }}</h1>
      <img :src="product.logoLocation" />
      <a :href="product.orderUrl" target="_blank">Order now</a>
      <br />
      <div v-html="product.shortDescription" />
      <br />
      <!-- <div v-html="product.longDescription" /> -->
    </div>
    <button @click="isEditing = !isEditing">{{ isEditing ? 'Save product' : 'Edit product' }}</button>

    <form>
      <input v-model="product.name">
      <input type="submit">
    </form>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  h1 {
    font-weight: bold;
  }

  .product {
    margin: 2rem
  }
}
</style>
