const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: { //起一个服务器
    open: true, //自动打开浏览器
    contentBase: './bundle', //在哪起服务器
  },
  // 入口
  entry: './src/index.js',
  //plugins配置
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }), //在打包之后生成html文件
    new CleanWebpackPlugin() //在打包之前删除output定义的路径文件夹(bundle文件夹)
  ],
  //loader配置
  module: {
    rules: [
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