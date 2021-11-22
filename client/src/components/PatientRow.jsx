import React from 'react';

export default function PatientRow(props){
    return (
        <tr>
            <td id="ownerName">{props.ownerName}</td>
            <td id="petName">{props.petName}</td>
            <td id="petType">{props.petType}</td>
            <td id="homeAddress">{props.homeAddress}</td>
            <td id="phoneNumber">{props.phoneNumber}</td>
            <td id="description">{props.description === ""? "-":props.description}</td>
        </tr>
    );
}