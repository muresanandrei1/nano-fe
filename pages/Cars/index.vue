<template>
  <List :items="cars" />
</template>
<script>
import { getAllCars } from "../../service/cars";
import { apiCall } from "../../service/api";

import List from "../../layouts/List";
export default {
  name: "CarsPage",
  components: { List },
  data: () => ({
    cars: [],
    head() {
      return {
        title: "Masini - Nano Rent a car",
        meta: [
          {
            hid: "description",
            name: "description",
            content: "Lista masinilor Nano Rent a car"
          }
        ]
      };
    }
  }),
  mounted() {
    getAllCars().then(rsp => {
      const cars = rsp.data;
      this.cars = cars && cars.filter(car => car.tip === "car");
    });
  }
};
</script>
