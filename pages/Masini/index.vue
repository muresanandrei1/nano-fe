<template>
  <div>
    <section>
      <div class="hero">
        <v-container class="index-power">
          <v-flex class="hero_text">
            <h1>
              Masini de inchiriat in Cluj-Napoca Aeroport din Flota Nano rent a
              car
            </h1>
          </v-flex>
        </v-container>
      </div>
    </section>
    <List :items="cars" />
    <section class="hero2">
      <v-container class="index-power">
        <p>
          Nano rent a car va asteapta cu cea mai cool gama de masini de
          inchiriat la <span class="text-red">cele mai mici preturi</span> de pe
          piata de rent a car Cluj. Parcul auto cuprinde masini de inchiriat cu
          cutie manuala cat si masini de inchiriat cu cutie automata. Predarea
          si preluarea masinilor de inchiriat este gratuita la Aeroportul
          International Cluj-Napoca si in Cluj-Napoca, indiferent de ora si zi.
        </p>
        <p>
          <span class="text-red">Tarifele finale</span> ale servicilor de
          inchirieri de maşini si rent a car includ : TVA, Asigurare, Rovinieta,
          Taxa Cauciucuri si Taxa Aeroport.
        </p>
        <p>
          La momentul predari masini de inchiriat se achita: Tariful pentru
          intreaga perioada de inchiriere + Garantia
        </p>
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
  </div>
</template>
<script>
import List from "../../layouts/List";
export default {
  name: "CarsPage",
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
              "Flota inchirieri auto  Nano Rentacar - masini de inchiriat Cluj ieftin. Servicii de Inchirieri Auto Cluj fara taxe ascunse",
          },
          {
            hid: "keywords",
            name: "keywords",
            content:
              "flota auto rent a car cluj, rent a car cluj, rent a car cluj aeroport Cluj, parc auto, inchirieri auto cluj, inchirieri masini cluj, ieftin, cluj, cluj - napoca",
          },
        ],
      };
    },
  }),
  async asyncData({ $axios, params, error }) {
    const allCars = await $axios.get("api/cars");
    const cars = allCars && allCars.data.filter((car) => car.tip === "car");
    return {
      cars,
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
  background-image: url("../../assets/cars.webp");
  background-size: cover;
  background-position: 100% 70%;
  display: flex;
  &_text {
    h1 {
      font-size: 34px;
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
