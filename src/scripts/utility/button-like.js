import favoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createLikeButton, createUnlikeButton } from '../views/templates/template-ui';

const buttonLikeInitiator = {
  async init({ elemeentButton, restaurantDetail }) {
    this.elemeentButton = elemeentButton;
    this.restaurantDetail = restaurantDetail;
    this.render();
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
    this.elemeentButton.innerHTML = createLikeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantIdb.putRestaurant(this.restaurantDetail);
      this.render();
    });
  },

  renderUnlike() {
    this.elemeentButton.innerHTML = createUnlikeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantIdb.deleteRestaurant(this.restaurantDetail.id);
      this.render();
    });
  },
};

export default buttonLikeInitiator;
