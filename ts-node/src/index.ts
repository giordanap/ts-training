import { Pokemon } from "./decorators/pokemon-class";


const charmander = new Pokemon('Charmander');

// ( Pokemon.prototype as any ).customName = 'Pikachu';
// charmander.savePokemonToDB( 3 );

charmander.publicApi = 'https:giordan-arredondo.com';
console.log( charmander );
