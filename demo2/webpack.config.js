const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: { //起一个服务器
    open: true, //自动打开浏览器
    contentBase: './bundle', //在哪起服务器
    hot: true, //热更新
    hotOnly: true //即使hot未生效，浏览器也不自动刷新 不配置的话当webpack发生问题时，页面会刷新。
  },
  // 入口
  entry: './src/index.js',
  //plugins配置
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }), //在打包之后生成html文件
    new CleanWebpackPlugin(), //在打包之前删除output定义的路径文件夹(bundle文件夹)
    new webpack.HotModuleReplacementPlugin() //开启热更新
  ],
  //loader配置
  module: {
    rules: [
      {
        //babel
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: [['@babel/preset-env', {
          //     // 业务代码配置
          //     targets: {
          //       //目标浏览器 自动判断是否需要polyfill
          //       chrome: '67',
          //       ie: '8'
          //     },
          //     useBuiltIns: 'usage', //polyfill按需填充

          //     // 非业务代码配置（其实这个配置也可以用在业务配置代码上）
          //     'plugins': [[
          //       '@babel/plugin-transform-runtime', {
          //         'corejs': 2,
          //         'helper': true,
          //         'regenerator': true,
          //         'useESModules': false
          //       }
          //     ]]
          //   }]]
          // }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif)$/, //所有图片
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]', //占位符
            outputPath: 'images/', //该loader输出路径
            limit: 20480 // 20kb为界
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          'less-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'font/', //该loader输出路径
            name: '[name].[ext]' //占位符
          }
        }
      },
    ]
  },
  // 出口
  output: {
    // 名字
    filename: 'bundle.js',
    // 路径（需要写绝对路径）
    path: path.resolve(__dirname, 'bundle')
  }
}