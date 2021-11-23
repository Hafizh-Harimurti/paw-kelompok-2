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

const queueApiPath = "https://localhost:3000/api/queue"

export const getQueue = (queueData) => {
    let res = Axios.get(queueApiPath)
    .then(response=>{
        response.data
    })
    .catch(err)
    return res
};

export const postQueue = (queuetData) => {
    let res = Axios.post(queueApiPath, queueData)
        .then(response=>{
            response.data
        })
        .catch(err)
    return res
};

export const putQueue = (queuetData) => {
    let res = Axios.put(queueApiPath, queueData)
        .then(response=>{
            response.data
        })
        .catch(err)
    return res
};
export const deleteQueue = (queuetData) => {
    let res = Axios.delete(queueApiPath, queueData)
        .then(response=>{
            response.data
        })
        .catch(err)
    return res
    
};