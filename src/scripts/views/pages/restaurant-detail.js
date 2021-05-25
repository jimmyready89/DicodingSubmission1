import urlParser from '../../routes/url-parser';
import { restaurantDetailAPI } from '../../data/api';
import { createRestaurantDetailTemplate } from '../templates/template-ui';
import reviewInitiator from '../../utility/review';
import buttonLikeInitiator from '../../utility/button-like';

const restaurantDetail = {
  async render() {
    return `
      <section class="content">
        <div class="latest" id="restaurant-detail">
          <loading-screen>
            <div class="loading">
              <div></div><div></div><div></div><div></div>
            </div>
            <loading-text>
              Loading Detail Restoran ...
            </loading-text>
          </loading-screen>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('div#restaurant-detail');

    try {
      const url = urlParser.parseActiveUrlWithoutCombiner();
      const restaurantDetailResault = await restaurantDetailAPI(url.id);
      restaurantContainer.innerHTML = await createRestaurantDetailTemplate(restaurantDetailResault);

      reviewInitiator.init({
        riviewElemenet: document.querySelector('review-box'),
        restaurantDetailData: restaurantDetailResault.restaurant,
      });

      buttonLikeInitiator.init({
        elemeentButton: document.querySelector('container-button-like'),
        restaurantDetail: restaurantDetailResault.restaurant,
      });
    } catch {
      restaurantContainer.innerHTML = `
        <error-message>
          Data Gagal dimuat
        </error-message>
      `;
    }
  },
};

export default restaurantDetail;
