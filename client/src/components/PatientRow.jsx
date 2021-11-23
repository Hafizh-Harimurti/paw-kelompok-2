import React from 'react';

import '../styles/patient.css'
import { getPatients, postPatients, putPatients, deletePatients } from '../adapters/patients';

export default function PatientRow(props){
    patient = props.patient
    return (
        <li className="patientList">
            <div className="patientInfo">
                <div className="patientName">{patient.name}</div>
                <div className="pet">
                    <div className="petDetail">{patient.petName}</div>
                    <div className="petDetail">({patient.petType})</div>
                </div>
            </div>
            <div className="buttonArea">
                <button onClick={deletePatients(patient)}>delete</button>
                <button>edit</button>
            </div>
        </li>
    );
}