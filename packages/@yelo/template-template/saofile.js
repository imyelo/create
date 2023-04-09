module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'Template name',
        default: this.outFolder,
      },
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**',
    },
  ],
  async completed() {
    await this.npmInstall()
    this.showProjectTips()
  },
}
