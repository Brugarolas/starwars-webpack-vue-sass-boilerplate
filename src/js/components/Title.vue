<template>
  <h2 class="title">
    {{ message }}
  </h2>
</template>

<script>
export default {
  name: 'Title',
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.title {
  font-family: $distant-galaxy-font;
  text-align: center;
  font-size: 42px;
  color: $main-font-color;
  text-shadow: 1px 1px 1px $black;
  padding: 20px 0;
}
</style>
