require('dotenv').config()

module.exports = {
  packagerConfig: { 
    appCopyright: 'Tiny Borb, Inc.'
  },
  rebuildConfig: { 

  },
  makers: [ 
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    }
  ],
  publishers: [ 
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'GalacticLemonade',
          name: 'offlinegames'
        },
        draft: false,
        prerelease: false,
        authToken: process.env.GH_KEY
      }
    }
  ],
  plugins: [ 

  ],
  hooks: { 

  },
  buildIdentifier: 'v1.0.2'
}