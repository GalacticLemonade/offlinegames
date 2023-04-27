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
        authToken: "",
        prerelease: true
      }
    }
  ]
};
