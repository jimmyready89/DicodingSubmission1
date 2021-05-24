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
        </div>
      </section>
    `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetailResault = await restaurantDetailAPI(url.id);
    // console.log( restaurantDetailResault )
    const restaurantContainer = document.querySelector('div#restaurant-detail');
    restaurantContainer.innerHTML = await createRestaurantDetailTemplate(restaurantDetailResault);

    reviewInitiator.init({
      riviewElemenet: document.querySelector('review-box'),
      restaurantDetailData: restaurantDetailResault.restaurant,
    });

    buttonLikeInitiator.init({
      elemeentButton: document.querySelector('#likeButtonContainer'),
      restaurantDetail: restaurantDetailResault.restaurant,
    });
  },
};

export default restaurantDetail;
