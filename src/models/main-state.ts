import { Schedule } from './schedule'
import { Show } from './show'
import { Actor } from './actor'

export interface MainState {
	episodesState: {
		episodes: Schedule[]
		episodeDetails: Show
	}
	castState: {
		cast: Actor[]
	}
}
