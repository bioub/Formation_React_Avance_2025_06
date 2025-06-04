export function formatType(type) {
  const colors = {
    Feu: 'red lighten-1',
    Eau: 'blue lighten-1',
    Plante: 'green lighten-1',
    Insecte: 'brown lighten-1',
    Normal: 'grey lighten-3',
    Vol: 'blue lighten-3',
    Poison: 'deep-purple accent-1',
    Fée: 'pink lighten-4',
    Psy: 'deep-purple darken-2',
    Electrik: 'lime accent-1',
    Combat: 'deep-orange',
  };

  return `chip ${colors[type] ?? 'grey'}`;
}

export function formatDate(date = new Date()) {
  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
}
