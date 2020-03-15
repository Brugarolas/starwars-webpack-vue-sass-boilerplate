<template>
  <article class="vue-animation">
    <People>
      <Title message="Star Wars characters:" />
    </People>
  </article>
</template>

<script>
import Title from '@/js/components/Title';
import People from '@/js/components/People';

export default {
  name: 'ViewIndex',
  components: {
    Title, People
  }
};
</script>
