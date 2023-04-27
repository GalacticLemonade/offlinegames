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
  