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

    const reviewRowTag = document.createElement('review-row');

    const nameTag = document.createElement('name');
    nameTag.innerText = name;
    reviewRowTag.appendChild(nameTag);

    const reviewTag = document.createElement('review');
    reviewTag.innerText = review;
    reviewRowTag.appendChild(reviewTag);

    const dateTag = document.createElement('date');
    dateTag.innerText = date;
    reviewRowTag.appendChild(dateTag);

    return reviewRowTag;
  },

  async render() {
    this.restaurantDetailData.customerReviews.forEach((riviewData, riviewIndex) => {
      const element = this.createReviewRow(riviewData);

      if (riviewIndex === 0) {
        this.riviewElemenet.innerHTML = '';
      }

      this.riviewElemenet.appendChild(element);
    });
  },
};

export default reviewInitiator;
