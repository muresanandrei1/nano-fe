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
          </v-layout>
        </v-flex>
        <v-flex md6 />
        <v-flex md1></v-flex>
        <v-flex md1>
          <v-layout row class="cards">
            <img src="../assets/visa-inc-vector-logo.png" height="30" class="visa" />
            <img src="../assets/mastercard-logo.png" height="30" />
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </footer>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss">
.visa {
  margin-right: 10px;
  display: block;
}
</style>