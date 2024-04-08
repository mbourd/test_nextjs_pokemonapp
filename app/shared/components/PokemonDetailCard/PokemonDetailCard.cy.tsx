// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "app/shared/components/PokemonDetailCard/PokemonDetailCard.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { PokemonDetailCard } from './PokemonDetailCard';
import { PokemonShortDetailAPIType } from '@/app/types';
import { capitalizeFirstLetter } from '@/app/packages/helpers/capitalizeFirstLetter';

describe('<PokemonDetailCard />', function () {
  it('should have text pokemon name', function () {
    const pokemon: PokemonShortDetailAPIType = {
      pokemon: { name: 'venusaur', url: '' },
    };

    cy.mount(
      <SetupTestsComponents>
        <PokemonDetailCard pokemon={pokemon} />
      </SetupTestsComponents>,
    )
      .wait(1000)
      .then(() => {
        cy.get('[data-test-id="PokemonDetailCard-CardContent"]').should(
          'have.text',
          capitalizeFirstLetter(pokemon?.pokemon?.name ?? ''),
        );
      });
  });

  it('should have text pokemon name', function () {
    const pokemon: PokemonShortDetailAPIType = {
      pokemon: { name: 'charizard', url: '' },
    };

    cy.mount(
      <SetupTestsComponents>
        <PokemonDetailCard pokemon={pokemon} />
      </SetupTestsComponents>,
    )
      .wait(1000)
      .then(() => {
        cy.get('[data-test-id="PokemonDetailCard-CardContent"]').should(
          'have.text',
          capitalizeFirstLetter(pokemon?.pokemon?.name ?? ''),
        );
      });
  });

  it('should have text pokemon name', function () {
    const pokemon: PokemonShortDetailAPIType = {
      pokemon: { name: 'blastoise', url: '' },
    };

    cy.mount(
      <SetupTestsComponents>
        <PokemonDetailCard pokemon={pokemon} />
      </SetupTestsComponents>,
    )
      .wait(1000)
      .then(() => {
        cy.get('[data-test-id="PokemonDetailCard-CardContent"]').should(
          'have.text',
          capitalizeFirstLetter(pokemon?.pokemon?.name ?? ''),
        );
      });
  });
});
