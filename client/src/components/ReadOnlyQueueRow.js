import React from 'react'
import '../styles/Queue.css'

const ReadOnlyQueueRow = () => {
    return (
            <tr class="table-data">
                <td>date</td>
                <td>ownerName</td>
                <td>petName</td>
                <td>petType</td>
                <td>homeAddress</td>
                <td>phoneNumber</td>
                <td>
                    <button type="button" onClick="">Edit</button>
                    <button type="button" onClick="">Delete</button>
                </td>
            </tr>
    )
}


export default ReadOnlyQueueRow
