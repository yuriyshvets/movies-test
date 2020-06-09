<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <span class="title"> | {{ title }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Navigation',
  computed: {
    title() {
      return this.$store.state.movieModule.movie?.Title;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/variables';

#nav {
  padding: 30px 0;
  a {
    font-weight: bold;
  }
  .title {
    color: $light-color;
  }
}
</style>
