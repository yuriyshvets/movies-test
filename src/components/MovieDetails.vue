<template>
  <div class="movie-details">
    <div class="item" v-for="label in details" :key="label">
      <div class="label">{{ label | showSpaces }}:</div>
      <div class="value">{{ movie[label] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  computed: {
    movie() {
      return this.$store.state.movieModule.movie;
    },
    details() {
      const blackList = [
        'Title',
        'Poster',
        'Ratings',
        'Plot',
        'Response',
        'Metascore',
        'imdbRating',
      ];

      return Object.keys(this.movie).filter((i) => !blackList.includes(i));
    },
  },
  filters: {
    showSpaces(value) {
      const map = {
        imdbRating: 'imdb Rating',
        imdbVotes: 'imdb Votes',
        imdbID: 'imdb ID',
        BoxOffice: 'Box Office',
      };
      return map[value] || value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.movie-details {
  font-size: 14px;
  .item {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
    .label {
      margin-right: 20px;
      width: 100px;
      color: $light-color;
    }
    .value {
      flex: 1;
    }
  }
}
</style>
