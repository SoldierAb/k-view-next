const md = require('./md')

const separateCode = (str) => {
  const res = str.match(/<code([\s\S]+)src=\"([\s\S]+)\"/)
  return res && res[2] ? res[2].trim() : ''
}

module.exports = function (source) {
  const output = []
  let startIndex = 0
  let compInstancesString = ''
  let compStylesString = ''
  let compScriptHeaderString = ''

  // 文档demo解析
  let id = 1 // demo 的 id
  const content = md.render(source, { resourcePath: this.resourcePath })

  const startTag = '<!--demo:'
  const endTag = ':demo-->'
  const startTagLen = startTag.length
  const endTagLen = endTag.length

  let compStartIndex = content.indexOf(startTag)
  let compEndIndex = content.indexOf(endTag, compStartIndex + startTagLen)

  // md文件解析
  while (compStartIndex !== -1 && compEndIndex !== -1) { // 存在组件区块

    output.push(content.slice(startIndex, compStartIndex)) // 组件前的字符串
    
    const compTpl = content.slice(compStartIndex + startTagLen, compEndIndex)
    const codeTpl = separateCode(compTpl)

    if (codeTpl) {
      const externalDemoName = `ExternalDemo${id}`
      output.push(
        `<template v-slot:instance><${externalDemoName} /></template>`
      )
      compScriptHeaderString += `import ${externalDemoName} from "${codeTpl}";`
      compInstancesString += `${externalDemoName},`
    }

    // 重新计算下一次的位置
    id++
    startIndex = compEndIndex + endTagLen
    compStartIndex = content.indexOf(startTag, startIndex)
    compEndIndex = content.indexOf(endTag, compStartIndex + startTagLen)
  }

  // 标题锚点获取
  let pageScript = ''
  
  if (compInstancesString) {
    pageScript = `<script>
        ${compScriptHeaderString}
        export default {
          name: 'component-demo',
          components: {
            ${compInstancesString}
          }
        }
      </script>`
  } else if (content.indexOf('<script>') === 0) {
    startIndex = content.indexOf('</script>') + '</script>'.length
    pageScript = content.slice(0, startIndex)
  }

  // console.log('comp script: ', pageScript)

  output.push(content.slice(startIndex))
  return `
      <template>
        <div class="external-demo-content">
          ${output.join('')}
        </div>
      </template>
      ${pageScript}
      <style>
        ${compStylesString}
      </style>
    `
}
