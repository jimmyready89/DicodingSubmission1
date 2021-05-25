import favoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantTemplate } from '../templates/template-ui';

const favorite = {
  async render() {
    return `
      <section class="content">
        <div class="latest">
          <h1 tabindex="0">
            Favorite
          </h1>
          <restaurants id="restaurant-list">
          </restaurants>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantList = await favoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurantList.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default favorite;
