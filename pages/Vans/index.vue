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
    vans: []
  }),
  mounted() {
    getAllCars().then(rsp => {
      const vans = rsp.data;
      this.vans = vans && vans.filter(car => car.tip === "van");
    });
  }
};
</script>
