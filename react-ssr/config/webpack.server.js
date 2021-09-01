const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    port: 8080,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },
};

const esLintPlugin = (isDev) => isDev ? [] : [ new ESLintPlugin({ extensions: ['tsx', 'ts', 'js'] }) ];

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    main: './src/server.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/server'),
    assetModuleFilename: 'assets/[name][ext]',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'null-loader',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'null-loader',
      },
      {
        test: /\.css$/i,
        use: 'null-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: 'null-loader'
      }
    ],
  },
  plugins: [
    ...esLintPlugin(development),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  ...devServer(development)
});
