/// <reference types="cypress" />
/// <reference types="./commands.d.ts" />
/// <reference types="./e2e" />

// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// // Augment the Cypress namespace to include type definitions for
// // your custom command.
// // Alternatively, can be defined in cypress/support/e2e.d.ts
// // with a <reference path="./e2e" /> at the top of your spec.
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       waitReactAppE2E: typeof waitReactAppE2E;
//       // login(email: string, password: string): Chainable<void>;
//       // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
//       // dismiss(
//       //   subject: string,
//       //   options?: Partial<TypeOptions>,
//       // ): Chainable<Element>;
//       // visit(
//       //   originalFn: CommandOriginalFn,
//       //   url: string,
//       //   options: Partial<VisitOptions>,
//       // ): Chainable<Element>;
//     }
//   }
// }
