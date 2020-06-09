import { Module } from 'vuex';
import { Movie } from '@/services/types';
import MovieService from '@/services/MovieService';

interface State {
  movie: Movie | null;
}

export default {
  state: {
    movie: null,
  },
  mutations: {
    setMovie(state, movie) {
      state.movie = movie;
    },
    resetMovie(state) {
      state.movie = null;
    },
  },
  actions: {
    resetMovie({ commit }) {
      commit('resetMovie');
    },
    async getMovie({ commit }, id: string) {
      const result = await MovieService.movieService.getSpecificMovie(id);
      commit('setMovie', result);
    },
  },
} as Module<State, {}>;
