import { useState } from 'react'
import Express from 'express'

import { putPatient } from '../adapters/patients'
import { getOnePatient } from './patientLogic'

const [medications, setMedications] = useState([])
const [patient, setPatient] = useState({})

const app = Express()

setPatient(getOnePatient)

export const addMedication = (medication) => {
    if(medications.includes(medication)){
        window.alert("Medication already exists!")
    } else {
        const newMedications = medications.concat(medication)
        setMedications(newMedications)
    }
}

export const removeMedication = (removedMedication) => {
    if(!medications.includes(removedMedication)){
        window.alert("Medication doesn't exists!") 
    } else {
        const newMedications = medications.splice(medications.indexOf(removedMedication))
        setMedications(newMedications)
    }
}

export const getMedication = () =>{
    return medications
}

export const getSpecificPatient = () =>{
    return patient
}

export const submitPatient = (patient, medications) => {
    if(
        patient.ownerName === ""||
        patient.petName === "" ||
        patient.petType === "" ||
        patient.homeAddress === "" ||
        patient.phoneNumber
    ){
        window.alert("Please fill the required information!")
    } else {
        const editPatient = {
            ownerName: patient.ownerName,
            petName: patient.petName,
            petType: patient.petType,
            phoneNumber: patient.phoneNumber,
            homeAddress: patient.homeAddress,
            description: patient.description,
            currentTreatments: medications
        }
        putPatient(editPatient)
    }
    app.get('/patient', function(req,res){
        res.redirect('/')
    })
}

export const removePatient = () =>{
    if(patientArray.some(item => patient._id === item._id)){
        deletePatient(patient)
        return true
    } else{
        window.alert("Patient not found!")
        return false
    }
}

export default patientFormLogic