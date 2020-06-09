import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './modules/user';
import movieModule from './modules/movie';
import homeModule from './modules/home';

Vue.use(Vuex);

export const storeOptions = {
  modules: {
    userModule,
    movieModule,
    homeModule,
  },
};

export default new Vuex.Store(storeOptions);
