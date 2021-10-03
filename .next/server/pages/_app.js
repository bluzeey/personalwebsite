"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\SAHIL MAHESHWARI\\Documents\\GitHub\\personalwebsite\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_theme__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./src/styles/globals.js":
/*!*******************************!*\
  !*** ./src/styles/globals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ "styled-normalize");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);


const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["", ";*{box-sizing:border-box;margin:0;padding:0;}html{font-size:62.5%;scroll-behavior:smooth;}body{font-family:", ";font-size:1.6rem;background:", ";color:", ";cursor:default;}h1,h2,h3,h4,h5,h6,button{font-family:", ";}a{text-decoration:none;}li{list-style:none;}"], styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize, props => props.theme.fonts.main, props => props.theme.colors.background1, props => props.theme.colors.primary1, props => props.theme.fonts.title);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes/default */ "./src/themes/default.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./src/styles/globals.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\SAHIL MAHESHWARI\\Documents\\GitHub\\personalwebsite\\src\\styles\\theme.js";





const Theme = ({
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
  theme: _themes_default__WEBPACK_IMPORTED_MODULE_1__.default,
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_globals__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), children]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);

/***/ }),

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)"
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  }
});

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-normalize");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUVlLFNBQVNDLEdBQVQsQ0FBYTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBYixFQUF1QztBQUNwRCxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0UsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBT0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQ0E7QUFFQSxNQUFNRyxZQUFZLEdBQUdGLG9FQUFILDhRQUNkQyx1REFEYyxFQWNDRSxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUFaLENBQWtCQyxJQWQ1QixFQWdCQUgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkMsV0FoQjVCLEVBaUJMTCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFaLENBQW1CRSxRQWpCdkIsRUFzQkNOLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JLLEtBdEI1QixDQUFsQjtBQWlDQSxpRUFBZVIsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBRUE7QUFDQTs7O0FBRUEsTUFBTU4sS0FBSyxHQUFHLENBQUM7QUFBRWdCLEVBQUFBO0FBQUYsQ0FBRCxrQkFDWiw4REFBQyw0REFBRDtBQUFlLE9BQUssRUFBRVIsb0RBQXRCO0FBQUEsMEJBQ0UsOERBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdRLFFBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBT0EsaUVBQWVoQixLQUFmOzs7Ozs7Ozs7Ozs7OztBQ1pBLGlFQUFlO0FBQ2I7QUFDQVMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xLLElBQUFBLEtBQUssRUFBRSwyQkFERjtBQUVMSixJQUFBQSxJQUFJLEVBQUU7QUFGRCxHQUZNO0FBTWI7QUFDQUMsRUFBQUEsTUFBTSxFQUFFO0FBQ05FLElBQUFBLFFBQVEsRUFBRSxzQkFESjtBQUVORCxJQUFBQSxXQUFXLEVBQUUsU0FGUDtBQUdOSyxJQUFBQSxPQUFPLEVBQUUsdUJBSEg7QUFJTkMsSUFBQUEsTUFBTSxFQUFFLHVCQUpGO0FBS05DLElBQUFBLFdBQVcsRUFBRTtBQUxQLEdBUEs7QUFjYjtBQUNBQyxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsRUFBRSxFQUFFLCtCQURPO0FBRVhDLElBQUFBLEVBQUUsRUFBRSwrQkFGTztBQUdYQyxJQUFBQSxFQUFFLEVBQUUsZ0NBSE87QUFJWEMsSUFBQUEsRUFBRSxFQUFFO0FBSk87QUFmQSxDQUFmOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWx3ZWJzaXRlLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWx3ZWJzaXRlLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmpzIiwid2VicGFjazovL3BlcnNvbmFsd2Vic2l0ZS8uL3NyYy9zdHlsZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWx3ZWJzaXRlLy4vc3JjL3RoZW1lcy9kZWZhdWx0LmpzIiwid2VicGFjazovL3BlcnNvbmFsd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3BlcnNvbmFsd2Vic2l0ZS9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vcGVyc29uYWx3ZWJzaXRlL2V4dGVybmFsIFwic3R5bGVkLW5vcm1hbGl6ZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUaGVtZT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiAiLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ3N0eWxlZC1ub3JtYWxpemUnO1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgJHtub3JtYWxpemV9O1xuXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcblxuICB9XG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRzLm1haW59O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmQxfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeTF9O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICB9XG4gIGgxLGgyLGgzLGg0LGg1LGg2LGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udHMudGl0bGV9O1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBsaXtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlczsiLCJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lcy9kZWZhdWx0XCI7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4vZ2xvYmFscyc7XG5cbmNvbnN0IFRoZW1lID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICB7Y2hpbGRyZW59XG4gIDwvVGhlbWVQcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gVGVtcCBmb250c1xuICBmb250czoge1xuICAgIHRpdGxlOiBcIlNwYWNlIEdyb3Rlc2ssIHNhbnMtc2VyaWZcIixcbiAgICBtYWluOiBcIlNwYWNlIEdyb3Rlc2ssIHNhbnMtc2VyaWZcIlxuICB9LFxuICAvLyBDb2xvcnMgZm9yIGxheW91dFxuICBjb2xvcnM6IHtcbiAgICBwcmltYXJ5MTogXCJoc2woMjA0LDIzLjglLDk1LjklKVwiLFxuICAgIGJhY2tncm91bmQxOiBcIiMwRjE2MjRcIixcbiAgICBhY2NlbnQxOiBcImhzbCgzNC45LDk4LjYlLDcyLjklKVwiLFxuICAgIGJ1dHRvbjogXCJoc2woMjA1LjEsMTAwJSwzNi4xJSlcIixcbiAgICBiYWNrZ3JvdW5kMjogXCJoc2woMjMyLjcsMjcuMyUsMjMuNyUpXCIsXG4gIH0sXG4gIC8vIEJyZWFrcG9pbnRzIGZvciByZXNwb25zaXZlIGRlc2lnblxuICBicmVha3BvaW50czoge1xuICAgIHNtOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCknLFxuICAgIG1kOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknLFxuICAgIGxnOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpJyxcbiAgICB4bDogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSdcbiAgfSxcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtbm9ybWFsaXplXCIpOyJdLCJuYW1lcyI6WyJUaGVtZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwibm9ybWFsaXplIiwiR2xvYmFsU3R5bGVzIiwicHJvcHMiLCJ0aGVtZSIsImZvbnRzIiwibWFpbiIsImNvbG9ycyIsImJhY2tncm91bmQxIiwicHJpbWFyeTEiLCJ0aXRsZSIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsImFjY2VudDEiLCJidXR0b24iLCJiYWNrZ3JvdW5kMiIsImJyZWFrcG9pbnRzIiwic20iLCJtZCIsImxnIiwieGwiXSwic291cmNlUm9vdCI6IiJ9