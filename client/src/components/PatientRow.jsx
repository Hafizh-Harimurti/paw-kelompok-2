import React from 'react';

export const PatientRow = (props) =>{
    return (
        <tr>
            <td id="_id" style="display:none">{props._id}</td>
            <td id="ownerName">{props.ownerName}</td>
            <td id="petName">{props.petName}</td>
            <td id="petType">{props.petType}</td>
            <td id="homeAddress">{props.homeAddress}</td>
            <td id="phoneNumber">{props.phoneNumber}</td>
            <td id="description">{props.description === ""? "-":props.description}</td>
        </tr>
    );
}