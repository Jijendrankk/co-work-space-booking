import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/reducers';
import ReduxPromise from 'redux-promise';

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(thunk, ReduxPromise)(createStore);

export default function configureStore() {
	const initialState = {};
	const store = createStoreWithMiddleware(reducer, initialState);
	//store.subscribe(() => {});
	return store;
}
