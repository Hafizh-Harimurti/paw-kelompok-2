import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { createTheme, Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import React, { useState } from 'react';

function QueueAdd( {queueAdd, error} ) {
    
    const [queuedetails, setqueueDetails] = React.useState({
        ownername: "", 
        checkdate: "", 
        petname: "", 
        pettype: "", 
        homeaddress: "", 
        phonenumber: ""});

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
                        <TextField id="checkdate" name="checkdate"
                        InputLabelProps={{shrink: true,}}
                        placeholder="Date" label="Date" variant="standard" fullWidth required type="date" 
                        onChange= {e=> setqueueDetails({...queuedetails, checkdate: e.target.value})} value={queuedetails.checkdate} />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="ownername" name="ownername" placeholder="Enter Owner Name" label="Owner Name" variant="standard" 
                        onChange= {e=> setqueueDetails({...queuedetails, ownername: e.target.value})} value={queuedetails.ownername} fullWidth required  />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="petname" name="petname" placeholder="Enter Pet Name" label="Pet Name" variant="standard" 
                        onChange= {e=> setqueueDetails({...queuedetails, petname: e.target.value})} value={queuedetails.petname} fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="pettype" name="pettype" placeholder="Enter Pet Type" label="Pet Type" variant="standard" 
                        onChange= {e=> setqueueDetails({...queuedetails, pettype: e.target.value})} value={queuedetails.pettype} fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="homeadress" name="homeadress" placeholder="Enter Home Address" label="Home Address" variant="standard" 
                        onChange= {e=> setqueueDetails({...queuedetails, homeaddress: e.target.value})} value={queuedetails.homeaddress} fullWidth required />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <TextField id="phonenumber" name="phonenumber" placeholder="Enter Phone Number" label="Phone Number" variant="standard" 
                        onChange= {e=> setqueueDetails({...queuedetails, phonenumber: e.target.value})} value={queuedetails.phonenumber} fullWidth required />
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
