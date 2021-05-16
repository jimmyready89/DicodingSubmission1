import { restoListUrl } from './api-url';

const restaurantList = async () => {
  const apiResult = await fetch( restoListUrl );
  console.log( apiResult )
};

export {
  restaurantList,
};
