import { http } from './http/http'
import { ApiEndpointUrls } from './api-endpoint-urls'

interface ScheduleInterface {
  fetchAllEpisodes(): Promise<any>
}

class ScheduleAPI implements ScheduleInterface {
  fetchAllEpisodes(): Promise<any> {
    return http({
      method: 'get',
      url: ApiEndpointUrls.schedule,
    })
  }
}

export default new ScheduleAPI()
