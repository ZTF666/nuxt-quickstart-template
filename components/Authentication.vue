<template>
  <v-card class="zztop">
    <v-card-title class="justify-center">
      <v-alert v-show="alert" type="error">
        <center>{{ Title }}</center>
      </v-alert>
    </v-card-title>
    <v-toolbar>
      <template v-slot:extension>
        <v-tabs v-model="tabs" centered>
          <v-tab class="secondary--text">Connexion</v-tab>
          <v-tab class="secondary--text">Register</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item class="ma-10">
        <v-form ref="formL" v-model="valid" lazy-validation class="ma-10">
          <v-text-field
            v-model="login"
            :rules="loginRules"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            required
          ></v-text-field>
          <center>
            <v-btn
              :disabled="!valid"
              color="accent"
              class="ma-5"
              @click="validateConnexion()"
              >Log In</v-btn
            >
          </center>
        </v-form>
      </v-tab-item>
      <v-tab-item class="ma-10">
        <v-form ref="formC" v-model="valid" lazy-validation class="ma-10">
          <v-text-field
            v-model="login"
            :counter="10"
            :rules="loginRules"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            v-model="pseudo"
            :rules="pseudoRules"
            label="Your made up name 😁"
            required
          ></v-text-field>
          <center>
            <v-btn
              :disabled="!valid"
              color="accent"
              class="ma-5"
              @click="validateCreate()"
              >Join Us</v-btn
            >
          </center>
        </v-form>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      Title: 'Welcome',
      alert: false,
      show1: false,
      tabs: null,
      valid: true,
      password: '',
      pseudo: '',
      pseudoRules: [
        (v) => !!v || 'Made up name is required',
        (v) => (v && v.length >= 6) || 'Must be 6 or more characters',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 6) || 'Password must be 6 or more characters',
      ],
      login: '',
      loginRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    validateConnexion() {
      if (this.$refs.formL.validate()) {
        //   firestore stuff or whatever
      }
    },
    validateCreate() {
      if (this.$refs.formC.validate()) {
        //   firestore stuff or whatever
      }
      this.login = ''
      this.password = ''
      this.resetC()
    },
    resetL() {
      this.$refs.formL.resetValidation()
    },
    resetC() {
      this.$refs.formC.resetValidation()
    },
  },
}
</script>

<style></style>
