import { Schedule } from '../models/schedule'
import ScheduleAPI from '../api/schedule-api'
import ShowAPI from '../api/shows-api'
import { Show } from '../models/show'
import { Actor } from '../models/actor'

export enum ActionTypes {
    fetchEpisodes = 'FETCH_EPISODES',
    fetchEpisodeDetails = 'FETCH_EPISODE_DETAILS',
	fetchCast = 'FETCH_CAST',
	clearDetails = 'CLEAR_DETAILS'
}

interface EpisodeActions {
	fetchEpisodes: Function
	fetchEpisodeDetails: Function
	clearDetails: Function
}

interface CastActions {
	fetchCast: Function
}

export const episodeActions: EpisodeActions = {
	fetchEpisodes: () => async(dispatch: Function) => {
		const episodes: Schedule[] = await ScheduleAPI.fetchAllEpisodes()
	    dispatch({
			type: ActionTypes.fetchEpisodes,
			episodes
	    })
	},
	fetchEpisodeDetails: (id: string) => async(dispatch: Function) => {
		const episodeDetails: Show = await ShowAPI.fetchEpisodeDetails(id)
	    dispatch({
			type: ActionTypes.fetchEpisodeDetails,
			episodeDetails
	    })
	},
	clearDetails: () => (dispatch: Function) => {
		dispatch({
			type: ActionTypes.clearDetails,
	    })
	}
}

export const castActions: CastActions = {
	fetchCast: (id: string) => async(dispatch: Function) => {
		const cast: Actor[] = await ShowAPI.showCast(id)
	    dispatch({
			type: ActionTypes.fetchCast,
			cast
	    })
	}
}
