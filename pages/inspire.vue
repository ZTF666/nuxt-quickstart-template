<template>
  <div>
    <!-- <div class="id">
      <div class="container">
        <no-ssr>
          <h1 class="center">This is a title</h1>
          <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
          >
          </vue-particles>
        </no-ssr>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  components: {},
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
