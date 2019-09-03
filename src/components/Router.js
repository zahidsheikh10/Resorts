import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from '../pages/Home';
import Error from '../pages/Error';
import Rooms from '../pages/Rooms';
import SingleRoom from '../pages/SingleRoom';

const BrowserRouter = () => (
	<Router>
		<Navbar/>
		<Switch>
			<Route path="/" component={Home} exact/>
	 		<Route path="/rooms" component={Rooms} exact/>
	 		<Route path="/rooms/:slug" component={SingleRoom}/>
	 		<Route  component={Error}/>
	 	</Switch>
	</Router>
)
export default BrowserRouter;