(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,193];
exports.modules = {

/***/ 742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/header.js





function Header({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "React Tic-Tac-Toe"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "Tic-Tac-Toe"
      }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: "header-nav",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/",
              children: "Home"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/tic-tac-toe",
              children: "Play"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/multiplayer",
              children: "Online"
            })
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    })]
  });
}
;// CONCATENATED MODULE: ./components/footer.js



function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "Fadi Tawfig"
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/info",
        children: "Project Info"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://porfolio.faditawfig.com",
        children: "Portfolio"
      })
    })]
  });
}
// EXTERNAL MODULE: ./tic-tac-toe.scss
var tic_tac_toe = __webpack_require__(113);
;// CONCATENATED MODULE: ./pages/_app.js


 // This default export is required in a new `pages/_app.js` file.




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "game",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, { ...pageProps
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg"
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}

/***/ }),

/***/ 113:
/***/ (() => {



/***/ }),

/***/ 280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
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
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(742)));
module.exports = __webpack_exports__;

})();