import firebase from '@firebase/app'

export default {
  actions: {
    // here we create categories for products
    async createCategory ({ commit }, { category, title }) {
      try {
        console.log(category)
        const cat = await firebase.database().ref('/categories/' + title).set({ category })
        console.log(cat)
        return { category }
      } catch (e) {
        console.log(e)
      }
    },
    // here we get categories for products
    async fetchCategories ({ commit, dispatch }) {
      try {
        const categories = (await firebase.database().ref('/categories').once('value')).val() || {}
        return Object.keys(categories).map(key => ({ ...categories[key], id: key }))
      } catch (e) {
        console.log(e)
      }
    },
    // here we create product
    async createProduct ({ commit }, { product, categoryName }) {
      try {
        await firebase.database().ref(`/categories/${categoryName}/`).push(product)
      } catch (e) {
        console.log(e)
      }
    },
    // here we get products from database
    async fetchProducts ({ commit, dispatch }) {
      try {
        commit('clearState')
        const products = (await firebase.database().ref('/categories/').once('value')).val() || {}
        commit('addProducts', products)
        return Object.keys(products).map(key => ({ ...products[key], id: key }))
      } catch (e) {
        console.log(e)
      }
      //test
    },
    // here we make single product array to each product
    async fetchProductById ({ commit }, id) {
      commit('clearSingleProduct')
      commit('getSingleProduct', id)
    }
  }
}
