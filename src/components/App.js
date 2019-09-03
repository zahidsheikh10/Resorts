import React from 'react';
import Router from './Router';
import {RoomProvider} from "../context";

class App extends React.Component{
	render(){
		return(
			<RoomProvider>
				<Router/>
			</RoomProvider>
		)
	}
}
export default App;