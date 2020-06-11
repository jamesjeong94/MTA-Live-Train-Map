import React from 'react';
import Map from './components/Map.jsx';
import Form from './components/Form.jsx';
import styles from './styles.scss';
import NavBar from './components/NavBar.jsx';

const App = (props) => {
  return (
    <div className='column'>
      <div className='navBar'>
        <NavBar />
      </div>
      <div className='mapForm'>
        <Map />
        <Form />
      </div>
    </div>
  );
};

export default App;
