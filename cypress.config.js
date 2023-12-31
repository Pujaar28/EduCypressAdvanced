const { defineConfig } = require("cypress");

module.exports = defineConfig({
  browser: "chrome",
  screenshotsFolder: "cypress/screenshots",

  e2e: {
    testIsolation: false,
    specPattern: 'cypress/e2e/**/*.cy.js',
  },

  component: {
    testIsolation: true, // Adjust this value based on your needs
    specPattern: 'cypress/component/**/*.cy.js',
  },
});
