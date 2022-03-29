const path = require('path')
const dotenv = require('dotenv')
const { expand: dotenvExpand } = require('dotenv-expand')

const prefixRE = /^VUE_APP_/

const load = envPath => {
  try {
    const env = dotenv.config({ path: envPath, debug: process.env.DEBUG })
    dotenvExpand(env)
    console.log(envPath, env)
  } catch (err) {
    if (err.toString().indexOf('ENOENT') < 0) {
      console.error(err)
    }
  }
}

const injectEnv = (raw = false) => {

  
  const basePath = path.resolve(process.cwd(), `.env`)
  const [,mode] = [...process.argv].reverse()[1].match(/--mode=(\w+)/)
  
  load(basePath)
  
  if(mode){
    const envPath = path.resolve(process.cwd(), `.env${mode ? `.${mode}` : ``}`)
    load(envPath)
  }

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