import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type Options = {
  mode: 'production' | 'development'
}

export default (options: Options) => {
  const prod = options.mode === 'production';
  return {
    mode: options.mode,
    entry: './src/index.tsx',
    output: {
      path: __dirname + '/dist/',
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              // plugins: [
              //   '@babel/plugin-transform-runtime',
              // ],
            },
          },
        },
        {
          test: /\.(sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new MiniCssExtractPlugin(),
    ],
    devtool: prod ? undefined : 'source-map',
  };
};