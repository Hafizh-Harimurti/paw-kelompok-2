import React, {useState} from 'react'
import '../styles/patient.css'
import { getPatients} from '../adapters/patients';
import FormControl from '@mui/material/FormControl';

import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


import PatientRow from '../components/PatientRow';
import { getPatientById } from '../logic/patientLogic';

const Patient = () => {
    const Patients = getPatients()
    const [values, setValues] = useState({
        _id: '',
        ownerName: '',
        petName: '',
        petType: '',
        homeAddress: '',
        phoneNumber: '',
        description: '',
        currentTreatments: []
    });
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setValues((values)=>({ ...values, [name]: value }));
    };

    function addPatient(e) {
        e.preventDefault()
        console.log(values)
    }

    const viewSpecificPatient = (key) => {
        getPatientById(key)
    }

    return(
        <div className="patient">
            <div className="patientTitle">Patient</div>
            <div className="patientContainer">
                    <ul className="patientListBox">
                        {Patients.map(patient=>{
                            <PatientRow key={patient.id} patient={patient} onClick={viewSpecificPatient(this.key)}/>
                        })}
                    </ul>
                <div className="addPatient">
                    <FormControl fullWidth sx={{ m: 1, width: '20.5ch' }}>
                        <InputLabel htmlFor="nama">Nama</InputLabel>
                        <OutlinedInput
                            id="nama"
                            label="Nama"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, width: '10ch' }}>
                        <InputLabel htmlFor="petName">Your Pet Name</InputLabel>
                        <OutlinedInput
                            id="petName"
                            label="Your Pet Name"
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, width: '10ch' }}>
                    <InputLabel htmlFor="petType">Your Pet Type</InputLabel>
                        <OutlinedInput
                            id="petType"
                            label="Your Pet Type"
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, width: '20.5ch' }}>
                        <InputLabel htmlFor="address">Address</InputLabel>
                        <OutlinedInput
                            id="address"
                            label="Address"
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, width: '20.5ch' }}>
                        <InputLabel htmlFor="phone">Phone Number</InputLabel>
                        <OutlinedInput
                            id="phone"
                            label="Phone Number"
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, width: '20.5ch' }}>
                        <InputLabel htmlFor="desc">Description</InputLabel>
                        <OutlinedInput
                            id="desc"
                            label="Description"
                            onChange={handleChange}
                        />
                    </FormControl>
                    <button className="addBtn" onClick={addPatient}>Add Patient</button>
                </div>
            </div>
        </div>
    )
}

export default Patient