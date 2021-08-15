import { ActionTypes, episodeActions} from './actions'
import ScheduleAPI from '../api/schedule-api'
import ShowsAPI from '../api/shows-api'
jest.mock('../api/schedule-api')
jest.mock('../api/shows-api')

describe('Check for actions', () => {
    const dispatch = jest.fn()

    it('should load shows', async() => {
        await episodeActions.fetchEpisodes()(dispatch)
        expect(ScheduleAPI.fetchAllEpisodes).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith({
            type: ActionTypes.fetchEpisodes
        })
    })

    it('should load show details', async() => {
        await episodeActions.fetchEpisodeDetails('321')(dispatch)
        expect(ShowsAPI.fetchEpisodeDetails).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith({
            type: ActionTypes.fetchEpisodeDetails
        })
    })

    it('should clear show details', async() => {
        await episodeActions.clearDetails()(dispatch)
        expect(dispatch).toHaveBeenCalledWith({
            type: ActionTypes.clearDetails
        })
    })
})
