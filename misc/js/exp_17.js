// Pokemons
import pokemonCardTpl from '../templates/pokemon-card.hbs';


const refs = {
    cardContainer: document.querySelector('.js-card-container'),
};

fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => {
        return response.json();
    })
    .then(pokemon => {
        console.log(pokemon);
        const markup = pokemonCardTpl(pokemon);
        // refs.cardContainer.innerHTML = markup;
        console.log(markup);
    })
    .catch (error => {
        console.log(error);
    });