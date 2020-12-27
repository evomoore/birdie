webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _components_PostListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostListing */ \"./components/PostListing.js\");\n\n\nvar _jsxFileName = \"/Users/a206613345/Desktop/Birdie/birdie-site/birdie-frontend/birdie-app/components/PostList.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar PostList = function PostList(_ref) {\n  var posts = _ref.posts,\n      destinations = _ref.destinations;\n  var postCounter = 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"posts-container\",\n    fluid: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: posts.map(function (post) {\n        var _post$Destination;\n\n        var parent_destination = false;\n\n        if ((_post$Destination = post.Destination) === null || _post$Destination === void 0 ? void 0 : _post$Destination.parent_destination) {\n          parent_destination = destinations.filter(function id(destination) {\n            return destination.id == post.Destination.parent_destination;\n          })[0];\n        }\n\n        if (postCounter % 3 == 0) {\n          console.log(\"PostCounter Remainder\");\n          console.log(postCounter % 3);\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_PostListing__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            post: post,\n            parent_destination: parent_destination,\n            orientation: 'Landscape'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 17\n          }, _this);\n        } else {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_PostListing__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            post: post,\n            parent_destination: parent_destination,\n            orientation: 'Portrait'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 17\n          }, _this);\n        }\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGlzdC5qcz84MWI4Il0sIm5hbWVzIjpbIlBvc3RMaXN0IiwicG9zdHMiLCJkZXN0aW5hdGlvbnMiLCJwb3N0Q291bnRlciIsIm1hcCIsInBvc3QiLCJwYXJlbnRfZGVzdGluYXRpb24iLCJEZXN0aW5hdGlvbiIsImZpbHRlciIsImlkIiwiZGVzdGluYXRpb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE2QjtBQUFBLE1BQTFCQyxLQUEwQixRQUExQkEsS0FBMEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBRTVDLE1BQUlDLFdBQVcsR0FBRyxDQUFsQjtBQUVBLHNCQUNFLHFFQUFDLGlFQUFEO0FBQVcsYUFBUyxFQUFDLGlCQUFyQjtBQUF1QyxTQUFLLE1BQTVDO0FBQUEsMkJBQ0UscUVBQUMsMkRBQUQ7QUFBQSxnQkFFSUYsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQUMsSUFBSSxFQUFJO0FBQUE7O0FBRWhCLFlBQUlDLGtCQUFrQixHQUFHLEtBQXpCOztBQUVBLGlDQUFJRCxJQUFJLENBQUNFLFdBQVQsc0RBQUksa0JBQWtCRCxrQkFBdEIsRUFBMEM7QUFDeENBLDRCQUFrQixHQUFHSixZQUFZLENBQUNNLE1BQWIsQ0FBb0IsU0FBU0MsRUFBVCxDQUFZQyxXQUFaLEVBQXlCO0FBQ2hFLG1CQUFPQSxXQUFXLENBQUNELEVBQVosSUFBa0JKLElBQUksQ0FBQ0UsV0FBTCxDQUFpQkQsa0JBQTFDO0FBQ0QsV0FGb0IsRUFFbEIsQ0FGa0IsQ0FBckI7QUFHRDs7QUFFRCxZQUFLSCxXQUFXLEdBQUcsQ0FBZixJQUFxQixDQUF6QixFQUE0QjtBQUMxQlEsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0FELGlCQUFPLENBQUNDLEdBQVIsQ0FBYVQsV0FBVyxHQUFHLENBQTNCO0FBQ0EsOEJBQ0UscUVBQUMsK0RBQUQ7QUFBYSxnQkFBSSxFQUFFRSxJQUFuQjtBQUF5Qiw4QkFBa0IsRUFBRUMsa0JBQTdDO0FBQWlFLHVCQUFXLEVBQUU7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUdELFNBTkQsTUFNTztBQUNMLDhCQUNFLHFFQUFDLCtEQUFEO0FBQWEsZ0JBQUksRUFBRUQsSUFBbkI7QUFBeUIsOEJBQWtCLEVBQUVDLGtCQUE3QztBQUFpRSx1QkFBVyxFQUFFO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFHRDtBQUNGLE9BckJEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQWxDRDs7S0FBTU4sUTtBQW9DU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IFBvc3RMaXN0aW5nIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdExpc3RpbmcnXG5cbmNvbnN0IFBvc3RMaXN0ID0gKHsgcG9zdHMsIGRlc3RpbmF0aW9ucyB9KSA9PiB7XG5cbiAgbGV0IHBvc3RDb3VudGVyID0gMDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyXCIgZmx1aWQ+XG4gICAgICA8Um93PlxuICAgICAgICB7XG4gICAgICAgICAgcG9zdHMubWFwKHBvc3QgPT4ge1xuXG4gICAgICAgICAgICBsZXQgcGFyZW50X2Rlc3RpbmF0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChwb3N0LkRlc3RpbmF0aW9uPy5wYXJlbnRfZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgICAgcGFyZW50X2Rlc3RpbmF0aW9uID0gZGVzdGluYXRpb25zLmZpbHRlcihmdW5jdGlvbiBpZChkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXN0aW5hdGlvbi5pZCA9PSBwb3N0LkRlc3RpbmF0aW9uLnBhcmVudF9kZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgfSlbMF1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKChwb3N0Q291bnRlciAlIDMpID09IDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQb3N0Q291bnRlciBSZW1haW5kZXJcIilcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coKHBvc3RDb3VudGVyICUgMykpXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFBvc3RMaXN0aW5nIHBvc3Q9e3Bvc3R9IHBhcmVudF9kZXN0aW5hdGlvbj17cGFyZW50X2Rlc3RpbmF0aW9ufSBvcmllbnRhdGlvbj17J0xhbmRzY2FwZSd9IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFBvc3RMaXN0aW5nIHBvc3Q9e3Bvc3R9IHBhcmVudF9kZXN0aW5hdGlvbj17cGFyZW50X2Rlc3RpbmF0aW9ufSBvcmllbnRhdGlvbj17J1BvcnRyYWl0J30gLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostList.js\n");

/***/ })

})