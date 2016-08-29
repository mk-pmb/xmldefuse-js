/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var ent = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
  rgx: /[&<>"']/g
};

function core(apos, text) {
  ent["'"] = apos;
  return String(text).replace(ent.rgx, function (e) { return ent[e]; });
}

function xmldefuse(text) { return core('&#39;', text); }
xmldefuse.apos = function (text) { return core('&apos;', text); };

(function () {
  var CDStart = '<![CDATA[', CDEnd = ']]>', splitContentTriad = /(\]{2})(>)/g,
    restart = '$1' + CDEnd + CDStart + '$2';
  xmldefuse.cdata = function (text) {
    return CDStart + String(text).replace(splitContentTriad, restart) + CDEnd;
  };
}());

module.exports = xmldefuse;
