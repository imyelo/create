import { resolve } from 'node:path'
import gitly from 'gitly'
import { rimraf } from 'rimraf'
import { paths } from './paths.js'

const GITHUB_REPO = 'imyelo/create'

export const fetch = async (name: string) => {
  const extractedPath = resolve(paths.cache, './extracted/')
  await rimraf(extractedPath)
  await gitly(GITHUB_REPO, extractedPath, {
    temp: resolve(paths.cache, './gitly'),
  })
  return resolve(extractedPath, `./packages/@yelo/template-${name}`)
}
