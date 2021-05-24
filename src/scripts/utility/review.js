// import { restaurantDetailAPI } from '../data/api';

const reviewCommentFilter = (Comment) => {
  let status = true;

  const forbidentString = /(div)/gi;
  if (Comment.match(forbidentString)) {
    status = false;
  }

  return status;
};

const reviewInitiator = {
  async init({ riviewElemenet, restaurantDetailData }) {
    this.riviewElemenet = riviewElemenet;
    this.restaurantDetailData = restaurantDetailData;

    this.render();
  },

  createReviewRow(riviewData) {
    let returnelement = '';
    const {
      date, name, review,
    } = riviewData;

    if (reviewCommentFilter(review)) {
      returnelement = `
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
    }

    return returnelement;
  },

  async render() {
    this.restaurantDetailData.customerReviews.forEach((riviewData, riviewIndex) => {
      const element = this.createReviewRow(riviewData);
      if (riviewIndex === 0) {
        this.riviewElemenet.innerHTML = element;
      } else {
        this.riviewElemenet.innerHTML += element;
      }
    });
  },
};

export default reviewInitiator;
