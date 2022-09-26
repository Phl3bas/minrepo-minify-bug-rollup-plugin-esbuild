import esbuild from 'rollup-plugin-esbuild'

export default {
    input: 'src/index.ts',
    output: {
      file: 'bundle.js',
      format: 'cjs'
    },
    plugins: [
        esbuild({
          exclude: /node_modules/, // default
          minify: true ,
          target: 'es2015', // default, or 'es20XX', 'esnext'
          loaders: {
            // Add .json files support
            // require @rollup/plugin-commonjs
            '.json': 'json',
            // Enable JSX in .js files too
            '.js': 'jsx',

          },
        }),
      ],
  };