import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Hotels from "./Hotels";
  import Cars from "./Cars";
  import Flights from "./Flights";
  import Cruises from "./Cruises";
  import Eats from "./Eats";
  import Combos from "./Combos";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1><font color="white">Priceline</font></h1>
          <ul className="header">
            <li><NavLink exact to="/">Hotels</NavLink></li>
            <li><NavLink to="/Cars">Cars</NavLink></li>
            <li><NavLink to="/Flights">Flights</NavLink></li>
            <li><NavLink to="/Cruises">Cruises</NavLink></li>
            <li><NavLink to="/Eats">Eats</NavLink></li>
            <li><NavLink to="/Combos">Combos</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Hotels}/>
            <Route path="/Cars" component={Cars}/>
            <Route path="/Flights" component={Flights}/>
            <Route path="/Cruises" component={Cruises}/>
            <Route path="/Eats" component={Eats}/>
            <Route path="/Combos" component={Combos}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;