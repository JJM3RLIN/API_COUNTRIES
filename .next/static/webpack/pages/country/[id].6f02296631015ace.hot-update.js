"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/country/[id]",{

/***/ "./pages/country/[id].js":
/*!*******************************!*\
  !*** ./pages/country/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Borders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Borders */ \"./components/Borders.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers_formatoNumeros__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/formatoNumeros */ \"./helpers/formatoNumeros.js\");\n/* harmony import */ var _styles_Country_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Country.module.scss */ \"./styles/Country.module.scss\");\n/* harmony import */ var _styles_Country_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Country_module_scss__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar Country = function(param) {\n    var country = param.country;\n    var ref;\n    var ref1 = country[0], name = ref1.name, capital = ref1.capital, population = ref1.population, region = ref1.region, flags = ref1.flags, subregion = ref1.subregion, tld = ref1.tld, currencies = ref1.currencies, languages = ref1.languages, borders = ref1.borders, altSpellings = ref1.altSpellings;\n    var moneda = currencies ? Object.values(currencies)[0] : \"\";\n    var ref2, _name;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        titulo: name.common,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"contenedor\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"box \".concat((_styles_Country_module_scss__WEBPACK_IMPORTED_MODULE_6___default().enlaceBack)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: \"24\",\n                                height: \"24\",\n                                fill: \"currentColor\",\n                                className: \"bi bi-arrow-left\",\n                                viewBox: \"0 0 16 16\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                    lineNumber: 19,\n                                    columnNumber: 16\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, _this),\n                            \"Back\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                    lineNumber: 16,\n                    columnNumber: 12\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Country_module_scss__WEBPACK_IMPORTED_MODULE_6___default().contenido),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: flags.svg,\n                                layout: \"in\",\n                                width: 288,\n                                height: 175,\n                                alt: \"\".concat(name.common, \" flag\"),\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Country_module_scss__WEBPACK_IMPORTED_MODULE_6___default().contenedorInfo),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: (_styles_Country_module_scss__WEBPACK_IMPORTED_MODULE_6___default().info),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_styles_Country_module_scss__WEBPACK_IMPORTED_MODULE_6___default().nombre),\n                                            children: name.common\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                            lineNumber: 29,\n                                            columnNumber: 16\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Native Name: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: (ref2 = altSpellings[2]) !== null && ref2 !== void 0 ? ref2 : name.common\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                                    lineNumber: 30,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                            lineNumber: 30,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Population: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: (0,_helpers_formatoNumeros__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(population)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 32\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Region: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: region\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 28\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                            lineNumber: 32,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Sub Region: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: subregion !== null && subregion !== void 0 ? subregion : \"This country hasn't Sub Region\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 32\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                            lineNumber: 33,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Capital: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: capital !== null && capital !== void 0 ? capital : \"This country hasn't capital\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                                    lineNumber: 34,\n                                                    columnNumber: 29\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"\".concat((_styles_Country_module_scss__WEBPACK_IMPORTED_MODULE_6___default().info), \" \").concat((_styles_Country_module_scss__WEBPACK_IMPORTED_MODULE_6___default().InfoSecond)),\n                                    children: [\n                                        tld && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Top Level Domain: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: tld[0]\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 48\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                            lineNumber: 39,\n                                            columnNumber: 26\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Currencie: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: (_name = moneda.name) !== null && _name !== void 0 ? _name : \"This country hasn't currencie\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 31\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, _this),\n                                        (moneda === null || moneda === void 0 ? void 0 : moneda.symbol) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Currencie symbol: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: moneda.symbol\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 59\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                            lineNumber: 43,\n                                            columnNumber: 38\n                                        }, _this),\n                                        languages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Lenguages:\",\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: Object.values(languages).join(\", \")\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 24\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                            lineNumber: 46,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, _this),\n                                ((ref = country[0]) === null || ref === void 0 ? void 0 : ref.borders) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Borders__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    borders: borders\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n                    lineNumber: 23,\n                    columnNumber: 12\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\georg\\\\OneDrive\\\\Escritorio\\\\api-countries\\\\pages\\\\country\\\\[id].js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = Country;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Country);\nvar _c;\n$RefreshReg$(_c, \"Country\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3VudHJ5L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZDO0FBQ0k7QUFDbEI7QUFDRjtBQUM0QjtBQUNIO0FBQ3RELElBQU1NLE9BQU8sR0FBRyxnQkFBZTtRQUFiQyxPQUFPLFNBQVBBLE9BQU87UUFpRFZBLEdBQVU7SUEvQ3JCLElBQWlIQSxJQUFVLEdBQVZBLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBcEhDLElBQUksR0FBc0dELElBQVUsQ0FBcEhDLElBQUksRUFBRUMsT0FBTyxHQUE2RkYsSUFBVSxDQUE5R0UsT0FBTyxFQUFFQyxVQUFVLEdBQWlGSCxJQUFVLENBQXJHRyxVQUFVLEVBQUVDLE1BQU0sR0FBeUVKLElBQVUsQ0FBekZJLE1BQU0sRUFBRUMsS0FBSyxHQUFrRUwsSUFBVSxDQUFqRkssS0FBSyxFQUFFQyxTQUFTLEdBQXVETixJQUFVLENBQTFFTSxTQUFTLEVBQUVDLEdBQUcsR0FBa0RQLElBQVUsQ0FBL0RPLEdBQUcsRUFBRUMsVUFBVSxHQUFzQ1IsSUFBVSxDQUExRFEsVUFBVSxFQUFFQyxTQUFTLEdBQTJCVCxJQUFVLENBQTlDUyxTQUFTLEVBQUVDLE9BQU8sR0FBa0JWLElBQVUsQ0FBbkNVLE9BQU8sRUFBRUMsWUFBWSxHQUFJWCxJQUFVLENBQTFCVyxZQUFZO0lBQzdHLElBQU1DLE1BQU0sR0FBR0osVUFBVSxHQUFHSyxNQUFNLENBQUNDLE1BQU0sQ0FBQ04sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQW9CMUJHLElBQWUsRUFXakJDLEtBQVc7SUE1QjlDLHFCQUNFLDhEQUFDbkIsMERBQU07UUFBQ3NCLE1BQU0sRUFBRWQsSUFBSSxDQUFDZSxNQUFNO2tCQUN2Qiw0RUFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsWUFBWTs7OEJBQ3hCLDhEQUFDdEIsa0RBQUk7b0JBQUN1QixJQUFJLEVBQUMsR0FBRzs4QkFDYiw0RUFBQ0MsR0FBQzt3QkFBQ0QsSUFBSSxFQUFDLEdBQUc7d0JBQUNELFNBQVMsRUFBRSxNQUFLLENBQW9CLE9BQWxCcEIsK0VBQWlCLENBQUU7OzBDQUNqRCw4REFBQ3dCLEtBQUc7Z0NBQUNDLEtBQUssRUFBQyw0QkFBNEI7Z0NBQUNDLEtBQUssRUFBQyxJQUFJO2dDQUFDQyxNQUFNLEVBQUMsSUFBSTtnQ0FBQ0MsSUFBSSxFQUFDLGNBQWM7Z0NBQUNSLFNBQVMsRUFBQyxrQkFBa0I7Z0NBQUNTLE9BQU8sRUFBQyxXQUFXOzBDQUNoSSw0RUFBQ0MsTUFBSTtvQ0FBRUMsQ0FBQyxFQUFDLCtJQUErSTs7Ozs7eUNBQUU7Ozs7O3FDQUNwSjs0QkFBQSxNQUNGOzs7Ozs7NkJBQUk7Ozs7O3lCQUNKOzhCQUNSLDhEQUFDWixLQUFHO29CQUFDQyxTQUFTLEVBQUVwQiw4RUFBZ0I7O3NDQUMvQiw4REFBQ21CLEtBQUc7c0NBQ0osNEVBQUN0QixtREFBSztnQ0FBQ29DLEdBQUcsRUFBRTFCLEtBQUssQ0FBQ2lCLEdBQUc7Z0NBQUVVLE1BQU0sRUFBQyxJQUFJO2dDQUFDUixLQUFLLEVBQUUsR0FBRztnQ0FBRUMsTUFBTSxFQUFFLEdBQUc7Z0NBQUVRLEdBQUcsRUFBRSxFQUFDLENBQWMsTUFBSyxDQUFqQmhDLElBQUksQ0FBQ2UsTUFBTSxFQUFDLE9BQUssQ0FBQztnQ0FBRWtCLFFBQVE7Ozs7O3FDQUFHOzs7OztpQ0FDN0Y7c0NBQ04sOERBQUNqQixLQUFHOzRCQUFDQyxTQUFTLEVBQUVwQixtRkFBcUI7OzhDQUNuQyw4REFBQ3NDLFNBQU87b0NBQUNsQixTQUFTLEVBQUVwQix5RUFBVzs7c0RBQzlCLDhEQUFDd0MsSUFBRTs0Q0FBQ3BCLFNBQVMsRUFBRXBCLDJFQUFhO3NEQUFHRyxJQUFJLENBQUNlLE1BQU07Ozs7O2lEQUFNO3NEQUMvQyw4REFBQ3dCLEdBQUM7O2dEQUFDLGVBQWE7OERBQUEsOERBQUNDLE1BQUk7OERBQUU5QixDQUFBQSxJQUFlLEdBQWZBLFlBQVksQ0FBQyxDQUFDLENBQUMsY0FBZkEsSUFBZSxjQUFmQSxJQUFlLEdBQUlWLElBQUksQ0FBQ2UsTUFBTTs7Ozs7eURBQVE7Ozs7OztpREFBSTtzREFDakUsOERBQUN3QixHQUFDOztnREFBQyxjQUFZOzhEQUFBLDhEQUFDQyxNQUFJOzhEQUFFNUMsbUVBQWEsQ0FBQ00sVUFBVSxDQUFDOzs7Ozt5REFBUTs7Ozs7O2lEQUFJO3NEQUMzRCw4REFBQ3FDLEdBQUM7O2dEQUFDLFVBQVE7OERBQUEsOERBQUNDLE1BQUk7OERBQUVyQyxNQUFNOzs7Ozt5REFBUTs7Ozs7O2lEQUFJO3NEQUNwQyw4REFBQ29DLEdBQUM7O2dEQUFDLGNBQVk7OERBQUEsOERBQUNDLE1BQUk7OERBQUVuQyxTQUFTLGFBQVRBLFNBQVMsY0FBVEEsU0FBUyxHQUFJLGdDQUFnQzs7Ozs7eURBQVE7Ozs7OztpREFBSTtzREFDL0UsOERBQUNrQyxHQUFDOztnREFBQyxXQUFTOzhEQUFBLDhEQUFDQyxNQUFJOzhEQUFFdkMsT0FBTyxhQUFQQSxPQUFPLGNBQVBBLE9BQU8sR0FBSSw2QkFBNkI7Ozs7O3lEQUFROzs7Ozs7aURBQUk7Ozs7Ozt5Q0FDL0Q7OENBRVYsOERBQUNrQyxTQUFPO29DQUFDbEIsU0FBUyxFQUFFLEVBQUMsQ0FBaUJwQixNQUFpQixDQUFoQ0EseUVBQVcsRUFBQyxHQUFDLENBQW9CLFFBQWxCQSwrRUFBaUIsQ0FBRTs7d0NBRXJEUyxHQUFHLGtCQUFJLDhEQUFDaUMsR0FBQzs7Z0RBQUUsb0JBQWtCOzhEQUFBLDhEQUFDQyxNQUFJOzhEQUFFbEMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7eURBQVE7Ozs7OztpREFBSTtzREFFeEQsOERBQUNpQyxHQUFDOztnREFBQyxhQUFXOzhEQUFBLDhEQUFDQyxNQUFJOzhEQUFFN0IsQ0FBQUEsS0FBVyxHQUFYQSxNQUFNLENBQUNYLElBQUksY0FBWFcsS0FBVyxjQUFYQSxLQUFXLEdBQUssK0JBQStCOzs7Ozt5REFBUTs7Ozs7O2lEQUFJO3dDQUU5RUEsQ0FBQUEsTUFBTSxhQUFOQSxNQUFNLFdBQVEsR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxNQUFNLENBQUUrQixNQUFNLG1CQUFLLDhEQUFDSCxHQUFDOztnREFBQyxvQkFBa0I7OERBQUEsOERBQUNDLE1BQUk7OERBQUU3QixNQUFNLENBQUMrQixNQUFNOzs7Ozt5REFBUTs7Ozs7O2lEQUFJO3dDQUV6RWxDLFNBQVMsa0JBQ1IsOERBQUMrQixHQUFDOztnREFBQyxZQUNIO2dEQUFDLEdBQUc7OERBQUMsOERBQUNDLE1BQUk7OERBRVI1QixNQUFNLENBQUNDLE1BQU0sQ0FBQ0wsU0FBUyxDQUFDLENBQUNtQyxJQUFJLENBQUMsSUFBSSxDQUFDOzs7Ozt5REFFOUI7Ozs7OztpREFDTDs7Ozs7O3lDQUVJO2dDQUVUNUMsQ0FBQUEsQ0FBQUEsR0FBVSxHQUFWQSxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQVZBLEdBQVUsV0FBUyxHQUFuQkEsS0FBQUEsQ0FBbUIsR0FBbkJBLEdBQVUsQ0FBRVUsT0FBTyxtQkFDbEIsOERBQUNoQiwyREFBTztvQ0FBQ2dCLE9BQU8sRUFBRUEsT0FBTzs7Ozs7eUNBQUk7Ozs7OztpQ0FHM0I7Ozs7Ozt5QkFDRDs7Ozs7O2lCQUNIOzs7OzthQUNELENBQ1Y7Q0FDRjtBQTFES1gsS0FBQUEsT0FBTzs7QUFzRmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb3VudHJ5L1tpZF0uanM/NWE4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0ICBCb3JkZXJzICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JvcmRlcnMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBmb3JtYXRvTnVtZXJvIGZyb20gJy4uLy4uL2hlbHBlcnMvZm9ybWF0b051bWVyb3MnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Db3VudHJ5Lm1vZHVsZS5zY3NzJztcclxuY29uc3QgQ291bnRyeSA9ICh7Y291bnRyeX0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7bmFtZSwgY2FwaXRhbCwgcG9wdWxhdGlvbiwgcmVnaW9uLCBmbGFncywgc3VicmVnaW9uLCB0bGQsIGN1cnJlbmNpZXMsIGxhbmd1YWdlcywgYm9yZGVycywgYWx0U3BlbGxpbmdzfSA9IGNvdW50cnlbMF07XHJcbiAgICBjb25zdCBtb25lZGEgPSBjdXJyZW5jaWVzID8gT2JqZWN0LnZhbHVlcyhjdXJyZW5jaWVzKVswXSA6ICcnO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0dWxvPXtuYW1lLmNvbW1vbn0+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW5lZG9yJz5cclxuICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPXtgYm94ICR7c3R5bGVzLmVubGFjZUJhY2t9YH0+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJiaSBiaS1hcnJvdy1sZWZ0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICA8cGF0aCAgZD1cIk0xNSA4YS41LjUgMCAwIDAtLjUtLjVIMi43MDdsMy4xNDctMy4xNDZhLjUuNSAwIDEgMC0uNzA4LS43MDhsLTQgNGEuNS41IDAgMCAwIDAgLjcwOGw0IDRhLjUuNSAwIDAgMCAuNzA4LS43MDhMMi43MDcgOC41SDE0LjVBLjUuNSAwIDAgMCAxNSA4elwiLz5cclxuICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgIEJhY2s8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbmlkb30+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ZsYWdzLnN2Z30gbGF5b3V0PVwiaW5cIiB3aWR0aD17Mjg4fSBoZWlnaHQ9ezE3NX0gYWx0PXtgJHtuYW1lLmNvbW1vbn0gZmxhZ2B9IHByaW9yaXR5IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbmVkb3JJbmZvfT5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cclxuICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm5vbWJyZX0+e25hbWUuY29tbW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5OYXRpdmUgTmFtZTogPHNwYW4+e2FsdFNwZWxsaW5nc1syXSA/PyBuYW1lLmNvbW1vbn08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+UG9wdWxhdGlvbjogPHNwYW4+e2Zvcm1hdG9OdW1lcm8ocG9wdWxhdGlvbil9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlJlZ2lvbjogPHNwYW4+e3JlZ2lvbn08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+U3ViIFJlZ2lvbjogPHNwYW4+e3N1YnJlZ2lvbiA/PyBcIlRoaXMgY291bnRyeSBoYXNuJ3QgU3ViIFJlZ2lvblwifTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5DYXBpdGFsOiA8c3Bhbj57Y2FwaXRhbCA/PyBcIlRoaXMgY291bnRyeSBoYXNuJ3QgY2FwaXRhbFwifTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbmZvfSAke3N0eWxlcy5JbmZvU2Vjb25kfWB9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0bGQgJiYgPHAgPlRvcCBMZXZlbCBEb21haW46IDxzcGFuPnt0bGRbMF19PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxwPkN1cnJlbmNpZTogPHNwYW4+e21vbmVkYS5uYW1lID8/ICBcIlRoaXMgY291bnRyeSBoYXNuJ3QgY3VycmVuY2llXCJ9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbW9uZWRhPy5zeW1ib2wgJiYgIDxwPkN1cnJlbmNpZSBzeW1ib2w6IDxzcGFuPnttb25lZGEuc3ltYm9sfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2VzICYmXHJcbiAgICAgICAgICAgICAgICAgIDxwPkxlbmd1YWdlczogIFxyXG4gICAgICAgICAgICAgICAgICB7JyAnfTxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhsYW5ndWFnZXMpLmpvaW4oJywgJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGNvdW50cnlbMF0/LmJvcmRlcnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEJvcmRlcnMgYm9yZGVycz17Ym9yZGVyc30gLz5cclxuICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAvL1RvZG9zIGxvcyB2YWxvcmVzIGRlIGxhIEFQSSBwYXJhIHF1ZSBoYWdhIGxhcyBwYWdpbmFzIHkgc2VhIG1hcyByYXBpZG9cclxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL2FsbD9maWVsZHM9bmFtZSxjYXBpdGFsLHBvcHVsYXRpb24scmVnaW9uLGZsYWdzLHN1YnJlZ2lvbix0bGQsY3VycmVuY2llcyxsYW5ndWFnZXMsYm9yZGVycyxhbHRTcGVsbGluZ3MnO1xyXG4gIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgcmVzcHVlc3RhLmpzb24oKTtcclxuLy95YSBxdWUgbGFzIHJ1dGFzIHNlIGJhc2FuIGVuIGVsIG5vbWJyZVxyXG4gIGNvbnN0IHBhdGhzID0gcmVzdWx0YWRvLm1hcChjb3VudHJpZSA9Pih7XHJcbiAgICBwYXJhbXM6e2lkOmNvdW50cmllLm5hbWUuY29tbW9ufVxyXG4gIH0pKTtcclxuICAvL1JldG9ybmFtb3MgbGEgcnV0YXNcclxuICByZXR1cm57XHJcbiAgICAgIHBhdGhzLFxyXG4gICAgICBmYWxsYmFjazogZmFsc2VcclxuICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vT2J0ZW5lbW9zIGF1dG9tYXRpY2FtZW50ZSBlbCBpZCBkZSBsYSB1cmxcclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6e2lkfSB9KSB7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL25hbWUvJHtpZH1gO1xyXG4gICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGNvdW50cnkgPSBhd2FpdCByZXNwdWVzdGEuanNvbigpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgY291bnRyeVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmV4cG9ydCBkZWZhdWx0IENvdW50cnk7Il0sIm5hbWVzIjpbIkxheW91dCIsIkJvcmRlcnMiLCJJbWFnZSIsIkxpbmsiLCJmb3JtYXRvTnVtZXJvIiwic3R5bGVzIiwiQ291bnRyeSIsImNvdW50cnkiLCJuYW1lIiwiY2FwaXRhbCIsInBvcHVsYXRpb24iLCJyZWdpb24iLCJmbGFncyIsInN1YnJlZ2lvbiIsInRsZCIsImN1cnJlbmNpZXMiLCJsYW5ndWFnZXMiLCJib3JkZXJzIiwiYWx0U3BlbGxpbmdzIiwibW9uZWRhIiwiT2JqZWN0IiwidmFsdWVzIiwidGl0dWxvIiwiY29tbW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJlbmxhY2VCYWNrIiwic3ZnIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJjb250ZW5pZG8iLCJzcmMiLCJsYXlvdXQiLCJhbHQiLCJwcmlvcml0eSIsImNvbnRlbmVkb3JJbmZvIiwic2VjdGlvbiIsImluZm8iLCJoMiIsIm5vbWJyZSIsInAiLCJzcGFuIiwiSW5mb1NlY29uZCIsInN5bWJvbCIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/country/[id].js\n"));

/***/ })

});