import React from 'react'
import Express from 'express'

import { getPatients, postPatient, putPatient } from '../adapters/patients'
import { getOnePatient } from './patientLogic'

const [currentMode, setCurrentMode] = useState("add")
const [medications, setMedications] = useState([])
const [patient, setPatient] = useState({})

const app = Express()

export const patientFormStartup = () => {
    app.get('/patient', function(req,res){
        setCurrentMode(req.params.mode)
        if(currentMode !== "add" || currentMode !== "edit"){
            window.alert("Page is accessed incorrectly")
        } else if(currentMode == "edit") {
            setPatient(getOnePatient)
            return true
        } else {
            return false
        }
    })
}

export const getMode = () =>{
    return currentMode
}

export const addMedication = (medication) => {
    if(medications.includes(medication)){
        window.alert("Medication already exists!")
    } else {
        newMedications = medications.concat(medication)
        setMedications(newMedication)
    }
}

export const removeMedication = (removedMedication) => {
    if(!medications.includes(removedMedication)){
        window.alert("Medication doesn't exists!") 
    } else {
        newMedications = medications.splice(medications.indexOf(removedMedication))
        setMedications(newMedications)
    }
}

export const getMedication = () =>{
    return medications
}

export const getSpecificPatient = () =>{
    return patient
}

export const submitPatient = (patient) => {
    if(
        patient.ownerName === ""||
        patient.petName === "" ||
        patient.petType === "" ||
        patient.homeAddress === "" ||
        patient.phoneNumber
    ){
        window.alert("Please fill the required information!")
    } else if (currentMode === "edit"){
        putPatient(patient)
    } else if (currentMode === "add"){
        postPatient(patient)
    }
    app.get('/patient', function(req,res){
        res.redirect('')
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