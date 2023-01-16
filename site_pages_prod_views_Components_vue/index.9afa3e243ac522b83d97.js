"use strict";
(self["webpackJsonp_k-view-next"] = self["webpackJsonp_k-view-next"] || []).push([["site_pages_prod_views_Components_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./site/pages/prod/views/Components.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./site/pages/prod/views/Components.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extends_BaseDoc_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extends/BaseDoc.vue */ "./site/pages/prod/extends/BaseDoc.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./site/pages/prod/router/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  extends: _extends_BaseDoc_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      menuProps: {
        dataSource: _router__WEBPACK_IMPORTED_MODULE_1__.menuDataSource,
        labelFilter: function labelFilter(node) {
          return node.children ? node.label : "".concat(node.label, "-").concat(node.name);
        },
        openKeys: [],
        selectedKeys: [],
        theme: "light",
        mode: "inline",
        style: {
          width: "256px"
        }
      }
    };
  },
  methods: {
    onSelect: function onSelect(_ref) {
      var selectedKeys = _ref.selectedKeys;
      this.$router.push("/Components/".concat(selectedKeys[0]));
    }
  }
});

/***/ }),

/***/ "./site/pages/prod/views/Components.vue":
/*!**********************************************!*\
  !*** ./site/pages/prod/views/Components.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components.vue?vue&type=script&lang=js */ "./site/pages/prod/views/Components.vue?vue&type=script&lang=js");



const __exports__ = _Components_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./site/pages/prod/views/Components.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./site/pages/prod/views/Components.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Components_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Components_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./Components.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./site/pages/prod/views/Components.vue?vue&type=script&lang=js");
 

/***/ })

}]);
//# sourceMappingURL=index.9afa3e243ac522b83d97.js.map