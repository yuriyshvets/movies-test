<template>
  <footer>
    Developed by
    <a href="https://www.linkedin.com/in/yuriy-shvets/" target="_blank">Yuriy Shvets</a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
footer {
  background: #eee;
  padding: 30px 20px;
  margin-bottom: 15px;
  border-radius: 6px;
  text-align: center;
  a {
    text-decoration: underline;
  }
}
</style>
