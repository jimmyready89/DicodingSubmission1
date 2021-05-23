import { restoListUrl, restoDetailUrl } from './api-url';

const restaurantListAPI = async () => {
  const apiResult = await fetch(restoListUrl);
  return apiResult.json();
};

const restaurantDetailAPI = async (id) => {
  const apiResult = await fetch(`${restoDetailUrl}/${id}`);
  return apiResult.json();
};

export {
  restaurantListAPI,
  restaurantDetailAPI,
};
