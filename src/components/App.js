import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import Navbar from './shared/navbar';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import ErrorPage from './pages/errorpage';
 
class App extends Component {
    render(){
        return (
            

            <Router>
                <div>
                    <Navbar></Navbar>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/contact" component={Contact} />
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;