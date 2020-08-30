<template>
  <div id="comp-profile" class="d-flex flex-column justify-center align-center m-auto">
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

export default {
  components: {
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
