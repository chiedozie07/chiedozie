import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Share from '@material-ui/icons/Share';
import Visibility from '@material-ui/icons/Visibility';

//imported project images from the image directory
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';


const portfolioStyles = makeStyles({
    mainContainer: {
        background: '#233',
        height: 'auto',  ///120vh
        padding: 'auto',
    },

    cardContainer: {
        width: '345', //maxWidth
        //margin: '3rem',
        margin: '5rem 5rem 5rem 5rem',  //3rem 5rem auto
        padding: 'auto'
    },

    root: {
        "&: .MuiButton-root": {
            minWidth: 100,
            width: 250, //maxWidth
        },

        "& .MuiButton-label": {
            color: 'skyblue',

            "&:hover": {
                color: '#6FDA44',
                background: '#2B5468',
                fontSize: '0.8rem',
                padding: '0.2rem 0.2rem 0.2rem 0',
                borderRadius: '0.5rem'
            }
        },

        "& .MuiSvgIcon-root": {
            fill: 'skyblue',
            // fontSize: '1.5rem',

            "&:hover": {
                background: '#2B5468',
                fill: '#6FDA44',
                fontSize: '1.5rem',
                marginRight: '1px',
                transition: 'all 3s'
             // boxShadow: '-2rem 0 rgba(0,0,0, .2)'
            }
        }
    },
    fourthProject: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'ceter',
        flexWrap: 'wrap',
        width: '100%',
        height: '100px',
        background: 'skyblue',
        color: '#000',
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 900,
        }
    
})

const Portfolio = () => {
    const applyPortfolioStyles = portfolioStyles();
    return (
        <Box component="div" className={applyPortfolioStyles.mainContainer}>
            <Navbar />
            <Grid container justify="center" alignItems="center">
                {/* project 1 */}
            <Grid item xs={12} sm={8} md={6}> 
                <Card className={applyPortfolioStyles.cardContainer}>
                    <CardActionArea> 
                            <CardMedia component="img"
                                alt="project 1" height="140" image={project1}
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5">Project 1</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea nobis. Doloribus iure deserunt similique, non voluptatibus rem, laborum aperiam aliquid dolores tempore quo nihil, magnam vel voluptate excepturi sed.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button className={applyPortfolioStyles.root} size="small" color="primary" ><Share />share</Button>
                                <Button className={applyPortfolioStyles.root} size="small" color="primary" ><Visibility/>view</Button>
                            </CardActions>
                    </Card>
            </Grid>

                     {/* project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={applyPortfolioStyles.cardContainer}>
                    <CardActionArea> 
                            <CardMedia component="img"
                                alt="project 1" height="140" image={project2}
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5">Project 2</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea nobis. Doloribus iure deserunt similique, non voluptatibus rem, laborum aperiam aliquid dolores tempore quo nihil, magnam vel voluptate excepturi sed.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button className={applyPortfolioStyles.root} size="small" color="primary"><Share />Share</Button>
                                <Button className={applyPortfolioStyles.root} size="small" color="primary"><Visibility/>view</Button>
                            </CardActions>
                    </Card>
                </Grid>

                
                     {/* project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={applyPortfolioStyles.cardContainer}>
                    <CardActionArea> 
                            <CardMedia component="img"
                                alt="project 1" height="140" image={project3}
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5">Project 3</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea nobis. Doloribus iure deserunt similique, non voluptatibus rem, laborum aperiam aliquid dolores tempore quo nihil, magnam vel voluptate excepturi sed.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button className={applyPortfolioStyles.root} size="small" color="primary"><Share />Share</Button>
                                <Button className={applyPortfolioStyles.root} size="small" color="primary"><Visibility/>view</Button>
                            </CardActions>
                    </Card>
                </Grid>

                
                     {/* project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={applyPortfolioStyles.cardContainer}>
                    <CardActionArea> 
                            {/* <CardMedia component="img"
                                alt="project 1" height="140" image={project4}
                            /> */}
                            <div className={applyPortfolioStyles.fourthProject}>
                                <h4>Epress.Js | GraphQL | Gatsby.Js</h4>
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5">Project 4</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea nobis. Doloribus iure deserunt similique, non voluptatibus rem, laborum aperiam aliquid dolores tempore quo nihil, magnam vel voluptate excepturi sed.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                            <CardActions>
                                <Button className={applyPortfolioStyles.root} size="small" color="primary">
                                <Share />
                                    Share
                                </Button>
                            
                                <Button className={applyPortfolioStyles.root} size="small" color="primary">
                                <Visibility />
                                   view
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Portfolio;
