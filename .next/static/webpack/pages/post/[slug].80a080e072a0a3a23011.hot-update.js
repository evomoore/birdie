webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_ImageGallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ImageGallery */ \"./components/ImageGallery.js\");\n/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @n8tb1t/use-scroll-position */ \"./node_modules/@n8tb1t/use-scroll-position/lib/index.js\");\n/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_cool_dimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cool-dimensions */ \"./node_modules/react-cool-dimensions/dist/index.esm.js\");\n/* harmony import */ var _functions_useWindowDimensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../functions/useWindowDimensions */ \"./functions/useWindowDimensions.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_PostCarousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/PostCarousel */ \"./components/PostCarousel.js\");\n/* harmony import */ var _components_GalleryImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/GalleryImage */ \"./components/GalleryImage.js\");\n\n\n\nvar _jsxFileName = \"/Users/a206613345/Desktop/Birdie/birdie-site/birdie-frontend/birdie-app/pages/post/[slug].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var post = _ref.post,\n      carousel_data = _ref.carousel_data;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var slug = router.query.slug;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(null),\n      imagesHeight = _useState[0],\n      setImagesHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(null),\n      bodyHeight = _useState2[0],\n      setBodyHeight = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])('fixed !important'),\n      bodyPosition = _useState3[0],\n      setBodyPosition = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(null),\n      bodyTop = _useState4[0],\n      setBodyTop = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])({\n    top: 100\n  }),\n      textBodyTop = _useState5[0],\n      setTextBodyTop = _useState5[1];\n\n  var _useDimensions = Object(react_cool_dimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n    onResize: function onResize(_ref2) {// Triggered whenever the size of the target is changed\n\n      var width = _ref2.width,\n          height = _ref2.height,\n          entry = _ref2.entry,\n          unobserve = _ref2.unobserve,\n          observe = _ref2.observe;\n    }\n  }),\n      ref = _useDimensions.ref,\n      width = _useDimensions.width,\n      height = _useDimensions.height,\n      entry = _useDimensions.entry,\n      unobserve = _useDimensions.unobserve,\n      observe = _useDimensions.observe;\n\n  var _useWindowDimensions = Object(_functions_useWindowDimensions__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(),\n      windowHeight = _useWindowDimensions.windowHeight,\n      windowWidth = _useWindowDimensions.windowWidth;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(function () {\n    if (windowWidth < 576) {\n      setBodyPosition('static !important');\n    } else {\n      setBodyPosition('fixed !important');\n    }\n  }, [windowWidth]);\n\n  function getBodyTop() {\n    if (windowWidth < 576) {\n      return {\n        top: 0,\n        paddingRight: 15\n      };\n    } else {\n      if (-(textBodyTop + 30) + windowHeight > height) {\n        if (-(textBodyTop + 30) + windowHeight > imagesHeight) {\n          return {\n            top: -(height - (imagesHeight + textBodyTop)),\n            paddingRight: 50\n          };\n        } else {\n          return {\n            top: -(height - windowHeight),\n            paddingRight: 50\n          };\n        }\n      } else {\n        return {\n          top: textBodyTop + 30,\n          paddingRight: 50\n        };\n      }\n    }\n  }\n\n  Object(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_8__[\"useScrollPosition\"])(function (_ref3) {\n    var prevPos = _ref3.prevPos,\n        currPos = _ref3.currPos;\n    setTextBodyTop(currPos.y);\n  }, [textBodyTop]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: \"post-container\",\n      fluid: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          ref: ref,\n          className: \"post-body\",\n          style: getBodyTop(),\n          sm: \"4\",\n          med: \"4\",\n          lg: \"4\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1152529766\", [bodyPosition]]]) + \" \" + \"post-title\",\n            children: post.Title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1152529766\", [bodyPosition]]]) + \" \" + \"post-blurb\",\n            children: post.Tagline\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this), console.log(\"Window Width: \" + windowWidth), windowWidth < 576 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_GalleryImage__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n            image: post.Heroes.Landscape.formats.small.url,\n            orientation: 'Landscape',\n            caption: post.Heroes.Landscape.caption\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 37\n          }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            dangerouslySetInnerHTML: {\n              __html: post.Body\n            },\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1152529766\", [bodyPosition]]]) + \" \" + \"post-text\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          id: \"1152529766\",\n          dynamic: [bodyPosition],\n          children: \".post-body{position:\".concat(bodyPosition, \";}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hMjA2NjEzMzQ1L0Rlc2t0b3AvQmlyZGllL2JpcmRpZS1zaXRlL2JpcmRpZS1mcm9udGVuZC9iaXJkaWUtYXBwL3BhZ2VzL3Bvc3QvW3NsdWddLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGNkIsQUFHcUQsc0NBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy9hMjA2NjEzMzQ1L0Rlc2t0b3AvQmlyZGllL2JpcmRpZS1zaXRlL2JpcmRpZS1mcm9udGVuZC9iaXJkaWUtYXBwL3BhZ2VzL3Bvc3QvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW1hZ2VHYWxsZXJ5J1xuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tICdAbjh0YjF0L3VzZS1zY3JvbGwtcG9zaXRpb24nXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwicmVhY3QtY29vbC1kaW1lbnNpb25zXCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi9mdW5jdGlvbnMvdXNlV2luZG93RGltZW5zaW9ucydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgUG9zdENhcm91c2VsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENhcm91c2VsJ1xuaW1wb3J0IEdhbGxlcnlJbWFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dhbGxlcnlJbWFnZSdcblxuY29uc3QgUG9zdCA9ICh7IHBvc3QsIGNhcm91c2VsX2RhdGEgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCBbaW1hZ2VzSGVpZ2h0LCBzZXRJbWFnZXNIZWlnaHRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2JvZHlIZWlnaHQsIHNldEJvZHlIZWlnaHRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2JvZHlQb3NpdGlvbiwgc2V0Qm9keVBvc2l0aW9uXSA9IHVzZVN0YXRlKCdmaXhlZCAhaW1wb3J0YW50JylcbiAgY29uc3QgW2JvZHlUb3AsIHNldEJvZHlUb3BdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBbdGV4dEJvZHlUb3AsIHNldFRleHRCb2R5VG9wXSA9IHVzZVN0YXRlKHtcbiAgICB0b3A6IDEwMFxuICB9KVxuXG4gIGNvbnN0IHsgcmVmLCB3aWR0aCwgaGVpZ2h0LCBlbnRyeSwgdW5vYnNlcnZlLCBvYnNlcnZlIH0gPSB1c2VEaW1lbnNpb25zKHtcbiAgICBvblJlc2l6ZTogKHsgd2lkdGgsIGhlaWdodCwgZW50cnksIHVub2JzZXJ2ZSwgb2JzZXJ2ZSB9KSA9PiB7XG4gICAgICAvLyBUcmlnZ2VyZWQgd2hlbmV2ZXIgdGhlIHNpemUgb2YgdGhlIHRhcmdldCBpcyBjaGFuZ2VkXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgeyB3aW5kb3dIZWlnaHQsIHdpbmRvd1dpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93V2lkdGggPCA1NzYpIHtcbiAgICAgIHNldEJvZHlQb3NpdGlvbignc3RhdGljICFpbXBvcnRhbnQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRCb2R5UG9zaXRpb24oJ2ZpeGVkICFpbXBvcnRhbnQnKVxuICAgIH1cbiAgfSwgW3dpbmRvd1dpZHRoXSlcblxuICBmdW5jdGlvbiBnZXRCb2R5VG9wICgpIHtcbiAgICBpZiAod2luZG93V2lkdGggPCA1NzYpIHtcbiAgICAgIHJldHVybiAoe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIHBhZGRpbmdSaWdodDogMTVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgoLSh0ZXh0Qm9keVRvcCArIDMwKSArIHdpbmRvd0hlaWdodCkgPiBoZWlnaHQpIHtcbiAgICAgICAgaWYgKCgtKHRleHRCb2R5VG9wICsgMzApICsgd2luZG93SGVpZ2h0KSA+IGltYWdlc0hlaWdodCkge1xuICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgdG9wOiAtKGhlaWdodCAtIChpbWFnZXNIZWlnaHQgKyB0ZXh0Qm9keVRvcCkpLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1MFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICB0b3A6IC0oaGVpZ2h0IC0gd2luZG93SGVpZ2h0KSxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNTBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICB0b3A6IHRleHRCb2R5VG9wICsgMzAsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1MFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZVNjcm9sbFBvc2l0aW9uKFxuICAgICh7IHByZXZQb3MsIGN1cnJQb3MgfSkgPT4ge1xuICAgICAgc2V0VGV4dEJvZHlUb3AoY3VyclBvcy55KVxuICAgIH0sXG4gICAgW3RleHRCb2R5VG9wXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiIGZsdWlkPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cInBvc3QtYm9keVwiIHN0eWxlPXtnZXRCb2R5VG9wKCl9IHNtPVwiNFwiIG1lZD1cIjRcIiBsZz1cIjRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj57cG9zdC5UaXRsZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LWJsdXJiXCI+e3Bvc3QuVGFnbGluZX08L3A+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2luZG93IFdpZHRoOiBcIiArIHdpbmRvd1dpZHRoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAod2luZG93V2lkdGggPCA1NzYpID8gPEdhbGxlcnlJbWFnZSBpbWFnZT17cG9zdC5IZXJvZXMuTGFuZHNjYXBlLmZvcm1hdHMuc21hbGwudXJsfSBvcmllbnRhdGlvbj17J0xhbmRzY2FwZSd9IGNhcHRpb249e3Bvc3QuSGVyb2VzLkxhbmRzY2FwZS5jYXB0aW9ufSAvPiA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtdGV4dFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOnBvc3QuQm9keX19PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIC5wb3N0LWJvZHkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJHtib2R5UG9zaXRpb259O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8Q29sIHNtPVwiNFwiIG1lZD1cIjRcIiBsZz1cIjRcIj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8SW1hZ2VHYWxsZXJ5IHBvc3Q9e3Bvc3R9IHdpbmRvd1dpZHRoPXt3aW5kb3dXaWR0aH0gc2V0SW1hZ2VzSGVpZ2h0PXtzZXRJbWFnZXNIZWlnaHR9IC8+XG4gICAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9XCIxMlwiIGxnPVwiMTJcIiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxQb3N0Q2Fyb3VzZWwgcG9zdF90eXBlPXsocG9zdC5UeXBlID09ICdKb3VybmFsJykgPyAncGhvdG8gam91cm5hbHMnIDogJ2l0aW5lcmFyaWVzJ30gcG9zdHM9e2Nhcm91c2VsX2RhdGF9IC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSAge1xuXG4gIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnZcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9wb3N0cz9TbHVnPSR7Y29udGV4dC5wYXJhbXMuc2x1Z31gKVxuICBjb25zdCBwb3N0X2RhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgY29uc3QgY2Fyb3VzZWxfcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vcG9zdHM/VHlwZT0ke3Bvc3RfZGF0YVswXS5UeXBlfWApXG4gIGNvbnN0IGNhcm91c2VsX2RhdGEgPSBhd2FpdCBjYXJvdXNlbF9yZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2coXCJDYXJvdXNlbCBEYXRhXCIpXG4gIGNvbnNvbGUubG9nKGNhcm91c2VsX2RhdGEpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDogcG9zdF9kYXRhWzBdLFxuICAgICAgY2Fyb3VzZWxfZGF0YTogY2Fyb3VzZWxfZGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG4iXX0= */\\n/*@ sourceURL=/Users/a206613345/Desktop/Birdie/birdie-site/birdie-frontend/birdie-app/pages/post/[slug].js */\")\n        }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          sm: \"4\",\n          med: \"4\",\n          lg: \"4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ImageGallery__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          post: post,\n          windowWidth: windowWidth,\n          setImagesHeight: setImagesHeight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          sm: \"12\",\n          md: \"12\",\n          lg: \"12\",\n          className: \"carousel-container\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_PostCarousel__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            post_type: post.Type == 'Journal' ? 'photo journals' : 'itineraries',\n            posts: carousel_data\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Post, \"iXSjgyIWX/IdXCpIhU17H05QkpA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], react_cool_dimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _functions_useWindowDimensions__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_8__[\"useScrollPosition\"]];\n});\n\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/NTM1NCJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdCIsImNhcm91c2VsX2RhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJ1c2VTdGF0ZSIsImltYWdlc0hlaWdodCIsInNldEltYWdlc0hlaWdodCIsImJvZHlIZWlnaHQiLCJzZXRCb2R5SGVpZ2h0IiwiYm9keVBvc2l0aW9uIiwic2V0Qm9keVBvc2l0aW9uIiwiYm9keVRvcCIsInNldEJvZHlUb3AiLCJ0b3AiLCJ0ZXh0Qm9keVRvcCIsInNldFRleHRCb2R5VG9wIiwidXNlRGltZW5zaW9ucyIsIm9uUmVzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJlbnRyeSIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJyZWYiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ1c2VFZmZlY3QiLCJnZXRCb2R5VG9wIiwicGFkZGluZ1JpZ2h0IiwidXNlU2Nyb2xsUG9zaXRpb24iLCJwcmV2UG9zIiwiY3VyclBvcyIsInkiLCJUaXRsZSIsIlRhZ2xpbmUiLCJjb25zb2xlIiwibG9nIiwiSGVyb2VzIiwiTGFuZHNjYXBlIiwiZm9ybWF0cyIsInNtYWxsIiwidXJsIiwiY2FwdGlvbiIsIl9faHRtbCIsIkJvZHkiLCJUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE2QjtBQUFBOztBQUFBLE1BQTFCQyxJQUEwQixRQUExQkEsSUFBMEI7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9CO0FBQ3hDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEd0MsTUFFaENDLElBRmdD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QSxpQkFERjtBQUFBO0FBQUEsb0JBZWtCQSxZQWZsQjtBQUFBLGtEQWVrQkEsWUFmbEI7QUFBQSx1REFrQkUscUVBQUMsMkRBQUQ7QUFBSyxZQUFFLEVBQUMsR0FBUjtBQUFZLGFBQUcsRUFBQyxHQUFoQjtBQUFvQixZQUFFLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkYsZUFvQkUscUVBQUMsZ0VBQUQ7QUFBYyxjQUFJLEVBQUVYLElBQXBCO0FBQTBCLHFCQUFXLEVBQUU0QixXQUF2QztBQUFvRCx5QkFBZSxFQUFFcEI7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQkYsZUFxQkUscUVBQUMsMkRBQUQ7QUFBSyxZQUFFLEVBQUMsSUFBUjtBQUFhLFlBQUUsRUFBQyxJQUFoQjtBQUFxQixZQUFFLEVBQUMsSUFBeEI7QUFBNkIsbUJBQVMsRUFBQyxvQkFBdkM7QUFBQSxpQ0FDRSxxRUFBQyxpRUFBRDtBQUFjLHFCQUFTLEVBQUdSLElBQUksQ0FBQ2dELElBQUwsSUFBYSxTQUFkLEdBQTJCLGdCQUEzQixHQUE4QyxhQUF2RTtBQUFzRixpQkFBSyxFQUFFL0M7QUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQTRCRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUJGO0FBQUEsa0JBREY7QUFnQ0QsQ0EvRkQ7O0dBQU1GLEk7VUFDV0kscUQsRUFXMkNlLDZELEVBTXBCUSx1RSxFQXNDdENNLDZFOzs7S0F4RElqQyxJOztBQXNIU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltYWdlR2FsbGVyeSdcbmltcG9ydCB7IHVzZVNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnQG44dGIxdC91c2Utc2Nyb2xsLXBvc2l0aW9uJ1xuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSBcInJlYWN0LWNvb2wtZGltZW5zaW9uc1wiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi4vLi4vZnVuY3Rpb25zL3VzZVdpbmRvd0RpbWVuc2lvbnMnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFBvc3RDYXJvdXNlbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJvdXNlbCdcbmltcG9ydCBHYWxsZXJ5SW1hZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HYWxsZXJ5SW1hZ2UnXG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0LCBjYXJvdXNlbF9kYXRhIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgW2ltYWdlc0hlaWdodCwgc2V0SW1hZ2VzSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtib2R5SGVpZ2h0LCBzZXRCb2R5SGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtib2R5UG9zaXRpb24sIHNldEJvZHlQb3NpdGlvbl0gPSB1c2VTdGF0ZSgnZml4ZWQgIWltcG9ydGFudCcpXG4gIGNvbnN0IFtib2R5VG9wLCBzZXRCb2R5VG9wXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgW3RleHRCb2R5VG9wLCBzZXRUZXh0Qm9keVRvcF0gPSB1c2VTdGF0ZSh7XG4gICAgdG9wOiAxMDBcbiAgfSlcblxuICBjb25zdCB7IHJlZiwgd2lkdGgsIGhlaWdodCwgZW50cnksIHVub2JzZXJ2ZSwgb2JzZXJ2ZSB9ID0gdXNlRGltZW5zaW9ucyh7XG4gICAgb25SZXNpemU6ICh7IHdpZHRoLCBoZWlnaHQsIGVudHJ5LCB1bm9ic2VydmUsIG9ic2VydmUgfSkgPT4ge1xuICAgICAgLy8gVHJpZ2dlcmVkIHdoZW5ldmVyIHRoZSBzaXplIG9mIHRoZSB0YXJnZXQgaXMgY2hhbmdlZFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHsgd2luZG93SGVpZ2h0LCB3aW5kb3dXaWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgNTc2KSB7XG4gICAgICBzZXRCb2R5UG9zaXRpb24oJ3N0YXRpYyAhaW1wb3J0YW50JylcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Qm9keVBvc2l0aW9uKCdmaXhlZCAhaW1wb3J0YW50JylcbiAgICB9XG4gIH0sIFt3aW5kb3dXaWR0aF0pXG5cbiAgZnVuY3Rpb24gZ2V0Qm9keVRvcCAoKSB7XG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgNTc2KSB7XG4gICAgICByZXR1cm4gKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDE1XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoKC0odGV4dEJvZHlUb3AgKyAzMCkgKyB3aW5kb3dIZWlnaHQpID4gaGVpZ2h0KSB7XG4gICAgICAgIGlmICgoLSh0ZXh0Qm9keVRvcCArIDMwKSArIHdpbmRvd0hlaWdodCkgPiBpbWFnZXNIZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIHRvcDogLShoZWlnaHQgLSAoaW1hZ2VzSGVpZ2h0ICsgdGV4dEJvZHlUb3ApKSxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNTBcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgdG9wOiAtKGhlaWdodCAtIHdpbmRvd0hlaWdodCksXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDUwXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgdG9wOiB0ZXh0Qm9keVRvcCArIDMwLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogNTBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1c2VTY3JvbGxQb3NpdGlvbihcbiAgICAoeyBwcmV2UG9zLCBjdXJyUG9zIH0pID0+IHtcbiAgICAgIHNldFRleHRCb2R5VG9wKGN1cnJQb3MueSlcbiAgICB9LFxuICAgIFt0ZXh0Qm9keVRvcF1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicG9zdC1jb250YWluZXJcIiBmbHVpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHJlZj17cmVmfSBjbGFzc05hbWU9XCJwb3N0LWJvZHlcIiBzdHlsZT17Z2V0Qm9keVRvcCgpfSBzbT1cIjRcIiBtZWQ9XCI0XCIgbGc9XCI0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LXRpdGxlXCI+e3Bvc3QuVGl0bGV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC1ibHVyYlwiPntwb3N0LlRhZ2xpbmV9PC9wPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldpbmRvdyBXaWR0aDogXCIgKyB3aW5kb3dXaWR0aClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgKHdpbmRvd1dpZHRoIDwgNTc2KSA/IDxHYWxsZXJ5SW1hZ2UgaW1hZ2U9e3Bvc3QuSGVyb2VzLkxhbmRzY2FwZS5mb3JtYXRzLnNtYWxsLnVybH0gb3JpZW50YXRpb249eydMYW5kc2NhcGUnfSBjYXB0aW9uPXtwb3N0Lkhlcm9lcy5MYW5kc2NhcGUuY2FwdGlvbn0gLz4gOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LXRleHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpwb3N0LkJvZHl9fT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAucG9zdC1ib2R5IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246ICR7Ym9keVBvc2l0aW9ufTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPENvbCBzbT1cIjRcIiBtZWQ9XCI0XCIgbGc9XCI0XCI+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPEltYWdlR2FsbGVyeSBwb3N0PXtwb3N0fSB3aW5kb3dXaWR0aD17d2luZG93V2lkdGh9IHNldEltYWdlc0hlaWdodD17c2V0SW1hZ2VzSGVpZ2h0fSAvPlxuICAgICAgICAgIDxDb2wgc209XCIxMlwiIG1kPVwiMTJcIiBsZz1cIjEyXCIgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8UG9zdENhcm91c2VsIHBvc3RfdHlwZT17KHBvc3QuVHlwZSA9PSAnSm91cm5hbCcpID8gJ3Bob3RvIGpvdXJuYWxzJyA6ICdpdGluZXJhcmllcyd9IHBvc3RzPXtjYXJvdXNlbF9kYXRhfSAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkgIHtcblxuICBjb25zdCB7IEFQSV9VUkwgfSA9IHByb2Nlc3MuZW52XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vcG9zdHM/U2x1Zz0ke2NvbnRleHQucGFyYW1zLnNsdWd9YClcbiAgY29uc3QgcG9zdF9kYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnN0IGNhcm91c2VsX3JlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3Bvc3RzP1R5cGU9JHtwb3N0X2RhdGFbMF0uVHlwZX1gKVxuICBjb25zdCBjYXJvdXNlbF9kYXRhID0gYXdhaXQgY2Fyb3VzZWxfcmVzLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKFwiQ2Fyb3VzZWwgRGF0YVwiKVxuICBjb25zb2xlLmxvZyhjYXJvdXNlbF9kYXRhKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHBvc3RfZGF0YVswXSxcbiAgICAgIGNhcm91c2VsX2RhdGE6IGNhcm91c2VsX2RhdGFcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})