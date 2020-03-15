import { MAX_TIME_WAIT_FOR_IMAGE } from '@/js/constants';

export const preloadImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => { // wait for image to load
      resolve(image);
    };

    image.src = url;

    setTimeout(() => { // stop waiting if taking too long
      resolve(image);
    }, MAX_TIME_WAIT_FOR_IMAGE);
  });
};

export default { preloadImage };
