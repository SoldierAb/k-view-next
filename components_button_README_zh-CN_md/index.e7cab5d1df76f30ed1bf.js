"use strict";
(self["webpackJsonp_k-view-next"] = self["webpackJsonp_k-view-next"] || []).push([["components_button_README_zh-CN_md"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/index.js!./build/md-loader/index.js!./components/button/README.zh-CN.md?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/index.js!./build/md-loader/index.js!./components/button/README.zh-CN.md?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demos_basic_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demos/basic.vue */ "./components/button/demos/basic.vue");
/* harmony import */ var _demos_disabled_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demos/disabled.vue */ "./components/button/demos/disabled.vue");
/* harmony import */ var _demos_group_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demos/group.vue */ "./components/button/demos/group.vue");
/* harmony import */ var _demos_lang_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demos/lang.vue */ "./components/button/demos/lang.vue");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'component-demo',
  components: {
    ExternalDemo1: _demos_basic_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ExternalDemo2: _demos_disabled_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ExternalDemo3: _demos_group_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ExternalDemo4: _demos_lang_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/lang.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/lang.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var k_view_next_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! k-view-next/lib/_locale/zh-CN */ "./components/_locale/zh-CN.ts");
/* harmony import */ var k_view_next_lib_locale_en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! k-view-next/lib/_locale/en-US */ "./components/_locale/en-US.ts");



/* harmony default export */ __webpack_exports__["default"] = ({
  setup: function setup() {
    var currentLang = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("zh-CN");

    var langToggle = function langToggle() {
      currentLang.value = currentLang.value === "en-US" ? "zh-CN" : "en-US";
    }; // 多语言注入, 此处引用组件库内置多语言配置


    var localeData = {
      "zh-CN": k_view_next_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_1__["default"],
      "en-US": k_view_next_lib_locale_en_US__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    var locale = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return localeData[[currentLang.value]];
    });
    return {
      langToggle: langToggle,
      locale: locale,
      localeData: localeData,
      currentLang: currentLang
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js!./build/md-loader/index.js!./components/button/README.zh-CN.md?vue&type=template&id=057deabe":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js!./build/md-loader/index.js!./components/button/README.zh-CN.md?vue&type=template&id=057deabe ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h2 id=\"%E6%8C%89%E9%92%AE\">按钮 <a class=\"header-anchor\" href=\"#%E6%8C%89%E9%92%AE\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h2><hr><h2 id=\"order%3A-0title%3Azh-cn%3A-%E6%8C%89%E9%92%AE%E7%B1%BB%E5%9E%8Ben-us%3A-type\">order: 0 title: zh-CN: 按钮类型 en-US: Type <a class=\"header-anchor\" href=\"#order%3A-0title%3Azh-cn%3A-%E6%8C%89%E9%92%AE%E7%B1%BB%E5%9E%8Ben-us%3A-type\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h2><p>按钮有五种类型：默认按钮、主要按钮、成功按钮、警告按钮、危险按钮和按钮组。</p><h3 id=\"%E8%B7%AF%E7%94%B1%E9%BB%98%E8%AE%A4%E8%A7%86%E5%9B%BE\">路由默认视图 <a class=\"header-anchor\" href=\"#%E8%B7%AF%E7%94%B1%E9%BB%98%E8%AE%A4%E8%A7%86%E5%9B%BE\"><span aria-hidden=\"true\" class=\"anchor\">#</span></a></h3>", 5);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  id: "%E5%AD%90%E8%A7%86%E5%9B%BEcount"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("子视图count "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  class: "header-anchor",
  href: "#%E5%AD%90%E8%A7%86%E5%9B%BEcount"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true",
  class: "anchor"
}, "#")])], -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  id: "%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("基础使用 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  class: "header-anchor",
  href: "#%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true",
  class: "anchor"
}, "#")])], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("                  "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", {
  class: "pre-code html"
}, "<template>\n  <k-button>Default Button</k-button> &nbsp;\n  <k-button type=\"primary\">Primary Button</k-button> &nbsp;\n  <k-button type=\"success\">Success Button</k-button> &nbsp;\n  <k-button type=\"warning\">Warning Button</k-button> &nbsp;\n  <k-button type=\"error\">Error Button</k-button> &nbsp;\n</template>\n"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n              ")], -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  id: "%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("禁用状态 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  class: "header-anchor",
  href: "#%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true",
  class: "anchor"
}, "#")])], -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("                  "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", {
  class: "pre-code html"
}, "<template>\n  <k-button disabled>Disabled Button</k-button>\n</template>\n"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n              ")], -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  id: "%E6%8C%89%E9%92%AE%E7%BB%84"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("按钮组 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  class: "header-anchor",
  href: "#%E6%8C%89%E9%92%AE%E7%BB%84"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true",
  class: "anchor"
}, "#")])], -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("                  "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", {
  class: "pre-code html"
}, "<template>\n  <k-button-group>\n    <k-button>Default Button</k-button>\n    <k-button type=\"primary\">P</k-button>\n    <k-button>X</k-button>\n    <k-button>Y</k-button>\n    <k-button>Z</k-button>\n  </k-button-group>\n</template>\n"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n              ")], -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  id: "%E5%A4%9A%E8%AF%AD%E8%A8%80%E6%94%AF%E6%8C%81"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("多语言支持 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  class: "header-anchor",
  href: "#%E5%A4%9A%E8%AF%AD%E8%A8%80%E6%94%AF%E6%8C%81"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true",
  class: "anchor"
}, "#")])], -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("                  "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", {
  class: "pre-code html"
}, "<template>\n  <a-alert type=\"warning\" description=\"[ 多语言 ] type=&quot;confirm&quot; button 测试demo\" />\n  <a-alert :description=\"`本地多语言配置注入 localeData: ${ JSON.stringify(localeData) }`\" />\n  <div>当前语言 currentLang： {{ currentLang }}</div>\n  <k-config-provider :locale=\"locale\">\n    <k-button\n      type=\"confirm\"\n      @click=\"langToggle\"\n    >\n      点击切换语言-\n    </k-button>\n  </k-config-provider>\n</template>\n\n<script>\nimport { ref, computed } from \"vue\"\nimport zhCN from \"k-view-next/lib/_locale/zh-CN\"\nimport enUS from \"k-view-next/lib/_locale/en-US\"\n\nexport default {\n  setup() {\n    const currentLang = ref(\"zh-CN\")\n    const langToggle = () => {\n      currentLang.value = currentLang.value === \"en-US\" ? \"zh-CN\" : \"en-US\"\n    }\n    // 多语言注入, 此处引用组件库内置多语言配置\n    const localeData = {\n      \"zh-CN\": zhCN,\n      \"en-US\": enUS,\n    }\n\n    const locale = computed(() => {\n      return localeData[[currentLang.value]]\n    })\n\n    return {\n      langToggle,\n      locale,\n      localeData,\n      currentLang,\n    }\n  },\n}\n</script>\n"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n              ")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_a_anchor_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("a-anchor-link");

  var _component_a_anchor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("a-anchor");

  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  var _component_ExternalDemo1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ExternalDemo1");

  var _component_copy_outlined = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("copy-outlined");

  var _component_demo_box = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("demo-box");

  var _component_ExternalDemo2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ExternalDemo2");

  var _component_ExternalDemo3 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ExternalDemo3");

  var _component_ExternalDemo4 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ExternalDemo4");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
            href: "#%E6%8C%89%E9%92%AE",
            title: "按钮 "
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
            href: "#order%3A-0title%3Azh-cn%3A-%E6%8C%89%E9%92%AE%E7%B1%BB%E5%9E%8Ben-us%3A-type",
            title: "order: 0title:zh-CN: 按钮类型en-US: Type "
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#%E8%B7%AF%E7%94%B1%E9%BB%98%E8%AE%A4%E8%A7%86%E5%9B%BE",
                title: "路由默认视图 "
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#%E5%AD%90%E8%A7%86%E5%9B%BEcount",
                title: "子视图count "
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8",
                title: "基础使用 "
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81",
                title: "禁用状态 "
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#%E6%8C%89%E9%92%AE%E7%BB%84",
                title: "按钮组 "
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_anchor_link, {
                href: "#%E5%A4%9A%E8%AF%AD%E8%A8%80%E6%94%AF%E6%8C%81",
                title: "多语言支持 "
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

  })]), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view, {
    name: "count"
  }), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_demo_box, null, {
    instance: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ExternalDemo1)];
    }),
    code: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    copy: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_copy_outlined, {
        class: "clipboard-btn",
        "data-clipboard-text": "%3Ctemplate%3E%0A%20%20%3Ck-button%3EDefault%20Button%3C%2Fk-button%3E%20%26nbsp%3B%0A%20%20%3Ck-button%20type%3D%22primary%22%3EPrimary%20Button%3C%2Fk-button%3E%20%26nbsp%3B%0A%20%20%3Ck-button%20type%3D%22success%22%3ESuccess%20Button%3C%2Fk-button%3E%20%26nbsp%3B%0A%20%20%3Ck-button%20type%3D%22warning%22%3EWarning%20Button%3C%2Fk-button%3E%20%26nbsp%3B%0A%20%20%3Ck-button%20type%3D%22error%22%3EError%20Button%3C%2Fk-button%3E%20%26nbsp%3B%0A%3C%2Ftemplate%3E%0A"
      })];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_demo_box, null, {
    instance: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ExternalDemo2)];
    }),
    code: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    copy: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_copy_outlined, {
        class: "clipboard-btn",
        "data-clipboard-text": "%3Ctemplate%3E%0A%20%20%3Ck-button%20disabled%3EDisabled%20Button%3C%2Fk-button%3E%0A%3C%2Ftemplate%3E%0A"
      })];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_demo_box, null, {
    instance: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ExternalDemo3)];
    }),
    code: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14];
    }),
    copy: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_copy_outlined, {
        class: "clipboard-btn",
        "data-clipboard-text": "%3Ctemplate%3E%0A%20%20%3Ck-button-group%3E%0A%20%20%20%20%3Ck-button%3EDefault%20Button%3C%2Fk-button%3E%0A%20%20%20%20%3Ck-button%20type%3D%22primary%22%3EP%3C%2Fk-button%3E%0A%20%20%20%20%3Ck-button%3EX%3C%2Fk-button%3E%0A%20%20%20%20%3Ck-button%3EY%3C%2Fk-button%3E%0A%20%20%20%20%3Ck-button%3EZ%3C%2Fk-button%3E%0A%20%20%3C%2Fk-button-group%3E%0A%3C%2Ftemplate%3E%0A"
      })];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_demo_box, null, {
    instance: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ExternalDemo4)];
    }),
    code: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_16];
    }),
    copy: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_copy_outlined, {
        class: "clipboard-btn",
        "data-clipboard-text": "%3Ctemplate%3E%0A%20%20%3Ca-alert%20type%3D%22warning%22%20description%3D%22%5B%20%E5%A4%9A%E8%AF%AD%E8%A8%80%20%5D%20type%3D%26quot%3Bconfirm%26quot%3B%20button%20%E6%B5%8B%E8%AF%95demo%22%20%2F%3E%0A%20%20%3Ca-alert%20%3Adescription%3D%22%60%E6%9C%AC%E5%9C%B0%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE%E6%B3%A8%E5%85%A5%20localeData%3A%20%24%7B%20JSON.stringify(localeData)%20%7D%60%22%20%2F%3E%0A%20%20%3Cdiv%3E%E5%BD%93%E5%89%8D%E8%AF%AD%E8%A8%80%20currentLang%EF%BC%9A%20%7B%7B%20currentLang%20%7D%7D%3C%2Fdiv%3E%0A%20%20%3Ck-config-provider%20%3Alocale%3D%22locale%22%3E%0A%20%20%20%20%3Ck-button%0A%20%20%20%20%20%20type%3D%22confirm%22%0A%20%20%20%20%20%20%40click%3D%22langToggle%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%E7%82%B9%E5%87%BB%E5%88%87%E6%8D%A2%E8%AF%AD%E8%A8%80-%0A%20%20%20%20%3C%2Fk-button%3E%0A%20%20%3C%2Fk-config-provider%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20ref%2C%20computed%20%7D%20from%20%22vue%22%0Aimport%20zhCN%20from%20%22k-view-next%2Flib%2F_locale%2Fzh-CN%22%0Aimport%20enUS%20from%20%22k-view-next%2Flib%2F_locale%2Fen-US%22%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20currentLang%20%3D%20ref(%22zh-CN%22)%0A%20%20%20%20const%20langToggle%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20currentLang.value%20%3D%20currentLang.value%20%3D%3D%3D%20%22en-US%22%20%3F%20%22zh-CN%22%20%3A%20%22en-US%22%0A%20%20%20%20%7D%0A%20%20%20%20%2F%2F%20%E5%A4%9A%E8%AF%AD%E8%A8%80%E6%B3%A8%E5%85%A5%2C%20%E6%AD%A4%E5%A4%84%E5%BC%95%E7%94%A8%E7%BB%84%E4%BB%B6%E5%BA%93%E5%86%85%E7%BD%AE%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE%0A%20%20%20%20const%20localeData%20%3D%20%7B%0A%20%20%20%20%20%20%22zh-CN%22%3A%20zhCN%2C%0A%20%20%20%20%20%20%22en-US%22%3A%20enUS%2C%0A%20%20%20%20%7D%0A%0A%20%20%20%20const%20locale%20%3D%20computed(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20return%20localeData%5B%5BcurrentLang.value%5D%5D%0A%20%20%20%20%7D)%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20langToggle%2C%0A%20%20%20%20%20%20locale%2C%0A%20%20%20%20%20%20localeData%2C%0A%20%20%20%20%20%20currentLang%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D%0A%3C%2Fscript%3E%0A"
      })];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/basic.vue?vue&type=template&id=867e7aac":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/basic.vue?vue&type=template&id=867e7aac ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Default Button");

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Primary Button");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Success Button");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Warning Button");

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Error Button");

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ");

function render(_ctx, _cache) {
  var _component_k_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("k-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_k_button, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_k_button, {
    type: "primary"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_k_button, {
    type: "success"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_k_button, {
    type: "warning"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_k_button, {
    type: "error"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_10], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/disabled.vue?vue&type=template&id=5c431d35":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/disabled.vue?vue&type=template&id=5c431d35 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Disabled Button");

function render(_ctx, _cache) {
  var _component_k_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("k-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_k_button, {
    disabled: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/group.vue?vue&type=template&id=5e3b5bde":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/group.vue?vue&type=template&id=5e3b5bde ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Default Button");

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("P");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("X");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Y");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Z");

function render(_ctx, _cache) {
  var _component_k_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("k-button");

  var _component_k_button_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("k-button-group");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_k_button_group, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_k_button, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_1];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_k_button, {
        type: "primary"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_2];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_k_button, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_3];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_k_button, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_4];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_k_button, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_5];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/lang.vue?vue&type=template&id=27c87804":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/lang.vue?vue&type=template&id=27c87804 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 点击切换语言- ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_a_alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("a-alert");

  var _component_k_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("k-button");

  var _component_k_config_provider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("k-config-provider");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_alert, {
    type: "warning",
    description: "[ 多语言 ] type=\"confirm\" button 测试demo"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_alert, {
    description: "\u672C\u5730\u591A\u8BED\u8A00\u914D\u7F6E\u6CE8\u5165 localeData: ".concat(JSON.stringify($setup.localeData))
  }, null, 8
  /* PROPS */
  , ["description"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "当前语言 currentLang： " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentLang), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_k_config_provider, {
    locale: $setup.locale
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_k_button, {
        type: "confirm",
        onClick: $setup.langToggle
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_1];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onClick"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["locale"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./components/_locale/en-US.ts":
/*!*************************************!*\
  !*** ./components/_locale/en-US.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/locale/en-US */ "./components/button/locale/en-US.ts");

var locale = {
  lang: 'en-US',
  Button: _button_locale_en_US__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./components/button/locale/en-US.ts":
/*!*******************************************!*\
  !*** ./components/button/locale/en-US.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var locale = {
  OkText: 'Confirm',
  CancelText: 'Cancel'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./components/button/README.zh-CN.md":
/*!*******************************************!*\
  !*** ./components/button/README.zh-CN.md ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _README_zh_CN_md_vue_type_template_id_057deabe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./README.zh-CN.md?vue&type=template&id=057deabe */ "./components/button/README.zh-CN.md?vue&type=template&id=057deabe");
/* harmony import */ var _README_zh_CN_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./README.zh-CN.md?vue&type=script&lang=js */ "./components/button/README.zh-CN.md?vue&type=script&lang=js");
/* harmony import */ var _home_circleci_repo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_circleci_repo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_README_zh_CN_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_README_zh_CN_md_vue_type_template_id_057deabe__WEBPACK_IMPORTED_MODULE_0__.render]])

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./components/button/demos/basic.vue":
/*!*******************************************!*\
  !*** ./components/button/demos/basic.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_vue_vue_type_template_id_867e7aac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic.vue?vue&type=template&id=867e7aac */ "./components/button/demos/basic.vue?vue&type=template&id=867e7aac");
/* harmony import */ var _home_circleci_repo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_home_circleci_repo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_basic_vue_vue_type_template_id_867e7aac__WEBPACK_IMPORTED_MODULE_0__.render]])

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./components/button/demos/disabled.vue":
/*!**********************************************!*\
  !*** ./components/button/demos/disabled.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _disabled_vue_vue_type_template_id_5c431d35__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disabled.vue?vue&type=template&id=5c431d35 */ "./components/button/demos/disabled.vue?vue&type=template&id=5c431d35");
/* harmony import */ var _home_circleci_repo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_home_circleci_repo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_disabled_vue_vue_type_template_id_5c431d35__WEBPACK_IMPORTED_MODULE_0__.render]])

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./components/button/demos/group.vue":
/*!*******************************************!*\
  !*** ./components/button/demos/group.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_vue_vue_type_template_id_5e3b5bde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group.vue?vue&type=template&id=5e3b5bde */ "./components/button/demos/group.vue?vue&type=template&id=5e3b5bde");
/* harmony import */ var _home_circleci_repo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_home_circleci_repo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_group_vue_vue_type_template_id_5e3b5bde__WEBPACK_IMPORTED_MODULE_0__.render]])

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./components/button/demos/lang.vue":
/*!******************************************!*\
  !*** ./components/button/demos/lang.vue ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang_vue_vue_type_template_id_27c87804__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang.vue?vue&type=template&id=27c87804 */ "./components/button/demos/lang.vue?vue&type=template&id=27c87804");
/* harmony import */ var _lang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang.vue?vue&type=script&lang=js */ "./components/button/demos/lang.vue?vue&type=script&lang=js");
/* harmony import */ var _home_circleci_repo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_circleci_repo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_lang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_lang_vue_vue_type_template_id_27c87804__WEBPACK_IMPORTED_MODULE_0__.render]])

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./components/button/README.zh-CN.md?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./components/button/README.zh-CN.md?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_index_js_build_md_loader_index_js_README_zh_CN_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_index_js_build_md_loader_index_js_README_zh_CN_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!../../node_modules/vue-loader/dist/index.js!../../build/md-loader/index.js!./README.zh-CN.md?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/index.js!./build/md-loader/index.js!./components/button/README.zh-CN.md?vue&type=script&lang=js");
 

/***/ }),

/***/ "./components/button/demos/lang.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./components/button/demos/lang.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_lang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_lang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./lang.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/lang.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./components/button/README.zh-CN.md?vue&type=template&id=057deabe":
/*!*************************************************************************!*\
  !*** ./components/button/README.zh-CN.md?vue&type=template&id=057deabe ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_build_md_loader_index_js_README_zh_CN_md_vue_type_template_id_057deabe__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_build_md_loader_index_js_README_zh_CN_md_vue_type_template_id_057deabe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js!../../build/md-loader/index.js!./README.zh-CN.md?vue&type=template&id=057deabe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js!./build/md-loader/index.js!./components/button/README.zh-CN.md?vue&type=template&id=057deabe");


/***/ }),

/***/ "./components/button/demos/basic.vue?vue&type=template&id=867e7aac":
/*!*************************************************************************!*\
  !*** ./components/button/demos/basic.vue?vue&type=template&id=867e7aac ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_basic_vue_vue_type_template_id_867e7aac__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_basic_vue_vue_type_template_id_867e7aac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./basic.vue?vue&type=template&id=867e7aac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/basic.vue?vue&type=template&id=867e7aac");


/***/ }),

/***/ "./components/button/demos/disabled.vue?vue&type=template&id=5c431d35":
/*!****************************************************************************!*\
  !*** ./components/button/demos/disabled.vue?vue&type=template&id=5c431d35 ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_disabled_vue_vue_type_template_id_5c431d35__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_disabled_vue_vue_type_template_id_5c431d35__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./disabled.vue?vue&type=template&id=5c431d35 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/disabled.vue?vue&type=template&id=5c431d35");


/***/ }),

/***/ "./components/button/demos/group.vue?vue&type=template&id=5e3b5bde":
/*!*************************************************************************!*\
  !*** ./components/button/demos/group.vue?vue&type=template&id=5e3b5bde ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_group_vue_vue_type_template_id_5e3b5bde__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_group_vue_vue_type_template_id_5e3b5bde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./group.vue?vue&type=template&id=5e3b5bde */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/group.vue?vue&type=template&id=5e3b5bde");


/***/ }),

/***/ "./components/button/demos/lang.vue?vue&type=template&id=27c87804":
/*!************************************************************************!*\
  !*** ./components/button/demos/lang.vue?vue&type=template&id=27c87804 ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_lang_vue_vue_type_template_id_27c87804__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_lang_vue_vue_type_template_id_27c87804__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./lang.vue?vue&type=template&id=27c87804 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./components/button/demos/lang.vue?vue&type=template&id=27c87804");


/***/ })

}]);
//# sourceMappingURL=index.e7cab5d1df76f30ed1bf.js.map