# node-usb-native

1. Update electron version in `lib/index.js`
1. Run Travis CI job to compile cross-platform libraries for the electron version
1. Get new native binaries from https://github.com/VSChina/serialport.node/releases.
1. Place the new libraries under `/native` folder and remove the useless libraries to reduce package size.
1. Update package version number and run `npm publish` ro publish the new version.
