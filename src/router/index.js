import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/fakeShop',
    name: 'fakeShop',
    component: () => import('@/views/FakeShop.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/views/product.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin.vue'),
    beforeEnter: (to, from, next) => {
      // routing to admin only if login === admin
      if (store.getters.info.admin) {
        next()
      } else {
        next({ path: '/' })
      }
    }
  }
  /* {
    path: '/about',
    name: 'About',
    route level code-splitting
    this generates a separate chunk (about.[hash].js) for this route
    which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/About.vue')
  } */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
