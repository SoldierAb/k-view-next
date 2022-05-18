const fs = require("fs")
const path = require("path")
const typescript = require("rollup-plugin-typescript2")
const vue = require("rollup-plugin-vue")
const less = require("rollup-plugin-less")
// const { terser } = require('rollup-plugin-terser');
const nodeResolve = require("@rollup/plugin-node-resolve").nodeResolve

const inputDir = path.resolve(__dirname, '../components')
const outputDir = path.resolve(__dirname, '../lib')


const getConf = ({
    input,
    fileOutput,
    lessOutput,
}, shouldTerser) => {
    const conf = {
        input,
        plugins: [
            nodeResolve({
                skip: ['vue']
            }),
            vue(),
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: false, // 声明文件由 vue-tsc 生成 https://github.com/johnsoncodehk/volar/tree/master/packages/vue-tsc#using
                    },
                    exclude: ["node_modules/**"],
                },
                abortOnError: false,
                clean: true,
            }),
        ],
        external: ['vue'],
        output: {
            format: "es",
            file: fileOutput,
            globals: {
                vue: "Vue"
            }
        },
    }
    if (lessOutput) {
        conf.plugins.push(less({ output: lessOutput }))
    }
    if(shouldTerser) {
        conf.plugins.push(terser())
    }
    return conf
}

// 组件
const config = fs.readdirSync(inputDir)
    .filter(name => {
        return ![
            ".DS_Store",
            "_constants",
            "_hooks",
            "index.ts",
            "components.ts",
            "shims-vue.d.ts",
            "style.ts",
            "theme",
            "config-provider"
        ].includes(name)
    })
    .map(name => {
        return getConf({
            input: `${inputDir}/${name}/index.ts`,
            fileOutput: `${outputDir}/${name}/index.js`,
            lessOutput: `${outputDir}/${name}/style.css`,
        })
    })
// 多语言配置
const langsFolder = path.resolve(path.join(inputDir, '_locale'))
const langsCompilers = fs.readdirSync(langsFolder)
    .filter(name => {
        return ![
            "index.ts",
        ].includes(name)
    })
    .map(name => {
        return getConf({
            input: `${langsFolder}/${name}`,
            fileOutput: `${outputDir}/_locale/${name.replace(/\.ts/,'.js')}`,
        })
    })
  
config.push(...langsCompilers)
    
// 顶层配置注入组件
config.push(getConf({
    input: `${inputDir}/config-provider/index.tsx`,
    fileOutput: `${outputDir}/config-provider/index.js`,
}))

// 组件入口文件
config.push(getConf({
    input: `${inputDir}/index.ts`,
    lessOutput: `${outputDir}/style.css`,
    fileOutput: `${outputDir}/index.js`,
}))


module.exports = config