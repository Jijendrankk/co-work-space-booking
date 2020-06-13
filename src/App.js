import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routing';
import store from './store/configureStore';
import './App.css';
function App() {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
}

export default App;
