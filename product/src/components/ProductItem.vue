<script setup>
import { BIconCart, BIconEye } from 'bootstrap-icons-vue';

const props = defineProps(['id', 'image'])  // Thêm props 'image'
const productId = props.id;
const urlDetail = "/product/" + props.id;

function addToCart() {
  let cart = localStorage.getItem('cart');
  cart = JSON.parse(cart);
  if(cart === undefined || cart === null){
    cart = {};
  }

  if(productId in cart){
    cart[productId] = cart[productId] + 1;
  }else{
    cart[productId] = 1;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Thêm sản phẩm thành công');
}
</script>

<template>
  <div class="card">
    <img class="card-image-top" :src="image" alt="NoImage" width="100%" />
    <div class="card-body">
      <h4 class="card-title">
        <slot name="productName"></slot>
      </h4>
      <p class="card-text">
        <slot name="productPrice"></slot>
      </p>
      <RouterLink :to="urlDetail" class="btn btn-success">
        <BIconEye />
      </RouterLink>
      <button class="btn btn-warning ml-2" @click="addToCart">
        <BIconCart />
      </button>
    </div>
  </div>
</template>
