import React, {useState} from 'react'
import QueueTable from '../components/QueueTable'
import Queue from '../components/QueueAdd'
import {Box,Button} from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'client/src/styles/queue.css'

function Queueui() {

    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Poppins',
            'sans-serif',
          ].join(','),
        },});

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

        return (
            <div class="main">
                <h1>Queue</h1>
                <div class="container">
    
                    <div class="btn-modal">
                    <ThemeProvider theme={theme}>
                        <Box textAlign='center'>
                            <Button variant="contained" color="secondary" onClick={toggleModal}
                            style={{backgroundColor: '#00CC99', color: '#FFFFFF', textTransform: 'none'}}>
                                Add Item
                                </Button>
                        </Box>
                    </ThemeProvider>    
                    </div>

                    {modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <Queue/>
                            </div>
                        </div>
                    )}

                    <div class="table">
                        <QueueTable />
                    </div>

                </div>
                
            </div>
        )
    }
    
export default Queueui
