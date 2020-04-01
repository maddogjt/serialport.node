# node-usb-native

1. Update electron version in [.travis.yml](./.travis.yml)

    ```bash
    gulp build --electron=[new-electron-version] --token="$API_TOKEN" --tag="downloads"
    ```

1. Update electron version in [./scripts/rebuild-serialport.js](rebuild-serialport.js)

    ```bash
    node-gyp rebuild --target=[new-electron-version] --arch=x64 --dist-url=https://atom.io/download/electron
    ```
1. Run Travis CI job to compile cross-platform libraries for the electron version

1. Get new native binaries from https://github.com/VSChina/serialport.node/releases.

1. Place the new libraries under `./lib/native` folder and remove the useless libraries to reduce package size.

1. Update package version number and run `npm publish` ro publish the new version.
