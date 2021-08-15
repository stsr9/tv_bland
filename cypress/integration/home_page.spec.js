describe('TV Bland app', function () {
	beforeEach(() => {
		cy.stubTVMazeServer()
		cy.visit('/home')
		cy.wait('@episodes')
	})

	it('Successfully loads', () => {
		cy.get('.app').toMatchSnapshot()

		cy.viewport('iphone-5')

		cy.get('.app').toMatchSnapshot()
	})

	it('Open show details page', () => {
		cy.get('.episode-grid .episode .image').first().click()
		cy.wait('@show')
		cy.wait('@cast')

		cy.get('.episode-details').toMatchSnapshot()

		cy.viewport('iphone-5')

		cy.get('.episode-details').toMatchSnapshot()
	})
})
