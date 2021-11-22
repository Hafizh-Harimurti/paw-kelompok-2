import React, {useState} from 'react'
import '../styles/patient.css'

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const petType = [{type: 'cat'}, {type: 'dog'}, {type: 'rabbit'}]

const Patient = () => {
    const Patients = [{id:'1', name:'John', petName:'Ben', petType:'Dog'}]
    const [values, setValues] = React.useState({
        name: '',
        petName: '',
        petType: '',
        address: '',
        phone: '',
        desc: ''
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    function addPatient(e) {
        e.preventDefault()
        console.log(values)
    }

    function deletePatient(e, id){
        e.preventDefault()
        console.log(id)
    }

    return(
        <div className="patient">
            <div className="patientTitle">Patient</div>
            <div className="patientContainer">
                    <ul className="patientListBox">
                        {Patients.map(patient=>{
                            return(
                                <li className="patientList">
                                    <div className="patientInfo">
                                        <div className="patientName">{patient.name}</div>
                                        <div className="pet">
                                            <div className="petDetail">{patient.petName}</div>
                                            <div className="petDetail">({patient.petType})</div>
                                        </div>
                                    </div>
                                    <div className="buttonArea">
                                        <button onClick={e=>deletePatient(e,patient.id)}>delete</button>
                                        <button>edit</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                <div className="addPatient">
                    <FormControl fullWidth sx={{ m: 1, width: '20.5ch' }}>
                        <InputLabel htmlFor="nama">Nama</InputLabel>
                        <OutlinedInput
                            id="nama"
                            label="Nama"
                            value={values.name}
                            onChange={handleChange('name')}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, width: '10ch' }}>
                        <InputLabel htmlFor="petName">Your Pet Name</InputLabel>
                        <OutlinedInput
                            id="petName"
                            label="Your Pet Name"
                            onChange={handleChange('petName')}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, width: '10ch' }}>
                        <TextField
                            id="petType"
                            select
                            label="Your Pet"
                            value={values.petType}
                            onChange={handleChange('petType')}
                            >
                            {petType.map((type) => (
                                <MenuItem key={type.type} value={type.type}>
                                {type.type}
                                </MenuItem>
                            ))}
                            </TextField>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, width: '20.5ch' }}>
                        <InputLabel htmlFor="adsress">Address</InputLabel>
                        <OutlinedInput
                            id="address"
                            label="Address"
                            onChange={handleChange('address')}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, width: '20.5ch' }}>
                        <InputLabel htmlFor="adsress">Phone Number</InputLabel>
                        <OutlinedInput
                            id="phone"
                            label="Phone Number"
                            onChange={handleChange('phone')}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, width: '20.5ch' }}>
                        <InputLabel htmlFor="desc">Description</InputLabel>
                        <OutlinedInput
                            id="desc"
                            label="Description"
                            onChange={handleChange('desc')}
                        />
                    </FormControl>
                    <button className="addBtn" onClick={addPatient}>Add Patient</button>
                </div>
            </div>
        </div>
    )
}

export default Patient