import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { episodesState } from './episodes'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducers = combineReducers({
	episodesState
});

export const store = createStore(
	appReducers,
	composeEnhancers(applyMiddleware(thunk))
);

