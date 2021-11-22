import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Date', type: 'date', width: 130 },
  { field: 'ownerName', headerName: 'Owner Name', type: 'string', width: 200 },
  { field: 'petName', headerName: 'Pet Name', type: 'string', width: 200 },
  { field: 'petType', headerName: 'Pet Type', type: 'string', width: 200 },
  { field: 'homeAddress', headerName: 'Home Address', type: 'string', width: 200 },
  { field: 'phoneNumber', headerName: 'Phone Number', type: 'string', width: 200 },
];

const rows = [
  //test data
  { id: 1, date: '10/09/2021', ownerName: 'owner1', petName: 'pet1', petType: 'cat', homeAddress: 'street A', phoneNumber: '0812174'},
  { id: 2, date: '15/19/2021', ownerName: 'owner2', petName: 'pet2', petType: 'rabbit', homeAddress: 'street B', phoneNumber: '0823422'},
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
