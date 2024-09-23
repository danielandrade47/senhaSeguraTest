const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://cloud.senhasegura.app', // URL base da aplicação
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});