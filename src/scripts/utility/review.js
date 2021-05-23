// import { restaurantDetailAPI } from '../data/api';

const reviewInitiator = {
  async init({ riviewElemenet, restaurantDetailData }) {
    this.riviewElemenet = riviewElemenet;
    this.restaurantDetailData = restaurantDetailData;

    this.render();
  },

  createReviewRow(riviewData) {
    const {
      date, name, review,
    } = riviewData;

    return `
      <review-row>
        <name>
          ${name}
        </name>
        <review>
          ${review}
        </review>
        <date>
          ${date}
        </date>
      </review-row>
    `;
  },

  async render() {
    this.restaurantDetailData.customerReviews.forEach((riviewIndex, riviewData) => {
      const element = this.createReviewRow(riviewData);
      if (riviewIndex > 0) {
        this.riviewElemenet.innerHTML = element;
      } else {
        this.riviewElemenet.innerHTML += element;
      }
    });
  },
};

export default reviewInitiator;
