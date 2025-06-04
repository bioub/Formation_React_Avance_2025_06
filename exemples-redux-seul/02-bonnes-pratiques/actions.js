import { DEPOSIT, WITHDRAW } from './constants.js';

// Bonne pratique : Action Creators
// Pour créer des actions de manière cohérente y compris
// dans des composants React différents
// Bonne pratique : utiliser payload pour les données
// de l'action (type est obligatoire)
// Flux Standard Action (FSA) :
// un objet action doit avoir un type (string) et peut avoir un payload (any)
// De façon avancé il peut aussi avoir des meta et error (boolean)
export function deposit(count) {
  return { type: DEPOSIT, payload: count };
}
export function withdraw(count) {
  return { type: WITHDRAW, payload: count };
}
