import { Schedule } from 'models/schedule'
import './episode.scss'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'
import { calcRating } from 'utils/rating'

type Props = {
	episode: Schedule
}

export const Episode = ({ episode }: Props) => {
	return (
		<div className="episode flex-column">
			<div className="image">
				<Link to={`/episodes/${episode.show.id}`}>
					<img alt={episode.name} src={episode.show.image?.medium} />
				</Link>
			</div>
			<div className="rating">
				<Rating
					readonly
					initialRating={calcRating(episode.show?.rating.average)}
					emptySymbol="fa fa-star-o medium"
					fullSymbol="fa fa-star medium"
				/>
			</div>
			<div className="title">{episode.show?.name}</div>
		</div>
	)
}
