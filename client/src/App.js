import React from 'react';

import { Routes, Route } from "react-router-dom";

import './App.css';

import Patient from './page/Patient';
import Queueui from './Queueui';

function App(){
  return (
    <Routes>
      <Route path="/patient/*" element={<Patient/>}/>
      <Route path="/queue/*" element={<Queueui/>}/>
    </Routes>
  )
}

export default App;
