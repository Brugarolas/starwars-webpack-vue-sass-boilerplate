import { DEFAULT_ITEMS_PER_PAGE } from '@/js/constants';
import { ADD_PERSON, ADD_PEOPLE, REMOVE_PERSON } from './mutation-types';

const defaultState = {
  people: []
};

const getters = {
  hasPeople (state) {
    return state.people && state.people.length > 0;
  },
  peopleLength (state) {
    if (!state.people || !state.people.length) {
      return 0;
    }

    return state.people.length;
  },
  findPeopleById: (state) => (id) => {
    return state.people.find(person => person.id === id);
  },
  getPeopleByPage: (state) => (page = 1, items = DEFAULT_ITEMS_PER_PAGE) => {
    if (state.people.length <= items) {
      return state.people;
    }

    return state.people.slice((page - 1) * items, page * items);
  }
};

const mutations = {
  [ADD_PERSON] (state, person) {
    state.people.push(person);
  },
  [ADD_PEOPLE] (state, people) {
    state.people.push(...people);
  },
  [REMOVE_PERSON] (state, id) {
    const index = state.people.findIndex(person => person.id === id);

    if (index !== -1) {
      state.people.splice(index, 1);
    }
  }
};

const actions = {};

export default {
  state: defaultState,
  getters,
  mutations,
  actions
};
