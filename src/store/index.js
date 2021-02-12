import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    productArray: [],
    singleProduct: []
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    },
    clearState (state) {
      state.productArray = []
    },
    clearSingleproduct (state) {
      state.singleProduct = []
    },
    addProducts (state, products) {
      const x = Object.values(products)
      for (let i = 0; i < x.length; i++) {
        for (let n = 0; n < Object.values(x[i]).length; n++) {
          const key = Object.keys(x[i])[n]
          const value = Object.values(x[i])[n]
          if ((typeof value) === 'object') {
            value.id = key
            state.productArray.push(value)
          }
        }
      }
    },
    getSingleProduct (state, id) {
      state.productArray.forEach(e => {
        if (e.id === id) {
          state.singleProduct = e
        }
      })
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth,
    info,
    products
  }
})
