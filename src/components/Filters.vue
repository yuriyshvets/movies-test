<template>
  <div class="filters">
    <label for="movie-type">Movie Type</label>
    <select v-model="type" id="movie-type">
      <option v-for="option in typeOptions" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

const typeOptions = ['all', 'series', 'movie'];

export default {
  name: 'Filters',
  data() {
    return { type: this.$store.state.homeModule.type, typeOptions };
  },
  watch: {
    type(val) {
      this.setType(val);
      this.resetPage();
      this.resetMovies();
      this.getMovies();
    },
  },
  methods: {
    ...mapActions(['setType', 'getMovies', 'resetPage', 'resetMovies']),
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

label {
  margin-right: 10px;
}
</style>
