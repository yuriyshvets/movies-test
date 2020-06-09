<template>
  <div class="page home">
    <div class="main-content">
      <Header />

      <main>
        <h1>
          Hello, {{ userName }}!<br />
          Which batman movie do you want to see?
        </h1>

        <Filters />

        <MovieList
          :movies="movies"
          :total="numberOfResults"
          :getMovies="getMoreMovies"
          :incrementPage="incrementPage"
        />
      </main>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MovieList from '../components/MovieList.vue';
import Filters from '../components/Filters.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    MovieList,
    Filters,
    Header,
    Footer,
  },
  computed: {
    userName() {
      return this.$store.state.userModule.user.name;
    },
    movies() {
      return this.$store.state.homeModule.movieList;
    },
    numberOfResults() {
      return this.$store.state.homeModule.numberOfResults;
    },
  },
  async created() {
    if (!this.movies.length) {
      await this.getMovies();
    }
  },
  methods: {
    ...mapActions(['getMovies', 'getMoreMovies', 'incrementPage']),
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 70px 0;
  text-align: center;
}
</style>
