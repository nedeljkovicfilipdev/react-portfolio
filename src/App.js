import React,{ Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import NavBar from './navigation';
import home from './pages/home';
import aboutMe from './pages/aboutMe';
import contact from './pages/contact';

import './App.css';

class App extends Component{
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar/>
					<div>
						<Route path="/" component={home} exact/>
						<Route path="/aboutMe" component={aboutMe}/>
						<Route path="/contact" component={contact}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
