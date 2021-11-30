import React from 'react';

import { Routes, Route } from "react-router-dom";

import './App.css';

import Home from './page/Home';
import Queue from './page/Queue';
import Patients from './page/Patient'

function App(){
  return (
    <Routes>
      <Route path="/*" element={<Home/>}/>
      <Route path="/queue/*" element={<Queue/>}/>
      <Route path="/patients/*" element={<Patients/>}/>
    </Routes>
  )
}

export default App;
