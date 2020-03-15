<template>
  <a class="back-button" :class="[extraClass]" @click="goBack">
    <i class="back-button__icon">&#10132;</i>
  </a>
</template>

<script>
export default {
  name: 'BackButton',
  props: {
    extraClass: {
      type: String,
      default: undefined
    }
  },
  methods: {
    goBack () {
      if (this.$shared.hasPreviousRoute) {
        this.$router.back();
      } else {
        this.$router.push('/');
      }
    }
  }
};
</script>

<style lang="scss">
.back-button {
  font-size: 50px;
  color: $white;
  transform: rotate(180deg);
  display: inline-block;
  text-shadow: 1px 1px 1px $black;
  cursor: pointer;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
  will-change: transform;

  @include unselectable();

  &:hover {
    color: $secondary-font-color;
    transform: rotate(180deg) scale(1.05, 1.2);
  }

  .back-button__icon {
    font-style: normal;
  }
}
</style>
