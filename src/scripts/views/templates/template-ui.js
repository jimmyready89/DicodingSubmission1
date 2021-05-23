import { BASE_IMAGE_URL } from '../../config';

const createRestaurantTemplate = (restorant) => {
  const {
    id, city, description,
    name, pictureId, rating,
  } = restorant;

  return `
    <restaurant tabindex="0" aria-label="">
       <panel-img>
          <panel-tag>
             <city>${city}</city>
             <star>${rating}</star>
          </panel-tag>
          <img src="${BASE_IMAGE_URL}medium/${pictureId}" alt="${name}">
       </panel-img>
       <content>
          <h2>
            <a href="#/restaurantdetail/${id}">
              ${name}
            </a>
          </h2>
          <p class="description">
            ${description}
          </p>
       </content>
    </restaurant>
  `;
};

const convertArrayToElementLi = (MenuList) => MenuList.map((menu) => menu.name).join('</li><li>');

const createRestaurantDetailTemplate = async (restorant) => {
  // console.log(restorant)
  const {
    city, description,
    name, pictureId, rating,
    address, menus, categories,
  } = restorant.restaurant;

  const {
    drinks, foods,
  } = menus;

  console.log(restorant.restaurant);
  const drinkElementLi = await convertArrayToElementLi(drinks);
  const foodElementLi = await convertArrayToElementLi(foods);
  const categorie = await convertArrayToElementLi(categories);

  return `
    <h1>
      Restaurant ${name}
    </h1>
    <restaurants>
      <restaurant tabindex="0" aria-label="">
       <panel-img>
          <img src="${BASE_IMAGE_URL}medium/${pictureId}" alt="${name}">
       </panel-img>
       <content>
          <h2>
            Rating
          </h2>
          <p class="description">
            <star>${rating}</star>
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
       </content>
      </restaurant>
      <restaurant tabindex="0" aria-label="">
       <panel-img>
          <img src="images/illustration/foodanddrink.jpg" alt="Gambar Ilustrasi Makana dan Minuman">
       </panel-img>
       <content>
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
       </content>
      </restaurant>
      <restaurant tabindex="0" aria-label="">
       <panel-img>
          <img src="images/illustration/review.jpg" alt="Gambar Ilustrasi Review">
       </panel-img>
       <content-wihtout-padding>
          <h2>
            Review
          </h2>
          <review-box>
            <loading-screen>
              <div class="loading">
                <div></div><div></div><div></div><div></div>
              </div>
              <loading-text>
                Loading ...
              </loading-text>
            </loading-screen>
          </review-box>
       </content-wihtout-padding>
      </restaurant>
    </restaurants>
  `;
};

// const createLikeButtonTemplate = () => `
//   <button aria-label='like this movie' id='likeButton' class='like'>
//      <i class='fa fa-heart-o' aria-hidden='true'></i>
//   </button>
// `;

// const createLikedButtonTemplate = () => `
//   <button aria-label='unlike this movie' id='likeButton' class='like'>
//     <i class='fa fa-heart' aria-hidden='true'></i>
//   </button>
// `;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
};
