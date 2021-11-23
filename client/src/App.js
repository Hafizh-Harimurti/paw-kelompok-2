import React from 'react';

import { Routes, Route } from "react-router-dom";

import './App.css';

import Patient from './page/Patient';
import Queueui from './page/Queue';
import PatientForm from './page/PatientForm';

function App(){
  return (
    <Routes>
      <Route path="/patient/*" element={<Patient/>}/>
      <Route path="/queue/*" element={<Queueui/>}/>
      <Route path="/patient2/*" element={<PatientForm/>}/>
    </Routes>
  )
}

export default App;
