import React from 'react';
import { lines } from '../helpers/NavBarHelpers.js';
import axios from 'axios';

const NavBar = (props) => {
  let line;
  const handleClick = (e) => {
    line = e.target.value;
    axios({
      method: 'GET',
      url: 'https://thawing-falls-97304.herokuapp.com/subway/stops',
      params: {
        line,
      },
    })
      .then(({ data }) => {
        props.changeStops(data.data);
        props.changeLine(line);
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
