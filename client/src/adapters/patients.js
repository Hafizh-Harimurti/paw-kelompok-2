import Axios from 'axios';

const patientsApiPath = "https://localhost:3000/api/patients"

export const getPatients = () => {
    let res = Axios.get(patientsApiPath)
        .then(response=>{
            response.data
        })
        .catch(err)
    console.log(res)
    return res
};

export const postPatient = (patientData) => {
    let res = Axios.post(patientsApiPath, patientData)
        .then(response=>{
            response.data
        })
        .catch(err)
    console.log(res)
    return res
};

export const putPatient = (patientData) => {
    let res = Axios.put(patientsApiPath, patientData)
        .then(response=>{
            response.data
        })
        .catch(err)
    console.log(res)
    return res
};

export const deletePatient = (patientData) => {
    let res = Axios.delete(patientsApiPath, patientData)
        .then(response=>{
            response.data
        })
        .catch(err)
    console.log(res)
    return res
};