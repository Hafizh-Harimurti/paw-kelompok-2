import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
    return(
        <div className="Navbar">
            <div className="Logo">
                Veterinary
            </div>
            <div className="Navigation">
                <div className="Queue">
                    Queue
                </div>
                <div className="Patient">
                    Patient
                </div>
            </div>
        </div>
    )
}

export default Navbar