import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { createTheme, Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';


function QueueAdd() {

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

                    <form>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                        <TextField 
                        InputLabelProps={{shrink: true,}}
                        placeholder="Date" label="Date" variant="standard" fullWidth required type="date" />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField placeholder="Enter Owner Name" label="Owner Name" variant="standard" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField placeholder="Enter Pet Name" label="Pet Name" variant="standard" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField placeholder="Enter Pet Type" label="Pet Type" variant="standard" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField placeholder="Enter Home Address" label="Home Address" variant="standard" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField placeholder="Enter Phone Number" label="Phone Number" variant="standard" fullWidth required />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth style={{ backgroundColor: '#00CC99', color: '#FFFFFF', textTransform: 'none'}}>
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
