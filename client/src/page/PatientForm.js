import React, { useState } from 'react';

import MedicationRow from '../components/MedicationRow';
import { addMedication, removeMedication, submitPatient} from '../logic/patientFormLogic';

const PatientForm = () => {

    const [newPatientsInfo, setNewPatientsInfo] = useState({})
    const [newMedication, setNewMedication] = useState("")
    const [buttonPressed, setButtonPressed] = useState("")

    const handlePatientChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setNewPatientsInfo(values => ({...values, [name]:value}))
    }

    const handleMedicationChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setNewMedication(values => ({...values, [name]:value}))
    }

    const handlePatientSubmit = (event) => {
        event.preventDefault()
        if(buttonPressed === "submitPatient"){
            submitPatient(newPatientsInfo, newMedication)
        }
    }

    const handleMedicationsSubmit = (event) => {
        event.preventDefault()
        if(buttonPressed === "submitMedication"){
            addMedication(newMedication)
        } else if(buttonPressed === "deleteMedication") {
            removeMedication(newMedication)
        }


    }

    return(
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Informasi Pasien</h2>
                </div>
                <form className="form-wrapper" type="submit" onSubmit={handlePatientSubmit}>
                    <div className="ownerName">
                        <label className="label">Nama Pemilik : </label>
                        <input className="input" name="ownerName" type="text" value={newPatientsInfo.ownerName || "-"} onChange={handlePatientChange}/>
                    </div>
                    <div className="petName">
                        <label className="label">Nama Hewan : </label>
                        <input className="input" name="petName" type="text" value={newPatientsInfo.petName || "-"} onChange={handlePatientChange}/>
                    </div>
                    <div className="petType">
                        <label className="label">Nama Hewan : </label>
                        <input className="input" name="petName" type="text" value={newPatientsInfo.petName || "-"} onChange={handlePatientChange}/>
                    </div>
                    <div className="homeAddress">
                        <label className="label">Alamat : </label>
                        <input className="input" name="homeAddress" type="text" value={newPatientsInfo.homeAddress || "-"} onChange={handlePatientChange}/>
                    </div>
                    <div className="phoneNumber">
                        <label className="label">No. Telepon : </label>
                        <input className="input" name="phoneNumber" type="text" value={newPatientsInfo.phoneNumber || "-"} onChange={handlePatientChange}/>
                    </div>
                    <div className="description">
                        <label className="label">Deskripsi : </label>
                        <input className="input2" name="description" type="text" value={newPatientsInfo.description || "-"} onChange={handlePatientChange}/>
                    </div>
                    <form className="pengobatan" onSubmit={handleMedicationsSubmit}>
                        <div className="treatment">
                            <label className="label">Pengobatan : </label>
                            <input className="input3" type="text" value={newMedication || "-"} onChange={handleMedicationChange}/>
                        </div>
                        <div className="list" id="medicationsList">
                            <label className="label">Daftar Pengobatan : </label>
                            <ul>
                                {getMedication().map((medication) => {
                                    <MedicationRow medication={medication}/>
                                })}
                            </ul>
                        </div>
                        <button name="submitMedication"  className="submit" type="submit" onClick={setButtonPressed(this.name)}>Edit</button>
                        <button name="deleteMedication" className="delete" type="submit" onClick={setButtonPressed(this.name)}>Hapus</button>
                    </form>
                    <button name="submitPatient" className="submitall" onClick={setButtonPressed(this.name)}>Edit</button>
                    <button name="deletePatient" className="deleteall" onClick={setButtonPressed(this.name)}>Hapus</button>
                </form>
            </div>
        </div>
    ); 
};

export default PatientForm;