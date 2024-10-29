const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome', // ferramenta para gerar os relatórios (Mocha - framework de testes)
    reporterOptions: {
      reportDir: 'cypress/results', // pasta com os dados do teste
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss" }
  },
});