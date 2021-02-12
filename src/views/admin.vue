<template>
  <v-main>
    <div class="mt-5 text-center col-12">
      <h1>Admin Panel</h1>
    </div>
    <v-container
      fluid
      class="col-12 d-flex flex-wrap justify-space-around"
    >
      <v-progress-circular
        v-if="loading"
        :size="80"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <div
      v-else
      class="col-12 d-flex flex-wrap justify-space-around"
      >
        <addCategory @created="addNewCategory"/>

        <addProduct :categories="this.categories"/>
      </div>

    </v-container>
  </v-main>
</template>

<script>
import addCategory from '@/components/addCategory'
import addProduct from '@/components/addProduct'

export default {
  name: 'admin',
  data: () => ({
    categories: [],
    loading: true
  }),
  components: {
    addCategory,
    addProduct
  },
  async mounted () {
    this.categories = await this.$store.dispatch('fetchCategories')
    console.log(this.categories)
    this.loading = false
  },
  methods: {
    addNewCategory (category) {
      this.categories.push(category)
    }
  }
}
</script>
