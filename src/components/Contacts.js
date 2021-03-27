import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Box, Grid } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

const contactStyles = makeStyles(theme => ({
    centerForm: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },

    button: {
        margin: '1rem',
        background: '#6FDA44',
        color: 'white',
        borderColor: '#2B5468', //#2B5468
        fontFamily: 'monospace',
        fontWeight: 700,

        "&:hover": {
            background: '#2B5468',
            color: '#6FDA44',
            fontSize: '1.2rem'
            }
    },

    headerStyle: {
        marginTop: 'auto',
        color: 'skyblue',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
        fontSize: 'auto',
        fontWeight: '300',


        '&:hover': {
		transform: 'skewY(2deg) skewX(10deg) scale(1.1)',
            textShadow: '.5rem 1rem 2rem rgba($color-black, .2)',
        transition: 'all 0.7s'
      }
    },
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#6FDA44"
        },

        "& label": {
            color: 'skyblue'
        },

        "& .MuiOutlinedInput-root": {
            
            "& fieldset": {
                borderColor: 'tan'
            },

            "&:hover fieldset": {
                borderColor: 'tan'
            },

            "&.Mui-focused fieldset": {
                borderColor: '#2B5468'
                
            }
        },
        
    }
})(TextField);

const Contacts = () => {
    const applyStyles = contactStyles();
    return (
        <Box component="div" style={{background: '#233', height: '100vh'}}>
            <Navbar />
            <Grid container justify="center">
                <Box className={applyStyles.centerForm} component="form">
                    <Typography className={applyStyles.headerStyle} variant="h4">
                        Hire or contact me
                    </Typography>

                    <InputField
                        fullWidth={true}
                        inputProps={{style: {color: 'white'}}}
                        label="Name"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        required
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        inputProps={{style: {color: 'white'}}}
                        margin="dense"
                        size="medium"
                        required
                         />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Company Name"
                        variant="outlined"
                        inputProps={{style: {color: 'white'}}} 
                        margin="dense"
                        size="medium"
                        required
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Phone"
                        variant="outlined"
                        typeof="number"
                        inputProps={{style: {color: 'white'}}} 
                        margin="dense"
                        size="medium"
                        required
                    />
                    <br />
                    <br />
                    <textarea variant="outlined" style={{background: '#233', color: 'white', borderColor: 'tan', borderRadius: '4px'}} rows="7" cols="35" placeholder="Work Discription"></textarea>
                    <br />
                    <Button className={applyStyles.button} variant="outlined" fullWidth={false} endIcon={<SendIcon />}>
                        Contact Me! 
                    </Button>
                </Box>
            </Grid>
        </Box>
    );
};

export default Contacts;
