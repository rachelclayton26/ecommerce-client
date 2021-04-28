//Alec
import React from 'react'

const shop_container = document.getElementById('shop_container');
const shopItems_number = 12;

const getShopItems = async () => {
	for (let i = 1; i <= {shopItems_number}; i++) {
		await getShopItems(i);
	}
};

const shopViewDummyData = [
  {title: 'Blankie', description: 'softness is akin to fluffiness', price: '$1.99'},
  {title: 'Pillow', description: 'rest your weary head', price: '$99.79'},
  {title: 'Art', description: 'the frame itself IS the art', price: '$10.99'}
]
function ShopItems() {
  return (
    <div>



    </div>
  )
}





export default ShopItems;
/*
-------------------------------------------
  REACT FUNDAMENTALS REFERENCE CODE FOLLOWS
-------------------------------------------
*/
/*
const Resources = () => {
  return (
      <div className="main">
          <div className="mainDiv">
              <h1>React Resources</h1>
              <p>Below are some of the resources that we used throughout this app. Note: You'll have one challenge where you will be asked to make this page better.</p>
              <ul>
                  <li>
                     <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
                        The Official Docs
                     </a>
                  </li>
                  <li>
                     <a href="https://reacttraining.com/react-router" target="_blank" rel="noreferrer">
                        React Router Dom
                     </a>
                  </li>
                  <li>
                     <a href="https://www.udemy.com/course/react-redux/" target="_blank" rel="noreferrer">
                        Stephen Grider's Udemy Course for the Udemy API
                     </a>
                  </li>
                  <li>
                     <a href="https://www.pluralsight.com/course/react-js-getting-started" target="_blank" rel="noreferrer">
                        Samer Buna's Pluralsight Course for the GitHub API Starter
                     </a>
                  </li>
                  <li>
                     <a href="https://www.udemy.com/course/react-the-guide-incl-redux" target="_blank" rel="noreferrer">
                        Maximilian Schwarzmüller's Udemy Course
                     </a>
                  </li>
                  <li>
                     <a href="https://reactstrap.github.io/" target="_blank" rel="noreferrer">
                        ReactStrap for a Bootstrap Application
                     </a>
                  </li>
                  <li>
                     <a href="https://gorangajic.github.io/react-icons/fa.html" target="_blank" rel="noreferrer">
                        Font Awesome for React
                     </a>
                  </li>
                  <li>
                     <a href="https://github.com/bmorelli25/interactive-bitcoin-price-chart" target="_blank" rel="noreferrer">
                        Bitcoin
                     </a>
                  </li>
                  <li>
                     <a href="https://github.com/mthorry/earthquakes-mapper" target="_blank" rel="noreferrer">
                        Google Maps
                     </a>
                  </li>
                  <li>
                     <a href="https://neptunian.github.io/react-photo-gallery" target="_blank" rel="noreferrer">
                        React Photo Gallery
                     </a>
                  </li>
             </ul>
          </div>
      </div>
  );
};

---------------------------------------
  Rachel's Pokemon function follows 
---------------------------------------
function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	// console.log(pokemon.types.map(type => type.type.name));
	const type = main_types.find(type => poke_types.indexOf(type) > -1);

	const ability = pokemon.abilities.map(ability => ability.ability.name);

	console.log(pokemon.abilities.map(ability => ability.ability.name));

	
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
	
	pokemonEl.style.backgroundColor = color;

	const pokeInnerHTML = `
		<div class="cardWrapper">
			<div class="title">
				<div class="name">${name}</div>
				<div class="number">#${pokemon.id
										.toString()
										.padStart(3, '0')}</div>
			</div>
			
			<div class="img-container">
				<img src="https://pokeres.bastionbot.org/images/pokemon/${
								pokemon.id
							}.png" alt="${name}" />
			</div>
			
			<div class="info"> 
				<div class="type">Type: ${type}</div>
				<div class="description">Description: ${ability}</div>
			</div>	
		</div>
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
}

fetchPokemons();

*/