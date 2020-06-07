import React, {Component} from "react";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

import Header from '../src/Containers/Header/Header';
import Footer from '../src/Containers/Footer/Footer';
import Home from '../src/Component/Home/Home';
import About from '../src/Component/About/About';
import Services from '../src/Component/Services/Services';
import Career from '../src/Component/Career/Career';
import Contact from '../src/Component/Contact/Contact';
import Blog from '../src/Component/Blog/Blog';

import AirExport from '../src/Component/Services/Services/AirExport/AirExport';
import AirFreight from '../src/Component/Services/Services/AirFreight/AirFreight';
import ContainerLeasing from '../src/Component/Services/Services/ContainerLeasing/ContainerLeasing';
import ContainerRePositioning from '../src/Component/Services/Services/ContainerRePositioning/RePositioning';
import CustomsClearance from '../src/Component/Services/Services/CustomsClearance/CClearance';
import FCLServices from '../src/Component/Services/Services/FCLServices/FCLServices';
import LCLServices from '../src/Component/Services/Services/LCLServices/LCLServices';
import FreightManagement from '../src/Component/Services/Services/FreightManagement/FreightManagement';
import LinerAgency from '../src/Component/Services/Services/LinerAgency/LinerAgency';
import LiquidCargoTransportation from '../src/Component/Services/Services/LiquidCargoTransp/Cargo';
import OceanFreight from '../src/Component/Services/Services/OceanFreight/OceanFreight';
import ProjectCargo from '../src/Component/Services/Services/ProjectCargo/ProjectCargo';
import WareHousing from '../src/Component/Services/Services/WareHousing/WareHousing';

import Agent from '../src/Component/Login/Agent/Agent';
import Costumer from '../src/Component/Login/Costumer/Costumer';
import AgentSignUp from '../src/Component/Login/SignUp/Agent/Agent';
import CostumerSignUp from '../src/Component/Login/SignUp/Costumer/Costumer';

class App extends Component {
  render(){
    let routes = (
    <Switch>
    <Route exact path='/costumer' component={Costumer}/>
    <Route exact path='/agent' component={Agent}/>
    <Route exact path='/agentsignup' component={AgentSignUp}/>
    <Route exact path='/costumersignup' component={CostumerSignUp}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/services' component={Services}/>
    <Route exact path='/career' component={Career}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/blog' component={Blog}/>
    
    <Route exact path='/services/air-export' component={AirExport}/>
    <Route exact path='/services/air-freight' component={AirFreight}/>
    <Route exact path='/services/container-leasing' component={ContainerLeasing}/>

    <Route exact path='/services/container-repositioning' component={ContainerRePositioning}/>
    <Route exact path='/services/customs-clearance' component={CustomsClearance}/>
    <Route exact path='/services/fcl-services' component={FCLServices}/>

    <Route exact path='/services/lcl-services' component={LCLServices}/>
    <Route exact path='/services/freight-management' component={FreightManagement}/>
    <Route exact path='/services/liner-agency' component={LinerAgency}/>
    
    <Route exact path='/services/liquid-cargo-transportation' component={LiquidCargoTransportation}/>
    <Route exact path='/services/ocean-freight' component={OceanFreight}/>
    <Route exact path='/services/project-cargo' component={ProjectCargo}/>
    <Route exact path='/services/warehousing' component={WareHousing}/>

    <Redirect to='/' />
    </Switch>
    );
    return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    {routes}
    <Footer/>
    </BrowserRouter>
    </div>
  );
  }
}
export default App ;