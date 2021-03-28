import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';



const footerStyles = makeStyles({
    root: {
        "&: .MuiBottomNavigation-root": {
            //width: 0,
            width: 250, //maxWidth
        },

        "& .MuiSvgIcon-root": {
            fill: 'skyblue',
            fontSize: '1.4rem',

            "&:hover": {
                fill: 'white',
                fontSize: '2rem',
                textTransform: 'capitalize'
            }

        }
    },

    footerContainer: {
        position: 'fixed',
        top: '71.6%',
        width: '250px',
    },

    socialTitle: {
        width: "250", //maxWidth
        //color: '#233333',
        padding: '0.2rem',
        fontFamily: 'Helvetica',
        fontSize: '1.5rem',
        fontWeight: 300,
    },

    socialExtraStyle: {
        textTransform: 'capitalize',
        fontFamily: "Gotham",
        display: 'inline-block',
        backgroundImage: 'linear-gradient(to right, #233, skyblue)',
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        color: 'transparent',
        letterSpacing: '.1rem',
        transition: 'all 1s',
        
        '&:hover': {
		transform: 'skewY(2deg) skewX(10deg) scale(.5)',
		textShadow: '.5rem 1rem 2rem rgba($color-black, .8)',
      }
    },

    footerStyles: {
        width: '250px',
        height: '500px',
        padding: '5px',
        background: '#233', //#fff7f7
        color: '#eee',
        textAlign: 'center',
        marginTop: '-2.6px',
        marginLeft: '-6px',
        marginBottom: '10px',
        fontFamily: 'arial',
        fontSize: '12px'
    }

})
const Footer = () => {
    const applyFooterStyles = footerStyles();
    return (
        <Box component="div" style={{ height: '13vh', background: '#2B5468' }} className={applyFooterStyles.footerContainer}>
            <Box component='div' style={{background: '#eee', width: '100%', height: 'auto', borderRight: '2px solid #2B5468', textAlign: 'center'}}>
            <Typography className={`${applyFooterStyles.socialTitle} ${applyFooterStyles.socialExtraStyle} `} variant="h6">Social Places...</Typography>
            </Box>

            {/* maxWidth*/}
            <BottomNavigation width="250" style={{ background: '#233', height: '80%' }}> 
                <BottomNavigationAction className={applyFooterStyles.root} style={{ padding: 0, borderBottom: '0.2px solid gray center' }}
                    icon={
                        <a href="https://github.com/chiedozie07/">
                            <GitHub />
                        </a>
                    }
                />
                <BottomNavigationAction className={applyFooterStyles.root} style={{ padding: 0 }}
                    icon={
                        <a href="https://www.linkedin.com/in/chiedozie-ezidiegwu-076596137/">
                            <LinkedIn />
                        </a>
                    }
                />
                <BottomNavigationAction className={applyFooterStyles.root} style={{ padding: 0 }} 
                    icon={
                        <a href="https://web.facebook.com/chiedozie.ezidiegwu/">
                            <Facebook />
                        </a>
                    }
                />
            </BottomNavigation>
            <BottomNavigation style={{ height: '100px', width: '250px', margin: '3px'}}>
                <Typography variant="h6" className={applyFooterStyles.footerStyles}>
                    <p>&copy; Copyright 2020, All rights reserved </p>
                    <b>Email:</b> ezidiegwuchiedozie17@gmail.com
                        <br />
                    <b>Phone:</b> +2348061167505
                    <p>Powered By: skillzTech</p>
                </Typography>
            </BottomNavigation>
        </Box>
    );
}

export default Footer;
