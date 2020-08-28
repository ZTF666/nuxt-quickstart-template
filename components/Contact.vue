<template>
  <v-layout column justify-center align-center>
    <v-card class="mx-auto mt-15" width="750">
      <v-card-title
        class="headline primary secondary--text justify-center"
        primary-title
        >Thank you for reaching out !</v-card-title
      >

      <v-card-text>
        <template>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="sender"
              :counter="15"
              :rules="sendRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-textarea
              v-model="message"
              :rules="messageRules"
              label="Message"
              required
              :counter="250"
              no-resize
            ></v-textarea>

            <center>
              <v-btn
                color="accent"
                @click.prevent="validate"
                :disabled="!valid"
                class="ma-5"
                >Send</v-btn
              >
            </center>
          </v-form>
        </template>
      </v-card-text>

      <!-- <v-divider></v-divider> -->
    </v-card>
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn color="secondary" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
const date = new Date()
const formattedDate = date.toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
})
export default {
  components: {},
  data() {
    return {
      valid: true,
      sender: '',
      sendRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 15) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
      messageRules: [
        (v) => !!v || "come on ! don't be shy , say something",
        (v) =>
          (v && v.length <= 250) || 'Message must be less than 250 characters',
      ],
      dialog: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 3000,
      text: 'Your message has been sent , thank you !',
      snackbar: false,
      valid: true,
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        //  DB stuff or Firestore
        this.dialog = false
        this.snackbar = true
        this.clear()
        setTimeout(() => {
          this.$router.replace({ name: 'inspire' })
        }, 3000)
      } else {
      }
    },
    clear() {
      this.sender = ''
      this.message = ''
      this.email = ''
      this.$refs.form.resetValidation()
    },
  },
}
</script>
