import '@/styles/index.styl'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export default (
  {
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData, // site metadata
  }) => {


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
