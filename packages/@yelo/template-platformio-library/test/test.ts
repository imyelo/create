const { resolve } = require('node:path')
const test = require('ava')
const sao = require('sao')

const generator = resolve(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mock(
    { generator },
    {
      name: 'foobar',
      github: 'imyelo/arduino-foobar',
    }
  )
  t.snapshot(stream.fileList, 'generated files')

  for (const file of stream.fileList) {
    const content = await stream.readFile(file)
    t.snapshot(content, `content of ${file}`)
  }
})
