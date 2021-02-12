<template>
  <v-card class="mb-10 col-11 elevation-12" max-height="250" max-width="350">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>New category</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form
        ref="form"
        @submit.prevent="addCategory"
      >
        <v-text-field
          label="Category"
          v-model="categoryTitle"
          required
        ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="success"
          type="submit"
          >
          Add category
        </v-btn>
      </v-card-actions>
    </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'addCategory',
  data: () => ({
    categoryTitle: ''
  }),
  methods: {
    async addCategory () {
      try {
        const cat = await this.$store.dispatch('createCategory', {
          category: this.categoryTitle, title: this.categoryTitle
        })
        this.categoryTitle = ''
        this.$emit('created', cat)
      } catch (e) { console.log(e) }
    }
  }
}
</script>
