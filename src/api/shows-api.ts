import { http } from './http/http'
import { ApiEndpointUrls } from './api-endpoint-urls'

interface ShowsInterface {
  fetchEpisodeDetails(id: string): Promise<any>
}

class ShowsAPI implements ShowsInterface {
  fetchEpisodeDetails(id: string): Promise<any> {
    return http({
      method: 'get',
      url: `${ApiEndpointUrls.shows}/${id}`,
    })
  }
}

export default new ShowsAPI()
