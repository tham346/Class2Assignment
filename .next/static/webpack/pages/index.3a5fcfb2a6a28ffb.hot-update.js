"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [formData, set] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        firstName: \"\",\n        username: \"\"\n    });\n    const Checklogin = ()=>{\n        console.log(formData.firstName);\n        console.log(formData);\n        if (FormDataEvent.username !== null) {\n            next_router__WEBPACK_IMPORTED_MODULE_4__.Router.push9 = {\n                pathname: \"./counter\",\n                query: {\n                    username: formData.username\n                }\n            };\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thamashaamarasekara/Desktop/login/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thamashaamarasekara/Desktop/login/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thamashaamarasekara/Desktop/login/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thamashaamarasekara/Desktop/login/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thamashaamarasekara/Desktop/login/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"First name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thamashaamarasekara/Desktop/login/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"first\",\n                        name: \"first\",\n                        pattern: \"[A-Z] {1} [a-z] {2,10}\",\n                        title: \"The first letter should be uppercase\",\n                        onChange: (e)=>setFormData({\n                                ...formData,\n                                firstName: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/thamashaamarasekara/Desktop/login/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Username\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thamashaamarasekara/Desktop/login/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        name: \"username\",\n                        required: true,\n                        minLength: \"5\",\n                        maxLength: \"10\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thamashaamarasekara/Desktop/login/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        onCLick: ()=>Checklogin(),\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thamashaamarasekara/Desktop/login/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thamashaamarasekara/Desktop/login/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"wpkKlbBwdlSEPDMTMOBcW4zIeTo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBT01BO0FBUHNCO0FBQ0U7QUFFZ0I7QUFDSjtBQUNJO0FBSS9CLFNBQVNRLE9BQU87O0lBRTdCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUd4QixNQUFNLENBQUNHLFVBQVVDLElBQUksR0FBR04sK0NBQVFBLENBQUc7UUFDakNPLFdBQVU7UUFDVkMsVUFBUztJQUNYO0lBRUEsTUFBTUMsYUFBYSxJQUFJO1FBQ3JCQyxRQUFRQyxHQUFHLENBQUNOLFNBQVNFLFNBQVM7UUFDOUJHLFFBQVFDLEdBQUcsQ0FBRU47UUFFYixJQUFHTyxjQUFjSixRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ2xDUCxxREFBWSxHQUFFO2dCQUNaYSxVQUFVO2dCQUNWQyxPQUFPO29CQUNIUCxVQUFVSCxTQUFTRyxRQUFRO2dCQUMvQjtZQUNGO1FBQ0YsQ0FBQztJQUNIO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDWixrREFBSUE7O2tDQUNILDhEQUFDb0I7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUtDLFdBQVcxQixxRUFBVzs7a0NBQzFCLDhEQUFDMkI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hWLE1BQUs7d0JBQ0xXLFNBQVE7d0JBQ1JiLE9BQU07d0JBQ05jLFVBQVdDLENBQUFBLElBQUtDLFlBQVk7Z0NBQUMsR0FBRzNCLFFBQVE7Z0NBQUVFLFdBQVd3QixFQUFFRSxNQUFNLENBQUNDLEtBQUs7NEJBQUE7Ozs7OztrQ0FJckUsOERBQUNUO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNPQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIVixNQUFLO3dCQUNMaUIsUUFBUTt3QkFDUkMsV0FBVTt3QkFDVkMsV0FBVTs7Ozs7O2tDQUVoQiw4REFBQ0M7d0JBQU9YLE1BQUs7d0JBQVNZLFNBQVMsSUFBTTlCO2tDQUFjOzs7Ozs7Ozs7Ozs7OztBQUs3RCxDQUFDO0dBekR1Qk47O1FBRVBELGtEQUFTQTs7O0tBRkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICAncmVhY3QnICBcbmltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyBcblxuXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0XSA9IHVzZVN0YXRlICAoe1xuICAgIGZpcnN0TmFtZTonJyxcbiAgICB1c2VybmFtZTonJ1xuICB9KVxuXG4gIGNvbnN0IENoZWNrbG9naW4gPSAoKT0+e1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmZpcnN0TmFtZSk7IFxuICAgIGNvbnNvbGUubG9nIChmb3JtRGF0YSk7ICBcblxuICAgIGlmKEZvcm1EYXRhRXZlbnQudXNlcm5hbWUgIT09IG51bGwpIHtcbiAgICAgIFJvdXRlci5wdXNoOT0oe1xuICAgICAgICBwYXRobmFtZTogJy4vY291bnRlcicsXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICB1c2VybmFtZTogZm9ybURhdGEudXNlcm5hbWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8bGFiZWw+Rmlyc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJmaXJzdFwiXG4gICAgICAgICAgbmFtZT1cImZpcnN0XCJcbiAgICAgICAgICBwYXR0ZXJuPVwiW0EtWl0gezF9IFthLXpdIHsyLDEwfVwiXG4gICAgICAgICAgdGl0bGU9XCJUaGUgZmlyc3QgbGV0dGVyICBzaG91bGQgYmUgdXBwZXJjYXNlXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBmaXJzdE5hbWU6IGUudGFyZ2V0LnZhbHVlfSkpfVxuICAgICAgICAgIC8+XG5cblxuICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgIFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoPVwiNVwiXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNMaWNrPXsoKSA9PiBDaGVja2xvZ2luKCl9PlN1Ym1pdDwvYnV0dG9uPlxuXG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwidXNlUm91dGVyIiwiSG9tZSIsInJvdXRlciIsImZvcm1EYXRhIiwic2V0IiwiZmlyc3ROYW1lIiwidXNlcm5hbWUiLCJDaGVja2xvZ2luIiwiY29uc29sZSIsImxvZyIsIkZvcm1EYXRhRXZlbnQiLCJwdXNoOSIsInBhdGhuYW1lIiwicXVlcnkiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwYXR0ZXJuIiwib25DaGFuZ2UiLCJlIiwic2V0Rm9ybURhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiYnV0dG9uIiwib25DTGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});