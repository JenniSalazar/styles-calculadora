import React from 'react';

import { Calculator } from './Calculator';
import './App.css'
import './Button.module.css'
import {Button} from './Button';


function App() {
  return (
    <div className="wrapper">
    <Calculator/>
    <Button>Hola</Button>
    <Button disable>Adios</Button>
    </div>
  );
}

export default App;

