import buttonLikeInitiator from '../src/scripts/utility/button-like';
import favoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

const StartTest = () => {
  document.body.innerHTML = '<div id="likeButton"></div>';
};

describe('Menyukai restaurant', () => {
  beforeEach(() => {
    StartTest();
  });

  it('tombol yang muncul harus tombol menyukai restaurant', async () => {
    await buttonLikeInitiator.init({
      elementButton: document.querySelector('#likeButton'),
      restaurantDetail: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="suka dengan restaurant ini"]')).toBeTruthy();
  });

  it('klik tombol suka', async () => {
    await buttonLikeInitiator.init({
      elementButton: document.querySelector('#likeButton'),
      restaurantDetail: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').click();
    const Resto = await favoriteRestaurantIdb.getRestaurant(1);

    expect(Resto).toEqual({ id: 1 });
  });

  afterEach(() => {
    favoriteRestaurantIdb.deleteRestaurant(1);
  });
});

describe('Tidak menyukai restaurant', () => {
  beforeEach(() => {
    favoriteRestaurantIdb.putRestaurant({ id: 1 });
    StartTest();
  });

  it('tombol yang muncul harus tombol tidak menyukai restaurant', async () => {
    await buttonLikeInitiator.init({
      elementButton: document.querySelector('#likeButton'),
      restaurantDetail: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="tidak suka dengan restaurant ini"]')).toBeTruthy();
  });

  it('klik tombol tidak suka', async () => {
    await buttonLikeInitiator.init({
      elementButton: document.querySelector('#likeButton'),
      restaurantDetail: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').click();
    const Resto = await favoriteRestaurantIdb.getRestaurant(1);

    expect(Resto).not.toEqual({ id: 1 });
  });

  afterEach(() => {
    favoriteRestaurantIdb.deleteRestaurant(1);
  });
});
