import { useState } from 'react';
import Express from 'express'

import { getPatients, postPatient, deletePatient } from '../adapters/patients';
import { useSearchParams } from 'react-router-dom';

const app = Express()

const [patientArray, setPatientArray] = useState([])
const [specificPatient, setSpecificPatient] = useState({})

export const getAllPatients = () => {
    setPatientArray(getPatients)
}

export const getPatientById = (id) => {
    if(patientArray.some(item => id === item.id)){
        setSpecificPatient(patientArray.find(item => id === item.id))
        app.get('/patient/form', function(req,res){
            res.redirect('/edit')
        })
    } else {
        window.alert("Patient with the corresponding ID is not found!")
    }
}

export const getOnePatient = () => {
    return specificPatient
}

export const addPatient = (patient) => {
    
}