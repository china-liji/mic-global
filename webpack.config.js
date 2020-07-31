const path = require('path');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  if (!isProd) {
    this.devtool = 'source-map';
  }

  this.entry = path.resolve(__dirname, './src/index.ts');

  this.module = {
    rules: [{
      test: /\.(?:t|j)sx?$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        compilerOptions: {
          declaration: true
        }
      },
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader?url=false']
    },]
  };

  this.output = {
    filename: 'build/dist/index.min.js',
    path: __dirname,
    publicPath: '/',
  };

  this.resolve = {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  };

  return this;
};