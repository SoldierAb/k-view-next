const fs = require('fs')
const ts = require("gulp-typescript")
const gulp = require("gulp")
const gulpBabel = require("gulp-babel")
const less =  require('gulp-less')
const filter = require('gulp-filter')
const autoprefixer = require('gulp-autoprefixer')
const merge2 = require('merge2')
const rimraf = require("rimraf")
const through2 = require("through2")

const { dirname } = require('path')

const compileLess = require('./build/compileLess')

const getBabelConf = require("./build/getBabelConf")

const getTsConf = require("./build/getTsConf")

const { getProjectPath } = require("./build/utils")

const tsConf = getTsConf()

const cwd = process.cwd()
const libDir = getProjectPath("lib")
const esDir = getProjectPath("es")
const tsDefaultReporter = ts.reporter.defaultReporter()

const RESOURCES_MAP = {
  dest:{
    lib: libDir,
    es: esDir
  },
  componentsScripts: [
    'components/**/*.js',
    'components/**/*.jsx',
    'components/**/*.tsx',
    'components/**/*.ts',
    '!components/*/__tests__/*'
  ],
  styles: [
    'components/**/*.less',
  ]
}

function compileScripts (format, dest){
  // esm 资源构建，则设置  modules
  const modules = format === 'es'? false : undefined
  const babelConf = getBabelConf(modules)

  // 缓存清理
  babelConf.babelrc = false
  delete babelConf.cacheDirectory
  
  return gulp.src(RESOURCES_MAP.componentsScripts)
    .pipe(gulpBabel(babelConf))
    .pipe(through2.obj(function (file, encode, next){
      
      this.push(file.clone())
      
      // [comp]/style/css.js 文件生成, 提供以兼容使用方非less样式处理器（sass, stylus等）
      if (file.path.match(/\/style\/index\.(js|ts|tsx)$/)) {
        const content = file.contents.toString(encode);
        file.contents = Buffer.from(
          content
            .replace(/\/style\/?'/g, "/style/css'")
            .replace(/\/style\/?"/g, '/style/css"')
            .replace(/\.less/g, '.css'),
        );
        file.path = file.path.replace(/index\.(js|ts|tsx)$/, 'css.js');
        this.push(file);
      }

      next()
    }))
    .pipe(gulp.dest(dest))
}

function generateDts () {
  // 仅生成声明文件
  tsConf.emitDeclarationOnly = true
  return gulp.src(RESOURCES_MAP.componentsScripts).pipe(ts(tsConf)).pipe(gulp.dest(RESOURCES_MAP.dest.es)).pipe(gulp.dest(RESOURCES_MAP.dest.lib))
}

function copyLess (){
  return gulp.src(RESOURCES_MAP.styles).pipe(gulp.dest(RESOURCES_MAP.dest.es)).pipe(gulp.dest(RESOURCES_MAP.dest.lib))
}

function compileStyles (){
  return gulp.src(RESOURCES_MAP.styles)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(filter(function (file){ // 过滤空文件
      return file.stat && file.contents.length
    }))
    .pipe(gulp.dest(RESOURCES_MAP.dest.es)).pipe(gulp.dest(RESOURCES_MAP.dest.lib))
}

function compile(modules) {
  const modulesDir = modules !== false ? libDir : esDir
  // rimraf.sync(modulesDir);
  // assets
  // less
  const lessSources = [
    'components/**/*.less',
  ]
  const lessRes = gulp
    .src(lessSources)
    .pipe(
      through2.obj(function (file, encoding, next) {
        // less clone
        this.push(file.clone())
        if (
          file.path.match(/\/style\/index\.less$/)
          ) {
          // less to css
          compileLess(file.path).then(css => {
            file.contents = Buffer.from(css)
            file.path = file.path.replace(/\.less$/, '.css')
            this.push(file)
            next()
          }).catch(e => {
            console.error('less file compile error: ', e)
          })
        } else {
          next()
        }
      }),
    )
    .pipe(gulp.dest(modulesDir))
  // ts
  let error = 0
  const sources = [
    'components/**/*.js',
    'components/**/*.jsx',
    'components/**/*.tsx',
    'components/**/*.ts',
    '!components/*/__tests__/*'
  ]
  const tsRes = gulp.src(sources).pipe(
    ts(tsConf, {
      error(e) {
        tsDefaultReporter.error(e)
        error = 1
      },
      finish: tsDefaultReporter.finish,
    }),
  )
  // .pipe(gulp.dest(modulesDir))


  function check() {
    if (error && !process.argv['ignore-error']) {
      process.exit(1)
    }
  }

  tsRes.on('finish', check)
  tsRes.on('end', check)

  console.log('js--> ', tsRes.js)
  console.log('jsx--** ', tsRes.jsx)
  console.log(Object.keys(tsRes))
  const tsFileStream = babelify(tsRes.js, modules) // ts 文件
  const tsd = tsRes.dts.pipe(gulp.dest(modulesDir)) // d.ts声明文件
  return merge2([
    // lessRes, tsFileStream, tsd
  ])
}

gulp.task('generate-dts', done => {
  generateDts().on('finish', done)
})

gulp.task('compile-styles', gulp.parallel(copyLess, compileStyles))

gulp.task('compile-with-es', done => {
  console.log('start compile at ', startTime)
  console.log('[Parallel] Compile to es...')
  // compile(false).on('finish', done)
  compileScripts('es', RESOURCES_MAP.dest.es).on('finish', done)
})

gulp.task('compile-with-lib', done => {
  console.log('[Parallel] Compile to js...')
  // compile().on('finish', done)
  compileScripts('lib', RESOURCES_MAP.dest.lib).on('finish', done)
})

gulp.task('clean-lib-es', done => {
  rimraf.sync(libDir)
  rimraf.sync(esDir)
  done()
})

let startTime = new Date()
gulp.task(
  'compile',
  gulp.series('clean-lib-es', gulp.parallel('compile-with-es', 'compile-with-lib', 'compile-styles', 'generate-dts'), done => {
    console.log('end compile at ', new Date())
    console.log('compile time ', (new Date() - startTime) / 1000, 's')
    done()
  }),
)

gulp.task(
  'compile-watch',
  done => {
    gulp.watch(['components/**/*'], gulp.parallel('compile'))
    done()
  },
)

