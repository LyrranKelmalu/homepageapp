<template>
  <v-card class="mb-10 col-11 elevation-12" max-width="350">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>New product</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form
        ref="form"
        @submit.prevent="addProduct"
      >
        <v-text-field
          label="Product name"
          v-model="product.productName"
          required
        ></v-text-field>
        <v-select
          :items="categories"
          v-model="product.category"
          name="category"
          item-text="category"
          label="Category"
        ></v-select>
        <v-text-field
          label="Picture Url"
          v-model="product.picSrc"
          required
        ></v-text-field>
        <v-textarea
          solo
          name="input-7-4"
          label="Product description"
          v-model="product.description"
        ></v-textarea>
        <v-text-field
          label="Price"
          v-model="product.price"
          prefix="$"
        ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="success"
          type="submit"
          >
          Add product
        </v-btn>
      </v-card-actions>
    </v-form>
    </v-card-text>
    <div
      class="white text-center py-1"
    >
    </div>
  </v-card>
</template>

<script>

export default {
  name: 'addProduct',
  props: ['categories'],
  data: () => ({
    product: {
      productName: '',
      category: '',
      categoryId: '',
      picSrc: '',
      description: '',
      price: ''
    }
  }),
  methods: {
    async addProduct () {
      try {
        this.categories.forEach(async e => {
          if (e.category === this.product.category) {
            this.product.categoryId = e.id
          }
        })
        const prod = {
          productName: this.product.productName,
          picSrc: this.product.picSrc,
          description: this.product.description,
          price: this.product.price
        }
        await this.$store.dispatch('createProduct', {
          product: prod, categoryName: this.product.category
        })
        this.productName = ''
        this.category = ''
        this.categoryId = ''
        this.picSrc = ''
        this.description = ''
        this.price = ''
      } catch (e) {
        console.log(e)
      }
      /* const result = this.categories.filter(e => e === this.product.category)
      console.log(this.categories)
      console.log(result) */
    }
  }
}
</script>
