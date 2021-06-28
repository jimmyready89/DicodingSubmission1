import favoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createLikeButton, createUnlikeButton } from '../views/templates/template-ui';

const buttonLikeInitiator = {
  async init({ elementButton, restaurantDetail }) {
    this.elementButton = elementButton;
    this.restaurantDetail = restaurantDetail;
    
    await this.render();
  },

  async render() {
    const { id } = this.restaurantDetail;

    if (await this.isRestaurantExist(id)) {
      this.renderUnlike();
    } else {
      this.renderLike();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await favoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.elementButton.innerHTML = createLikeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', () => {
      favoriteRestaurantIdb.putRestaurant(this.restaurantDetail);
      this.render();
    });
  },

  renderUnlike() {
    this.elementButton.innerHTML = createUnlikeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantIdb.deleteRestaurant(this.restaurantDetail.id);
      this.render();
    });
  },
};

export default buttonLikeInitiator;
