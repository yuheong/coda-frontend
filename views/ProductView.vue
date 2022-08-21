<script setup lang="ts">
import type { Product } from "@/types/Product";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"
import products from "../api/mocks/products.json"

const route = useRoute();

const productName = route.params.product_name
const product = ref({} as Product)
const productEdit = ref({} as Product)
const isEditing = ref(true)

onMounted(() => {
  const foundProduct = products.products.find((pdt) => (pdt.productUrl === `/ca/${productName}`))
  if (foundProduct) {
    product.value = foundProduct
  } else {
    console.log('404')
  }
  productEdit.value = { ...product.value }
  // console.log(product.value)
})

function editProduct() {
  console.log(productEdit.value)
  product.value = { ...productEdit.value }

  isEditing.value = false
}

function cancelEdits() {
  productEdit.value = { ...product.value };
  isEditing.value = false
}

</script>

<template>
  <main>
    <div class="product-page">
      <div class="product">
        <h1>{{ product.name }}</h1>
        <img :src="product.logoLocation" />
        <a :href="product.orderUrl" target="_blank">Order now</a>
        <br />
        <div v-html="product.shortDescription" />
        <br />
        <!-- <div v-html="product.longDescription" /> -->
      </div>
      <button @click="isEditing = true" v-if="!isEditing">Edit product</button>

      <form v-if="isEditing" @submit.prevent="editProduct">
        <input v-model="productEdit.id" type="number">
        <br />
        <label for="Product name">Product name</label>
        <input v-model="productEdit.name" type="text">
        <br />
        <button @click="cancelEdits">Cancel edit</button>
        <br />
        <input type="submit">
      </form>
    </div>

  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  h1 {
    font-weight: bold;
  }

  .product-page {
    margin: 2rem
  }
}
</style>
