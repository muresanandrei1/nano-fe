<template>
  <div class="content-row">
    <p class="content-row__title">{{this.title}}</p>
    <p class="content-row__value">{{this.value}}</p>
  </div>
</template>

<script>
export default {
  name: "ValueRow",
  props: ["title", "value"]
};
</script>

<style lang="scss" scoped>
.content-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bolder;
  margin: 6px 0;
  &__title {
    text-transform: uppercase;
    font-style: italic;
  }
  &__value {
    flex: 0 0 60%;
    max-width: 60%;
  }
}
</style>
