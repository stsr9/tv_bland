import { http } from './http/http'
import { ApiEndpointUrls } from './api-endpoint-urls'
import { Schedule } from '../models/schedule'

interface ScheduleInterface {
  fetchAllEpisodes(): Promise<any>
}

class ScheduleAPI implements ScheduleInterface {
  fetchAllEpisodes(): Promise<Schedule[]> {
    return http({
      method: 'get',
      url: ApiEndpointUrls.schedule,
    })
  }
}

export default new ScheduleAPI()
