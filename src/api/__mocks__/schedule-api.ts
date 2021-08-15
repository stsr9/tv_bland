export default {
  fetchAllEpisodes: jest.fn().mockReturnValue(Promise.resolve([{name: 'Episode 1'}]))
}
