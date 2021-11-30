import React from 'react'

const EditableQueueRow = () => {
    return (
        <tr>
            <td>
                <input
                    type="date" required="required" 
                    name="date"
                ></input>
            </td>
            <td>
                <input
                    type="text" required="required" 
                    name="ownerName" 
                ></input>
            </td>
            <td>
                <input
                    type="text" required="required" 
                    name="petName"
                ></input>
            </td>
            <td>
                <input
                    type="text" required="required" 
                    name="petType"
                ></input>
            </td>
            <td>
                <input
                    type="text" required="required" 
                    name="homeAddress"
                ></input>
            </td>
            <td>
                <input
                    type="text" required="required" 
                    name="phoneNumber"
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
            </td>
        </tr>
    )
}

export default EditableQueueRow
