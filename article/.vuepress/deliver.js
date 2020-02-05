const path = require('path')
const fs = require('fs-extra')

const distPath = path.join(__dirname, 'dist')
const docsPath = path.join(__dirname, '../../docs')

function deliver() {
  const existDist = fs.existsSync(distPath)

  if(!existDist) {
    console.log('The dist dose not exist')
    return
  }

  fs.moveSync(distPath, docsPath, {overwrite: true})
  console.log(`Delivery completed from: ${distPath} to: ${existDist}`)

}


deliver()
