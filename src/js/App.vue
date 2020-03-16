<template>
  <div id="app">
    <main class="main">
      <ViewTransitions />
    </main>
  </div>
</template>

<script>
import ViewTransitions from '@/js/routes/ViewTransitions';

export default {
  name: 'App',
  components: {
    ViewTransitions
  }
};
</script>

<style lang="scss">
@import "@/styles/globals.scss";
</style>
