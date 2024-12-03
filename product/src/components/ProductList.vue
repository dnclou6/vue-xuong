<script setup>
import { ref } from 'vue';
import ProductItem from './ProductItem.vue';

const products = ref([]);
const urlProducts = 'https://67414054e4647499008d305b.mockapi.io/api/v1/products';

const imageUrls = {
  1: "https://picsum.photos/640/480?image=1",
  2: "https://picsum.photos/640/480?image=2",
  3: "https://picsum.photos/640/480?image=3",
  4: "https://picsum.photos/640/480?image=4",
  5: "https://picsum.photos/640/480?image=5",
  6: "https://picsum.photos/640/480?image=6",
  7: "https://picsum.photos/640/480?image=7",
  8: "https://picsum.photos/640/480?image=8",
  9: "https://picsum.photos/640/480?image=9",
  10: "https://picsum.photos/640/480?image=10",
  11: "https://picsum.photos/640/480?image=11",
  12: "https://picsum.photos/640/480?image=12",
  13: "https://picsum.photos/640/480?image=13",
  14: "https://picsum.photos/640/480?image=14",
  15: "https://picsum.photos/640/480?image=15",
  16: "https://picsum.photos/640/480?image=16",
  17: "https://picsum.photos/640/480?image=17",
  18: "https://picsum.photos/640/480?image=18",
  19: "https://picsum.photos/640/480?image=19",
  20: "https://picsum.photos/640/480?image=20",
  21: "https://picsum.photos/640/480?image=21",
  22: "https://picsum.photos/640/480?image=22",
  23: "https://picsum.photos/640/480?image=23",
  24: "https://picsum.photos/640/480?image=24",
  25: "https://picsum.photos/640/480?image=25",
  26: "https://picsum.photos/640/480?image=26",
  27: "https://picsum.photos/640/480?image=27",
  28: "https://picsum.photos/640/480?image=28",
  29: "https://picsum.photos/640/480?image=29",
  30: "https://picsum.photos/640/480?image=30",
  31: "https://picsum.photos/640/480?image=31",
  32: "https://picsum.photos/640/480?image=32",
  33: "https://picsum.photos/640/480?image=33",
  34: "https://picsum.photos/640/480?image=34",
  35: "https://picsum.photos/640/480?image=35",
  36: "https://picsum.photos/640/480?image=36",
  37: "https://picsum.photos/640/480?image=37",
  38: "https://picsum.photos/640/480?image=38",
  39: "https://picsum.photos/640/480?image=39",
  40: "https://picsum.photos/640/480?image=40",
  41: "https://picsum.photos/640/480?image=41",
  42: "https://picsum.photos/640/480?image=42",
  43: "https://picsum.photos/640/480?image=43",
  44: "https://picsum.photos/640/480?image=44",
  45: "https://picsum.photos/640/480?image=45",
  46: "https://picsum.photos/640/480?image=46",
  47: "https://picsum.photos/640/480?image=47",
  48: "https://picsum.photos/640/480?image=48",
  49: "https://picsum.photos/640/480?image=49",
  50: "https://picsum.photos/640/480?image=50",
  51: "https://picsum.photos/640/480?image=51",
  52: "https://picsum.photos/640/480?image=52",
  53: "https://picsum.photos/640/480?image=53",
  54: "https://picsum.photos/640/480?image=54",
  55: "https://picsum.photos/640/480?image=55",
  56: "https://picsum.photos/640/480?image=56",
  57: "https://picsum.photos/640/480?image=57",
  58: "https://picsum.photos/640/480?image=58",
  59: "https://picsum.photos/640/480?image=59",
  60: "https://picsum.photos/640/480?image=60",
  61: "https://picsum.photos/640/480?image=61",
  62: "https://picsum.photos/640/480?image=62",
  63: "https://picsum.photos/640/480?image=63",
  64: "https://picsum.photos/640/480?image=64",
  65: "https://picsum.photos/640/480?image=65",
  66: "https://picsum.photos/640/480?image=66",
  67: "https://picsum.photos/640/480?image=67",
  68: "https://picsum.photos/640/480?image=68",
  69: "https://picsum.photos/640/480?image=69",
  70: "https://picsum.photos/640/480?image=70",
  71: "https://picsum.photos/640/480?image=71",
  72: "https://picsum.photos/640/480?image=72",
  73: "https://picsum.photos/640/480?image=73",
  74: "https://picsum.photos/640/480?image=74",
  75: "https://picsum.photos/640/480?image=75",
  76: "https://picsum.photos/640/480?image=76",
  77: "https://picsum.photos/640/480?image=77",
  78: "https://picsum.photos/640/480?image=78",
  79: "https://picsum.photos/640/480?image=79",
  80: "https://picsum.photos/640/480?image=80",
  81: "https://picsum.photos/640/480?image=81",
  82: "https://picsum.photos/640/480?image=82",
  83: "https://picsum.photos/640/480?image=83",
  84: "https://picsum.photos/640/480?image=84",
  85: "https://picsum.photos/640/480?image=85",
  86: "https://picsum.photos/640/480?image=86",
  87: "https://picsum.photos/640/480?image=87",
  88: "https://picsum.photos/640/480?image=88",
  89: "https://picsum.photos/640/480?image=89",
  90: "https://picsum.photos/640/480?image=90",
  91: "https://picsum.photos/640/480?image=91",
  92: "https://picsum.photos/640/480?image=92",
  93: "https://picsum.photos/640/480?image=93",
  94: "https://picsum.photos/640/480?image=94",
  95: "https://picsum.photos/640/480?image=95",
};




async function getProducts() {
  const response = await fetch(urlProducts);
  const data = await response.json();
  // Cập nhật thông tin sản phẩm với ảnh dựa trên ID
  products.value = data.map((product) => ({
    ...product,
    imageUrl: imageUrls[product.id] || "https://placehold.co/150" // Mặc định hình ảnh nếu không có URL cho ID
  }));
}

getProducts();

localStorage.setItem('name', 'Long Top 1 Server');

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price).replace('₫', '000 đ');
}
</script>

<template>
  <div class="container">
    <h1>Danh sách sản phẩm</h1>
    <RouterLink to="/cart">Xem giỏ hàng</RouterLink>
    <!-- Hiển thị danh sách -->
    <div class="row">
      <div class="col-3 g-3" v-for="product in products" :key="product.id">
        <ProductItem :id="product.id" :image="product.imageUrl">
          <template #productName> {{ product.name }} </template>
          <template #productPrice> {{ formatPrice(product.price) }} </template>
        </ProductItem>
      </div>
    </div>
  </div>
</template>
