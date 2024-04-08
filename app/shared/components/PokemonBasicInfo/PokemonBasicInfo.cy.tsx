// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "app/shared/components/PokemonBasicInfo/PokemonBasicInfo.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { PokemonBasicInfo } from './PokemonBasicInfo';
import { PokemonFullDetailAPIType } from '@/app/types';

describe('<PokemonBasicInfo />', function () {
  let pokemonFullDetail: PokemonFullDetailAPIType;

  before(() => {
    cy.fixture('pokemon-full-detail-shayminland.json').then(
      (data) => (pokemonFullDetail = data),
    );
  });

  it('should render basic information', function () {
    cy.mount(
      <SetupTestsComponents>
        <PokemonBasicInfo pokemon={pokemonFullDetail} />
      </SetupTestsComponents>,
    )
      .wait(500)
      .then(() => {
        cy.get('[data-testid="ListItemText-Typography-ID"]').should(
          'have.text',
          pokemonFullDetail.id,
        );
        cy.get('[data-testid="ListItemText-Typography-Moves"]').should(
          'have.text',
          pokemonFullDetail.moves?.length,
        );
        cy.get('[data-testid="ListItemText-Typography-BaseExp"]').should(
          'have.text',
          pokemonFullDetail.base_experience,
        );
        cy.get('[data-testid="ListItemText-Chip-Types"]')
          .should('have.length', pokemonFullDetail.types.length)
          .each(($ChipType, i) => {
            cy.wrap($ChipType).should(
              'have.text',
              pokemonFullDetail.types[i].type.name,
            );
          });
        cy.get('[data-testid="ListItemText-Chip-Abilities"]')
          .should('have.length', pokemonFullDetail.abilities?.length)
          .each(($ChipAbility, i) => {
            cy.wrap($ChipAbility).should(
              'have.text',
              pokemonFullDetail.abilities?.[i].ability.name,
            );
          });
      });
  });
});
