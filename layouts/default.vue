<template>
  <v-app>
    <Navigation />
    <v-content>
      <v-container fluid class="pa-0">
        <router-view />
      </v-container>
    </v-content>
    <div class="text-center">
      <v-bottom-sheet v-model="sheet">
        <v-sheet class="text-center" height="90px">
          <v-container>
            <v-layout row align-center justify-center>
              <div>Acest site folosește "cookies". Navigând în continuare, vă exprimați acordul asupra folosirii acestora.</div>
              <v-btn class="mt-6" outline color="red" @click="sheet = !sheet">Inchide</v-btn>
            </v-layout>
          </v-container>
        </v-sheet>
      </v-bottom-sheet>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
export default {
  name: "Layout",
  data: () => ({
    sheet: false
  }),
  watch: {
    sheet(val) {
      if (!val) {
        this.setCookie();
      }
    }
  },
  components: { Navigation, Footer },
  methods: {
    setCookie() {
      window.localStorage.setItem("acceptedCookie", true);
    }
  },
  mounted() {
    const accepted = window.localStorage.getItem("acceptedCookie");
    console.log(accepted);

    if (!accepted) {
      this.sheet = true;
    }
  }
};
</script>
<style lang="scss">
@import "../scss/base.scss";
@media screen and (max-width: 550px) {
  .v-bottom-sheet .container {
    padding-top: 10px;
  }
}
</style>
