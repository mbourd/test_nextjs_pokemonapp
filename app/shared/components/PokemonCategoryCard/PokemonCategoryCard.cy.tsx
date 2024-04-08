// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "app/shared/components/PokemonCategoryCard/PokemonCategoryCard.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { PokemonCategoryCard } from './PokemonCategoryCard';

describe('<PokemonCategoryCard />', function () {
  it('should have text type', function () {
    const type = { name: 'grass' };

    cy.mount(
      <SetupTestsComponents>
        <PokemonCategoryCard type={type} />
      </SetupTestsComponents>,
    )
      .wait(1000)
      .then(() => {
        cy.get('[data-test-id="PokemonCategoryCard-CardContent"]').should(
          'have.text',
          type?.name.toUpperCase(),
        );
      });
  });

  it('should have text type', function () {
    const type = { name: 'fire' };

    cy.mount(
      <SetupTestsComponents>
        <PokemonCategoryCard type={type} />
      </SetupTestsComponents>,
    )
      .wait(1000)
      .then(() => {
        cy.get('[data-test-id="PokemonCategoryCard-CardContent"]').should(
          'have.text',
          type?.name.toUpperCase(),
        );
      });
  });

  it('should have text type', function () {
    const type = { name: 'water' };

    cy.mount(
      <SetupTestsComponents>
        <PokemonCategoryCard type={type} />
      </SetupTestsComponents>,
    )
      .wait(1000)
      .then(() => {
        cy.get('[data-test-id="PokemonCategoryCard-CardContent"]').should(
          'have.text',
          type?.name.toUpperCase(),
        );
      });
  });
});
