webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/GalleryImage.js":
/*!************************************!*\
  !*** ./components/GalleryImage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/a206613345/Desktop/Birdie/birdie-site/birdie-frontend/birdie-app/components/GalleryImage.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar GalleryImage = function GalleryImage(_ref) {\n  _s();\n\n  var image = _ref.image,\n      orientation = _ref.orientation,\n      caption = _ref.caption,\n      hero = _ref.hero;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('hidden'),\n      captionVisibility = _useState[0],\n      setCaptionVisibility = _useState[1];\n\n  if (orientation == 'Portrait') {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: \"gallery-image\",\n      sm: \"6\",\n      md: \"6\",\n      lg: \"6\",\n      onMouseEnter: function onMouseEnter() {\n        return setCaptionVisibility('visible');\n      },\n      onMouseLeave: function onMouseLeave() {\n        return setCaptionVisibility('hidden');\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: image\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this), caption ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"image-caption\",\n        style: {\n          visibility: captionVisibility\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: caption\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 93\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 20\n      }, _this) : '']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: \"gallery-image\",\n      sm: \"12\",\n      md: \"12\",\n      lg: \"12\",\n      onMouseEnter: function onMouseEnter() {\n        return setCaptionVisibility('visible');\n      },\n      onMouseLeave: function onMouseLeave() {\n        return setCaptionVisibility('hidden');\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: image\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), caption ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"image-caption\",\n        style: {\n          visibility: captionVisibility\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: caption\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 93\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 20\n      }, _this) : '']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this);\n  }\n};\n\n_s(GalleryImage, \"HzGC3kbk6tHG2NhN1yNDEeVLHos=\");\n\n_c = GalleryImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryImage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYWxsZXJ5SW1hZ2UuanM/OGFiYyJdLCJuYW1lcyI6WyJHYWxsZXJ5SW1hZ2UiLCJpbWFnZSIsIm9yaWVudGF0aW9uIiwiY2FwdGlvbiIsImhlcm8iLCJ1c2VTdGF0ZSIsImNhcHRpb25WaXNpYmlsaXR5Iiwic2V0Q2FwdGlvblZpc2liaWxpdHkiLCJ2aXNpYmlsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQTJDO0FBQUE7O0FBQUEsTUFBeENDLEtBQXdDLFFBQXhDQSxLQUF3QztBQUFBLE1BQWpDQyxXQUFpQyxRQUFqQ0EsV0FBaUM7QUFBQSxNQUFwQkMsT0FBb0IsUUFBcEJBLE9BQW9CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUVWQyxzREFBUSxDQUFDLFFBQUQsQ0FGRTtBQUFBLE1BRXREQyxpQkFGc0Q7QUFBQSxNQUVuQ0Msb0JBRm1DOztBQUk5RCxNQUFJTCxXQUFXLElBQUksVUFBbkIsRUFBK0I7QUFDN0Isd0JBQ0UscUVBQUMsMkRBQUQ7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUErQixRQUFFLEVBQUMsR0FBbEM7QUFBc0MsUUFBRSxFQUFDLEdBQXpDO0FBQTZDLFFBQUUsRUFBQyxHQUFoRDtBQUFvRCxrQkFBWSxFQUFFO0FBQUEsZUFBTUssb0JBQW9CLENBQUMsU0FBRCxDQUExQjtBQUFBLE9BQWxFO0FBQXlHLGtCQUFZLEVBQUU7QUFBQSxlQUFNQSxvQkFBb0IsQ0FBQyxRQUFELENBQTFCO0FBQUEsT0FBdkg7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRU47QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR0UsT0FBTyxnQkFBRztBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUErQixhQUFLLEVBQUU7QUFBRUssb0JBQVUsRUFBRUY7QUFBZCxTQUF0QztBQUFBLCtCQUF5RTtBQUFBLG9CQUFJSDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILEdBQXFHLEVBRi9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBTUQsR0FQRCxNQU9PO0FBQ0wsd0JBQ0UscUVBQUMsMkRBQUQ7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUErQixRQUFFLEVBQUMsSUFBbEM7QUFBdUMsUUFBRSxFQUFDLElBQTFDO0FBQStDLFFBQUUsRUFBQyxJQUFsRDtBQUF1RCxrQkFBWSxFQUFFO0FBQUEsZUFBTUksb0JBQW9CLENBQUMsU0FBRCxDQUExQjtBQUFBLE9BQXJFO0FBQTRHLGtCQUFZLEVBQUU7QUFBQSxlQUFNQSxvQkFBb0IsQ0FBQyxRQUFELENBQTFCO0FBQUEsT0FBMUg7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRU47QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR0UsT0FBTyxnQkFBRztBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUErQixhQUFLLEVBQUU7QUFBRUssb0JBQVUsRUFBRUY7QUFBZCxTQUF0QztBQUFBLCtCQUF5RTtBQUFBLG9CQUFJSDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILEdBQXFHLEVBRi9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBTUQ7QUFFRixDQXBCRDs7R0FBTUgsWTs7S0FBQUEsWTtBQXNCU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbGxlcnlJbWFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEdhbGxlcnlJbWFnZSA9ICh7IGltYWdlLCBvcmllbnRhdGlvbiwgY2FwdGlvbiwgaGVybyB9KSA9PiB7XG5cbiAgY29uc3QgWyBjYXB0aW9uVmlzaWJpbGl0eSwgc2V0Q2FwdGlvblZpc2liaWxpdHkgXSA9IHVzZVN0YXRlKCdoaWRkZW4nKTtcblxuICBpZiAob3JpZW50YXRpb24gPT0gJ1BvcnRyYWl0Jykge1xuICAgIHJldHVybihcbiAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ2FsbGVyeS1pbWFnZVwiIHNtPVwiNlwiIG1kPVwiNlwiIGxnPVwiNlwiIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Q2FwdGlvblZpc2liaWxpdHkoJ3Zpc2libGUnKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRDYXB0aW9uVmlzaWJpbGl0eSgnaGlkZGVuJyl9PlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgIHtjYXB0aW9uID8gPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jYXB0aW9uXCIgc3R5bGU9e3sgdmlzaWJpbGl0eTogY2FwdGlvblZpc2liaWxpdHkgfX0+PHA+e2NhcHRpb259PC9wPjwvZGl2PiA6ICcnfVxuICAgICAgPC9Db2w+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sIGNsYXNzTmFtZT1cImdhbGxlcnktaW1hZ2VcIiBzbT1cIjEyXCIgbWQ9XCIxMlwiIGxnPVwiMTJcIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldENhcHRpb25WaXNpYmlsaXR5KCd2aXNpYmxlJyl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0Q2FwdGlvblZpc2liaWxpdHkoJ2hpZGRlbicpfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICB7Y2FwdGlvbiA/IDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY2FwdGlvblwiIHN0eWxlPXt7IHZpc2liaWxpdHk6IGNhcHRpb25WaXNpYmlsaXR5IH19PjxwPntjYXB0aW9ufTwvcD48L2Rpdj4gOiAnJ31cbiAgICAgIDwvQ29sPlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlJbWFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GalleryImage.js\n");

/***/ })

})