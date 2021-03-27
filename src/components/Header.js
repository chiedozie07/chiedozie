import React, {useState} from 'react';
import {Typography, Avatar, Grid, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typed from 'react-typed';
import avatar from '../avatar.jpg';
import TimePicker from 'react-time-picker';

const myStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginTop: theme.spacing(5)
    },

    aboutMe: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 400,
        width: '100vw',
        height: '40px',
        color: "#eee",
        //marginTop: 0,
        //marginBottom: '7rem',
        textTransform: "capitalize",
        fontFamily: "Robato",
        fontSize: "2rem",
        fontWeight: "400",
        //lineHeight: "3rem"

    },

    title: {
        //color: 'skyblue',
        marginTop: '2rem',
        textTransform: 'uppercase',
        display: 'inline-block',
        fontFamily: 'Helvetica',
        fontSize: '26px',
        fontWeight: 700,

        //display: 'inline-block',
        backgroundImage: 'linear-gradient(to right, white, #6FDA44)',
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        color: 'transparent',
        letterSpacing: '.2rem',
        transition: 'all .3s',
        

        '&:hover': {
		transform: 'skewY(2deg) skewX(15deg) scale(1)',
		textShadow: '.5rem 1rem 2rem rgba($color-black, .2)',
      }
    },

    MyServicesStyle: {
        marginTop: '1.5rem',
        color: 'skyblue',
        textTransform: 'uppercase',
        display: 'inline-block'


    },
    
    subtitle: {
        color: "#a4c27c",
        marginBottom: "3rem",
        //textTransform: "capitalize",
        fontFamily: "Anton",
        fontSize: "1.5rem",
        fontWeight: "200",
        lineHeight: "1.7rem"
    },

    typedBoxContainer: {
        position: "absolute",
        top: "35%",
        left: "0%",
        transtform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        borderTopRadius: '3rem',
        zIndex: 1
    },

    time: {
        background: "#f7f7f7",
        color: "white"
    }

})); 

const Header = () => {
        const [value, onChange] = useState('12:30');

    const applyMyStyles = myStyles(); 
    return (
        <Box className={applyMyStyles.typedBoxContainer}>
            <Grid container justify="center">
                <Box className={applyMyStyles.aboutMe} component="div" container justify="center">
                    <Typography variant="h6">
                         <Typed 
                         strings={["A Brief Discription About <b><i>Chiedozie</i></b>:",
                            "Simply a true definition of core tech enthusiast",
                            "Electrical/electronics engineer(Profesion)", 
                            "Health,safety and environment officer(HSE 1-3)", 
                            "Human resourse management associate member(HRAM)", 
                            "Profesional project manager(PMP)",
                            "An Idealist",
                            "Creative and Innovative",
                            "Smart and Calculative",
                            "He's Resiliant...",
                        "A pace setter",
                        "A Goal getter",
                        "And a lover of God!",]}
                        typeSpeed={40} backSpeed={20} loop />
                        
                    </Typography>  
                </Box>
            <br />
          <Avatar className={applyMyStyles.avatar} src={avatar} alt="chiedozie photo" />
          </Grid>
            
            <Typography className={applyMyStyles.title} variant='h3'>
                <Typed strings={["Chiedozie Eleazar Ramsey E."]} typeSpeed={40} />
                </Typography>
                <br/>
                <Typography className={applyMyStyles.MyServicesStyle} variant='h5'>services i render:</Typography>
                <br/>
                <Typography className={applyMyStyles.subtitle} variant="h5">
                <Typed strings={["Full Stack Sofware Development", "Web Design", "Web Development",
                    "Android And iOS App Development",
                    "Technical Support Engineering Works",
                    "Technical Site Surveying/Maintenance (Telecoms)",
                    "Full Electrical And Electronics Engineering Works", "Wanna learn new Programming skills? worry no more", "Am fully ready to bless you with the top notch IT skills with favorite progrmming language[...]", "Simply navigate to my contacts page,", "Provide your details and hit the action button..."]}
                    typeSpeed={40} backSpeed={60} loop /> 
            </Typography>
                <div className={applyMyStyles.time}>
                    <TimePicker 
                    onChange={onChange}
                    value={value}
                    />
            </div>
        </Box>
    );
};

export default Header;
