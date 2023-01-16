const { resolve } = require("./utils");

module.exports = function (modules) {
  const plugins = [
    [
      resolve("@babel/plugin-transform-typescript"),
      {
        isTSX: true,
      },
    ],
    [
      resolve("@vue/babel-plugin-jsx"),
      { mergeProps: false, enableObjectSlots: false },
    ],
    resolve("@babel/plugin-proposal-class-properties"),
    resolve("@babel/plugin-syntax-dynamic-import"),
    [
      resolve("@babel/plugin-transform-runtime"),
      {
        useESModules: modules === false,
      },
    ],
  ];
  return {
    presets: [
      [
        resolve("@babel/preset-env"),
        {
          modules,
          // targets: {
          //   browsers: ["last 2 versions", "Firefox ESR", "> 1%", "not ie 11"],
          // },
        },
      ],
    ],
    plugins,
    // env: {
    //     test: {
    //         plugins: [
    //             resolve('babel-plugin-istanbul')
    //         ]
    //     }
    // }
  };
};
