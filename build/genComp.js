const path = require('path')
const fsEx = require('fs-extra')
const inquirer = require('inquirer')
const compJson = require('../components.json')

const allComps = Object.keys(compJson).reduce((prev, compType) => {
  const { children = {} } = compJson[compType]
  Object.keys(children).forEach(compName => {
    prev[compName] = {
      label: children[compName].label,
      compType
    }
  })
  return prev
}, {})

function readFile (filePath) {
  return new Promise(function (resolve, reject) {
    fsEx.readFile(filePath, 'utf8', function (error, data) {
      if (error) return reject(error)
      resolve(data)
    })
  })
}

// 写文件
async function writeFile (filePath, content) {
  try {
    const res = await fsEx.outputFile(filePath, content)
    return res
  } catch (error) {
    console.error('write file error:', error)
  }
}

function tplReplace (str, obj) {
  return str.replace(/%(\w+)%/g, (...args) => {
    const [, key] = args
    return obj[key] || '-'
  })
}

function transCamel (_str, symbol = '-') {
  const str = _str[0].toLowerCase() + _str.substr(1)

  return str.replace(/([A-Z])/g, function ($1) {
    return ''.concat(symbol).concat($1.toLowerCase())
  })
}

class GenComp {
  constructor (cwd) {
    this.cwd = cwd || process.cwd()
  }

  async gen () {
    // ESM in commonjs
    const ora = await (await import('ora')).default

    const spin = ora()

    try {
      // 1. 选择组件类型
      const res = await inquirer.prompt([
        {
          type: 'list',
          message: '请选择组件类型',
          name: 'compType',
          choices: Object.keys(compJson).map(cType => {
            const { label } = compJson[cType]
            return {
              name: label,
              value: cType
            }
          })
        },
        {
          type: 'input',
          message: '请输入组件名[英文, eg: Button]',
          name: 'compName',
          validate: function (val) {
            if (!val || /^[A-Z]{1}[a-z]+[A-Za-z]+$/.test(val) !== true) {
              return '请参照示例输入英文组件名'
            }
            if (Object.prototype.hasOwnProperty.call(allComps, val)) {
              return '组件已存在，请重新输入'
            }
            return true
          }
        },
        {
          type: 'input',
          message: '请输入组件名[中文, eg: 按钮]',
          name: 'labelName',
          validate: function (val) {
            if (!val || /[\u4e00-\u9fa5]/.test(val) !== true) {
              return '请输入组件中文名'
            }
            return true
          }
        }
      ])

      spin.start('\n组件创建中')

      const { compType, compName, labelName } = res
      const dashName = transCamel(compName)
      const lowCompName = compName[0].toLowerCase() + compName.substr(1)
      const { cwd } = this

      const tplObj = {
        CompName: compName,
        DashName: dashName,
        LabelName: labelName,
        lowCompName
      }
      // 2. 读取文件内容
      const tplFiles = [
          'basic',
          'comp',
          'index.less',
          'style.index.ts',
          'index.ts',
          'README',
          'spec',
          'types'
      ].map(item=>readFile(path.resolve(__dirname, `../static/comp/${item}.tpl`)))

      const [demoTpl, compTpl, lessTpl, styleIndexTpl, indexTpl, readmeTpl, specTpl, typesTpl] = await Promise.all(tplFiles)

      // 3. 组件输出文件
      const parseArr = [
        {
          dest: 'demos/basic.vue',
          content: tplReplace(demoTpl, tplObj)
        },
        {
          dest: `${compName}.tsx`,
          content: tplReplace(compTpl, tplObj)
        },
        {
          dest: `style/index.less`,
          content: tplReplace(lessTpl, tplObj)
        },
        {
          dest: `style/index.ts`,
          content: tplReplace(styleIndexTpl, tplObj)
        },
        {
            dest: `index.ts`,
            content: tplReplace(indexTpl, tplObj)
        },
        {
            dest: `${lowCompName}Types.ts`,
            content: tplReplace(typesTpl, tplObj)
        },
        {
          dest: 'README.zh-CN.md',
          content: tplReplace(readmeTpl, tplObj)
        },
        {
          dest: `__test__/${compName}.spec.js`,
          content: tplReplace(specTpl, tplObj)
        }
      ]

      
      // 3.1 创建组件文件
      await Promise.all(parseArr.map(item =>
        writeFile(`${cwd}/components/${dashName}/${item.dest}`, item.content)
      ))

      // components.ts & style.ts
      const [cpTpl, stTpl] =  await Promise.all([
        readFile(path.resolve(__dirname, `../components/components.ts`)),
        readFile(path.resolve(__dirname, `../components/style.ts`)),
      ]) 

      await Promise.all([
        writeFile(`${cwd}/components/components.ts`, `${cpTpl}\nexport { default as ${compName} } from './${dashName}'`),
        writeFile(`${cwd}/components/style.ts`, `${stTpl}\nimport './${dashName}/style'`),
      ])

      // 3.2 写入component.json
      compJson[compType].children[dashName] = {
        label: labelName
      }
      writeFile(`${cwd}/components.json`, JSON.stringify(compJson, null, 2))
      spin.succeed('创建成功')
    } catch (error) {
      spin.fail(`\n创建异常：${error}`)
    }
    spin.stop()
  }
}

// 执行
const genInstance = new GenComp()
genInstance.gen()
