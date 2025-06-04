// Bonne pratique : Selecteurs
// Fonction pour lire une valeur du state ou dérivé une valeur
export function amountSelector(state) {
  return state.amount;
}
// Exemple dérivé
function amountInEurosSelector(state) {
  // Conversion fictive pour l'exemple
  return state.amount * 0.85; // Supposons que 1 unité = 0.85 euros
}
