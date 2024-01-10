import spawn from 'cross-spawn'

// forked from https://github.com/saojs/sao/blob/ca204d1/src/install-packages.ts#L68
export const installDependencies = async (npmClient: string, cwd: string) => {
  spawn.sync(npmClient, ['install', '--ci'], {
    stdio: 'inherit',
    cwd,
    env: {
      FORCE_COLOR: 'true',
      /* eslint-disable camelcase */
      npm_config_color: 'always',
      npm_config_progress: 'true',
      /* eslint-enable camelcase */
      ...process.env,
    },
  })
}
