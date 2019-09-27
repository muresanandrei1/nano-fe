<template>
  <div class="home">
    <section class="hero">
      <div class="hero-image">
        <div class="hero-text">
          <h1>GASESTE</h1>
          <h1>MASINA PERFECTA</h1>
          <h1>PENTRU TINE.</h1>
          <div class="hero-text__bottom">
            <p class="bold">Mai jos poti gasi cea mai cool gama de masini.</p>
            <p>alege preferata ta si exploreaza clujul</p>
          </div>
        </div>
      </div>
    </section>
    <HomeCars />
    <v-container class="pa-0 overlay" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCars from "@/components/HomeCars.vue";

export default {
  name: "home",
  components: {
    HomeCars
  }
};
</script>
<style lang="scss" scoped>
.overlay {
  background-image: url("../assets/texture.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  height: 100%;
  pointer-events: none;
  top: 0;
  left: 50%;
  width: 100%;
  right: 50%;
  z-index: 1;
  transform: translateX(-50%);
}
.bold {
  font-weight: 800;
}
.hero {
  height: 500px;
  &-text {
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      line-height: 65px;
      font-size: 70px;
      font-family: "Roboto";
      font-style: italic;
    }
    &__bottom {
      font-size: 16px;
      text-align: center;
      margin-top: 24px;
      p {
        text-transform: uppercase;
        margin-bottom: 0;
      }
    }
  }
  &-image {
    position: relative;
    background-image: url("../assets/homepage.jpg");
    background-size: cover;
    background-position: center;
    height: inherit;
  }
}
</style>
