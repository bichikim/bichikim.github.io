import '@/styles/index.styl'
import '@/styles/quasar.styl'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import QuasarCommon from 'quasar/src/index.common'
import 'quasar/dist/quasar.ie.polyfills'
import enUs from 'quasar/lang/en-us'
import iconSet from 'quasar/icon-set/ionicons-v4'
import * as components from 'quasar/src/components'
import * as directives from 'quasar/src/directives'
import * as plugins from 'quasar/src/plugins'


export default (
  {
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData, // site metadata
  }) => {

  // fix $q undefined
  options.$q = QuasarCommon.Quasar.install.$q

  Vue.use(QuasarCommon.Quasar, {
    components,
    directives,
    plugins,
    lang: enUs,
    all: true,
    iconSet,
    config: {
    },
  })

  const requireComponent = require.context(
    '@/components', false, /[\w-].vue$/
  )


  requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)
// Get PascalCase name of component
    const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
    )
// Register component globally
    Vue.component(componentName, componentConfig.default || componentConfig)
  })

}
