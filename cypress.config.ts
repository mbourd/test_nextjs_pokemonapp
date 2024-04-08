import { defineConfig } from 'cypress';

// Default environment variables
const EnvConfig = {
  POKEMON_API_URL: 'https://pokeapi.co/api/v2',
};

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },

    specPattern: ['cypress/e2e/**/*.cy.ts'],
    experimentalMemoryManagement: true,
    watchForFileChanges: false,
    pageLoadTimeout: 6 * 60000,
    numTestsKeptInMemory: 0,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },

  component: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: ['app/**/*.cy.{ts,tsx}', 'cypress/unit/**/*.cy.ts'],
    experimentalMemoryManagement: true,
    watchForFileChanges: false,
    pageLoadTimeout: 10 * 60000,
    numTestsKeptInMemory: 0,
  },

  watchForFileChanges: false,
  experimentalMemoryManagement: true,

  env: EnvConfig,
});

export { EnvConfig };
