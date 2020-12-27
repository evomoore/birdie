webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_ImageGallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ImageGallery */ \"./components/ImageGallery.js\");\n/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @n8tb1t/use-scroll-position */ \"./node_modules/@n8tb1t/use-scroll-position/lib/index.js\");\n/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_cool_dimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cool-dimensions */ \"./node_modules/react-cool-dimensions/dist/index.esm.js\");\n/* harmony import */ var _functions_useWindowDimensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../functions/useWindowDimensions */ \"./functions/useWindowDimensions.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_PostCarousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/PostCarousel */ \"./components/PostCarousel.js\");\n/* harmony import */ var _components_GalleryImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/GalleryImage */ \"./components/GalleryImage.js\");\n\n\n\nvar _jsxFileName = \"/Users/a206613345/Desktop/Birdie/birdie-site/birdie-frontend/birdie-app/pages/post/[slug].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var post = _ref.post,\n      carousel_data = _ref.carousel_data,\n      hero = _ref.hero;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var slug = router.query.slug;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(null),\n      imagesHeight = _useState[0],\n      setImagesHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(null),\n      bodyHeight = _useState2[0],\n      setBodyHeight = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])('fixed !important'),\n      bodyPosition = _useState3[0],\n      setBodyPosition = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(null),\n      bodyTop = _useState4[0],\n      setBodyTop = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])({\n    top: 100\n  }),\n      textBodyTop = _useState5[0],\n      setTextBodyTop = _useState5[1];\n\n  var _useDimensions = Object(react_cool_dimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n    onResize: function onResize(_ref2) {// Triggered whenever the size of the target is changed\n\n      var width = _ref2.width,\n          height = _ref2.height,\n          entry = _ref2.entry,\n          unobserve = _ref2.unobserve,\n          observe = _ref2.observe;\n    }\n  }),\n      ref = _useDimensions.ref,\n      width = _useDimensions.width,\n      height = _useDimensions.height,\n      entry = _useDimensions.entry,\n      unobserve = _useDimensions.unobserve,\n      observe = _useDimensions.observe;\n\n  var _useWindowDimensions = Object(_functions_useWindowDimensions__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(),\n      windowHeight = _useWindowDimensions.windowHeight,\n      windowWidth = _useWindowDimensions.windowWidth;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(function () {\n    if (windowWidth < 576) {\n      setBodyPosition('static !important');\n    } else {\n      setBodyPosition('fixed !important');\n    }\n  }, [windowWidth]);\n\n  function getBodyTop() {\n    if (windowWidth < 576) {\n      return {\n        top: 0,\n        paddingRight: 15\n      };\n    } else {\n      if (-(textBodyTop + 30) + windowHeight > height) {\n        if (-(textBodyTop + 30) + windowHeight > imagesHeight) {\n          return {\n            top: -(height - (imagesHeight + textBodyTop)),\n            paddingRight: 50\n          };\n        } else {\n          return {\n            top: -(height - windowHeight),\n            paddingRight: 50\n          };\n        }\n      } else {\n        return {\n          top: textBodyTop + 30,\n          paddingRight: 50\n        };\n      }\n    }\n  }\n\n  Object(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_8__[\"useScrollPosition\"])(function (_ref3) {\n    var prevPos = _ref3.prevPos,\n        currPos = _ref3.currPos;\n    setTextBodyTop(currPos.y);\n  }, [textBodyTop]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: \"post-container\",\n      fluid: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          ref: ref,\n          className: \"post-body\",\n          style: getBodyTop(),\n          sm: \"4\",\n          med: \"4\",\n          lg: \"4\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1152529766\", [bodyPosition]]]) + \" \" + \"post-title\",\n            children: post.Title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1152529766\", [bodyPosition]]]) + \" \" + \"post-blurb\",\n            children: post.Tagline\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this), console.log(\"Hero: \" + hero), windowWidth < 576 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_GalleryImage__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n            image: hero,\n            orientation: 'Landscape',\n            caption: post.Heroes.Landscape.caption\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 37\n          }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            dangerouslySetInnerHTML: {\n              __html: post.Body\n            },\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1152529766\", [bodyPosition]]]) + \" \" + \"post-text\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          id: \"1152529766\",\n          dynamic: [bodyPosition],\n          children: \".post-body{position:\".concat(bodyPosition, \";}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hMjA2NjEzMzQ1L0Rlc2t0b3AvQmlyZGllL2JpcmRpZS1zaXRlL2JpcmRpZS1mcm9udGVuZC9iaXJkaWUtYXBwL3BhZ2VzL3Bvc3QvW3NsdWddLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGNkIsQUFHcUQsc0NBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy9hMjA2NjEzMzQ1L0Rlc2t0b3AvQmlyZGllL2JpcmRpZS1zaXRlL2JpcmRpZS1mcm9udGVuZC9iaXJkaWUtYXBwL3BhZ2VzL3Bvc3QvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW1hZ2VHYWxsZXJ5J1xuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tICdAbjh0YjF0L3VzZS1zY3JvbGwtcG9zaXRpb24nXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwicmVhY3QtY29vbC1kaW1lbnNpb25zXCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi9mdW5jdGlvbnMvdXNlV2luZG93RGltZW5zaW9ucydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgUG9zdENhcm91c2VsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENhcm91c2VsJ1xuaW1wb3J0IEdhbGxlcnlJbWFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dhbGxlcnlJbWFnZSdcblxuY29uc3QgUG9zdCA9ICh7IHBvc3QsIGNhcm91c2VsX2RhdGEsIGhlcm8gfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCBbaW1hZ2VzSGVpZ2h0LCBzZXRJbWFnZXNIZWlnaHRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2JvZHlIZWlnaHQsIHNldEJvZHlIZWlnaHRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2JvZHlQb3NpdGlvbiwgc2V0Qm9keVBvc2l0aW9uXSA9IHVzZVN0YXRlKCdmaXhlZCAhaW1wb3J0YW50JylcbiAgY29uc3QgW2JvZHlUb3AsIHNldEJvZHlUb3BdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBbdGV4dEJvZHlUb3AsIHNldFRleHRCb2R5VG9wXSA9IHVzZVN0YXRlKHtcbiAgICB0b3A6IDEwMFxuICB9KVxuXG4gIGNvbnN0IHsgcmVmLCB3aWR0aCwgaGVpZ2h0LCBlbnRyeSwgdW5vYnNlcnZlLCBvYnNlcnZlIH0gPSB1c2VEaW1lbnNpb25zKHtcbiAgICBvblJlc2l6ZTogKHsgd2lkdGgsIGhlaWdodCwgZW50cnksIHVub2JzZXJ2ZSwgb2JzZXJ2ZSB9KSA9PiB7XG4gICAgICAvLyBUcmlnZ2VyZWQgd2hlbmV2ZXIgdGhlIHNpemUgb2YgdGhlIHRhcmdldCBpcyBjaGFuZ2VkXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgeyB3aW5kb3dIZWlnaHQsIHdpbmRvd1dpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93V2lkdGggPCA1NzYpIHtcbiAgICAgIHNldEJvZHlQb3NpdGlvbignc3RhdGljICFpbXBvcnRhbnQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRCb2R5UG9zaXRpb24oJ2ZpeGVkICFpbXBvcnRhbnQnKVxuICAgIH1cbiAgfSwgW3dpbmRvd1dpZHRoXSlcblxuICBmdW5jdGlvbiBnZXRCb2R5VG9wICgpIHtcbiAgICBpZiAod2luZG93V2lkdGggPCA1NzYpIHtcbiAgICAgIHJldHVybiAoe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIHBhZGRpbmdSaWdodDogMTVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgoLSh0ZXh0Qm9keVRvcCArIDMwKSArIHdpbmRvd0hlaWdodCkgPiBoZWlnaHQpIHtcbiAgICAgICAgaWYgKCgtKHRleHRCb2R5VG9wICsgMzApICsgd2luZG93SGVpZ2h0KSA+IGltYWdlc0hlaWdodCkge1xuICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgdG9wOiAtKGhlaWdodCAtIChpbWFnZXNIZWlnaHQgKyB0ZXh0Qm9keVRvcCkpLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1MFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICB0b3A6IC0oaGVpZ2h0IC0gd2luZG93SGVpZ2h0KSxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNTBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICB0b3A6IHRleHRCb2R5VG9wICsgMzAsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1MFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZVNjcm9sbFBvc2l0aW9uKFxuICAgICh7IHByZXZQb3MsIGN1cnJQb3MgfSkgPT4ge1xuICAgICAgc2V0VGV4dEJvZHlUb3AoY3VyclBvcy55KVxuICAgIH0sXG4gICAgW3RleHRCb2R5VG9wXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiIGZsdWlkPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cInBvc3QtYm9keVwiIHN0eWxlPXtnZXRCb2R5VG9wKCl9IHNtPVwiNFwiIG1lZD1cIjRcIiBsZz1cIjRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj57cG9zdC5UaXRsZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LWJsdXJiXCI+e3Bvc3QuVGFnbGluZX08L3A+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGVybzogXCIgKyBoZXJvKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAod2luZG93V2lkdGggPCA1NzYpID8gPEdhbGxlcnlJbWFnZSBpbWFnZT17aGVyb30gb3JpZW50YXRpb249eydMYW5kc2NhcGUnfSBjYXB0aW9uPXtwb3N0Lkhlcm9lcy5MYW5kc2NhcGUuY2FwdGlvbn0gLz4gOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LXRleHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpwb3N0LkJvZHl9fT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAucG9zdC1ib2R5IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246ICR7Ym9keVBvc2l0aW9ufTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPENvbCBzbT1cIjRcIiBtZWQ9XCI0XCIgbGc9XCI0XCI+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAge1xuICAgICAgICAgICAgKHdpbmRvd1dpZHRoID4gNTc2KSA/IDxDb2wgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cInBvc3QtaW1hZ2VzXCIgc209XCI4XCIgbWVkPVwiOFwiIGxnPVwiOFwiPjxDb2wgY2xhc3NOYW1lPVwiaW1hZ2UtZ2FsbGVyeVwiIHNtPVwiMTJcIiBtZWQ9XCIxMlwiIGxnPVwiMTJcIj48Q29udGFpbmVyIGZsdWlkPjxSb3c+PEdhbGxlcnlJbWFnZSBpbWFnZT17aGVyb30gb3JpZW50YXRpb249eydMYW5kc2NhcGUnfSBjYXB0aW9uPXtwb3N0Lkhlcm9lcy5MYW5kc2NhcGUuY2FwdGlvbn0gLz48L1Jvdz48L0NvbnRhaW5lcj48L0NvbD48L0NvbD4gOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICA8SW1hZ2VHYWxsZXJ5IHBvc3Q9e3Bvc3R9IHdpbmRvd1dpZHRoPXt3aW5kb3dXaWR0aH0gc2V0SW1hZ2VzSGVpZ2h0PXtzZXRJbWFnZXNIZWlnaHR9IGhlcm89e2hlcm99IC8+XG4gICAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9XCIxMlwiIGxnPVwiMTJcIiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxQb3N0Q2Fyb3VzZWwgcG9zdF90eXBlPXsocG9zdC5UeXBlID09ICdKb3VybmFsJykgPyAncGhvdG8gam91cm5hbHMnIDogJ2l0aW5lcmFyaWVzJ30gcG9zdHM9e2Nhcm91c2VsX2RhdGF9IC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSAge1xuXG4gIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnZcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9wb3N0cz9TbHVnPSR7Y29udGV4dC5wYXJhbXMuc2x1Z31gKVxuICBjb25zdCBwb3N0X2RhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgY29uc3QgY2Fyb3VzZWxfcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vcG9zdHM/VHlwZT0ke3Bvc3RfZGF0YVswXS5UeXBlfWApXG4gIGNvbnN0IGNhcm91c2VsX2RhdGEgPSBhd2FpdCBjYXJvdXNlbF9yZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2coXCJDYXJvdXNlbCBEYXRhXCIpXG4gIGNvbnNvbGUubG9nKGNhcm91c2VsX2RhdGEpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDogcG9zdF9kYXRhWzBdLFxuICAgICAgY2Fyb3VzZWxfZGF0YTogY2Fyb3VzZWxfZGF0YSxcbiAgICAgIGhlcm86IHBvc3RfZGF0YVswXS5IZXJvZXMuTGFuZHNjYXBlLmZvcm1hdHMubGFyZ2UudXJsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RcbiJdfQ== */\\n/*@ sourceURL=/Users/a206613345/Desktop/Birdie/birdie-site/birdie-frontend/birdie-app/pages/post/[slug].js */\")\n        }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          sm: \"4\",\n          med: \"4\",\n          lg: \"4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this), windowWidth > 576 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          ref: ref,\n          className: \"post-images\",\n          sm: \"8\",\n          med: \"8\",\n          lg: \"8\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: \"image-gallery\",\n            sm: \"12\",\n            med: \"12\",\n            lg: \"12\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              fluid: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_GalleryImage__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                  image: hero,\n                  orientation: 'Landscape',\n                  caption: post.Heroes.Landscape.caption\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 101,\n                  columnNumber: 174\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 169\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 152\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 96\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 35\n        }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ImageGallery__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          post: post,\n          windowWidth: windowWidth,\n          setImagesHeight: setImagesHeight,\n          hero: hero\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          sm: \"12\",\n          md: \"12\",\n          lg: \"12\",\n          className: \"carousel-container\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_PostCarousel__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            post_type: post.Type == 'Journal' ? 'photo journals' : 'itineraries',\n            posts: carousel_data\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Post, \"iXSjgyIWX/IdXCpIhU17H05QkpA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], react_cool_dimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _functions_useWindowDimensions__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_8__[\"useScrollPosition\"]];\n});\n\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/NTM1NCJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdCIsImNhcm91c2VsX2RhdGEiLCJoZXJvIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwidXNlU3RhdGUiLCJpbWFnZXNIZWlnaHQiLCJzZXRJbWFnZXNIZWlnaHQiLCJib2R5SGVpZ2h0Iiwic2V0Qm9keUhlaWdodCIsImJvZHlQb3NpdGlvbiIsInNldEJvZHlQb3NpdGlvbiIsImJvZHlUb3AiLCJzZXRCb2R5VG9wIiwidG9wIiwidGV4dEJvZHlUb3AiLCJzZXRUZXh0Qm9keVRvcCIsInVzZURpbWVuc2lvbnMiLCJvblJlc2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZW50cnkiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwicmVmIiwidXNlV2luZG93RGltZW5zaW9ucyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwidXNlRWZmZWN0IiwiZ2V0Qm9keVRvcCIsInBhZGRpbmdSaWdodCIsInVzZVNjcm9sbFBvc2l0aW9uIiwicHJldlBvcyIsImN1cnJQb3MiLCJ5IiwiVGl0bGUiLCJUYWdsaW5lIiwiY29uc29sZSIsImxvZyIsIkhlcm9lcyIsIkxhbmRzY2FwZSIsImNhcHRpb24iLCJfX2h0bWwiLCJCb2R5IiwiVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsSUFBZ0MsUUFBaENBLElBQWdDO0FBQUEsTUFBMUJDLGFBQTBCLFFBQTFCQSxhQUEwQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM5QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRDhDLE1B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QUFFLEVBQUMsSUFBaEI7QUFBcUIsWUFBRSxFQUFDLElBQXhCO0FBQTZCLG1CQUFTLEVBQUMsb0JBQXZDO0FBQUEsaUNBQ0UscUVBQUMsaUVBQUQ7QUFBYyxxQkFBUyxFQUFHRixJQUFJLENBQUM4QyxJQUFMLElBQWEsU0FBZCxHQUEyQixnQkFBM0IsR0FBOEMsYUFBdkU7QUFBc0YsaUJBQUssRUFBRTdDO0FBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUErQkUscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9CRjtBQUFBLGtCQURGO0FBbUNELENBbEdEOztHQUFNRixJO1VBQ1dLLHFELEVBVzJDZSw2RCxFQU1wQlEsdUUsRUFzQ3RDTSw2RTs7O0tBeERJbEMsSTs7QUEwSFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdC9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnknXG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gJ0BuOHRiMXQvdXNlLXNjcm9sbC1wb3NpdGlvbidcbmltcG9ydCB1c2VEaW1lbnNpb25zIGZyb20gXCJyZWFjdC1jb29sLWRpbWVuc2lvbnNcIjtcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gJy4uLy4uL2Z1bmN0aW9ucy91c2VXaW5kb3dEaW1lbnNpb25zJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCBQb3N0Q2Fyb3VzZWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0Q2Fyb3VzZWwnXG5pbXBvcnQgR2FsbGVyeUltYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2FsbGVyeUltYWdlJ1xuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCwgY2Fyb3VzZWxfZGF0YSwgaGVybyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5XG4gIGNvbnN0IFtpbWFnZXNIZWlnaHQsIHNldEltYWdlc0hlaWdodF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbYm9keUhlaWdodCwgc2V0Qm9keUhlaWdodF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbYm9keVBvc2l0aW9uLCBzZXRCb2R5UG9zaXRpb25dID0gdXNlU3RhdGUoJ2ZpeGVkICFpbXBvcnRhbnQnKVxuICBjb25zdCBbYm9keVRvcCwgc2V0Qm9keVRvcF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFt0ZXh0Qm9keVRvcCwgc2V0VGV4dEJvZHlUb3BdID0gdXNlU3RhdGUoe1xuICAgIHRvcDogMTAwXG4gIH0pXG5cbiAgY29uc3QgeyByZWYsIHdpZHRoLCBoZWlnaHQsIGVudHJ5LCB1bm9ic2VydmUsIG9ic2VydmUgfSA9IHVzZURpbWVuc2lvbnMoe1xuICAgIG9uUmVzaXplOiAoeyB3aWR0aCwgaGVpZ2h0LCBlbnRyeSwgdW5vYnNlcnZlLCBvYnNlcnZlIH0pID0+IHtcbiAgICAgIC8vIFRyaWdnZXJlZCB3aGVuZXZlciB0aGUgc2l6ZSBvZiB0aGUgdGFyZ2V0IGlzIGNoYW5nZWRcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCB7IHdpbmRvd0hlaWdodCwgd2luZG93V2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3aW5kb3dXaWR0aCA8IDU3Nikge1xuICAgICAgc2V0Qm9keVBvc2l0aW9uKCdzdGF0aWMgIWltcG9ydGFudCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEJvZHlQb3NpdGlvbignZml4ZWQgIWltcG9ydGFudCcpXG4gICAgfVxuICB9LCBbd2luZG93V2lkdGhdKVxuXG4gIGZ1bmN0aW9uIGdldEJvZHlUb3AgKCkge1xuICAgIGlmICh3aW5kb3dXaWR0aCA8IDU3Nikge1xuICAgICAgcmV0dXJuICh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAxNVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCgtKHRleHRCb2R5VG9wICsgMzApICsgd2luZG93SGVpZ2h0KSA+IGhlaWdodCkge1xuICAgICAgICBpZiAoKC0odGV4dEJvZHlUb3AgKyAzMCkgKyB3aW5kb3dIZWlnaHQpID4gaW1hZ2VzSGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICB0b3A6IC0oaGVpZ2h0IC0gKGltYWdlc0hlaWdodCArIHRleHRCb2R5VG9wKSksXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDUwXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIHRvcDogLShoZWlnaHQgLSB3aW5kb3dIZWlnaHQpLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1MFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgIHRvcDogdGV4dEJvZHlUb3AgKyAzMCxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDUwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXNlU2Nyb2xsUG9zaXRpb24oXG4gICAgKHsgcHJldlBvcywgY3VyclBvcyB9KSA9PiB7XG4gICAgICBzZXRUZXh0Qm9keVRvcChjdXJyUG9zLnkpXG4gICAgfSxcbiAgICBbdGV4dEJvZHlUb3BdXG4gIClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBvc3QtY29udGFpbmVyXCIgZmx1aWQ+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCByZWY9e3JlZn0gY2xhc3NOYW1lPVwicG9zdC1ib2R5XCIgc3R5bGU9e2dldEJvZHlUb3AoKX0gc209XCI0XCIgbWVkPVwiNFwiIGxnPVwiNFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPntwb3N0LlRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3QtYmx1cmJcIj57cG9zdC5UYWdsaW5lfTwvcD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIZXJvOiBcIiArIGhlcm8pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICh3aW5kb3dXaWR0aCA8IDU3NikgPyA8R2FsbGVyeUltYWdlIGltYWdlPXtoZXJvfSBvcmllbnRhdGlvbj17J0xhbmRzY2FwZSd9IGNhcHRpb249e3Bvc3QuSGVyb2VzLkxhbmRzY2FwZS5jYXB0aW9ufSAvPiA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtdGV4dFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOnBvc3QuQm9keX19PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIC5wb3N0LWJvZHkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJHtib2R5UG9zaXRpb259O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8Q29sIHNtPVwiNFwiIG1lZD1cIjRcIiBsZz1cIjRcIj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAod2luZG93V2lkdGggPiA1NzYpID8gPENvbCByZWY9e3JlZn0gY2xhc3NOYW1lPVwicG9zdC1pbWFnZXNcIiBzbT1cIjhcIiBtZWQ9XCI4XCIgbGc9XCI4XCI+PENvbCBjbGFzc05hbWU9XCJpbWFnZS1nYWxsZXJ5XCIgc209XCIxMlwiIG1lZD1cIjEyXCIgbGc9XCIxMlwiPjxDb250YWluZXIgZmx1aWQ+PFJvdz48R2FsbGVyeUltYWdlIGltYWdlPXtoZXJvfSBvcmllbnRhdGlvbj17J0xhbmRzY2FwZSd9IGNhcHRpb249e3Bvc3QuSGVyb2VzLkxhbmRzY2FwZS5jYXB0aW9ufSAvPjwvUm93PjwvQ29udGFpbmVyPjwvQ29sPjwvQ29sPiA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIDxJbWFnZUdhbGxlcnkgcG9zdD17cG9zdH0gd2luZG93V2lkdGg9e3dpbmRvd1dpZHRofSBzZXRJbWFnZXNIZWlnaHQ9e3NldEltYWdlc0hlaWdodH0gaGVybz17aGVyb30gLz5cbiAgICAgICAgICA8Q29sIHNtPVwiMTJcIiBtZD1cIjEyXCIgbGc9XCIxMlwiIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFBvc3RDYXJvdXNlbCBwb3N0X3R5cGU9eyhwb3N0LlR5cGUgPT0gJ0pvdXJuYWwnKSA/ICdwaG90byBqb3VybmFscycgOiAnaXRpbmVyYXJpZXMnfSBwb3N0cz17Y2Fyb3VzZWxfZGF0YX0gLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpICB7XG5cbiAgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudlxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3Bvc3RzP1NsdWc9JHtjb250ZXh0LnBhcmFtcy5zbHVnfWApXG4gIGNvbnN0IHBvc3RfZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICBjb25zdCBjYXJvdXNlbF9yZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9wb3N0cz9UeXBlPSR7cG9zdF9kYXRhWzBdLlR5cGV9YClcbiAgY29uc3QgY2Fyb3VzZWxfZGF0YSA9IGF3YWl0IGNhcm91c2VsX3Jlcy5qc29uKClcblxuICBjb25zb2xlLmxvZyhcIkNhcm91c2VsIERhdGFcIilcbiAgY29uc29sZS5sb2coY2Fyb3VzZWxfZGF0YSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiBwb3N0X2RhdGFbMF0sXG4gICAgICBjYXJvdXNlbF9kYXRhOiBjYXJvdXNlbF9kYXRhLFxuICAgICAgaGVybzogcG9zdF9kYXRhWzBdLkhlcm9lcy5MYW5kc2NhcGUuZm9ybWF0cy5sYXJnZS51cmxcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})