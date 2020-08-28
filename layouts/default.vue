<template>
  <v-app :dark="setTheme">
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary secondary--text"
      class="hidden-xs-only"
      dense
    >
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2 img"
        contain
        :src="logo"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title v-text="title" />

      <v-btn text>
        <v-switch
          v-model="goDark"
          color="dark"
          :label="icon"
          class="mt-5"
        ></v-switch>
      </v-btn>
      <v-spacer />
      <v-btn text class="secondary--text" nuxt to="/">Home</v-btn>
      <v-btn text class="secondary--text mr-5" nuxt to="/inspire">About</v-btn>
    </v-app-bar>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
      class="hidden-sm-and-up"
    >
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2 img"
        contain
        :src="logo"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title v-text="title" class="secondary--text" />
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <!-- <v-list-item> -->
          <v-list-item-content>
            <v-btn text>
              <v-switch
                v-model="goDark"
                color="secondary"
                :label="icon"
                class="mb-5"
              ></v-switch>
            </v-btn>

            <!-- <v-spacer></v-spacer> -->
            <v-btn text class="secondary--text" nuxt to="/">Home</v-btn>
            <v-btn text class="secondary--text mr-5" nuxt to="/inspire"
              >About</v-btn
            >
          </v-list-item-content>

          <!-- </v-list-item> -->
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main :class="BgCol">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app color="primary secondary--text">
      <span>
        &copy; {{ new Date().getFullYear() }} -
        <strong>ZTF</strong>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      title: 'Vuetify.js',
      icon: '🌚',
      goDark: true,
      BgCol: 'bg',
      logo:
        'https://avatars0.githubusercontent.com/u/32502988?s=460&u=5a6935d6381f2f23e3901dfd6f2b60eaf46c9c53&v=4',
    }
  },
  computed: {
    setTheme() {
      if (this.goDark === true) {
        this.$vuetify.theme.dark = true
        this.icon = '🌚'
        this.BgCol = 'bg'
      } else {
        this.$vuetify.theme.dark = false
        this.icon = '🌞'
        this.BgCol = 'bgl'
      }
    },
  },
}
</script>
<style lang="scss">
.img {
  border-radius: 100px;
}
</style>
