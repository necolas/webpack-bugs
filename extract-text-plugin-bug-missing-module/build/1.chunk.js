webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(5);

module.exports = function dialog() {
  console.log('dialog');
};


/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag
var update = __webpack_require__(4)(
	__webpack_require__(6)
);
// Hot Module Replacement
if(false) {
	module.hot.accept("!!/Users/nicolasgallagher/Code/necolas/webpack-bugs/extract-text-plugin-bug-missing-module/node_modules/extract-text-webpack-plugin/loader.js?{\"remove\":true}!/Users/nicolasgallagher/Code/necolas/webpack-bugs/extract-text-plugin-bug-missing-module/node_modules/css-loader/index.js!/Users/nicolasgallagher/Code/necolas/webpack-bugs/extract-text-plugin-bug-missing-module/web_modules/dialog/index.css", function() {
		update(require("!!/Users/nicolasgallagher/Code/necolas/webpack-bugs/extract-text-plugin-bug-missing-module/node_modules/extract-text-webpack-plugin/loader.js?{\"remove\":true}!/Users/nicolasgallagher/Code/necolas/webpack-bugs/extract-text-plugin-bug-missing-module/node_modules/css-loader/index.js!/Users/nicolasgallagher/Code/necolas/webpack-bugs/extract-text-plugin-bug-missing-module/web_modules/dialog/index.css"));
	});
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

module.exports =
	__webpack_require__(7) +
	"\n\n.dialog {\n  color: green;\n}\n";

/***/ }
]);