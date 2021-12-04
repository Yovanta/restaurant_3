import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.style.display = 'none';
    return `
      <h2 class="content__heading">Your Favorite Restaurant</h2> <hr>
      <div id="restaurants" class="restaurants-favorite">
      
      </div>
     `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
