/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var xmldefuse = require("xmldefuse"),
  rawXY = "X &amp& <lt< >gt> 'apos' \"quot\" Y",
  rawCD = "Have <![CDATA[ marks ]]> in ]]> text",
  eq = require("assert").strictEqual;

eq(xmldefuse(rawXY),
  "X &amp;amp&amp; &lt;lt&lt; &gt;gt&gt; &#39;apos&#39; &quot;quot&quot; Y");

eq(xmldefuse.apos(rawXY),
  "X &amp;amp&amp; &lt;lt&lt; &gt;gt&gt; &apos;apos&apos; &quot;quot&quot; Y");

eq(xmldefuse.cdata(rawXY),
  "<![CDATA[X &amp& <lt< >gt> 'apos' \"quot\" Y]]>");

eq(xmldefuse.cdata(rawCD),
  "<![CDATA[Have <![CDATA[ marks ]]]]><![CDATA[> in ]]]]><![CDATA[> text]]>");
