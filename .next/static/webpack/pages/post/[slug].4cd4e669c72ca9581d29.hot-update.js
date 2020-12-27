webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/ImageGallery.js":
/*!************************************!*\
  !*** ./components/ImageGallery.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cool-dimensions */ \"./node_modules/react-cool-dimensions/dist/index.esm.js\");\n/* harmony import */ var _components_GalleryImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GalleryImage */ \"./components/GalleryImage.js\");\n\n\n\nvar _jsxFileName = \"/Users/a206613345/Desktop/Birdie/birdie-site/birdie-frontend/birdie-app/components/ImageGallery.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar ImageGallery = function ImageGallery(_ref) {\n  _s();\n\n  var _post$Heroes$Landscap;\n\n  var post = _ref.post,\n      windowWidth = _ref.windowWidth,\n      setImagesHeight = _ref.setImagesHeight,\n      hero = _ref.hero;\n\n  var _useDimensions = Object(react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    onResize: function onResize(_ref2) {\n      var width = _ref2.width,\n          height = _ref2.height,\n          entry = _ref2.entry,\n          unobserve = _ref2.unobserve,\n          observe = _ref2.observe;\n      // Triggered whenever the size of the target is changed\n      setImagesHeight(height);\n    }\n  }),\n      ref = _useDimensions.ref,\n      width = _useDimensions.width,\n      height = _useDimensions.height,\n      entry = _useDimensions.entry,\n      unobserve = _useDimensions.unobserve,\n      observe = _useDimensions.observe;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('hidden'),\n      captionVisibility = _useState[0],\n      setCaptionVisibility = _useState[1];\n\n  var key_counter = 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      ref: ref,\n      className: \"post-images\",\n      sm: \"8\",\n      med: \"8\",\n      lg: \"8\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"image-gallery\",\n        sm: \"12\",\n        med: \"12\",\n        lg: \"12\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          fluid: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [windowWidth > 576 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                children: \"Here\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 40\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_GalleryImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                image: hero,\n                orientation: 'Landscape',\n                caption: (_post$Heroes$Landscap = post.Heroes.Landscape) === null || _post$Heroes$Landscap === void 0 ? void 0 : _post$Heroes$Landscap.caption\n              }, key_counter, false, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 53\n              }, _this)]\n            }, void 0, true) : '', post.Images.Image.map(function (image) {\n              key_counter++;\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_GalleryImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                image: image.Image.formats.medium.url,\n                orientation: image.Orientation,\n                caption: image.Caption\n              }, key_counter, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 21\n              }, _this);\n            })]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ImageGallery, \"kU5ARonWg9jMeEn3ev4lhIeyjhE=\", false, function () {\n  return [react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = ImageGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageGallery);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageGallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnkuanM/MDI5OSJdLCJuYW1lcyI6WyJJbWFnZUdhbGxlcnkiLCJwb3N0Iiwid2luZG93V2lkdGgiLCJzZXRJbWFnZXNIZWlnaHQiLCJoZXJvIiwidXNlRGltZW5zaW9ucyIsIm9uUmVzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJlbnRyeSIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJyZWYiLCJ1c2VTdGF0ZSIsImNhcHRpb25WaXNpYmlsaXR5Iiwic2V0Q2FwdGlvblZpc2liaWxpdHkiLCJrZXlfY291bnRlciIsIkhlcm9lcyIsIkxhbmRzY2FwZSIsImNhcHRpb24iLCJJbWFnZXMiLCJJbWFnZSIsIm1hcCIsImltYWdlIiwiZm9ybWF0cyIsIm1lZGl1bSIsInVybCIsIk9yaWVudGF0aW9uIiwiQ2FwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUEvQ0MsSUFBK0MsUUFBL0NBLElBQStDO0FBQUEsTUFBekNDLFdBQXlDLFFBQXpDQSxXQUF5QztBQUFBLE1BQTVCQyxlQUE0QixRQUE1QkEsZUFBNEI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsdUJBQ1hDLHFFQUFhLENBQUM7QUFDdEVDLFlBQVEsRUFBRSx5QkFBa0Q7QUFBQSxVQUEvQ0MsS0FBK0MsU0FBL0NBLEtBQStDO0FBQUEsVUFBeENDLE1BQXdDLFNBQXhDQSxNQUF3QztBQUFBLFVBQWhDQyxLQUFnQyxTQUFoQ0EsS0FBZ0M7QUFBQSxVQUF6QkMsU0FBeUIsU0FBekJBLFNBQXlCO0FBQUEsVUFBZEMsT0FBYyxTQUFkQSxPQUFjO0FBQzFEO0FBQ0FSLHFCQUFlLENBQUNLLE1BQUQsQ0FBZjtBQUNEO0FBSnFFLEdBQUQsQ0FERjtBQUFBLE1BQzdESSxHQUQ2RCxrQkFDN0RBLEdBRDZEO0FBQUEsTUFDeERMLEtBRHdELGtCQUN4REEsS0FEd0Q7QUFBQSxNQUNqREMsTUFEaUQsa0JBQ2pEQSxNQURpRDtBQUFBLE1BQ3pDQyxLQUR5QyxrQkFDekNBLEtBRHlDO0FBQUEsTUFDbENDLFNBRGtDLGtCQUNsQ0EsU0FEa0M7QUFBQSxNQUN2QkMsT0FEdUIsa0JBQ3ZCQSxPQUR1Qjs7QUFBQSxrQkFRbkJFLHNEQUFRLENBQUMsUUFBRCxDQVJXO0FBQUEsTUFROURDLGlCQVI4RDtBQUFBLE1BUTNDQyxvQkFSMkM7O0FBVXJFLE1BQUlDLFdBQVcsR0FBRyxDQUFsQjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsMkRBQUQ7QUFBSyxTQUFHLEVBQUVKLEdBQVY7QUFBZSxlQUFTLEVBQUMsYUFBekI7QUFBdUMsUUFBRSxFQUFDLEdBQTFDO0FBQThDLFNBQUcsRUFBQyxHQUFsRDtBQUFzRCxRQUFFLEVBQUMsR0FBekQ7QUFBQSw2QkFDRSxxRUFBQywyREFBRDtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUErQixVQUFFLEVBQUMsSUFBbEM7QUFBdUMsV0FBRyxFQUFDLElBQTNDO0FBQWdELFVBQUUsRUFBQyxJQUFuRDtBQUFBLCtCQUNFLHFFQUFDLGlFQUFEO0FBQVcsZUFBSyxNQUFoQjtBQUFBLGlDQUNFLHFFQUFDLDJEQUFEO0FBQUEsdUJBQ0lWLFdBQVcsR0FBRyxHQUFmLGdCQUFzQjtBQUFBLHNDQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFGLGVBQWUscUVBQUMsZ0VBQUQ7QUFBZ0MscUJBQUssRUFBRUUsSUFBdkM7QUFBNkMsMkJBQVcsRUFBRSxXQUExRDtBQUF1RSx1QkFBTywyQkFBRUgsSUFBSSxDQUFDZ0IsTUFBTCxDQUFZQyxTQUFkLDBEQUFFLHNCQUF1QkM7QUFBdkcsaUJBQW1CSCxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFmO0FBQUEsNEJBQXRCLEdBQTZKLEVBRGhLLEVBR0lmLElBQUksQ0FBQ21CLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQUMsS0FBSyxFQUFJO0FBQzdCUCx5QkFBVztBQUNYLGtDQUNFLHFFQUFDLGdFQUFEO0FBQWdDLHFCQUFLLEVBQUVPLEtBQUssQ0FBQ0YsS0FBTixDQUFZRyxPQUFaLENBQW9CQyxNQUFwQixDQUEyQkMsR0FBbEU7QUFBdUUsMkJBQVcsRUFBRUgsS0FBSyxDQUFDSSxXQUExRjtBQUF1Ryx1QkFBTyxFQUFFSixLQUFLLENBQUNLO0FBQXRILGlCQUFtQlosV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQUdELGFBTEQsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXFCRCxDQWpDRDs7R0FBTWhCLFk7VUFDc0RLLDZEOzs7S0FEdERMLFk7QUFtQ1NBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSBcInJlYWN0LWNvb2wtZGltZW5zaW9uc1wiO1xuaW1wb3J0IEdhbGxlcnlJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcnlJbWFnZSdcblxuY29uc3QgSW1hZ2VHYWxsZXJ5ID0gKHsgcG9zdCwgd2luZG93V2lkdGgsIHNldEltYWdlc0hlaWdodCwgaGVybyB9KSA9PiB7XG4gIGNvbnN0IHsgcmVmLCB3aWR0aCwgaGVpZ2h0LCBlbnRyeSwgdW5vYnNlcnZlLCBvYnNlcnZlIH0gPSB1c2VEaW1lbnNpb25zKHtcbiAgICBvblJlc2l6ZTogKHsgd2lkdGgsIGhlaWdodCwgZW50cnksIHVub2JzZXJ2ZSwgb2JzZXJ2ZSB9KSA9PiB7XG4gICAgICAvLyBUcmlnZ2VyZWQgd2hlbmV2ZXIgdGhlIHNpemUgb2YgdGhlIHRhcmdldCBpcyBjaGFuZ2VkXG4gICAgICBzZXRJbWFnZXNIZWlnaHQoaGVpZ2h0KVxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IFtjYXB0aW9uVmlzaWJpbGl0eSwgc2V0Q2FwdGlvblZpc2liaWxpdHldID0gdXNlU3RhdGUoJ2hpZGRlbicpXG5cbiAgbGV0IGtleV9jb3VudGVyID0gMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29sIHJlZj17cmVmfSBjbGFzc05hbWU9XCJwb3N0LWltYWdlc1wiIHNtPVwiOFwiIG1lZD1cIjhcIiBsZz1cIjhcIj5cbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJpbWFnZS1nYWxsZXJ5XCIgc209XCIxMlwiIG1lZD1cIjEyXCIgbGc9XCIxMlwiPlxuICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICB7KHdpbmRvd1dpZHRoID4gNTc2KSA/IDw+PGgxPkhlcmU8L2gxPjxHYWxsZXJ5SW1hZ2Uga2V5PXtrZXlfY291bnRlcn0gaW1hZ2U9e2hlcm99IG9yaWVudGF0aW9uPXsnTGFuZHNjYXBlJ30gY2FwdGlvbj17cG9zdC5IZXJvZXMuTGFuZHNjYXBlPy5jYXB0aW9ufSAvPjwvPiA6ICcnfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9zdC5JbWFnZXMuSW1hZ2UubWFwKGltYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgIGtleV9jb3VudGVyKytcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxHYWxsZXJ5SW1hZ2Uga2V5PXtrZXlfY291bnRlcn0gaW1hZ2U9e2ltYWdlLkltYWdlLmZvcm1hdHMubWVkaXVtLnVybH0gb3JpZW50YXRpb249e2ltYWdlLk9yaWVudGF0aW9ufSBjYXB0aW9uPXtpbWFnZS5DYXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvQ29sPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlR2FsbGVyeVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImageGallery.js\n");

/***/ })

})