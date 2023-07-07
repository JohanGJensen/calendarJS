const { build } = require("esbuild");
const { dependencies } = require('./package.json');
const { Generator } = require('npm-dts');

new Generator({
  entry: 'index.ts',
  output: 'dist/index.d.ts',
}).generate();

const sharedConfig = {
  entryPoints: ["index.ts"],
  bundle: false,
  minify: false,
  // external: Object.keys(dependencies),
};

// build({
//   ...sharedConfig,
//   platform: 'node', // for CJS
//   outfile: "dist/index.js",
// });

build({
  ...sharedConfig,
  outfile: "dist/index.js",
  platform: 'neutral', // for ESM
  format: "esm",
});