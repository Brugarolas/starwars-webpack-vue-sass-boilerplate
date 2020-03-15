import Index from '@/js/views/Index';
import PersonDetail from '@/js/views/PersonDetail';
import { waitForLoadPeople, searchPersonById } from '@/js/utils/store-utils';
import { preloadImage } from '@/js/utils/preload-image';

const goBack = (from, next) => {
  const hasPrevRoute = Boolean(from.name);

  next(hasPrevRoute ? false : '/');
};

const continueWhenPersonExist = (to, from, next) => {
  const personId = to.params.id;
  const person = searchPersonById(personId);

  if (person) {
    preloadImage(person.image).finally(() => {
      next();
    });
  } else {
    goBack(from, next);
  }
};

const checkPeopleExist = (to, from, next) => {
  if (!from.name) { // first load, no previous page
    waitForLoadPeople().then(result => {
      continueWhenPersonExist(to, from, next);

      return result;
    }).catch(() => {
      goBack(from, next);
    });
  } else { // previos page exist, data should be loaded
    continueWhenPersonExist(to, from, next);
  }
};

const routes = [
  { path: '/', component: Index, name: 'Index', meta: { transitionName: 'slide' } },
  { path: '/:id', component: PersonDetail, name: 'Person', meta: { transitionName: 'slide' }, beforeEnter: checkPeopleExist }
];

export default routes;
