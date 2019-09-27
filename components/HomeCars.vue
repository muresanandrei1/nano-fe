<template>
  <div class="home-cars">
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm3 md3 lg3 v-for="car in this.cars" :key="car.id" class="item">
          <Car :car="car" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { getAllCars } from "../service/cars";
import Car from "../components/Car";

export default {
  name: "HomeCars",
  components: { Car },
  data: () => ({
    cars: []
  }),
  props: {
    title: String,
    vmaLinks: Array,
    mdcLinks: Array
  },
  mounted() {
    getAllCars().then(rsp => {
      const cars = rsp.data;
      this.cars = cars.splice(0, 4);
    });
  }
};
</script>

<style lang="scss">
@import "../scss/variables/_colors.scss";
.home-cars {
  background-color: $red;
  min-height: 400px;
}
.item {
  z-index: 2;
  padding: 16px;
}
</style>
