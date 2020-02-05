/**
 * move dist to root
 * index.html should be root
 * @type {path.PlatformPath | path}
 */

const path = require('path')
const fs = require('fs-extra')
const distPath = path.join(__dirname, 'dist')
const distAssetsPath = path.join(__dirname, 'dist/assets')
const indexPath = path.join(__dirname, 'dist/index.html')
const errorPath = path.join(__dirname, 'dist/404.html')
const rootIndexPath = path.join(__dirname, '../../index.html')
const rootErrorPath = path.join(__dirname, '../../404.html')
const assetPath = path.join(__dirname, '../../assets')

function deliver() {
  const existDist = fs.existsSync(distPath)

  if(!existDist) {
    console.log('The dist dose not exist')
    return
  }

  fs.moveSync(distAssetsPath, assetPath, {overwrite: true})
  fs.moveSync(indexPath, rootErrorPath, {overwrite: true})
  fs.moveSync(errorPath, rootIndexPath, {overwrite: true})
  fs.removeSync(distPath)
}


deliver()
