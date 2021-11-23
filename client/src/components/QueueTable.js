import * as React from 'react';
import MaterialTable from 'material-table'
import { Paper } from '@material-ui/core'

function QueueTable() {
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
            { title: 'Date', field: 'date', type: 'date' },
            { title: 'Owner Name', field: 'ownerName', type: 'string' },
            { title: 'Pet Name', field: 'petName', type: 'string' },
            { title: 'Pet Type', field: 'petType', type: 'string' },
            { title: 'Home Address', field: 'homeAddress', type: 'string' },
            { title: 'Phone Number', field: 'phoneNumber', type: 'numeric' },

          ]}

          data={[
            // test data
            { date: '10/09/2021', ownerName: 'owner1', petName: 'pet1', petType: 'cat', homeAddress:'Street C', phoneNumber: '082138' },
            { date: '12/6/2021', ownerName: 'owner2', petName: 'pet2', petType: 'rabbit', homeAddress:'Street D', phoneNumber: '082138' }
          ]}

          actions={[
            {
              icon: 'edit',
              tooltip: 'Edit User',
              // onClick //
            },
            {
              icon: 'delete',
              tooltip: 'Delete User',
              // onClick // 
            }
          ]}

          title=""
        />
      </div>
    </div>
  )
}

export default QueueTable
