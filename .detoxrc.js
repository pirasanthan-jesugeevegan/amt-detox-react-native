// This is the workaround for the cucumber CLI args pass through issue
function setConfiguration() {
  const PLATFORM = process.env.DETOX_PLATFORM || 'ios'; //ios | android
  const FLAVOR = process.env.DETOX_BUILD_FLAVOR || 'release'; // debug | release

  const configurations = {
    ios_release: {
      'ios.sim.release': {
        type: 'ios.simulator',
        build:
          'xcodebuild -workspace ios/amtDetoxReactNative.xcworkspace -configuration release -scheme amtDetoxReactNative -sdk iphonesimulator -derivedDataPath ios/build',
        binaryPath:
          './ios/build/Build/Products/Release-iphonesimulator/amtDetoxReactNative.app',
        device: {
          type: 'iPhone 13',
        },
      },
    },
  };

  return configurations[`${PLATFORM}_${FLAVOR}`];
}

module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  detox: {
    behavior: {
      init: {
        exposeGlobals: false,
        reuse: true,
      },
    },
  },
  configurations: setConfiguration(),
};
