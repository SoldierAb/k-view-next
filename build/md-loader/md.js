const MdChainConfig = require("markdown-it-chain");
const anchorPlugin = require("markdown-it-anchor");
const container = require("./container");
// const tocRight = require("markdown-it-toc-done-right");
const attrsPlugin = require("markdown-it-attrs");
const iterator = require('markdown-it-for-inline')
const antAnchorPlugin = require('./plugin/markdown-it-toc-ant-anchor')

const fs = require("fs");
const path = require("path");
const config = new MdChainConfig();

config.options
  .html(true)
  .end()
  .plugin("attrs")
  .use(attrsPlugin, [
    {
      leftDelimiter: "%{",
      rightDelimiter: "}%",
    },
  ])
  .end()
  // .plugin('toc')
  // .use(require('markdown-it-table-of-contents'), [{
  //   includeLevel: [2, 3, 4, 5, 6]
  // }])
  // .end()
  .plugin("anchor")
  .use(anchorPlugin, [
    {
      permalink: anchorPlugin.permalink.linkInsideHeader({
        symbol: `
          <span aria-hidden="true" class="anchor">#</span>
        `,
      }),
      permalinkBefore: true,
      permalinkSymbol: "#",
      permalinkAttrs: () => ({ "aria-hidden": true }),
      tabIndex: false,
      // level: 2,
      // permalink: anchorPlugin.permalink.ariaHidden({
      //   placement: 'after'
      // })
    },
  ])
  .end()
  .plugin("toc")
  // .use(tocRight, [
  //   {
  //     level: [2, 3, 4, 5, 6],
  //     listClass: "toc-nav-list",
  //     itemClass: "toc-nav-item",
  //     linkClass: "toc-nav-link",
  //     format: function (x, htmlencode) {
  //       // return `<span class="xxxx">${htmlencode(x)}</span>`
  //       const anchorHref = encodeURIComponent(String(x).trim().toLowerCase().replace(/\s+/g, '-'))
  //       console.log(x, htmlencode, anchorHref)
  //       return `<a-anchor-link href="#${anchorHref}" title="${htmlencode(x)}"></a-anchor-link>`
  //     }
  //   },
  // ])
  // .end()
  .use(antAnchorPlugin, [
    {
      level: [2, 3, 4, 5, 6],
      containerStyle: 'max-width: 200px;'
    },
  ])
  .end()
  .plugin("containers")
  .use(container)
  .end()
  .plugin('iterators')
  .use(iterator, [
    'replace_img_src',
    'image',
    function (tokens, idx) {
      const srcValue = tokens[idx].attrGet('src')
      if (srcValue && !srcValue.startsWith('http')) {
        tokens[idx].attrSet('src', process.env.PUBLIC_PATH + srcValue)
      }
    }
  ])
// .plugin('iterators')
// .use(iterator, [
//   'url_new_win',
//   'link_open',
//   function (tokens, idx) {
//     const aIndex = tokens[idx].attrIndex('target')

//     if (aIndex < 0) {
//       tokens[idx].attrPush(['target', '_blank'])
//     } else {
//       tokens[idx].attrs[aIndex][1] = '_blank'
//     }
//   }
// ])
// .end()

// fence 解析覆盖
const fenceWrite = (md) => {
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    // 文件所在文件夹
    const relativeDir = path.dirname(env.resourcePath);
    const token = tokens[idx];
    const prevToken = tokens[idx - 1];
    const isInDemoBox =
      prevToken &&
      prevToken.nesting === 1 &&
      prevToken.info.trim().match(/^demo\s*(.*)$/);
    const isExternal =
      prevToken &&
      prevToken.nesting === 1 &&
      prevToken.info.trim().match(/^external\s*(.*)$/);
    // 代码块
    if (token.info === "html" && (isExternal || isInDemoBox)) {
      let cpText = "";
      let codeHtml = "";
      if (isInDemoBox) {
        cpText = encodeURIComponent(token.content);
        codeHtml = md.utils.escapeHtml(token.content);
      }
      if (isExternal) {
        const [, , demoPath] = token.content.match(
          /<code([\s\S]+)src=\"([\S]+)\"/
        );
        const [, demoDir, demoName] = demoPath.match(
          /\/([\s\S]+)\/([\s\S]+)\.vue/
        );
        const codeBuffer = fs.readFileSync(
          path.normalize(
            path.resolve(path.join(relativeDir, `${demoDir}/${demoName}.vue`))
          )
        );
        const codeStr = codeBuffer.toString();
        cpText = encodeURIComponent(codeStr);
        codeHtml = md.utils.escapeHtml(codeStr);
      }
      return `<template v-slot:code>
              <pre v-pre>
                  <code class="pre-code html">${codeHtml}</code>
              </pre>
          </template>
          <template v-slot:copy>
            <copy-outlined
              class="clipboard-btn"
              data-clipboard-text="${cpText}"
            />
          </template>`;
    }
    return defaultRender(tokens, idx, options, env, self);
  };
};

const mdInstance = config.toMd();
// 新增markdown-it-for-block插件，可以自定义需要block插件添加属性
mdInstance.use(
  require("./plugin/markdown-it-for-block"),
  "table_open",
  function (tokens, idx) {
    // 如果你确认其他的插件不能添加 `class` - 放弃以下检查：
    const aIndex = tokens[idx].attrIndex("class");

    if (aIndex < 0) {
      tokens[idx].attrPush(["class", "markdown-table"]); // 添加新属性
    } else {
      tokens[idx].attrs[aIndex][1] = "markdown-table"; // 替换已经存在的属性值
    }
  }
);

fenceWrite(mdInstance);

module.exports = mdInstance;
