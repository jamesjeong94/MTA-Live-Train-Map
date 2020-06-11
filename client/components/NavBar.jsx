import React from 'react';
import { lines } from '../helpers/NavBarHelpers.js';
import axios from 'axios';

const NavBar = (props) => {
  const handleClick = (e) => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/subway/stops',
      params: {
        line: e.target.value,
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
