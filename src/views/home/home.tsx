import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Schedule } from 'models/schedule'
import { episodeActions } from 'store/actions'
import { episodeSelector } from 'store/selectors'
import { SplashScreen } from 'components/splash-screen/splash-screen'
import { Episode } from 'components/episode/episode'
import { useTranslation } from 'react-i18next'
import './home.scss'

export const Home = () => {
    const episodes: Schedule[] = useSelector(episodeSelector.getEpisodeList)
    const dispatch = useDispatch()
    const { t } = useTranslation('common')

    useEffect(() => {
        if(!episodes.length) {
            dispatch(episodeActions.fetchEpisodes())
        }
	}, [dispatch, episodes]);

    return episodes.length
        ? (
            <div className="home">
                <header className="view-header">
                    <p>{t('homeHeadline')}</p>
                    <p>{t('homeHeaderText')}</p>
                </header>
                <div className="view-content">
                    <div className="episode-list">
                        <h2 className="fwn">{t('episodeListTitle')}</h2>
                        <div className="episode-grid flex">
                            {episodes.map((episode) =>
                                <Episode key={episode.id} episode={episode} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
        :  <SplashScreen />

}
