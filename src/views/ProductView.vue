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
        <div class="input-field">
          <label for="product-id">ID</label>
          <input id="product-id" v-model="productEdit.id" type="number">
        </div>

        <div class="input-field">
          <label for="product-name">Name</label>
          <input id="product-name" v-model="productEdit.name" type="text">
        </div>

        <div class="input-field">
          <label for="product-tagline">Product tagline</label>
          <input id="product-tagline" v-model="productEdit.productTagline" type="text">
        </div>

        <div class="input-field">
          <label for="short-description">Short description</label>
          <textarea id="short-description" v-model="productEdit.shortDescription" />
        </div>

        <div class="input-field">
          <label for="long-description">Long description</label>
          <textarea id="long-description" v-model="productEdit.longDescription" />
        </div>

        <br />
        <div class="form-buttons">
          <button @click="cancelEdits">Cancel edit</button>
          <br />
          <button>Update product</button>
        </div>

      </form>
    </div>

  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
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

  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input-field {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  label {
    text-align: right;
    margin-right: 30px;
  }

  input {
    width: 30vw;
    text-align: center;
    padding: 5px;
  }

  textarea {
    width: 30vw;
    height: 150px;
  }

  .form-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 10vw;
    padding: 10px 15px;
    background-color: rgb(108, 37, 105);
    color: white;
  }
}
</style>
