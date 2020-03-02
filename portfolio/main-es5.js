function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page_container\">\r\n<div class=\"about\">\r\n    <div class=\"header\">About Me</div>\r\n\r\n    <div class=\"info\">\r\n        <div class=\"header--2\">About Me</div>\r\n        <div class=\"info__block text\">\r\n                <!-- reflect customer needs -->\r\n                <!-- don't just lead with the facts -->\r\n                <!-- share who you are and what you believe -->\r\n\r\n                I am a student studying IT Web Programming at the NSCC Truro Campus. I suppose I first obtained my interest in tech from my father, who is a professional graphic and front-end designer. Computer classes were my favorite in high school. I later enrolled into college at the NSCC Truro Campus, originally intending to study game development. I made a wiser decision in changing to a more professional web development career. \r\n                <br><br>\r\n                I was born in Ontario, moving to Nova Scotia when I was about 5 years old. I was born with hearing loss, wearing hearing aids and later on glasses, for my whole life. Instead of being hindered by this, I decided to adapt and overcome. I believe I can get through anything. I care about others, I feel for those who are helpless or in need. I’m interested in talking with anyone, disabled or able, tech-savvy or not. \r\n                Feel free to contact me.\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"page_spacer\"></div>\r\n\r\n<div class=\"header--2\">My Workplace Goals</div>\r\n<div class=\"goals\">\r\n    <div class=\"goals__block\">\r\n        <div class=\"header--3\">\r\n            Short term\r\n        </div>\r\n        <div class=\"text\">\r\n            Discover what position works best for me by increasing area of knowledge to advanced by the end of my second college year.\r\n        </div>\r\n    </div>\r\n    <div class=\"goals__block\">\r\n        <div class=\"header--3\">\r\n            Mid term\r\n        </div>\r\n        <div class=\"text\">\r\n            Get familiar with at least 5 new languages/frameworks in 3 years, see what fits my preferences.\r\n        </div>\r\n    </div>\r\n    <div class=\"goals__block\">\r\n        <div class=\"header--3\">\r\n            Long term\r\n        </div>\r\n        <div class=\"text\">\r\n            Become an established web developer by reaching over 30 clients in 5 years time. \r\n        </div>\r\n    </div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"loading-overlay\"></div>\r\n<div class=\"tint\"></div>\r\n<div class=\"background\"></div>\r\n\r\n<div class=\"root\">\r\n  <div class=\"root__header\">\r\n    <div class=\"title\">\r\n\r\n\t\t<a href=\"/home\"><img class=\"title__img\" src=\"./../assets/images/SamDuccLogo.svg\" alt=\"Home Logo\" /></a>\r\n\t\t<div class=\"title__name\"><a href=\"/home\">Sam Davey</a></div>\r\n\t\t\r\n\t\t<div class=\"navtoggle\" (click)=\"toggleNav()\"><i class=\"fas fa-bars\"></i></div>\r\n\t</div>\r\n\r\n\t<div class=\"nav\">\r\n\t\t<a [routerLink]=\"['/home']\" class=\"nav__btn\">Home</a>\r\n\t\t<a [routerLink]=\"['/about']\" class=\"nav__btn\">About</a>\r\n\t\t<a [routerLink]=\"['/skills']\" class=\"nav__btn\">Skills</a>\r\n\t\t<a [routerLink]=\"['/work']\" class=\"nav__btn\">Work</a>\r\n\t\t<a [routerLink]=\"['/resume']\" class=\"nav__btn\">Resume</a>\r\n\t\t<a [routerLink]=\"['/contact']\" class=\"nav__btn\">Contact</a>\r\n\t</div>\r\n\t<div class=\"nav--mobile\" *ngIf=\"navOn\">\r\n\t\t<a [routerLink]=\"['/home']\" class=\"nav__btn\">Home</a>\r\n\t\t<a [routerLink]=\"['/about']\" class=\"nav__btn\">About</a>\r\n\t\t<a [routerLink]=\"['/skills']\" class=\"nav__btn\">Skills</a>\r\n\t\t<a [routerLink]=\"['/work']\" class=\"nav__btn\">Work</a>\r\n\t\t<a [routerLink]=\"['/resume']\" class=\"nav__btn\">Resume</a>\r\n\t\t<a [routerLink]=\"['/contact']\" class=\"nav__btn\">Contact</a>\r\n\t</div>\r\n  </div>\r\n\r\n  <div class=\"root__body\">\r\n\t  <router-outlet> </router-outlet>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"footer\">Made by Sam Davey using Angular 8</div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page_container\">\r\n<div class=\"contact block block__first\">\r\n    <div class=\"header\">Why Connect With Me?</div>\r\n\r\n    <div class=\"connect\">\r\n        <div class=\"connect__block\">\r\n            I thrive with communicating with clients to meet their needs, efficiently creating websites and web applications as needed.\r\n        </div>\r\n        <div class=\"connect__block\">\r\n            I can assist in optimizing the utilization of resources, such as researching newer, cheaper tools and technology.\r\n        </div>\r\n        <div class=\"connect__block\">\r\n            I have shown that I am able to learn new things rapidly - always open to learning more.\r\n        </div>\r\n        <div class=\"connect__block\">\r\n            I’m always improving myself, putting out maximum effort with every task I’m given.\r\n        </div>\r\n        <div class=\"connect__block\">\r\n            I value the people I’m assisting before myself, this could mean the company, team members and clients.\r\n        </div>\r\n        <div class=\"header--2\">My Contact Info</div>\r\n        <div class=\"connect__block\">\r\n            <div><b>Linkedin:</b><a href=\"https://www.linkedin.com/in/sam-davey888/\">linkedin.com/in/sam-davey888/</a> </div>\r\n            <div><b>Phone:</b>(902) 899-7926</div>\r\n            <div><b>Business Email:</b>sam.davey888@gmail.com</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>{{ insert form here... }<!---->}</div>\r\n\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page_container\">\r\n    <div class=\"main\">\r\n        <div class=\"main__header\">Hello.</div>\r\n        <div class=\"main__subheader\">\r\n            I'm an aspiring web developer, programmer and designer.   \r\n        </div>\r\n        <div class=\"route-btn\">\r\n            <a href=\"home#about\" class=\"main__button\">See More</a>\r\n        </div>\r\n        <div id=\"about\"></div>\r\n    </div>\r\n    \r\n    <div class=\"main__content\">\r\n        <div class=\"split_container\">\r\n            <div class=\"intro\">\r\n                <div class=\"intro__header\">About Me</div>\r\n                <div class=\"intro__paragraph\">My name's Sam. I'm currently studying at the NSCC Truro campus as a full time second year student.</div>\r\n                <div style=\"height: 50px;\"></div>\r\n                <a [routerLink]=\"['../about']\" class=\"intro__btn\">Learn About Me</a>\r\n            </div>\r\n            <div class=\"intro\">\r\n                <div class=\"intro__header\">My Skills</div>\r\n                <div class=\"intro__paragraph\">\r\n                    I can create and design professional grade websites, program functionality and data into them, connect them to the internet, and design business cards, logos, and banners.\r\n                    <br><a [routerLink]=\"['../work']\" style=\"text-decoration: none; color: rgb(0, 140, 255); font-weight: bold; padding-left: calc(50% - 60px);\">See my work</a>\r\n                </div>\r\n                <a [routerLink]=\"['../skills']\" class=\"intro__btn\">See My Skills</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResumeResumeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page_container\">\r\n\r\n    <div class=\"title\">My Resume</div>\r\n\r\n\r\n    <div class=\"page_spacer\"></div>\r\n    <div class=\"centerer\">\r\n        <div class=\"resume\">\r\n            <div class=\"resume__icon\"> <i class=\"fas fa-file\"></i> </div>\r\n            <div class=\"resume__header\"> <a href=\"../../assets/SamDaveyResume.pdf\">Get my resume here!</a> </div>\r\n        </div>\r\n    </div>\r\n        \r\n\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSkillsSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page_container\">\r\n    <div class=\"header\">My Skills</div>\r\n    <div class=\"info\">\r\n        <div class=\"header--2\">Overview</div>\r\n            <div class=\"info__block text\">\r\n                I'm a generalist, which is a great addition to any team, due to my ability to gather team players together and get things done.<br>\r\n                I never let a difficult problem go unsolved, being able to work individually and socially. <br>\r\n                I’m able to manage my time efficiently, while consistently delivering quality results.<br>\r\n                I am competent in graphic/web design, and full-stack development. <br>\r\n                I have 4-5 Years of experience in Graphic Design.<br>\r\n                I'm also capable of providing technical support with Windows and Android operating systems.\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"page_spacer\"></div>\r\n\r\n    <div class=\"header--2\">Technical Skills</div>\r\n\r\n    <div class=\"lead\"> I'm able to read, write, update and execute code using technologies such as:</div>\r\n    \r\n    <div class=\"split_container text\">\r\n        <div class=\"tech\">\r\n            <div class=\"header--3\">Front End</div>\r\n            <div class=\"item\">HTML</div>\r\n            <div class=\"item\">CSS</div>\r\n            <div class=\"item\">jQuery</div>\r\n            <div class=\"item\">Vanilla Javascript (ES6)</div>\r\n            <div class=\"item\">TypeScript</div>\r\n            <div class=\"item\">HTML DOM</div>\r\n            <div class=\"item\">Bootstrap</div>\r\n            <div class=\"item\">Angular 8</div>\r\n            <div class=\"item\">BEM Notation</div>\r\n        </div>\r\n\r\n        <div class=\"tech\">\r\n            <div class=\"header--3\">Back End</div>\r\n               <div class=\"item\">Node.js</div> \r\n               <div class=\"item\">Python</div> \r\n               <div class=\"item\">Java</div> \r\n               <div class=\"item\">C#</div> \r\n               <div class=\"item\">Express.js</div> \r\n               <div class=\"item\">PHP</div> \r\n               <div class=\"item\">mySQL</div> \r\n               <div class=\"item\">MongoDB</div> \r\n               <div class=\"item\">Ubuntu OS</div> \r\n               <div class=\"item\">Apache Web Servers</div> \r\n               <div class=\"item\">LAMP/WAMP Stack</div> \r\n               <div class=\"item\">MEAN Stack</div> \r\n\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sudoku/sudoku.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sudoku/sudoku.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSudokuSudokuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page_container\">\r\n<div class=\"plate\">\r\n    <div class=\"sudoku\">\r\n      <div class=\"box\" *ngFor=\"let box of sudoku.boxes\">\r\n  \r\n        <div class=\"cell\" *ngFor=\"let cell of box\" (mousedown)=\"cellClicked(cell)\" [ngClass]=\"{'highlighted' : cell.highlighted, 'clicked' : cell.clicked}\">\r\n          <div *ngIf=\"cell.value > 0\"> {{ cell.value }} </div>\r\n        </div>\r\n  \r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"side\">\r\n      <div class=\"numbers\">\r\n        <div class=\"number\" *ngFor=\"let number of numbers\" (click)=\"numberClicked(number)\" [ngClass]=\"{'selected' : number.selected}\">\r\n          {{ number.value }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWorkWorkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"page_container\">\r\n    <div class=\"work block\">\r\n        <div class=\"header\">My Work</div>\r\n\r\n        <div class=\"page_spacer\"></div>\r\n        <div class=\"page_spacer\"></div>\r\n\r\n        <div class=\"projects\">\r\n            <div class=\"project\" *ngFor=\"let project of projects\">\r\n                <div class=\"project__title\">{{ project.title }}</div>\r\n\r\n                <div class=\"project__content\"> \r\n                    <div class=\"info text\">\r\n                        {{ project.info }}\r\n                        <a href=\"{{ project.link }}\" class=\"project__button\">See It Here</a>\r\n                    </div>\r\n\r\n                    <div class=\"images\">\r\n                        <img src=\"../../assets/images/{{ project.src1 }}\" alt=\"Image\" class=\"first_image\">\r\n                        <img src=\"../../assets/images/{{ project.src2 }}\" alt=\"Image\" class=\"second_image\">\r\n                    </div>                    \r\n                </div>\r\n                <div class=\"page_spacer\"></div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--         \r\n        <div class=\"header--2\"></div>\r\n        <div class=\"group\">\r\n            <div class=\"group__paragraph\">\r\n                This was a side project that I made for myself during my first year work experience.\r\n                I was required to learn jQuery in order to create a web app for a client. \r\n                I decided to learn the language by creating fun little web app games. \r\n                This was really simple to create, the challenge was getting the result of both hands thrown and designing a clean UI for the simple app. \r\n                I’m happy with the result of it, although it’s small, it helped me learn jQuery significantly.\r\n            </div>\r\n            <div class=\"group__images\">\r\n                <img src=\"../../assets/images/jQueryRPS2.png\" alt=\"image\">\r\n                <img src=\"../../assets/images/jQueryRPS1.png\" alt=\"image\">\r\n            </div>\r\n    \r\n        </div> -->\r\n<!--     \r\n        <div class=\"header--2\">jQuery Tic Tac Toe</div>\r\n        <div class=\"group\">\r\n            <div class=\"group__paragraph\">\r\n                I created this small app during work experience as well. \r\n                This was also used to help me learn jQuery in the span of about a week, I could work on it while waiting for the client to reply. \r\n                The challenge for this app was the UI design and getting the app to check if a user has won. \r\n                I was glad I was able to complete it, satisfied with the result, although I believe I’ve become a much better coder since then.\r\n            </div>\r\n            <div class=\"group__images\">\r\n                <img src=\"../../assets/images/tictactoe1.png\" alt=\"image\">\r\n                <img src=\"../../assets/images/tictactoe2.png\" alt=\"image\">\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"header--2\">Business Card Design</div>\r\n        <div class=\"group\">\r\n            <div class=\"group__paragraph\">\r\n                This is a design for a future business card that I want to use to relay my contact information to potential employers.\r\n                I wanted a design that sticks out, looks professional and I would be proud of. \r\n                It’s still in the process of finding the right materials to print on and some color changes to make it CMYK compatible. \r\n                I’m not done with the design yet, as there are always small details that I feel need changing, I’m always open to advice.\r\n            </div>\r\n            <div class=\"group__images\">\r\n                <img src=\"../../assets/images/businessCard.png\" alt=\"image\">\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"header--2\">LinkedIn Profile Background</div>\r\n        <div class=\"group\">\r\n            <div class=\"group__paragraph\">\r\n                I created this for a linkedIn profile assignment. \r\n                I just wanted a simple blue wave pattern that looked simple and professional. \r\n                It’s on my LinkedIn profile now, so I’m proud of the result, \r\n                although I feel like it could have more detail in it.\r\n            </div>\r\n            <div class=\"group__images\">\r\n                <img src=\"../../assets/images/linkedInBackground.png\" alt=\"image\">\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"header--2\">Old Portfolio Background Design</div>\r\n        <div class=\"group\">\r\n            <div class=\"group__paragraph\">\r\n                I created this because I wanted more experience in Adobe Illustrator, \r\n                so I created a nice abstract design for a portfolio assignment for a User Interface design course. \r\n                I created it using a tutorial I found on youtube. \r\n                The end result was pretty neat, although it was hard to design \r\n                around it due to the difference in contrast it had.</div>\r\n            <div class=\"group__images\">\r\n                <img src=\"../../assets/images/oldWebsiteBackground.png\" alt=\"image\">\r\n            </div>\r\n        </div> -->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/about/about.component.scss":
  /*!********************************************!*\
    !*** ./src/app/about/about.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700&display=swap\");\n/* Main Primary color */\n/* Main Secondary color (1) */\n/* Main Secondary color (2) */\n@-webkit-keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.info {\n  font-family: \"Lato\", sans-serif;\n  font-size: 1.3em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n@media screen and (max-width:1250px) {\n  .info {\n    padding-bottom: 100px;\n  }\n}\n.info__block {\n  background: rgba(0, 17, 65, 0.733);\n  padding: 100px calc(60% - 200px) 100px 200px;\n  width: 40%;\n  align-self: center;\n}\n@media screen and (max-width:1250px) {\n  .info__block {\n    padding: 100px calc(15% + 100px);\n    width: calc(70% - 200px);\n  }\n}\n@media screen and (max-width:870px) {\n  .info__block {\n    padding: 100px 20px;\n    width: calc(100% - 40px);\n  }\n}\n.goals {\n  font-family: \"Lato\", sans-serif;\n  font-size: 1.3em;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, calc(100% / 3));\n}\n@media screen and (max-width:1250px) {\n  .goals {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-flow: column nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n}\n.goals__block {\n  background: rgba(0, 17, 65, 0.733);\n  padding: 100px 75px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media screen and (max-width:1250px) {\n  .goals__block {\n    width: calc(100% - 150px);\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width:870px) {\n  .goals__block {\n    width: calc(100% - 150px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXF9iYWNrdXBcXF9uc2NjcG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxfZ2xvYmFscy5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvRDpcXF9iYWNrdXBcXF9uc2NjcG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBMEJRLHFGQUFBO0FBQ0EsZ0ZBQUE7QUFyQmMsdUJBQUE7QUFNQSw2QkFBQTtBQU1BLDZCQUFBO0FBMEJ0QjtFQUNJO0lBQ0ksMkJBQUE7RUN0Q047RUR3Q0U7SUFDSSw2QkFBQTtFQ3RDTjtFRHdDRTtJQUNJLDJCQUFBO0VDdENOO0FBQ0Y7QUQ2QkE7RUFDSTtJQUNJLDJCQUFBO0VDdENOO0VEd0NFO0lBQ0ksNkJBQUE7RUN0Q047RUR3Q0U7SUFDSSwyQkFBQTtFQ3RDTjtBQUNGO0FDYkE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VGMEJBLG9CQUFBO0VBSUEsYUFBQTtFRTNCQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QURrQko7QUNoQkk7RUFQSjtJQVFRLHFCQUFBO0VEbUJOO0FBQ0Y7QUNqQkk7RUFDSSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FEbUJSO0FDaEJRO0VBUEo7SUFRUSxnQ0FBQTtJQUNBLHdCQUFBO0VEbUJWO0FBQ0Y7QUNsQlE7RUFYSjtJQVlRLG1CQUFBO0lBQ0Esd0JBQUE7RURxQlY7QUFDRjtBQ2hCQTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0FEbUJKO0FDakJJO0VBUEo7SUZGSSxvQkFBQTtJQUlBLGFBQUE7SUVPSSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsd0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VEd0JOO0FBQ0Y7QUN0Qkk7RUFDSSxrQ0FBQTtFQUNBLG1CQUFBO0VGakJKLG9CQUFBO0VBSUEsYUFBQTtFRWVJLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSx3QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUQ0QlI7QUMxQlE7RUFQSjtJQVFRLHlCQUFBO0lBQ0EsbUJBQUE7RUQ2QlY7QUFDRjtBQzNCUTtFQVpKO0lBYVEseUJBQUE7RUQ4QlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBob25lOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDo4NzBweClcIjtcclxuJHRhYmxldDogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI1MHB4KVwiO1xyXG5cclxuLy8gQG1lZGlhICN7JHBob25lfSB7fVxyXG4vLyBAbWVkaWEgI3skdGFibGV0fSB7fVxyXG5cclxuJHByaW1hcnkxICA6ICMwMDlERjI7XHQvKiBNYWluIFByaW1hcnkgY29sb3IgKi9cclxuJHByaW1hcnkyICA6ICMyRUI0RkM7XHJcbiRwcmltYXJ5MyAgOiAjMEFBOUZGO1xyXG4kcHJpbWFyeTQgIDogIzAwNkVBOTtcclxuJHByaW1hcnk1ICA6ICMwMDU1ODM7XHJcblxyXG4kc2Vjb25kYXJ5MTogIzAwMTdGNDtcdC8qIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgxKSAqL1xyXG4kc2Vjb25kYXJ5MjogIzQwNTJGQztcclxuJHNlY29uZGFyeTM6ICMxOTJGRkY7XHJcbiRzZWNvbmRhcnk0OiAjMDAxMUI2O1xyXG4kc2Vjb25kYXJ5NTogIzAxMEU4RjtcclxuXHJcbiRoaWdobGlnaHQxOiAjMDBGNTcxO1x0LyogTWFpbiBTZWNvbmRhcnkgY29sb3IgKDIpICovXHJcbiRoaWdobGlnaHQyOiAjMjNGQzg4O1xyXG4kaGlnaGxpZ2h0MzogIzAwRkY3NjtcclxuJGhpZ2hsaWdodDQ6ICMwMEJBNTc7XHJcbiRoaWdobGlnaHQ1OiAjMDA5MjQ0O1xyXG5cclxuJGdyZXllZC1jb2xvcjogI0MwQzBDMDtcclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuQG1peGluIGRpc3BsYXktZmxleCgpIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4KCRhcmdzKSB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAkYXJncztcclxuICAgIC13ZWJraXQtZmxleDogJGFyZ3M7XHJcbiAgICAtbXMtZmxleDogJGFyZ3M7XHJcbiAgICBmbGV4OiAkYXJnczsgXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ3JhZGllbnRCRyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICAgIH1cclxufSIsIi8qIE1haW4gUHJpbWFyeSBjb2xvciAqL1xuLyogTWFpbiBTZWNvbmRhcnkgY29sb3IgKDEpICovXG4vKiBNYWluIFNlY29uZGFyeSBjb2xvciAoMikgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNjAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5Aa2V5ZnJhbWVzIGdyYWRpZW50Qkcge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG59XG4uaW5mbyB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjUwcHgpIHtcbiAgLmluZm8ge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxufVxuLmluZm9fX2Jsb2NrIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxNywgNjUsIDAuNzMzKTtcbiAgcGFkZGluZzogMTAwcHggY2FsYyg2MCUgLSAyMDBweCkgMTAwcHggMjAwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI1MHB4KSB7XG4gIC5pbmZvX19ibG9jayB7XG4gICAgcGFkZGluZzogMTAwcHggY2FsYygxNSUgKyAxMDBweCk7XG4gICAgd2lkdGg6IGNhbGMoNzAlIC0gMjAwcHgpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg3MHB4KSB7XG4gIC5pbmZvX19ibG9jayB7XG4gICAgcGFkZGluZzogMTAwcHggMjBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIH1cbn1cblxuLmdvYWxzIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuM2VtO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgY2FsYygxMDAlIC8gMykpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjUwcHgpIHtcbiAgLmdvYWxzIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLmdvYWxzX19ibG9jayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTcsIDY1LCAwLjczMyk7XG4gIHBhZGRpbmc6IDEwMHB4IDc1cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjUwcHgpIHtcbiAgLmdvYWxzX19ibG9jayB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg3MHB4KSB7XG4gIC5nb2Fsc19fYmxvY2sge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vX2dsb2JhbHNcIjtcclxuXHJcbi5pbmZvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcblxyXG4gICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBAbWVkaWEgI3skdGFibGV0fSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2Jsb2NrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE3LCA2NSwgMC43MzMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IGNhbGMoNjAlIC0gMjAwcHgpIDEwMHB4IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBAbWVkaWEgI3skdGFibGV0fSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IGNhbGMoMTUlICsgMTAwcHgpO1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg3MCUgLSAyMDBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAjeyRwaG9uZX0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5nb2FscyB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgY2FsYygxMDAlIC8gMykpO1xyXG5cclxuICAgIEBtZWRpYSAjeyR0YWJsZXR9IHtcclxuICAgICAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXgoKTtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmX19ibG9jayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxNywgNjUsIDAuNzMzKTtcclxuICAgICAgICBwYWRkaW5nOiAxMDBweCA3NXB4O1xyXG4gICAgICAgIEBpbmNsdWRlIGRpc3BsYXktZmxleCgpO1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBAbWVkaWEgI3skdGFibGV0fSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgI3skcGhvbmV9IHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiAgICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/about/about.component.scss")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700&display=swap\");\n/* Main Primary color */\n/* Main Secondary color (1) */\n/* Main Secondary color (2) */\n@-webkit-keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.background {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: -2;\n  background: url('webbackground.png') no-repeat fixed center;\n  background-size: auto 150%;\n  -webkit-animation: gradientBG 30s ease infinite;\n          animation: gradientBG 30s ease infinite;\n}\n.tint {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: -1;\n  background-color: rgba(0, 29, 65, 0.7);\n}\n.root {\n  height: 100%;\n}\n.root__body {\n  margin-left: 50px;\n  height: auto;\n}\n@media screen and (max-width:870px) {\n  .root__body {\n    margin-left: 0;\n  }\n}\n.root__header {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  background: #061952;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  z-index: 3;\n  position: fixed;\n  top: 0;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media screen and (max-width:870px) {\n  .root__header {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n.root .title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-self: flex-start;\n}\n.root .title__name a {\n  font-weight: bold;\n  font-size: 1.5em;\n  padding-left: 5px;\n  width: 200px;\n  text-decoration: none;\n  color: white;\n}\n.root .title__img {\n  width: 40px;\n  height: 40x;\n  padding-left: 23px;\n  margin: 0 10px;\n}\n.navtoggle {\n  display: none;\n  padding: 20px;\n  cursor: pointer;\n}\n.navtoggle * {\n  font-size: 2em;\n}\n@media screen and (max-width:870px) {\n  .navtoggle {\n    display: block;\n  }\n}\n.nav {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  padding-right: 50px;\n  overflow: hidden;\n  height: 100%;\n}\n@media screen and (max-width:870px) {\n  .nav {\n    display: none;\n  }\n}\n.nav--mobile {\n  display: none;\n}\n@media screen and (max-width:870px) {\n  .nav--mobile {\n    background-color: rgba(12, 23, 82, 0.658);\n    width: calc( 100% - 50px);\n    padding-right: 5%;\n    overflow: hidden;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n.nav__btn {\n  display: block;\n  height: 100%;\n  padding: 20px 15px;\n  text-align: center;\n  background-color: transparent;\n  color: white;\n  text-decoration: none;\n  font-size: 1.2em;\n  -webkit-transition: background 0.3s ease-out;\n  transition: background 0.3s ease-out;\n}\n.nav__btn:hover {\n  background-color: #0080ff;\n  -webkit-transition: background 0.3s ease-out;\n  transition: background 0.3s ease-out;\n}\n@media screen and (max-width:870px) {\n  .nav__btn {\n    width: 100%;\n  }\n}\n.footer {\n  padding: 10% 20px 20px 20px;\n  margin-left: 50px;\n  margin-bottom: 50px;\n  border-left: 15px solid #3475d8;\n  border-bottom: 15px solid #3475d8;\n}\n@media screen and (max-width:870px) {\n  .footer {\n    margin-left: 0;\n    border-left: 10px solid #3475d8;\n    border-bottom: 10px solid #3475d8;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXF9iYWNrdXBcXF9uc2NjcG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxfZ2xvYmFscy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Q6XFxfYmFja3VwXFxfbnNjY3BvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQTBCUSxxRkFBQTtBQUNBLGdGQUFBO0FBckJjLHVCQUFBO0FBTUEsNkJBQUE7QUFNQSw2QkFBQTtBQTBCdEI7RUFDSTtJQUNJLDJCQUFBO0VDdENOO0VEd0NFO0lBQ0ksNkJBQUE7RUN0Q047RUR3Q0U7SUFDSSwyQkFBQTtFQ3RDTjtBQUNGO0FENkJBO0VBQ0k7SUFDSSwyQkFBQTtFQ3RDTjtFRHdDRTtJQUNJLDZCQUFBO0VDdENOO0VEd0NFO0lBQ0ksMkJBQUE7RUN0Q047QUFDRjtBQ2JBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLDBCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBRGVKO0FDWkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0FEZUo7QUNaQTtFQUNJLFlBQUE7QURlSjtBQ2JJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FEZVI7QUNkUTtFQUhKO0lBSVEsY0FBQTtFRGlCVjtBQUNGO0FDZEk7RUZIQSxvQkFBQTtFQUlBLGFBQUE7RUVDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRG9CUjtBQ2xCUTtFQVhKO0lBWVEsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VEcUJWO0FBQ0Y7QUNqQkk7RUZwQkEsb0JBQUE7RUFJQSxhQUFBO0VBSUEsMEJFY2tCO0VGWGxCLGNFV2tCO0VBQ2QseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO0FEMEJSO0FDeEJRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBRDBCWjtBQ3ZCUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEeUJaO0FDcEJBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FEdUJKO0FDckJJO0VBQ0ksY0FBQTtBRHVCUjtBQ3BCSTtFQVRKO0lBVU8sY0FBQTtFRHVCTDtBQUNGO0FDbkJBO0VGM0RJLG9CQUFBO0VBSUEsYUFBQTtFRXlEQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRDBCSjtBQ3hCSTtFQVBKO0lBUVEsYUFBQTtFRDJCTjtBQUNGO0FDekJJO0VBQ0ksYUFBQTtBRDJCUjtBQ3pCUTtFQUhKO0lBSVEseUNBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUY3RVIsb0JBQUE7SUFJQSxhQUFBO0lFMkVRLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFRGdDVjtBQUNGO0FDNUJJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQUEsb0NBQUE7QUQ4QlI7QUM1QlE7RUFDSSx5QkFBQTtFQUNBLDRDQUFBO0VBQUEsb0NBQUE7QUQ4Qlo7QUMzQlE7RUFoQko7SUFpQlEsV0FBQTtFRDhCVjtBQUNGO0FDekJBO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtBRDRCSjtBQzFCSTtFQVBKO0lBUVEsY0FBQTtJQUNBLCtCQUFBO0lBQ0EsaUNBQUE7RUQ2Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwaG9uZTogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODcwcHgpXCI7XHJcbiR0YWJsZXQ6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyNTBweClcIjtcclxuXHJcbi8vIEBtZWRpYSAjeyRwaG9uZX0ge31cclxuLy8gQG1lZGlhICN7JHRhYmxldH0ge31cclxuXHJcbiRwcmltYXJ5MSAgOiAjMDA5REYyO1x0LyogTWFpbiBQcmltYXJ5IGNvbG9yICovXHJcbiRwcmltYXJ5MiAgOiAjMkVCNEZDO1xyXG4kcHJpbWFyeTMgIDogIzBBQTlGRjtcclxuJHByaW1hcnk0ICA6ICMwMDZFQTk7XHJcbiRwcmltYXJ5NSAgOiAjMDA1NTgzO1xyXG5cclxuJHNlY29uZGFyeTE6ICMwMDE3RjQ7XHQvKiBNYWluIFNlY29uZGFyeSBjb2xvciAoMSkgKi9cclxuJHNlY29uZGFyeTI6ICM0MDUyRkM7XHJcbiRzZWNvbmRhcnkzOiAjMTkyRkZGO1xyXG4kc2Vjb25kYXJ5NDogIzAwMTFCNjtcclxuJHNlY29uZGFyeTU6ICMwMTBFOEY7XHJcblxyXG4kaGlnaGxpZ2h0MTogIzAwRjU3MTtcdC8qIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgyKSAqL1xyXG4kaGlnaGxpZ2h0MjogIzIzRkM4ODtcclxuJGhpZ2hsaWdodDM6ICMwMEZGNzY7XHJcbiRoaWdobGlnaHQ0OiAjMDBCQTU3O1xyXG4kaGlnaGxpZ2h0NTogIzAwOTI0NDtcclxuXHJcbiRncmV5ZWQtY29sb3I6ICNDMEMwQzA7XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbkBtaXhpbiBkaXNwbGF5LWZsZXgoKSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5AbWl4aW4gZmxleCgkYXJncykge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogJGFyZ3M7XHJcbiAgICAtd2Via2l0LWZsZXg6ICRhcmdzO1xyXG4gICAgLW1zLWZsZXg6ICRhcmdzO1xyXG4gICAgZmxleDogJGFyZ3M7IFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdyYWRpZW50Qkcge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbn0iLCIvKiBNYWluIFByaW1hcnkgY29sb3IgKi9cbi8qIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgxKSAqL1xuLyogTWFpbiBTZWNvbmRhcnkgY29sb3IgKDIpICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuQGtleWZyYW1lcyBncmFkaWVudEJHIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxufVxuLmJhY2tncm91bmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTI7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvd2ViYmFja2dyb3VuZC5wbmdcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDE1MCU7XG4gIGFuaW1hdGlvbjogZ3JhZGllbnRCRyAzMHMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLnRpbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjksIDY1LCAwLjcpO1xufVxuXG4ucm9vdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5yb290X19ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODcwcHgpIHtcbiAgLnJvb3RfX2JvZHkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG4ucm9vdF9faGVhZGVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzA2MTk1MjtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg3MHB4KSB7XG4gIC5yb290X19oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5yb290IC50aXRsZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMSAxIGF1dG87XG4gIC13ZWJraXQtZmxleDogMSAxIGF1dG87XG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbn1cbi5yb290IC50aXRsZV9fbmFtZSBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnJvb3QgLnRpdGxlX19pbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHg7XG4gIHBhZGRpbmctbGVmdDogMjNweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5uYXZ0b2dnbGUge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2dG9nZ2xlICoge1xuICBmb250LXNpemU6IDJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODcwcHgpIHtcbiAgLm5hdnRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg3MHB4KSB7XG4gIC5uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5uYXYtLW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg3MHB4KSB7XG4gIC5uYXYtLW1vYmlsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMiwgMjMsIDgyLCAwLjY1OCk7XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSA1MHB4KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5uYXZfX2J0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLW91dDtcbn1cbi5uYXZfX2J0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwZmY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLW91dDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODcwcHgpIHtcbiAgLm5hdl9fYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogMTAlIDIwcHggMjBweCAyMHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgIzM0NzVkODtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjMzQ3NWQ4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NzBweCkge1xuICAuZm9vdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMzQ3NWQ4O1xuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzM0NzVkODtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLy4uL19nbG9iYWxzXCI7XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgei1pbmRleDogLTI7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL3dlYmJhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTUwJTtcclxuICAgIGFuaW1hdGlvbjogZ3JhZGllbnRCRyAzMHMgZWFzZSBpbmZpbml0ZTsgICAgXHJcbn1cclxuXHJcbi50aW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOnJnYigwLCAyOSwgNjUpICwgJGFscGhhOiAwLjcpO1xyXG59XHJcblxyXG4ucm9vdCB7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuXHJcbiAgICAmX19ib2R5IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgQG1lZGlhICN7JHBob25lfSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGRpc3BsYXktZmxleCgpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig2LCAyNSwgODIpO1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cclxuICAgICAgICBAbWVkaWEgI3skcGhvbmV9IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgICYgLnRpdGxlIHsgLy8gaGVhZGVyIHRpdGxlIGJsb2NrXHJcbiAgICAgICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4KCk7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleCgxIDEgYXV0byk7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICZfX25hbWUgYSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAmX19pbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjNweDsgLy8gc28gdGhhdCBpdCBsb29rcyBtb3JlIGNlbnRlclxyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXZ0b2dnbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJiAqIHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgI3skcGhvbmV9IHtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIH1cclxuICAgICBcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBAbWVkaWEgI3skcGhvbmV9IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYtLW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgQG1lZGlhICN7JHBob25lfSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDIzLCA4MiwgMC42NTgpO1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAmX19idG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1vdXQ7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDAsIDEyOCwgMjU1KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhICN7JHBob25lfSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxMCUgMjBweCAyMHB4IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCByZ2IoNTIsIDExNywgMjE2KTsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHJnYig1MiwgMTE3LCAyMTYpOyBcclxuXHJcbiAgICBAbWVkaWEgI3skcGhvbmV9IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2IoNTIsIDExNywgMjE2KTsgXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCByZ2IoNTIsIDExNywgMjE2KTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.navOn = false;
      }

      _createClass(AppComponent, [{
        key: "toggleNav",
        value: function toggleNav() {
          this.navOn = !this.navOn;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./work/work.component */
    "./src/app/work/work.component.ts");
    /* harmony import */


    var _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sudoku/sudoku.component */
    "./src/app/sudoku/sudoku.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_11__["WorkComponent"], _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_12__["SudokuComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([//{path:"technology/:name", component: TechnologyComponent},
      {
        path: "sudoku",
        component: _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_12__["SudokuComponent"]
      }, {
        path: "skills",
        component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"]
      }, {
        path: "resume",
        component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"]
      }, {
        path: "about",
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]
      }, {
        path: "contact",
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
      }, {
        path: "work",
        component: _work_work_component__WEBPACK_IMPORTED_MODULE_11__["WorkComponent"]
      }, {
        path: "home",
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"]
      }, {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }, {
        path: "**",
        redirectTo: "home",
        pathMatch: "full"
      }], {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.scss":
  /*!************************************************!*\
    !*** ./src/app/contact/contact.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".connect {\n  font-family: \"Lato\", sans-serif;\n  font-size: 1.3em;\n  padding-bottom: 100px;\n}\n.connect__block {\n  background: #001449;\n  padding: 25px;\n  margin: 10px;\n  margin-left: 200px;\n  max-width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOlxcX2JhY2t1cFxcX25zY2Nwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25uZWN0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcblxyXG4gICAgJl9fYmxvY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAyMCwgNzMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgIH1cclxufVxyXG4iLCIuY29ubmVjdCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuLmNvbm5lY3RfX2Jsb2NrIHtcbiAgYmFja2dyb3VuZDogIzAwMTQ0OTtcbiAgcGFkZGluZzogMjVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIG1heC13aWR0aDogNDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/contact/contact.component.scss")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/main/main.component.scss":
  /*!******************************************!*\
    !*** ./src/app/main/main.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700&display=swap\");\n/* Main Primary color */\n/* Main Secondary color (1) */\n/* Main Secondary color (2) */\n@-webkit-keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n#about {\n  margin-top: 100px;\n  height: 100px;\n}\n.main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  height: 85vh;\n}\n.main__header {\n  font-size: 15em;\n  font-weight: 600;\n  color: white;\n  padding-left: 190px;\n  padding-top: 100px;\n}\n@media screen and (max-width:870px) {\n  .main__header {\n    font-size: 10em;\n    align-self: center;\n    text-align: center;\n    padding-left: 0;\n  }\n}\n.main__subheader {\n  font-size: 1.6em;\n  font-family: \"Lato\", sans-serif;\n  padding-left: 200px;\n  width: 600px;\n}\n@media screen and (max-width:870px) {\n  .main__subheader {\n    font-size: 1.3em;\n    align-self: center;\n    text-align: center;\n    padding: 0;\n    margin: 0;\n    width: 70%;\n  }\n}\n.main__button {\n  padding: 10px 15px;\n  text-align: center;\n  background-color: #007FFF;\n  border-radius: 4px;\n  text-decoration: none;\n  font-size: 1.5em;\n}\n@media screen and (max-width:870px) {\n  .main__button {\n    align-self: center;\n  }\n}\n.main__button:hover {\n  cursor: pointer;\n  background: #0074e9;\n  -webkit-transition: background 0.5s;\n  transition: background 0.5s;\n}\n.main__button:visited, .main__button:active {\n  color: white;\n}\n.intro {\n  background: rgba(0, 17, 65, 0.733);\n  font-size: 1.3em;\n  font-family: \"Lato\" sans-serif;\n  padding: 75px 0 200px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.intro__header {\n  font-size: 3em;\n}\n.intro__paragraph {\n  margin: 50px 0;\n  width: 350px;\n  line-height: 30px;\n  font-size: medium;\n}\n.intro__btn {\n  padding: 10px 15px;\n  margin: 20px;\n  text-align: center;\n  background: none;\n  border: 1px solid #007FFF;\n  border-radius: 4px;\n  color: white;\n  font-size: 1.3em;\n  text-decoration: none;\n  -webkit-transition: background 0.5s;\n  transition: background 0.5s;\n}\n.intro__btn:hover {\n  background-color: #007FFF;\n  -webkit-transition: background 0.5s;\n  transition: background 0.5s;\n}\n.footer {\n  margin: 10px;\n  text-align: center;\n}\n.route-btn {\n  margin-top: 50px;\n  padding-left: 200px;\n  padding-bottom: 25px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n@media screen and (max-width:870px) {\n  .route-btn {\n    margin: 50px;\n    padding: 0;\n    align-self: center;\n  }\n}\n.route-btn__button {\n  padding: 20px 25px;\n  margin: 20px;\n  text-align: center;\n  background: none;\n  border: 1px solid #007FFF;\n  border-radius: 4px;\n  color: white;\n  font-size: 1.5em;\n  text-decoration: none;\n  -webkit-transition: background 0.5s;\n  transition: background 0.5s;\n}\n.route-btn__button:hover {\n  background-color: #007FFF;\n  -webkit-transition: background 0.5s;\n  transition: background 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9EOlxcX2JhY2t1cFxcX25zY2Nwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXF9nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9EOlxcX2JhY2t1cFxcX25zY2Nwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFwcFxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBMEJRLHFGQUFBO0FBQ0EsZ0ZBQUE7QUFyQmMsdUJBQUE7QUFNQSw2QkFBQTtBQU1BLDZCQUFBO0FBMEJ0QjtFQUNJO0lBQ0ksMkJBQUE7RUN0Q047RUR3Q0U7SUFDSSw2QkFBQTtFQ3RDTjtFRHdDRTtJQUNJLDJCQUFBO0VDdENOO0FBQ0Y7QUQ2QkE7RUFDSTtJQUNJLDJCQUFBO0VDdENOO0VEd0NFO0lBQ0ksNkJBQUE7RUN0Q047RUR3Q0U7SUFDSSwyQkFBQTtFQ3RDTjtBQUNGO0FDYkE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QURlSjtBQ1pBO0VGdUJJLG9CQUFBO0VBSUEsYUFBQTtFRXpCQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEbUJKO0FDakJJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QURrQlI7QUNoQlE7RUFSSjtJQVNRLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFRG1CVjtBQUNGO0FDaEJJO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRGtCUjtBQ2hCUTtFQU5KO0lBT1EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VEbUJWO0FBQ0Y7QUNoQkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QURrQlI7QUNoQlE7RUFSSjtJQVNRLGtCQUFBO0VEbUJWO0FBQ0Y7QUNqQlE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FEbUJaO0FDaEJRO0VBQ0ksWUFBQTtBRGtCWjtBQ1pBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUY3Q0Esb0JBQUE7RUFJQSxhQUFBO0VFMkNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QURtQko7QUNqQkk7RUFDSSxjQUFBO0FEbUJSO0FDaEJJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FEa0JSO0FDZkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRGlCUjtBQ2ZRO0VBQ0kseUJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FEaUJaO0FDWEE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QURjSjtBQ1hBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FEY0o7QUNaSTtFQU5KO0lBT1EsWUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFRGVOO0FBQ0Y7QUNaSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FEY1I7QUNaUTtFQUNJLHlCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRGNaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBob25lOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDo4NzBweClcIjtcclxuJHRhYmxldDogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI1MHB4KVwiO1xyXG5cclxuLy8gQG1lZGlhICN7JHBob25lfSB7fVxyXG4vLyBAbWVkaWEgI3skdGFibGV0fSB7fVxyXG5cclxuJHByaW1hcnkxICA6ICMwMDlERjI7XHQvKiBNYWluIFByaW1hcnkgY29sb3IgKi9cclxuJHByaW1hcnkyICA6ICMyRUI0RkM7XHJcbiRwcmltYXJ5MyAgOiAjMEFBOUZGO1xyXG4kcHJpbWFyeTQgIDogIzAwNkVBOTtcclxuJHByaW1hcnk1ICA6ICMwMDU1ODM7XHJcblxyXG4kc2Vjb25kYXJ5MTogIzAwMTdGNDtcdC8qIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgxKSAqL1xyXG4kc2Vjb25kYXJ5MjogIzQwNTJGQztcclxuJHNlY29uZGFyeTM6ICMxOTJGRkY7XHJcbiRzZWNvbmRhcnk0OiAjMDAxMUI2O1xyXG4kc2Vjb25kYXJ5NTogIzAxMEU4RjtcclxuXHJcbiRoaWdobGlnaHQxOiAjMDBGNTcxO1x0LyogTWFpbiBTZWNvbmRhcnkgY29sb3IgKDIpICovXHJcbiRoaWdobGlnaHQyOiAjMjNGQzg4O1xyXG4kaGlnaGxpZ2h0MzogIzAwRkY3NjtcclxuJGhpZ2hsaWdodDQ6ICMwMEJBNTc7XHJcbiRoaWdobGlnaHQ1OiAjMDA5MjQ0O1xyXG5cclxuJGdyZXllZC1jb2xvcjogI0MwQzBDMDtcclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuQG1peGluIGRpc3BsYXktZmxleCgpIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4KCRhcmdzKSB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAkYXJncztcclxuICAgIC13ZWJraXQtZmxleDogJGFyZ3M7XHJcbiAgICAtbXMtZmxleDogJGFyZ3M7XHJcbiAgICBmbGV4OiAkYXJnczsgXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ3JhZGllbnRCRyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICAgIH1cclxufSIsIi8qIE1haW4gUHJpbWFyeSBjb2xvciAqL1xuLyogTWFpbiBTZWNvbmRhcnkgY29sb3IgKDEpICovXG4vKiBNYWluIFNlY29uZGFyeSBjb2xvciAoMikgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNjAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5Aa2V5ZnJhbWVzIGdyYWRpZW50Qkcge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG59XG4jYWJvdXQge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogODV2aDtcbn1cbi5tYWluX19oZWFkZXIge1xuICBmb250LXNpemU6IDE1ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxOTBweDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NzBweCkge1xuICAubWFpbl9faGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEwZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cbi5tYWluX19zdWJoZWFkZXIge1xuICBmb250LXNpemU6IDEuNmVtO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctbGVmdDogMjAwcHg7XG4gIHdpZHRoOiA2MDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODcwcHgpIHtcbiAgLm1haW5fX3N1YmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbi5tYWluX19idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg3MHB4KSB7XG4gIC5tYWluX19idXR0b24ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxufVxuLm1haW5fX2J1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwNzRlOTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xufVxuLm1haW5fX2J1dHRvbjp2aXNpdGVkLCAubWFpbl9fYnV0dG9uOmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmludHJvIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxNywgNjUsIDAuNzMzKTtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDc1cHggMCAyMDBweCAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW50cm9fX2hlYWRlciB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuLmludHJvX19wYXJhZ3JhcGgge1xuICBtYXJnaW46IDUwcHggMDtcbiAgd2lkdGg6IDM1MHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG4uaW50cm9fX2J0biB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbWFyZ2luOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuM2VtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbn1cbi5pbnRyb19fYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0ZGRjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yb3V0ZS1idG4ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NzBweCkge1xuICAucm91dGUtYnRuIHtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbi5yb3V0ZS1idG5fX2J1dHRvbiB7XG4gIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgbWFyZ2luOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbn1cbi5yb3V0ZS1idG5fX2J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdGRkY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbn0iLCJAaW1wb3J0IFwiLi8uLi8uLi9fZ2xvYmFsc1wiO1xyXG5cclxuI2Fib3V0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogODV2aDtcclxuXHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxOTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhICN7JHBob25lfSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBlbTtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX3N1YmhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSAjeyRwaG9uZX0ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICMwMDdGRkY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG5cclxuICAgICAgICBAbWVkaWEgI3skcGhvbmV9IHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDExNiwgMjMzKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjp2aXNpdGVkLCAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uaW50cm8ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxNywgNjUsIDAuNzMzKTtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDc1cHggMCAyMDBweCAwO1xyXG4gICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4KCk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3BhcmFncmFwaCB7XHJcbiAgICAgICAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2J0biB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA3RkZGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xyXG4gICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdGRkY7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdXRlLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICAgIEBtZWRpYSAjeyRwaG9uZX0ge1xyXG4gICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJl9fYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdGRkY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XHJcbiAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0ZGRjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.scss */
      "./src/app/main/main.component.scss")).default]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/resume/resume.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/resume/resume.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppResumeResumeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700&display=swap\");\n/* Main Primary color */\n/* Main Secondary color (1) */\n/* Main Secondary color (2) */\n@-webkit-keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.title {\n  font-size: 40px;\n  padding: 20px 50px;\n  display: block;\n  background-color: #0059ff;\n  color: white;\n  padding-left: 25%;\n}\n.centerer {\n  margin-left: calc(25% - 80px);\n}\n.resume {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  border-radius: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n  background: #d3d3d3;\n  -webkit-transition: background 0.5s;\n  transition: background 0.5s;\n}\n.resume__header {\n  font-size: 30px;\n  padding: 20px;\n  background: #0259fa;\n  border-bottom-right-radius: 8px;\n  border-top-right-radius: 8px;\n  -webkit-transition: background 0.5s;\n  transition: background 0.5s;\n}\n.resume__header a {\n  color: #d6e0ff;\n  text-decoration: none;\n}\n.resume__icon i {\n  font-size: 40px;\n  padding: 20px;\n  color: #0259fa;\n}\n.resume:hover {\n  background: #a3a9bb;\n  -webkit-transition: background 0.5s;\n  transition: background 0.5s;\n}\n.resume:hover .resume__header {\n  background: #0044c4;\n  -webkit-transition: background 0.5s;\n  transition: background 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL0Q6XFxfYmFja3VwXFxfbnNjY3BvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcX2dsb2JhbHMuc2NzcyIsInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lL0Q6XFxfYmFja3VwXFxfbnNjY3BvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXBwXFxyZXN1bWVcXHJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBMEJRLHFGQUFBO0FBQ0EsZ0ZBQUE7QUFyQmMsdUJBQUE7QUFNQSw2QkFBQTtBQU1BLDZCQUFBO0FBMEJ0QjtFQUNJO0lBQ0ksMkJBQUE7RUN0Q047RUR3Q0U7SUFDSSw2QkFBQTtFQ3RDTjtFRHdDRTtJQUNJLDJCQUFBO0VDdENOO0FBQ0Y7QUQ2QkE7RUFDSTtJQUNJLDJCQUFBO0VDdENOO0VEd0NFO0lBQ0ksNkJBQUE7RUN0Q047RUR3Q0U7SUFDSSwyQkFBQTtFQ3RDTjtBQUNGO0FDYkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURlSjtBQ1pBO0VBQ0ksNkJBQUE7QURlSjtBQ1pBO0VGZUksb0JBQUE7RUFJQSxhQUFBO0VFakJBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRG1CSjtBQ2hCSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRGtCUjtBQ2hCUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBRGtCWjtBQ2JJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FEZVI7QUNaSTtFQUNJLG1CQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRGNSO0FDWlE7RUFDSSxtQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QURjWiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGhvbmU6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOjg3MHB4KVwiO1xyXG4kdGFibGV0OiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjUwcHgpXCI7XHJcblxyXG4vLyBAbWVkaWEgI3skcGhvbmV9IHt9XHJcbi8vIEBtZWRpYSAjeyR0YWJsZXR9IHt9XHJcblxyXG4kcHJpbWFyeTEgIDogIzAwOURGMjtcdC8qIE1haW4gUHJpbWFyeSBjb2xvciAqL1xyXG4kcHJpbWFyeTIgIDogIzJFQjRGQztcclxuJHByaW1hcnkzICA6ICMwQUE5RkY7XHJcbiRwcmltYXJ5NCAgOiAjMDA2RUE5O1xyXG4kcHJpbWFyeTUgIDogIzAwNTU4MztcclxuXHJcbiRzZWNvbmRhcnkxOiAjMDAxN0Y0O1x0LyogTWFpbiBTZWNvbmRhcnkgY29sb3IgKDEpICovXHJcbiRzZWNvbmRhcnkyOiAjNDA1MkZDO1xyXG4kc2Vjb25kYXJ5MzogIzE5MkZGRjtcclxuJHNlY29uZGFyeTQ6ICMwMDExQjY7XHJcbiRzZWNvbmRhcnk1OiAjMDEwRThGO1xyXG5cclxuJGhpZ2hsaWdodDE6ICMwMEY1NzE7XHQvKiBNYWluIFNlY29uZGFyeSBjb2xvciAoMikgKi9cclxuJGhpZ2hsaWdodDI6ICMyM0ZDODg7XHJcbiRoaWdobGlnaHQzOiAjMDBGRjc2O1xyXG4kaGlnaGxpZ2h0NDogIzAwQkE1NztcclxuJGhpZ2hsaWdodDU6ICMwMDkyNDQ7XHJcblxyXG4kZ3JleWVkLWNvbG9yOiAjQzBDMEMwO1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AbWl4aW4gZGlzcGxheS1mbGV4KCkge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuQG1peGluIGZsZXgoJGFyZ3MpIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6ICRhcmdzO1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkYXJncztcclxuICAgIC1tcy1mbGV4OiAkYXJncztcclxuICAgIGZsZXg6ICRhcmdzOyBcclxufVxyXG5cclxuQGtleWZyYW1lcyBncmFkaWVudEJHIHtcclxuICAgIDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gICAgfVxyXG59IiwiLyogTWFpbiBQcmltYXJ5IGNvbG9yICovXG4vKiBNYWluIFNlY29uZGFyeSBjb2xvciAoMSkgKi9cbi8qIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgyKSAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBrZXlmcmFtZXMgZ3JhZGllbnRCRyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcGFkZGluZzogMjBweCA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTlmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDI1JTtcbn1cblxuLmNlbnRlcmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMjUlIC0gODBweCk7XG59XG5cbi5yZXN1bWUge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG59XG4ucmVzdW1lX19oZWFkZXIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMwMjU5ZmE7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbn1cbi5yZXN1bWVfX2hlYWRlciBhIHtcbiAgY29sb3I6ICNkNmUwZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5yZXN1bWVfX2ljb24gaSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICMwMjU5ZmE7XG59XG4ucmVzdW1lOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2EzYTliYjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xufVxuLnJlc3VtZTpob3ZlciAucmVzdW1lX19oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA0NGM0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG59IiwiQGltcG9ydCBcIi4vLi4vLi4vX2dsb2JhbHNcIjtcclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjUlO1xyXG59XHJcblxyXG4uY2VudGVyZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMjUlIC0gODBweCk7XHJcbn1cclxuXHJcbi5yZXN1bWUge1xyXG4gICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4KCk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xyXG5cclxuXHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMjU5ZmE7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcclxuXHJcbiAgICAgICAgJiBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNkNmUwZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgJl9faWNvbiBpIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBjb2xvcjogIzAyNTlmYTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYTNhOWJiO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcclxuXHJcbiAgICAgICAgJiAucmVzdW1lX19oZWFkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA0NGM0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAuaWZyYW1lLWxvYWRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgNzYsIDI1NSkgY2VudGVyIGNlbnRlcjtcclxuLy8gICAgIHdpZHRoOiA3NSU7XHJcbi8vICAgICBoZWlnaHQ6IDgwdmg7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gfVxyXG5cclxuLy8gaWZyYW1lIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/resume/resume.component.ts":
  /*!********************************************!*\
    !*** ./src/app/resume/resume.component.ts ***!
    \********************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ResumeComponent =
    /*#__PURE__*/
    function () {
      function ResumeComponent() {
        _classCallCheck(this, ResumeComponent);
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeComponent;
    }();

    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resume',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resume.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resume.component.scss */
      "./src/app/resume/resume.component.scss")).default]
    })], ResumeComponent);
    /***/
  },

  /***/
  "./src/app/skills/skills.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/skills/skills.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSkillsSkillsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700&display=swap\");\n/* Main Primary color */\n/* Main Secondary color (1) */\n/* Main Secondary color (2) */\n@-webkit-keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.info {\n  font-family: \"Lato\", sans-serif;\n  font-size: 1.3em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n@media screen and (max-width:1250px) {\n  .info {\n    padding-bottom: 100px;\n  }\n}\n.info__block {\n  background: rgba(0, 17, 65, 0.733);\n  padding: 50px calc(70% - 200px) 100px 200px;\n  width: 30%;\n  align-self: center;\n}\n@media screen and (max-width:1250px) {\n  .info__block {\n    padding: 100px calc(15% + 100px);\n    width: calc(70% - 200px);\n  }\n}\n@media screen and (max-width:870px) {\n  .info__block {\n    padding: 100px 20px;\n    width: calc(100% - 40px);\n  }\n}\n.lead {\n  padding: 20px;\n  background-color: #001449;\n  margin-bottom: 10px;\n}\n.tech {\n  display: -webkit-box;\n  display: flex;\n  padding: 50px 0;\n  background-color: rgba(0, 17, 65, 0.733);\n  text-align: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  line-height: 25px;\n  font-size: large;\n}\n.tech .item {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL0Q6XFxfYmFja3VwXFxfbnNjY3BvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcX2dsb2JhbHMuc2NzcyIsInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2tpbGxzL0Q6XFxfYmFja3VwXFxfbnNjY3BvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXBwXFxza2lsbHNcXHNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBMEJRLHFGQUFBO0FBQ0EsZ0ZBQUE7QUFyQmMsdUJBQUE7QUFNQSw2QkFBQTtBQU1BLDZCQUFBO0FBMEJ0QjtFQUNJO0lBQ0ksMkJBQUE7RUN0Q047RUR3Q0U7SUFDSSw2QkFBQTtFQ3RDTjtFRHdDRTtJQUNJLDJCQUFBO0VDdENOO0FBQ0Y7QUQ2QkE7RUFDSTtJQUNJLDJCQUFBO0VDdENOO0VEd0NFO0lBQ0ksNkJBQUE7RUN0Q047RUR3Q0U7SUFDSSwyQkFBQTtFQ3RDTjtBQUNGO0FDYkE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VGMEJBLG9CQUFBO0VBSUEsYUFBQTtFRTNCQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QURrQko7QUNoQkk7RUFQSjtJQVFRLHFCQUFBO0VEbUJOO0FBQ0Y7QUNqQkk7RUFDSSxrQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FEbUJSO0FDakJRO0VBTko7SUFPUSxnQ0FBQTtJQUNBLHdCQUFBO0VEb0JWO0FBQ0Y7QUNuQlE7RUFWSjtJQVdRLG1CQUFBO0lBQ0Esd0JBQUE7RURzQlY7QUFDRjtBQ2pCQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FEb0JKO0FDakJBO0VGUEksb0JBQUE7RUFJQSxhQUFBO0VFS0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEd0JKO0FDdEJJO0VBQ0ksWUFBQTtBRHdCUiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGhvbmU6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOjg3MHB4KVwiO1xyXG4kdGFibGV0OiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjUwcHgpXCI7XHJcblxyXG4vLyBAbWVkaWEgI3skcGhvbmV9IHt9XHJcbi8vIEBtZWRpYSAjeyR0YWJsZXR9IHt9XHJcblxyXG4kcHJpbWFyeTEgIDogIzAwOURGMjtcdC8qIE1haW4gUHJpbWFyeSBjb2xvciAqL1xyXG4kcHJpbWFyeTIgIDogIzJFQjRGQztcclxuJHByaW1hcnkzICA6ICMwQUE5RkY7XHJcbiRwcmltYXJ5NCAgOiAjMDA2RUE5O1xyXG4kcHJpbWFyeTUgIDogIzAwNTU4MztcclxuXHJcbiRzZWNvbmRhcnkxOiAjMDAxN0Y0O1x0LyogTWFpbiBTZWNvbmRhcnkgY29sb3IgKDEpICovXHJcbiRzZWNvbmRhcnkyOiAjNDA1MkZDO1xyXG4kc2Vjb25kYXJ5MzogIzE5MkZGRjtcclxuJHNlY29uZGFyeTQ6ICMwMDExQjY7XHJcbiRzZWNvbmRhcnk1OiAjMDEwRThGO1xyXG5cclxuJGhpZ2hsaWdodDE6ICMwMEY1NzE7XHQvKiBNYWluIFNlY29uZGFyeSBjb2xvciAoMikgKi9cclxuJGhpZ2hsaWdodDI6ICMyM0ZDODg7XHJcbiRoaWdobGlnaHQzOiAjMDBGRjc2O1xyXG4kaGlnaGxpZ2h0NDogIzAwQkE1NztcclxuJGhpZ2hsaWdodDU6ICMwMDkyNDQ7XHJcblxyXG4kZ3JleWVkLWNvbG9yOiAjQzBDMEMwO1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AbWl4aW4gZGlzcGxheS1mbGV4KCkge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuQG1peGluIGZsZXgoJGFyZ3MpIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6ICRhcmdzO1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkYXJncztcclxuICAgIC1tcy1mbGV4OiAkYXJncztcclxuICAgIGZsZXg6ICRhcmdzOyBcclxufVxyXG5cclxuQGtleWZyYW1lcyBncmFkaWVudEJHIHtcclxuICAgIDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gICAgfVxyXG59IiwiLyogTWFpbiBQcmltYXJ5IGNvbG9yICovXG4vKiBNYWluIFNlY29uZGFyeSBjb2xvciAoMSkgKi9cbi8qIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgyKSAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBrZXlmcmFtZXMgZ3JhZGllbnRCRyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbn1cbi5pbmZvIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyNTBweCkge1xuICAuaW5mbyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG59XG4uaW5mb19fYmxvY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE3LCA2NSwgMC43MzMpO1xuICBwYWRkaW5nOiA1MHB4IGNhbGMoNzAlIC0gMjAwcHgpIDEwMHB4IDIwMHB4O1xuICB3aWR0aDogMzAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyNTBweCkge1xuICAuaW5mb19fYmxvY2sge1xuICAgIHBhZGRpbmc6IDEwMHB4IGNhbGMoMTUlICsgMTAwcHgpO1xuICAgIHdpZHRoOiBjYWxjKDcwJSAtIDIwMHB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NzBweCkge1xuICAuaW5mb19fYmxvY2sge1xuICAgIHBhZGRpbmc6IDEwMHB4IDIwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG59XG5cbi5sZWFkIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTQ0OTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRlY2gge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNywgNjUsIDAuNzMzKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi50ZWNoIC5pdGVtIHtcbiAgcGFkZGluZzogNXB4O1xufSIsIkBpbXBvcnQgXCIuLy4uLy4uL19nbG9iYWxzXCI7XHJcblxyXG4uaW5mbyB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG5cclxuICAgIEBpbmNsdWRlIGRpc3BsYXktZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgQG1lZGlhICN7JHRhYmxldH0ge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19ibG9jayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxNywgNjUsIDAuNzMzKTtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IGNhbGMoNzAlIC0gMjAwcHgpIDEwMHB4IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAgICAgICBAbWVkaWEgI3skdGFibGV0fSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IGNhbGMoMTUlICsgMTAwcHgpO1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg3MCUgLSAyMDBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAjeyRwaG9uZX0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZWFkIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjAsIDczKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50ZWNoIHtcclxuICAgIEBpbmNsdWRlIGRpc3BsYXktZmxleCgpO1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNywgNjUsIDAuNzMzKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcblxyXG4gICAgJiAuaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIC5vdmVydmlldyB7XHJcbi8vICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbi8vICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG5cclxuLy8gICAgICZfX2Jsb2NrIHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjAsIDczKTtcclxuLy8gICAgICAgICBwYWRkaW5nOiAyNXB4IDI1cHggMjVweCAyNXB4O1xyXG4vLyAgICAgICAgIG1hcmdpbjogMjVweDtcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbi8vICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcblxyXG4vLyAgICAgICAgIEBtZWRpYSAjeyRwaG9uZX0ge1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gLnRlY2hub2xvZ2llcyB7XHJcbi8vICAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXgoKTtcclxuLy8gICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuLy8gICAgIG1hcmdpbjogMjBweCAwIDAgMjAwcHg7XHJcblxyXG4vLyAgICAgQG1lZGlhICN7JHBob25lfSB7XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbi8vICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICYgLmZyb250RW5kIHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjAsIDczKTtcclxuLy8gICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbi8vICAgICAgICAgcGFkZGluZzogNTBweDtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgJiAuZnJvbnRFbmQge1xyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjAsIDczKTtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcblxyXG4vLyAgICAgICAgICAgICBAbWVkaWEgI3skcGhvbmV9IHtcclxuLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbi8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgICAgICYgLmJhY2tFbmQge1xyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjAsIDczKTtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgQG1lZGlhICN7JHBob25lfSB7XHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gJiAuYmFja0VuZCB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDIwLCA3Myk7XHJcbi8vICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC5pbnRybyB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjAsIDczKTtcclxuLy8gICAgIHBhZGRpbmc6IDI1cHg7XHJcbi8vICAgICBtYXJnaW46IDIwcHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbi8vICAgICB3aWR0aDogNDAlO1xyXG5cclxuLy8gICAgIEBtZWRpYSAjeyRwaG9uZX0ge1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgICAgfVxyXG4vLyB9Il19 */";
    /***/
  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SkillsComponent =
    /*#__PURE__*/
    function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skills',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skills.component.scss */
      "./src/app/skills/skills.component.scss")).default]
    })], SkillsComponent);
    /***/
  },

  /***/
  "./src/app/sudoku/sudoku.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/sudoku/sudoku.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSudokuSudokuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700&display=swap\");\n/* Main Primary color */\n/* Main Secondary color (1) */\n/* Main Secondary color (2) */\n@-webkit-keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n* {\n  box-sizing: border-box;\n  font-family: sans-serif;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Old versions of Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n   supported by Chrome, Opera and Firefox */\n}\n.plate {\n  display: -webkit-box;\n  display: flex;\n  padding: 15px;\n  color: black;\n}\n.plate .side {\n  margin-left: 15px;\n  margin-top: 66.6666px;\n}\n.plate .side .numbers {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100px;\n}\n.plate .side .numbers .number {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: calc(100px/3);\n  height: calc(300px/9);\n  background: rgba(255, 255, 255, 0.7);\n  border-bottom: 1px solid grey;\n  border-right: 1px solid grey;\n  cursor: pointer;\n}\n.plate .side .numbers .number:nth-of-type(3n) {\n  border-right: 0 solid #06F;\n}\n.plate .side .numbers .number:nth-of-type(2n + 7) {\n  border-bottom: 0 solid #06F;\n}\n.plate .side .numbers .number:last-of-type {\n  box-sizing: content-box;\n  border: none;\n}\n.plate .side .numbers .number:hover {\n  background: lightgray;\n}\n.sudoku {\n  background-color: #06F;\n  width: 300px;\n  height: 300px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  cursor: pointer;\n}\n.sudoku .box {\n  width: calc(100%/3);\n  height: calc(100%/3);\n  border-right: 3px solid #06F;\n  border-bottom: 3px solid #06F;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n}\n.sudoku .box:nth-of-type(3n) {\n  border-right: 0 solid black;\n}\n.sudoku .box:nth-of-type(n + 7) {\n  border-bottom: 0 solid black;\n}\n.sudoku .box .cell {\n  width: calc(100%/3);\n  height: calc(100%/3);\n  border-right: 1px solid grey;\n  border-bottom: 1px solid grey;\n  border-radius: 3px;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.sudoku .box .cell:nth-of-type(3n) {\n  border-right: 0 solid black;\n}\n.sudoku .box .cell:nth-of-type(n + 7) {\n  border-bottom: 0px solid black;\n}\n.sudoku .box .cell:hover {\n  background: #b4b4b4;\n}\n.clicked, .selected {\n  background: #8ebbff !important;\n}\n.highlighted {\n  background: rgba(179, 179, 179, 0.521) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vkb2t1L0Q6XFxfYmFja3VwXFxfbnNjY3BvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcX2dsb2JhbHMuc2NzcyIsInNyYy9hcHAvc3Vkb2t1L3N1ZG9rdS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3Vkb2t1L0Q6XFxfYmFja3VwXFxfbnNjY3BvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXBwXFxzdWRva3VcXHN1ZG9rdS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBMEJRLHFGQUFBO0FBQ0EsZ0ZBQUE7QUFyQmMsdUJBQUE7QUFNQSw2QkFBQTtBQU1BLDZCQUFBO0FBMEJ0QjtFQUNJO0lBQ0ksMkJBQUE7RUN0Q047RUR3Q0U7SUFDSSw2QkFBQTtFQ3RDTjtFRHdDRTtJQUNJLDJCQUFBO0VDdENOO0FBQ0Y7QUQ2QkE7RUFDSTtJQUNJLDJCQUFBO0VDdENOO0VEd0NFO0lBQ0ksNkJBQUE7RUN0Q047RUR3Q0U7SUFDSSwyQkFBQTtFQ3RDTjtBQUNGO0FDR0E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBWEEsMkJBQUE7RUFBNkIsZUFBQTtFQUN6Qix5QkFBQTtFQUEyQixXQUFBO0VBQ3ZCLHNCQUFBO0VBQXdCLDRCQUFBO0VBQ3hCLHFCQUFBO0VBQXVCLDJCQUFBO0VBQ25CLGlCQUFBO0VBQW1COzJDQUFBO0FEaUJuQztBQ05BO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURTSjtBQ1BJO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtBRFNSO0FDUFE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtBRFNaO0FDUFk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FEU2hCO0FDUGdCO0VBQ0ksMEJBQUE7QURTcEI7QUNOZ0I7RUFDSSwyQkFBQTtBRFFwQjtBQ0xnQjtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBRE9wQjtBQ0pnQjtFQUNJLHFCQUFBO0FETXBCO0FDRUE7RUFDSSxzQkF2RUc7RUF3RUgsWUFwRUs7RUFxRUwsYUFyRUs7RUFzRUwsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBRENKO0FDQ0k7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBREFSO0FDRVE7RUFDSSwyQkFBQTtBREFaO0FDR1E7RUFDSSw0QkFBQTtBRERaO0FDSVE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBbEdMO0VBcUdLLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FESlo7QUNNWTtFQUNJLDJCQUFBO0FESmhCO0FDT1k7RUFDSSw4QkFBQTtBRExoQjtBQ1FZO0VBQ0ksbUJBQUE7QUROaEI7QUNZQTtFQUNJLDhCQUFBO0FEVEo7QUNZQTtFQUNJLGlEQUFBO0FEVEoiLCJmaWxlIjoic3JjL2FwcC9zdWRva3Uvc3Vkb2t1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBob25lOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDo4NzBweClcIjtcclxuJHRhYmxldDogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI1MHB4KVwiO1xyXG5cclxuLy8gQG1lZGlhICN7JHBob25lfSB7fVxyXG4vLyBAbWVkaWEgI3skdGFibGV0fSB7fVxyXG5cclxuJHByaW1hcnkxICA6ICMwMDlERjI7XHQvKiBNYWluIFByaW1hcnkgY29sb3IgKi9cclxuJHByaW1hcnkyICA6ICMyRUI0RkM7XHJcbiRwcmltYXJ5MyAgOiAjMEFBOUZGO1xyXG4kcHJpbWFyeTQgIDogIzAwNkVBOTtcclxuJHByaW1hcnk1ICA6ICMwMDU1ODM7XHJcblxyXG4kc2Vjb25kYXJ5MTogIzAwMTdGNDtcdC8qIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgxKSAqL1xyXG4kc2Vjb25kYXJ5MjogIzQwNTJGQztcclxuJHNlY29uZGFyeTM6ICMxOTJGRkY7XHJcbiRzZWNvbmRhcnk0OiAjMDAxMUI2O1xyXG4kc2Vjb25kYXJ5NTogIzAxMEU4RjtcclxuXHJcbiRoaWdobGlnaHQxOiAjMDBGNTcxO1x0LyogTWFpbiBTZWNvbmRhcnkgY29sb3IgKDIpICovXHJcbiRoaWdobGlnaHQyOiAjMjNGQzg4O1xyXG4kaGlnaGxpZ2h0MzogIzAwRkY3NjtcclxuJGhpZ2hsaWdodDQ6ICMwMEJBNTc7XHJcbiRoaWdobGlnaHQ1OiAjMDA5MjQ0O1xyXG5cclxuJGdyZXllZC1jb2xvcjogI0MwQzBDMDtcclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuQG1peGluIGRpc3BsYXktZmxleCgpIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4KCRhcmdzKSB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAkYXJncztcclxuICAgIC13ZWJraXQtZmxleDogJGFyZ3M7XHJcbiAgICAtbXMtZmxleDogJGFyZ3M7XHJcbiAgICBmbGV4OiAkYXJnczsgXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ3JhZGllbnRCRyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICAgIH1cclxufSIsIi8qIE1haW4gUHJpbWFyeSBjb2xvciAqL1xuLyogTWFpbiBTZWNvbmRhcnkgY29sb3IgKDEpICovXG4vKiBNYWluIFNlY29uZGFyeSBjb2xvciAoMikgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNjAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5Aa2V5ZnJhbWVzIGdyYWRpZW50Qkcge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG59XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLyogaU9TIFNhZmFyaSAqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBTYWZhcmkgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xufVxuXG4ucGxhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4ucGxhdGUgLnNpZGUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogNjYuNjY2NnB4O1xufVxuLnBsYXRlIC5zaWRlIC5udW1iZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5wbGF0ZSAuc2lkZSAubnVtYmVycyAubnVtYmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiBjYWxjKDEwMHB4LzMpO1xuICBoZWlnaHQ6IGNhbGMoMzAwcHgvOSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wbGF0ZSAuc2lkZSAubnVtYmVycyAubnVtYmVyOm50aC1vZi10eXBlKDNuKSB7XG4gIGJvcmRlci1yaWdodDogMCBzb2xpZCAjMDZGO1xufVxuLnBsYXRlIC5zaWRlIC5udW1iZXJzIC5udW1iZXI6bnRoLW9mLXR5cGUoMm4gKyA3KSB7XG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgIzA2Rjtcbn1cbi5wbGF0ZSAuc2lkZSAubnVtYmVycyAubnVtYmVyOmxhc3Qtb2YtdHlwZSB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3JkZXI6IG5vbmU7XG59XG4ucGxhdGUgLnNpZGUgLm51bWJlcnMgLm51bWJlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn1cblxuLnN1ZG9rdSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNkY7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN1ZG9rdSAuYm94IHtcbiAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUvMyk7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwNkY7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuLnN1ZG9rdSAuYm94Om50aC1vZi10eXBlKDNuKSB7XG4gIGJvcmRlci1yaWdodDogMCBzb2xpZCBibGFjaztcbn1cbi5zdWRva3UgLmJveDpudGgtb2YtdHlwZShuICsgNykge1xuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIGJsYWNrO1xufVxuLnN1ZG9rdSAuYm94IC5jZWxsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUvMyk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zdWRva3UgLmJveCAuY2VsbDpudGgtb2YtdHlwZSgzbikge1xuICBib3JkZXItcmlnaHQ6IDAgc29saWQgYmxhY2s7XG59XG4uc3Vkb2t1IC5ib3ggLmNlbGw6bnRoLW9mLXR5cGUobiArIDcpIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGJsYWNrO1xufVxuLnN1ZG9rdSAuYm94IC5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2I0YjRiNDtcbn1cblxuLmNsaWNrZWQsIC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICM4ZWJiZmYgIWltcG9ydGFudDtcbn1cblxuLmhpZ2hsaWdodGVkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxNzksIDE3OSwgMTc5LCAwLjUyMSkgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vZ2xvYmFsc1wiO1xyXG5cclxuJGZvcmU6ICMwNkY7XHJcbiRjbGlja2VkOiAjOGViYmZmO1xyXG4kaGlnaDogcmdiYSgxNzksIDE3OSwgMTc5LCAwLjUyMSk7XHJcbiRiYWNrOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRoZWlnaHQ6IDMwMHB4O1xyXG5cclxuQG1peGluIG5vc2VsZWN0KCkge1xyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xyXG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cclxufVxyXG5cclxuXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgQGluY2x1ZGUgbm9zZWxlY3QoKTtcclxufVxyXG5cclxuLnBsYXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbiAgICAmIC5zaWRlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2Ni42NjY2cHg7XHJcblxyXG4gICAgICAgICYgLm51bWJlcnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJiAubnVtYmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDBweC8zKTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygzMDBweC85KTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDNuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICRmb3JlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMm4gKyA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCAkZm9yZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTEsIDIxMSwgMjExKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4uc3Vkb2t1IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlO1xyXG4gICAgd2lkdGg6ICRoZWlnaHQ7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmIC5ib3gge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUvMyk7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUvMyk7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGZvcmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRmb3JlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBcclxuICAgICAgICAmOm50aC1vZi10eXBlKDNuKSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpudGgtb2YtdHlwZShuICsgNykge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwIHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmIC5jZWxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUvMyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgzbikge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOm50aC1vZi10eXBlKG4gKyA3KSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE4MCwgMTgwLCAxODApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2xpY2tlZCwgLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICRjbGlja2VkIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhpZ2hsaWdodGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICRoaWdoIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/sudoku/sudoku.component.ts":
  /*!********************************************!*\
    !*** ./src/app/sudoku/sudoku.component.ts ***!
    \********************************************/

  /*! exports provided: SudokuComponent */

  /***/
  function srcAppSudokuSudokuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SudokuComponent", function () {
      return SudokuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SudokuComponent =
    /*#__PURE__*/
    function () {
      function SudokuComponent() {
        _classCallCheck(this, SudokuComponent);

        this.selectedNum = 0;
        this.sudoku = this.newBoard();
        this.formatBoard();
        this.numbers = this.createNumbers();
      } //* -------------------------------------------- CHECK BOARD


      _createClass(SudokuComponent, [{
        key: "formatBoard",
        value: function formatBoard() {
          var _this = this;

          var boxes = this.sudoku.boxes;
          var rows = this.sudoku.rows;
          var cols = this.sudoku.cols;
          var rand = this.getRandom(1, 9);

          var _loop = function _loop(x) {
            // let x represent the number of the boxes[x] in boxes or rows or cols
            // go through boxes
            // create a random number
            // if random number is in boxes, rows, or cols => boxes.add(0)
            // if not, add random number to box, row and col of cell
            boxes[x].forEach(function (cell) {
              rand = _this.getRandom(1, 9);

              for (var y = 0; y < 9; y++) {
                if (boxes[x][y].value == rand || rows[cell.row][y].value == rand || cols[cell.col][y].value == rand) {
                  cell.value = -1;
                  break;
                }
              } //console.log(cell.value)


              cell.value = cell.value == -1 ? 0 : rand;
            });
          };

          for (var x = 0; x < 9; x++) {
            _loop(x);
          }
        } //* -------------------------------------------- NEW BOARD

      }, {
        key: "newBoard",
        value: function newBoard() {
          var data = {
            boxes: [[], [], [], [], [], [], [], [], []],
            rows: [[], [], [], [], [], [], [], [], []],
            cols: [[], [], [], [], [], [], [], [], []]
          }; // initialize as 0

          var c = 1; // sudoku

          console.log("row, col");

          for (var b = 0; b < 9; b++) {
            // box id
            for (var myrow = 0; myrow < 3; myrow++) {
              // row id
              for (var mycol = 0; mycol < 3; mycol++) {
                // column id
                var cell = {
                  id: c,
                  box: b,
                  row: this.getCellRow(myrow, b),
                  col: this.getCellCol(mycol, b),
                  value: 0,
                  pencils: [],
                  highlighted: false,
                  clicked: false
                };
                if (c < 9) c++;else c = 0;
                data.boxes[cell.box].push(cell); // add cell to current box for display

                data.cols[cell.col].push(cell);
                data.rows[cell.row].push(cell);
              }
            }
          }

          return data;
        }
      }, {
        key: "getCellRow",
        value: function getCellRow(row, b) {
          return b < 3 ? row : b < 6 ? row + 3 : row + 6;
        }
      }, {
        key: "getCellCol",
        value: function getCellCol(col, b) {
          return b % 3 == 0 ? col : b % 3 == 1 ? col + 3 : col + 6;
        } //* ------------------------------------------- CREATE NUMBERS

      }, {
        key: "createNumbers",
        value: function createNumbers() {
          var numbers = [];

          for (var n = 0; n <= 9; n++) {
            var number = {
              id: n,
              value: n + "",
              selected: false
            };
            if (n == 0) number.value = "X";
            numbers.push(number);
          }

          numbers.push(numbers.shift());
          return numbers;
        } //* --------------------------------------------NUMBER CLICKED

      }, {
        key: "numberClicked",
        value: function numberClicked(myNum) {
          var _this2 = this;

          this.selectedNum = myNum.id < 10 ? myNum.id : 0; // ----------------------

          this.numbers.forEach(function (num) {
            if (num.id != myNum.id) num.selected = false;
          });
          myNum.selected = !myNum.selected;
          if (myNum.selected == false) this.selectedNum = 0;
          console.log(this.selectedNum); // ----------------------

          this.sudoku.boxes.forEach(function (box) {
            box.forEach(function (cell) {
              if (cell.value != _this2.selectedNum || _this2.selectedNum == 0) cell.highlighted = false;else {
                cell.highlighted = true;
              }
            });
          });
        } //* ------------------------------------------ CELL CLICKED

      }, {
        key: "cellClicked",
        value: function cellClicked(myCell) {
          var _this3 = this;

          this.sudoku.boxes.forEach(function (box) {
            box.forEach(function (cell) {
              cell.clicked = false;
              cell.highlighted = false;
            });
          });
          myCell.clicked = !myCell.clicked; // ----------------------

          if (this.numbers.find(function (num) {
            return num.selected == true;
          })) {
            myCell.value = this.selectedNum;
          } else {
            this.selectedNum = myCell.value;
          } // ----------------------


          this.sudoku.boxes.forEach(function (box) {
            box.forEach(function (cell) {
              if (_this3.selectedNum != 0 && cell.value == _this3.selectedNum && !cell.clicked) cell.highlighted = true;
              if (cell.value == myCell.value) cell.highlighted == true;
            });
          });
        } //* ------------------------------------------------------- GET RANDOM NUM

      }, {
        key: "getRandom",
        value: function getRandom(min, max) {
          return Math.floor(Math.random() * max) + min;
        }
      }]);

      return SudokuComponent;
    }();

    SudokuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sudoku',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sudoku.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sudoku/sudoku.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sudoku.component.scss */
      "./src/app/sudoku/sudoku.component.scss")).default]
    })], SudokuComponent);
    /***/
  },

  /***/
  "./src/app/work/work.component.scss":
  /*!******************************************!*\
    !*** ./src/app/work/work.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppWorkWorkComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700&display=swap\");\n/* Main Primary color */\n/* Main Secondary color (1) */\n/* Main Secondary color (2) */\n@-webkit-keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.project__title {\n  font-size: 2em;\n  padding: 20px 200px;\n  color: #0077ff;\n  background-color: rgba(0, 24, 88, 0.699);\n}\n@media screen and (max-width:1250px) {\n  .project__title {\n    padding-left: 0;\n    text-align: center;\n    width: auto;\n    padding: 20px;\n  }\n}\n.project__content {\n  display: -webkit-box;\n  display: flex;\n  height: 600px;\n  width: 100%;\n  background-color: rgba(0, 50, 187, 0.548);\n  padding-right: 50px;\n}\n@media screen and (max-width:1250px) {\n  .project__content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n.project__content .info {\n  width: 50%;\n  padding: 5%;\n}\n@media screen and (max-width:1250px) {\n  .project__content .info {\n    width: auto;\n  }\n}\n.project__button {\n  display: block;\n  padding: 10px 15px;\n  margin: 20px 25%;\n  text-align: center;\n  background-color: none;\n  border: 1px solid #007FFF;\n  color: white;\n  border-radius: 4px;\n  text-decoration: none;\n  font-size: 1.5em;\n  -webkit-transition: background 0.5s;\n  transition: background 0.5s;\n}\n.project__button:hover {\n  background-color: #007FFF;\n  -webkit-transition: background 0.5s;\n  transition: background 0.5s;\n}\n.images {\n  width: 50%;\n  cursor: pointer;\n}\n.images .first_image {\n  position: absolute;\n  z-index: 2;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top left;\n     object-position: top left;\n  width: 500px;\n  height: 500px;\n  -webkit-transition: height 0.2s;\n  transition: height 0.2s;\n}\n@media screen and (max-width:870px) {\n  .images .first_image {\n    width: 300px;\n    height: 300px;\n    padding: 50px;\n  }\n}\n.images .first_image:hover {\n  height: 0;\n  padding-bottom: 500px;\n  -webkit-transition: height 1s;\n  transition: height 1s;\n}\n.images .second_image {\n  position: relative;\n  z-index: 1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: left;\n     object-position: left;\n  width: 500px;\n  height: 500px;\n}\n@media screen and (max-width:870px) {\n  .images .second_image {\n    width: 300px;\n    height: 300px;\n    padding: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9EOlxcX2JhY2t1cFxcX25zY2Nwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXF9nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd29yay9EOlxcX2JhY2t1cFxcX25zY2Nwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFwcFxcd29ya1xcd29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBMEJRLHFGQUFBO0FBQ0EsZ0ZBQUE7QUFyQmMsdUJBQUE7QUFNQSw2QkFBQTtBQU1BLDZCQUFBO0FBMEJ0QjtFQUNJO0lBQ0ksMkJBQUE7RUN0Q047RUR3Q0U7SUFDSSw2QkFBQTtFQ3RDTjtFRHdDRTtJQUNJLDJCQUFBO0VDdENOO0FBQ0Y7QUQ2QkE7RUFDSTtJQUNJLDJCQUFBO0VDdENOO0VEd0NFO0lBQ0ksNkJBQUE7RUN0Q047RUR3Q0U7SUFDSSwyQkFBQTtFQ3RDTjtBQUNGO0FDWkk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QURjUjtBQ1pRO0VBTko7SUFPUSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtFRGVWO0FBQ0Y7QUNaSTtFRmFBLG9CQUFBO0VBSUEsYUFBQTtFRWZJLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtBRGtCUjtBQ2hCUTtFQVBKO0lBUVEsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VEbUJWO0FBQ0Y7QUNqQlE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBRG1CWjtBQ2pCWTtFQUpKO0lBS1EsV0FBQTtFRG9CZDtBQUNGO0FDaEJJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRGtCUjtBQ2hCUTtFQUNJLHlCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRGtCWjtBQ2JBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QURnQko7QUNkSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSw0QkFBQTtLQUFBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUFBLHVCQUFBO0FEZ0JSO0FDZFE7RUFUSjtJQVVRLFlBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtFRGlCVjtBQUNGO0FDZlE7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0FEaUJaO0FDYkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEZVI7QUNiUTtFQVJKO0lBU1EsWUFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0VEZ0JWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGhvbmU6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOjg3MHB4KVwiO1xyXG4kdGFibGV0OiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjUwcHgpXCI7XHJcblxyXG4vLyBAbWVkaWEgI3skcGhvbmV9IHt9XHJcbi8vIEBtZWRpYSAjeyR0YWJsZXR9IHt9XHJcblxyXG4kcHJpbWFyeTEgIDogIzAwOURGMjtcdC8qIE1haW4gUHJpbWFyeSBjb2xvciAqL1xyXG4kcHJpbWFyeTIgIDogIzJFQjRGQztcclxuJHByaW1hcnkzICA6ICMwQUE5RkY7XHJcbiRwcmltYXJ5NCAgOiAjMDA2RUE5O1xyXG4kcHJpbWFyeTUgIDogIzAwNTU4MztcclxuXHJcbiRzZWNvbmRhcnkxOiAjMDAxN0Y0O1x0LyogTWFpbiBTZWNvbmRhcnkgY29sb3IgKDEpICovXHJcbiRzZWNvbmRhcnkyOiAjNDA1MkZDO1xyXG4kc2Vjb25kYXJ5MzogIzE5MkZGRjtcclxuJHNlY29uZGFyeTQ6ICMwMDExQjY7XHJcbiRzZWNvbmRhcnk1OiAjMDEwRThGO1xyXG5cclxuJGhpZ2hsaWdodDE6ICMwMEY1NzE7XHQvKiBNYWluIFNlY29uZGFyeSBjb2xvciAoMikgKi9cclxuJGhpZ2hsaWdodDI6ICMyM0ZDODg7XHJcbiRoaWdobGlnaHQzOiAjMDBGRjc2O1xyXG4kaGlnaGxpZ2h0NDogIzAwQkE1NztcclxuJGhpZ2hsaWdodDU6ICMwMDkyNDQ7XHJcblxyXG4kZ3JleWVkLWNvbG9yOiAjQzBDMEMwO1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AbWl4aW4gZGlzcGxheS1mbGV4KCkge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuQG1peGluIGZsZXgoJGFyZ3MpIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6ICRhcmdzO1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkYXJncztcclxuICAgIC1tcy1mbGV4OiAkYXJncztcclxuICAgIGZsZXg6ICRhcmdzOyBcclxufVxyXG5cclxuQGtleWZyYW1lcyBncmFkaWVudEJHIHtcclxuICAgIDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gICAgfVxyXG59IiwiLyogTWFpbiBQcmltYXJ5IGNvbG9yICovXG4vKiBNYWluIFNlY29uZGFyeSBjb2xvciAoMSkgKi9cbi8qIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgyKSAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBrZXlmcmFtZXMgZ3JhZGllbnRCRyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbn1cbi5wcm9qZWN0X190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBwYWRkaW5nOiAyMHB4IDIwMHB4O1xuICBjb2xvcjogIzAwNzdmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNCwgODgsIDAuNjk5KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI1MHB4KSB7XG4gIC5wcm9qZWN0X190aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4ucHJvamVjdF9fY29udGVudCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNTAsIDE4NywgMC41NDgpO1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjUwcHgpIHtcbiAgLnByb2plY3RfX2NvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5wcm9qZWN0X19jb250ZW50IC5pbmZvIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogNSU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyNTBweCkge1xuICAucHJvamVjdF9fY29udGVudCAuaW5mbyB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5wcm9qZWN0X19idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBtYXJnaW46IDIwcHggMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdGRkY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbn1cbi5wcm9qZWN0X19idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3RkZGO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG59XG5cbi5pbWFnZXMge1xuICB3aWR0aDogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1hZ2VzIC5maXJzdF9pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogdG9wIGxlZnQ7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnM7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg3MHB4KSB7XG4gIC5pbWFnZXMgLmZpcnN0X2ltYWdlIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICB9XG59XG4uaW1hZ2VzIC5maXJzdF9pbWFnZTpob3ZlciB7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDUwMHB4O1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMXM7XG59XG4uaW1hZ2VzIC5zZWNvbmRfaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGxlZnQ7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODcwcHgpIHtcbiAgLmltYWdlcyAuc2Vjb25kX2ltYWdlIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL2dsb2JhbHNcIjtcclxuXHJcbi5wcm9qZWN0IHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMTE5LCAyNTUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjQsIDg4LCAwLjY5OSk7XHJcblxyXG4gICAgICAgIEBtZWRpYSAjeyR0YWJsZXR9IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXgoKTtcclxuICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNTAsIDE4NywgMC41NDgpO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSAjeyR0YWJsZXR9IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgLmluZm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSAjeyR0YWJsZXR9IHsgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBtYXJnaW46IDIwcHggMjUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdGRkY7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XHJcbiAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0ZGRjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmltYWdlcyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIC5maXJzdF9pbWFnZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiB0b3AgbGVmdDtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycztcclxuXHJcbiAgICAgICAgQG1lZGlhICN7JHBob25lfSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MDBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2Vjb25kX2ltYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSAjeyRwaG9uZX0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG4vLyAuaGVhZGVyIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4vLyAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxuLy8gICAgIEBtZWRpYSAjeyR0YWJsZXR9IHtcclxuLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICYtLTIge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbi8vICAgICAgICAgcGFkZGluZzogMjBweCAyMDBweDtcclxuLy8gICAgICAgICBjb2xvcjogcmdiKDAsIDExOSwgMjU1KTtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI0LCA4OCwgMC42OTkpO1xyXG5cclxuLy8gICAgICAgICBAbWVkaWEgI3skdGFibGV0fSB7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi0tMyB7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcclxuLy8gICAgICAgICBjb2xvcjogcmdiKDE5NCwgMjIyLCAyNTUpO1xyXG5cclxuLy8gICAgICAgICBAbWVkaWEgI3skdGFibGV0fSB7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/work/work.component.ts":
  /*!****************************************!*\
    !*** ./src/app/work/work.component.ts ***!
    \****************************************/

  /*! exports provided: WorkComponent */

  /***/
  function srcAppWorkWorkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkComponent", function () {
      return WorkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WorkComponent = function WorkComponent() {
      _classCallCheck(this, WorkComponent);

      this.projects = [{
        title: "Angular 7 Sudoku Game",
        info: "This is my sudoku game I created over the summer, originally I created it in jQuery - but due to the size of the project, I moved to angular",
        src1: "sudoku.png",
        src2: "sudoku2.png",
        link: "../sudoku"
      }, {
        title: "jQuery Rock Paper Scissors",
        info: "This was a side project that I made for myself during my first year work experience. I was required to learn jQuery in order to create a web app for a client. I decided to learn the language by creating fun little web app games. This was really simple to create, the challenge was getting the result of both hands thrown and designing a clean UI for the simple app. I’m happy with the result of it, although it’s small, it helped me learn jQuery significantly.",
        src1: "jqueryRPSLS.png",
        src2: "jqueryRPSLS2.png",
        link: "https://jsfiddle.net/samcantcode/odr34u2e/"
      }, {
        title: "jQuery Tic Tac Toe",
        info: "I created this small app during work experience as well. This was also used to help me learn jQuery in the span of about a week, I could work on it while waiting for the client to reply. The challenge for this app was the UI design and getting the app to check if a user has won. I was glad I was able to complete it, satisfied with the result, although I believe I’ve become a much better coder since then.",
        src1: "tictactoe1.png",
        src2: "tictactoe2.png",
        link: "https://jsfiddle.net/samcantcode/bdpzjy0k/"
      }, {
        title: "Business Card",
        info: "This is a design for a future business card that I want to use to relay my contact information to potential employers. I wanted a design that sticks out, looks professional and I would be proud of.  It’s still in the process of finding the right materials to print on and some color changes to make it CMYK compatible.  I’m not done with the design yet, as there are always small details that I feel need changing, I’m always open to advice.",
        src1: "BusinessCard1.png",
        src2: "BusinessCard2.png",
        link: "../assets/images/businesscardFull.png"
      }];
    };

    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work.component.scss */
      "./src/app/work/work.component.scss")).default]
    })], WorkComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\_backup\_nsccportfolio\portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map