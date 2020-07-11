<template>
  <footer>
    <v-container>
      <v-layout row>
        <v-flex md4 row class="whats-app">
          <v-layout>
            <v-flex md1>
              <img src="../assets/whatsapp.svg" height="20" />
            </v-flex>
            <v-flex>
              <a href="tel:0743285053">0743285053</a>
            </v-flex>
            <v-flex md1>
              <img src="../assets/plane.svg" height="20" />
            </v-flex>
            <v-flex>
              <p>Livrare gratuita la aeroport</p>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md6 />
        <v-flex md1></v-flex>
        <v-flex md1>
          <v-layout row class="cards">
            <img
              src="../assets/visa-inc-vector-logo.png"
              height="30"
              class="visa"
            />
            <img src="../assets/mastercard-logo.png" height="30" />
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout column align-center justify-center v-if="copy">
      <v-flex py-2 align-center justify-center>
        <h1>
          Copyright Nano-Rentacar – Inchirieri auto si Rent a Car Cluj-Napoca
        </h1>
      </v-flex>
    </v-layout>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  props: {
    copy: {
      default: true,
      type: Boolean,
    },
  },
};
</script>
<style lang="scss">
.visa {
  margin-right: 10px;
  display: block;
}
</style>
