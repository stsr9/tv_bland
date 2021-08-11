import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Schedule } from '../../models/schedule'
import { episodeActions } from '../../store/actions'
import { episodeSelector } from '../../store/selectors'
import { SplashScreen } from '../../components/splash-screen/splash-screen'

export const Home = () => {
    const episodes: Schedule[] = useSelector(episodeSelector.getEpisodeList)
    const dispatch = useDispatch()

    useEffect(() => {
		dispatch(episodeActions.fetchEpisodes())
	}, [dispatch]);

    return episodes.length
        ? (
            <div>
                {episodes.map((episode) =>
                    (<h1 key={episode.id}>{episode.id}</h1>)
                )}
            </div>
        )
        :  <SplashScreen />

}
