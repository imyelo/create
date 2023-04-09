#!/usr/bin/env node

import assert from 'node:assert'
import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import meow from 'meow'
import sao from 'sao'

const require = createRequire(import.meta.url)

const printChoices = (values: string[]) => values.join(' | ')

const TEMPLATE_CHOICES = ['app', 'template']
const NPM_CLIENT_CHOICES = ['npm', 'yarn', 'pnpm']

const cli = meow(
  `
  Usage
    $ yarn create @yelo

  Options
    --template <template> Template (${printChoices(TEMPLATE_CHOICES)})
    --npm-client <client> NPM client for packages installing (${printChoices(NPM_CLIENT_CHOICES)})})
    --registry <url> NPM registry
`,
  {
    importMeta: import.meta,
    flags: {
      template: {
        type: 'string',
        default: 'app',
      },
      npmClient: {
        type: 'string',
      },
      registry: {
        type: 'string',
      },
    },
  }
)

assert(TEMPLATE_CHOICES.includes(cli.flags.template), 'Invalid template')
assert(!cli.flags.npmClient || NPM_CLIENT_CHOICES.includes(cli.flags.npmClient), 'Invalid npm client')

const { npmClient, registry } = cli.flags
const outDir = resolve(cli.input[0] || '.')
const generator = resolve(require.resolve(`@yelo/template-${cli.flags.template}/saofile.js`), '..')

const app = sao({ generator, outDir, npmClient, registry })

await app.run().catch(sao.handleError)
