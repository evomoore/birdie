webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/ImageGallery.js":
/*!************************************!*\
  !*** ./components/ImageGallery.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cool-dimensions */ \"./node_modules/react-cool-dimensions/dist/index.esm.js\");\n/* harmony import */ var _components_GalleryImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GalleryImage */ \"./components/GalleryImage.js\");\n\n\nvar _jsxFileName = \"/Users/a206613345/Desktop/Birdie/birdie-site/birdie-frontend/birdie-app/components/ImageGallery.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar ImageGallery = function ImageGallery(_ref) {\n  _s();\n\n  var post = _ref.post,\n      windowWidth = _ref.windowWidth,\n      setImagesHeight = _ref.setImagesHeight;\n\n  var _useDimensions = Object(react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    onResize: function onResize(_ref2) {\n      var width = _ref2.width,\n          height = _ref2.height,\n          entry = _ref2.entry,\n          unobserve = _ref2.unobserve,\n          observe = _ref2.observe;\n      // Triggered whenever the size of the target is changed\n      setImagesHeight(height);\n    }\n  }),\n      ref = _useDimensions.ref,\n      width = _useDimensions.width,\n      height = _useDimensions.height,\n      entry = _useDimensions.entry,\n      unobserve = _useDimensions.unobserve,\n      observe = _useDimensions.observe;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('hidden'),\n      captionVisibility = _useState[0],\n      setCaptionVisibility = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    ref: ref,\n    className: \"post-images\",\n    sm: \"7\",\n    med: \"7\",\n    lg: \"7\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: \"image-gallery\",\n      sm: \"12\",\n      med: \"12\",\n      lg: \"12\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        fluid: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          children: [windowWidth > 576 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"gallery-image\",\n            sm: \"12\",\n            md: \"12\",\n            lg: \"12\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: post.Heroes.Landscape.formats.medium.url\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 91\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 36\n          }, _this) : '', post.Images.Image.map(function (image) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_GalleryImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              image: image.Image.formats.medium.url,\n              orientation: image.Orientation,\n              caption: image.Caption\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 19\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ImageGallery, \"kU5ARonWg9jMeEn3ev4lhIeyjhE=\", false, function () {\n  return [react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = ImageGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageGallery);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageGallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnkuanM/MDI5OSJdLCJuYW1lcyI6WyJJbWFnZUdhbGxlcnkiLCJwb3N0Iiwid2luZG93V2lkdGgiLCJzZXRJbWFnZXNIZWlnaHQiLCJ1c2VEaW1lbnNpb25zIiwib25SZXNpemUiLCJ3aWR0aCIsImhlaWdodCIsImVudHJ5IiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInJlZiIsInVzZVN0YXRlIiwiY2FwdGlvblZpc2liaWxpdHkiLCJzZXRDYXB0aW9uVmlzaWJpbGl0eSIsIkhlcm9lcyIsIkxhbmRzY2FwZSIsImZvcm1hdHMiLCJtZWRpdW0iLCJ1cmwiLCJJbWFnZXMiLCJJbWFnZSIsIm1hcCIsImltYWdlIiwiT3JpZW50YXRpb24iLCJDYXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQTRDO0FBQUE7O0FBQUEsTUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DQyxXQUFtQyxRQUFuQ0EsV0FBbUM7QUFBQSxNQUF0QkMsZUFBc0IsUUFBdEJBLGVBQXNCOztBQUFBLHVCQUNMQyxxRUFBYSxDQUFDO0FBQ3RFQyxZQUFRLEVBQUUseUJBQWtEO0FBQUEsVUFBL0NDLEtBQStDLFNBQS9DQSxLQUErQztBQUFBLFVBQXhDQyxNQUF3QyxTQUF4Q0EsTUFBd0M7QUFBQSxVQUFoQ0MsS0FBZ0MsU0FBaENBLEtBQWdDO0FBQUEsVUFBekJDLFNBQXlCLFNBQXpCQSxTQUF5QjtBQUFBLFVBQWRDLE9BQWMsU0FBZEEsT0FBYztBQUMxRDtBQUNBUCxxQkFBZSxDQUFDSSxNQUFELENBQWY7QUFDRDtBQUpxRSxHQUFELENBRFI7QUFBQSxNQUN2REksR0FEdUQsa0JBQ3ZEQSxHQUR1RDtBQUFBLE1BQ2xETCxLQURrRCxrQkFDbERBLEtBRGtEO0FBQUEsTUFDM0NDLE1BRDJDLGtCQUMzQ0EsTUFEMkM7QUFBQSxNQUNuQ0MsS0FEbUMsa0JBQ25DQSxLQURtQztBQUFBLE1BQzVCQyxTQUQ0QixrQkFDNUJBLFNBRDRCO0FBQUEsTUFDakJDLE9BRGlCLGtCQUNqQkEsT0FEaUI7O0FBQUEsa0JBUWJFLHNEQUFRLENBQUMsUUFBRCxDQVJLO0FBQUEsTUFReERDLGlCQVJ3RDtBQUFBLE1BUXJDQyxvQkFScUM7O0FBVS9ELHNCQUNFLHFFQUFDLDJEQUFEO0FBQUssT0FBRyxFQUFFSCxHQUFWO0FBQWUsYUFBUyxFQUFDLGFBQXpCO0FBQXVDLE1BQUUsRUFBQyxHQUExQztBQUE4QyxPQUFHLEVBQUMsR0FBbEQ7QUFBc0QsTUFBRSxFQUFDLEdBQXpEO0FBQUEsMkJBQ0UscUVBQUMsMkRBQUQ7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUErQixRQUFFLEVBQUMsSUFBbEM7QUFBdUMsU0FBRyxFQUFDLElBQTNDO0FBQWdELFFBQUUsRUFBQyxJQUFuRDtBQUFBLDZCQUNFLHFFQUFDLGlFQUFEO0FBQVcsYUFBSyxNQUFoQjtBQUFBLCtCQUNFLHFFQUFDLDJEQUFEO0FBQUEscUJBQ0lULFdBQVcsR0FBRyxHQUFmLGdCQUFzQixxRUFBQywyREFBRDtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUErQixjQUFFLEVBQUMsSUFBbEM7QUFBdUMsY0FBRSxFQUFDLElBQTFDO0FBQStDLGNBQUUsRUFBQyxJQUFsRDtBQUFBLG1DQUF1RDtBQUFLLGlCQUFHLEVBQUVELElBQUksQ0FBQ2MsTUFBTCxDQUFZQyxTQUFaLENBQXNCQyxPQUF0QixDQUE4QkMsTUFBOUIsQ0FBcUNDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdEIsR0FBNEksRUFEL0ksRUFHSWxCLElBQUksQ0FBQ21CLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQUMsS0FBSyxFQUFJO0FBQzdCLGdDQUNFLHFFQUFDLGdFQUFEO0FBQWMsbUJBQUssRUFBRUEsS0FBSyxDQUFDRixLQUFOLENBQVlKLE9BQVosQ0FBb0JDLE1BQXBCLENBQTJCQyxHQUFoRDtBQUFxRCx5QkFBVyxFQUFFSSxLQUFLLENBQUNDLFdBQXhFO0FBQXFGLHFCQUFPLEVBQUVELEtBQUssQ0FBQ0U7QUFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQUdELFdBSkQsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQTVCRDs7R0FBTXpCLFk7VUFDc0RJLDZEOzs7S0FEdERKLFk7QUE4QlNBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSBcInJlYWN0LWNvb2wtZGltZW5zaW9uc1wiO1xuaW1wb3J0IEdhbGxlcnlJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcnlJbWFnZSdcblxuY29uc3QgSW1hZ2VHYWxsZXJ5ID0gKHsgcG9zdCwgd2luZG93V2lkdGgsIHNldEltYWdlc0hlaWdodCB9KSA9PiB7XG4gIGNvbnN0IHsgcmVmLCB3aWR0aCwgaGVpZ2h0LCBlbnRyeSwgdW5vYnNlcnZlLCBvYnNlcnZlIH0gPSB1c2VEaW1lbnNpb25zKHtcbiAgICBvblJlc2l6ZTogKHsgd2lkdGgsIGhlaWdodCwgZW50cnksIHVub2JzZXJ2ZSwgb2JzZXJ2ZSB9KSA9PiB7XG4gICAgICAvLyBUcmlnZ2VyZWQgd2hlbmV2ZXIgdGhlIHNpemUgb2YgdGhlIHRhcmdldCBpcyBjaGFuZ2VkXG4gICAgICBzZXRJbWFnZXNIZWlnaHQoaGVpZ2h0KVxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IFtjYXB0aW9uVmlzaWJpbGl0eSwgc2V0Q2FwdGlvblZpc2liaWxpdHldID0gdXNlU3RhdGUoJ2hpZGRlbicpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29sIHJlZj17cmVmfSBjbGFzc05hbWU9XCJwb3N0LWltYWdlc1wiIHNtPVwiN1wiIG1lZD1cIjdcIiBsZz1cIjdcIj5cbiAgICAgIDxDb2wgY2xhc3NOYW1lPVwiaW1hZ2UtZ2FsbGVyeVwiIHNtPVwiMTJcIiBtZWQ9XCIxMlwiIGxnPVwiMTJcIj5cbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgeyh3aW5kb3dXaWR0aCA+IDU3NikgPyA8Q29sIGNsYXNzTmFtZT1cImdhbGxlcnktaW1hZ2VcIiBzbT1cIjEyXCIgbWQ9XCIxMlwiIGxnPVwiMTJcIj48aW1nIHNyYz17cG9zdC5IZXJvZXMuTGFuZHNjYXBlLmZvcm1hdHMubWVkaXVtLnVybH0gLz48L0NvbD4gOiAnJ31cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcG9zdC5JbWFnZXMuSW1hZ2UubWFwKGltYWdlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEdhbGxlcnlJbWFnZSBpbWFnZT17aW1hZ2UuSW1hZ2UuZm9ybWF0cy5tZWRpdW0udXJsfSBvcmllbnRhdGlvbj17aW1hZ2UuT3JpZW50YXRpb259IGNhcHRpb249e2ltYWdlLkNhcHRpb259IC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ29sPlxuICAgIDwvQ29sPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlR2FsbGVyeVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImageGallery.js\n");

/***/ })

})