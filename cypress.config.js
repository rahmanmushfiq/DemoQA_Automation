const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    testIsolation: false,
    reporter: 'cypress-mochawesome-reporter',
    //experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
      /*if (config.specPattern.includes('TestFormsPagePracticeForm.cy.js')) {
        config.testIsolation = false;
      }
      return config;*/
    },
    baseUrl: "https://demoqa.com/",
  },
});
