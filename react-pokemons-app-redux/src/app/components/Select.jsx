import { useEffect, useRef, useState } from 'react';
import './select.css';

// React.createElement(Select, { value: 'Select an item', items: ['Item 1', 'Item 2', 'Item 3'], onSelected: (item) => console.log(item) });

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
    function handleClickOutside(event) {
      console.log('window click', event.target);

      // Close the menu if the click is outside the select component
      if (hostRef.current && !hostRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
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
