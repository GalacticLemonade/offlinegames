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
