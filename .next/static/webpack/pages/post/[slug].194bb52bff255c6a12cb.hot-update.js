webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/ImageGallery.js":
/*!************************************!*\
  !*** ./components/ImageGallery.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cool-dimensions */ \"./node_modules/react-cool-dimensions/dist/index.esm.js\");\n/* harmony import */ var _components_GalleryImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GalleryImage */ \"./components/GalleryImage.js\");\n\n\nvar _jsxFileName = \"/Users/a206613345/Desktop/Birdie/birdie-site/birdie-frontend/birdie-app/components/ImageGallery.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar ImageGallery = function ImageGallery(_ref) {\n  _s();\n\n  var _post$Heroes$Landscap;\n\n  var post = _ref.post,\n      windowWidth = _ref.windowWidth,\n      setImagesHeight = _ref.setImagesHeight,\n      hero = _ref.hero;\n\n  var _useDimensions = Object(react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    onResize: function onResize(_ref2) {\n      var width = _ref2.width,\n          height = _ref2.height,\n          entry = _ref2.entry,\n          unobserve = _ref2.unobserve,\n          observe = _ref2.observe;\n      // Triggered whenever the size of the target is changed\n      setImagesHeight(height);\n    }\n  }),\n      ref = _useDimensions.ref,\n      width = _useDimensions.width,\n      height = _useDimensions.height,\n      entry = _useDimensions.entry,\n      unobserve = _useDimensions.unobserve,\n      observe = _useDimensions.observe;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('hidden'),\n      captionVisibility = _useState[0],\n      setCaptionVisibility = _useState[1];\n\n  var key_counter = 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    ref: ref,\n    className: \"post-images\",\n    sm: \"8\",\n    med: \"8\",\n    lg: \"8\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: \"image-gallery\",\n      sm: \"12\",\n      med: \"12\",\n      lg: \"12\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        fluid: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          children: [windowWidth > 576 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_GalleryImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            image: hero,\n            orientation: 'Landscape',\n            caption: (_post$Heroes$Landscap = post.Heroes.Landscape) === null || _post$Heroes$Landscap === void 0 ? void 0 : _post$Heroes$Landscap.caption\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 36\n          }, _this) : '', post.Images.Image.map(function (image) {\n            key_counter++;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_GalleryImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              image: image.Image.formats.medium.url,\n              orientation: image.Orientation,\n              caption: image.Caption\n            }, key_counter, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 19\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ImageGallery, \"kU5ARonWg9jMeEn3ev4lhIeyjhE=\", false, function () {\n  return [react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = ImageGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageGallery);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageGallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnkuanM/MDI5OSJdLCJuYW1lcyI6WyJJbWFnZUdhbGxlcnkiLCJwb3N0Iiwid2luZG93V2lkdGgiLCJzZXRJbWFnZXNIZWlnaHQiLCJoZXJvIiwidXNlRGltZW5zaW9ucyIsIm9uUmVzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJlbnRyeSIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJyZWYiLCJ1c2VTdGF0ZSIsImNhcHRpb25WaXNpYmlsaXR5Iiwic2V0Q2FwdGlvblZpc2liaWxpdHkiLCJrZXlfY291bnRlciIsIkhlcm9lcyIsIkxhbmRzY2FwZSIsImNhcHRpb24iLCJJbWFnZXMiLCJJbWFnZSIsIm1hcCIsImltYWdlIiwiZm9ybWF0cyIsIm1lZGl1bSIsInVybCIsIk9yaWVudGF0aW9uIiwiQ2FwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrRDtBQUFBOztBQUFBOztBQUFBLE1BQS9DQyxJQUErQyxRQUEvQ0EsSUFBK0M7QUFBQSxNQUF6Q0MsV0FBeUMsUUFBekNBLFdBQXlDO0FBQUEsTUFBNUJDLGVBQTRCLFFBQTVCQSxlQUE0QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSx1QkFDWEMscUVBQWEsQ0FBQztBQUN0RUMsWUFBUSxFQUFFLHlCQUFrRDtBQUFBLFVBQS9DQyxLQUErQyxTQUEvQ0EsS0FBK0M7QUFBQSxVQUF4Q0MsTUFBd0MsU0FBeENBLE1BQXdDO0FBQUEsVUFBaENDLEtBQWdDLFNBQWhDQSxLQUFnQztBQUFBLFVBQXpCQyxTQUF5QixTQUF6QkEsU0FBeUI7QUFBQSxVQUFkQyxPQUFjLFNBQWRBLE9BQWM7QUFDMUQ7QUFDQVIscUJBQWUsQ0FBQ0ssTUFBRCxDQUFmO0FBQ0Q7QUFKcUUsR0FBRCxDQURGO0FBQUEsTUFDN0RJLEdBRDZELGtCQUM3REEsR0FENkQ7QUFBQSxNQUN4REwsS0FEd0Qsa0JBQ3hEQSxLQUR3RDtBQUFBLE1BQ2pEQyxNQURpRCxrQkFDakRBLE1BRGlEO0FBQUEsTUFDekNDLEtBRHlDLGtCQUN6Q0EsS0FEeUM7QUFBQSxNQUNsQ0MsU0FEa0Msa0JBQ2xDQSxTQURrQztBQUFBLE1BQ3ZCQyxPQUR1QixrQkFDdkJBLE9BRHVCOztBQUFBLGtCQVFuQkUsc0RBQVEsQ0FBQyxRQUFELENBUlc7QUFBQSxNQVE5REMsaUJBUjhEO0FBQUEsTUFRM0NDLG9CQVIyQzs7QUFVckUsTUFBSUMsV0FBVyxHQUFHLENBQWxCO0FBRUEsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBSyxPQUFHLEVBQUVKLEdBQVY7QUFBZSxhQUFTLEVBQUMsYUFBekI7QUFBdUMsTUFBRSxFQUFDLEdBQTFDO0FBQThDLE9BQUcsRUFBQyxHQUFsRDtBQUFzRCxNQUFFLEVBQUMsR0FBekQ7QUFBQSwyQkFDRSxxRUFBQywyREFBRDtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQStCLFFBQUUsRUFBQyxJQUFsQztBQUF1QyxTQUFHLEVBQUMsSUFBM0M7QUFBZ0QsUUFBRSxFQUFDLElBQW5EO0FBQUEsNkJBQ0UscUVBQUMsaUVBQUQ7QUFBVyxhQUFLLE1BQWhCO0FBQUEsK0JBQ0UscUVBQUMsMkRBQUQ7QUFBQSxxQkFDSVYsV0FBVyxHQUFHLEdBQWYsZ0JBQXNCLHFFQUFDLGdFQUFEO0FBQWMsaUJBQUssRUFBRUUsSUFBckI7QUFBMkIsdUJBQVcsRUFBRSxXQUF4QztBQUFxRCxtQkFBTywyQkFBRUgsSUFBSSxDQUFDZ0IsTUFBTCxDQUFZQyxTQUFkLDBEQUFFLHNCQUF1QkM7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdEIsR0FBeUgsRUFENUgsRUFHSWxCLElBQUksQ0FBQ21CLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQUMsS0FBSyxFQUFJO0FBQzdCUCx1QkFBVztBQUNYLGdDQUNFLHFFQUFDLGdFQUFEO0FBQWdDLG1CQUFLLEVBQUVPLEtBQUssQ0FBQ0YsS0FBTixDQUFZRyxPQUFaLENBQW9CQyxNQUFwQixDQUEyQkMsR0FBbEU7QUFBdUUseUJBQVcsRUFBRUgsS0FBSyxDQUFDSSxXQUExRjtBQUF1RyxxQkFBTyxFQUFFSixLQUFLLENBQUNLO0FBQXRILGVBQW1CWixXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBR0QsV0FMRCxDQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBL0JEOztHQUFNaEIsWTtVQUNzREssNkQ7OztLQUR0REwsWTtBQWlDU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwicmVhY3QtY29vbC1kaW1lbnNpb25zXCI7XG5pbXBvcnQgR2FsbGVyeUltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvR2FsbGVyeUltYWdlJ1xuXG5jb25zdCBJbWFnZUdhbGxlcnkgPSAoeyBwb3N0LCB3aW5kb3dXaWR0aCwgc2V0SW1hZ2VzSGVpZ2h0LCBoZXJvIH0pID0+IHtcbiAgY29uc3QgeyByZWYsIHdpZHRoLCBoZWlnaHQsIGVudHJ5LCB1bm9ic2VydmUsIG9ic2VydmUgfSA9IHVzZURpbWVuc2lvbnMoe1xuICAgIG9uUmVzaXplOiAoeyB3aWR0aCwgaGVpZ2h0LCBlbnRyeSwgdW5vYnNlcnZlLCBvYnNlcnZlIH0pID0+IHtcbiAgICAgIC8vIFRyaWdnZXJlZCB3aGVuZXZlciB0aGUgc2l6ZSBvZiB0aGUgdGFyZ2V0IGlzIGNoYW5nZWRcbiAgICAgIHNldEltYWdlc0hlaWdodChoZWlnaHQpXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgW2NhcHRpb25WaXNpYmlsaXR5LCBzZXRDYXB0aW9uVmlzaWJpbGl0eV0gPSB1c2VTdGF0ZSgnaGlkZGVuJylcblxuICBsZXQga2V5X2NvdW50ZXIgPSAwO1xuXG4gIHJldHVybiAoXG4gICAgPENvbCByZWY9e3JlZn0gY2xhc3NOYW1lPVwicG9zdC1pbWFnZXNcIiBzbT1cIjhcIiBtZWQ9XCI4XCIgbGc9XCI4XCI+XG4gICAgICA8Q29sIGNsYXNzTmFtZT1cImltYWdlLWdhbGxlcnlcIiBzbT1cIjEyXCIgbWVkPVwiMTJcIiBsZz1cIjEyXCI+XG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIHsod2luZG93V2lkdGggPiA1NzYpID8gPEdhbGxlcnlJbWFnZSBpbWFnZT17aGVyb30gb3JpZW50YXRpb249eydMYW5kc2NhcGUnfSBjYXB0aW9uPXtwb3N0Lkhlcm9lcy5MYW5kc2NhcGU/LmNhcHRpb259IC8+IDogJyd9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBvc3QuSW1hZ2VzLkltYWdlLm1hcChpbWFnZSA9PiB7XG4gICAgICAgICAgICAgICAga2V5X2NvdW50ZXIrK1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8R2FsbGVyeUltYWdlIGtleT17a2V5X2NvdW50ZXJ9IGltYWdlPXtpbWFnZS5JbWFnZS5mb3JtYXRzLm1lZGl1bS51cmx9IG9yaWVudGF0aW9uPXtpbWFnZS5PcmllbnRhdGlvbn0gY2FwdGlvbj17aW1hZ2UuQ2FwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Db2w+XG4gICAgPC9Db2w+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHYWxsZXJ5XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ImageGallery.js\n");

/***/ })

})