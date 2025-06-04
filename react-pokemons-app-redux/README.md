# Exercices

## Redux

Nous allons migrer `CompareContext` vers Redux.

On va intéragir avec la clé `selectedPokemonIds` du state `pokemons` (de type `number[]`)

Le state pokemon stocké dans Redux sera donc de la forme :
```
{
  data: [], // tableau de pokemons,
  loading: false, // est-ce qu'une requete est en cours,
  searchTerm: '', // le contenu du champ de recherche
  selectedPokemonIds: [2, 5], // les ids des pokemons à comparer
  error: null, // erreur éventuellement pendant le fetch
}
```

Créer un action creator avec `createAction` `togglePokemonSelection` qui retourne un objet :

```
{
type: 'togglePokemonSelection',
payload: 2, // l'id du pokemon sélectionné
}
```

Modifier le reducer `pokemonsReducer` de sorte à ce qu'il modifie le state comme précédemment avec le context (ajoute l'id si absent de `selectedPokemonIds`, retire l'id sinon)

Tester avec Redux DevTools en faisant des dispatch de l'action :

```
{
type: 'togglePokemonSelection',
payload: 2, // l'id du pokemon sélectionné
}
```

Utiliser `useDispatch` pour créer l'action `togglePokemonSelection` lorsqu'on clique sur la checkbox dans `PokemonCard` (à la place de `togglePokemonSelection` qui venait du context)

Créer et utiliser `selectedPokemonIdsSelector` pour récupérer les `selectedPokemonIds` dans `PokemonCard` et cocher la checkbox en fonction de si l'id est dans le tableau.
