const restaurantDetail = {
  async render() {
    return `
      <div class="banner">
        <div tabindex="0">
        </article>
      </div>
      <section class="content">
        <div class="latest">
          <h1 tabindex="0">
            Daftar Restoran
          </h1>
          <div class="restaurants" id="restaurant-list">
          </div>
        </div>
      </section>
    `;
  },

  // async afterRender() {
  //   const movies = await FavoriteMovieIdb.getAllMovies();
  //   const moviesContainer = document.querySelector('#movies');
  //   movies.forEach((movie) => {
  //     moviesContainer.innerHTML += createMovieItemTemplate(movie);
  //   });
  // },
};

export default restaurantDetail;
