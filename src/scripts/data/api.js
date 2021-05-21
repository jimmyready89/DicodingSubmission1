import { restoListUrl } from './api-url';

const restaurantList = async () => {
  const apiRessult = await fetch( restoListUrl );
  return apiRessult.json();
};

export {
  restaurantList,
};
