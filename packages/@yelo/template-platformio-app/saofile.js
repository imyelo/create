const { camelCase, upperFirst } = require('lodash')

const pascalCase = str => upperFirst(camelCase(str))

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'Project name',
        default: this.outFolder,
      },
    ]
  },
  templateData() {
    return {
      pascalName: pascalCase(this.answers.name),
    }
  },
  actions: [
    {
      type: 'add',
      files: '**',
    },
    {
      type: 'move',
      patterns: {
        _vscode: '.vscode',
        '_clang-format': '.clang-format',
        _editorconfig: '.editorconfig',
        _gitignore: '.gitignore',
      },
    },
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  },
}
