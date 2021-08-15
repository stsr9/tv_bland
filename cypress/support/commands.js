Cypress.Commands.add("stubTVMazeServer", () => {
	cy.server()

	cy.route('GET', '/schedule', 'fixture:schedule').as('episodes')

	cy.route('GET', '/shows/2915', 'fixture:show').as('show')

	cy.route('GET', '/shows/2915/cast', 'fixture:cast').as('cast')

})

