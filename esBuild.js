import { build } from 'esbuild';

const buildConfig = {
  entryPoints: [
    'src/index.ts',
    'src/adapter/ton.ts',
    'src/adapter/solana.ts',
    'src/adapter/near.ts',
    'src/adapter/evm.ts'
  ],
  bundle: true,
  platform: 'node',
  target: 'es2020',
  outdir: 'build',
  format: 'esm',
  splitting: false,
  sourcemap: true,
  entryNames: '[dir]/[name]',
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  },
  external: [],
};

build(buildConfig)
  .then(() => {
    console.log('Build completed successfully.');
  })
  .catch(() => process.exit(1));