const { camelCase, upperFirst } = require('lodash')

const pascalCase = str => upperFirst(camelCase(str))

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'Library name',
        default: this.outFolder,
      },
      {
        name: 'github',
        message: 'github repository (format: user/repo)',
      },
    ]
  },
  templateData() {
    return {
      pascalName: pascalCase(this.answers.name),
    }
  },
  actions() {
    return [
      {
        type: 'add',
        files: '**',
      },
      {
        type: 'move',
        patterns: {
          '_clang-format': '.clang-format',
          _editorconfig: '.editorconfig',
          _gitignore: '.gitignore',
          'src/HelloWorld.cpp': `src/${pascalCase(this.answers.name)}.cpp`,
          'include/HelloWorld.h': `include/${pascalCase(this.answers.name)}.h`,
        },
      },
    ]
  },
  async completed() {
    this.gitInit()
    this.showProjectTips()
  },
}
