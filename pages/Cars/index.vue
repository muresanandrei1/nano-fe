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
    cars: []
  }),
  mounted() {
    getAllCars().then(rsp => {
      const cars = rsp.data;
      this.cars = cars.filter(car => car.tip === "car");
    });
    // apiCall("post", "/email/send-email", { email: "xx@xx.com" });
  }
};
</script>
