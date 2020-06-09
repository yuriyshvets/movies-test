<template>
  <li class="movie-list-item">
    <div class="poster" :class="{ 'no-image': movie.Poster === 'N/A' }">
      <router-link :to="`/movies/${movie.imdbID}`">
        <img :src="movie.Poster" :alt="movie.Title" v-if="movie.Poster !== 'N/A'" />
      </router-link>
    </div>

    <div class="info">
      <router-link :to="`/movies/${movie.imdbID}`" :title="movie.Title" class="title">{{
        movie.Title
      }}</router-link>

      <div class="year">
        {{ movie.Year }}
      </div>
    </div>
  </li>
</template>

<script lang="ts">
export default {
  name: 'MovieListItem',
  props: {
    movie: Object,
  },
};
</script>

<style scoped lang="scss">
@import '../styles/variables';

.movie-list-item {
  list-style: none;
  margin-bottom: 30px;
  width: 18%;
  margin-right: 2%;
  text-align: center;
  &:nth-child(5n + 5) {
    margin-right: 0;
  }
  .poster {
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: $border-radius;
    margin-bottom: 10px;
    a {
      flex: none;
    }
    img {
      display: block;
      height: 225px;
      border-radius: $border-radius;
    }
    &.no-image {
      height: 225px;
      background: #eee url('../assets/no-image.svg') no-repeat 50% 50%;
      background-size: 30%;
      a {
        height: 100%;
        width: 100%;
      }
    }
  }
  .title {
    font-weight: 700;
  }
  .year {
    color: $light-color;
    font-size: 14px;
  }
}
</style>
