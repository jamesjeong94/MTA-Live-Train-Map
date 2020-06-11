import React from 'react';
import { lines } from '../helpers/NavBarHelpers.js';

const NavBar = (props) => {
  const handleClick = (e) => {
    console.log(e.target.value);
  };

  const Buttons = lines.map(({ Line, color }) => {
    return (
      <button className={`${color} stopBtn`} onClick={handleClick} value={Line}>
        {Line}
      </button>
    );
  });
  return <div>{Buttons}</div>;
};

export default NavBar;
