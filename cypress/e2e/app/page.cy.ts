// @ts-check
/// <reference types="cypress" />
/// <reference types="../../support/e2e" />

describe('app/', function () {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: Cypress.env('POKEMON_API_URL') + '/type',
    }).as('requestGET_pokemonCategories');
    cy.intercept({
      method: 'GET',
      url: Cypress.env('POKEMON_API_URL') + '/pokemon/*',
    }).as('requestGET_fetchPokemonDetail');

    cy.visit('http://localhost:3000/');
  });

  it('should display any number of pokemon category type from the api', function () {
    cy.wait('@requestGET_pokemonCategories').then((interception) => {
      const { response } = interception;
      const { body } = response;

      cy.get('.PokemonCategoryCard')
        .should('have.length', body.count)
        .each(($PokemonCategoryCard, index) => {
          cy.wrap($PokemonCategoryCard).should(
            'have.text',
            body.results[index].name.toUpperCase(),
          );
        });
    });
  });

  it('should filter catgory when searching a Pokemon', function () {
    const keyword = 'venusaur';

    cy.get('[data-testid="page-input-search"]').type(keyword).type('{ENTER}');
    cy.wait('@requestGET_fetchPokemonDetail').then((inteception) => {
      const { response } = inteception;
      const { body } = response;

      cy.get('.PokemonCategoryCard')
        .should('have.length', body.types.length)
        .each(($PokemonCategoryCard, index) => {
          cy.wrap($PokemonCategoryCard).should(
            'have.text',
            body.types[index].type.name.toUpperCase(),
          );
        });
      cy.get('.PokemonDetailCard')
        .should('have.length', body.types.length)
        .each(($PokemonCategoryCard, index) => {
          cy.wrap($PokemonCategoryCard).should(
            'have.text',
            body.name.replace(/^\w/, (c) => c.toUpperCase()),
          );
        });
    });
  });

  it('should filter catgory when searching a Pokemon', function () {
    const keyword = 'charizard';

    cy.get('[data-testid="page-input-search"]').type(keyword).type('{ENTER}');
    cy.wait('@requestGET_fetchPokemonDetail').then((inteception) => {
      const { response } = inteception;
      const { body } = response;

      cy.get('.PokemonCategoryCard')
        .should('have.length', body.types.length)
        .each(($PokemonCategoryCard, index) => {
          cy.wrap($PokemonCategoryCard).should(
            'have.text',
            body.types[index].type.name.toUpperCase(),
          );
        });
      cy.get('.PokemonDetailCard')
        .should('have.length', body.types.length)
        .each(($PokemonCategoryCard, index) => {
          cy.wrap($PokemonCategoryCard).should(
            'have.text',
            body.name.replace(/^\w/, (c) => c.toUpperCase()),
          );
        });
    });
  });

  it('should filter catgory when searching a Pokemon', function () {
    const keyword = 'blastoise';

    cy.get('[data-testid="page-input-search"]').type(keyword).type('{ENTER}');
    cy.wait('@requestGET_fetchPokemonDetail').then((inteception) => {
      const { response } = inteception;
      const { body } = response;

      cy.get('.PokemonCategoryCard')
        .should('have.length', body.types.length)
        .each(($PokemonCategoryCard, index) => {
          cy.wrap($PokemonCategoryCard).should(
            'have.text',
            body.types[index].type.name.toUpperCase(),
          );
        });
      cy.get('.PokemonDetailCard')
        .should('have.length', body.types.length)
        .each(($PokemonCategoryCard, index) => {
          cy.wrap($PokemonCategoryCard).should(
            'have.text',
            body.name.replace(/^\w/, (c) => c.toUpperCase()),
          );
        });
    });
  });
});
