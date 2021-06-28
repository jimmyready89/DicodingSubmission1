import { BASE_IMAGE_URL } from '../../config';

const createRestaurantTemplate = (restorant) => {
  const {
    id, city, description,
    name, pictureId, rating,
  } = restorant;

  return `
    <div class="restaurant" tabindex="0" aria-label="">
       <div class="panel-img">
          <div class="panel-tag">
             <span class="city">${city}</span>
             <span class="star">${rating}</span>
          </div>
          <img class="lazyload" src="${BASE_IMAGE_URL}medium/${pictureId}" alt="${name}">
       </div>
       <div class="content">
          <h2>
            ${name}
          </h2>
          <p class="description">
            ${description}
          </p>
          <div class="button-detail">
            <a href="#/restaurantdetail/${id}">
              Lihat Detail
            </a>
          </div>
       </div>
    </div>
  `;
};

const convertArrayToElementLi = (MenuList) => MenuList.map((menu) => menu.name).join('</li><li>');

const createRestaurantDetailTemplate = async (restorant) => {
  const {
    city, description,
    name, pictureId, rating,
    address, menus, categories,
  } = restorant.restaurant;

  const {
    drinks, foods,
  } = menus;

  const drinkElementLi = await convertArrayToElementLi(drinks);
  const foodElementLi = await convertArrayToElementLi(foods);
  const categorie = await convertArrayToElementLi(categories);

  return `
    <h1>
      Restaurant ${name}
    </h1>
    <div class="restaurants">
      <div class="restaurant" tabindex="0" aria-label="">
       <div class="panel-img">
          <div class="container-button-like">
          </div>
          <img class="lazyload" src="${BASE_IMAGE_URL}medium/${pictureId}" alt="${name}">
       </div>
       <div class="content">
          <h2>
            Rating
          </h2>
          <p class="description">
            <span class="star">${rating}</span>
          </p>
          <h2>
            Kategori Menu
          </h2>
          <ul>
            <li>
              ${categorie}
            </li>
          </ul>
          <h2>
            Alamat
          </h2>
          <p class="description">
            ${address}, ${city}
          </p>
          <h2>
            Deskripsi
          </h2>
          <p class="description">
            ${description}
          </p>
       </div>
      </div>
      <div class="restaurant" tabindex="0" aria-label="">
       <div class="panel-img">
          <img class="lazyload" src="images/illustration/foodanddrink.jpg" alt="Gambar Ilustrasi Makana dan Minuman">
       </div>
       <div class="content">
          <h2>
            Daftar Makanan
          </h2>
          <ul>
            <li>
              ${drinkElementLi}
            </li>
          </ul>
          <h2>
            Daftar Minuman
          </h2>
          <ul>
            <li>
              ${foodElementLi}
            </li>
          </ul>
       </div>
      </div>
      <div class="restaurant" tabindex="0" aria-label="">
       <div class="panel-img">
          <img class="lazyload" src="images/illustration/review.jpg" alt="Gambar Ilustrasi Review">
       </div>
       <div class="content-wihtout-padding">
          <h2>
            Review
          </h2>
          <div class="review-box">
            <div class="loading-screen">
              <div class="loading">
                <div></div><div></div><div></div><div></div>
              </div>
              <div class="loading-text">
                Loading ...
              </div>
            </div>
          </div>
       </div>
      </div>
    </div>
  `;
};

const createLikeButton = () => `
  <button aria-label='suka dengan restaurant ini' id='likeButton' class='like'>
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButton = () => `
  <button aria-label='tidak suka dengan restaurant ini' id='likeButton' class='like'>
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeButton,
  createUnlikeButton,
};
