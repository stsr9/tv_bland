import { Schedule } from '../../models/schedule';

type Props = {
    episode: Schedule
}

export const Episode = ({ episode }: Props) => {
    return (<h1>{episode.id}</h1>)
}
