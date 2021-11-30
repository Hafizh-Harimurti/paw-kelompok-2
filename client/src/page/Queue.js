import React, { useState, Fragment } from 'react'
import '../style/Queue.css'
import ReadOnlyQueueRow from '../components/ReadOnlyQueueRow'
import EditableQueueRow from '../components/EditableQueueRow'

const Queue = () =>  {

const QueueData = useState()

    return (
        <div class="main">
            <h1>Queue</h1>
            <a href="#" class="add-button"><span>Add Item</span></a>
            <div class="container" >
                    <table CELLSPACING="0">
                        <thead>
                            <tr class="table-header" >
                                <td>Date</td>
                                <td>Owner Name</td>
                                <td>Pet Name</td>
                                <td>Pet Type</td>
                                <td>Home Address</td>
                                <td>Phone Number</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {QueueData.map(() => (
                                <Fragment>
                                    <ReadOnlyQueueRow />
                                    {/* <EditableQueueRow /> */}
                                </Fragment>
                            ))}
                            
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default Queue
