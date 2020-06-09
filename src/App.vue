<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import 'styles/general';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
