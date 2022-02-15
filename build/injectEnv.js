const prefixRE = /^VUE_APP_/

const injectEnv = (raw = false) => {
  require('dotenv').config({ path: '.env' })

  const env = {}

  Object.keys(process.env).forEach(key => {
    if (prefixRE.test(key) || key === 'NODE_ENV') {
      env[key] = process.env[key]
    }
  })

  env.BASE_URL = process.env.PUBLIC_PATH

  if (raw) {
    return env
  }
  for (const key in env) {
    env[key] = JSON.stringify(env[key])
  }
  const res = {
    'process.env': env
  }
  return res
}

module.exports = injectEnv