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
             <star><span></span>${rating}</star>
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

const createLikeButtonTemplate = () => `
  <button aria-label='like this movie' id='likeButton' class='like'>
     <i class='fa fa-heart-o' aria-hidden='true'></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label='unlike this movie' id='likeButton' class='like'>
    <i class='fa fa-heart' aria-hidden='true'></i>
  </button>
`;

export {
  createRestaurantTemplate,
};
