import '@/styles/quasar.styl'
import '@/styles/index.styl'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/material-icons/material-icons.css'
import Quasar, {Platform} from 'quasar'
import enUs from 'quasar/lang/en-us'
// import ioniconsV4 from 'quasar/icon-set/ionicons-V4'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export default (
  {
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData, // site metadata
  }) => {

  Vue.use(Quasar, {
    lang: enUs,
    all: true,
    // iconSet: ioniconsV4,
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
