import { MAX_TIME_WAIT_FOR_REQUEST } from '@/js/constants';
import store from '@/js/store';

export const waitForLoadPeople = () => {
  return new Promise((resolve, reject) => {
    const unwatch = store.watch( // wait for people to be loaded
      function (state) {
        return state.people && state.people.length > 0;
      },
      function (result) {
        resolve(result);
      }
    );

    setTimeout(() => { // or stop waiting if taking too long
      unwatch();
      reject(new Error(`People data is not loaded after ${MAX_TIME_WAIT_FOR_REQUEST} milliseconds`));
    }, MAX_TIME_WAIT_FOR_REQUEST);
  });
};

export const searchPersonById = (id) => {
  const hasPeople = store.getters.hasPeople;
  const person = hasPeople && store.getters.findPeopleById(id);

  return person;
};

export default { waitForLoadPeople, searchPersonById };
