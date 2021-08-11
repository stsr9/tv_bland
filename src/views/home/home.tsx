import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Schedule } from '../../models/schedule'
import { episodeActions } from '../../store/actions'
import { episodeSelector } from '../../store/selectors'
import { SplashScreen } from '../../components/splash-screen/splash-screen'
import { Episode } from '../../components/episode/episode'
import { useTranslation } from 'react-i18next'

export const Home = () => {
    const episodes: Schedule[] = useSelector(episodeSelector.getEpisodeList)
    const dispatch = useDispatch()
    const { t } = useTranslation('common')

    useEffect(() => {
		dispatch(episodeActions.fetchEpisodes())
	}, [dispatch]);

    return episodes.length
        ? (
            <div>
                <p>{t('homeHeadline')}</p>
                <p>{t('homeHeaderText')}</p>
                {episodes.map((episode) =>
                    <Episode key={episode.id} episode={episode} />
                )}
            </div>
        )
        :  <SplashScreen />

}
