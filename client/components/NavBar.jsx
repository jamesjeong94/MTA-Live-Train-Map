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
      .then(({ data }) => {
        props.changeStops(data.data);
        props.changeLine(e.target.value);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Buttons = lines.map((line, index) => {
    return (
      <button
        key={index}
        className={`${line.color} stopBtn`}
        onClick={handleClick}
        value={line.Line}>
        {line.Line}
      </button>
    );
  });
  return <div>{Buttons}</div>;
};

export default NavBar;
