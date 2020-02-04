const path = require("path")
module.exports = {
  head: [
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons',
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
  ],
  chainWebpack: (config) => {

    // pug
    config.module.rule('pug').
      test(/\.pug$/)

      // this applies to <template lang="pug"> in Vue components
      .oneOf('vue-loader').
      resourceQuery(/^\?vue/).
      use('pug-plain').
      loader('pug-plain-loader').
      end().
      end()

      // this applies to pug imports inside JavaScript, i.e. .pug files
      .oneOf('raw-pug-files').
      use('pug-raw').
      loader('raw-loader').
      end().
      use('pug-plain').
      loader('pug-plain-loader').
      end().
      end()
    // typescript
    config.resolve.extensions.add('.ts').add('.tsx')
    config.module.rule('ts')
      .test(/\.tsx?$/)
      .use('babel')
      .loader('babel-loader')
      .options({
      babelrc: false,
      configFile: false,
      presets: [
        '@vue/babel-preset-jsx'
      ],
    }).end()
      .use('ts')
      .loader('ts-loader')
      .options({
      configFile: path.resolve(__dirname, '../../tsconfig.json'),
      transpileOnly: true,
      appendTsxSuffixTo: [/\.vue$/],
    }).end().end()
  },
}

