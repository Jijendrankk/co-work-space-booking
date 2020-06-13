import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routing';
class Root extends React.Component {
	render() {
		return (
			<Router>
				<Routing />
			</Router>
		);
	}
}

export default Root;
