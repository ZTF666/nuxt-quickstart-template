<template>
  <div>
    <div class="id">
      <div class="container">
        <no-ssr>
          <h1 class="center">This is a title</h1>
          <vue-particles
            color="#0afc2e"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="10"
            linesColor="#0afc2e"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
          ></vue-particles>
        </no-ssr>
      </div>
    </div>
    <auth class="id" />
    <contact class="id" />
    <gallery class />
  </div>
</template>

<script>
import auth from '../components/Authentication'
import contact from '../components/Contact'
import gallery from '../components/gallery'
export default {
  components: {
    auth,
    contact,
    gallery,
  },
}
</script>
<style scoped>
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.container {
  position: relative;
}
.id {
  height: 100vh;
}
</style>