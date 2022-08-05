(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1371:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "ContenedorCountry_card__oIOlZ",
	"imagen": "ContenedorCountry_imagen___akc8",
	"nombre": "ContenedorCountry_nombre___daJA"
};


/***/ }),

/***/ 2876:
/***/ ((module) => {

// Exports
module.exports = {
	"filtros": "Filtros_filtros__GpAXC",
	"campo": "Filtros_campo__7FBrg"
};


/***/ }),

/***/ 3110:
/***/ ((module) => {

// Exports
module.exports = {
	"listado": "Home_listado__WT3vA"
};


/***/ }),

/***/ 2504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(5789);
// EXTERNAL MODULE: ./styles/Filtros.module.scss
var Filtros_module = __webpack_require__(2876);
var Filtros_module_default = /*#__PURE__*/__webpack_require__.n(Filtros_module);
;// CONCATENATED MODULE: ./components/Filtros.js


const Filtros = ({ setFilterName , setFilterRegion  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Filtros_module_default()).filtros,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(Filtros_module_default()).campo} mode`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25",
                        height: "25",
                        fill: "currentColor",
                        className: "bi bi-search",
                        viewBox: "0 0 16 16",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Search for a country...",
                        onChange: (e)=>setFilterName(e.target.value.trim().toLocaleLowerCase())
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                className: "selectFiltro",
                onChange: (e)=>setFilterRegion(e.target.value.trim()),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "",
                        children: "Filter by Region"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "Africa",
                        children: "Africa"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "Americas",
                        children: "America"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "Asia",
                        children: "Asia"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "Europe",
                        children: "Europe"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "Oceania",
                        children: "Oceania"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Filtros = (Filtros);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
// EXTERNAL MODULE: ./styles/ContenedorCountry.module.scss
var ContenedorCountry_module = __webpack_require__(1371);
var ContenedorCountry_module_default = /*#__PURE__*/__webpack_require__.n(ContenedorCountry_module);
;// CONCATENATED MODULE: ./components/ContenedorCountry.js





const ContenedorCountry = ({ country  })=>{
    const { region , capital , population , name , flags , cca3  } = country;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(ContenedorCountry_module_default()).card} mode`,
        onClick: ()=>router_default().push(`/country/${cca3}`),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ContenedorCountry_module_default()).imagen,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    layout: "intrinsic",
                    loading: "lazy",
                    width: 320,
                    height: 180,
                    src: flags.svg,
                    alt: `${name.common} flag`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/country/${cca3}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (ContenedorCountry_module_default()).nombre,
                    children: name.common
                })
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
                    "Capital: ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: capital
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ContenedorCountry = (ContenedorCountry);

// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(3110);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/index.js

/* MADE IT BY M3RLIN */ 




function Home({ countries , slice  }) {
    //Filtros
    const { 0: filterName , 1: setFilterName  } = (0,external_react_.useState)("");
    const { 0: filterRegion , 1: setFilterRegion  } = (0,external_react_.useState)("");
    //Arreglo que contendra los países filtrados
    const { 0: paisesFiltrados , 1: setPaisesFiltrados  } = (0,external_react_.useState)(slice);
    (0,external_react_.useEffect)(()=>{
        if (filterName !== "" && filterRegion !== "") setPaisesFiltrados(countries.filter((country)=>country.name.common.toLowerCase().includes(filterName) && country.region === filterRegion));
        else if (filterName !== "") setPaisesFiltrados(countries.filter((country)=>country.name.common.toLowerCase().includes(filterName)));
        else if (filterRegion !== "") setPaisesFiltrados(countries.filter((country)=>country.region === filterRegion));
    }, [
        filterName,
        filterRegion,
        countries
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        titulo: "Home",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Filtros, {
                setFilterName: setFilterName,
                setFilterRegion: setFilterRegion
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).listado,
                children: paisesFiltrados.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "That Country does no exist"
                }) : paisesFiltrados.map((country)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ContenedorCountry, {
                        country: country
                    }, country.name.official))
            })
        ]
    });
};
async function getServerSideProps() {
    const url = "https://restcountries.com/v3.1/all?fields=region,capital,population,name,flags,cca3";
    const respuesta = await fetch(url);
    const countries = await respuesta.json();
    const slice = countries.slice(0, 15);
    return {
        props: {
            countries,
            slice
        }
    };
}


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,789], () => (__webpack_exec__(2504)));
module.exports = __webpack_exports__;

})();