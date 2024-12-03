
<script setup>
import { ref } from 'vue';

const id = '1';
const urlDetailProduct = 'https://67414054e4647499008d305b.mockapi.io/api/v1/products/' + id;
const product = ref({});

async function getProduct() {
  product.value = await (await fetch(urlDetailProduct)).json();
}

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

getProduct();
</script>

<template>
  <div class="container">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" alt="Product Image" width="200" />
    <p>Quantity: {{ product.quantity }}</p>
    <p>Price: {{ formatPrice(product.price) }}</p>
    <p>{{ product.description }}</p>
  </div>
</template>
