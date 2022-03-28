const path = require("path");
const fs = require("fs");
const merge = require("deepmerge");

function withFrameworkConfig(defaultConfig = {}) {
  //   const frameworkNextConfig = require(path.join("../", "config"));
  // just in case
  const frameworkNextConfig = {};
  const config = merge(defaultConfig, frameworkNextConfig);

  const tsPath = path.join(process.cwd(), "tsconfig.json");
  const tsConfig = require(tsPath);

  //   tsConfig.compilerOptions.path["@framework/*"] = [`framework/*`];

  fs.writeFileSync(tsPath, JSON.stringify(tsConfig, null, 2));

  return config;
}

module.exports = { withFrameworkConfig };
