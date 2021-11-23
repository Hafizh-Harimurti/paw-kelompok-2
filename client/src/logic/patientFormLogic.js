import React from 'react'

import { getPatients, postPatient, putPatient } from '../adapters/patients'
import medicationRow from '../components/MedicationRow'

const [medications, setMedications] = useState([])
const [id, setId] = useState("")
const [patient, setPatient] = useState({})

const patientFormStartup = (id) => {
    setPatient(getPatients)
    setId(id||"")
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

export default patientFormLogic