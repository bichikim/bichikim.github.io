import '@/styles/index.styl'
import '@/styles/quasar.styl'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import QuasarCommon from 'quasar/src/index.common'
import 'quasar/dist/quasar.ie.polyfills'

import iconSet from 'quasar/icon-set/ionicons-v4'

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
    all: true,
    iconSet,
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
