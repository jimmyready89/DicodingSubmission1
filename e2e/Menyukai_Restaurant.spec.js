const assert = require('assert');

Feature('Menyukai Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('menyukai salah satu restaurant', async (I) => {
  I.see('Tidak terdapat data', '.error-message');

  I.amOnPage('/');

  I.seeElement('.restaurant a');

  const firstRestaurant = locate('.restaurant h2').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  const firstRestaurantButton = locate('.restaurant a').first();
  I.click(firstRestaurantButton);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const likedRestaurantTitle = await I.grabTextFrom('.content h2');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('menyukai batal menyukai restaurant', async (I) => {
  I.seeElement('.restaurant');

  const firstRestaurantButton = locate('.restaurant a').first();
  I.click(firstRestaurantButton);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Tidak terdapat data', '.error-message');
});
