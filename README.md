
xmldefuse
=========
Encode the [predefined XML entities][xml-predent] (amp, lt, gt, apos, quot).
Opt-out [CharRef][xml-charref] 39 for HTML.

Usage
-----
From [test.js](test.js):

```javascript
var xmldefuse = require("xmldefuse"),
  raw = "X &amp& <lt< >gt> 'apos' \"quot\" Y",
  eq = require("assert").strictEqual;

eq(xmldefuse(raw),
  "X &amp;amp&amp; &lt;lt&lt; &gt;gt&gt; &#39;apos&#39; &quot;quot&quot; Y");

eq(xmldefuse.apos(raw),
  "X &amp;amp&amp; &lt;lt&lt; &gt;gt&gt; &apos;apos&apos; &quot;quot&quot; Y");
```

CLI mode:
```bash
$ grep -oPe 'X.+Y' -m 1 test.js | xmldefuse
X &amp;amp&amp; &lt;lt&lt; &gt;gt&gt; &#39;apos&#39; \&quot;quot\&quot; Y

$ grep -oPe 'X.+Y' -m 1 test.js | xmldefuse.apos
X &amp;amp&amp; &lt;lt&lt; &gt;gt&gt; &apos;apos&apos; \&quot;quot\&quot; Y
```


Why is apos opt-in?
-------------------
The default is HTML compatibility mode because it will help visitors of
beginner webmasters who just plug the module in their HTML generator without
reading this and ignore that XML's "apos" entity is not included in the
list of [valid HTML 4 entities][html-ents].


Related
-------
  * [xmlunidefuse](https://www.npmjs.com/package/xmlunidefuse):
    Convert some additional, easily overlooked Unicode characters to CharRefs.
  * [xmldecode](https://www.npmjs.com/package/xmldecode):
    Decode the predefined XML entities and CharRefs.


  [html-ents]: https://www.w3.org/TR/html4/sgml/entities.html
  [xml-charref]: https://www.w3.org/TR/REC-xml/#NT-CharRef
  [xml-predent]: https://www.w3.org/TR/REC-xml/#sec-predefined-ent


License
-------
ISC
