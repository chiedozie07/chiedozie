import React, {useState} from 'react';
import {Link} from 'react-router-dom';
//in the above {useState} we use hooks for manipulating with the state in the functional component
// enables us change MUI default styles for us to be able  to apply our own custom styles
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer'; //we use this imported componet with the custom name(MobilRightMenuSlider) for our hooks
import { AppBar, Toolbar, ListItem, ListItemIcon,  IconButton, ListItemText, Avatar, Divider, List, Typography, Box, } from '@material-ui/core'
import { AssignmentInd, Home, Apps, ContactMail, } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';
import avatar from '../images/chiedozie2.png';
import Footer from './Footer';

//CSS custom styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: '250px',
        background: '#2B5468', //#511 
        height: '100%',
        //borderTopLeftRadius: '10px',
        boxShadow: '4rem 2rem 5rem rgba(skyblue, .8)'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },

    listIconStyle: {
        color: '#6FDA44', //tan
        iconHover: {
        background: '#eee'
        }
    },

    listIconTextStyle: {
        color: 'white',
    },

     
    root: {
        "& .MuiDrawer-root MuiDrawer-modal": {
            background: 'none'
              
          
        }
    },

    welcomeMsg: {
        fontSize: '1.2rem',
        textTransform: 'capitalize',
        marginLeft: 30,
        fontFamily: "sans-serif",
        fontWeight: '400',
        display: 'inline-block',
        backgroundImage: 'linear-gradient(to right, white, #6FDA44)',
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        color: 'transparent',
        letterSpacing: '.1rem',
        transition: 'all 2s',
        

        '&:hover': {
		transform: 'skewY(2deg) skewX(10deg) scale(.7)',
		textShadow: '.5rem 1rem 2rem rgba($color-black, .2)',
      }
    },
    
        //style={{ color: "white", marginLeft: 50, fontFamily: "Gotham" }}>
            /////styles///////
            //-webkit-font-smoothing: antialiased;
            // font-size: 0.875rem;
            // font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            // font-weight: 400;
            // line-height: 1.43;
            // letter-spacing: 0.01071em;
            // color: rgba(0, 0, 0, 0.87);
            // box-sizing: inherit;
            // width: 250px;
            // height: 80%;

            ////selector///////
            // body > div.MuiDrawer-root.MuiDrawer-modal > div.MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorRight.MuiPaper-elevation16 > div.MuiBox-root.MuiBox-root-14.makeStyles-menuSliderContainer-2
}));

//menu icons and arial labels
const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume/CV",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/contacts"
    }
];
const Navbar = () => {
    //hooks applied
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open });
    }); //hooks


  const beaulty = useStyles();
  
    const sideList = slider => (
        <Box className={beaulty.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={beaulty.avatar} src={avatar} alt="Chiedozie pix2" />
            <Divider style={{height: '0.2rem'}} />
            <List>
            {menuItems.map((lsItem, key) => {return (
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={beaulty.listIconStyle}>{lsItem.listIcon}</ListItemIcon>
                    <ListItemText className={beaulty.listIconTextStyle} primary={lsItem.listText} />
                </ListItem>
            )})}
            </List>
        </Box>
    )

    return (
    <React.Fragment>      
        <Box component="nav">
            <AppBar position="fixed" style={{background:  "#2B5468"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider('right', true)} style={{background: 'whitesmoke', width: '40px', height: '40px'}} >
                            <MenuIcon style={{ color: "#6FDA44" }} /> 
                    </IconButton>
                    <Typography className={beaulty.welcomeMsg} variant="h5"> 
                            You're Most Welcome To Chiedozie's Portfolio!
                    </Typography>
                    <MobilRightMenuSlider anchor='right' open={state.right} onClose={toggleSlider('right', false)}> 
                    {sideList('right')}

                    <Footer />  {/* footer placed her*/}
                            
                    </MobilRightMenuSlider> 
                </Toolbar>
            </AppBar>
       </Box>
     </React.Fragment>
  )
}

export default Navbar;
