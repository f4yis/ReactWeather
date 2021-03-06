module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias:{
      Main : 'app/components/Main.jsx',
      Nav :'app/components/Nav.jsx',
      Weather :'app/components/Weather/index.jsx',
      About :'app/components/About.jsx',
      Example :'app/components/Example.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2017']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_componets)/
      }
    ]
  }
};
