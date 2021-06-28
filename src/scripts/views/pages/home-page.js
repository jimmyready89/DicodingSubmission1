import { restaurantListAPI } from '../../data/api';
import { createRestaurantTemplate } from '../templates/template-ui';

const homePage = {
  async render() {
    return `
      <div class="banner">
        <div tabindex="0">
          <h1 class="title">
            Jelajahi Restoran Menarik
          </h1>
          <p>
            Carilah sensasi yang menarik saat makan
          </p>
        </div>
      </div>
      <div class="headline">
        <h1 class="title" tabindex="0">
          Tempat Menarik Yang Bagus Untuk Dikunjungin
        </h1>
        <article>
          <div class="figure">
            <img src="images/logo/header1.png" alt="Resto Hause Setiabudi">
            <img src="images/logo/header2.jpeg" alt="Resto Hause Setiabudi">
          </div>
          <div class="content">
            <h2 tabindex="0">
              Hause Setiabudi
            </h2>
            <p class="description" tabindex="0">
              Salah satu restoran yang berlokasi di Stiabudi Selatan, Jakarta. Restoran yang bagus bernuansa taman dan ditambah dengan <i>outdoor</i> yang memiliki pemandangan yang bagus saat malam hari. Kita bisa melihat indahnya pemandangan Jakarta di malam. Selain tempatnya bagus makanan minuman juga enak-enak dengan rentang harga IDR 35.000 hingga IDR 2.700.000. Bisa menjadi salah satu rekomendasi untuk <i>hangout</i> maupun <i>dating</i> bersama pasangan.
            </p>
            <p>
              <a rel="noreferrer" href="https://g.page/hauserooftop?share" class="button" target="_blank" tabindex="0">
                Lihat Peta
              </a>
            </p>
          </div>
        </article>
      </div>
      <section class="content">
        <div class="latest">
          <h1 tabindex="0">
            Daftar Restoran
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
    const restoranElement = document.querySelector('#restaurant-list');

    try {
      const restaurantsData = await restaurantListAPI();
      restoranElement.innerHTML = '';

      if (restaurantsData.restaurants.length > 0) {
        restaurantsData.restaurants.forEach((restaurant) => {
          restoranElement.innerHTML += createRestaurantTemplate(restaurant);
        });
      } else {
        restoranElement.innerHTML = `
          <span class="error-message">
            Tidak terdapat data
          </span>
        `;
      }
    } catch {
      restoranElement.innerHTML = `
        <span class="error-message">
          Data Gagal dimuat
        </span>
      `;
    }
  },
};

export default homePage;
