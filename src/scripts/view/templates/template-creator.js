import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <picture>
    <source media="(max-width: 600px)" srcset="./images/dirt-rally-20-small.jpg">
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  </picture>
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address} , Kota ${restaurant.city}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant_overview">
  <h4>Rating</h4>
  <p>${restaurant.rating}</p>
    <h4>Customer Review</h4>
    ${restaurant.customerReviews.map(
    (customer) => `    
        <h5>@ ${customer.name}</h5>
        <h6>${customer.date}</h6>
        <p>${customer.review}</p>
      `,
  ).join('')}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="list_item">
  <picture>
    <source media="(max-width: 600px)" srcset="./images/dirt-rally-20-small.jpg">
    <img class="list_item_image" crossorigin="anonymous" class="lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name || '-'}" title="${restaurant.name}">
  </picture>
    <div class="city">${restaurant.city}</div>
    <div class="list_item_content">
        <h5 class="list_item_title"><a href='/#/detail/${restaurant.id}'>${restaurant.name || '-'}</a></h5>
        <div class="list_item_desc">${restaurant.description || '-'}...</div> 
        <p class="read-more"><a href='/#/detail/${restaurant.id}'>Read More</a></p>
        <hr>
        <p>⭐️<span class="list_item_rating"> ${restaurant.rating} | ${restaurant.city}</span></p>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
