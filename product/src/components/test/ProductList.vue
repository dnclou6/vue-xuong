
<script setup>
import { ref } from 'vue';
import ProductItem from './ProductItem.vue';

const products = ref([]);
const urlProducts = 'https://67414054e4647499008d305b.mockapi.io/api/v1/products';

async function getProducts() {
  products.value = await (await fetch(urlProducts)).json();
}

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

getProducts();
</script>

<template>
  <div class="container">
    <h1>Danh sách sản phẩm</h1>
    
    <!-- Hiển thị danh sách -->
    <div class="row">
      <div class="col-3 g-3" v-for="product in products" :key="product.id">
        <ProductItem :productName="product.name" :productImage="product.image">
          <template #productName> {{ product.name }} </template>
          <template #productPrice> {{ formatPrice(product.price) }} </template>
        </ProductItem>
      </div>
    </div>

  </div>
</template>
