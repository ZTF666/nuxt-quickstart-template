<template>
  <!-- <v-layout column justify-center align-center> -->
  <!-- <div class="d-flex flex-wrap justify-center align-start"> -->
  <!-- <div v-for="n in 10" :key="n" class="ma-5">
        <v-card class="ma-5" max-width="350" max-height="500">
          <center>
            <v-card-text>
              <h3>TITLE</h3>
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
      </div> -->
  <!-- </div> -->
  <!-- </v-layout> -->

  <div
    id="comp-profile"
    class="d-flex flex-column justify-center align-center m-auto"
  >
    <img :src="logo" alt />
    <h1 class="secondary--text">{{ name }}</h1>

    <div class="typ secondary--text">
      <typical
        class="vt-subTitle zy"
        :steps="[
          'Hello there 👋 !',
          500,
          description,
          1000,
          ' part time 🎮 developer',
          1000,
          'and founder of BlackHole🌌Studio.',
          1000,
          'A small one man studio ',
          1000,
          'ready to contribute to the open-source world .',
          1000,
        ]"
        :loop="Infinity"
        :wrapper="'h3'"
      ></typical>
    </div>
  </div>
</template>

<script>
import typical from 'vue-typical'
import styles from 'vue-pure-lightbox/dist/VuePureLightbox.css'
import VuePureLightbox from 'vue-pure-lightbox'
export default {
  components: {
    VuePureLightbox,
    typical,
  },
  data() {
    return {
      description: "I'm a software 💻 engineer, ",
      logo:
        'https://avatars0.githubusercontent.com/u/32502988?s=460&u=5a6935d6381f2f23e3901dfd6f2b60eaf46c9c53&v=4',
      name: 'ZTF',
    }
  },
}
</script>
//

<style lang="scss" scoped>
.gg {
  max-width: 200px;
  max-height: 180px;
}
#comp-profile {
  height: 80vh;
  img {
    max-height: 100px;
    border-radius: 100px;
  }

  .typ {
    width: auto;
    height: 50px;
  }
}
</style>
