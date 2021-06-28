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
          <div class="restaurants" id="restaurant-list">
            <div class="loading-screen">
              <div class="loading">
                <div></div><div></div><div></div><div></div>
              </div>
              <div class="loading-text">
                Loading ...
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurant-list');

    try {
      const restaurantList = await favoriteRestaurantIdb.getAllRestaurants();
      restaurantContainer.innerHTML = '';
      if (restaurantList.length > 0) {
        restaurantList.forEach((restaurant) => {
          restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
        });
      } else {
        restaurantContainer.innerHTML = `
          <span class="error-message">
            Tidak terdapat data
          </span>
        `;
      }
    } catch {
      restaurantContainer.innerHTML = `
        <span class="error-message">
          Data Gagal dimuat
        </span>
      `;
    }
  },
};

export default favorite;
