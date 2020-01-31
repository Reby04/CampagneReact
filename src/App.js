import React from 'react';
import { Home } from './Home';
import { Router } from '@reach/router';
import { NuovaCampagna } from './NuovaCampagna';


function App() {

  const data = [{
    NomeCampagna: 'Coap',
    Autore: 'hjk',
    profilo: 'hjk'
  }];

  
  return (
    <Router>
    <Home path="/" dataVar={data}></Home>
    <NuovaCampagna path="/NuovaCampagna"></NuovaCampagna>
    </Router>
   
  );
}

export default App;
