import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/components/Home';
import Navbar from './Navigation/components/CustomNavbar';
import Footer from './Footer/components/Footer';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<Route exact path="/" component={Home} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
