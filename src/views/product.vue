<template>
  <div class="pa-15 product d-flex flex-wrap justify-center">
    <h1>{{singleProduct.productName}}</h1>
    <v-row>
      <v-col>
        <v-img
        class="mt-sm-10 product_img"
        eager
        :src="singleProduct.picSrc"
        contain
        width="350"
        height="350"
        ></v-img>
      </v-col>
      <v-col>
        <p
        class="mt-sm-15 ml-10 mr-10"
        >{{singleProduct.description}}</p>
        <v-row class="justify-space-around">
          <v-card-title
          class="mt-3"
          >Price {{singleProduct.price}}$</v-card-title>
          <v-btn
          class="mt-5"
          color="primary"
          >
          Add to cart
        </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'product',
  data: function () {
    return {

    }
  },
  async mounted () {
    await this.$store.dispatch('fetchProducts')
    await this.$store.dispatch('fetchProductById', this.$router.currentRoute.params.id)
  },
  computed: {
    ...mapState(['singleProduct'])
  }
}
</script>

<style>
.product{
  text-align: center;
  margin: 0 20vw;
}
.product_img{
  border: 2px solid #000;
}
</style>
