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
            <loading-screen>
              <div class="loading">
                <div></div><div></div><div></div><div></div>
              </div>
              <loading-text>
                Loading ...
              </loading-text>
            </loading-screen>
          </restaurants>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurant-list');

    try {
      const restaurantList = await favoriteRestaurantIdb.getAllRestaurants();
      restaurantContainer.innerHTML = "";
      if (restaurantList.length > 0) {
        restaurantList.forEach((restaurant) => {
          restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
        });
      } else {
        restaurantContainer.innerHTML = `
          <error-message>
            Tidak terdapat data
          </error-message>
        `;
      }
    } catch {
      restaurantContainer.innerHTML = `
        <error-message>
          Data Gagal dimuat
        </error-message>
      `;
    }
  },
};

export default favorite;
