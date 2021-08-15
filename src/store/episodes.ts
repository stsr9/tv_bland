import { AnyAction } from 'redux';
import { Schedule } from '../models/schedule'
import { Show } from '../models/show';
import { ActionTypes } from './actions'

type InitialState = {
	episodes: Schedule[]
	episodeDetails: Show | null
}

const initialState: InitialState = {
	episodes: [],
	episodeDetails: null
};

export const episodesState =  (state: InitialState = initialState, action: AnyAction) => {
	switch (action.type) {
		case ActionTypes.fetchEpisodes:
			return {
				...state,
                episodes: action.episodes
			};
		case ActionTypes.fetchEpisodeDetails:
			return {
				...state,
                episodeDetails: action.episodeDetails
			};
		case ActionTypes.clearDetails:
			return {
				...state,
                episodeDetails: null
			};
		default:
			return state;
	}
};
