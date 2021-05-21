import homePage from '../views/pages/home-page';
import favorite from '../views/pages/favorite';
import restaurantDetail from '../views/pages/restaurant-detail';

const routes = {
  '/': homePage,
  '/homepage': homePage,
  '/favorite': favorite,
  '/restaurantdetail/:id': restaurantDetail,
};

export default routes;
