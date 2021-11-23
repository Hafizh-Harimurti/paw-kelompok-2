import React from 'react';

const PatientForm = () => {
    return(
        <div className="container">
    <div className="app-wrapper">
        <div>
            <h2 className="title">Informasi Pasien</h2>
    </div>
    <form className="form-wrapper">
        <div className="patientName">
        <label className="label">Nama Pemilik : </label>
        <input className="input" type="text" />
        </div>
        <div className="petName">
        <label className="label">Nama Hewan : </label>
        <input className="input" type="petName" />
        </div>
        <div className="homeAddress">
        <label className="label">Alamat : </label>
        <input className="input" type="homeAddress" />
        </div>
        <div className="phoneNumber">
        <label className="label">No. Telepon : </label>
        <input className="input" type="phoneNumber" />
        </div>
        <div className="description">
        <label className="label">Deskripsi : </label>
        <input className="input2" type="description" />
        </div>
        <div className="pengobatan">
        <div className="treatment">
        <label className="label">Pengobatan : </label>
        <input className="input3" type="treatment" />
        </div>
        <div className="list">
        <label className="label">Daftar Pengobatan : </label>
        <ul>

        </ul>
        </div>
        <button onClick className="submit">Tambah</button>
        <button onClick className="delete">Hapus</button>
        </div>
        <button onClick className="submitall">Tambah</button>
        <button onClick className="deleteall">Hapus</button>
        
    </form>
    </div>
    </div>
    ); 
};

export default PatientForm;