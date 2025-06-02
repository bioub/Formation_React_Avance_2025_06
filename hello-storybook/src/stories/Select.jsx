import { useState } from 'react';
import './select.css';

/** Select Component
 * A simple select component that allows users to choose an item from a dropdown menu.
 * 
 * Props:
 * - value: The currently selected value.
 * - items: An array of items to display in the dropdown.
 * - onSelected: Callback function to handle item selection.
 */
function Select(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="select">
      <div className="selected" onClick={toggleMenu}>
        {props.value}
      </div>
      {isMenuOpen && (
        <div className="menu">
          {props.items.map((item, index) => (
            <div key={index} className="item" onClick={() => props.onSelected(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
