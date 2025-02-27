const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    reporter: 'cypress-mochawesome-reporter',
    //experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://demoqa.com/",
  },
});
