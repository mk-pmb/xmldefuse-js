/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var xmldefuse = require("xmldefuse"),
  raw = "X &amp& <lt< >gt> 'apos' \"quot\" Y",
  eq = require("assert").strictEqual;

eq(xmldefuse(raw),
  "X &amp;amp&amp; &lt;lt&lt; &gt;gt&gt; &#39;apos&#39; &quot;quot&quot; Y");

eq(xmldefuse.apos(raw),
  "X &amp;amp&amp; &lt;lt&lt; &gt;gt&gt; &apos;apos&apos; &quot;quot&quot; Y");
