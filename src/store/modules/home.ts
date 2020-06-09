import { Module } from 'vuex';
import { Movie } from '@/services/types';
import MovieService from '@/services/MovieService';

interface State {
  type: string;
  page: number;
  numberOfResults: number;
  movieList: Movie[];
}

export default {
  state: {
    type: 'all',
    page: 1,
    numberOfResults: 0,
    movieList: [],
  },
  mutations: {
    setType(state, type) {
      state.type = type;
    },
    setNumberOfResults(state, numberOfResults) {
      state.numberOfResults = numberOfResults;
    },
    setMovies(state, movieList) {
      state.movieList = movieList;
    },
    incrementPage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
    },
    resetMovies(state) {
      state.movieList = [];
    },
  },
  actions: {
    setType({ commit }, type: string) {
      commit('setType', type);
    },
    incrementPage({ commit }) {
      commit('incrementPage');
    },
    resetMovies({ commit }) {
      commit('resetMovies');
    },
    resetPage({ commit }) {
      commit('resetPage');
    },
    async getMovies({ commit, state }, payload) {
      const { page, type } = state;
      const result = await MovieService.movieService.getMovieList({
        page,
        ...(type !== 'all' ? { type } : {}),
        ...payload,
      });
      commit('setMovies', result.result);
      commit('setNumberOfResults', result.numberOfResults);
    },
    async getMoreMovies({ commit, state }, payload) {
      const { page, type } = state;
      const result = await MovieService.movieService.getMovieList({
        page,
        ...(type !== 'all' ? { type } : {}),
        ...payload,
      });
      commit('setMovies', [...state.movieList, ...result.result]);
    },
  },
} as Module<State, {}>;
