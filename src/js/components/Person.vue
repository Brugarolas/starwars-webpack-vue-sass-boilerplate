<template>
  <component :is="tagName" class="person" :class="[extraClass]">
    <router-link :to="{ name: 'Person', params: { id: person.id } }" class="person__link">
      <h3 class="person__name">
        {{ person.name }}
      </h3>
    </router-link>
  </component>
</template>

<script>
export default {
  name: 'Person',
  props: {
    person: {
      type: Object,
      required: true
    },
    tagName: {
      type: String,
      default: 'li'
    },
    extraClass: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style lang="scss">
.person {
  padding: 15px;
  overflow-x: hidden;

  .person__link {
    display: inline-block;
  }

  .person__name {
    margin: 0;
    font-size: 28px;
    font-weight: bold;
    color: $white;
    cursor: pointer;
    transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
    will-change: transform;

    &:hover {
      color: $secondary-font-color;
      transform: scale(1.05);
    }
  }
}
</style>
