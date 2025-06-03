import { memoize } from 'lodash-es'

let pokemons = Array.from({ length: 1_000_000 }, (_, i) => ({
  id: i + 1,
  name: `Pokemon ${i + 1}`,
  created: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  types: ['fire', 'water', 'grass'].slice(0, Math.floor(Math.random() * 3) + 1)
}));

function getGrassPokemons(pokemons) {
  return pokemons.filter(pokemon => pokemon.types.includes('grass'));
}

const memoizedGetGrassPokemons = memoize(getGrassPokemons);

console.time('getGrassPokemons');
console.log(memoizedGetGrassPokemons(pokemons).length); // about 333
console.timeEnd('getGrassPokemons');

console.time('getGrassPokemons');
console.log(memoizedGetGrassPokemons(pokemons).length); // about 333
console.timeEnd('getGrassPokemons');

// Pour que memoize fonctionne correctement, il faut que les arguments soient immuables.
// C'est à dire il faut lui passer un nouveau tableau à chaque fois si on veut qu'il recalcul le résultat.
pokemons = [...pokemons, { id: 1000001, name: 'New Pokemon', created: new Date().toISOString(), types: ['grass'] }];

// pokemons.push({ id: 1000001, name: 'New Pokemon', created: new Date().toISOString(), types: ['grass'] });



console.time('getGrassPokemons');
console.log(memoizedGetGrassPokemons(pokemons).length); // about 333
console.timeEnd('getGrassPokemons');

console.time('getGrassPokemons');
console.log(memoizedGetGrassPokemons(pokemons).length); // about 333
console.timeEnd('getGrassPokemons');