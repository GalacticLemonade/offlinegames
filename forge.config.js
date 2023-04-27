module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'GalacticLemonade',
          name: 'offlinegames'
        },
        authToken: "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",
        prerelease: true
      }
    }
  ]
};
