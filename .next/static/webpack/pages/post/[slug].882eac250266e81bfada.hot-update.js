webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/ImageGallery.js":
/*!************************************!*\
  !*** ./components/ImageGallery.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cool-dimensions */ \"./node_modules/react-cool-dimensions/dist/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/a206613345/Desktop/Birdie/birdie-site/birdie-frontend/birdie-app/components/ImageGallery.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ImageGallery = function ImageGallery(_ref) {\n  _s();\n\n  var post = _ref.post,\n      windowWidth = _ref.windowWidth,\n      setImagesHeight = _ref.setImagesHeight;\n\n  var _useDimensions = Object(react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    onResize: function onResize(_ref2) {\n      var width = _ref2.width,\n          height = _ref2.height,\n          entry = _ref2.entry,\n          unobserve = _ref2.unobserve,\n          observe = _ref2.observe;\n      // Triggered whenever the size of the target is changed\n      setImagesHeight(height);\n    }\n  }),\n      ref = _useDimensions.ref,\n      width = _useDimensions.width,\n      height = _useDimensions.height,\n      entry = _useDimensions.entry,\n      unobserve = _useDimensions.unobserve,\n      observe = _useDimensions.observe;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    ref: ref,\n    className: \"post-images\",\n    sm: \"7\",\n    med: \"7\",\n    lg: \"7\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: \"image-gallery\",\n      sm: \"12\",\n      med: \"12\",\n      lg: \"12\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        fluid: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          children: [windowWidth > 576 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"gallery-image\",\n            sm: \"12\",\n            md: \"12\",\n            lg: \"12\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: post.Heroes.Landscape.formats.medium.url\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 91\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 36\n          }, _this) : '', post.Images.Image.map(function (image) {\n            if (image.Orientation == 'Portrait') {\n              var _image$Image;\n\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"gallery-image\",\n                sm: \"6\",\n                md: \"6\",\n                lg: \"6\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: (_image$Image = image.Image) === null || _image$Image === void 0 ? void 0 : _image$Image.formats.medium.url\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 26,\n                  columnNumber: 23\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"image-caption\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: \"This is where the caption goes.\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 27,\n                    columnNumber: 54\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 27,\n                  columnNumber: 23\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 25,\n                columnNumber: 21\n              }, _this);\n            } else {\n              var _image$Image2;\n\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"gallery-image\",\n                sm: \"12\",\n                md: \"12\",\n                lg: \"12\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: (_image$Image2 = image.Image) === null || _image$Image2 === void 0 ? void 0 : _image$Image2.formats.medium.url\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 33,\n                  columnNumber: 23\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"image-caption\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: \"This is where the caption goes.\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 34,\n                    columnNumber: 54\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 34,\n                  columnNumber: 23\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 21\n              }, _this);\n            }\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ImageGallery, \"c8VXTCZAh6BN/OJoS556CNYzfQM=\", false, function () {\n  return [react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = ImageGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageGallery);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageGallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnkuanM/MDI5OSJdLCJuYW1lcyI6WyJJbWFnZUdhbGxlcnkiLCJwb3N0Iiwid2luZG93V2lkdGgiLCJzZXRJbWFnZXNIZWlnaHQiLCJ1c2VEaW1lbnNpb25zIiwib25SZXNpemUiLCJ3aWR0aCIsImhlaWdodCIsImVudHJ5IiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInJlZiIsIkhlcm9lcyIsIkxhbmRzY2FwZSIsImZvcm1hdHMiLCJtZWRpdW0iLCJ1cmwiLCJJbWFnZXMiLCJJbWFnZSIsIm1hcCIsImltYWdlIiwiT3JpZW50YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBNEM7QUFBQTs7QUFBQSxNQUF6Q0MsSUFBeUMsUUFBekNBLElBQXlDO0FBQUEsTUFBbkNDLFdBQW1DLFFBQW5DQSxXQUFtQztBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7O0FBQUEsdUJBQ0xDLHFFQUFhLENBQUM7QUFDdEVDLFlBQVEsRUFBRSx5QkFBa0Q7QUFBQSxVQUEvQ0MsS0FBK0MsU0FBL0NBLEtBQStDO0FBQUEsVUFBeENDLE1BQXdDLFNBQXhDQSxNQUF3QztBQUFBLFVBQWhDQyxLQUFnQyxTQUFoQ0EsS0FBZ0M7QUFBQSxVQUF6QkMsU0FBeUIsU0FBekJBLFNBQXlCO0FBQUEsVUFBZEMsT0FBYyxTQUFkQSxPQUFjO0FBQzFEO0FBQ0FQLHFCQUFlLENBQUNJLE1BQUQsQ0FBZjtBQUNEO0FBSnFFLEdBQUQsQ0FEUjtBQUFBLE1BQ3ZESSxHQUR1RCxrQkFDdkRBLEdBRHVEO0FBQUEsTUFDbERMLEtBRGtELGtCQUNsREEsS0FEa0Q7QUFBQSxNQUMzQ0MsTUFEMkMsa0JBQzNDQSxNQUQyQztBQUFBLE1BQ25DQyxLQURtQyxrQkFDbkNBLEtBRG1DO0FBQUEsTUFDNUJDLFNBRDRCLGtCQUM1QkEsU0FENEI7QUFBQSxNQUNqQkMsT0FEaUIsa0JBQ2pCQSxPQURpQjs7QUFRL0Qsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBSyxPQUFHLEVBQUVDLEdBQVY7QUFBZSxhQUFTLEVBQUMsYUFBekI7QUFBdUMsTUFBRSxFQUFDLEdBQTFDO0FBQThDLE9BQUcsRUFBQyxHQUFsRDtBQUFzRCxNQUFFLEVBQUMsR0FBekQ7QUFBQSwyQkFDRSxxRUFBQywyREFBRDtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQStCLFFBQUUsRUFBQyxJQUFsQztBQUF1QyxTQUFHLEVBQUMsSUFBM0M7QUFBZ0QsUUFBRSxFQUFDLElBQW5EO0FBQUEsNkJBQ0UscUVBQUMsaUVBQUQ7QUFBVyxhQUFLLE1BQWhCO0FBQUEsK0JBQ0UscUVBQUMsMkRBQUQ7QUFBQSxxQkFDSVQsV0FBVyxHQUFHLEdBQWYsZ0JBQXNCLHFFQUFDLDJEQUFEO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQStCLGNBQUUsRUFBQyxJQUFsQztBQUF1QyxjQUFFLEVBQUMsSUFBMUM7QUFBK0MsY0FBRSxFQUFDLElBQWxEO0FBQUEsbUNBQXVEO0FBQUssaUJBQUcsRUFBRUQsSUFBSSxDQUFDVyxNQUFMLENBQVlDLFNBQVosQ0FBc0JDLE9BQXRCLENBQThCQyxNQUE5QixDQUFxQ0M7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF0QixHQUE0SSxFQUQvSSxFQUdJZixJQUFJLENBQUNnQixNQUFMLENBQVlDLEtBQVosQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUFDLEtBQUssRUFBSTtBQUM3QixnQkFBSUEsS0FBSyxDQUFDQyxXQUFOLElBQXFCLFVBQXpCLEVBQXFDO0FBQUE7O0FBQ25DLGtDQUNFLHFFQUFDLDJEQUFEO0FBQUsseUJBQVMsRUFBQyxlQUFmO0FBQStCLGtCQUFFLEVBQUMsR0FBbEM7QUFBc0Msa0JBQUUsRUFBQyxHQUF6QztBQUE2QyxrQkFBRSxFQUFDLEdBQWhEO0FBQUEsd0NBQ0U7QUFBSyxxQkFBRyxrQkFBRUQsS0FBSyxDQUFDRixLQUFSLGlEQUFFLGFBQWFKLE9BQWIsQ0FBcUJDLE1BQXJCLENBQTRCQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBSywyQkFBUyxFQUFDLGVBQWY7QUFBQSx5Q0FBK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFNRCxhQVBELE1BT087QUFBQTs7QUFDTCxrQ0FDRSxxRUFBQywyREFBRDtBQUFLLHlCQUFTLEVBQUMsZUFBZjtBQUErQixrQkFBRSxFQUFDLElBQWxDO0FBQXVDLGtCQUFFLEVBQUMsSUFBMUM7QUFBK0Msa0JBQUUsRUFBQyxJQUFsRDtBQUFBLHdDQUNFO0FBQUsscUJBQUcsbUJBQUVJLEtBQUssQ0FBQ0YsS0FBUixrREFBRSxjQUFhSixPQUFiLENBQXFCQyxNQUFyQixDQUE0QkM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUssMkJBQVMsRUFBQyxlQUFmO0FBQUEseUNBQStCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBTUQ7QUFDRixXQWhCRCxDQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBdENEOztHQUFNaEIsWTtVQUNzREksNkQ7OztLQUR0REosWTtBQXdDU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwicmVhY3QtY29vbC1kaW1lbnNpb25zXCI7XG5cbmNvbnN0IEltYWdlR2FsbGVyeSA9ICh7IHBvc3QsIHdpbmRvd1dpZHRoLCBzZXRJbWFnZXNIZWlnaHQgfSkgPT4ge1xuICBjb25zdCB7IHJlZiwgd2lkdGgsIGhlaWdodCwgZW50cnksIHVub2JzZXJ2ZSwgb2JzZXJ2ZSB9ID0gdXNlRGltZW5zaW9ucyh7XG4gICAgb25SZXNpemU6ICh7IHdpZHRoLCBoZWlnaHQsIGVudHJ5LCB1bm9ic2VydmUsIG9ic2VydmUgfSkgPT4ge1xuICAgICAgLy8gVHJpZ2dlcmVkIHdoZW5ldmVyIHRoZSBzaXplIG9mIHRoZSB0YXJnZXQgaXMgY2hhbmdlZFxuICAgICAgc2V0SW1hZ2VzSGVpZ2h0KGhlaWdodClcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxDb2wgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cInBvc3QtaW1hZ2VzXCIgc209XCI3XCIgbWVkPVwiN1wiIGxnPVwiN1wiPlxuICAgICAgPENvbCBjbGFzc05hbWU9XCJpbWFnZS1nYWxsZXJ5XCIgc209XCIxMlwiIG1lZD1cIjEyXCIgbGc9XCIxMlwiPlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICB7KHdpbmRvd1dpZHRoID4gNTc2KSA/IDxDb2wgY2xhc3NOYW1lPVwiZ2FsbGVyeS1pbWFnZVwiIHNtPVwiMTJcIiBtZD1cIjEyXCIgbGc9XCIxMlwiPjxpbWcgc3JjPXtwb3N0Lkhlcm9lcy5MYW5kc2NhcGUuZm9ybWF0cy5tZWRpdW0udXJsfSAvPjwvQ29sPiA6ICcnfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwb3N0LkltYWdlcy5JbWFnZS5tYXAoaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZS5PcmllbnRhdGlvbiA9PSAnUG9ydHJhaXQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ2FsbGVyeS1pbWFnZVwiIHNtPVwiNlwiIG1kPVwiNlwiIGxnPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZS5JbWFnZT8uZm9ybWF0cy5tZWRpdW0udXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY2FwdGlvblwiPjxwPlRoaXMgaXMgd2hlcmUgdGhlIGNhcHRpb24gZ29lcy48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImdhbGxlcnktaW1hZ2VcIiBzbT1cIjEyXCIgbWQ9XCIxMlwiIGxnPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UuSW1hZ2U/LmZvcm1hdHMubWVkaXVtLnVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNhcHRpb25cIj48cD5UaGlzIGlzIHdoZXJlIHRoZSBjYXB0aW9uIGdvZXMuPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Db2w+XG4gICAgPC9Db2w+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHYWxsZXJ5XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ImageGallery.js\n");

/***/ })

})