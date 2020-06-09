import { Module } from 'vuex';

interface User {
  name: string;
}

interface State {
  user: User;
}

const USER_NAME = 'Bob Razowski';

export default {
  state: {
    user: {
      name: USER_NAME,
    },
  },
} as Module<State, {}>;
