/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Geologica:wght@100;200;300;400;500;600;700;800;900&family=Merriweather:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: rgb(254, 248, 224);
  --secondary-color: rgb(0, 0, 0);
  --text-size: 16px;
  --font-family: "Geologica", sans-serif;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  font-size: var(--text-size);
  font-family: var(--font-family);
  overflow-x: hidden;
}

body.overflow {
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 30px;
  margin-bottom: 3rem;
}

/* header */
.header {
  padding-top: 30px;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--secondary-color);
}

img {
  width: 100%;
  height: auto;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  font-family: "Merriweather", serif;
}

.nav-link,
.action-btn {
  font-size: 1.5rem;
}

.nav-link:hover {
  border-bottom: 2px solid var(--secondary-color);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.hamburger {
  display: block;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: var(--secondary-color);
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.nav-menu {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background: var(--primary-color);
  text-align: center;
  padding: 1rem;
  transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
  overflow: hidden;
}

.nav-menu.active {
  top: 55px;
}

.action-btn {
  display: block;
  padding: 0.5rem 1rem;
  border: 2px solid var(--secondary-color);
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  background-color: transparent;
}

.action-btn:hover {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  scale: 1.05;
}

.action-btn:active {
  scale: 0.95;
}

/* home */
.home__title {
  padding-top: 3rem;
  font-size: 2.25rem;
  font-weight: 400;
  margin-bottom: 3rem;
  text-align: center;
  font-family: "Merriweather", serif;
}

.home__info {
  font-size: 1.75rem;
}

.home__info p {
  margin-bottom: 1rem;
}

.img {
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.home__img {
  width: 300px;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  object-position: center;
  margin-inline: auto;
}

/* about */
.about__img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  overflow: hidden;
  object-position: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.about__img-container {
  height: 100%;
  width: 100%;
  margin-bottom: 2rem;
}

.about__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  line-height: 1.5;
  font-size: 1.125rem;
  font-weight: 300;
}

.about__title {
  font-size: 1.5rem;
  font-family: "Merriweather", serif;
}

/* menu */
.menu__header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-top: 3rem;
}

.menu__title {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  text-align: center;
  font-family: "Merriweather", serif;
}

.menu__list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.menu__item {
  font-size: 1rem;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 5rem;
}

.menu__item-name {
  font-size: 1.125rem;
  font-weight: 400;
}

.menu__item-description {
  font-size: 0.875rem;
  font-weight: 200;
}

.menu__item-price {
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
}

/* contact */
.contact__title {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Merriweather", serif;
}

.contact__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

/* footer */
.footer {
  margin-bottom: 1rem;
}
.footer__list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.footer__link {
  font-size: 1rem;
  font-weight: 300;
}

.footer__item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}

.footer__link:hover {
  border-bottom: 2px solid var(--secondary-color);
}

.footer__info {
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
}

.footer__info--phone {
  font-size: 1.125rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 2rem;
}

.footer__info--made {
  line-height: 1.5;
  font-size: 0.5rem;
  font-weight: 100;
  text-align: center;
}

/* RESPONSIVE DESIGN */
@media screen and (min-width: 640px) {
  .nav-menu {
    position: static;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    flex-direction: row;
    background: transparent;
    backdrop-filter: none;
    text-align: center;
    padding: 0;
    transition: none;
    overflow: visible;
    gap: 2rem;
  }

  .logo {
    font-size: 1.725rem;
  }

  .nav-menu.active {
    top: 0;
  }

  .hamburger {
    display: none;
  }

  .nav-menu li a {
    font-size: 1rem;
  }

  .action-btn {
    font-weight: 400;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  .about__img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    border-radius: 5px;
    overflow: hidden;
    object-position: center;
    object-fit: contain;
  }

  .about__img-container {
    width: 640px;
    margin-inline: auto;
  }
}

@media screen and (min-width: 880px) {
  .menu__list {
    display: grid;
    grid-template-columns: repeat(2, 400px);
    gap: 3rem;
  }

  .menu__item {
    gap: 3rem;
  }

  .menu__list-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,sCAAsC;EACtC,6BAA6B;EAC7B,2BAA2B;EAC3B,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA,WAAW;AACX;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kCAAkC;AACpC;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,wCAAwC;EACxC,gCAAgC;EAChC,wCAAwC;AAC1C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,gCAAgC;EAChC,kBAAkB;EAClB,aAAa;EACb,wDAAwD;EACxD,gBAAgB;AAClB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,cAAc;EACd,oBAAoB;EACpB,wCAAwC;EACxC,kBAAkB;EAClB,gBAAgB;EAChB,gCAAgC;EAChC,6BAA6B;AAC/B;;AAEA;EACE,wCAAwC;EACxC,2BAA2B;EAC3B,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA,SAAS;AACT;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,wCAAwC;EACxC,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,wCAAwC;EACxC,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,UAAU;AACV;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,kCAAkC;AACpC;;AAEA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA,WAAW;AACX;EACE,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,sBAAsB;AACtB;EACE;IACE,gBAAgB;IAChB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;IACrB,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,iBAAiB;IACjB,SAAS;EACX;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,MAAM;EACR;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,oBAAoB;IACpB,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,aAAa;IACb,uCAAuC;IACvC,SAAS;EACX;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Geologica:wght@100;200;300;400;500;600;700;800;900&family=Merriweather:wght@700&display=swap\");\r\n\r\n:root {\r\n  --primary-color: rgb(254, 248, 224);\r\n  --secondary-color: rgb(0, 0, 0);\r\n  --text-size: 16px;\r\n  --font-family: \"Geologica\", sans-serif;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: var(--primary-color);\r\n  color: var(--secondary-color);\r\n  font-size: var(--text-size);\r\n  font-family: var(--font-family);\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody.overflow {\r\n  overflow: hidden;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  margin-inline: auto;\r\n  padding-inline: 30px;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n/* header */\r\n.header {\r\n  padding-top: 30px;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--secondary-color);\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.logo {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  font-family: \"Merriweather\", serif;\r\n}\r\n\r\n.nav-link,\r\n.action-btn {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav-link:hover {\r\n  border-bottom: 2px solid var(--secondary-color);\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-menu {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.hamburger {\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n\r\n.bar {\r\n  display: block;\r\n  width: 25px;\r\n  height: 3px;\r\n  margin: 5px auto;\r\n  background-color: var(--secondary-color);\r\n  transition: all 0.3s ease-in-out;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.hamburger.active .bar:nth-child(1) {\r\n  transform: translateY(8px) rotate(45deg);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(2) {\r\n  opacity: 0;\r\n}\r\n\r\n.hamburger.active .bar:nth-child(3) {\r\n  transform: translateY(-8px) rotate(-45deg);\r\n}\r\n\r\n.nav-menu {\r\n  position: absolute;\r\n  top: -100%;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  flex-direction: column;\r\n  background: var(--primary-color);\r\n  text-align: center;\r\n  padding: 1rem;\r\n  transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);\r\n  overflow: hidden;\r\n}\r\n\r\n.nav-menu.active {\r\n  top: 55px;\r\n}\r\n\r\n.action-btn {\r\n  display: block;\r\n  padding: 0.5rem 1rem;\r\n  border: 2px solid var(--secondary-color);\r\n  border-radius: 5px;\r\n  font-weight: 500;\r\n  transition: all 0.3s ease-in-out;\r\n  background-color: transparent;\r\n}\r\n\r\n.action-btn:hover {\r\n  background-color: var(--secondary-color);\r\n  color: var(--primary-color);\r\n  scale: 1.05;\r\n}\r\n\r\n.action-btn:active {\r\n  scale: 0.95;\r\n}\r\n\r\n/* home */\r\n.home__title {\r\n  padding-top: 3rem;\r\n  font-size: 2.25rem;\r\n  font-weight: 400;\r\n  margin-bottom: 3rem;\r\n  text-align: center;\r\n  font-family: \"Merriweather\", serif;\r\n}\r\n\r\n.home__info {\r\n  font-size: 1.75rem;\r\n}\r\n\r\n.home__info p {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.img {\r\n  object-fit: contain;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);\r\n  overflow: hidden;\r\n}\r\n\r\n.home__img {\r\n  width: 300px;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);\r\n  overflow: hidden;\r\n  object-position: center;\r\n  margin-inline: auto;\r\n}\r\n\r\n/* about */\r\n.about__img {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  object-position: center;\r\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.about__img-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.about__text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  gap: 1rem;\r\n  line-height: 1.5;\r\n  font-size: 1.125rem;\r\n  font-weight: 300;\r\n}\r\n\r\n.about__title {\r\n  font-size: 1.5rem;\r\n  font-family: \"Merriweather\", serif;\r\n}\r\n\r\n/* menu */\r\n.menu__header-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  margin-bottom: 1rem;\r\n  padding-top: 3rem;\r\n}\r\n\r\n.menu__title {\r\n  font-size: 1.5rem;\r\n  font-weight: 400;\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n  font-family: \"Merriweather\", serif;\r\n}\r\n\r\n.menu__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.25rem;\r\n}\r\n\r\n.menu__item {\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n  gap: 5rem;\r\n}\r\n\r\n.menu__item-name {\r\n  font-size: 1.125rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.menu__item-description {\r\n  font-size: 0.875rem;\r\n  font-weight: 200;\r\n}\r\n\r\n.menu__item-price {\r\n  font-size: 1.125rem;\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\n/* contact */\r\n.contact__title {\r\n  font-size: 1.5rem;\r\n  font-weight: 400;\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n  font-family: \"Merriweather\", serif;\r\n}\r\n\r\n.contact__info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n/* footer */\r\n.footer {\r\n  margin-bottom: 1rem;\r\n}\r\n.footer__list {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0.75rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.footer__link {\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n}\r\n\r\n.footer__item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0.75rem;\r\n}\r\n\r\n.footer__link:hover {\r\n  border-bottom: 2px solid var(--secondary-color);\r\n}\r\n\r\n.footer__info {\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n  text-align: center;\r\n}\r\n\r\n.footer__info--phone {\r\n  font-size: 1.125rem;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.footer__info--made {\r\n  line-height: 1.5;\r\n  font-size: 0.5rem;\r\n  font-weight: 100;\r\n  text-align: center;\r\n}\r\n\r\n/* RESPONSIVE DESIGN */\r\n@media screen and (min-width: 640px) {\r\n  .nav-menu {\r\n    position: static;\r\n    top: 0;\r\n    left: 0;\r\n    width: auto;\r\n    height: auto;\r\n    flex-direction: row;\r\n    background: transparent;\r\n    backdrop-filter: none;\r\n    text-align: center;\r\n    padding: 0;\r\n    transition: none;\r\n    overflow: visible;\r\n    gap: 2rem;\r\n  }\r\n\r\n  .logo {\r\n    font-size: 1.725rem;\r\n  }\r\n\r\n  .nav-menu.active {\r\n    top: 0;\r\n  }\r\n\r\n  .hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .nav-menu li a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .action-btn {\r\n    font-weight: 400;\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .about__img {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    display: block;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    object-position: center;\r\n    object-fit: contain;\r\n  }\r\n\r\n  .about__img-container {\r\n    width: 640px;\r\n    margin-inline: auto;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 880px) {\r\n  .menu__list {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 400px);\r\n    gap: 3rem;\r\n  }\r\n\r\n  .menu__item {\r\n    gap: 3rem;\r\n  }\r\n\r\n  .menu__list-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/component/firstLoad.js":
/*!************************************!*\
  !*** ./src/component/firstLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstLoad: () => (/* binding */ firstLoad)
/* harmony export */ });
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/header */ "./src/component/header.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ "./src/pages/home.js");
/* harmony import */ var _component_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/footer */ "./src/component/footer.js");




const firstLoad = () => {
  (0,_component_header__WEBPACK_IMPORTED_MODULE_0__.header)();
  (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__.home)();
  (0,_component_footer__WEBPACK_IMPORTED_MODULE_2__.footer)();
};




/***/ }),

/***/ "./src/component/footer.js":
/*!*********************************!*\
  !*** ./src/component/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footer: () => (/* binding */ footer)
/* harmony export */ });
const footer = () => {
  const content = document.querySelector("#content");
  const footer = document.createElement("footer");
  footer.classList.add("footer", "container");

  const footerDiv = document.createElement("div");
  const footerList = document.createElement("ul");
  footerList.classList.add("footer__list");
  const footerItems = ["menu", "about", "contact", "book a Table"];
  footerItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("footer__item");
    const a = document.createElement("a");
    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-square", "fa-2xs");
    a.classList.add("footer__link");
    a.textContent = `${[item.charAt(0).toUpperCase()]}${[item.slice(1)]}`;
    a.href = `#${item}`;
    li.appendChild(a);
    li.appendChild(i);
    footerList.appendChild(li);
  });
  footerDiv.appendChild(footerList);
  footer.appendChild(footerDiv);

  const footerInfo = document.createElement("div");
  footerInfo.classList.add("footer__info");
  const footerInfoText1 = document.createElement("p");
  const footerInfoText2 = document.createElement("div");
  footerInfoText1.textContent = "+55 11 1234-5678";
  footerInfoText1.classList.add("footer__info--phone");
  footerInfoText2.innerHTML = `<p class="footer__info--made">Made by <a href="https://github.com/" target="_blank" class="footer__icon"><i class="fa-brands fa-github fa-2xs"></i></a></p>`;
  footerInfo.appendChild(footerInfoText1);
  footerInfo.appendChild(footerInfoText2);
  footer.appendChild(footerInfo);

  content.appendChild(footer);
};




/***/ }),

/***/ "./src/component/header.js":
/*!*********************************!*\
  !*** ./src/component/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
const header = () => {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  header.classList.add("container", "header");

  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  header.appendChild(navbar);

  const logo = document.createElement("a");
  logo.classList.add("logo");
  logo.textContent = "The Corner";
  logo.href = "#home";
  navbar.appendChild(logo);

  const nav = document.createElement("ul");
  nav.classList.add("nav-menu");
  const navItems = ["menu", "about", "contact"];
  navItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("nav-item");
    const a = document.createElement("a");
    a.classList.add("nav-link");
    a.textContent = `${[item.charAt(0).toUpperCase()]}${[item.slice(1)]}`;
    a.href = `#${item}`;
    li.appendChild(a);
    nav.appendChild(li);
  });
  navbar.appendChild(nav);

  const actionBtn = document.createElement("a");
  actionBtn.classList.add("action-btn");
  actionBtn.textContent = "Book a Table";
  actionBtn.href = "#order";
  nav.appendChild(actionBtn);

  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  const hamburgerItems = ["", "", ""];
  hamburgerItems.forEach((item) => {
    const span = document.createElement("span");
    hamburger.appendChild(span);
    span.classList.add("bar");
  });
  navbar.appendChild(hamburger);

  content.appendChild(header);

  hamburgerMenu();
};

const hamburgerMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const homeButton = document.querySelector(".logo");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("overflow");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("overflow");
    })
  );

  homeButton.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("overflow");
  });
};




/***/ }),

/***/ "./src/component/render.js":
/*!*********************************!*\
  !*** ./src/component/render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
const render = () => {
  const content = document.querySelector("#content");
  content.style = "";
  content.children[1].remove();
};




/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   about: () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _img_about_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/about.jpg */ "./src/img/about.jpg");


const about = () => {
  const content = document.querySelector("#content");
  const about = document.createElement("section");
  about.classList.add("about", "container");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("about__img-container");
  const img = new Image();
  img.src = _img_about_jpg__WEBPACK_IMPORTED_MODULE_0__;
  img.alt = "about";
  img.classList.add("about__img");
  imgContainer.appendChild(img);
  about.appendChild(imgContainer);

  const aboutText = document.createElement("div");
  aboutText.classList.add("about__text");
  const aboutTitle = document.createElement("h2");
  aboutTitle.classList.add("about__title");
  aboutTitle.textContent = "About Us";
  aboutText.appendChild(aboutTitle);
  const info = [
    "Hey there! We're a team of friendly folks who love serving up great drinks in a fun, laid-back atmosphere. We believe that a good bar is all about community, and we strive to make every person who walks through our doors feel like they're part of ours. Our staff is always happy to chat, recommend drinks, and provide top-notch service.",
    "We take pride in our selection of beers, wines, cocktails, and spirits, and we're always experimenting with new flavors and ingredients to keep things interesting. We want you to have a great time at our bar, whether you're stopping in for a quick drink or settling in for a night out with friends.",
    "So come on in, grab a drink, and let's have some fun!",
  ];
  info.forEach((text) => {
    const aboutInfo = document.createElement("p");
    aboutInfo.classList.add("about__info");
    aboutInfo.textContent = text;
    aboutText.appendChild(aboutInfo);
  });

  about.appendChild(aboutText);
  content.appendChild(about);

  return about;
};




/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact)
/* harmony export */ });
const contact = () => {
  const content = document.querySelector("#content");
  const contact = document.createElement("section");
  contact.classList.add("contact", "container");

  const contactHeader = document.createElement("div");
  contactHeader.classList.add("contact__header");
  const contactTitle1 = document.createElement("p");
  contactTitle1.classList.add("contact__title");
  contactTitle1.textContent = "123 Demo St.";
  const contactTitle2 = document.createElement("p");
  contactTitle2.classList.add("contact__title");
  contactTitle2.textContent = "New York, NY 10001";
  contactHeader.appendChild(contactTitle1);
  contactHeader.appendChild(contactTitle2);
  contact.appendChild(contactHeader);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact__info");
  const contactInfoText1 = document.createElement("p");
  contactInfoText1.textContent = "18:00 to 03:00";
  const contactInfoText2 = document.createElement("p");
  contactInfoText2.textContent = "Monday to Sunday";
  contactInfo.appendChild(contactInfoText1);
  contactInfo.appendChild(contactInfoText2);
  contactHeader.appendChild(contactInfo);

  content.appendChild(contact);
  return contact;
};




/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _img_hero_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/hero-1.jpg */ "./src/img/hero-1.jpg");


const home = () => {
  const content = document.querySelector("#content");
  const home = document.createElement("section");
  home.classList.add("home", "container");

  const homeTitle = document.createElement("div");
  homeTitle.classList.add("home__title");
  const homeTitle1 = document.createElement("p");
  const homeTitle2 = document.createElement("p");
  homeTitle1.textContent = "123 Demo St.";
  homeTitle2.textContent = "New York, NY 10001";
  homeTitle.appendChild(homeTitle1);
  homeTitle.appendChild(homeTitle2);
  home.appendChild(homeTitle);

  const homeImg = document.createElement("div");
  homeImg.classList.add("home__img");
  const img = new Image();
  img.src = _img_hero_1_jpg__WEBPACK_IMPORTED_MODULE_0__;
  img.alt = "hero";
  img.classList.add("img");
  homeImg.appendChild(img);
  home.appendChild(homeImg);

  const homeInfo = document.createElement("div");
  homeInfo.classList.add("home__title", "home__info");
  const homeInfoText1 = document.createElement("p");
  homeInfoText1.textContent = "18:00 to 03:00";
  const homeInfoText2 = document.createElement("p");
  homeInfoText2.textContent = "Monday to Sunday";
  homeInfo.appendChild(homeInfoText1);
  homeInfo.appendChild(homeInfoText2);
  home.appendChild(homeInfo);

  content.appendChild(home);

  return home;
};




/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
const drinks = () => {
  const drinks = [
    {
      name: "Margarita",
      price: 10,
      description: "Tequila, Triple Sec, Lime Juice, Salt Rim, Lime Wedge",
    },
    {
      name: "Old Fashioned",
      price: 12,
      description: "Bourbon, Sugar, Bitters, Orange Twist",
    },
    {
      name: "Moscow Mule",
      price: 9,
      description: "Vodka, Ginger Beer, Lime Juice, Copper Mug, Lime Wedge",
    },
    {
      name: "French 75",
      price: 14,
      description:
        "Gin, Lemon Juice, Simple Syrup, Champagne, Champagne Flute, Lemon Twist",
    },
    {
      name: "Paloma",
      price: 11,
      description:
        "Tequila, Grapefruit Juice, Lime Juice, Soda Water, Salt Rim, Grapefruit Wedge",
    },
  ];
  return drinks;
};

const food = () => {
  const food = [
    {
      name: "Cheeseburger",
      price: 12,
      description:
        "Beef Patty, American Cheese, Lettuce, Tomato, Onion, Pickle, Brioche Bun",
    },
    {
      name: "Chicken Sandwich",
      price: 11,
      description:
        "Fried Chicken Breast, Lettuce, Tomato, Onion, Pickle, Brioche Bun",
    },
    {
      name: "Caesar Salad",
      price: 9,
      description:
        "Romaine Lettuce, Croutons, Parmesan Cheese, Caesar Dressing",
    },
    {
      name: "Chicken Wings",
      price: 10,
      description: "Buffalo, BBQ, or Plain",
    },
    {
      name: "Fries",
      price: 5,
      description: "French Fries, Ketchup",
    },
  ];
  return food;
};

const menu = () => {
  const content = document.querySelector("#content");
  const menu = document.createElement("section");
  menu.classList.add("menu", "container");

  const menuHeaderContainer = document.createElement("div");
  menuHeaderContainer.classList.add("menu__header-container");
  const menuTitle = document.createElement("h2");
  menuTitle.classList.add("menu__title");
  menuTitle.textContent = "Drinks";
  menuHeaderContainer.appendChild(menuTitle);
  menu.appendChild(menuHeaderContainer);

  const menuListContainer = document.createElement("div");
  menuListContainer.classList.add("menu__list-container");
  const menuList = document.createElement("ul");
  menuList.classList.add("menu__list");
  const items = drinks();
  items.forEach((drink) => {
    const div = document.createElement("div");
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu__item");

    const menuItemName = document.createElement("p");
    menuItemName.classList.add("menu__item-name");
    menuItemName.textContent = drink.name;

    const menuItemDescription = document.createElement("p");
    menuItemDescription.classList.add("menu__item-description");
    menuItemDescription.textContent = drink.description;

    const menuItemPrice = document.createElement("span");
    menuItemPrice.classList.add("menu__item-price");
    menuItemPrice.textContent = `$${drink.price}`;
    div.appendChild(menuItemName);
    div.appendChild(menuItemDescription);
    menuItem.appendChild(div);
    menuItem.appendChild(menuItemPrice);
    menuList.appendChild(menuItem);
  });
  menuListContainer.appendChild(menuList);
  menu.appendChild(menuListContainer);

  const menuHeaderContainer2 = document.createElement("div");
  menuHeaderContainer2.classList.add("menu__header-container");
  const menuTitle2 = document.createElement("h2");
  menuTitle2.classList.add("menu__title");
  menuTitle2.textContent = "Food";
  menuHeaderContainer2.appendChild(menuTitle2);
  menu.appendChild(menuHeaderContainer2);

  const menuListContainer2 = document.createElement("div");
  menuListContainer2.classList.add("menu__list-container");
  const menuList2 = document.createElement("ul");
  menuList2.classList.add("menu__list");
  const items2 = food();
  items2.forEach((food) => {
    const div = document.createElement("div");
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu__item");

    const menuItemName = document.createElement("p");
    menuItemName.classList.add("menu__item-name");
    menuItemName.textContent = food.name;

    const menuItemDescription = document.createElement("p");
    menuItemDescription.classList.add("menu__item-description");
    menuItemDescription.textContent = food.description;

    const menuItemPrice = document.createElement("span");
    menuItemPrice.classList.add("menu__item-price");
    menuItemPrice.textContent = `$${food.price}`;
    div.appendChild(menuItemName);
    div.appendChild(menuItemDescription);
    menuItem.appendChild(div);
    menuItem.appendChild(menuItemPrice);
    menuList2.appendChild(menuItem);
  });
  menuListContainer2.appendChild(menuList2);
  menu.appendChild(menuListContainer2);

  content.appendChild(menu);

  return menu;
};




/***/ }),

/***/ "./src/img/about.jpg":
/*!***************************!*\
  !*** ./src/img/about.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9017a9faff2822f4a768.jpg";

/***/ }),

/***/ "./src/img/hero-1.jpg":
/*!****************************!*\
  !*** ./src/img/hero-1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5692956f61cac6517092.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/home */ "./src/pages/home.js");
/* harmony import */ var _src_component_firstLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/component/firstLoad */ "./src/component/firstLoad.js");
/* harmony import */ var _src_pages_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/pages/about */ "./src/pages/about.js");
/* harmony import */ var _src_pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _src_component_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/component/render */ "./src/component/render.js");
/* harmony import */ var _src_pages_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _src_style_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/style/style.css */ "./src/style/style.css");








(0,_src_component_firstLoad__WEBPACK_IMPORTED_MODULE_1__.firstLoad)();

const homeButton = document.querySelector("a[href='#home']");
const aboutButtons = document.querySelectorAll("a[href='#about']");
const menuButtons = document.querySelectorAll("a[href='#menu']");
const contactButtons = document.querySelectorAll("a[href='#contact']");

homeButton.addEventListener("click", function () {
  const content = document.querySelector("#content");
  (0,_src_component_render__WEBPACK_IMPORTED_MODULE_4__.render)();
  content.insertBefore((0,_src_pages_home__WEBPACK_IMPORTED_MODULE_0__.home)(), content.children[1]);
});

aboutButtons.forEach((aboutButton) => {
  aboutButton.addEventListener("click", () => {
    const content = document.querySelector("#content");
    (0,_src_component_render__WEBPACK_IMPORTED_MODULE_4__.render)();
    content.insertBefore((0,_src_pages_about__WEBPACK_IMPORTED_MODULE_2__.about)(), content.children[1]);
  });
});

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = document.querySelector("#content");
    (0,_src_component_render__WEBPACK_IMPORTED_MODULE_4__.render)();
    content.insertBefore((0,_src_pages_menu__WEBPACK_IMPORTED_MODULE_3__.menu)(), content.children[1]);
  });
});

contactButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = document.querySelector("#content");
    (0,_src_component_render__WEBPACK_IMPORTED_MODULE_4__.render)();
    content.insertBefore((0,_src_pages_contact__WEBPACK_IMPORTED_MODULE_5__.contact)(), content.children[1]);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtIQUFrSCxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLCtDQUErQztBQUM3TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNGQUFzRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFB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O0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDa0I7Ozs7Ozs7Ozs7Ozs7OztBQzdFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkNBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7QUN4Q2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21COzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNENBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQjs7Ozs7Ozs7Ozs7Ozs7O0FDekNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFlBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxXQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekpoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F5QztBQUNjO0FBQ1o7QUFDRjtBQUNRO0FBQ0Y7QUFDZjtBQUNoQztBQUNBLG1FQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQU07QUFDUix1QkFBdUIscURBQUk7QUFDM0IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBTTtBQUNWLHlCQUF5Qix1REFBSztBQUM5QixHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBTTtBQUNWLHlCQUF5QixxREFBSTtBQUM3QixHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBTTtBQUNWLHlCQUF5QiwyREFBTztBQUNoQyxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZS1jb3JuZXIvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RoZS1jb3JuZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoZS1jb3JuZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aGUtY29ybmVyLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3RoZS1jb3JuZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGhlLWNvcm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGhlLWNvcm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aGUtY29ybmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RoZS1jb3JuZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aGUtY29ybmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGhlLWNvcm5lci8uL3NyYy9jb21wb25lbnQvZmlyc3RMb2FkLmpzIiwid2VicGFjazovL3RoZS1jb3JuZXIvLi9zcmMvY29tcG9uZW50L2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90aGUtY29ybmVyLy4vc3JjL2NvbXBvbmVudC9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdGhlLWNvcm5lci8uL3NyYy9jb21wb25lbnQvcmVuZGVyLmpzIiwid2VicGFjazovL3RoZS1jb3JuZXIvLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vdGhlLWNvcm5lci8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3RoZS1jb3JuZXIvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly90aGUtY29ybmVyLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vdGhlLWNvcm5lci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGUtY29ybmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RoZS1jb3JuZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZS1jb3JuZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90aGUtY29ybmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlLWNvcm5lci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZS1jb3JuZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGhlLWNvcm5lci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGhlLWNvcm5lci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdlb2xvZ2ljYTp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmZhbWlseT1NZXJyaXdlYXRoZXI6d2dodEA3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1wcmltYXJ5LWNvbG9yOiByZ2IoMjU0LCAyNDgsIDIyNCk7XHJcbiAgLS1zZWNvbmRhcnktY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAtLXRleHQtc2l6ZTogMTZweDtcclxuICAtLWZvbnQtZmFtaWx5OiBcIkdlb2xvZ2ljYVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBmb250LXNpemU6IHZhcigtLXRleHQtc2l6ZSk7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmJvZHkub3ZlcmZsb3cge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAgcGFkZGluZy1pbmxpbmU6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuLyogaGVhZGVyICovXHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiLCBzZXJpZjtcclxufVxyXG5cclxuLm5hdi1saW5rLFxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtbWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLmhhbWJ1cmdlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmFyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtY2hpbGQoMSkge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpIHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLWNoaWxkKDIpIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1jaGlsZCgzKSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4ubmF2LW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5uYXYtbWVudS5hY3RpdmUge1xyXG4gIHRvcDogNTVweDtcclxufVxyXG5cclxuLmFjdGlvbi1idG4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBzY2FsZTogMS4wNTtcclxufVxyXG5cclxuLmFjdGlvbi1idG46YWN0aXZlIHtcclxuICBzY2FsZTogMC45NTtcclxufVxyXG5cclxuLyogaG9tZSAqL1xyXG4uaG9tZV9fdGl0bGUge1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiLCBzZXJpZjtcclxufVxyXG5cclxuLmhvbWVfX2luZm8ge1xyXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcclxufVxyXG5cclxuLmhvbWVfX2luZm8gcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaG9tZV9faW1nIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAwIDAgMTAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWlubGluZTogYXV0bztcclxufVxyXG5cclxuLyogYWJvdXQgKi9cclxuLmFib3V0X19pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLmFib3V0X19pbWctY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmFib3V0X190ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYWJvdXRfX3RpdGxlIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiwgc2VyaWY7XHJcbn1cclxuXHJcbi8qIG1lbnUgKi9cclxuLm1lbnVfX2hlYWRlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG59XHJcblxyXG4ubWVudV9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyXCIsIHNlcmlmO1xyXG59XHJcblxyXG4ubWVudV9fbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMS4yNXJlbTtcclxufVxyXG5cclxuLm1lbnVfX2l0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBnYXA6IDVyZW07XHJcbn1cclxuXHJcbi5tZW51X19pdGVtLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm1lbnVfX2l0ZW0tZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLm1lbnVfX2l0ZW0tcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIGNvbnRhY3QgKi9cclxuLmNvbnRhY3RfX3RpdGxlIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiLCBzZXJpZjtcclxufVxyXG5cclxuLmNvbnRhY3RfX2luZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4vKiBmb290ZXIgKi9cclxuLmZvb3RlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4uZm9vdGVyX19saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5mb290ZXJfX2xpbmsge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uZm9vdGVyX19pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5mb290ZXJfX2xpbms6aG92ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4uZm9vdGVyX19pbmZvIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXJfX2luZm8tLXBob25lIHtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5mb290ZXJfX2luZm8tLW1hZGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFJFU1BPTlNJVkUgREVTSUdOICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcbiAgLm5hdi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAxLjcyNXJlbTtcclxuICB9XHJcblxyXG4gIC5uYXYtbWVudS5hY3RpdmUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLmhhbWJ1cmdlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1tZW51IGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1idG4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0X19pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcblxyXG4gIC5hYm91dF9faW1nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjQwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODgwcHgpIHtcclxuICAubWVudV9fbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNDAwcHgpO1xyXG4gICAgZ2FwOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgLm1lbnVfX2l0ZW0ge1xyXG4gICAgZ2FwOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgLm1lbnVfX2xpc3QtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJt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QkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLE1BQU07RUFDUjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsU0FBUztFQUNYOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZW9sb2dpY2E6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZmYW1pbHk9TWVycml3ZWF0aGVyOndnaHRANzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogcmdiKDI1NCwgMjQ4LCAyMjQpO1xcclxcbiAgLS1zZWNvbmRhcnktY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gIC0tdGV4dC1zaXplOiAxNnB4O1xcclxcbiAgLS1mb250LWZhbWlseTogXFxcIkdlb2xvZ2ljYVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IHZhcigtLXRleHQtc2l6ZSk7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Lm92ZXJmbG93IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICBwYWRkaW5nLWlubGluZTogMzBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbi8qIGhlYWRlciAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVycml3ZWF0aGVyXFxcIiwgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayxcXHJcXG4uYWN0aW9uLWJ0biB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtY2hpbGQoMSkge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtY2hpbGQoMikge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtY2hpbGQoMykge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW1lbnUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW1lbnUuYWN0aXZlIHtcXHJcXG4gIHRvcDogNTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1idG4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIHNjYWxlOiAxLjA1O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ0bjphY3RpdmUge1xcclxcbiAgc2NhbGU6IDAuOTU7XFxyXFxufVxcclxcblxcclxcbi8qIGhvbWUgKi9cXHJcXG4uaG9tZV9fdGl0bGUge1xcclxcbiAgcGFkZGluZy10b3A6IDNyZW07XFxyXFxuICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVycml3ZWF0aGVyXFxcIiwgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5ob21lX19pbmZvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfX2luZm8gcCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nIHtcXHJcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfX2ltZyB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogYWJvdXQgKi9cXHJcXG4uYWJvdXRfX2ltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRfX2ltZy1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRfX3RleHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRfX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJyaXdlYXRoZXJcXFwiLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWVudSAqL1xcclxcbi5tZW51X19oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVycml3ZWF0aGVyXFxcIiwgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0tbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtLXByaWNlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250YWN0ICovXFxyXFxuLmNvbnRhY3RfX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1lcnJpd2VhdGhlclxcXCIsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdF9faW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIGZvb3RlciAqL1xcclxcbi5mb290ZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuLmZvb3Rlcl9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjc1cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9fbGluayB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19saW5rOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19pbmZvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2luZm8tLXBob25lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9faW5mby0tbWFkZSB7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgZm9udC1zaXplOiAwLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSRVNQT05TSVZFIERFU0lHTiAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XFxyXFxuICAubmF2LW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjcyNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbWVudS5hY3RpdmUge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGFtYnVyZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbWVudSBsaSBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjdGlvbi1idG4ge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0X19pbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0X19pbWctY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDY0MHB4O1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4ODBweCkge1xcclxcbiAgLm1lbnVfX2xpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0MDBweCk7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51X19pdGVtIHtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnVfX2xpc3QtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50L2hlYWRlclwiO1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4uL3BhZ2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgZm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudC9mb290ZXJcIjtcclxuXHJcbmNvbnN0IGZpcnN0TG9hZCA9ICgpID0+IHtcclxuICBoZWFkZXIoKTtcclxuICBob21lKCk7XHJcbiAgZm9vdGVyKCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBmaXJzdExvYWQgfTtcclxuIiwiY29uc3QgZm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiLCBcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBmb290ZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGZvb3Rlckxpc3QuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9fbGlzdFwiKTtcclxuICBjb25zdCBmb290ZXJJdGVtcyA9IFtcIm1lbnVcIiwgXCJhYm91dFwiLCBcImNvbnRhY3RcIiwgXCJib29rIGEgVGFibGVcIl07XHJcbiAgZm9vdGVySXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX19pdGVtXCIpO1xyXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgaS5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1zcXVhcmVcIiwgXCJmYS0yeHNcIik7XHJcbiAgICBhLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2xpbmtcIik7XHJcbiAgICBhLnRleHRDb250ZW50ID0gYCR7W2l0ZW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCldfSR7W2l0ZW0uc2xpY2UoMSldfWA7XHJcbiAgICBhLmhyZWYgPSBgIyR7aXRlbX1gO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChpKTtcclxuICAgIGZvb3Rlckxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH0pO1xyXG4gIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJMaXN0KTtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcclxuXHJcbiAgY29uc3QgZm9vdGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9vdGVySW5mby5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX19pbmZvXCIpO1xyXG4gIGNvbnN0IGZvb3RlckluZm9UZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGZvb3RlckluZm9UZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9vdGVySW5mb1RleHQxLnRleHRDb250ZW50ID0gXCIrNTUgMTEgMTIzNC01Njc4XCI7XHJcbiAgZm9vdGVySW5mb1RleHQxLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2luZm8tLXBob25lXCIpO1xyXG4gIGZvb3RlckluZm9UZXh0Mi5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJmb290ZXJfX2luZm8tLW1hZGVcIj5NYWRlIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJmb290ZXJfX2ljb25cIj48aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1naXRodWIgZmEtMnhzXCI+PC9pPjwvYT48L3A+YDtcclxuICBmb290ZXJJbmZvLmFwcGVuZENoaWxkKGZvb3RlckluZm9UZXh0MSk7XHJcbiAgZm9vdGVySW5mby5hcHBlbmRDaGlsZChmb290ZXJJbmZvVGV4dDIpO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJJbmZvKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZm9vdGVyIH07XHJcbiIsImNvbnN0IGhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIiwgXCJoZWFkZXJcIik7XHJcblxyXG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIik7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdmJhcik7XHJcblxyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIlRoZSBDb3JuZXJcIjtcclxuICBsb2dvLmhyZWYgPSBcIiNob21lXCI7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG5cclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXYtbWVudVwiKTtcclxuICBjb25zdCBuYXZJdGVtcyA9IFtcIm1lbnVcIiwgXCJhYm91dFwiLCBcImNvbnRhY3RcIl07XHJcbiAgbmF2SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIik7XHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBhLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua1wiKTtcclxuICAgIGEudGV4dENvbnRlbnQgPSBgJHtbaXRlbS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKV19JHtbaXRlbS5zbGljZSgxKV19YDtcclxuICAgIGEuaHJlZiA9IGAjJHtpdGVtfWA7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChsaSk7XHJcbiAgfSk7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG4gIGNvbnN0IGFjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGFjdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uLWJ0blwiKTtcclxuICBhY3Rpb25CdG4udGV4dENvbnRlbnQgPSBcIkJvb2sgYSBUYWJsZVwiO1xyXG4gIGFjdGlvbkJ0bi5ocmVmID0gXCIjb3JkZXJcIjtcclxuICBuYXYuYXBwZW5kQ2hpbGQoYWN0aW9uQnRuKTtcclxuXHJcbiAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoYW1idXJnZXIuY2xhc3NMaXN0LmFkZChcImhhbWJ1cmdlclwiKTtcclxuICBjb25zdCBoYW1idXJnZXJJdGVtcyA9IFtcIlwiLCBcIlwiLCBcIlwiXTtcclxuICBoYW1idXJnZXJJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBoYW1idXJnZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJiYXJcIik7XHJcbiAgfSk7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGhhbWJ1cmdlcik7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgaGFtYnVyZ2VyTWVudSgpO1xyXG59O1xyXG5cclxuY29uc3QgaGFtYnVyZ2VyTWVudSA9ICgpID0+IHtcclxuICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcclxuICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbWVudVwiKTtcclxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvXCIpO1xyXG5cclxuICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgbmF2TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwib3ZlcmZsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtcIikuZm9yRWFjaCgobikgPT5cclxuICAgIG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIG5hdk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmZsb3dcIik7XHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgbmF2TWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmZsb3dcIik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBoZWFkZXIgfTtcclxuIiwiY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29udGVudC5zdHlsZSA9IFwiXCI7XHJcbiAgY29udGVudC5jaGlsZHJlblsxXS5yZW1vdmUoKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHJlbmRlciB9O1xyXG4iLCJpbXBvcnQgYWJvdXRJbWcgZnJvbSBcIi4uL2ltZy9hYm91dC5qcGdcIjtcclxuXHJcbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIiwgXCJjb250YWluZXJcIik7XHJcblxyXG4gIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dF9faW1nLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWcuc3JjID0gYWJvdXRJbWc7XHJcbiAgaW1nLmFsdCA9IFwiYWJvdXRcIjtcclxuICBpbWcuY2xhc3NMaXN0LmFkZChcImFib3V0X19pbWdcIik7XHJcbiAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhYm91dFRleHQuY2xhc3NMaXN0LmFkZChcImFib3V0X190ZXh0XCIpO1xyXG4gIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgYWJvdXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXRfX3RpdGxlXCIpO1xyXG4gIGFib3V0VGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XHJcbiAgYWJvdXRUZXh0LmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xyXG4gIGNvbnN0IGluZm8gPSBbXHJcbiAgICBcIkhleSB0aGVyZSEgV2UncmUgYSB0ZWFtIG9mIGZyaWVuZGx5IGZvbGtzIHdobyBsb3ZlIHNlcnZpbmcgdXAgZ3JlYXQgZHJpbmtzIGluIGEgZnVuLCBsYWlkLWJhY2sgYXRtb3NwaGVyZS4gV2UgYmVsaWV2ZSB0aGF0IGEgZ29vZCBiYXIgaXMgYWxsIGFib3V0IGNvbW11bml0eSwgYW5kIHdlIHN0cml2ZSB0byBtYWtlIGV2ZXJ5IHBlcnNvbiB3aG8gd2Fsa3MgdGhyb3VnaCBvdXIgZG9vcnMgZmVlbCBsaWtlIHRoZXkncmUgcGFydCBvZiBvdXJzLiBPdXIgc3RhZmYgaXMgYWx3YXlzIGhhcHB5IHRvIGNoYXQsIHJlY29tbWVuZCBkcmlua3MsIGFuZCBwcm92aWRlIHRvcC1ub3RjaCBzZXJ2aWNlLlwiLFxyXG4gICAgXCJXZSB0YWtlIHByaWRlIGluIG91ciBzZWxlY3Rpb24gb2YgYmVlcnMsIHdpbmVzLCBjb2NrdGFpbHMsIGFuZCBzcGlyaXRzLCBhbmQgd2UncmUgYWx3YXlzIGV4cGVyaW1lbnRpbmcgd2l0aCBuZXcgZmxhdm9ycyBhbmQgaW5ncmVkaWVudHMgdG8ga2VlcCB0aGluZ3MgaW50ZXJlc3RpbmcuIFdlIHdhbnQgeW91IHRvIGhhdmUgYSBncmVhdCB0aW1lIGF0IG91ciBiYXIsIHdoZXRoZXIgeW91J3JlIHN0b3BwaW5nIGluIGZvciBhIHF1aWNrIGRyaW5rIG9yIHNldHRsaW5nIGluIGZvciBhIG5pZ2h0IG91dCB3aXRoIGZyaWVuZHMuXCIsXHJcbiAgICBcIlNvIGNvbWUgb24gaW4sIGdyYWIgYSBkcmluaywgYW5kIGxldCdzIGhhdmUgc29tZSBmdW4hXCIsXHJcbiAgXTtcclxuICBpbmZvLmZvckVhY2goKHRleHQpID0+IHtcclxuICAgIGNvbnN0IGFib3V0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgYWJvdXRJbmZvLmNsYXNzTGlzdC5hZGQoXCJhYm91dF9faW5mb1wiKTtcclxuICAgIGFib3V0SW5mby50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBhYm91dFRleHQuYXBwZW5kQ2hpbGQoYWJvdXRJbmZvKTtcclxuICB9KTtcclxuXHJcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0KTtcclxuXHJcbiAgcmV0dXJuIGFib3V0O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgYWJvdXQgfTtcclxuIiwiY29uc3QgY29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIsIFwiY29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X19oZWFkZXJcIik7XHJcbiAgY29uc3QgY29udGFjdFRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnRhY3RUaXRsZTEuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfX3RpdGxlXCIpO1xyXG4gIGNvbnRhY3RUaXRsZTEudGV4dENvbnRlbnQgPSBcIjEyMyBEZW1vIFN0LlwiO1xyXG4gIGNvbnN0IGNvbnRhY3RUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb250YWN0VGl0bGUyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X190aXRsZVwiKTtcclxuICBjb250YWN0VGl0bGUyLnRleHRDb250ZW50ID0gXCJOZXcgWW9yaywgTlkgMTAwMDFcIjtcclxuICBjb250YWN0SGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZTEpO1xyXG4gIGNvbnRhY3RIZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlMik7XHJcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcclxuXHJcbiAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X19pbmZvXCIpO1xyXG4gIGNvbnN0IGNvbnRhY3RJbmZvVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb250YWN0SW5mb1RleHQxLnRleHRDb250ZW50ID0gXCIxODowMCB0byAwMzowMFwiO1xyXG4gIGNvbnN0IGNvbnRhY3RJbmZvVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb250YWN0SW5mb1RleHQyLnRleHRDb250ZW50ID0gXCJNb25kYXkgdG8gU3VuZGF5XCI7XHJcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEluZm9UZXh0MSk7XHJcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEluZm9UZXh0Mik7XHJcbiAgY29udGFjdEhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbiAgcmV0dXJuIGNvbnRhY3Q7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjb250YWN0IH07XHJcbiIsImltcG9ydCBoZXJvSW1nIGZyb20gXCIuLi9pbWcvaGVyby0xLmpwZ1wiO1xyXG5cclxuY29uc3QgaG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIsIFwiY29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWVUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaG9tZV9fdGl0bGVcIik7XHJcbiAgY29uc3QgaG9tZVRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGhvbWVUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBob21lVGl0bGUxLnRleHRDb250ZW50ID0gXCIxMjMgRGVtbyBTdC5cIjtcclxuICBob21lVGl0bGUyLnRleHRDb250ZW50ID0gXCJOZXcgWW9yaywgTlkgMTAwMDFcIjtcclxuICBob21lVGl0bGUuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlMSk7XHJcbiAgaG9tZVRpdGxlLmFwcGVuZENoaWxkKGhvbWVUaXRsZTIpO1xyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcclxuXHJcbiAgY29uc3QgaG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZUltZy5jbGFzc0xpc3QuYWRkKFwiaG9tZV9faW1nXCIpO1xyXG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGltZy5zcmMgPSBoZXJvSW1nO1xyXG4gIGltZy5hbHQgPSBcImhlcm9cIjtcclxuICBpbWcuY2xhc3NMaXN0LmFkZChcImltZ1wiKTtcclxuICBob21lSW1nLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lSW1nKTtcclxuXHJcbiAgY29uc3QgaG9tZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWVJbmZvLmNsYXNzTGlzdC5hZGQoXCJob21lX190aXRsZVwiLCBcImhvbWVfX2luZm9cIik7XHJcbiAgY29uc3QgaG9tZUluZm9UZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGhvbWVJbmZvVGV4dDEudGV4dENvbnRlbnQgPSBcIjE4OjAwIHRvIDAzOjAwXCI7XHJcbiAgY29uc3QgaG9tZUluZm9UZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGhvbWVJbmZvVGV4dDIudGV4dENvbnRlbnQgPSBcIk1vbmRheSB0byBTdW5kYXlcIjtcclxuICBob21lSW5mby5hcHBlbmRDaGlsZChob21lSW5mb1RleHQxKTtcclxuICBob21lSW5mby5hcHBlbmRDaGlsZChob21lSW5mb1RleHQyKTtcclxuICBob21lLmFwcGVuZENoaWxkKGhvbWVJbmZvKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lKTtcclxuXHJcbiAgcmV0dXJuIGhvbWU7XHJcbn07XHJcblxyXG5leHBvcnQgeyBob21lIH07XHJcbiIsImNvbnN0IGRyaW5rcyA9ICgpID0+IHtcclxuICBjb25zdCBkcmlua3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTWFyZ2FyaXRhXCIsXHJcbiAgICAgIHByaWNlOiAxMCxcclxuICAgICAgZGVzY3JpcHRpb246IFwiVGVxdWlsYSwgVHJpcGxlIFNlYywgTGltZSBKdWljZSwgU2FsdCBSaW0sIExpbWUgV2VkZ2VcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT2xkIEZhc2hpb25lZFwiLFxyXG4gICAgICBwcmljZTogMTIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkJvdXJib24sIFN1Z2FyLCBCaXR0ZXJzLCBPcmFuZ2UgVHdpc3RcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTW9zY293IE11bGVcIixcclxuICAgICAgcHJpY2U6IDksXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlZvZGthLCBHaW5nZXIgQmVlciwgTGltZSBKdWljZSwgQ29wcGVyIE11ZywgTGltZSBXZWRnZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJGcmVuY2ggNzVcIixcclxuICAgICAgcHJpY2U6IDE0LFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkdpbiwgTGVtb24gSnVpY2UsIFNpbXBsZSBTeXJ1cCwgQ2hhbXBhZ25lLCBDaGFtcGFnbmUgRmx1dGUsIExlbW9uIFR3aXN0XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBhbG9tYVwiLFxyXG4gICAgICBwcmljZTogMTEsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiVGVxdWlsYSwgR3JhcGVmcnVpdCBKdWljZSwgTGltZSBKdWljZSwgU29kYSBXYXRlciwgU2FsdCBSaW0sIEdyYXBlZnJ1aXQgV2VkZ2VcIixcclxuICAgIH0sXHJcbiAgXTtcclxuICByZXR1cm4gZHJpbmtzO1xyXG59O1xyXG5cclxuY29uc3QgZm9vZCA9ICgpID0+IHtcclxuICBjb25zdCBmb29kID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNoZWVzZWJ1cmdlclwiLFxyXG4gICAgICBwcmljZTogMTIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQmVlZiBQYXR0eSwgQW1lcmljYW4gQ2hlZXNlLCBMZXR0dWNlLCBUb21hdG8sIE9uaW9uLCBQaWNrbGUsIEJyaW9jaGUgQnVuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNoaWNrZW4gU2FuZHdpY2hcIixcclxuICAgICAgcHJpY2U6IDExLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkZyaWVkIENoaWNrZW4gQnJlYXN0LCBMZXR0dWNlLCBUb21hdG8sIE9uaW9uLCBQaWNrbGUsIEJyaW9jaGUgQnVuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNhZXNhciBTYWxhZFwiLFxyXG4gICAgICBwcmljZTogOSxcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJSb21haW5lIExldHR1Y2UsIENyb3V0b25zLCBQYXJtZXNhbiBDaGVlc2UsIENhZXNhciBEcmVzc2luZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDaGlja2VuIFdpbmdzXCIsXHJcbiAgICAgIHByaWNlOiAxMCxcclxuICAgICAgZGVzY3JpcHRpb246IFwiQnVmZmFsbywgQkJRLCBvciBQbGFpblwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJGcmllc1wiLFxyXG4gICAgICBwcmljZTogNSxcclxuICAgICAgZGVzY3JpcHRpb246IFwiRnJlbmNoIEZyaWVzLCBLZXRjaHVwXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIGZvb2Q7XHJcbn07XHJcblxyXG5jb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIiwgXCJjb250YWluZXJcIik7XHJcblxyXG4gIGNvbnN0IG1lbnVIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVIZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVfX2hlYWRlci1jb250YWluZXJcIik7XHJcbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudV9fdGl0bGVcIik7XHJcbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcclxuICBtZW51SGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51SGVhZGVyQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgbWVudUxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51X19saXN0LWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKFwibWVudV9fbGlzdFwiKTtcclxuICBjb25zdCBpdGVtcyA9IGRyaW5rcygpO1xyXG4gIGl0ZW1zLmZvckVhY2goKGRyaW5rKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudV9faXRlbVwiKTtcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG1lbnVJdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwibWVudV9faXRlbS1uYW1lXCIpO1xyXG4gICAgbWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gZHJpbmsubmFtZTtcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZW51X19pdGVtLWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRyaW5rLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG1lbnVJdGVtUHJpY2UuY2xhc3NMaXN0LmFkZChcIm1lbnVfX2l0ZW0tcHJpY2VcIik7XHJcbiAgICBtZW51SXRlbVByaWNlLnRleHRDb250ZW50ID0gYCQke2RyaW5rLnByaWNlfWA7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURlc2NyaXB0aW9uKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbVByaWNlKTtcclxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuICB9KTtcclxuICBtZW51TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TGlzdCk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51TGlzdENvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IG1lbnVIZWFkZXJDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51SGVhZGVyQ29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKFwibWVudV9faGVhZGVyLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBtZW51VGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIG1lbnVUaXRsZTIuY2xhc3NMaXN0LmFkZChcIm1lbnVfX3RpdGxlXCIpO1xyXG4gIG1lbnVUaXRsZTIudGV4dENvbnRlbnQgPSBcIkZvb2RcIjtcclxuICBtZW51SGVhZGVyQ29udGFpbmVyMi5hcHBlbmRDaGlsZChtZW51VGl0bGUyKTtcclxuICBtZW51LmFwcGVuZENoaWxkKG1lbnVIZWFkZXJDb250YWluZXIyKTtcclxuXHJcbiAgY29uc3QgbWVudUxpc3RDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51TGlzdENvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcIm1lbnVfX2xpc3QtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IG1lbnVMaXN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBtZW51TGlzdDIuY2xhc3NMaXN0LmFkZChcIm1lbnVfX2xpc3RcIik7XHJcbiAgY29uc3QgaXRlbXMyID0gZm9vZCgpO1xyXG4gIGl0ZW1zMi5mb3JFYWNoKChmb29kKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudV9faXRlbVwiKTtcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG1lbnVJdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwibWVudV9faXRlbS1uYW1lXCIpO1xyXG4gICAgbWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gZm9vZC5uYW1lO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1lbnVfX2l0ZW0tZGVzY3JpcHRpb25cIik7XHJcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZm9vZC5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBtZW51SXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJtZW51X19pdGVtLXByaWNlXCIpO1xyXG4gICAgbWVudUl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGAkJHtmb29kLnByaWNlfWA7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURlc2NyaXB0aW9uKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbVByaWNlKTtcclxuICAgIG1lbnVMaXN0Mi5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcbiAgfSk7XHJcbiAgbWVudUxpc3RDb250YWluZXIyLmFwcGVuZENoaWxkKG1lbnVMaXN0Mik7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51TGlzdENvbnRhaW5lcjIpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xyXG5cclxuICByZXR1cm4gbWVudTtcclxufTtcclxuXHJcbmV4cG9ydCB7IG1lbnUgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBob21lIH0gZnJvbSBcIi4uL3NyYy9wYWdlcy9ob21lXCI7XHJcbmltcG9ydCB7IGZpcnN0TG9hZCB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50L2ZpcnN0TG9hZFwiO1xyXG5pbXBvcnQgeyBhYm91dCB9IGZyb20gXCIuLi9zcmMvcGFnZXMvYWJvdXRcIjtcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuLi9zcmMvcGFnZXMvbWVudVwiO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudC9yZW5kZXJcIjtcclxuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gXCIuLi9zcmMvcGFnZXMvY29udGFjdFwiO1xyXG5pbXBvcnQgXCIuLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCI7XHJcblxyXG5maXJzdExvYWQoKTtcclxuXHJcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYVtocmVmPScjaG9tZSddXCIpO1xyXG5jb25zdCBhYm91dEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtocmVmPScjYWJvdXQnXVwiKTtcclxuY29uc3QgbWVudUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtocmVmPScjbWVudSddXCIpO1xyXG5jb25zdCBjb250YWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2hyZWY9JyNjb250YWN0J11cIik7XHJcblxyXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICByZW5kZXIoKTtcclxuICBjb250ZW50Lmluc2VydEJlZm9yZShob21lKCksIGNvbnRlbnQuY2hpbGRyZW5bMV0pO1xyXG59KTtcclxuXHJcbmFib3V0QnV0dG9ucy5mb3JFYWNoKChhYm91dEJ1dHRvbikgPT4ge1xyXG4gIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShhYm91dCgpLCBjb250ZW50LmNoaWxkcmVuWzFdKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5tZW51QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICByZW5kZXIoKTtcclxuICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG1lbnUoKSwgY29udGVudC5jaGlsZHJlblsxXSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuY29udGFjdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShjb250YWN0KCksIGNvbnRlbnQuY2hpbGRyZW5bMV0pO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9