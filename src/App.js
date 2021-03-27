import React from 'react';
import { Route, Switch } from 'react-router-dom';
//This removes the default margin and paddings from your web page(global reset)
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

//Components
import Home from './components';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';


function App(props) {
    return (
        <React.Fragment>
            <CssBaseline />
        <Switch>
            <Route path="/contacts" component={Contacts} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/resume" component={Resume} />
            <Route exact path="" component={Home} />
       </Switch>
		</React.Fragment>
	);
}

export default App;
