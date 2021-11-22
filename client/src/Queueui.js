import React from 'react'
import QueueTable from './components/QueueTable'


function Queueui() {

        return (
            <div class="main">
                <h1>Antri Dokter Hewan</h1>
                <div class="container">
                    <div class="Table">
                        <QueueTable />
                    </div>
    
                    <div class="container-form">
                        <form>
                            <label>Tanggal: <input type="date"/></label>
                            <label>Nama Pemilik: <input type="text"/></label>
                            <label>Nama Hewan: <input type="text"/></label>
                            <label>Jenis Hewan: <input type="text"/></label>
                            <label>Alamat Rumah: <input type="text"/></label>
                            <label>Nomor Telepon: <input type="text"/></label>
                        
                            <button onClick="" class="button-addstate">Tambahkan</button>
                            <button onClick="" class="button-editstate">Edit</button>
                            <button onClick="" class="button-editstate">Cancel</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
    

export default Queueui
