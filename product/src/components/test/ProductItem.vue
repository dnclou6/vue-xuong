
<script setup>
import { BIconCart, BIconEye } from 'bootstrap-icons-vue';

function addToCart(productName) {
  let cart = localStorage.getItem('cart');
  cart = JSON.parse(cart);
  if (cart === undefined || cart === null) {
    cart = {};
  }

  if (productName in cart) {
    cart[productName] = cart[productName] + 1;
  } else {
    cart[productName] = 1;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}
</script>

<template>
  <div class="card">
    <img class="card-image-top" :src="productImage" alt="Product Image" width="100%" />
    <div class="card-body">
      <h4 class="card-title">
        <slot name="productName"></slot>
      </h4>
      <p class="card-text">
        <slot name="productPrice"></slot>
      </p>
      <RouterLink to="/product/1" class="btn btn-success">
        <BIconEye />
      </RouterLink>
      <button class="btn btn-warning ml-2" @click="addToCart(productName)">
        <BIconCart />
      </button>
    </div>
  </div>
</template>
