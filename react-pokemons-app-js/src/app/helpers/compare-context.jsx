import { createContext, useState } from "react";

export const CompareContext = createContext({
  selectedPokemonIds: [],
  togglePokemonSelection: (id) => {
    throw new Error("CompareProvider is not an ancestor of useContext(CompareContext)");
  },
});

export function CompareProvider({ children }) {
  const [selectedPokemonIds, setSelectedPokemonIds] = useState([]);

  function togglePokemonSelection(id) {
    if (selectedPokemonIds.includes(id)) {
      setSelectedPokemonIds(selectedPokemonIds.filter((pokemonId) => pokemonId !== id));
    } else if (selectedPokemonIds.length < 2) {
      setSelectedPokemonIds([...selectedPokemonIds, id]);
    }
  }

  return (
    <CompareContext.Provider
      value={{ selectedPokemonIds, togglePokemonSelection }}
    >
      {children}
    </CompareContext.Provider>
  );
}

// Usage example:
// import { CompareProvider } from './helpers/compare-context';
//
// function App() {
//   return (
//     <CompareProvider>
//       <YourComponent />
//     </CompareProvider>
//   );
// }