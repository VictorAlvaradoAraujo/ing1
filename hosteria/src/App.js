import React from "react";
 

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import Error from "./pages/Error";

import Reserva from "./pages/Reserva";
 

import Navbar from "./components/Navbar";
//import Contacts from "./components/Contacts";

import { Switch, Route } from "react-router-dom";

//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="row">
    <div className="col-md-8 offset-md-2">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRooms} />
      
        
        <Route exact path="/reserva" component={Reserva} />
 

        <Route component={Error} />
      </Switch>
      </div>
    </div>
  );
}
//Contacts
export default App;
