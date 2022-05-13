const gulp = require("gulp")
const rollup = require('rollup');
const rollupConfig = require('./build/rollup.config');

gulp.task('compile',async function (done) {
  const bundleTaskFunc = async ({input, plugins, output}) => {
    const inputOption = {
      input,
      plugins
    }
    const bundleRes = await rollup.rollup(inputOption)
    const res = await bundleRes.write(output)
    return res
  }

  const bundleTaskFuncMap = rollupConfig.map(outputConfig => bundleTaskFunc(outputConfig))
  await Promise.all(bundleTaskFuncMap)

  done()
})
