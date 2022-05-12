const nodeResolve = require("@rollup/plugin-node-resolve").nodeResolve
const typescript = require("rollup-plugin-typescript2")
const vue = require("rollup-plugin-vue")
const babel = require("@rollup/plugin-babel").default
const less = require("rollup-plugin-less")
// const { terser } = require('rollup-plugin-terser');

const getBabelConf = require('./getBabelConf')

const fs = require("fs")
const path = require("path")


const input = path.resolve(__dirname, '../components')
const output = path.resolve(__dirname, '../lib')


const config = fs.readdirSync(input)
    .filter(name => {
        return ![
            ".DS_Store",
            "_constants",
            "_hooks",
            "index.ts",
            "components.ts",
            "global.d.ts",
            "style.ts",
            "theme",
            "config-provider"
        ].includes(name)
    })
    .map(name => {
        return {
            input: `${input}/${name}/index.ts`,
            external: ['vue', 'lodash'],
            plugins: [
                nodeResolve(),
                vue({
                    exposeFilename: false,
      target: 'browser'
                }),
                less({
                    output: `${output}/${name}/style.css`
                }),
                typescript({
                    tsconfigOverride: {
                        useTsconfigDeclarationDir: false,
                        compilerOptions: {
                            allowJs: false,
                            declaration: false,
                        },
                        exclude: ["node_modules/**"],
                    },
                    abortOnError: false,
                    clean: true
                }),
                // terser(),
            ],
            output: {
                name: "index",
                format: "esm",
                file: `${output}/${name}/index.js`
            },
        }
    })


config.push({
    input: `${input}/index.ts`,
    external: ['vue', 'lodash'],
    plugins: [
        nodeResolve(),
        vue(),
        less({
            output: `${output}/style.css`
        }),
        typescript({
            tsconfigOverride: {
                useTsconfigDeclarationDir: false,
                compilerOptions: {
                    allowJs: false,
                    declaration: true,
                },
                exclude: ["node_modules"],
            },
            abortOnError: false,
            clean: true
        })
    ],
    output: {
        name: "index",
        format: "esm",
        file: `${output}/index.js`
    },
})


module.exports = config