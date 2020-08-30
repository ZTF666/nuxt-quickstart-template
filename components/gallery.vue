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
          thumbnail="https://ztfportfolio.web.app/_nuxt/img/me.1fafa89.png"
          class="gg"
          :images="[
              {
                link: 'https://ztfportfolio.web.app/_nuxt/img/me.1fafa89.png',
                alt: 'Cat 2',
              },
              {
                link:
                  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FigHeO82Y648%2Fmaxresdefault.jpg&f=1&nofb=1',
                alt: 'Cat 2',
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