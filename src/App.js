import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import NavMenu from "./components/NavMenu/navMenu";
import Home from './components/Home/home';
import Aboutus from './components/AboutUs/aboutus';
import Customer from './components/Customer/customer';
import Farmer from './components/Farmer/farmer';
import Footer from './components/Footer/footer';
import Login from './components/Login/login';
import SignUp from './components/SignUp/signup';


class App extends Component {
    render() {
      return (
        <Router>
          <NavMenu />
            <Route path={ROUTES.LOGIN} component={Login}/>
            <Route path={ROUTES.SIGNUP} component={SignUp}/>
            <Route exact path={ROUTES.HOME} component={Home}/>
            <Route path={ROUTES.ABOUTUS} component={Aboutus}/>
            <Route path={ROUTES.FARMER} component={Farmer}/>
            <Route path={ROUTES.CUSTOMER} component={Customer}/>
          <Footer />
        </Router>
    );
  }
}
export default App;
