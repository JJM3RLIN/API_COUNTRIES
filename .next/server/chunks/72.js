exports.id = 72;
exports.ids = [72];
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

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./helpers/ActivarDarkMode.js
function activarDarkMode() {
    document.querySelector("body").classList.toggle("darkMode");
};

// EXTERNAL MODULE: ./styles/Layout.module.scss
var Layout_module = __webpack_require__(5005);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Layout.js




const Layout = ({ titulo , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            "Countries | ",
                            titulo
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        crossOrigin: true,
                        href: "https://fonts.gstatic.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: `${(Layout_module_default()).header} mode`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Layout_module_default()).contenidoHeader,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Where in the world?"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            onClick: activarDarkMode,
                            className: (Layout_module_default()).darkModeBtn,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    className: `${(Layout_module_default()).biDarkMode} biDark`,
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Dark Mode"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "contenedor",
                children: children
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ formatoNumero)
/* harmony export */ });
function formatoNumero(numero) {
    return numero.toLocaleString("en-US");
};


/***/ })

};
;