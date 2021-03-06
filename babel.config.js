/* eslint array-bracket-newline: [ "error", { multiline: true, minItems: 5 } ] */
/* eslint array-element-newline: [ "error", { multiline: true, minItems: 5 } ] */
module.exports = {
  presets: [ [ "@babel/preset-env", { loose: true } ], [ "@babel/preset-react", { loose: true } ] ],
  plugins: [
    [ "@babel/plugin-syntax-dynamic-import", { loose: true } ],
    [ "@babel/plugin-proposal-do-expressions", { loose: true } ],
    [ "@babel/plugin-proposal-function-bind", { loose: true } ],
    [ "@babel/plugin-proposal-export-default-from", { loose: true } ],
    [ "@babel/plugin-proposal-export-namespace-from", { loose: true } ],
    [ "@babel/plugin-transform-async-to-generator", { loose: true } ],
    [ "@babel/plugin-proposal-decorators", { loose: true, legacy: true } ],
    [ "@babel/plugin-proposal-class-properties", { loose: true } ],
    [ "@babel/plugin-proposal-pipeline-operator", { proposal: "smart" } ],
    [ "@babel/plugin-proposal-optional-chaining", { loose: true } ],
    [ "@babel/plugin-transform-runtime", { loose: true, regenerator: true } ],
    [ "@babel/plugin-transform-flow-strip-types", { loose: true } ],
    [ "import", { loose: true, libraryName: "antd", libraryDirectory: "es", style: true }, "antd" ],
  ]
};
