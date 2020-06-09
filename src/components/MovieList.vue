<template>
  <div>
    <ul class="movie-list">
      <MovieListItem v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
    </ul>

    <div class="load-more" v-if="movies.length < total">
      <button @click="handleLoadMore">Load more</button>
    </div>
  </div>
</template>

<script lang="ts">
import MovieListItem from './MovieListItem.vue';

export default {
  name: 'MovieList',
  props: {
    movies: Array,
    total: Number,
    getMovies: Function,
    incrementPage: Function,
  },
  methods: {
    handleLoadMore() {
      this.incrementPage();
      this.getMovies();
    },
  },
  components: {
    MovieListItem,
  },
};
</script>

<style lang="scss" scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
.load-more {
  display: flex;
  justify-content: center;
}
</style>
