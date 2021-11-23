import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { createTheme, Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { postQueue, putQueue, deleteQueue, getQueue } from '../adapters/patients';



const Queue = () => {

    const Queue = postQueue()
    const [queuevalue, setqueueValue] = React.useState({
        ownerName: "", 
        date: "", 
        petName: "", 
        petType: "", 
        homeAddress: "", 
        phoneNumber: ""
    });

    const handleChange = (prop) => (event) =>{
        setqueueValue({ ...queuevalue, [prop]: event.target.value});
    };

    function addQueue(e){
        e.preventDefault()
        console.log(queuevalue)
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
                

                    <form onSubmit={addQueue}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                        <TextField id="date" name="date"
                        InputLabelProps={{shrink: true,}}
                        placeholder="Date" label="Date" variant="standard" fullWidth required type="date" 
                        onChange= {handleChange('date')} />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="ownerName" name="ownerName" placeholder="Enter Owner Name" label="Owner Name" variant="standard" 
                        onChange= {handleChange('ownerName')} fullWidth required  />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="petName" name="petName" placeholder="Enter Pet Name" label="Pet Name" variant="standard" 
                        onChange= {handleChange('petName')} fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="petType" name="petType" placeholder="Enter Pet Type" label="Pet Type" variant="standard" 
                        onChange= {handleChange('petType')} fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="homeAddress" name="homeAdress" placeholder="Enter Home Address" label="Home Address" variant="standard" 
                        onChange= {handleChange('homeAddres')} fullWidth required />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <TextField id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" label="Phone Number" variant="standard" 
                        onChange= {handleChange('phoneNumber')} fullWidth required />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <Button type="submit" onClick={addQueue} variant="contained" color="primary" value="QUEUEDETAILS" fullWidth style={{ backgroundColor: '#00CC99', color: '#FFFFFF', textTransform: 'none'}}>
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
