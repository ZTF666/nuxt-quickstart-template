<template>
  <!-- <v-layout column justify-center align-center> -->
  <div class="d-flex flex-wrap justify-center align-start">
    <div v-for="n in 4" :key="n" class="ma-5">
      <v-card class="ma-5" max-width="350" max-height="500">
        <center>
          <v-card-text>
            <h3>Click Picture</h3>
          </v-card-text>
        </center>
        <VuePureLightbox
          thumbnail="https://avatars0.githubusercontent.com/u/32502988?s=460&u=5a6935d6381f2f23e3901dfd6f2b60eaf46c9c53&v=4"
          class="gg"
          :images="[
              {
                link: 'https://avatars0.githubusercontent.com/u/32502988?s=460&u=5a6935d6381f2f23e3901dfd6f2b60eaf46c9c53&v=4',
                alt: 'Me',
              },
              {
                link:
                  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FigHeO82Y648%2Fmaxresdefault.jpg&f=1&nofb=1',
                alt: 'Cat',
              },
            ]"
        >
          <template v-slot:content="{ url: { link } }">
            <img :src="link" />
          </template>
        </VuePureLightbox>
      </v-card>
    </div>
  </div>
  <!-- </v-layout> -->
</template>

<script>
import styles from 'vue-pure-lightbox/dist/VuePureLightbox.css'
import VuePureLightbox from 'vue-pure-lightbox'
export default {
  components: {
    VuePureLightbox,
  },
}
</script>

<style>
</style>