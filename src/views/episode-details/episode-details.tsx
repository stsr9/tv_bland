import './episode-details.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { castSelector, episodeSelector} from 'store/selectors'
import { episodeActions } from 'store/actions'
import { castActions } from 'store/actions'
import { Show } from 'models/show'
import Rating from 'react-rating'
import DOMPurify from 'dompurify'
import { calcRating }  from 'utils/rating'
import { useTranslation } from 'react-i18next'
import { Actor } from 'models/actor'
import { MetaDataList } from 'components/meta-data-list/meta-data-list'

type Props = {
    episodeId: number
}

export const EpisodeDetails = ({ episodeId }: Props) => {
    const episodeDetails: Show = useSelector(episodeSelector.getEpisodeDetails)
    const cast: Actor[] = useSelector(castSelector.getCast)
    const dispatch = useDispatch()
    const { t } = useTranslation('common')

    useEffect(() => {
        dispatch(episodeActions.fetchEpisodeDetails(episodeId))
        dispatch(castActions.fetchCast(episodeId))
        return () => { dispatch(episodeActions.clearDetails())}
	}, [dispatch, episodeId])

    return episodeDetails && (
        <div className="episode-details">
            <header className="view-header">
                <div className="details-header flex">
                    <img alt={episodeDetails.name} src={episodeDetails.image.medium} />
                        <div className="info flex-column">
                            <div className="rating">
                            <Rating
                                readonly
                                initialRating={calcRating(episodeDetails.rating.average)}
                                emptySymbol="fa fa-star-o medium"
                                fullSymbol="fa fa-star medium"
                            />
                            {episodeDetails.rating.average &&
                                <span className="dtc">{calcRating(episodeDetails.rating.average)}/5</span>
                            }
                        </div>
                        <div className="title">
                            <h1 className="fwn">{episodeDetails.name}</h1>
                        </div>
                        <div
                            className="summary"
                            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(episodeDetails.summary)}}
                        >
                        </div>
                    </div>
                </div>
            </header>
            <div className="view-content">
                <div className="episode-meta-data flex">
                    <div className="episode-info flex-column">
                        <h2 className="fwn">{t('episodeDetails.showInfo')}</h2>
                        <MetaDataList
                            wrapRows
                        >
                            <div><label>{t('episodeDetails.streamedOn')}</label><span>{episodeDetails.webChannel?.name}</span></div>
                            <div><label>{t('episodeDetails.schedule')}</label><span>{episodeDetails.schedule.days.join(', ')}</span></div>
                            <div><label>{t('episodeDetails.status')}</label><span>{episodeDetails.status}</span></div>
                            <div><label>{t('episodeDetails.genres')}</label><span>{episodeDetails.genres.join(', ')}</span></div>
                        </MetaDataList>
                    </div>
                    <div className="episode-roles flex-column">
                        <h2 className="fwn">{t('episodeDetails.staring')}</h2>
                        <MetaDataList
                            icon="user-circle"
                        >
                            {cast.map((actor: Actor) =>
                                (<div key={actor.person.id}>
                                    <label>{actor.person.name}</label>
                                    <span>{actor.character.name}</span>
                                </div>)
                            )}
                        </MetaDataList>
                    </div>
                </div>
            </div>
        </div>
    )
}
