import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';

const customStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: 0.2
    }

});

const Home = () => {
    const applyCustomStyles = customStyles();
    return (
        <React.Fragment>
            <Particles
                canvasClassName={applyCustomStyles.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: "true",
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "star",
                            stroke: {
                                width: 2,
                                color: "tomato"
                            }
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 4,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }

                
                }}
            />
            <Navbar />
            <Header />
        </React.Fragment>
    );
}

export default Home;
