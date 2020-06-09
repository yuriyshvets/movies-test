<template>
  <div class="page movie-view">
    <div class="main-content">
      <Header />

      <Navigation />

      <main>
        <Spinner v-if="!movie" />

        <div class="movie" v-else>
          <div class="poster" :class="{ 'no-image': movie.Poster === 'N/A' }">
            <img :src="movie.Poster" :alt="movie.Title" v-if="movie.Poster !== 'N/A'" />
          </div>

          <div class="movie-content">
            <h1>{{ movie.Title }}</h1>

            <div class="plot" v-if="movie.Plot">
              {{ movie.Plot }}
            </div>

            <MovieDetails />

            <Ratings :ratings="movie.Ratings" />
          </div>
        </div>
      </main>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import Navigation from '@/components/Navigation.vue';
import MovieDetails from '@/components/MovieDetails.vue';
import Ratings from '@/components/Ratings.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'MovieView',
  components: { Navigation, MovieDetails, Ratings, Header, Footer, Spinner },
  async created() {
    if (this.movie) {
      this.resetMovie();
    }
    this.getMovie(this.$router.currentRoute.params.movieId);
  },
  computed: {
    movie() {
      return this.$store.state.movieModule.movie;
    },
  },
  methods: {
    ...mapActions(['getMovie', 'resetMovie']),
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.movie-view {
  .movie {
    display: flex;
  }
  .poster {
    flex: none;
    margin-right: 50px;
    margin-top: 8px;
    max-width: 300px;
    img {
      border-radius: $border-radius;
      display: block;
    }
  }
  .movie-content {
    flex: 1;
    h1 {
      margin-top: 0;
    }
  }
  .plot {
    margin-bottom: 30px;
    font-style: italic;
  }
  .no-image {
    height: 225px;
    background: #eee url('../assets/no-image.svg') no-repeat 50% 50%;
    background-size: 30%;
    height: 425px;
    width: 300px;
    border-radius: $border-radius;
  }
}
</style>
