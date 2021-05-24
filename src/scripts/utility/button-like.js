import favoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const buttonLikeInitiator = {
  async init({ elemeentButton, restaurantDetail }) {
    this.elemeentButton = elemeentButton;
    this.restaurantDetail = restaurantDetail;
    this.render();
  },

  async render() {
    const { id } = this.restaurantDetail;

    if (await this.isRestaurantExist(id)) {
      // this.renderUnlike();
    } else {
      // this.renderLike();
    }
  },

  async isRestaurantExist(id) {
    const movie = await favoriteRestaurantIdb.getRestaurant(id);
    return !!movie;
  },

  // renderLike() {
  //   this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

  //   const likeButton = document.querySelector('#likeButton');
  //   likeButton.addEventListener('click', async () => {
  //     await FavoriteMovieIdb.putMovie(this._movie);
  //     this.render();
  //   });
  // },

  // renderUnlike() {
  //   this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

  //   const likeButton = document.querySelector('#likeButton');
  //   likeButton.addEventListener('click', async () => {
  //     await FavoriteMovieIdb.deleteMovie(this._movie.id);
  //     this.render();
  //   });
  // },
};

export default buttonLikeInitiator;
