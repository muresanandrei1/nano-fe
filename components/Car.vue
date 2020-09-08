<template>
  <div class="car-item">
    <img :src="`api${car.poza.url}`" width="250" />
    <div class="car-content">
      <h1 class="car-name">{{ car.nume }}</h1>
      <p class="car-price">
        Pret incepand de la
        <span>{{ car.pret3 }} &euro; / zi</span>
      </p>
      <router-link :to="{ path: `/masini/${car.id}` }" class="btn"
        >Detalii</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Car",
  props: ["car"],
};
</script>

<style lang="scss">
@import "../scss/variables/_colors.scss";
.car {
  &-item {
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    a {
      margin-top: 10px;
    }
    img {
      min-height: 150px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  &-content {
    margin-top: auto;
  }
  &-name {
    font-weight: 600;
    font-style: italic;
    margin-top: 8px;
    font-size: 18px;
    color: $white;
  }
  &-price {
    font-size: 16px;
    color: $grey-dark;
    margin-top: 8px;
    font-weight: 600;
    span {
      font-weight: 800;
      font-size: 16px;
      color: $white;
    }
  }
}
</style>
