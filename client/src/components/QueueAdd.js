import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { createTheme, Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import React, { useState } from 'react';

function QueueAdd( {queueAdd, error} ) {
    
    const [queuedetails, setqueueDetails] = React.useState({
        ownerName: "", 
        checkDate: "", 
        petName: "", 
        petType: "", 
        homeAddress: "", 
        phoneNumber: ""});

        const submitHandler = e => {
            e.preventDefault();
            QueueAdd(queuedetails);
        }

    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Poppins',
            'sans-serif',
          ].join(','),
        },});

    return (
        <div>
            <ThemeProvider theme={theme}>
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                <CardContent>
                <Typography gutterBottom variant="h5">
                    Add Queue
                </Typography>  
                

                    <form onSubmit={submitHandler}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                        <TextField id="checkDate" name="checkDate"
                        InputLabelProps={{shrink: true,}}
                        placeholder="Date" label="Date" variant="standard" fullWidth required type="date" 
                        onChange= {e=> setqueueDetails({...queuedetails, checkDate: e.target.value})} value={queuedetails.checkDate} />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="ownerName" name="ownerName" placeholder="Enter Owner Name" label="Owner Name" variant="standard" 
                        onChange= {e=> setqueueDetails({...queuedetails, ownerName: e.target.value})} value={queuedetails.ownerName} fullWidth required  />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="petName" name="petName" placeholder="Enter Pet Name" label="Pet Name" variant="standard" 
                        onChange= {e=> setqueueDetails({...queuedetails, petName: e.target.value})} value={queuedetails.petName} fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="petType" name="petType" placeholder="Enter Pet Type" label="Pet Type" variant="standard" 
                        onChange= {e=> setqueueDetails({...queuedetails, petType: e.target.value})} value={queuedetails.petType} fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="homeAdress" name="homeAdress" placeholder="Enter Home Address" label="Home Address" variant="standard" 
                        onChange= {e=> setqueueDetails({...queuedetails, homeAddress: e.target.value})} value={queuedetails.homeAddress} fullWidth required />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <TextField id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" label="Phone Number" variant="standard" 
                        onChange= {e=> setqueueDetails({...queuedetails, phoneNumber: e.target.value})} value={queuedetails.phoneNumber} fullWidth required />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" value="QUEUEDETAILS" fullWidth style={{ backgroundColor: '#00CC99', color: '#FFFFFF', textTransform: 'none'}}>
                            <Typography>Add</Typography></Button>
                        </Grid>

                    </Grid>
                    </form>
                </CardContent>
                </Card>
            </Grid>
            </ThemeProvider>
        </div>
    )
}

export default QueueAdd
