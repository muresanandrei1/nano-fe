<template>
  <div class="car-details-page" v-if="car">
    <v-container class="index" align-center justify-center fill-height>
      <v-layout row wrap justify-center align-center>
        <v-flex xs12 sm12 md6 lg6 class="index pa-3">
          <img :src="`/api${car.poza.url}`" width="500" />
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 class="index pa-3">
          <div class="car-details">
            <div class="car-details__header">
              <h1>{{ car.nume }}</h1>
              <p>
                Pret incepand de la
                <span>{{ car.pret3 }} &euro; / zi</span>
              </p>
              <router-link :to="{ path: `/book/${car.id}` }" class="btn btn-red"
                >Rezerva</router-link
              >
            </div>
            <div class="car-details__content">
              <ValueRow title="Carburant" :value="this.car.carburant" />
              <ValueRow title="Volum portbagaj" :value="this.car.volum" />
              <ValueRow title="Putere" :value="this.car.putere" />
              <ValueRow title="Consum mediu" :value="this.car.consum" />
              <ValueRow title="Transmisie" :value="this.car.transmisie" />
              <ValueRow
                title="Caracteristici"
                :value="this.car.caracteristici"
              />
              <ValueRow title="Dotari" :value="this.car.dotari" />
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="overlay" />
  </div>
</template>
<script>
import ValueRow from "../../components/ValueRow";

export default {
  name: "CarDetails",
  components: { valueRow },
  head() {
    return {
      title: `${this.car &&
        this.car
          .nume} de inchiriat in Cluj la cele mai mici preturi de pe piata de rent a car Cluj. Inchiriaza cea mai cool gama de masini de inchiriat de la Nano rent a car Cluj`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.car &&
            this.car
              .nume} de inchiriat in Cluj si Aeroport Cluj la cele mai mici preturi rent a car. Auto ${this
            .car &&
            this.car
              .nume} de inchiriat ieftin in Cluj si Aeroport Cluj de la Nano rent a car.`,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: `${this.car &&
            this.car.nume}, masina (de ex. Skoda Rapid) ${this.car &&
            this.car.nume} de inchiriat ieftin, inchirieri auto ${this.car &&
            this.car
              .nume} de la Nano rent a car, masina de inchiriat, la Aeroport Cluj si in Cluj-Napoca`,
        },
      ],
    };
  },
  async asyncData({ $axios, params, error }) {
    const car = await $axios.get(`api/cars/${params.id}`);
    return {
      car: car.data,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../scss/variables/_colors.scss";
.index {
  z-index: 100;
}
.overlay {
  background-image: url("../../assets/texture.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  height: 100%;
  pointer-events: none;
  top: 0;
  left: 50%;
  width: 100%;
  right: 50%;
  z-index: 1;
  transform: translateX(-50%);
}
.car-details-page {
  background-color: $pink;
  min-height: calc(100vh - 88px);
  z-index: 1;
  height: calc(100vh - 88px);
}
.car-details {
  &__header {
    text-transform: uppercase;
    h1 {
      font-size: 28px;
      font-weight: 800;
      font-style: italic;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 16px;
      span {
        font-weight: 800;
        font-size: 18;
      }
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    .content-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 18px;
      font-weight: bolder;
      &__title {
        text-transform: uppercase;
        font-style: italic;
      }
      &__value {
        flex: 0 0 70%;
        max-width: 70%;
      }
    }
  }
}
</style>
