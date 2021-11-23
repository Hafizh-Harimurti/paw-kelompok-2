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
      <Route path="/patient/form/*" element={<PatientForm/>}/>
      <Route path="/queue/*" element={<Queueui/>}/>
    </Routes>
  )
}

export default App;
