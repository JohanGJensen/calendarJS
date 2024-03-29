const { build } = require('esbuild');
// const { dependencies } = require('./package.json');
// const { Generator } = require('npm-dts');

// new Generator({
//   entry: './src/index.ts',
//   output: 'dist/index.d.ts',
//   tsc: '--project tsconfig.json --isolatedModules true',
// }).generate();

const sharedConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
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
  outfile: 'dist/index.js',
  platform: 'neutral', // for ESM
  format: 'esm',
});
