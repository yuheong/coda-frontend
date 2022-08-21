<script setup lang="ts">
import type { Product } from "@/types/Product";
import { ref, onMounted } from "vue";

const props = defineProps({
    editableProduct: Object
})

const emit = defineEmits(['cancel', 'save'])

const productEdit = ref({} as Product)

onMounted(() => {
    productEdit.value = { ...props.editableProduct as Product }
})


function editProduct() {
    emit('save', productEdit.value)
}

function cancelEdits() {
    emit('cancel')
}

</script>

<template>
    <div>
        <form @submit.prevent="editProduct">
            <div class="input-field">
                <label for="product-gvt-id">GVT ID</label>
                <input id="product-gvt-id" v-model="productEdit.gvtId" type="number">
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
                <textarea id="long-description" v-model="productEdit.longDescription" type="text" />
            </div>

            <div class="input-field">
                <label for="product-url">Product URL</label>
                <input id="product-url" v-model="productEdit.productUrl" />
            </div>

            <div class="input-field">
                <label for="voucher-type-name">Voucher type name</label>
                <input id="voucher-type-name" v-model="productEdit.voucherTypeName" type="text" />
            </div>

            <div class="input-field">
                <label for="order-url">Order URL</label>
                <input id="order-url" v-model="productEdit.orderUrl" type="text" />
            </div>

            <div class="input-field">
                <label for="product-title">Product title</label>
                <input id="product-title" v-model="productEdit.productTitle" type="text" />
            </div>

            <br />
            <div class="form-buttons">
                <button class="cancel" @click="cancelEdits">Cancel edit</button>
                <button>Update product</button>
            </div>

        </form>
    </div>
</template>

<style scoped>
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
    justify-content: center;
    align-items: center;
}

button.cancel {
    background-color: rgb(145, 144, 144);
    margin-right: 40px;
}

button {
    width: 10vw;
    padding: 10px 15px;
    background-color: rgb(108, 37, 105);
    color: white;
}
</style>