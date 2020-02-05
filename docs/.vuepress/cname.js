/**
 * move dist to root
 * index.html should be root
 * @type {path.PlatformPath | path}
 */

const path = require('path')
const fs = require('fs-extra')
const distCnamePath = path.join(__dirname, 'dist/CNAME')
const distPath = path.join(__dirname, 'dist')

function cname() {
  const existDist = fs.existsSync(distPath)

  if(!existDist) {
    console.log('The dist dose not exist')
    return
  }

  fs.writeFileSync(distCnamePath, 'bichi.kim')
}


cname()
