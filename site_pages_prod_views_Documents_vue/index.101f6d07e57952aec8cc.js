"use strict";
(self["webpackJsonp_k-view-next"] = self["webpackJsonp_k-view-next"] || []).push([["site_pages_prod_views_Documents_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./site/pages/prod/views/Documents.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./site/pages/prod/views/Documents.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extends_BaseDoc_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extends/BaseDoc.vue */ "./site/pages/prod/extends/BaseDoc.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./site/pages/prod/router/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  extends: _extends_BaseDoc_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      menuProps: {
        dataSource: _router__WEBPACK_IMPORTED_MODULE_1__.documentsDataSource,
        labelFilter: function labelFilter(node) {
          return node.label;
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
      this.$router.push("/Documents/".concat(selectedKeys[0]));
    }
  }
});

/***/ }),

/***/ "./site/pages/prod/views/Documents.vue":
/*!*********************************************!*\
  !*** ./site/pages/prod/views/Documents.vue ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js */ "./site/pages/prod/views/Documents.vue?vue&type=script&lang=js");



const __exports__ = _Documents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./site/pages/prod/views/Documents.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./site/pages/prod/views/Documents.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Documents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Documents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./Documents.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./site/pages/prod/views/Documents.vue?vue&type=script&lang=js");
 

/***/ })

}]);
//# sourceMappingURL=index.101f6d07e57952aec8cc.js.map