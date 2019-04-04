webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-styled-flexboxgrid */ "./node_modules/react-styled-flexboxgrid/dist/styled-flexboxgrid.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/home/francis/projects/movie-app/pages/index.js";


function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin: 1em 0;\n  max-width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 290px;\n  min-height: 0;\n  background: #fff;\n  padding: 0;\n  border: none;\n  border-radius: .28571429rem;\n  -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n  -webkit-transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;\n  transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;\n  transition: box-shadow .1s ease,transform .1s ease;\n  transition: box-shadow .1s ease,transform .1s ease,-webkit-box-shadow .1s ease,-webkit-transform .1s ease;\n  z-index: '';\n\n  .image {\n    position: relative;\n    display: block;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding: 0;\n    background: rgba(0,0,0,.05);\n\n    img {\n      display: block;\n      width: 100%;\n      height: auto;\n      border-radius: inherit;\n    }\n  }\n\n  .content {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    border: none;\n    background: 0 0;\n    margin: 0;\n    padding: 1em 1em;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    font-size: 1em;\n    border-radius: 0;\n\n    .header {\n      font-weight: 700;\n      font-size: 1.28571429em;\n      margin-top: -.21425em;\n      line-height: 1.28571429em;\n    }\n  }\n\n  &:first-child {\n    border-radius: .28571429rem .28571429rem 0 0!important;\n    border-top: none!important;\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  float: right;\n  margin-right: 0;\n  margin-bottom: 1em;\n  margin-left: 1em;\n  width: 315px;\n  height: auto;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  position: relative;\n  p {\n    font-size: 20px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  position: relative;\n  font-weight: 400;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  color: rgba(0,0,0,.87);\n  font-size: 1.1em;\n  width: 100%;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin: 0;\n  max-width: 100%;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  outline: 0;\n  -webkit-tap-highlight-color: rgba(255,255,255,0);\n  text-align: left;\n  line-height: 1.21428571em;\n  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;\n  padding: .67857143em 1em;\n  background: #fff;\n  border: 1px solid rgba(34,36,38,.15);\n  color: rgba(0,0,0,.87);\n  border-radius: .28571429rem;\n  -webkit-transition: border-color .1s ease,-webkit-box-shadow .1s ease;\n  transition: border-color .1s ease,-webkit-box-shadow .1s ease;\n  transition: box-shadow .1s ease,border-color .1s ease;\n  transition: box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  font-size: 100%;\n\n  &:focus {\n    border-color: #85b7d9;\n    background: #fff;\n    color: rgba(0,0,0,.8);\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin-bottom: 0.75em;\n  margin-right: 0.25em;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  outline: 0;\n  border: none;\n  vertical-align: baseline;\n  padding: .78571429em 1.5em .78571429em;\n  line-height: 1em;\n  font-style: normal;\n  text-align: center;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  box-shadow: 0 0 0 2px #0074eb inset!important;\n  color: #fff !important;\n  background: #0074eb !important;\n  font-weight: bold;\n  border-radius: 5px;\n  width: 100%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin-bottom: 0.75em;\n  margin-right: 0.25em;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  outline: 0;\n  border: none;\n  vertical-align: baseline;\n  padding: .78571429em 1.5em .78571429em;\n  line-height: 1em;\n  font-style: normal;\n  text-align: center;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  box-shadow: 0 0 0 2px #0074eb inset!important;\n  color: #fff !important;\n  background: #0074eb !important;\n  font-weight: bold;\n  border-radius: 5px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin: 1rem 0;\n  line-height: 1;\n  height: 0;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  color: rgba(0,0,0,.85);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  font-size: 1rem;\n  border-top: 2px solid #cde1fa;\n  border-bottom: 2px solid rgba(255,255,255,.1);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 100%;\n  margin-bottom: 0.75em;\n  margin-right: 0.25em;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  outline: 0;\n  border: none;\n  vertical-align: baseline;\n  padding: .78571429em 1.5em .78571429em;\n  line-height: 1em;\n  font-style: normal;\n  text-align: center;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  box-shadow: 0 0 0 2px #0074eb inset!important;\n  color: #0074eb!important;\n  background: transparent none!important;\n  font-weight: bold;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin: 0em;\n  font-size: 1.7rem;\n  font-weight: 700;\n  letter-spacing: 2px;\n}"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  padding-top: 21px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 90px;\n  height: auto;\n  font-size: 1rem;\n  border-radius: 500rem;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 25px;\n  margin-bottom: 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  body {\n    background-color: #f4f9ff;\n    font-family: 'Open Sans', sans-serif;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject());
var CircularImage = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject2());
var TitleCol = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Col"])(_templateObject3());
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span(_templateObject4());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject5());
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject6());
var BackButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject7());
var BlueButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject8());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input(_templateObject9());
var BigInput = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject10());
var Section = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject11());
var Image = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject12());
var Card = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject13());

var Index = function Index() {
  var _React$createElement;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans",
    rel: "stylesheet",
    type: "text/css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleCol, {
    xs: 12,
    sm: 6,
    md: 10,
    lg: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CircularImage, {
    src: "https://semantic-ui.com/images/wireframe/square-image.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, "Alita: Battle Angel")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 12,
    sm: 6,
    md: 2,
    lg: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, "Play Video"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "Watch Later"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "Share"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "Back")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Col"], (_React$createElement = {
    xs: 12,
    sm: 6,
    lg: 6
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "lg", 4), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 274
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BigInput, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Input, {
    type: "text",
    placeholder: "Search for a movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "Sypnosis"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Image, {
    class: "ui small left floated image",
    src: "https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, "Alita: Battle Angel is a 2019 American cyberpunk action film based on the 1990s Japanese manga series Gunnm (known as Battle Angel Alita in the English translation) by Yukito Kishiro. Directed by Robert Rodriguez, the film is written by James Cameron and Laeta Kalogridis and Rosa Salazar stars as the titular heroine Alita, an amnesiac cyborg girl who sets out to learn about her destiny after she awakens in a new body with no past memory of who she is. Christoph Waltz, Jennifer Connelly, Mahershala Ali, Ed Skrein, Jackie Earle Haley and Keean Johnson also star in supporting roles."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "Originally announced in 2003, production on the release of the film was repeatedly delayed due to Cameron's work on Avatar and its sequels. After years of the film languishing in development hell, Rodriguez was announced as the film's director in April 2016, with Salazar being cast the following month. Principal photography began in Austin, Texas, in October 2016, lasting through February 2017.")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, "Related videos"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://semantic-ui.com/images/avatar2/large/kristy.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "Pulp Fictions")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "extra content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BlueButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "Watch")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://semantic-ui.com/images/avatar2/large/kristy.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, "The Wizard of Oz")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "extra content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BlueButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, "Watch")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://semantic-ui.com/images/avatar2/large/kristy.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, "Star Wars: The Last Jedi")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "extra content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BlueButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, "Watch")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://semantic-ui.com/images/avatar2/large/kristy.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "Harry Potter and the Philisopher's Stone")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "extra content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BlueButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, "Watch")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://semantic-ui.com/images/avatar2/large/kristy.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, "Jurassic Park")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "extra content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BlueButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, "Watch")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c21a59aa62a278fd2be9.hot-update.js.map