<template>
  <List :items="vans" />
</template>
<script>
import { getAllCars } from "../../service/cars";

import List from "../../layouts/List";
export default {
  name: "VansPage",
  components: { List },
  data: () => ({
    vans: [],
    head() {
      return {
        title: "Dube - Nano Rent a car",
        meta: [
          {
            hid: "description",
            name: "description",
            content: "Lista dubelor Nano Rent a car"
          }
        ]
      };
    }
  }),
  mounted() {
    getAllCars().then(rsp => {
      const vans = rsp.data;
      this.vans = vans && vans.filter(car => car.tip === "van");
    });
  }
};
</script>
