import { ActionTypes } from './actions'
import { castState, InitialState } from './cast'

describe('Check cast reducer', () => {
	const initState: InitialState = { cast: [] }

	it('returns correct default state', () => {
		expect(castState(undefined, { type: null })).toEqual(initState)
	})

	it('returns correct state', () => {
		expect(
			castState(initState, {
				type: ActionTypes.fetchCast,
				cast: [{ name: 'John Doe' }]
			})
		).toEqual({
			cast: [{ name: 'John Doe' }]
		})
	})
})
