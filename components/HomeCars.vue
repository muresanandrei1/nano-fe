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
      const rapid = rsp.data.find(car => car.id === 12);
      const pejo = rsp.data.find(car => car.id === 18);
      const yaris = rsp.data.find(car => car.id === 16);
      const duster = rsp.data.find(car => car.id === 15);
      debugger;
      this.cars = [rapid, pejo, yaris, duster];
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
