exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 5005:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Layout_header__M_IZ8",
	"contenidoHeader": "Layout_contenidoHeader__MWyuy",
	"darkModeBtn": "Layout_darkModeBtn__oovL_",
	"biDarkMode": "Layout_biDarkMode__R6XvQ"
};


/***/ }),

/***/ 5789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5005);
/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Layout = ({ titulo , children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "Countries | ",
                            titulo
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "This web show you all the countries in the world and its information"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: "Jorge M3rlin"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        crossOrigin: true,
                        href: "https://fonts.gstatic.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: `${(_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header)} mode`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().contenidoHeader),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "Where in the world?"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>document.querySelector("body").classList.toggle("darkMode"),
                            className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().darkModeBtn),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    className: `${(_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().biDarkMode)} biDark`,
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Dark Mode"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "contenedor",
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ })

};
;