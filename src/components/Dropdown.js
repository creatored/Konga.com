import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
function Dropdown() {
  const [isShown, setIsShown] = useState(false);
  const toggleDropdown = () => {
    setIsShown(true);
  }
  const closeDropdown = () => {
    setIsShown(false);
  }
  return (
    <div className="Dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={closeDropdown}>
      <a
        className='help'>
        Help
        <MdKeyboardArrowDown className='help-icon' />
      </a>
      {isShown && (
        <div className='dropdown-content'>
          <div className="dropdown-content-container">
            <div>FAQs</div>
            <div>Contact Us</div>
            <div>Track My Order</div>
            <div>Konga Return Policy</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;