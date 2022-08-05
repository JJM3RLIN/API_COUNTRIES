(() => {
var exports = {};
exports.id = 226;
exports.ids = [226];
exports.modules = {

/***/ 1023:
/***/ ((module) => {

// Exports
module.exports = {
	"borders": "Borders_borders__8I_4i",
	"listBorders": "Borders_listBorders__W9NP_"
};


/***/ }),

/***/ 8460:
/***/ ((module) => {

// Exports
module.exports = {
	"enlaceBack": "Country_enlaceBack__cFb78",
	"contenido": "Country_contenido__BUG3s",
	"imagen": "Country_imagen__3pDN8",
	"contenedorInfo": "Country_contenedorInfo__RXge9",
	"info": "Country_info__9T1Qw",
	"nombre": "Country_nombre__1aq_9",
	"InfoSecond": "Country_InfoSecond__vIIVN"
};


/***/ }),

/***/ 9606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(5789);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Border.js


const Border = ({ border  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/country/${border}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: "#",
            className: "box",
            children: border
        })
    });
};
/* harmony default export */ const components_Border = (Border);

// EXTERNAL MODULE: ./styles/Borders.module.scss
var Borders_module = __webpack_require__(1023);
var Borders_module_default = /*#__PURE__*/__webpack_require__.n(Borders_module);
;// CONCATENATED MODULE: ./components/Borders.js



const Borders = ({ borders  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (Borders_module_default()).borders,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Border Countries: "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Borders_module_default()).listBorders,
                children: borders.map((border)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Border, {
                        border: border
                    }, border))
            })
        ]
    });
};
/* harmony default export */ const components_Borders = (Borders);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/Country.module.scss
var Country_module = __webpack_require__(8460);
var Country_module_default = /*#__PURE__*/__webpack_require__.n(Country_module);
;// CONCATENATED MODULE: ./pages/country/[id].js






const Country = ({ country  })=>{
    var ref;
    const { name , capital , population , region , flags , subregion , tld , currencies , languages , borders , altSpellings  } = country[0];
    const moneda = currencies ? Object.values(currencies)[0] : "";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        titulo: name.common,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#",
                    className: `box ${(Country_module_default()).enlaceBack}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            fill: "currentColor",
                            className: "bi bi-arrow-left",
                            viewBox: "0 0 16 16",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                            })
                        }),
                        "Back"
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Country_module_default()).contenido,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Country_module_default()).imagen,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: flags.svg,
                            layout: "intrinsic",
                            width: 320,
                            height: 181,
                            alt: `${name.common} flag`,
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Country_module_default()).contenedorInfo,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: (Country_module_default()).info,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (Country_module_default()).nombre,
                                        children: name.common
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Native Name: ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: altSpellings[2] ?? name.common
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Population: ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: population.toLocaleString("en-US")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Region: ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: region
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Sub Region: ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: subregion ?? "This country hasn't Sub Region"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Capital: ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: capital ?? "This country hasn't capital"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: `${(Country_module_default()).info} ${(Country_module_default()).InfoSecond}`,
                                children: [
                                    tld && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Top Level Domain: ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: tld[0]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Currencie: ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: moneda.name ?? "This country hasn't currencie"
                                            })
                                        ]
                                    }),
                                    (moneda === null || moneda === void 0 ? void 0 : moneda.symbol) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Currencie symbol: ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: moneda.symbol
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Lenguages:",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: languages ? " " + Object.values(languages).join(", ") : ""
                                            })
                                        ]
                                    })
                                ]
                            }),
                            ((ref = country[0]) === null || ref === void 0 ? void 0 : ref.borders) && /*#__PURE__*/ jsx_runtime_.jsx(components_Borders, {
                                borders: borders
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
async function getStaticPaths() {
    //Todos los valores de la API para que haga las paginas y sea mas rapido
    const url = "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,subregion,tld,currencies,languages,borders,altSpellings,cca3";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    //ya que las rutas se basan en el nombre
    const paths = resultado.map((country)=>({
            params: {
                id: country.cca3
            }
        }));
    //Retornamos la rutas
    return {
        paths,
        fallback: false
    };
}
//Obtenemos automaticamente el id de la url
async function getStaticProps({ params: { id  }  }) {
    const url = `https://restcountries.com/v3.1/alpha/${id}`;
    const respuesta = await fetch(url);
    const country = await respuesta.json();
    return {
        props: {
            country
        }
    };
}
/* harmony default export */ const _id_ = (Country);


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9646:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,789], () => (__webpack_exec__(9606)));
module.exports = __webpack_exports__;

})();