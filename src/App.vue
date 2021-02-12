<template>
  <v-app id="app">
    <navbar class="navbar"/>
    <main>
      <router-view/>
    </main>
    <AppFooter />
  </v-app>
</template>

<script>
import navbar from '@/components/nav/navbar'
import AppFooter from '@/components/nav/footer'

export default {
  components: {
    navbar,
    AppFooter
  }
}
</script>

<style>

</style>
