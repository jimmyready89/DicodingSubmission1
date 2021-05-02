import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

window.addEventListener( "DOMContentLoaded" , () => {
	const Json = require('../Data.json');
	Json.restaurants.map( ( Data ) => {
		const { city , description , name , pictureId , rating } = Data;

		const ElementArticle = document.createElement( "article" );
		ElementArticle.classList.add( "post-item" )

		const ElementImg = document.createElement( "img" );
		ElementImg.src = pictureId;
		ElementImg.alt = `Resto ${ name } di kota ${ city }`;
		ElementImg.classList.add( "post-item__thumbnail" )

		ElementArticle.appendChild( ElementImg );

		const ElementDiv = document.createElement( "div" );
		ElementDiv.classList.add( "post-item__content" );
		
		const ElementH1 = document.createElement( "h1" );
		ElementH1.classList.add( "post-item__title" );
		ElementH1.innerHTML = name;
		ElementDiv.appendChild( ElementH1 );

		const ElementP = document.createElement( "p" );
		ElementP.classList.add( "post-item__description" );
		ElementP.innerHTML = description;
		ElementDiv.appendChild( ElementP );

		ElementArticle.appendChild( ElementDiv );
		
		document.querySelector( "div#HotelList" ).appendChild( ElementArticle );
	} )
})