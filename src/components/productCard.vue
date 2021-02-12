<template>
  <div>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="200"
      contain
      :src="product.picSrc"
    ></v-img>

    <v-card-title>{{product.productName}}</v-card-title>

    <v-card-text>

      <div><p>Description</p>
      {{product.description}}</div>
    </v-card-text>

    <v-divider class="mx-2"></v-divider>
    <v-card-title>Price {{product.price}}$</v-card-title>
    <v-divider class="mx-2"></v-divider>
    <v-card-actions
      class="d-flex justify-center"
    >
      <v-btn
        color="primary"
      >
        Add to cart
      </v-btn>
      <router-link :to="{ name: 'product', params: {id: product.id}}">
        <v-btn
          class="ml-2"
          color="primary"
        >
          Open
        </v-btn>
      </router-link>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: 'productCard',
  props: ['product']
}
</script>
