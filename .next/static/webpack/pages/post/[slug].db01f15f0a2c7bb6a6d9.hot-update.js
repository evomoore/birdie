webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/ImageGallery.js":
/*!************************************!*\
  !*** ./components/ImageGallery.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cool-dimensions */ \"./node_modules/react-cool-dimensions/dist/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/a206613345/Desktop/Birdie/birdie-site/birdie-frontend/birdie-app/components/ImageGallery.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ImageGallery = function ImageGallery(_ref) {\n  _s();\n\n  var post = _ref.post,\n      windowWidth = _ref.windowWidth,\n      setImagesHeight = _ref.setImagesHeight;\n\n  var _useDimensions = Object(react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    onResize: function onResize(_ref2) {\n      var width = _ref2.width,\n          height = _ref2.height,\n          entry = _ref2.entry,\n          unobserve = _ref2.unobserve,\n          observe = _ref2.observe;\n      // Triggered whenever the size of the target is changed\n      setImagesHeight(height);\n    }\n  }),\n      ref = _useDimensions.ref,\n      width = _useDimensions.width,\n      height = _useDimensions.height,\n      entry = _useDimensions.entry,\n      unobserve = _useDimensions.unobserve,\n      observe = _useDimensions.observe;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('hidden'),\n      captionVisibility = _useState[0],\n      setCaptionVisibility = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    ref: ref,\n    className: \"post-images\",\n    sm: \"7\",\n    med: \"7\",\n    lg: \"7\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: \"image-gallery\",\n      sm: \"12\",\n      med: \"12\",\n      lg: \"12\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        fluid: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          children: [windowWidth > 576 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"gallery-image\",\n            sm: \"12\",\n            md: \"12\",\n            lg: \"12\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: post.Heroes.Landscape.formats.medium.url\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 91\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 36\n          }, _this) : '', post.Images.Image.map(function (image) {\n            if (image.Orientation == 'Portrait') {\n              var _image$Image;\n\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"gallery-image\",\n                sm: \"6\",\n                md: \"6\",\n                lg: \"6\",\n                onHover: setCaptionVisibility('visible'),\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: (_image$Image = image.Image) === null || _image$Image === void 0 ? void 0 : _image$Image.formats.medium.url\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 28,\n                  columnNumber: 23\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"image-caption\",\n                  style: {\n                    visibility: captionVisibility\n                  },\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: \"This is where the caption goes.\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 29,\n                    columnNumber: 96\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 29,\n                  columnNumber: 23\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 21\n              }, _this);\n            } else {\n              var _image$Image2;\n\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"gallery-image\",\n                sm: \"12\",\n                md: \"12\",\n                lg: \"12\",\n                onHover: setCaptionVisibility('visible'),\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: (_image$Image2 = image.Image) === null || _image$Image2 === void 0 ? void 0 : _image$Image2.formats.medium.url\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 23\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"image-caption\",\n                  style: {\n                    visibility: captionVisibility\n                  },\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: \"This is where the caption goes.\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 36,\n                    columnNumber: 96\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 36,\n                  columnNumber: 23\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 21\n              }, _this);\n            }\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ImageGallery, \"kU5ARonWg9jMeEn3ev4lhIeyjhE=\", false, function () {\n  return [react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = ImageGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageGallery);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageGallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnkuanM/MDI5OSJdLCJuYW1lcyI6WyJJbWFnZUdhbGxlcnkiLCJwb3N0Iiwid2luZG93V2lkdGgiLCJzZXRJbWFnZXNIZWlnaHQiLCJ1c2VEaW1lbnNpb25zIiwib25SZXNpemUiLCJ3aWR0aCIsImhlaWdodCIsImVudHJ5IiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInJlZiIsInVzZVN0YXRlIiwiY2FwdGlvblZpc2liaWxpdHkiLCJzZXRDYXB0aW9uVmlzaWJpbGl0eSIsIkhlcm9lcyIsIkxhbmRzY2FwZSIsImZvcm1hdHMiLCJtZWRpdW0iLCJ1cmwiLCJJbWFnZXMiLCJJbWFnZSIsIm1hcCIsImltYWdlIiwiT3JpZW50YXRpb24iLCJ2aXNpYmlsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQTRDO0FBQUE7O0FBQUEsTUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DQyxXQUFtQyxRQUFuQ0EsV0FBbUM7QUFBQSxNQUF0QkMsZUFBc0IsUUFBdEJBLGVBQXNCOztBQUFBLHVCQUNMQyxxRUFBYSxDQUFDO0FBQ3RFQyxZQUFRLEVBQUUseUJBQWtEO0FBQUEsVUFBL0NDLEtBQStDLFNBQS9DQSxLQUErQztBQUFBLFVBQXhDQyxNQUF3QyxTQUF4Q0EsTUFBd0M7QUFBQSxVQUFoQ0MsS0FBZ0MsU0FBaENBLEtBQWdDO0FBQUEsVUFBekJDLFNBQXlCLFNBQXpCQSxTQUF5QjtBQUFBLFVBQWRDLE9BQWMsU0FBZEEsT0FBYztBQUMxRDtBQUNBUCxxQkFBZSxDQUFDSSxNQUFELENBQWY7QUFDRDtBQUpxRSxHQUFELENBRFI7QUFBQSxNQUN2REksR0FEdUQsa0JBQ3ZEQSxHQUR1RDtBQUFBLE1BQ2xETCxLQURrRCxrQkFDbERBLEtBRGtEO0FBQUEsTUFDM0NDLE1B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QUFBO0FBQUE7QUFBQSx1QkFERjtBQU1EO0FBQ0YsV0FoQkQsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQXhDRDs7R0FBTWIsWTtVQUNzREksNkQ7OztLQUR0REosWTtBQTBDU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwicmVhY3QtY29vbC1kaW1lbnNpb25zXCI7XG5cbmNvbnN0IEltYWdlR2FsbGVyeSA9ICh7IHBvc3QsIHdpbmRvd1dpZHRoLCBzZXRJbWFnZXNIZWlnaHQgfSkgPT4ge1xuICBjb25zdCB7IHJlZiwgd2lkdGgsIGhlaWdodCwgZW50cnksIHVub2JzZXJ2ZSwgb2JzZXJ2ZSB9ID0gdXNlRGltZW5zaW9ucyh7XG4gICAgb25SZXNpemU6ICh7IHdpZHRoLCBoZWlnaHQsIGVudHJ5LCB1bm9ic2VydmUsIG9ic2VydmUgfSkgPT4ge1xuICAgICAgLy8gVHJpZ2dlcmVkIHdoZW5ldmVyIHRoZSBzaXplIG9mIHRoZSB0YXJnZXQgaXMgY2hhbmdlZFxuICAgICAgc2V0SW1hZ2VzSGVpZ2h0KGhlaWdodClcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBbY2FwdGlvblZpc2liaWxpdHksIHNldENhcHRpb25WaXNpYmlsaXR5XSA9IHVzZVN0YXRlKCdoaWRkZW4nKVxuXG4gIHJldHVybiAoXG4gICAgPENvbCByZWY9e3JlZn0gY2xhc3NOYW1lPVwicG9zdC1pbWFnZXNcIiBzbT1cIjdcIiBtZWQ9XCI3XCIgbGc9XCI3XCI+XG4gICAgICA8Q29sIGNsYXNzTmFtZT1cImltYWdlLWdhbGxlcnlcIiBzbT1cIjEyXCIgbWVkPVwiMTJcIiBsZz1cIjEyXCI+XG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIHsod2luZG93V2lkdGggPiA1NzYpID8gPENvbCBjbGFzc05hbWU9XCJnYWxsZXJ5LWltYWdlXCIgc209XCIxMlwiIG1kPVwiMTJcIiBsZz1cIjEyXCI+PGltZyBzcmM9e3Bvc3QuSGVyb2VzLkxhbmRzY2FwZS5mb3JtYXRzLm1lZGl1bS51cmx9IC8+PC9Db2w+IDogJyd9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBvc3QuSW1hZ2VzLkltYWdlLm1hcChpbWFnZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlLk9yaWVudGF0aW9uID09ICdQb3J0cmFpdCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJnYWxsZXJ5LWltYWdlXCIgc209XCI2XCIgbWQ9XCI2XCIgbGc9XCI2XCIgb25Ib3Zlcj17c2V0Q2FwdGlvblZpc2liaWxpdHkoJ3Zpc2libGUnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLkltYWdlPy5mb3JtYXRzLm1lZGl1bS51cmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jYXB0aW9uXCIgc3R5bGU9e3sgdmlzaWJpbGl0eTogY2FwdGlvblZpc2liaWxpdHkgfX0+PHA+VGhpcyBpcyB3aGVyZSB0aGUgY2FwdGlvbiBnb2VzLjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ2FsbGVyeS1pbWFnZVwiIHNtPVwiMTJcIiBtZD1cIjEyXCIgbGc9XCIxMlwiIG9uSG92ZXI9e3NldENhcHRpb25WaXNpYmlsaXR5KCd2aXNpYmxlJyl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZS5JbWFnZT8uZm9ybWF0cy5tZWRpdW0udXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY2FwdGlvblwiIHN0eWxlPXt7IHZpc2liaWxpdHk6IGNhcHRpb25WaXNpYmlsaXR5IH19PjxwPlRoaXMgaXMgd2hlcmUgdGhlIGNhcHRpb24gZ29lcy48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0NvbD5cbiAgICA8L0NvbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdhbGxlcnlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ImageGallery.js\n");

/***/ })

})