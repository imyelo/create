#!/usr/bin/env node

import assert from 'node:assert'
import { resolve } from 'node:path'
import meow from 'meow'
import sao from 'sao'
import { fetch } from './utils/fetch.js'
import { printChoices } from './utils/print.js'

const DEFAULT_NPM_CLIENT = 'yarn'

const TEMPLATE_CHOICES = ['nodejs', 'template', 'platformio-library']
const NPM_CLIENT_CHOICES = ['npm', 'yarn', 'pnpm']

const cli = meow(
  `
  Usage
    $ yarn create @yelo

  Options
    --template <template> Template (${printChoices(TEMPLATE_CHOICES)})
    --npm-client <client> NPM client for packages installing (${printChoices(
      NPM_CLIENT_CHOICES
    )}, default: ${DEFAULT_NPM_CLIENT})
    --registry <url> NPM registry
`,
  {
    importMeta: import.meta,
    flags: {
      template: {
        type: 'string',
        default: 'nodejs',
      },
      npmClient: {
        type: 'string',
        default: DEFAULT_NPM_CLIENT,
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
const generator = await fetch(cli.flags.template)
const app = sao({ generator, outDir, npmClient, registry })

await app.run().catch(sao.handleError)
