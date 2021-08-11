import { AnyAction } from "redux";
import { Schedule } from '../models/schedule'
type InitialState = { episodes: Schedule[] }

const initialState: InitialState = {
	episodes: []
};

export const episodesState =  (state: InitialState = initialState, action: AnyAction) => {
	switch (action.type) {
		case 'FETCH_EPISODES':
			return {
				...state,
                episodes: action.episodes
			};
		default:
			return state;
	}
};
