"use strict";
(self["webpackJsonp_k-view-next"] = self["webpackJsonp_k-view-next"] || []).push([["README_md"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js!./build/md-loader/index.js!./README.md?vue&type=template&id=9dbd65ac":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js!./build/md-loader/index.js!./README.md?vue&type=template&id=9dbd65ac ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  class: "external-demo-content"
};
var _hoisted_2 = {
  class: "table-of-contents",
  style: {
    "max-width": "200px"
  }
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h1 id=\"k-view-next\">K-View-Next <a class=\"header-anchor\" href=\"#k-view-next\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h1><p><a href=\"https://www.npmjs.org/package/k-view-next\"><img src=\"https://img.shields.io/npm/v/k-view-next.svg?style=flat-square\" alt=\"npm version\"></a><a href=\"https://travis-ci.org/SoldierAb/k-view-next\"><img src=\"https://img.shields.io/travis/SoldierAb/k-view-next/master.svg?style=flat-square\" alt=\"build status\"></a><a href=\"https://packagephobia.now.sh/result?p=k-view-next\"><img src=\"https://packagephobia.now.sh/badge?p=k-view-next\" alt=\"install size\"></a><a href=\"http://npm-stat.com/charts.html?package=k-view-next\"><img src=\"https://img.shields.io/npm/dm/k-view-next.svg?style=flat-square\" alt=\"npm downloads\"></a><img src=\"https://img.shields.io/badge/License-MIT-yellow.svg\" alt=\"LICENSE\"></p><h2 id=\"quick-start\">Quick Start <a class=\"header-anchor\" href=\"#quick-start\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h2><h3 id=\"installation\">Installation <a class=\"header-anchor\" href=\"#installation\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h3><pre><code class=\"language-bash\">\nnpm i -S k-view-next\n\n</code></pre><h3 id=\"fully-import\">Fully import <a class=\"header-anchor\" href=\"#fully-import\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h3><pre><code class=\"language-js\">\nimport KView from &#39;k-view-next&#39;\nimport &#39;k-view-next/lib/style&#39;\n\nexport default (app) =&gt; {\n    app.use(KView)\n    return app\n}\n\n\n</code></pre><h3 id=\"import-on-demand\">Import on Demand <a class=\"header-anchor\" href=\"#import-on-demand\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h3><blockquote><p><code>k-view-next</code> supports tree shaking of ES modules, so using import { Button } from &#39;k-view-next&#39;; would drop js code you didn&#39;t use.</p></blockquote><ul><li>we can import individual components on demand:</li></ul><pre><code class=\"language-js\">\nimport Button from &#39;k-view-next/lib/button&#39;\nimport &#39;k-view-next/lib/button/style&#39;\n\n</code></pre><ul><li>We strongly recommend using <a href=\"https://github.com/umijs/babel-plugin-import\">babel-plugin-import</a>, which can convert the following code to the &#39;k-view-next/lib/xxx&#39; way:</li></ul><pre><code class=\"language-js\">\nimport { Button } from &#39;k-view-next&#39;\n\n</code></pre><h2 id=\"scripts\">Scripts <a class=\"header-anchor\" href=\"#scripts\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h2><h3 id=\"dev\">dev <a class=\"header-anchor\" href=\"#dev\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h3><p>Component development and debugging</p><pre><code class=\"language-bash\"># Debug button component\n\nyarn dev ./components/button\n\n</code></pre><h3 id=\"docs\">docs <a class=\"header-anchor\" href=\"#docs\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h3><p>Documentation site preview</p><pre><code class=\"language-bash\">\nyarn docs\n\n</code></pre><h3 id=\"compile\">compile <a class=\"header-anchor\" href=\"#compile\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h3><p>Component compilation</p><pre><code>\nyarn compile\n\n</code></pre><h3 id=\"gen\">gen <a class=\"header-anchor\" href=\"#gen\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h3><p>Script to quickly create component code</p><pre><code class=\"language-bash\">\nyarn gen\n\n</code></pre><h3 id=\"site-preview\">site preview <a class=\"header-anchor\" href=\"#site-preview\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h3><p><img src=\"https://user-images.githubusercontent.com/33128022/169243265-f0828349-1e24-400b-857d-3987337b45fa.png\" alt=\"image\" width=\"1000\"></p><p><img src=\"https://user-images.githubusercontent.com/33128022/169243400-008ddc8d-1607-47d7-8614-666718c9bd03.png\" alt=\"image\" width=\"1000\"></p><h3 id=\"important\">Important <a class=\"header-anchor\" href=\"#important\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h3><p>The link anchor jump will be abnormal on the github io page. For private deployment, please modify the configuration items in .env.production.</p><pre><code class=\"language-bash\"># PUBLIC_PATH=&#39;./&#39;\n# VUE_APP_MODE=&#39;UMD_PREVIEW&#39;\nPUBLIC_PATH=&#39;/&#39;\nVUE_APP_MODE=&#39;CMD_PREVIEW&#39;\n\n</code></pre>", 32);

function render(_ctx, _cache) {
  var _component_a_anchor_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("a-anchor-link");

  var _component_a_anchor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("a-anchor");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
            href: "#quick-start",
            title: "Quick Start "
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#installation",
                title: "Installation "
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#fully-import",
                title: "Fully import "
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#import-on-demand",
                title: "Import on Demand "
              })];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
            href: "#scripts",
            title: "Scripts "
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#dev",
                title: "dev "
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#docs",
                title: "docs "
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#compile",
                title: "compile "
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#gen",
                title: "gen "
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#site-preview",
                title: "site preview "
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#important",
                title: "Important "
              })];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_3]);
}

/***/ }),

/***/ "./README.md":
/*!*******************!*\
  !*** ./README.md ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _README_md_vue_type_template_id_9dbd65ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./README.md?vue&type=template&id=9dbd65ac */ "./README.md?vue&type=template&id=9dbd65ac");
/* harmony import */ var _home_circleci_repo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_home_circleci_repo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_README_md_vue_type_template_id_9dbd65ac__WEBPACK_IMPORTED_MODULE_0__.render]])

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./README.md?vue&type=template&id=9dbd65ac":
/*!*************************************************!*\
  !*** ./README.md?vue&type=template&id=9dbd65ac ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_build_md_loader_index_js_README_md_vue_type_template_id_9dbd65ac__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_build_md_loader_index_js_README_md_vue_type_template_id_9dbd65ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js!./build/md-loader/index.js!./README.md?vue&type=template&id=9dbd65ac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js!./build/md-loader/index.js!./README.md?vue&type=template&id=9dbd65ac");


/***/ })

}]);
//# sourceMappingURL=index.0e1a48b3fc7f1a1823a3.js.map