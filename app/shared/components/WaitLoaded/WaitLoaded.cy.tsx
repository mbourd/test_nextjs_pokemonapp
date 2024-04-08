// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec ""

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { WaitLoaded } from './WaitLoaded';

describe('<WaitLoaded />', function () {
  it('should have text loading...', function () {
    cy.mount(
      <SetupTestsComponents>
        <WaitLoaded isLoading />
      </SetupTestsComponents>,
    )
      .wait(1000)
      .then(() => {
        cy.get('[data-testid="WaitLoaded-Typography"]').should(
          'have.text',
          'Loading...',
        );
      });
  });

  it('should render the children component if not loading', function () {
    cy.mount(
      <SetupTestsComponents>
        <WaitLoaded>
          <div data-testid="cypress-test">Hello world, not loading anymore</div>
        </WaitLoaded>
      </SetupTestsComponents>,
    )
      .wait(1000)
      .then(() => {
        cy.get('[data-testid="cypress-test"]').should('exist');
      });
  });
});
