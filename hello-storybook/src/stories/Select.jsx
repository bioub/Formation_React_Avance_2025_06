import { useEffect, useRef, useState } from 'react';
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
  const hostRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', (event) => {
      // Close the menu if the click is outside the select component
      if (hostRef.current && !hostRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    });
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleMenuItemClick(item) {
    props.onSelected(item);
    setIsMenuOpen(false);
  }

  return (
    <div className="select" ref={hostRef}>
      <div className="selected" onClick={toggleMenu}>
        {props.value}
      </div>
      {isMenuOpen && (
        <div className="menu">
          {props.items.map((item, index) => (
            <div key={index} className="item" onClick={() => handleMenuItemClick(item)}>
              {props.renderItem ? props.renderItem(item) : item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
