const fs = require('fs');
const ts = require("gulp-typescript");
const gulp = require("gulp");
const gulpBabel = require("gulp-babel");
const stripCode = require("gulp-strip-code");
const merge2 = require('merge2');
const rimraf = require("rimraf");
const through2 = require("through2")

const { dirname } = require('path');

const compileLess = require('./build/compileLess')

const getBabelConf = require("./build/getBabelConf");

const getTsConf = require("./build/getTsConf");

const { getProjectPath } = require("./build/utils");

const tsConf = getTsConf();

const cwd = process.cwd();
const libDir = getProjectPath("lib");
const esDir = getProjectPath("es");
const tsDefaultReporter = ts.reporter.defaultReporter();

const tsFiles = ['**/*.ts', '**/*.tsx', '!node_modules/**/*.*', 'typings/**/*.d.ts'];

function compileTs(stream) {
  return stream
    .pipe(ts(tsConfig))
    .js.pipe(
      through2.obj(function (file, encoding, next) {
        // console.log(file.path, file.base);
        file.path = file.path.replace(/\.[jt]sx$/, '.js');
        this.push(file);
        next();
      }),
    )
    .pipe(gulp.dest(process.cwd()));
}

gulp.task('tsc', () =>
  compileTs(
    gulp.src(tsFiles, {
      base: cwd,
    }),
  ),
);

function replacePath(path) {
  if (path.node.source && /\/lib\//.test(path.node.source.value)) {
    const esModule = path.node.source.value.replace('/lib/', '/es/');
    const esPath = dirname(getProjectPath('node_modules', esModule));
    if (fs.existsSync(esPath)) {
      path.node.source.value = esModule;
    }
  }
}

function replaceLib() {
  return {
    visitor: {
      ImportDeclaration: replacePath,
      ExportNamedDeclaration: replacePath,
    },
  };
}


function babelify(js, modules) {
  // 获取 babel 配置
  const babelConf = getBabelConf(modules);
  // 清除babel缓存文件夹属性
  babelConf.babelrc = false;
  delete babelConf.cacheDirectory;
  if (modules === false) {
    babelConf.plugins.push(replaceLib);
  }
  // 编译
  let stream = js.pipe(gulpBabel(babelConf));
  // .pipe()
  // if (modules === "es") {
  //   stream = stream.pipe(
  //     stripCode({
  //       start_comment: "@remove-on-es-build-begin",
  //       end_comment: "@remove-on-es-build-end",
  //     })
  //   );
  // }
  // 返回文件流
  const modulesDir = modules !== false ? libDir : esDir;
  return stream.pipe(gulp.dest(modulesDir));
}

function compile(modules) {
  const modulesDir = modules !== false ? libDir : esDir;
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
      })
    )
    .pipe(gulp.dest(modulesDir))
  // ts
  let error = 0;
  const sources = [
    'components/**/*.js',
    'components/**/*.jsx',
    'components/**/*.tsx',
    'components/**/*.ts',
  ];
  const tsRes = gulp.src(sources).pipe(
    ts(tsConf, {
      error(e) {
        tsDefaultReporter.error(e);
        error = 1;
      },
      finish: tsDefaultReporter.finish,
    })
  );
  function check() {
    if (error && !argv['ignore-error']) {
      process.exit(1);
    }
  }

  tsRes.on('finish', check);
  tsRes.on('end', check);
  const tsFileStream = babelify(tsRes.js, modules); // ts 文件
  const tsd = tsRes.dts.pipe(gulp.dest(modulesDir)); // d.ts声明文件
  return merge2([lessRes, tsFileStream, tsd]);
}


gulp.task('compile-with-es', done => {
  console.log('start compile at ', startTime);
  console.log('[Parallel] Compile to es...');
  compile(false).on('finish', done);
});

gulp.task('compile-with-lib', done => {
  console.log('[Parallel] Compile to js...');
  compile().on('finish', done);
});

gulp.task('clean-lib-es', done => {
  rimraf.sync(libDir);
  rimraf.sync(esDir);
  done()
})

let startTime = new Date();
gulp.task(
  'compile',
  gulp.series('clean-lib-es', gulp.parallel('compile-with-es', 'compile-with-lib'), done => {
    console.log('end compile at ', new Date());
    console.log('compile time ', (new Date() - startTime) / 1000, 's');
    done();
  }),
);

gulp.task(
  'compile-watch',
  done => {
    gulp.watch(['components/**/*'], gulp.parallel('compile-with-es', 'compile-with-lib'))
    done();
  }
)

