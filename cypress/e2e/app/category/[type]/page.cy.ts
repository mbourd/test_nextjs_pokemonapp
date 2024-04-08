// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../support/e2e" />

describe('app/category/[type]', function () {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: Cypress.env('POKEMON_API_URL') + '/type/*',
    }).as('requestGET_pokemonsByCategory');

    cy.visit('http://localhost:3000/category/grass');
  });

  it('should display any number of pokemon with the type', function () {
    cy.wait('@requestGET_pokemonsByCategory').then((interception) => {
      const { response } = interception;
      const { body } = response;

      cy.get('.PokemonDetailCard')
        .should('have.length', body.pokemon.length)
        .each(($PokemonDetailCard, index) => {
          cy.wrap($PokemonDetailCard).should(
            'have.text',
            body.pokemon[index].pokemon.name.replace(/^\w/, (c) =>
              c.toUpperCase(),
            ),
          );
        });
    });
  });
});
