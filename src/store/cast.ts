import { AnyAction } from 'redux'
import { ActionTypes } from './actions'
import { Actor } from 'models/actor'

export interface InitialState {
	cast: Actor[]
}

const initialState: InitialState = {
	cast: []
}

export const castState = (
	state: InitialState = initialState,
	action: AnyAction
) => {
	switch (action.type) {
		case ActionTypes.fetchCast:
			return {
				...state,
				cast: action.cast
			}
		default:
			return state
	}
}
