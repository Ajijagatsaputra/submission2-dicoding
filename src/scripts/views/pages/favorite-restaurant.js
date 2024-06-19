import FavoriteRestaurantIndexDB from '../../data/favorite-restaurant-index-d-b';
import { createItemRestaurant } from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
      <section id="restaurant" tabindex="0" >
          <h1 tabindex="0">Your favorite restaurant list</h1>
          <section class="restaurant__list">
          </section>
      </section>
    `;
  },
  async afterRender() {
    const restaurant = await FavoriteRestaurantIndexDB.getAllRestaurant();
    const restaurantContainer = document.querySelector('.restaurant__list');

    if (restaurant.length === 0) {
      restaurantContainer.innerHTML
        += "<p style='color:red;'>You do not have a list of favorite restaurants yet</p>";
    }
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createItemRestaurant(restaurants);
    });
  },
};

export default FavoriteRestaurant;
