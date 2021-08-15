import renderer from 'react-test-renderer'
import { Episode } from './episode'
import { Schedule } from 'models/schedule'
import { BrowserRouter as Router } from 'react-router-dom'

const episode = {
    show: {
        id: 123,
        name: 'best show ever',
        url: 'http://image-url',
        rating: {
            average: 7.6
        }
    }
}

it('renders without crashing', () => {
  const episodeDetails = renderer.create(
      <Router>
          <Episode
            episode={episode as Schedule}
          />
      </Router>
  ).toJSON();

  expect(episodeDetails).toMatchSnapshot();
});
