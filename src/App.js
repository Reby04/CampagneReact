import React from 'react';
import { Home } from './Home';
import { Router } from '@reach/router';


function App() {

  const data = [{
    NomeCampagna: 'Coap',
    Autore: 'hjk',
    profilo: 'hjk'
  }];

  
  return (
    <Router>
    <Home path="/" dataVar={data}></Home>
    </Router>
   
  );
}

export default App;
