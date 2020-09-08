<template>
  <div>
    <section>
      <div class="hero">
        <v-container class="index-power">
          <v-flex class="hero_text">
            <h1>
              Inchirieri auto si rent a car Cluj 8+1 locuri
            </h1>
          </v-flex>
        </v-container>
      </div>
    </section>
    <List :items="vans" />
    <section class="hero2">
      <v-container class="index-power">
        <p>
          Nano rent a car va pune la dispozitie inchirieri microbuz de 8+1
          locuri. Microbuzele de 8+1 locuri se conduc cu permis de conducere
          categoria B si sunt foarte usor de manevrat. Pentru mai multe
          informatii despre ce masini de inchiriat avem disponibile in
          Aeroportul Cluj-Napoca va invitam sa ne contactati pe email:
          <a href="mailto:nano.rentacar.cluj@gmail.com"
            >nano.rentacar.cluj@gmail.com</a
          >
          sau la numarul de telefon: <a href="tel:0743285053">0743285053</a>,
          sau folositi rubrica
          <router-link to="/contact">’’Contact’’</router-link>.
        </p>
      </v-container>
    </section>
  </div>
</template>
<script>
import { getAllCars } from "../../service/cars";

import List from "../../layouts/List";
export default {
  name: "VansPage",
  components: { List },
  data: () => ({
    head() {
      return {
        title: "Flota masini de inchiriat si rent a car Nano Rent a car Cluj",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Inchiriere 8+1 locuri  Nano rent a car,| Inchiriere 8+1 van de la Nano rent a car, Nano rent a van 8+1 locuri Cluj-Napoca, Nano rent a car inchiriere microbuz Aeroport Cluj",
          },
          {
            hid: "keywords",
            name: "keywords",
            content:
              "flota auto Nano rent a car 8+1 locuri  cluj, Nano rent a car cluj, rent a car 8+1 aeroport Cluj,  inchirieri auto cluj nano rent a car, inchirieri masini cluj ieftin,  cluj, cluj - napoca",
          },
        ],
      };
    },
  }),
  async asyncData({ $axios, params, error }) {
    const allCars = await $axios.get("api/cars");
    const vans = allCars && allCars.data.filter((car) => car.tip === "van");
    return {
      vans,
    };
  },
};
</script>
<style lang="scss" scoped>
.index-power {
  z-index: 2;
  position: relative;
}
.hero {
  height: 300px;
  background-image: url("../../assets/vans.webp");
  background-size: cover;
  background-position: 100% 70%;
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
