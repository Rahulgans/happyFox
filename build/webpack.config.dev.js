

var path = require('path');

var webpack = require('webpack');

var VueLoaderPlugin  = require('vue-loader/lib/plugin'); // for vue single file components

const HtmlWebpackPlugin = require('html-webpack-plugin'); // for hot reloading

module.exports = {

  mode: 'development',

  entry: './src/app.js',

  output: {

  	filename: 'bundle.js',

  	publicPath: '/'
  
  },

  // devServer: {
   
  //   hot: false,
    
  //   contentBase: path.resolve(__dirname, '/'),

  //   compress: true,
    
  //   port: 8080,
    
  //   open: true,

  //   publicPath: '/',
    
  //   overlay: { warnings: false, errors: true },
    
  //   quiet: true,
    
  //   watchOptions: {
    
  //     poll: true
    
  //   },

  //   historyApiFallback: true
  
  // },

    
  module: {

    rules: [

      {
        test: /\.vue$/,

        use: 'vue-loader'

      },

      { // loading after vue-loader

			  test: /\.js$/,
			  
			  use: 'babel-loader'
			
			},

      {
        test: /\.css$/,

        use: [

          'vue-style-loader', 'css-loader'

        ]

      }

    ]

  },

  resolve: {
    
    alias: {
      
      'vue$': 'vue/dist/vue.esm.js' // Vue's runtime + compile build for template strings
    
    }
  
  },

  plugins: [

  	new VueLoaderPlugin(),

  	new HtmlWebpackPlugin({

  		filename: 'index.html',

  		template: 'index.html'

  	})

  ]

}