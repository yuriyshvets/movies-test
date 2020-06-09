<template>
  <header>
    <div class="logo">
      <router-link to="/"><img alt="Batman logo" src="../assets/logo.png" /></router-link>
      <div class="logo-name">Batman movies</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  margin-top: 15px;
  border-radius: 7px;
  padding: 20px 0;
}
.logo {
  display: flex;
  align-items: center;
  flex: none;
  justify-content: center;
  font-weight: 700;
  img {
    max-width: 75px;
    padding: 7px;
    margin-right: 10px;
    background: #ffeb01;
    border-radius: 50%;
    border: 2px solid #000;
  }
}
.logo-name {
  font-size: 36px;
  font-family: 'Arial';
  text-transform: uppercase;
  font-style: italic;
  color: #fff;
}
</style>
