import { useState } from 'react';
import './select.css';

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
