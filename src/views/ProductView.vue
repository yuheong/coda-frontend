<script setup lang="ts">
import { store } from "@/store";
import type { Product } from "@/types/Product";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"
import products from "../api/mocks/products.json"
import ProductForm from "../components/ProductForm.vue"

const route = useRoute();

const productName = route.params.product_name
const product = ref({} as Product)
const isEditing = ref(false)

onMounted(() => {
  const foundProduct = products.products.find((pdt) => (pdt.productUrl === `/ca/${productName}`))
  if (foundProduct) {
    product.value = foundProduct
  } else {
    console.error('404 product not found')
  }
})

function editProduct(editedProduct: Product) {
  product.value = { ...editedProduct }
  store.updateProduct(editedProduct)
  isEditing.value = false
}

</script>

<template>
  <main>
    <div class="product-page">
      <div class="product-details">
        <h1>{{ product.name }}</h1>
        <img :src="product.logoLocation" />
        <br />
        <p>{{ product.productTagline }}</p>
        <a :href="product.orderUrl" target="_blank">Order now</a>
        <br />
        <div v-html="product.shortDescription" class="preformatted-text" />
        <br />
        <!-- <div v-html="product.longDescription" class="preformatted-text" /> -->
      </div>

      <button @click="isEditing = true" v-if="!isEditing">Edit product</button>
      <ProductForm v-if="isEditing" :editableProduct="product" @save="editProduct" @cancel="isEditing = false" />
    </div>

  </main>
</template>

<style scoped>
h1 {
  font-weight: bold;
  margin-bottom: 20px;
}

.product-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem
}

.product-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  width: 10vw;
  padding: 10px 15px;
  background-color: rgb(108, 37, 105);
  color: white;
  font-weight: bold;
}

.preformatted-text {
  text-align: justify;
  margin: 0 4rem;
}
</style>
