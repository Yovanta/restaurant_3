const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
    I.amOnPage('/#/like');
  });
   
  Scenario('showing empty liked restaurants', (I) => {
    I.seeElement('#query');
    I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');
  });

  // Scenario('liking one restaurant', async ({ I }) => {
  //   I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
   
  //   I.amOnPage('/');
  //   I.seeElement('.list_item_title a');
  //   const firstRestaurant = locate('.list_item_title a').first();
  //   const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  //   I.click(firstRestaurant);

  //   I.seeElement('#likeButton');
  //   I.click('#likeButton');

  //   I.amOnPage('/#/like');
  //   I.seeElement('.list_item');
  //   const likedRestaurantTitle = await I.grabTextFrom('.list_item_title');
 
  //   assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  // });
