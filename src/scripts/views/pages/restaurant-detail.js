import urlParser from '../../routes/url-parser';
import { restaurantDetailAPI } from '../../data/api';
import { createRestaurantDetailTemplate } from '../templates/template-ui';

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

    // LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   movie: {
    //     id: movie.id,
    //     title: movie.title,
    //     overview: movie.overview,
    //     backdrop_path: movie.backdrop_path,
    //     vote_average: movie.vote_average,
    //   },
    // });
  },
};

export default restaurantDetail;
