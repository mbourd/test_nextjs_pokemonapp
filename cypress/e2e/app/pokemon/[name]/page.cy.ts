// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../support/e2e" />

describe("app/category/[name]", function () {
  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    cy.intercept({
      method: "GET",
      url: Cypress.env("POKEMON_API_URL") + "/pokemon/*",
    }).as("requestGET_pokemonDetail");

    cy.visit("http://localhost:3000/pokemon/venusaur", {
      failOnStatusCode: false,
    });
  });

  it("should display any number of pokemon with the type", function () {
    cy.wait("@requestGET_pokemonDetail").then((interception) => {
      const { response } = interception;
      const { body } = response;

      cy.get(".pokemon-chart").should("exist");
    });
  });
});
