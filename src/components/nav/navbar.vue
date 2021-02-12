<template>
  <div class="navbar">
    <v-toolbar
    dark
    >
      <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
      class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <router-link
      to="/"
      tag="span"
      >
        <v-toolbar-title>PappiDev</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items
      class="hidden-sm-and-down"
      >
        <v-btn
        v-for="(btn, index) in btns"
        :key="index"
        :to="btn.route"
        >
          {{btn.title}}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
      <v-menu offset-y rounded="0">
      <template v-slot:activator="{ on, attrs }">
          <v-toolbar-items>
            <v-btn>
              <v-icon>{{icon.cart}}</v-icon>
            </v-btn>
          </v-toolbar-items>
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left>{{icon.profile}}</v-icon>
            {{ info.name ? `${info.name}` : `${profile}` }}
          </v-btn>
      </template>
      <v-list>
          <v-list-item
            v-for="(link, index) in profileDropDown"
            :key="index"
            :to="link.route"
          >
            <v-list-item-title style="text-align: center;">
              {{ link.title }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="info.name">
            <v-overlay
              absolute
              :opacity=".5"
              :value="hover"
            >
            <v-list-item-title
            @click="logout"
            >
              Exit
            </v-list-item-title>
            </v-overlay>
          </v-list-item>
      </v-list>
      </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
          >
            <v-list-item
              v-for="(btn, i) in btns" :key="i"
              :to="btn.route"
            >
              <v-list-item-title>{{btn.title}}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-snackbar
      absolute
      centered
      v-model="snackbar"
      >
      {{ erroRM }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    drawer: false,
    group: null,
    snackbar: false,
    profile: 'Profile',
    erroRM: '',
    btns: [
      { title: 'About Me', route: '/about' },
      { title: 'FakeShop', route: '/fakeShop' }
    ],
    icon: { profile: 'account_circle', cart: 'shopping_bag' }
  }),
  computed: {
    ...mapGetters({ info: 'info' }), // get user name from store
    error () {
      return this.$store.getters.error
    },
    profileDropDown () {
      if (!this.info.name) { // if not logged in ->
        return [
          { title: 'Login', route: '/login' },
          { title: 'SingUp', route: '/signup' }
        ]
      } else if (this.info.admin) { // if admin ->
        return [
          { title: 'Admin', route: '/admin' },
          { title: 'Account', route: '/account' }
        ]
      } else { // if other logged in user
        return [
          { title: 'Account', route: '/account' }
        ]
      }
    }
  },
  methods: {
    async logout () { // logout function
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
    error (fbError) {
      if (fbError) {
        this.erroRM = fbError.code
        this.snackbar = true
      }
    }
  }
}
</script>

<style>

</style>
