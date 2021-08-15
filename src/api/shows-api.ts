import { http } from './http/http'
import { ApiEndpointUrls } from './api-endpoint-urls'
import { Show } from 'models/show'
import { Actor } from 'models/actor'

interface ShowsInterface {
	fetchEpisodeDetails(id: string): Promise<Show>
}

class ShowsAPI implements ShowsInterface {
	fetchEpisodeDetails(id: string): Promise<Show> {
		return http({
			method: 'get',
			url: `${ApiEndpointUrls.shows}/${id}`
		})
	}

	showCast(id: string): Promise<Actor[]> {
		return http({
			method: 'get',
			url: `${ApiEndpointUrls.shows}/${id}/cast`
		})
	}
}

export default new ShowsAPI()
