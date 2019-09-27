<template>
  <div class="list-background">
    <v-container>
      <v-layout row wrap>
        <v-flex md4 sm6 xs12 v-for="item in items" :key="item.id" class="item">
          <Car :car="item" />
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="overlay" />
  </div>
</template>

<script>
import Car from "../components/Car";
export default {
  name: "List",
  props: ["items"],
  components: { Car }
};
</script>
<style lang="scss">
@import "../scss/variables/_colors.scss";
.item {
  z-index: 100;
  padding: 16px;
}
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
.list-background {
  background-color: $red;
  min-height: calc(100vh - 92px);
  z-index: 1;
}
</style>
