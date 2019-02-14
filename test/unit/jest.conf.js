const path = require("path");

module.exports = {
  verbose: true,
  rootDir: path.resolve(__dirname, "../../"),
  testURL: "http://localhost/",
  // testRegex: ['AddUserInfo.spec.js'],
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  setupFiles: ["<rootDir>/test/unit/setup"]
};
