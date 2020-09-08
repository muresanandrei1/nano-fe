<template>
  <div class="list-background">
    <section>
      <div class="hero">
        <v-container class="index-power">
          <v-flex class="hero_text">
            <h1>
              Tarife închirieri auto Cluj si Aeroport Cluj-Napoca
            </h1>
          </v-flex>
        </v-container>
      </div>
    </section>
    <section class="hero2">
      <v-container class="index-power">
        <p>
          Tarifele servicilor de
          <span class="text-red">inchirieri de maşini si rent a car</span> sunt
          finale si includ : TVA, Asigurare, Rovinieta, Taxa Cauciucuri si Taxa
          Aeroport. Tarifele rent a car sunt exprimate in Euro/zi. In pret nu
          sunt incluse: combustibilul, amenzi de circulatie sau costuri/amenzi
          de parcare.
        </p>
        <v-layout colum align-center>
          <v-flex md1>
            <p class="pt-3">Plata cu:</p>
          </v-flex>
          <v-flex md1>
            <img
              src="../assets/visa-inc-vector-logo.png"
              alt="visa"
              width="50"
            />
          </v-flex>
          <v-flex md1>
            <img
              src="../assets/mastercard-logo.png"
              alt="mastercard"
              width="50"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <v-container>
      <div class="make-scrollable">
        <v-layout row wrap class="price-table">
          <v-flex md4 class="table-item table-item__header">Masina</v-flex>
          <v-flex md2 class="table-item table-item__header">1-4 zile</v-flex>
          <v-flex md2 class="table-item table-item__header">5-9 zile</v-flex>
          <v-flex md2 class="table-item table-item__header">> 9 zile</v-flex>
          <v-flex md2 class="table-item table-item__header">Garantie</v-flex>
        </v-layout>
        <v-layout
          row
          wrap
          class="price-table"
          v-for="car in cars"
          :key="car.id"
        >
          <v-flex md4 class="table-item">{{ car.nume }}</v-flex>
          <v-flex md2 class="table-item">{{ car.pret1 }} &euro; / zi</v-flex>
          <v-flex md2 class="table-item">{{ car.pret2 }} &euro; / zi</v-flex>
          <v-flex md2 class="table-item">{{ car.pret3 }} &euro; / zi</v-flex>
          <v-flex md2 class="table-item" v-if="car.pret4"
            >{{ car.pret4 }} &euro;</v-flex
          >
        </v-layout>
      </div>
      <!-- <v-data-table :headers="headers" :items="cars" :total-items="100" hide-actions>
        <template v-slot:items="props" class="price-table">
          <td>{{ props.item.nume }}</td>
          <td class="text-xs-left">{{ props.item.pret1 }}</td>
          <td class="text-xs-left">{{ props.item.pret2 }}</td>
          <td class="text-xs-left">{{ props.item.pret3 }}</td>
          <td class="text-xs-left">{{ props.item.pret4 }}</td>
        </template>
      </v-data-table>-->
    </v-container>
    <section class="hero2">
      <v-container class="index-power">
        <p>
          Pentru mai multe informatii despre ce masini de inchiriat avem
          disponibile in Aeroportul Cluj-Napoca va invitam sa ne contactati pe
          email:
          <a href="mailto:nano.rentacar.cluj@gmail.com"
            >nano.rentacar.cluj@gmail.com</a
          >
          sau la numarul de telefon: <a href="tel:0743285053">0743285053</a>,
          sau folositi rubrica
          <router-link to="/contact">’’Contact’’</router-link>.
        </p>
      </v-container>
    </section>
    <v-container class="overlay" />
  </div>
</template>
<script>
import { getAllCars } from "../service/cars";
export default {
  name: "Prices",
  data: () => ({
    cars: [],
  }),
  head() {
    return {
      title:
        "Tarife inchirieri de masini Nano rent a car Cluj - inchirieri auto Cluj ieftin si fara taxe ascunse",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Tarife inchirieri auto Cluj Nano rent a car. Peste 50 de masini de inchiriat la cele mai mici preturi de pe piata de rent a car Cluj cu toate taxele incluse.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "tarife masini de inchiriat, inchirieri auto si rent a car, Nano rentacar Cluj, aeroport, inchirieri auto cluj ieftine",
        },
      ],
    };
  },
  mounted() {
    getAllCars().then((rsp) => (this.cars = rsp.data));
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 550px) {
  .container {
    overflow: auto;
  }
  .make-scrollable {
    width: 1500px;
    overflow-x: scroll;
  }
}
.price-table {
  padding: 24px;
  border-bottom: 1px solid white;
}
.table-item {
  max-width: 285px;
  z-index: 12;
  color: #fff;
  font-size: 18px;
  &__header {
    width: 180px;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
  }
}
.index-power {
  z-index: 2;
  position: relative;
}
.hero {
  height: 400px;
  background-image: url("../assets/tarife.webp");
  background-size: cover;
  background-position: 100% 60%;
  display: flex;
  &_text {
    h1 {
      font-size: 40px;
      color: #fff;
      text-align: center;
    }
  }
}
.hero2 {
  background: #fff;
  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
}
</style>
