import StarWarsAPI from '@/js/services/star-wars';
import { bingImage } from '@/js/services/bing-images';
import { ADD_PEOPLE } from '@/js/store/modules/people/mutation-types';
import store from '@/js/store';

export const populateStore = () => {
  const request = StarWarsAPI.getPeople();
  const people = [];

  const pushPerson = person => {
    person.id = person.name.toLowerCase().replace(/( |-)/g, '_');
    person.image = bingImage(person.name);

    people.push(person);
  };

  request.then(response => {
    response.results.forEach(pushPerson);

    return Math.ceil(response.count / response.results.length);
  }).then((lastPage) => {
    const promises = [];

    for (let page = 2; page <= lastPage; page++) {
      promises.push(StarWarsAPI.getPeople(page));
    }

    return Promise.all(promises);
  }).then((responses) => {
    responses.forEach(response => {
      response.results.forEach(pushPerson);
    });

    return responses;
  }).finally(() => {
    store.commit(ADD_PEOPLE, people);
  });
};

export default { populateStore };
