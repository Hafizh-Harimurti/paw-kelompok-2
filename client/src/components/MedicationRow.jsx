import React from 'react'

export const MedicationRow = (props) => {
    const medication = props.medication
    return(
        <li>
            {medication}
        </li>
    )
}

export default MedicationRow