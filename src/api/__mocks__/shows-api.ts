export default {
  fetchEpisodeDetails: jest.fn().mockReturnValue(Promise.resolve([{name: 'Episode 1'}]))
}
