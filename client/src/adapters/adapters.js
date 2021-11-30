import Axios from 'axios';

const patientsApiPath = "http://localhost:3000/api/patients"

export const getPatients = () => {
    Axios.get(patientsApiPath)
        .then(response=>{
            return response.data
        })
};

export const postPatient = (patientData) => {
    Axios.post(patientsApiPath, patientData)
        .then(response=>{
            return response.data
        })
};

export const putPatient = (patientData) => {
    Axios.put(patientsApiPath, patientData)
        .then(response=>{
            return response.data
        })
};

export const deletePatient = (patientData) => {
    Axios.delete(patientsApiPath, patientData)
        .then(response=>{
            return response.data
        })
};

const queueApiPath = "http://localhost:3000/api/queue"

export const getQueue = () => {
    Axios.get(queueApiPath)
    .then(response=>{
        return response.data
    })
};

export const postQueue = (queueData) => {
    Axios.post(queueApiPath, queueData)
        .then(response=>{
            return response.data
        })
};

export const putQueue = (queueData) => {
    Axios.put(queueApiPath, queueData)
        .then(response=>{
            return response.data
        })
};
export const deleteQueue = (queueData) => {
    Axios.delete(queueApiPath, queueData)
        .then(response=>{
            return response.data
        })
};