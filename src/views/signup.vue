<template>
  <v-main class="signup">
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>SignUp form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form
                ref="form"
                @submit.prevent="submitHandler"
              >
                <v-text-field
                  label="E-mail"
                  prepend-icon="mdi-account"
                  :rules="emailRules"
                  v-model.trim="email"
                  type="email"
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

                <v-text-field
                  label="Name"
                  prepend-icon="mdi-lock"
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  type="text"
                  required
                ></v-text-field>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                  :disabled="!valid"
                  color="success"
                  type="submit"
                  @click="validate"
                  >
                  SignUp
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
            <div
              class="white text-center py-1"
            >
              <p>Already have account?
                <router-link to="/login">Login</router-link>
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
    ],
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ]
  }),
  methods: {
    validate () {
      this.check = this.$refs.form.validate()
    },
    async submitHandler () {
      if (!this.$refs.form.validate()) {
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      try {
        await this.$store.dispatch('signOut', formData)
        this.$router.push('/')
      } catch (e) {}
    }
  }
}
</script>

<style>

</style>
