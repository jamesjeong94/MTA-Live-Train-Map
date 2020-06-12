import React, { useState } from 'react';
import Map from './components/Map.jsx';
import Form from './components/Form.jsx';
import styles from './styles.scss';
import NavBar from './components/NavBar.jsx';

const App = (props) => {
  const [stops, changeStops] = useState([]);
  const [line, changeLine] = useState('');
  return (
    <div className='column'>
      <div className='navBar'>
        <NavBar changeStops={changeStops} changeLine={changeLine} />
      </div>
      <div className='mapForm'>
        <Map stops={stops} line={line} />
        <Form line={line} />
      </div>
    </div>
  );
};

export default App;
