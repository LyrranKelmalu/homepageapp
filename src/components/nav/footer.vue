<template>
  <div>
    <v-footer
      absolute
      :padless="padless"
    >
      <span>Pappidev</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      'default',
      'absolute',
      'fixed'
    ],
    padless: false,
    variant: 'default'
  }),
  computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    }
  }
}
</script>
