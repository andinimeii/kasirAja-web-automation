const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    
    baseUrl: 'https://kasiraja.ajikamaludin.id/',
    // supportFile: false,
    chromeWebSecurity: false
  }
});
