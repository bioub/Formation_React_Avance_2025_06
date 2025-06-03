# Exercices

## Rappels

Créer un nouveau composant `src/app/components/pokemon-card-details.jsx` dont le JSX reprend les lignes 25 à 83
de `src/app/pages/pokemon-detail.jsx`

Ce nouveau composant reçoit l'objet pokemon en props

Remplacer ensuite les lignes 25 à 83 de `src/app/pages/pokemon-detail.jsx` par ce nouveau composant

Créer une nouvelle page `src/app/pages/pokemon-compare.jsx` contenant le JSX suivant :

```
<div className="row">
  <div className="col s6">
  	<PokemonCardDetails pokemon={pokemon1} />
  </div>
  <div className="col s6">
  	<PokemonCardDetails pokemon={pokemon2} />
  </div>
</div>
```

Les variables `pokemon1` et `pokemon2` doivent contenir les pokemon dont les ids sont `1` et `2`, utiliser le
service `getPokemon` pour les récupérer.

Créer la route dans `app.tsx`, l'URL peut etre par exemple `/pokemons/compare`

Créer un bouton en bas de la page `src/app/pages/pokemon-list.jsx`, sur son click appeler la méthode navigate (voir par
exemple `src/app/components/pokemon-card.jsx`)

Dans le composant `src/app/components/pokemon-card.jsx` déplacer le `onClick` sur un bouton "Details" dans la carte (on
se servira du click de la carte pour séléctionner les éléments à comparer), sur le click il faudra appeler
la `event.stopPropagation()` (pour ne pas déclencher le click des ancetres).

## Fragments + Render Props

Créer un nouveau composant List dans `src/app/components/list.jsx` en partant du code suivant :

```
function List({ items, renderItem }) {

}

export default List;
```

Dans ce composant List nous allons boucler sur les items et afficher dans le JSX le retour de la fonction `renderItem`, ce JSX sera encapsulé dans un Fragment.

Utiliser ce composant List à la place de `pokemons.map` dans le composant `src/app/pages/pokemon-list.jsx` (on verra demain l'intérêt d'avoir un composant ici)

Idem pour le `.map` à la ligne 302 de `src/app/components/pokemon-form.jsx`

## Custom Hook

Dans `src/app/pages/pokemon-compare.jsx` remplacer les lignes suivantes :

```js
const [pokemon1, setPokemon1] = useState(null);
const [pokemon2, setPokemon2] = useState(null);

useEffect(() => {
  getPokemon(3).then((pokemon) => setPokemon1(pokemon));
  getPokemon(4).then((pokemon) => setPokemon2(pokemon));
}, []);
```

Par un appel à un custom hook `useSelectedPokemons` que vous appelerez de cette façon :

```js
const [pokemon1, pokemon2] = useSelectedPokemons();
```

Donc créer la fonction `useSelectedPokemons` pour que ce code fonctionne.

## Context

Créer un context `CompareContext` en s'inspirant de l'exemple :
[https://github.com/formation-tech/react-communication/tree/master/src/example-context-with-hooks](https://github.com/formation-tech/react-communication/tree/master/src/example-context-with-hooks)

L'idée est de stocker les id des pokemons à comparer dans le context (en utilisant par exemple un tableau), il faudra limiter à 2 pokemons (vous pouvez augmenter la limite si vous le souhaitez mais il faudra jouer sur le nombre de colonnes dans la page `PokemonCompare`).

Dans `src/app/components/pokemon-card.tsx` écouter le click de la checkbox pour sélectionner ou déselectionner le Pokemon à comparer. Le lien vers la page `/pokemons/compare` ne devrait être actif que s'il y a 2 pokemons à comparer.

Dans le custom hook `useSelectedPokemons` utiliser le context plutot que les valeurs 3 et 4.