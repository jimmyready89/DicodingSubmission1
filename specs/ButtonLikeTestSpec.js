import buttonLikeInitiator from '../src/scripts/utility/button-like';

describe('Liking A Restaurant', () => {
  it('should show the like button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButton"></div>';

    buttonLikeInitiator.init({
      elemeentButton: document.querySelector('#likeButton'),
      restaurantDetail: {
        id: 1,
      },
    });
    
    expect(document.querySelector('[aria-label="suka dengan restaurant ini"]')).toBeFalsy();
  });
});
