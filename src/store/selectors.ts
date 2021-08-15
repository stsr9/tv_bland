import { MainState } from 'models/main-state'

export const episodeSelector = {
	getEpisodeList: ({ episodesState }: MainState) => episodesState.episodes,
	getEpisodeDetails: ({ episodesState }: MainState) =>
		episodesState.episodeDetails
}

export const castSelector = {
	getCast: ({ castState }: MainState) => castState.cast
}
