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

module.exports = xmldefuse;
