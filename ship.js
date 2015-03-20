!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):"object"==typeof exports?exports["Hull comments count"]=t():e["Hull comments count"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
function(e,t,n){"use strict";var o=function(e){return e&&e.__esModule?e["default"]:e},r=o(n(/*! ./bootstrap */1));Hull.onEmbed(document,r)},/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
function(e){"use strict";function t(e,t){var n=Hull.entity.encode(Hull.findUrl());Hull.api(n,function(n){var o,r=n.stats.comments||0;o=r>1?"more_comment":1===r?"one_comment":"zero_comment";var c=t.ship.translations.en[o].replace("{count}",r);e.innerHTML=c})}e.exports=t}])});