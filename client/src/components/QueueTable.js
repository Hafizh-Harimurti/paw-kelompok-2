import * as React from 'react';
import MaterialTable from 'material-table'
import { Paper } from '@material-ui/core'
import { deleteQueue, putQueue, getQueue } from '../adapters/adapters';

function QueueTable() {

  const [queues, setQueues] = React.useState([])

  setQueues(getQueue())

  function editQueue(index){
    putQueue(queues[index])
  }
  
  function removeQueue(index){
    deleteQueue(queues[index])
  }

  return (
    <div>
      <div style={{ maxWidth: '100%'}}>
        <MaterialTable class="table-container"

          options={{
            search: false,
            showTitle: false,
            sorting: false,
            actionsColumnIndex: -1,
            rowStyle: { 
              fontFamily: "Poppins",
              fontSize: '10pt',
            },
            cellStyle: {
              textAlign: "center",
            },
            headerStyle: {
              backgroundColor: '#00CC99',
              color: '#FFF',
              textAlign: "center"
            },

          }}

          components={{
            Container: props => <Paper {...props} elevation={0}/>
          }}
          
          columns={[
            { title: '_id', field: '_id', type: 'string', hidden: true},
            { title: 'Date', field: 'date', type: 'date' },
            { title: 'Owner Name', field: 'ownerName', type: 'string' },
            { title: 'Pet Name', field: 'petName', type: 'string' },
            { title: 'Pet Type', field: 'petType', type: 'string' },
            { title: 'Home Address', field: 'homeAddress', type: 'string' },
            { title: 'Phone Number', field: 'phoneNumber', type: 'numeric' },
          ]}

          data={queues}

          actions={[
            {
              icon: 'edit',
              tooltip: 'Edit User',
              onclick: (event, rowData) =>{
                editQueue(rowData.data.index)
              }
            },
            {
              icon: 'delete',
              tooltip: 'Delete User',
              onclick: (event, rowData) =>{
                removeQueue(rowData.data.index)
              }
            }
          ]}

          title=""
        />
      </div>
    </div>
  )
}

export default QueueTable
