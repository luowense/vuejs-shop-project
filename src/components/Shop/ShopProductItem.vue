<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img style="height: 150px;" v-bind:src="product.img"/>
    </div>
    <div>
      <h3 class="text-center">{{ product.title }}</h3>
      <hr>
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <span>{{ product.price }}</span>
      <button class="btn btn-primary btn-sm float-right">Commander</button>
    </div>
  </div>
</template>

<script>

export default {
  props: ['product']
}
</script>

<style>
.product-container {
  height: 400px;
}

p {
  font-size: 12px;
}
</style>
