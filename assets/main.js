(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

  // TODO: Make this work!

  function validateQty(qty) {
    if (parseFloat(qty) === parseInt(qty) && !isNaN(qty)) {
      // We have a valid number!
    } else {
      // Not a number. Default to 1.
      var _qty = 1;
    }
    return qty;
  }

  $('.js-qty_adjust').click(function (event) {
    event.preventDefault();
    var $el = $(this);
    var $qtySelector = $el.siblings('.js-qty');
    var qty = parseInt($qtySelector.val().replace(/\D/g, ''));
    qty = validateQty(qty);
    if ($el.hasClass('js-qty_adjust--increase')) {
      qty += 1;
    } else {
      qty -= 1;
      if (qty <= 1) {
        qty = 1;
      }
    }
    $qtySelector.val(qty);
  });
});

},{}]},{},[1]);
