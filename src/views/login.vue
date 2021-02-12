<template>
  <v-main class="login">
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="11"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form
                ref="form"
                @submit.prevent="submitHandler"
              >
                <v-text-field
                  label="Email"
                  prepend-icon="mdi-account"
                  :rules="emailRules"
                  type="email"
                  v-model.trim="email"
                  required
                ></v-text-field>
                <v-text-field
                  label="Password"
                  prepend-icon="mdi-lock"
                  v-model.trim="password"
                  :rules="passwordRules"
                  type="password"
                  required
                ></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!valid"
                  color="success"
                  type="submit"
                  >
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
            </v-card-text>
            <div
              class="white text-center py-1"
            >
              <p>Have not account yet?
                <router-link to="/signup">SignUp Now</router-link>
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

export default {
  name: 'login',
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must be at least 8 characters'
    ]
  }),
  methods: {
    async submitHandler () {
      if (!this.$refs.form.validate()) {
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (e) {}
    }
  }
}
</script>

<style>
.login{
  height: 83vh;
}
</style>
