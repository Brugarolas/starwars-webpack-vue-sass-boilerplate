import fetch from '@/js/utils/fetch-cache';
import { PEOPLE_API_URL } from '@/js/constants';

/* Aux functions */
const search = async (url) => {
  const response = await fetch(url, { cache: 'default', localCache: true });
  const json = await response.json();

  return json;
};

const searchCatchErrors = async (url) => {
  try {
    return await search(url);
  } catch (error) {
    return { error: true, msg: error };
  }
};

/* Public API */
const getPeople = async (page = 1) => {
  const baseUrl = `${PEOPLE_API_URL}people/`;
  const url = page ? `${baseUrl}?page=${page}` : baseUrl;

  return searchCatchErrors(url);
};

/* Exports */
export default { getPeople };
