import { ActionTypes } from './actions'
import { episodesState, InitialState } from './episodes'

describe('Check episodes reducer', () => {
	const initState: InitialState = {
		episodes: [],
		episodeDetails: null
	}

	it('returns correct default state', () => {
		expect(episodesState(undefined, { type: null })).toEqual(initState)
	})

	it('returns correct state for fetch episodes', () => {
		expect(
			episodesState(initState, {
				type: ActionTypes.fetchEpisodes,
				episodes: [{ show: 'John Doe show' }]
			})
		).toEqual({
			episodes: [{ show: 'John Doe show' }],
			episodeDetails: null
		})
	})

	it('returns correct state for fetch episode details', () => {
		expect(
			episodesState(initState, {
				type: ActionTypes.fetchEpisodeDetails,
				episodeDetails: { show: 'John Doe show' }
			})
		).toEqual({
			episodeDetails: { show: 'John Doe show' },
			episodes: []
		})
	})

	it('returns correct state for clear episode details', () => {
		episodesState(initState, {
			type: ActionTypes.fetchEpisodeDetails,
			episodeDetails: { show: 'John Doe show' }
		})
		expect(
			episodesState(initState, {
				type: ActionTypes.clearDetails
			})
		).toEqual({
			episodeDetails: null,
			episodes: []
		})
	})
})
