<template>
  <v-main class="fakeShop">
    <v-container>
      <v-container class="pa-10 col-12 d-flex flex-wrap justify-center">
        <v-card
          v-for="(product, index) in items"
          :key="index"
          class="mx-auto mt-3 mb-3"
          max-width="350"
        >
          <productCard :product = product></productCard>
        </v-card>
      </v-container>
      <div class="text-center mb-10">
      <v-pagination
        v-model="page"
        :length="pageCount"
        :value="page"
      ></v-pagination>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import productCard from '@/components/productCard'

export default {
  components: { productCard },
  name: 'FakeShop',
  data: function () {
    return {
      page: +this.$route.query.page || 1,
      pageSize: 3,
      pageCount: 0,
      items: []
    }
  },
  async mounted () {
    await this.$store.dispatch('fetchProducts')
    this.setupPagination()
  },
  computed: {
    ...mapState(['productArray'])
  },
  methods: {
    setupPagination () {
      const products = this.productArray
      this.allItems = _.chunk(products, this.pageSize)
      this.pageCount = _.size(this.allItems)
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    },
    currentPage () {
      this.$router.push(`${this.$route.path}?page=${this.page}`)
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    }
  },
  watch: {
    page: function () {
      this.currentPage()
    }
  }
}
</script>

<style>

</style>
