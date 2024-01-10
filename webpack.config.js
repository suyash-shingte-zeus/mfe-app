const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-app',

  exposes: {
    './OverallWordCardModule': '/src/app/overall-word-card/overall-word-card.module.ts',
    './OverallFlashCardModule': '/src/app/overall-flash-card/overall-flash-card.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
