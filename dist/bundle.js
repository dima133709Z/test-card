/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList */ \"./src/js/UserList.js\");\n\r\n\r\nclass App {\r\n    constructor() {\r\n        this.userList = null;\r\n        this.userContainer = document.getElementById('user-container');\r\n        this.searchInput = document.getElementById('search-input');\r\n        this.init();\r\n    }\r\n\r\n    async fetchUsers() {\r\n        const response = await fetch('https://jsonplaceholder.typicode.com/users');\r\n        const users = await response.json();\r\n        this.userList = new _UserList__WEBPACK_IMPORTED_MODULE_0__.UserList(users);\r\n    }\r\n\r\n    addEventListeners() {\r\n        this.searchInput.addEventListener('input', (e) => {\r\n            const searchValue = e.target.value;\r\n            this.userList.render(this.userContainer, searchValue);\r\n        });\r\n    }\r\n\r\n    async init() {\r\n        await this.fetchUsers();\r\n        this.userList.render(this.userContainer);\r\n        this.addEventListeners();\r\n    }\r\n}\r\n\r\nconst app = new App();\r\n\n\n//# sourceURL=webpack://user-cards/./src/js/App.js?");

/***/ }),

/***/ "./src/js/User.js":
/*!************************!*\
  !*** ./src/js/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\nclass User {\r\n    constructor({ id, name, username, email, phone, website, address, company }) {\r\n        this.id = id;\r\n        this.name = name;\r\n        this.username = username;\r\n        this.email = email;\r\n        this.phone = phone;\r\n        this.website = website;\r\n        this.address = `${address.street}, ${address.city}, ${address.zipcode}`;\r\n        this.company = company.name;\r\n    }\r\n\r\n    createCard() {\r\n        const card = document.createElement('div');\r\n        card.classList.add('user-card');\r\n\r\n        card.innerHTML = `\r\n      <h3>${this.name} (${this.username})</h3>\r\n      <p><strong>Email:</strong> ${this.email}</p>\r\n      <p><strong>Phone:</strong> ${this.phone}</p>\r\n      <p><strong>Website:</strong> ${this.website}</p>\r\n      <p><strong>Address:</strong> ${this.address}</p>\r\n      <p><strong>Company:</strong> ${this.company}</p>\r\n    `;\r\n\r\n        return card;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://user-cards/./src/js/User.js?");

/***/ }),

/***/ "./src/js/UserList.js":
/*!****************************!*\
  !*** ./src/js/UserList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserList: () => (/* binding */ UserList)\n/* harmony export */ });\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ \"./src/js/User.js\");\n\r\n\r\nclass UserList {\r\n    constructor(users) {\r\n        this.users = users.map(userData => new _User__WEBPACK_IMPORTED_MODULE_0__.User(userData));\r\n    }\r\n\r\n    filterUsers(filterValue) {\r\n        return this.users.filter(user => {\r\n            return (\r\n                user.name.toLowerCase().includes(filterValue) ||\r\n                user.username.toLowerCase().includes(filterValue) ||\r\n                user.email.toLowerCase().includes(filterValue) ||\r\n                user.phone.toLowerCase().includes(filterValue) ||\r\n                user.website.toLowerCase().includes(filterValue) ||\r\n                user.address.toLowerCase().includes(filterValue) ||\r\n                user.company.toLowerCase().includes(filterValue)\r\n            );\r\n        });\r\n    }\r\n\r\n    render(container, filter = '') {\r\n        container.innerHTML = ''; // Clear the container\r\n        const filteredUsers = filter ? this.filterUsers(filter.toLowerCase()) : this.users;\r\n\r\n        filteredUsers.forEach(user => {\r\n            const card = user.createCard();\r\n            container.appendChild(card);\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://user-cards/./src/js/UserList.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/App.js");
/******/ 	
/******/ })()
;