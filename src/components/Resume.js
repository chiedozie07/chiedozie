import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';

const resumeStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233",
        zIndex: 900,
        WebkitBackdropFilter: 'sapia'
    },
    timeLine: { 
        position: "relative",
        padding: "1rem",
        margin: "0 auto",

        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid skyblue",
            right: "40px",
            top: 0
        },

        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },

        [theme.breakpoints.up('md')]: {
            padding: "2rem",
            "&:before": {
            
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },

    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid #eee',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        "&:after": {
            content: "''",
            position: 'absolute'
        },

        "&:before": {
            content: "''",
            position: 'absolute',
            right: '-0.625rem',
            top: 'calc(50% - 5px)',
            borderStyle: 'solid',
            borderColor: 'skyblue skyblue transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },

        [theme.breakpoints.up('md')]: {
            width: '44%',
            margin: '1rem',

        "&:nth-of-type(2n)": {
            float: 'right',
            margin: '1rem',
            borderColor: 'skyblue',
            },
            
            "&:nth-of-type(2n):before": {
                right: 'auto',
                left: '-0.625rem',
                borderColor: 'transparent transparent skyblue skyblue'
            }
                
        }
    },

        timeLineYear: {
            textAlign: 'center',
            width: '9.375rem', //maxWidth
            margin: '0 3rem 0 auto',
            fontSize: '1.8rem',
            background: '#6FDA44',
            color: 'white',
            lineHeight: '1',
            padding: '0.5rem 0 1rem', 
            "&:before": {
            display: 'none'
            },

        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '0 auto',

            "&:nth-of-type(2n)": {
                float: 'left',
                margin: '0 auto'
            },

            "&:nth-of-type(2n):before": {
            display: 'none'
            } 
        }
    },
        
    heading: {
        marginTop: '3rem',
        color: "skyblue",
        padding: "3rem 0",
        textTransform: "uppercase" 
    },
    
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "capitalized"

    }
}));

const Resume = () => {
    const applyResumeStyles = resumeStyles();
    return (
        <React.Fragment>
            <Navbar />
            <Box component="header" className={applyResumeStyles.mainContainer}>
                <Typography variant="h4" align="center" className={applyResumeStyles.heading}>
                    Work Experience
                </Typography>

             {/* web design */}
                {/* <Box component="div" className={applyResumeStyles.timeLine}>
                    
                    <Typography variant="h2" className={`${applyResumeStyles.timeLineYear} ${applyResumeStyles.timeLineItem}`}>2017
                    </Typography>
            
                <Box component="div" className={applyResumeStyles.timeLineItem}>
                    <Typography variant="h5" align="center" className={applyResumeStyles.subHeading}>
                        web design
                    </Typography>
                     <Typography variant="body1" align="center" style={{color: "skyblue", textTransform: "capitalize"}}>
                         HTML & CSS 
                    </Typography>

                     <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima fugiat et eos expedita asperiores id magni sequi! Rerum ad ducimus ullam laborum, mollitia quasi 
                    </Typography>
                </Box> */}

             {/*PHED technical support */}
                    <Typography variant="h2" className={`${applyResumeStyles.timeLineYear} ${applyResumeStyles.timeLineItem}`}>2018
                    </Typography>
                <Box component="div" className={applyResumeStyles.timeLineItem}>
                        <Typography variant="h5" align="center" className={applyResumeStyles.subHeading}
                        >
                        </Typography>
                    {/* technical support and survey */}
                    <Typography variant="body1" align="center" style={{ color: "skyblue", textTransform: "capitalize" }}
                        >
                    </Typography>
                     <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                         <a href="https://phed.com.ng"><strong>PHED</strong></a>
                        Port Harcourt Electricity Distritibution Company Ng. (NYSC) | Technical support engineer and Front desk customer care personnel)
                        Worked as a Customer Care Personnel (Front Desk) Resolved customer related problems in the customer Care Unit and also in
                        the Technical department (Assistant Protection Engineer) etc…   
                    </Typography>
                </Box>
                    {/* 2019 PALMCREDIT */}
                    <Typography variant="h2" className={`${applyResumeStyles.timeLineYear} ${applyResumeStyles.timeLineItem}`}>2019
                    </Typography>
                <Box component="div" className={applyResumeStyles.timeLineItem}>
                        <Typography variant="h5" align="center" className={applyResumeStyles.subHeading}
                        >
                        Palmcredit | Transnet financial Nig ltd  
                    </Typography>
                        <Typography variant="body1" align="center" style={{ color: "skyblue", textTransform: "capitalize" }}
                        >
                    </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}
                        >
                            Worked At Transnet Financial Nigeria Ltd (Palmcredit) Lagos State As A Collection officer (Contract)
                    </Typography>
                </Box>

             {/* 2020 EUNATEL */}
                    <Typography variant="h2" className={`${applyResumeStyles.timeLineYear} ${applyResumeStyles.timeLineItem}`}>
                        2020
                    </Typography>
                
                <Box component="div" className={applyResumeStyles.timeLineItem}>
                    <Typography variant="h5" align="center" className={applyResumeStyles.subHeading}
                    >
                        EUNATEL Engineering | Telecoms
                    </Typography>
                    <Typography variant="body1" align="center" style={{ color: "skyblue", textTransform: "capitalize" }}
                    >
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{ color: "tan" }}
                    >
                    |Technical Site Survey Engineer (TSS) And Installation Engineer
                       Role Played: Assisted in carrying out some of the network technical site surveying and equipment installation (Micro Waves
                        and RF Devices etc.) on some of the Airtel and MTN sites.
                    </Typography>
                </Box>

                {/* 2019-2020 software dev */}
                <Typography variant="h2" className={`${applyResumeStyles.timeLineYear} ${applyResumeStyles.timeLineItem}`}>
                    2019-2021
                    </Typography>
                <Box component="div" className={applyResumeStyles.timeLineItem}>
                    <Typography variant="h5" align="center" className={applyResumeStyles.subHeading}
                    >
                      SOFTWARE ENGINEER/DEVELOPMENT (FULL STACK)
                    </Typography>
                    <Typography variant="body1" align="center" style={{ color: "skyblue", textTransform: "capitalize" }}
                    > 
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{ color: "tan" }}
                    >
                        Technologies Covered Includes:
                        HTML-5, CSS-3, JavaScript, React JS, Firebase, Node JS, Express JS, PostgreSQL, React Native(Android &
                        iOS development), GraphQL, Next.js, Gatsby.js, Graphic s Designing, Digital marketing skills…
                        <a href="skillztech19@gmail.com"><strong>skillzTech</strong></a>
                    </Typography>
                </Box>
            </Box>
    </React.Fragment>
    );
}

export default Resume;
