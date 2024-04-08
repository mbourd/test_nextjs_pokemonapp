// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

import { capitalizeFirstLetter } from '../capitalizeFirstLetter';

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "app/packages/helpers/tests/capitalizeFirstLetter.cy.ts"

describe('function capitalizeFirstLetter', function () {
  it('should capitalize the first letter of the word', function () {
    const expectWord = 'Venusaur';
    const word = 'venusaur';

    expect(capitalizeFirstLetter(word)).to.be.equal(expectWord);
  });
  it('should capitalize the first letter of the word', function () {
    const expectWord = 'Charizard';
    const word = 'charizard';

    expect(capitalizeFirstLetter(word)).to.be.equal(expectWord);
  });
  it('should capitalize the first letter of the word', function () {
    const expectWord = 'Blastoise';
    const word = 'blastoise';

    expect(capitalizeFirstLetter(word)).to.be.equal(expectWord);
  });
});
