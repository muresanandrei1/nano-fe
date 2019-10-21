<template>
  <div class="list-background">
    <v-container>
      <v-layout row wrap class="price-table">
        <v-flex md4 class="table-item table-item__header">Masina</v-flex>
        <v-flex md2 class="table-item table-item__header">1-4 zile</v-flex>
        <v-flex md2 class="table-item table-item__header">5-9 zile</v-flex>
        <v-flex md2 class="table-item table-item__header">> 9 zile</v-flex>
        <v-flex md2 class="table-item table-item__header">Garantie</v-flex>
      </v-layout>
      <v-layout row wrap class="price-table" v-for="car in cars" :key="car.id">
        <v-flex md4 class="table-item">{{car.nume}}</v-flex>
        <v-flex md2 class="table-item">{{car.pret1}} &euro; / zi</v-flex>
        <v-flex md2 class="table-item">{{car.pret2}} &euro; / zi</v-flex>
        <v-flex md2 class="table-item">{{car.pret3}} &euro; / zi</v-flex>
        <v-flex md2 class="table-item" v-if="car.pret4">{{car.pret4}} &euro;</v-flex>
      </v-layout>
    </v-container>
    <v-container class="overlay" />
  </div>
</template>
<script>
import { getAllCars } from "../service/cars";
export default {
  name: "Prices",
  data: () => ({
    cars: []
  }),
  head() {
    return {
      title: "Preturi - Nano Rent a car",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Preturile masinilor Nano Rent a car"
        }
      ]
    };
  },
  mounted() {
    getAllCars().then(rsp => (this.cars = rsp.data));
  }
};
</script>
<style lang="scss" scoped>
.price-table {
  padding: 24px;
  border-bottom: 1px solid white;
}
.table-item {
  z-index: 12;
  color: #fff;
  font-size: 18px;
  &__header {
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
  }
}
</style>