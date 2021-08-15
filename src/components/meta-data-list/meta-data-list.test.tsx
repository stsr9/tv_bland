import renderer from 'react-test-renderer';
import { MetaDataList } from './meta-data-list';

it('renders without crashing', () => {
  const episodeDetails = renderer.create(
      <MetaDataList icon="user-circle">
          <div><label>Streamed on</label><span>Netflix</span></div>
           <div><label>Schedule</label><span>Monday</span></div>
      </MetaDataList>
  ).toJSON();

  expect(episodeDetails).toMatchSnapshot();
});
