import { Schedule } from '../models/schedule'
import ScheduleAPI from '../api/schedule-api'

enum Actions {
    fetchEpisodes = 'FETCH_EPISODES'
}

export const episodeActions: { fetchEpisodes: Function } = {
	fetchEpisodes: () => async (dispatch: Function) => {
		const episodes: Schedule[] = await ScheduleAPI.fetchAllEpisodes()
	    dispatch({
			type: Actions.fetchEpisodes,
			episodes
	    })
	}
}
