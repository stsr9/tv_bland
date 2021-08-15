import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { episodesState } from './episodes'
import { castState } from './cast'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appReducers = combineReducers({
	episodesState,
	castState
});

export const store = createStore(
	appReducers,
	composeEnhancers(applyMiddleware(thunk))
);

