// ORIGINAL code
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
    ],
  };
};

// DOESNT WORK
// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: [
//       "babel-preset-expo",
//       "module:metro-react-native-babel-preset",
//       "module:react-native-dotenv",
//     ],
//     plugins: [
//       "@babel/plugin-proposal-export-namespace-from",
//       "react-native-reanimated/plugin",
//       require.resolve("expo-router/babel"),

//       [
//         "module:react-native-dotenv",
//         {
//           envName: "APP_ENV",
//           moduleName: "@env",
//           path: ".env",
//           safe: false,
//           allowUndefined: false,
//           verbose: false,
//         },
//       ],
//     ],
//   };
// };

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: [
//       "module:metro-react-native-babel-preset",
//       "module:react-native-dotenv",
//     ],
//     plugins: [
//       "@babel/plugin-proposal-export-namespace-from",
//       "react-native-reanimated/plugin",
//       require.resolve("expo-router/babel"),
//     ],
//   };
// };
