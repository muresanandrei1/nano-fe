<template>
  <div class="list-background">
    <v-container>
      <v-layout row wrap>
        <v-flex md12 class="item">
          <h1>{{ title }}</h1>
          <h2>Te vom contacta in cel mai scurt timp.</h2>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="overlay" />
  </div>
</template>

<script>
export default {
  name: "Conditii",
  computed: {
    title() {
      return this.$route.query.contact
        ? "Mesajul tau a fost trimis cu succes!"
        : "Comanda a fost inregistrata!";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/variables/_colors.scss";
h1 {
  text-align: center;
  font-size: 42px;
  font-style: italic;
  color: #fff;
  margin-bottom: 20px;
  text-transform: uppercase;
}
h2 {
  text-align: center;
  font-size: 20px;
  // font-style: italic;
}
ul {
  margin-left: 40px;
  list-style: initial;
  font-weight: bold;
  margin-top: 20px;
}
p {
  margin: 10px 0;
  font-weight: bold;
  span {
    font-style: italic;
    margin-right: 8px;
  }
}
.item {
  z-index: 100;
}
.overlay {
  background-image: url("../assets/texture.png");
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
.list-background {
  background-color: $pink;
  min-height: calc(100vh - 92px);
  z-index: 1;
}
</style>
