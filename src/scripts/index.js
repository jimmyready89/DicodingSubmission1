import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsif-layout.scss';

window.addEventListener( "DOMContentLoaded" , () => {

	const menu = document.querySelector('#menu');
	const hero = document.querySelector('header');
	const main = document.querySelector('main');
	const drawer = document.querySelector('#drawer');

	menu.addEventListener('click', function (event) {
		drawer.classList.toggle('open');
		event.stopPropagation();
	});

	hero.addEventListener('click', function () {
		drawer.classList.remove('open');
	});

	main.addEventListener('click', function () {
		drawer.classList.remove('open');
	});

	const { restaurants } = require('../DATA.json');
	restaurants.map( ( Data ) => {
		const { city , description , name , pictureId , rating } = Data;

		const ElementArticle = document.createElement( "article" );
		ElementArticle.classList.add( "restaurant" )

		const ElementDivPanelImg = document.createElement( "div" );
		ElementDivPanelImg.classList.add( "panel-img" );

		const ElementDivPanelTag = document.createElement( "div" );
		ElementDivPanelTag.classList.add( "panel-tag" );

		const ElementDivCity = document.createElement( "div" );
		ElementDivCity.innerHTML = city;
		ElementDivCity.classList.add( "city" );
		ElementDivPanelTag.appendChild( ElementDivCity );

		const ElementDivStar = document.createElement( "div" );
		ElementDivStar.classList.add( "star" );

		const ElementSpanStar = document.createElement( "span" );
		ElementSpanStar.innerHTML = "&#9733; ";
		ElementDivStar.appendChild( ElementSpanStar );
		ElementDivStar.innerHTML += rating;
		ElementDivPanelTag.appendChild( ElementDivStar );
		
		ElementDivPanelImg.appendChild( ElementDivPanelTag );

		const ElementImg = document.createElement( "img" );
		ElementImg.src = pictureId;
		ElementImg.alt = `Resto ${ name } di kota ${ city }`;
		ElementDivPanelImg.appendChild( ElementImg );

		ElementArticle.appendChild( ElementDivPanelImg );

		const ElementDiv = document.createElement( "div" );
		ElementDiv.classList.add( "content" );
		
		const ElementH1 = document.createElement( "h2" );
		ElementH1.classList.add( "title" );
		ElementH1.innerHTML = name;
		ElementDiv.appendChild( ElementH1 );

		const ElementP = document.createElement( "p" );
		ElementP.classList.add( "description" );
		ElementP.innerHTML = description;
		ElementDiv.appendChild( ElementP );

		ElementArticle.appendChild( ElementDiv );
		
		document.querySelector( "div#restaurant-list" ).appendChild( ElementArticle );
	} );
})