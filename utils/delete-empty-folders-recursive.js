import fs from 'fs'
import path from 'path'

export const deleteEmptyFoldersRecursive = (dir) => {
  if (!fs.statSync(dir).isDirectory()) return
  let contents = fs.readdirSync(dir)
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file)
    deleteEmptyFoldersRecursive(fullPath)
  })
  contents = fs.readdirSync(dir)
  if (!contents.length) fs.rmdirSync(dir)
}
