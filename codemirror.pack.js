!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.CodeMirror=t()}(this,function(){"use strict";var e=navigator.userAgent,t=navigator.platform,g=/gecko\/\d/i.test(e),r=/MSIE \d/.test(e),n=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),i=/Edge\/(\d+)/.exec(e),x=r||n||i,C=x&&(r?document.documentMode||6:+(i||n)[1]),b=!i&&/WebKit\//.test(e),o=b&&/Qt\/\d+\.\d+/.test(e),l=!i&&/Chrome\//.test(e),v=/Opera\//.test(e),a=/Apple Computer/.test(navigator.vendor),s=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),u=/PhantomJS/.test(e),c=!i&&/AppleWebKit/.test(e)&&/Mobile\/\w+/.test(e),h=/Android/.test(e),f=c||h||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),w=c||/Mac/.test(t),d=/\bCrOS\b/.test(e),p=/win/i.test(t),m=v&&e.match(/Version\/(\d*\.\d*)/);m&&(m=Number(m[1])),m&&15<=m&&(b=!(v=!1));var y=w&&(o||v&&(null==m||m<12.11)),S=g||x&&9<=C;function L(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var k,T=function(e,t){var r=e.className,n=L(t).exec(r);if(n){var i=r.slice(n.index+n[0].length);e.className=r.slice(0,n.index)+(i?n[1]+i:"")}};function M(e){for(var t=e.childNodes.length;0<t;--t)e.removeChild(e.firstChild);return e}function N(e,t){return M(e).appendChild(t)}function A(e,t,r,n){var i=document.createElement(e);if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t));else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o]);return i}function O(e,t,r,n){var i=A(e,t,r,n);return i.setAttribute("role","presentation"),i}function D(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t);do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}function W(){var t;try{t=document.activeElement}catch(e){t=document.body||null}for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}function H(e,t){var r=e.className;L(t).test(r)||(e.className+=(r?" ":"")+t)}function F(e,t){for(var r=e.split(" "),n=0;n<r.length;n++)r[n]&&!L(r[n]).test(t)&&(t+=" "+r[n]);return t}k=document.createRange?function(e,t,r,n){var i=document.createRange();return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange();try{n.moveToElementText(e.parentNode)}catch(e){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n};var P=function(e){e.select()};function E(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t)}}function I(e,t,r){for(var n in t||(t={}),e)!e.hasOwnProperty(n)||!1===r&&t.hasOwnProperty(n)||(t[n]=e[n]);return t}function z(e,t,r,n,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length);for(var o=n||0,l=i||0;;){var s=e.indexOf("\t",o);if(s<0||t<=s)return l+(t-o);l+=s-o,l+=r-l%r,o=s+1}}c?P=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:x&&(P=function(e){try{e.select()}catch(e){}});var R=function(){this.id=null};function B(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r;return-1}R.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)};var G=30,U={toString:function(){return"CodeMirror.Pass"}},V={scroll:!1},K={origin:"*mouse"},j={origin:"+move"};function X(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n);-1==o&&(o=e.length);var l=o-n;if(o==e.length||t<=i+l)return n+Math.min(l,t-i);if(i+=o-n,n=o+1,t<=(i+=r-i%r))return n}}var Y=[""];function _(e){for(;Y.length<=e;)Y.push($(Y)+" ");return Y[e]}function $(e){return e[e.length-1]}function q(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n);return r}function Z(){}function Q(e,t){var r;return r=Object.create?Object.create(e):(Z.prototype=e,new Z),t&&I(t,r),r}var J=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function ee(e){return/\w/.test(e)||""<e&&(e.toUpperCase()!=e.toLowerCase()||J.test(e))}function te(e,t){return t?!!(-1<t.source.indexOf("\\w")&&ee(e))||t.test(e):ee(e)}function re(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1;return!0}var ne=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function ie(e){return 768<=e.charCodeAt(0)&&ne.test(e)}function oe(e,t,r){for(;(r<0?0<t:t<e.length)&&ie(e.charAt(t));)t+=r;return t}function le(e,t,r){for(var n=r<t?-1:1;;){if(t==r)return t;var i=(t+r)/2,o=n<0?Math.ceil(i):Math.floor(i);if(o==t)return e(o)?t:r;e(o)?r=o:t=o+n}}var se=null;function ae(e,t,r){var n;se=null;for(var i=0;i<e.length;++i){var o=e[i];if(o.from<t&&o.to>t)return i;o.to==t&&(o.from!=o.to&&"before"==r?n=i:se=i),o.from==t&&(o.from!=o.to&&"before"!=r?n=i:se=i)}return null!=n?n:se}var ue=function(){var I="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",z="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";var R=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,B=/[stwN]/,G=/[LRr]/,U=/[Lb1n]/,V=/[1n]/;function K(e,t,r){this.level=e,this.from=t,this.to=r}return function(e,t){var r="ltr"==t?"L":"R";if(0==e.length||"ltr"==t&&!R.test(e))return!1;for(var n,i=e.length,o=[],l=0;l<i;++l)o.push((n=e.charCodeAt(l))<=247?I.charAt(n):1424<=n&&n<=1524?"R":1536<=n&&n<=1785?z.charAt(n-1536):1774<=n&&n<=2220?"r":8192<=n&&n<=8203?"w":8204==n?"b":"L");for(var s=0,a=r;s<i;++s){var u=o[s];"m"==u?o[s]=a:a=u}for(var c=0,h=r;c<i;++c){var f=o[c];"1"==f&&"r"==h?o[c]="n":G.test(f)&&"r"==(h=f)&&(o[c]="R")}for(var d=1,p=o[0];d<i-1;++d){var g=o[d];"+"==g&&"1"==p&&"1"==o[d+1]?o[d]="1":","!=g||p!=o[d+1]||"1"!=p&&"n"!=p||(o[d]=p),p=g}for(var v=0;v<i;++v){var m=o[v];if(","==m)o[v]="N";else if("%"==m){var y=void 0;for(y=v+1;y<i&&"%"==o[y];++y);for(var b=v&&"!"==o[v-1]||y<i&&"1"==o[y]?"1":"N",w=v;w<y;++w)o[w]=b;v=y-1}}for(var x=0,C=r;x<i;++x){var S=o[x];"L"==C&&"1"==S?o[x]="L":G.test(S)&&(C=S)}for(var L=0;L<i;++L)if(B.test(o[L])){var k=void 0;for(k=L+1;k<i&&B.test(o[k]);++k);for(var T="L"==(L?o[L-1]:r),M=T==("L"==(k<i?o[k]:r))?T?"L":"R":r,N=L;N<k;++N)o[N]=M;L=k-1}for(var O,A=[],D=0;D<i;)if(U.test(o[D])){var W=D;for(++D;D<i&&U.test(o[D]);++D);A.push(new K(0,W,D))}else{var H=D,F=A.length;for(++D;D<i&&"L"!=o[D];++D);for(var P=H;P<D;)if(V.test(o[P])){H<P&&A.splice(F,0,new K(1,H,P));var E=P;for(++P;P<D&&V.test(o[P]);++P);A.splice(F,0,new K(2,E,P)),H=P}else++P;H<D&&A.splice(F,0,new K(1,H,D))}return"ltr"==t&&(1==A[0].level&&(O=e.match(/^\s+/))&&(A[0].from=O[0].length,A.unshift(new K(0,0,O[0].length))),1==$(A).level&&(O=e.match(/\s+$/))&&($(A).to-=O[0].length,A.push(new K(0,i-O[0].length,i)))),"rtl"==t?A.reverse():A}}();function ce(e,t){var r=e.order;return null==r&&(r=e.order=ue(e.text,t)),r}var he=[],fe=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1);else if(e.attachEvent)e.attachEvent("on"+t,r);else{var n=e._handlers||(e._handlers={});n[t]=(n[t]||he).concat(r)}};function de(e,t){return e._handlers&&e._handlers[t]||he}function pe(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1);else if(e.detachEvent)e.detachEvent("on"+t,r);else{var n=e._handlers,i=n&&n[t];if(i){var o=B(i,r);-1<o&&(n[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function ge(e,t){var r=de(e,t);if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)}function ve(e,t,r){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),ge(e,r||t.type,e,t),Ce(t)||t.codemirrorIgnore}function me(e){var t=e._handlers&&e._handlers.cursorActivity;if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==B(r,t[n])&&r.push(t[n])}function ye(e,t){return 0<de(e,t).length}function be(e){e.prototype.on=function(e,t){fe(this,e,t)},e.prototype.off=function(e,t){pe(this,e,t)}}function we(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function xe(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function Ce(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function Se(e){we(e),xe(e)}function Le(e){return e.target||e.srcElement}function ke(e){var t=e.which;return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),w&&e.ctrlKey&&1==t&&(t=3),t}var Te,Me,Ne=function(){if(x&&C<9)return!1;var e=A("div");return"draggable"in e||"dragDrop"in e}();function Oe(e){if(null==Te){var t=A("span","​");N(e,A("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Te=t.offsetWidth<=1&&2<t.offsetHeight&&!(x&&C<8))}var r=Te?A("span","​"):A("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return r.setAttribute("cm-text",""),r}function Ae(e){if(null!=Me)return Me;var t=N(e,document.createTextNode("AخA")),r=k(t,0,1).getBoundingClientRect(),n=k(t,1,2).getBoundingClientRect();return M(e),!(!r||r.left==r.right)&&(Me=n.right-r.right<3)}var De,We=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t);-1==i&&(i=e.length);var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),l=o.indexOf("\r");-1!=l?(r.push(o.slice(0,l)),t+=l+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},He=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t;try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},Fe="oncopy"in(De=A("div"))||(De.setAttribute("oncopy","return;"),"function"==typeof De.oncopy),Pe=null;var Ee={},Ie={};function ze(e){if("string"==typeof e&&Ie.hasOwnProperty(e))e=Ie[e];else if(e&&"string"==typeof e.name&&Ie.hasOwnProperty(e.name)){var t=Ie[e.name];"string"==typeof t&&(t={name:t}),(e=Q(t,e)).name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return ze("application/xml");if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return ze("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function Re(e,t){t=ze(t);var r=Ee[t.name];if(!r)return Re(e,"text/plain");var n=r(e,t);if(Be.hasOwnProperty(t.name)){var i=Be[t.name];for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o])}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var l in t.modeProps)n[l]=t.modeProps[l];return n}var Be={};function Ge(e,t){I(t,Be.hasOwnProperty(e)?Be[e]:Be[e]={})}function Ue(e,t){if(!0===t)return t;if(e.copyState)return e.copyState(t);var r={};for(var n in t){var i=t[n];i instanceof Array&&(i=i.concat([])),r[n]=i}return r}function Ve(e,t){for(var r;e.innerMode&&(r=e.innerMode(t))&&r.mode!=e;)t=r.state,e=r.mode;return r||{mode:e,state:t}}function Ke(e,t,r){return!e.startState||e.startState(t,r)}var je=function(e,t,r){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=r};function Xe(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.");for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize();if(t<o){r=i;break}t-=o}return r.lines[t]}function Ye(e,r,n){var i=[],o=r.line;return e.iter(r.line,n.line+1,function(e){var t=e.text;o==n.line&&(t=t.slice(0,n.ch)),o==r.line&&(t=t.slice(r.ch)),i.push(t),++o}),i}function _e(e,t,r){var n=[];return e.iter(t,r,function(e){n.push(e.text)}),n}function $e(e,t){var r=t-e.height;if(r)for(var n=e;n;n=n.parent)n.height+=r}function qe(e){if(null==e.parent)return null;for(var t=e.parent,r=B(t.lines,e),n=t.parent;n;n=(t=n).parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize();return r+t.first}function Ze(e,t){var r=e.first;e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height;if(t<o){e=i;continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines);for(var l=0;l<e.lines.length;++l){var s=e.lines[l].height;if(t<s)break;t-=s}return r+l}function Qe(e,t){return t>=e.first&&t<e.first+e.size}function Je(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function et(e,t,r){if(void 0===r&&(r=null),!(this instanceof et))return new et(e,t,r);this.line=e,this.ch=t,this.sticky=r}function tt(e,t){return e.line-t.line||e.ch-t.ch}function rt(e,t){return e.sticky==t.sticky&&0==tt(e,t)}function nt(e){return et(e.line,e.ch)}function it(e,t){return tt(e,t)<0?t:e}function ot(e,t){return tt(e,t)<0?e:t}function lt(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function st(e,t){if(t.line<e.first)return et(e.first,0);var r,n,i,o=e.first+e.size-1;return t.line>o?et(o,Xe(e,o).text.length):(n=Xe(e,(r=t).line).text.length,null==(i=r.ch)||n<i?et(r.line,n):i<0?et(r.line,0):r)}function at(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=st(e,t[n]);return r}je.prototype.eol=function(){return this.pos>=this.string.length},je.prototype.sol=function(){return this.pos==this.lineStart},je.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},je.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},je.prototype.eat=function(e){var t=this.string.charAt(this.pos);if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return++this.pos,t},je.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},je.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},je.prototype.skipToEnd=function(){this.pos=this.string.length},je.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos);if(-1<t)return this.pos=t,!0},je.prototype.backUp=function(e){this.pos-=e},je.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=z(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?z(this.string,this.lineStart,this.tabSize):0)},je.prototype.indentation=function(){return z(this.string,null,this.tabSize)-(this.lineStart?z(this.string,this.lineStart,this.tabSize):0)},je.prototype.match=function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e);return n&&0<n.index?null:(n&&!1!==t&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e};if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},je.prototype.current=function(){return this.string.slice(this.start,this.pos)},je.prototype.hideFirstChars=function(e,t){this.lineStart+=e;try{return t()}finally{this.lineStart-=e}},je.prototype.lookAhead=function(e){var t=this.lineOracle;return t&&t.lookAhead(e)},je.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};var ut=function(e,t){this.state=e,this.lookAhead=t},ct=function(e,t,r,n){this.state=t,this.doc=e,this.line=r,this.maxLookAhead=n||0,this.baseTokens=null,this.baseTokenPos=1};function ht(t,r,n,e){var a=[t.state.modeGen],i={};wt(t,r.text,t.doc.mode,n,function(e,t){return a.push(e,t)},i,e);for(var u=n.state,o=function(e){n.baseTokens=a;var o=t.state.overlays[e],l=1,s=0;n.state=!0,wt(t,r.text,o.mode,n,function(e,t){for(var r=l;s<e;){var n=a[l];e<n&&a.splice(l,1,e,a[l+1],n),l+=2,s=Math.min(e,n)}if(t)if(o.opaque)a.splice(r,l-r,e,"overlay "+t),l=r+2;else for(;r<l;r+=2){var i=a[r+1];a[r+1]=(i?i+" ":"")+"overlay "+t}},i),n.state=u,n.baseTokens=null,n.baseTokenPos=1},l=0;l<t.state.overlays.length;++l)o(l);return{styles:a,classes:i.bgClass||i.textClass?i:null}}function ft(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=dt(e,qe(t)),i=t.text.length>e.options.maxHighlightLength&&Ue(e.doc.mode,n.state),o=ht(e,t,n);i&&(n.state=i),t.stateAfter=n.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function dt(r,n,e){var t=r.doc,i=r.display;if(!t.mode.startState)return new ct(t,!0,n);var o=function(e,t,r){for(var n,i,o=e.doc,l=r?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;l<s;--s){if(s<=o.first)return o.first;var a=Xe(o,s-1),u=a.stateAfter;if(u&&(!r||s+(u instanceof ut?u.lookAhead:0)<=o.modeFrontier))return s;var c=z(a.text,null,e.options.tabSize);(null==i||c<n)&&(i=s-1,n=c)}return i}(r,n,e),l=o>t.first&&Xe(t,o-1).stateAfter,s=l?ct.fromSaved(t,l,o):new ct(t,Ke(t.mode),o);return t.iter(o,n,function(e){pt(r,e.text,s);var t=s.line;e.stateAfter=t==n-1||t%5==0||t>=i.viewFrom&&t<i.viewTo?s.save():null,s.nextLine()}),e&&(t.modeFrontier=s.line),s}function pt(e,t,r,n){var i=e.doc.mode,o=new je(t,e.options.tabSize,r);for(o.start=o.pos=n||0,""==t&&gt(i,r.state);!o.eol();)vt(i,o,r.state),o.start=o.pos}function gt(e,t){if(e.blankLine)return e.blankLine(t);if(e.innerMode){var r=Ve(e,t);return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function vt(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=Ve(e,r).mode);var o=e.token(t,r);if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}ct.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e);return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},ct.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var t=this.baseTokens[this.baseTokenPos+1];return{type:t&&t.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},ct.prototype.nextLine=function(){this.line++,0<this.maxLookAhead&&this.maxLookAhead--},ct.fromSaved=function(e,t,r){return t instanceof ut?new ct(e,Ue(e.mode,t.state),r,t.lookAhead):new ct(e,Ue(e.mode,t),r)},ct.prototype.save=function(e){var t=!1!==e?Ue(this.doc.mode,this.state):this.state;return 0<this.maxLookAhead?new ut(t,this.maxLookAhead):t};var mt=function(e,t,r){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=r};function yt(e,t,r,n){var i,o,l=e.doc,s=l.mode,a=Xe(l,(t=st(l,t)).line),u=dt(e,t.line,r),c=new je(a.text,e.options.tabSize,u);for(n&&(o=[]);(n||c.pos<t.ch)&&!c.eol();)c.start=c.pos,i=vt(s,c,u.state),n&&o.push(new mt(c,i,Ue(l.mode,u.state)));return n?o:new mt(c,i,u.state)}function bt(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!r)break;e=e.slice(0,r.index)+e.slice(r.index+r[0].length);var n=r[1]?"bgClass":"textClass";null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2])}return e}function wt(e,t,r,n,i,o,l){var s=r.flattenSpans;null==s&&(s=e.options.flattenSpans);var a,u=0,c=null,h=new je(t,e.options.tabSize,n),f=e.options.addModeClass&&[null];for(""==t&&bt(gt(r,n.state),o);!h.eol();){if(a=h.pos>e.options.maxHighlightLength?(s=!1,l&&pt(e,t,n,h.pos),h.pos=t.length,null):bt(vt(r,h,n.state,f),o),f){var d=f[0].name;d&&(a="m-"+(a?d+" "+a:d))}if(!s||c!=a){for(;u<h.start;)i(u=Math.min(h.start,u+5e3),c);c=a}h.start=h.pos}for(;u<h.pos;){var p=Math.min(h.pos,u+5e3);i(p,c),u=p}}var xt=!1,Ct=!1;function St(e,t,r){this.marker=e,this.from=t,this.to=r}function Lt(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r];if(n.marker==t)return n}}function kt(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n]);return r}function Tt(e,t){if(t.full)return null;var r=Qe(e,t.from.line)&&Xe(e,t.from.line).markedSpans,n=Qe(e,t.to.line)&&Xe(e,t.to.line).markedSpans;if(!r&&!n)return null;var i=t.from.ch,o=t.to.ch,l=0==tt(t.from,t.to),s=function(e,t,r){var n;if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker;if(null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==l.type&&(!r||!o.marker.insertLeft)){var s=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new St(l,o.from,s?null:o.to))}}return n}(r,i,l),a=function(e,t,r){var n;if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker;if(null==o.to||(l.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==l.type&&(!r||o.marker.insertLeft)){var s=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new St(l,s?null:o.from-t,null==o.to?null:o.to-t))}}return n}(n,o,l),u=1==t.text.length,c=$(t.text).length+(u?i:0);if(s)for(var h=0;h<s.length;++h){var f=s[h];if(null==f.to){var d=Lt(a,f.marker);d?u&&(f.to=null==d.to?null:d.to+c):f.to=i}}if(a)for(var p=0;p<a.length;++p){var g=a[p];if(null!=g.to&&(g.to+=c),null==g.from)Lt(s,g.marker)||(g.from=c,u&&(s||(s=[])).push(g));else g.from+=c,u&&(s||(s=[])).push(g)}s&&(s=Mt(s)),a&&a!=s&&(a=Mt(a));var v=[s];if(!u){var m,y=t.text.length-2;if(0<y&&s)for(var b=0;b<s.length;++b)null==s[b].to&&(m||(m=[])).push(new St(s[b].marker,null,null));for(var w=0;w<y;++w)v.push(m);v.push(a)}return v}function Mt(e){for(var t=0;t<e.length;++t){var r=e[t];null!=r.from&&r.from==r.to&&!1!==r.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function Nt(e){var t=e.markedSpans;if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e);e.markedSpans=null}}function Ot(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e);e.markedSpans=t}}function At(e){return e.inclusiveLeft?-1:0}function Dt(e){return e.inclusiveRight?1:0}function Wt(e,t){var r=e.lines.length-t.lines.length;if(0!=r)return r;var n=e.find(),i=t.find(),o=tt(n.from,i.from)||At(e)-At(t);if(o)return-o;var l=tt(n.to,i.to)||Dt(e)-Dt(t);return l||t.id-e.id}function Ht(e,t){var r,n=Ct&&e.markedSpans;if(n)for(var i=void 0,o=0;o<n.length;++o)(i=n[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!r||Wt(r,i.marker)<0)&&(r=i.marker);return r}function Ft(e){return Ht(e,!0)}function Pt(e){return Ht(e,!1)}function Et(e,t){var r,n=Ct&&e.markedSpans;if(n)for(var i=0;i<n.length;++i){var o=n[i];o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!r||Wt(r,o.marker)<0)&&(r=o.marker)}return r}function It(e,t,r,n,i){var o=Xe(e,t),l=Ct&&o.markedSpans;if(l)for(var s=0;s<l.length;++s){var a=l[s];if(a.marker.collapsed){var u=a.marker.find(0),c=tt(u.from,r)||At(a.marker)-At(i),h=tt(u.to,n)||Dt(a.marker)-Dt(i);if(!(0<=c&&h<=0||c<=0&&0<=h)&&(c<=0&&(a.marker.inclusiveRight&&i.inclusiveLeft?0<=tt(u.to,r):0<tt(u.to,r))||0<=c&&(a.marker.inclusiveRight&&i.inclusiveLeft?tt(u.from,n)<=0:tt(u.from,n)<0)))return!0}}}function zt(e){for(var t;t=Ft(e);)e=t.find(-1,!0).line;return e}function Rt(e,t){var r=Xe(e,t),n=zt(r);return r==n?t:qe(n)}function Bt(e,t){if(t>e.lastLine())return t;var r,n=Xe(e,t);if(!Gt(e,n))return t;for(;r=Pt(n);)n=r.find(1,!0).line;return qe(n)+1}function Gt(e,t){var r=Ct&&t.markedSpans;if(r)for(var n=void 0,i=0;i<r.length;++i)if((n=r[i]).marker.collapsed){if(null==n.from)return!0;if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&Ut(e,t,n))return!0}}function Ut(e,t,r){if(null==r.to){var n=r.marker.find(1,!0);return Ut(e,n.line,Lt(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0;for(var i=void 0,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&Ut(e,t,i))return!0}function Vt(e){for(var t=0,r=(e=zt(e)).parent,n=0;n<r.lines.length;++n){var i=r.lines[n];if(i==e)break;t+=i.height}for(var o=r.parent;o;o=(r=o).parent)for(var l=0;l<o.children.length;++l){var s=o.children[l];if(s==r)break;t+=s.height}return t}function Kt(e){if(0==e.height)return 0;for(var t,r=e.text.length,n=e;t=Ft(n);){var i=t.find(0,!0);n=i.from.line,r+=i.from.ch-i.to.ch}for(n=e;t=Pt(n);){var o=t.find(0,!0);r-=n.text.length-o.from.ch,r+=(n=o.to.line).text.length-o.to.ch}return r}function jt(e){var r=e.display,t=e.doc;r.maxLine=Xe(t,t.first),r.maxLineLength=Kt(r.maxLine),r.maxLineChanged=!0,t.iter(function(e){var t=Kt(e);t>r.maxLineLength&&(r.maxLineLength=t,r.maxLine=e)})}var Xt=function(e,t,r){this.text=e,Ot(this,t),this.height=r?r(this):1};Xt.prototype.lineNo=function(){return qe(this)},be(Xt);var Yt={},_t={};function $t(e,t){if(!e||/^\s*$/.test(e))return null;var r=t.addModeClass?_t:Yt;return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function qt(e,t){var r=O("span",null,null,b?"padding-right: .1px":null),n={pre:O("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};t.measure={};for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o=i?t.rest[i-1]:t.line,l=void 0;n.pos=0,n.addToken=Qt,Ae(e.display.measure)&&(l=ce(o,e.doc.direction))&&(n.addToken=Jt(n.addToken,l)),n.map=[],tr(o,n,ft(e,o,t!=e.display.externalMeasured&&qe(o))),o.styleClasses&&(o.styleClasses.bgClass&&(n.bgClass=F(o.styleClasses.bgClass,n.bgClass||"")),o.styleClasses.textClass&&(n.textClass=F(o.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(Oe(e.display.measure))),0==i?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(b){var s=n.content.lastChild;(/\bcm-tab\b/.test(s.className)||s.querySelector&&s.querySelector(".cm-tab"))&&(n.content.className="cm-tab-wrap-hack")}return ge(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=F(n.pre.className,n.textClass||"")),n}function Zt(e){var t=A("span","•","cm-invalidchar");return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function Qt(e,t,r,n,i,o,l){if(t){var s,a=e.splitSpaces?function(e,t){if(1<e.length&&!/  /.test(e))return e;for(var r=t,n="",i=0;i<e.length;i++){var o=e.charAt(i);" "!=o||!r||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),n+=o,r=" "==o}return n}(t,e.trailingSpace):t,u=e.cm.state.specialChars,c=!1;if(u.test(t)){s=document.createDocumentFragment();for(var h=0;;){u.lastIndex=h;var f=u.exec(t),d=f?f.index-h:t.length-h;if(d){var p=document.createTextNode(a.slice(h,h+d));x&&C<9?s.appendChild(A("span",[p])):s.appendChild(p),e.map.push(e.pos,e.pos+d,p),e.col+=d,e.pos+=d}if(!f)break;h+=d+1;var g=void 0;if("\t"==f[0]){var v=e.cm.options.tabSize,m=v-e.col%v;(g=s.appendChild(A("span",_(m),"cm-tab"))).setAttribute("role","presentation"),g.setAttribute("cm-text","\t"),e.col+=m}else"\r"==f[0]||"\n"==f[0]?(g=s.appendChild(A("span","\r"==f[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",f[0]):((g=e.cm.options.specialCharPlaceholder(f[0])).setAttribute("cm-text",f[0]),x&&C<9?s.appendChild(A("span",[g])):s.appendChild(g)),e.col+=1;e.map.push(e.pos,e.pos+1,g),e.pos++}}else e.col+=t.length,s=document.createTextNode(a),e.map.push(e.pos,e.pos+t.length,s),x&&C<9&&(c=!0),e.pos+=t.length;if(e.trailingSpace=32==a.charCodeAt(t.length-1),r||n||i||c||o){var y=r||"";n&&(y+=n),i&&(y+=i);var b=A("span",[s],y,o);if(l)for(var w in l)l.hasOwnProperty(w)&&"style"!=w&&"class"!=w&&b.setAttribute(w,l[w]);return e.content.appendChild(b)}e.content.appendChild(s)}}function Jt(h,f){return function(e,t,r,n,i,o,l){r=r?r+" cm-force-border":"cm-force-border";for(var s=e.pos,a=s+t.length;;){for(var u=void 0,c=0;c<f.length&&!((u=f[c]).to>s&&u.from<=s);c++);if(u.to>=a)return h(e,t,r,n,i,o,l);h(e,t.slice(0,u.to-s),r,n,null,o,l),n=null,t=t.slice(u.to-s),s=u.to}}}function er(e,t,r,n){var i=!n&&r.widgetNode;i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function tr(e,t,r){var n=e.markedSpans,i=e.text,o=0;if(n)for(var l,s,a,u,c,h,f,d=i.length,p=0,g=1,v="",m=0;;){if(m==p){a=u=c=s="",h=f=null,m=1/0;for(var y=[],b=void 0,w=0;w<n.length;++w){var x=n[w],C=x.marker;if("bookmark"==C.type&&x.from==p&&C.widgetNode)y.push(C);else if(x.from<=p&&(null==x.to||x.to>p||C.collapsed&&x.to==p&&x.from==p)){if(null!=x.to&&x.to!=p&&m>x.to&&(m=x.to,u=""),C.className&&(a+=" "+C.className),C.css&&(s=(s?s+";":"")+C.css),C.startStyle&&x.from==p&&(c+=" "+C.startStyle),C.endStyle&&x.to==m&&(b||(b=[])).push(C.endStyle,x.to),C.title&&((f||(f={})).title=C.title),C.attributes)for(var S in C.attributes)(f||(f={}))[S]=C.attributes[S];C.collapsed&&(!h||Wt(h.marker,C)<0)&&(h=x)}else x.from>p&&m>x.from&&(m=x.from)}if(b)for(var L=0;L<b.length;L+=2)b[L+1]==m&&(u+=" "+b[L]);if(!h||h.from==p)for(var k=0;k<y.length;++k)er(t,0,y[k]);if(h&&(h.from||0)==p){if(er(t,(null==h.to?d+1:h.to)-p,h.marker,null==h.from),null==h.to)return;h.to==p&&(h=!1)}}if(d<=p)break;for(var T=Math.min(d,m);;){if(v){var M=p+v.length;if(!h){var N=T<M?v.slice(0,T-p):v;t.addToken(t,N,l?l+a:a,c,p+N.length==m?u:"",s,f)}if(T<=M){v=v.slice(T-p),p=T;break}p=M,c=""}v=i.slice(o,o=r[g++]),l=$t(r[g++],t.cm.options)}}else for(var O=1;O<r.length;O+=2)t.addToken(t,i.slice(o,o=r[O]),$t(r[O+1],t.cm.options))}function rr(e,t,r){this.line=t,this.rest=function(e){for(var t,r;t=Pt(e);)e=t.find(1,!0).line,(r||(r=[])).push(e);return r}(t),this.size=this.rest?qe($(this.rest))-r+1:1,this.node=this.text=null,this.hidden=Gt(e,t)}function nr(e,t,r){for(var n,i=[],o=t;o<r;o=n){var l=new rr(e.doc,Xe(e.doc,o),o);n=o+l.size,i.push(l)}return i}var ir=null;var or=null;function lr(e,t){var r=de(e,t);if(r.length){var n,i=Array.prototype.slice.call(arguments,2);ir?n=ir.delayedCallbacks:or?n=or:(n=or=[],setTimeout(sr,0));for(var o=function(e){n.push(function(){return r[e].apply(null,i)})},l=0;l<r.length;++l)o(l)}}function sr(){var e=or;or=null;for(var t=0;t<e.length;++t)e[t]()}function ar(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i];"text"==o?hr(e,t):"gutter"==o?dr(e,t,r,n):"class"==o?fr(e,t):"widget"==o&&pr(e,t,n)}t.changes=null}function ur(e){return e.node==e.text&&(e.node=A("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),x&&C<8&&(e.node.style.zIndex=2)),e.node}function cr(e,t){var r=e.display.externalMeasured;return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):qt(e,t)}function hr(e,t){var r=t.text.className,n=cr(e,t);t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,fr(e,t)):r&&(t.text.className=r)}function fr(e,t){!function(e,t){var r=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass;if(r&&(r+=" CodeMirror-linebackground"),t.background)r?t.background.className=r:(t.background.parentNode.removeChild(t.background),t.background=null);else if(r){var n=ur(t);t.background=n.insertBefore(A("div",null,r),n.firstChild),e.display.input.setUneditable(t.background)}}(e,t),t.line.wrapClass?ur(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="");var r=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass;t.text.className=r||""}function dr(e,t,r,n){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=ur(t);t.gutterBackground=A("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px; width: "+n.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),i.insertBefore(t.gutterBackground,t.text)}var o=t.line.gutterMarkers;if(e.options.lineNumbers||o){var l=ur(t),s=t.gutter=A("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px");if(e.display.input.setUneditable(s),l.insertBefore(s,t.text),t.line.gutterClass&&(s.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=s.appendChild(A("div",Je(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+n.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var a=0;a<e.display.gutterSpecs.length;++a){var u=e.display.gutterSpecs[a].className,c=o.hasOwnProperty(u)&&o[u];c&&s.appendChild(A("div",[c],"CodeMirror-gutter-elt","left: "+n.gutterLeft[u]+"px; width: "+n.gutterWidth[u]+"px"))}}}function pr(e,t,r){t.alignable&&(t.alignable=null);for(var n=t.node.firstChild,i=void 0;n;n=i)i=n.nextSibling,"CodeMirror-linewidget"==n.className&&t.node.removeChild(n);gr(e,t,r)}function gr(e,t,r){if(vr(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)vr(e,t.rest[n],t,r,!1)}function vr(e,t,r,n,i){if(t.widgets)for(var o=ur(r),l=0,s=t.widgets;l<s.length;++l){var a=s[l],u=A("div",[a.node],"CodeMirror-linewidget");a.handleMouseEvents||u.setAttribute("cm-ignore-events","true"),mr(a,u,r,n),e.display.input.setUneditable(u),i&&a.above?o.insertBefore(u,r.gutter||r.text):o.appendChild(u),lr(a,"redraw")}}function mr(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t);var i=n.wrapperWidth;t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}function yr(e){if(null!=e.height)return e.height;var t=e.doc.cm;if(!t)return 0;if(!D(document.body,e.node)){var r="position: relative;";e.coverGutter&&(r+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(r+="width: "+t.display.wrapper.clientWidth+"px;"),N(t.display.measure,A("div",[e.node],null,r))}return e.height=e.node.parentNode.offsetHeight}function br(e,t){for(var r=Le(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return!0}function wr(e){return e.lineSpace.offsetTop}function xr(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Cr(e){if(e.cachedPaddingH)return e.cachedPaddingH;var t=N(e.measure,A("pre","x")),r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n={left:parseInt(r.paddingLeft),right:parseInt(r.paddingRight)};return isNaN(n.left)||isNaN(n.right)||(e.cachedPaddingH=n),n}function Sr(e){return G-e.display.nativeBarWidth}function Lr(e){return e.display.scroller.clientWidth-Sr(e)-e.display.barWidth}function kr(e){return e.display.scroller.clientHeight-Sr(e)-e.display.barHeight}function Tr(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache};for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]};for(var i=0;i<e.rest.length;i++)if(qe(e.rest[i])>r)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function Mr(e,t,r,n){return Ar(e,Or(e,t),r,n)}function Nr(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[ln(e,t)];var r=e.display.externalMeasured;return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function Or(e,t){var r=qe(t),n=Nr(e,r);n&&!n.text?n=null:n&&n.changes&&(ar(e,n,r,en(e)),e.curOp.forceUpdate=!0),n||(n=function(e,t){var r=qe(t=zt(t)),n=e.display.externalMeasured=new rr(e.doc,t,r);n.lineN=r;var i=n.built=qt(e,n);return n.text=i.pre,N(e.display.lineMeasure,i.pre),n}(e,t));var i=Tr(n,t,r);return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Ar(e,t,r,n,i){t.before&&(r=-1);var o,l=r+(n||"");return t.cache.hasOwnProperty(l)?o=t.cache[l]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(!function(e,t,r){var n=e.options.lineWrapping,i=n&&Lr(e);if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[];if(n){t.measure.width=i;for(var l=t.text.firstChild.getClientRects(),s=0;s<l.length-1;s++){var a=l[s],u=l[s+1];2<Math.abs(a.bottom-u.bottom)&&o.push((a.bottom+u.top)/2-r.top)}}o.push(r.bottom-r.top)}}(e,t.view,t.rect),t.hasHeights=!0),(o=function(e,t,r,n){var i,o=Hr(t.map,r,n),l=o.node,s=o.start,a=o.end,u=o.collapse;if(3==l.nodeType){for(var c=0;c<4;c++){for(;s&&ie(t.line.text.charAt(o.coverStart+s));)--s;for(;o.coverStart+a<o.coverEnd&&ie(t.line.text.charAt(o.coverStart+a));)++a;if((i=x&&C<9&&0==s&&a==o.coverEnd-o.coverStart?l.parentNode.getBoundingClientRect():Fr(k(l,s,a).getClientRects(),n)).left||i.right||0==s)break;a=s,s-=1,u="right"}x&&C<11&&(i=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=Pe)return Pe;var t=N(e,A("span","x")),r=t.getBoundingClientRect(),n=k(t,0,1).getBoundingClientRect();return Pe=1<Math.abs(r.left-n.left)}(e))return t;var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI;return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}(e.display.measure,i))}else{var h;0<s&&(u=n="right"),i=e.options.lineWrapping&&1<(h=l.getClientRects()).length?h["right"==n?h.length-1:0]:l.getBoundingClientRect()}if(x&&C<9&&!s&&(!i||!i.left&&!i.right)){var f=l.parentNode.getClientRects()[0];i=f?{left:f.left,right:f.left+Jr(e.display),top:f.top,bottom:f.bottom}:Wr}for(var d=i.top-t.rect.top,p=i.bottom-t.rect.top,g=(d+p)/2,v=t.view.measure.heights,m=0;m<v.length-1&&!(g<v[m]);m++);var y=m?v[m-1]:0,b=v[m],w={left:("right"==u?i.right:i.left)-t.rect.left,right:("left"==u?i.left:i.right)-t.rect.left,top:y,bottom:b};i.left||i.right||(w.bogus=!0);e.options.singleCursorHeightPerLine||(w.rtop=d,w.rbottom=p);return w}(e,t,r,n)).bogus||(t.cache[l]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}var Dr,Wr={left:0,right:0,top:0,bottom:0};function Hr(e,t,r){for(var n,i,o,l,s,a,u=0;u<e.length;u+=3)if(s=e[u],a=e[u+1],t<s?(i=0,o=1,l="left"):t<a?o=(i=t-s)+1:(u==e.length-3||t==a&&e[u+3]>t)&&(i=(o=a-s)-1,a<=t&&(l="right")),null!=i){if(n=e[u+2],s==a&&r==(n.insertLeft?"left":"right")&&(l=r),"left"==r&&0==i)for(;u&&e[u-2]==e[u-3]&&e[u-1].insertLeft;)n=e[2+(u-=3)],l="left";if("right"==r&&i==a-s)for(;u<e.length-3&&e[u+3]==e[u+4]&&!e[u+5].insertLeft;)n=e[(u+=3)+2],l="right";break}return{node:n,start:i,end:o,collapse:l,coverStart:s,coverEnd:a}}function Fr(e,t){var r=Wr;if("left"==t)for(var n=0;n<e.length&&(r=e[n]).left==r.right;n++);else for(var i=e.length-1;0<=i&&(r=e[i]).left==r.right;i--);return r}function Pr(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function Er(e){e.display.externalMeasure=null,M(e.display.lineMeasure);for(var t=0;t<e.display.view.length;t++)Pr(e.display.view[t])}function Ir(e){Er(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function zr(){return l&&h?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function Rr(){return l&&h?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function Br(e){var t=0;if(e.widgets)for(var r=0;r<e.widgets.length;++r)e.widgets[r].above&&(t+=yr(e.widgets[r]));return t}function Gr(e,t,r,n,i){if(!i){var o=Br(t);r.top+=o,r.bottom+=o}if("line"==n)return r;n||(n="local");var l=Vt(t);if("local"==n?l+=wr(e.display):l-=e.display.viewOffset,"page"==n||"window"==n){var s=e.display.lineSpace.getBoundingClientRect();l+=s.top+("window"==n?0:Rr());var a=s.left+("window"==n?0:zr());r.left+=a,r.right+=a}return r.top+=l,r.bottom+=l,r}function Ur(e,t,r){if("div"==r)return t;var n=t.left,i=t.top;if("page"==r)n-=zr(),i-=Rr();else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect();n+=o.left,i+=o.top}var l=e.display.lineSpace.getBoundingClientRect();return{left:n-l.left,top:i-l.top}}function Vr(e,t,r,n,i){return n||(n=Xe(e.doc,t.line)),Gr(e,n,Mr(e,n,t.ch,i),r)}function Kr(n,e,i,o,l,s){function a(e,t){var r=Ar(n,l,e,t?"right":"left",s);return t?r.left=r.right:r.right=r.left,Gr(n,o,r,i)}o=o||Xe(n.doc,e.line),l||(l=Or(n,o));var u=ce(o,n.doc.direction),t=e.ch,r=e.sticky;if(t>=o.text.length?(t=o.text.length,r="before"):t<=0&&(t=0,r="after"),!u)return a("before"==r?t-1:t,"before"==r);function c(e,t,r){return a(r?e-1:e,1==u[t].level!=r)}var h=ae(u,t,r),f=se,d=c(t,h,"before"==r);return null!=f&&(d.other=c(t,f,"before"!=r)),d}function jr(e,t){var r=0;t=st(e.doc,t),e.options.lineWrapping||(r=Jr(e.display)*t.ch);var n=Xe(e.doc,t.line),i=Vt(n)+wr(e.display);return{left:r,right:r,top:i,bottom:i+n.height}}function Xr(e,t,r,n,i){var o=et(e,t,r);return o.xRel=i,n&&(o.outside=!0),o}function Yr(e,t,r){var n=e.doc;if((r+=e.display.viewOffset)<0)return Xr(n.first,0,null,!0,-1);var i=Ze(n,r),o=n.first+n.size-1;if(o<i)return Xr(n.first+n.size-1,Xe(n,o).text.length,null,!0,1);t<0&&(t=0);for(var l=Xe(n,i);;){var s=Zr(e,l,i,t,r),a=Et(l,s.ch+(0<s.xRel?1:0));if(!a)return s;var u=a.find(1);if(u.line==i)return u;l=Xe(n,i=u.line)}}function _r(t,e,r,n){n-=Br(e);var i=e.text.length,o=le(function(e){return Ar(t,r,e-1).bottom<=n},i,0);return{begin:o,end:i=le(function(e){return Ar(t,r,e).top>n},o,i)}}function $r(e,t,r,n){return r||(r=Or(e,t)),_r(e,t,r,Gr(e,t,Ar(e,r,n),"line").top)}function qr(e,t,r,n){return!(e.bottom<=r)&&(e.top>r||(n?e.left:e.right)>t)}function Zr(r,e,t,n,i){i-=Vt(e);var o=Or(r,e),l=Br(e),s=0,a=e.text.length,u=!0,c=ce(e,r.doc.direction);if(c){var h=(r.options.lineWrapping?function(e,t,r,n,i,o,l){var s=_r(e,t,n,l),a=s.begin,u=s.end;/\s/.test(t.text.charAt(u-1))&&u--;for(var c=null,h=null,f=0;f<i.length;f++){var d=i[f];if(!(d.from>=u||d.to<=a)){var p=1!=d.level,g=Ar(e,n,p?Math.min(u,d.to)-1:Math.max(a,d.from)).right,v=g<o?o-g+1e9:g-o;(!c||v<h)&&(c=d,h=v)}}c||(c=i[i.length-1]);c.from<a&&(c={from:a,to:c.to,level:c.level});c.to>u&&(c={from:c.from,to:u,level:c.level});return c}:function(n,i,o,l,s,a,u){var e=le(function(e){var t=s[e],r=1!=t.level;return qr(Kr(n,et(o,r?t.to:t.from,r?"before":"after"),"line",i,l),a,u,!0)},0,s.length-1),t=s[e];if(0<e){var r=1!=t.level,c=Kr(n,et(o,r?t.from:t.to,r?"after":"before"),"line",i,l);qr(c,a,u,!0)&&c.top>u&&(t=s[e-1])}return t})(r,e,t,o,c,n,i);s=(u=1!=h.level)?h.from:h.to-1,a=u?h.to:h.from-1}var f,d,p=null,g=null,v=le(function(e){var t=Ar(r,o,e);return t.top+=l,t.bottom+=l,!!qr(t,n,i,!1)&&(t.top<=i&&t.left<=n&&(p=e,g=t),!0)},s,a),m=!1;if(g){var y=n-g.left<g.right-n,b=y==u;v=p+(b?0:1),d=b?"after":"before",f=y?g.left:g.right}else{u||v!=a&&v!=s||v++,d=0==v?"after":v==e.text.length?"before":Ar(r,o,v-(u?1:0)).bottom+l<=i==u?"after":"before";var w=Kr(r,et(t,v,d),"line",e,o);f=w.left,m=i<w.top||i>=w.bottom}return Xr(t,v=oe(e.text,v,1),d,m,n-f)}function Qr(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight;if(null==Dr){Dr=A("pre");for(var t=0;t<49;++t)Dr.appendChild(document.createTextNode("x")),Dr.appendChild(A("br"));Dr.appendChild(document.createTextNode("x"))}N(e.measure,Dr);var r=Dr.offsetHeight/50;return 3<r&&(e.cachedTextHeight=r),M(e.measure),r||1}function Jr(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth;var t=A("span","xxxxxxxxxx"),r=A("pre",[t]);N(e.measure,r);var n=t.getBoundingClientRect(),i=(n.right-n.left)/10;return 2<i&&(e.cachedCharWidth=i),i||10}function en(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,l=0;o;o=o.nextSibling,++l){var s=e.display.gutterSpecs[l].className;r[s]=o.offsetLeft+o.clientLeft+i,n[s]=o.clientWidth}return{fixedPos:tn(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function tn(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function rn(n){var i=Qr(n.display),o=n.options.lineWrapping,l=o&&Math.max(5,n.display.scroller.clientWidth/Jr(n.display)-3);return function(e){if(Gt(n.doc,e))return 0;var t=0;if(e.widgets)for(var r=0;r<e.widgets.length;r++)e.widgets[r].height&&(t+=e.widgets[r].height);return o?t+(Math.ceil(e.text.length/l)||1)*i:t+i}}function nn(e){var t=e.doc,r=rn(e);t.iter(function(e){var t=r(e);t!=e.height&&$e(e,t)})}function on(e,t,r,n){var i=e.display;if(!r&&"true"==Le(t).getAttribute("cm-not-content"))return null;var o,l,s=i.lineSpace.getBoundingClientRect();try{o=t.clientX-s.left,l=t.clientY-s.top}catch(t){return null}var a,u=Yr(e,o,l);if(n&&1==u.xRel&&(a=Xe(e.doc,u.line).text).length==u.ch){var c=z(a,a.length,e.options.tabSize)-a.length;u=et(u.line,Math.max(0,Math.round((o-Cr(e.display).left)/Jr(e.display))-c))}return u}function ln(e,t){if(t>=e.display.viewTo)return null;if((t-=e.display.viewFrom)<0)return null;for(var r=e.display.view,n=0;n<r.length;n++)if((t-=r[n].size)<0)return n}function sn(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0);var i=e.display;if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)Ct&&Rt(e.doc,t)<i.viewTo&&un(e);else if(r<=i.viewFrom)Ct&&Bt(e.doc,r+n)>i.viewFrom?un(e):(i.viewFrom+=n,i.viewTo+=n);else if(t<=i.viewFrom&&r>=i.viewTo)un(e);else if(t<=i.viewFrom){var o=cn(e,r,r+n,1);o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):un(e)}else if(r>=i.viewTo){var l=cn(e,t,t,-1);l?(i.view=i.view.slice(0,l.index),i.viewTo=l.lineN):un(e)}else{var s=cn(e,t,t,-1),a=cn(e,r,r+n,1);s&&a?(i.view=i.view.slice(0,s.index).concat(nr(e,s.lineN,a.lineN)).concat(i.view.slice(a.index)),i.viewTo+=n):un(e)}var u=i.externalMeasured;u&&(r<u.lineN?u.lineN+=n:t<u.lineN+u.size&&(i.externalMeasured=null))}function an(e,t,r){e.curOp.viewChanged=!0;var n=e.display,i=e.display.externalMeasured;if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[ln(e,t)];if(null!=o.node){var l=o.changes||(o.changes=[]);-1==B(l,r)&&l.push(r)}}}function un(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function cn(e,t,r,n){var i,o=ln(e,t),l=e.display.view;if(!Ct||r==e.doc.first+e.doc.size)return{index:o,lineN:r};for(var s=e.display.viewFrom,a=0;a<o;a++)s+=l[a].size;if(s!=t){if(0<n){if(o==l.length-1)return null;i=s+l[o].size-t,o++}else i=s-t;t+=i,r+=i}for(;Rt(e.doc,r)!=r;){if(o==(n<0?0:l.length-1))return null;r+=n*l[o-(n<0?1:0)].size,o+=n}return{index:o,lineN:r}}function hn(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n];i.hidden||i.node&&!i.changes||++r}return r}function fn(e){e.display.input.showSelection(e.display.input.prepareSelection())}function dn(e,t){void 0===t&&(t=!0);for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),l=0;l<r.sel.ranges.length;l++)if(t||l!=r.sel.primIndex){var s=r.sel.ranges[l];if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var a=s.empty();(a||e.options.showCursorWhenSelecting)&&pn(e,s.head,i),a||vn(e,s,o)}}return n}function pn(e,t,r){var n=Kr(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=r.appendChild(A("div"," ","CodeMirror-cursor"));if(i.style.left=n.left+"px",i.style.top=n.top+"px",i.style.height=Math.max(0,n.bottom-n.top)*e.options.cursorHeight+"px",n.other){var o=r.appendChild(A("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));o.style.display="",o.style.left=n.other.left+"px",o.style.top=n.other.top+"px",o.style.height=.85*(n.other.bottom-n.other.top)+"px"}}function gn(e,t){return e.top-t.top||e.left-t.left}function vn(l,e,t){var r=l.display,n=l.doc,i=document.createDocumentFragment(),o=Cr(l.display),T=o.left,M=Math.max(r.sizerWidth,Lr(l)-r.sizer.offsetLeft)-o.right,N="ltr"==n.direction;function O(e,t,r,n){t<0&&(t=0),t=Math.round(t),n=Math.round(n),i.appendChild(A("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==r?M-e:r)+"px;\n                             height: "+(n-t)+"px"))}function s(r,y,b){var w,x,o=Xe(n,r),C=o.text.length;function S(e,t){return Vr(l,et(r,e),"div",o,t)}function L(e,t,r){var n=$r(l,o,null,e),i="ltr"==t==("after"==r)?"left":"right";return S("after"==r?n.begin:n.end-(/\s/.test(o.text.charAt(n.end-1))?2:1),i)[i]}var k=ce(o,n.direction);return function(e,t,r,n){if(!e)return n(t,r,"ltr",0);for(var i=!1,o=0;o<e.length;++o){var l=e[o];(l.from<r&&l.to>t||t==r&&l.to==t)&&(n(Math.max(l.from,t),Math.min(l.to,r),1==l.level?"rtl":"ltr",o),i=!0)}i||n(t,r,"ltr")}(k,y||0,null==b?C:b,function(e,t,r,n){var i="ltr"==r,o=S(e,i?"left":"right"),l=S(t-1,i?"right":"left"),s=null==y&&0==e,a=null==b&&t==C,u=0==n,c=!k||n==k.length-1;if(l.top-o.top<=3){var h=(N?a:s)&&c,f=(N?s:a)&&u?T:(i?o:l).left,d=h?M:(i?l:o).right;O(f,o.top,d-f,o.bottom)}else{var p,g,v,m;m=i?(p=N&&s&&u?T:o.left,g=N?M:L(e,r,"before"),v=N?T:L(t,r,"after"),N&&a&&c?M:l.right):(p=N?L(e,r,"before"):T,g=!N&&s&&u?M:o.right,v=!N&&a&&c?T:l.left,N?L(t,r,"after"):M),O(p,o.top,g-p,o.bottom),o.bottom<l.top&&O(T,o.bottom,null,l.top),O(v,l.top,m-v,l.bottom)}(!w||gn(o,w)<0)&&(w=o),gn(l,w)<0&&(w=l),(!x||gn(o,x)<0)&&(x=o),gn(l,x)<0&&(x=l)}),{start:w,end:x}}var a=e.from(),u=e.to();if(a.line==u.line)s(a.line,a.ch,u.ch);else{var c=Xe(n,a.line),h=Xe(n,u.line),f=zt(c)==zt(h),d=s(a.line,a.ch,f?c.text.length+1:null).end,p=s(u.line,f?0:null,u.ch).start;f&&(d.top<p.top-2?(O(d.right,d.top,null,d.bottom),O(T,p.top,p.left,p.bottom)):O(d.right,d.top,p.left-d.right,d.bottom)),d.bottom<p.top&&O(T,d.bottom,null,p.top)}t.appendChild(i)}function mn(e){if(e.state.focused){var t=e.display;clearInterval(t.blinker);var r=!0;t.cursorDiv.style.visibility="",0<e.options.cursorBlinkRate?t.blinker=setInterval(function(){return t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function yn(e){e.state.focused||(e.display.input.focus(),wn(e))}function bn(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,xn(e))},100)}function wn(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(ge(e,"focus",e,t),e.state.focused=!0,H(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),b&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),mn(e))}function xn(e,t){e.state.delayingBlurEvent||(e.state.focused&&(ge(e,"blur",e,t),e.state.focused=!1,T(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Cn(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i=t.view[n],o=e.options.lineWrapping,l=void 0,s=0;if(!i.hidden){if(x&&C<8){var a=i.node.offsetTop+i.node.offsetHeight;l=a-r,r=a}else{var u=i.node.getBoundingClientRect();l=u.bottom-u.top,!o&&i.text.firstChild&&(s=i.text.firstChild.getBoundingClientRect().right-u.left-1)}var c=i.line.height-l;if((.005<c||c<-.005)&&($e(i.line,l),Sn(i.line),i.rest))for(var h=0;h<i.rest.length;h++)Sn(i.rest[h]);if(s>e.display.sizerWidth){var f=Math.ceil(s/Jr(e.display));f>e.display.maxLineLength&&(e.display.maxLineLength=f,e.display.maxLine=i.line,e.display.maxLineChanged=!0)}}}}function Sn(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var r=e.widgets[t],n=r.node.parentNode;n&&(r.height=n.offsetHeight)}}function Ln(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop;n=Math.floor(n-wr(e));var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=Ze(t,n),l=Ze(t,i);if(r&&r.ensure){var s=r.ensure.from.line,a=r.ensure.to.line;s<o?l=Ze(t,Vt(Xe(t,o=s))+e.wrapper.clientHeight):Math.min(a,t.lastLine())>=l&&(o=Ze(t,Vt(Xe(t,a))-e.wrapper.clientHeight),l=a)}return{from:o,to:Math.max(l,o+1)}}function kn(e,t){var r=e.display,n=Qr(e.display);t.top<0&&(t.top=0);var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:r.scroller.scrollTop,o=kr(e),l={};t.bottom-t.top>o&&(t.bottom=t.top+o);var s=e.doc.height+xr(r),a=t.top<n,u=t.bottom>s-n;if(t.top<i)l.scrollTop=a?0:t.top;else if(t.bottom>i+o){var c=Math.min(t.top,(u?s:t.bottom)-o);c!=i&&(l.scrollTop=c)}var h=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:r.scroller.scrollLeft,f=Lr(e)-(e.options.fixedGutter?r.gutters.offsetWidth:0),d=t.right-t.left>f;return d&&(t.right=t.left+f),t.left<10?l.scrollLeft=0:t.left<h?l.scrollLeft=Math.max(0,t.left-(d?0:10)):t.right>f+h-3&&(l.scrollLeft=t.right+(d?0:10)-f),l}function Tn(e,t){null!=t&&(On(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function Mn(e){On(e);var t=e.getCursor();e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function Nn(e,t,r){null==t&&null==r||On(e),null!=t&&(e.curOp.scrollLeft=t),null!=r&&(e.curOp.scrollTop=r)}function On(e){var t=e.curOp.scrollToPos;t&&(e.curOp.scrollToPos=null,An(e,jr(e,t.from),jr(e,t.to),t.margin))}function An(e,t,r,n){var i=kn(e,{left:Math.min(t.left,r.left),top:Math.min(t.top,r.top)-n,right:Math.max(t.right,r.right),bottom:Math.max(t.bottom,r.bottom)+n});Nn(e,i.scrollLeft,i.scrollTop)}function Dn(e,t){Math.abs(e.doc.scrollTop-t)<2||(g||ni(e,{top:t}),Wn(e,t,!0),g&&ni(e),Qn(e,100))}function Wn(e,t,r){t=Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t),(e.display.scroller.scrollTop!=t||r)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function Hn(e,t,r,n){t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!n||(e.doc.scrollLeft=t,li(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function Fn(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+xr(e.display));return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Sr(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}var Pn=function(e,t,r){this.cm=r;var n=this.vert=A("div",[A("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=A("div",[A("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");n.tabIndex=i.tabIndex=-1,e(n),e(i),fe(n,"scroll",function(){n.clientHeight&&t(n.scrollTop,"vertical")}),fe(i,"scroll",function(){i.clientWidth&&t(i.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,x&&C<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Pn.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth;if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0";var i=e.viewHeight-(t?n:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0";if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px";var o=e.viewWidth-e.barLeft-(r?n:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&0<e.clientHeight&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},Pn.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Pn.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Pn.prototype.zeroWidthHack=function(){var e=w&&!s?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new R,this.disableVert=new R},Pn.prototype.enableZeroWidthBar=function(r,n,i){r.style.pointerEvents="auto",n.set(1e3,function e(){var t=r.getBoundingClientRect();("vert"==i?document.elementFromPoint(t.right-1,(t.top+t.bottom)/2):document.elementFromPoint((t.right+t.left)/2,t.bottom-1))!=r?r.style.pointerEvents="none":n.set(1e3,e)})},Pn.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var En=function(){};function In(e,t){t||(t=Fn(e));var r=e.display.barWidth,n=e.display.barHeight;zn(e,t);for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&Cn(e),zn(e,Fn(e)),r=e.display.barWidth,n=e.display.barHeight}function zn(e,t){var r=e.display,n=r.scrollbars.update(t);r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",r.heightForcer.style.borderBottom=n.bottom+"px solid transparent",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display=""}En.prototype.update=function(){return{bottom:0,right:0}},En.prototype.setScrollLeft=function(){},En.prototype.setScrollTop=function(){},En.prototype.clear=function(){};var Rn={native:Pn,null:En};function Bn(r){r.display.scrollbars&&(r.display.scrollbars.clear(),r.display.scrollbars.addClass&&T(r.display.wrapper,r.display.scrollbars.addClass)),r.display.scrollbars=new Rn[r.options.scrollbarStyle](function(e){r.display.wrapper.insertBefore(e,r.display.scrollbarFiller),fe(e,"mousedown",function(){r.state.focused&&setTimeout(function(){return r.display.input.focus()},0)}),e.setAttribute("cm-not-content","true")},function(e,t){"horizontal"==t?Hn(r,e):Dn(r,e)},r),r.display.scrollbars.addClass&&H(r.display.wrapper,r.display.scrollbars.addClass)}var Gn=0;function Un(e){var t;e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Gn},t=e.curOp,ir?ir.ops.push(t):t.ownsGroup=ir={ops:[t],delayedCallbacks:[]}}function Vn(e){var t=e.curOp;t&&function(e,t){var r=e.ownsGroup;if(r)try{!function(e){var t=e.delayedCallbacks,r=0;do{for(;r<t.length;r++)t[r].call(null);for(var n=0;n<e.ops.length;n++){var i=e.ops[n];if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(r<t.length)}(r)}finally{ir=null,t(r)}}(t,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null;!function(e){for(var t=e.ops,r=0;r<t.length;r++)Kn(t[r]);for(var n=0;n<t.length;n++)(i=t[n]).updatedDisplay=i.mustUpdate&&ti(i.cm,i.update);var i;for(var o=0;o<t.length;o++)jn(t[o]);for(var l=0;l<t.length;l++)Xn(t[l]);for(var s=0;s<t.length;s++)Yn(t[s])}(e)})}function Kn(e){var t,r,n=e.cm,i=n.display;!(r=(t=n).display).scrollbarsClipped&&r.scroller.offsetWidth&&(r.nativeBarWidth=r.scroller.offsetWidth-r.scroller.clientWidth,r.heightForcer.style.height=Sr(t)+"px",r.sizer.style.marginBottom=-r.nativeBarWidth+"px",r.sizer.style.borderRightWidth=Sr(t)+"px",r.scrollbarsClipped=!0),e.updateMaxLine&&jt(n),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<i.viewFrom||e.scrollToPos.to.line>=i.viewTo)||i.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new ei(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function jn(e){var t=e.cm,r=t.display;e.updatedDisplay&&Cn(t),e.barMeasure=Fn(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Mr(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Sr(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-Lr(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection())}function Xn(e){var t=e.cm;null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Hn(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1);var r=e.focus&&e.focus==W();e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),(e.updatedDisplay||e.startHeight!=t.doc.height)&&In(t,e.barMeasure),e.updatedDisplay&&oi(t,e.barMeasure),e.selectionChanged&&mn(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&yn(e.cm)}function Yn(e){var t=e.cm,r=t.display,n=t.doc;(e.updatedDisplay&&ri(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null!=e.scrollTop&&Wn(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&Hn(t,e.scrollLeft,!0,!0),e.scrollToPos)&&function(e,t){if(!ve(e,"scrollCursorIntoView")){var r=e.display,n=r.sizer.getBoundingClientRect(),i=null;if(t.top+n.top<0?i=!0:t.bottom+n.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!u){var o=A("div","​",null,"position: absolute;\n                         top: "+(t.top-r.viewOffset-wr(e.display))+"px;\n                         height: "+(t.bottom-t.top+Sr(e)+r.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;");e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o)}}}(t,function(e,t,r,n){var i;null==n&&(n=0),e.options.lineWrapping||t!=r||(r="before"==(t=t.ch?et(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t).sticky?et(t.line,t.ch+1,"before"):t);for(var o=0;o<5;o++){var l=!1,s=Kr(e,t),a=r&&r!=t?Kr(e,r):s,u=kn(e,i={left:Math.min(s.left,a.left),top:Math.min(s.top,a.top)-n,right:Math.max(s.left,a.left),bottom:Math.max(s.bottom,a.bottom)+n}),c=e.doc.scrollTop,h=e.doc.scrollLeft;if(null!=u.scrollTop&&(Dn(e,u.scrollTop),1<Math.abs(e.doc.scrollTop-c)&&(l=!0)),null!=u.scrollLeft&&(Hn(e,u.scrollLeft),1<Math.abs(e.doc.scrollLeft-h)&&(l=!0)),!l)break}return i}(t,st(n,e.scrollToPos.from),st(n,e.scrollToPos.to),e.scrollToPos.margin));var i=e.maybeHiddenMarkers,o=e.maybeUnhiddenMarkers;if(i)for(var l=0;l<i.length;++l)i[l].lines.length||ge(i[l],"hide");if(o)for(var s=0;s<o.length;++s)o[s].lines.length&&ge(o[s],"unhide");r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&ge(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function _n(e,t){if(e.curOp)return t();Un(e);try{return t()}finally{Vn(e)}}function $n(e,t){return function(){if(e.curOp)return t.apply(e,arguments);Un(e);try{return t.apply(e,arguments)}finally{Vn(e)}}}function qn(e){return function(){if(this.curOp)return e.apply(this,arguments);Un(this);try{return e.apply(this,arguments)}finally{Vn(this)}}}function Zn(t){return function(){var e=this.cm;if(!e||e.curOp)return t.apply(this,arguments);Un(e);try{return t.apply(this,arguments)}finally{Vn(e)}}}function Qn(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,E(Jn,e))}function Jn(a){var u=a.doc;if(!(u.highlightFrontier>=a.display.viewTo)){var c=+new Date+a.options.workTime,h=dt(a,u.highlightFrontier),f=[];u.iter(h.line,Math.min(u.first+u.size,a.display.viewTo+500),function(e){if(h.line>=a.display.viewFrom){var t=e.styles,r=e.text.length>a.options.maxHighlightLength?Ue(u.mode,h.state):null,n=ht(a,e,h,!0);r&&(h.state=r),e.styles=n.styles;var i=e.styleClasses,o=n.classes;o?e.styleClasses=o:i&&(e.styleClasses=null);for(var l=!t||t.length!=e.styles.length||i!=o&&(!i||!o||i.bgClass!=o.bgClass||i.textClass!=o.textClass),s=0;!l&&s<t.length;++s)l=t[s]!=e.styles[s];l&&f.push(h.line),e.stateAfter=h.save(),h.nextLine()}else e.text.length<=a.options.maxHighlightLength&&pt(a,e.text,h),e.stateAfter=h.line%5==0?h.save():null,h.nextLine();if(+new Date>c)return Qn(a,a.options.workDelay),!0}),u.highlightFrontier=h.line,u.modeFrontier=Math.max(u.modeFrontier,h.line),f.length&&_n(a,function(){for(var e=0;e<f.length;e++)an(a,f[e],"text")})}}var ei=function(e,t,r){var n=e.display;this.viewport=t,this.visible=Ln(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=Lr(e),this.force=r,this.dims=en(e),this.events=[]};function ti(e,t){var r=e.display,n=e.doc;if(t.editorIsHidden)return un(e),!1;if(!t.force&&t.visible.from>=r.viewFrom&&t.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&r.renderedView==r.view&&0==hn(e))return!1;si(e)&&(un(e),t.dims=en(e));var i=n.first+n.size,o=Math.max(t.visible.from-e.options.viewportMargin,n.first),l=Math.min(i,t.visible.to+e.options.viewportMargin);r.viewFrom<o&&o-r.viewFrom<20&&(o=Math.max(n.first,r.viewFrom)),r.viewTo>l&&r.viewTo-l<20&&(l=Math.min(i,r.viewTo)),Ct&&(o=Rt(e.doc,o),l=Bt(e.doc,l));var s,a,u,c,h=o!=r.viewFrom||l!=r.viewTo||r.lastWrapHeight!=t.wrapperHeight||r.lastWrapWidth!=t.wrapperWidth;a=o,u=l,0==(c=(s=e).display).view.length||a>=c.viewTo||u<=c.viewFrom?(c.view=nr(s,a,u),c.viewFrom=a):(c.viewFrom>a?c.view=nr(s,a,c.viewFrom).concat(c.view):c.viewFrom<a&&(c.view=c.view.slice(ln(s,a))),c.viewFrom=a,c.viewTo<u?c.view=c.view.concat(nr(s,c.viewTo,u)):c.viewTo>u&&(c.view=c.view.slice(0,ln(s,u)))),c.viewTo=u,r.viewOffset=Vt(Xe(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+"px";var f=hn(e);if(!h&&0==f&&!t.force&&r.renderedView==r.view&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return!1;var d=function(e){if(e.hasFocus())return null;var t=W();if(!t||!D(e.display.lineDiv,t))return null;var r={activeElt:t};if(window.getSelection){var n=window.getSelection();n.anchorNode&&n.extend&&D(e.display.lineDiv,n.anchorNode)&&(r.anchorNode=n.anchorNode,r.anchorOffset=n.anchorOffset,r.focusNode=n.focusNode,r.focusOffset=n.focusOffset)}return r}(e);return 4<f&&(r.lineDiv.style.display="none"),function(r,e,t){var n=r.display,i=r.options.lineNumbers,o=n.lineDiv,l=o.firstChild;function s(e){var t=e.nextSibling;return b&&w&&r.display.currentWheelTarget==e?e.style.display="none":e.parentNode.removeChild(e),t}for(var a=n.view,u=n.viewFrom,c=0;c<a.length;c++){var h=a[c];if(h.hidden);else if(h.node&&h.node.parentNode==o){for(;l!=h.node;)l=s(l);var f=i&&null!=e&&e<=u&&h.lineNumber;h.changes&&(-1<B(h.changes,"gutter")&&(f=!1),ar(r,h,u,t)),f&&(M(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(Je(r.options,u)))),l=h.node.nextSibling}else{var d=(v=u,m=t,void 0,y=cr(p=r,g=h),g.text=g.node=y.pre,y.bgClass&&(g.bgClass=y.bgClass),y.textClass&&(g.textClass=y.textClass),fr(p,g),dr(p,g,v,m),gr(p,g,m),g.node);o.insertBefore(d,l)}u+=h.size}var p,g,v,m,y;for(;l;)l=s(l)}(e,r.updateLineNumbers,t.dims),4<f&&(r.lineDiv.style.display=""),r.renderedView=r.view,function(e){if(e&&e.activeElt&&e.activeElt!=W()&&(e.activeElt.focus(),e.anchorNode&&D(document.body,e.anchorNode)&&D(document.body,e.focusNode))){var t=window.getSelection(),r=document.createRange();r.setEnd(e.anchorNode,e.anchorOffset),r.collapse(!1),t.removeAllRanges(),t.addRange(r),t.extend(e.focusNode,e.focusOffset)}}(d),M(r.cursorDiv),M(r.selectionDiv),r.gutters.style.height=r.sizer.style.minHeight=0,h&&(r.lastWrapHeight=t.wrapperHeight,r.lastWrapWidth=t.wrapperWidth,Qn(e,400)),!(r.updateLineNumbers=null)}function ri(e,t){for(var r=t.viewport,n=!0;(n&&e.options.lineWrapping&&t.oldDisplayWidth!=Lr(e)||(r&&null!=r.top&&(r={top:Math.min(e.doc.height+xr(e.display)-kr(e),r.top)}),t.visible=Ln(e.display,e.doc,r),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&ti(e,t);n=!1){Cn(e);var i=Fn(e);fn(e),In(e,i),oi(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function ni(e,t){var r=new ei(e,t);if(ti(e,r)){Cn(e),ri(e,r);var n=Fn(e);fn(e),In(e,n),oi(e,n),r.finish()}}function ii(e){var t=e.gutters.offsetWidth;e.sizer.style.marginLeft=t+"px"}function oi(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Sr(e)+"px"}function li(e){var t=e.display,r=t.view;if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=tn(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",l=0;l<r.length;l++)if(!r[l].hidden){e.options.fixedGutter&&(r[l].gutter&&(r[l].gutter.style.left=o),r[l].gutterBackground&&(r[l].gutterBackground.style.left=o));var s=r[l].alignable;if(s)for(var a=0;a<s.length;a++)s[a].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function si(e){if(!e.options.lineNumbers)return!1;var t=e.doc,r=Je(e.options,t.first+t.size-1),n=e.display;if(r.length==n.lineNumChars)return!1;var i=n.measure.appendChild(A("div",[A("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,l=i.offsetWidth-o;return n.lineGutter.style.width="",n.lineNumInnerWidth=Math.max(o,n.lineGutter.offsetWidth-l)+1,n.lineNumWidth=n.lineNumInnerWidth+l,n.lineNumChars=n.lineNumInnerWidth?r.length:-1,n.lineGutter.style.width=n.lineNumWidth+"px",ii(e.display),!0}function ai(e,t){for(var r=[],n=!1,i=0;i<e.length;i++){var o=e[i],l=null;if("string"!=typeof o&&(l=o.style,o=o.className),"CodeMirror-linenumbers"==o){if(!t)continue;n=!0}r.push({className:o,style:l})}return t&&!n&&r.push({className:"CodeMirror-linenumbers",style:null}),r}function ui(e){var t=e.gutters,r=e.gutterSpecs;M(t),e.lineGutter=null;for(var n=0;n<r.length;++n){var i=r[n],o=i.className,l=i.style,s=t.appendChild(A("div",null,"CodeMirror-gutter "+o));l&&(s.style.cssText=l),"CodeMirror-linenumbers"==o&&((e.lineGutter=s).style.width=(e.lineNumWidth||1)+"px")}t.style.display=r.length?"":"none",ii(e)}function ci(e){ui(e.display),sn(e),li(e)}function hi(e,t,r,n){var i=this;this.input=r,i.scrollbarFiller=A("div",null,"CodeMirror-scrollbar-filler"),i.scrollbarFiller.setAttribute("cm-not-content","true"),i.gutterFiller=A("div",null,"CodeMirror-gutter-filler"),i.gutterFiller.setAttribute("cm-not-content","true"),i.lineDiv=O("div",null,"CodeMirror-code"),i.selectionDiv=A("div",null,null,"position: relative; z-index: 1"),i.cursorDiv=A("div",null,"CodeMirror-cursors"),i.measure=A("div",null,"CodeMirror-measure"),i.lineMeasure=A("div",null,"CodeMirror-measure"),i.lineSpace=O("div",[i.measure,i.lineMeasure,i.selectionDiv,i.cursorDiv,i.lineDiv],null,"position: relative; outline: none");var o=O("div",[i.lineSpace],"CodeMirror-lines");i.mover=A("div",[o],null,"position: relative"),i.sizer=A("div",[i.mover],"CodeMirror-sizer"),i.sizerWidth=null,i.heightForcer=A("div",null,null,"position: absolute; height: "+G+"px; width: 1px;"),i.gutters=A("div",null,"CodeMirror-gutters"),i.lineGutter=null,i.scroller=A("div",[i.sizer,i.heightForcer,i.gutters],"CodeMirror-scroll"),i.scroller.setAttribute("tabIndex","-1"),i.wrapper=A("div",[i.scrollbarFiller,i.gutterFiller,i.scroller],"CodeMirror"),x&&C<8&&(i.gutters.style.zIndex=-1,i.scroller.style.paddingRight=0),b||g&&f||(i.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(i.wrapper):e(i.wrapper)),i.viewFrom=i.viewTo=t.first,i.reportedViewFrom=i.reportedViewTo=t.first,i.view=[],i.renderedView=null,i.externalMeasured=null,i.viewOffset=0,i.lastWrapHeight=i.lastWrapWidth=0,i.updateLineNumbers=null,i.nativeBarWidth=i.barHeight=i.barWidth=0,i.scrollbarsClipped=!1,i.lineNumWidth=i.lineNumInnerWidth=i.lineNumChars=null,i.alignWidgets=!1,i.cachedCharWidth=i.cachedTextHeight=i.cachedPaddingH=null,i.maxLine=null,i.maxLineLength=0,i.maxLineChanged=!1,i.wheelDX=i.wheelDY=i.wheelStartX=i.wheelStartY=null,i.shift=!1,i.selForContextMenu=null,i.activeTouch=null,i.gutterSpecs=ai(n.gutters,n.lineNumbers),ui(i),r.init(i)}ei.prototype.signal=function(e,t){ye(e,t)&&this.events.push(arguments)},ei.prototype.finish=function(){for(var e=0;e<this.events.length;e++)ge.apply(null,this.events[e])};var fi=0,di=null;function pi(e){var t=e.wheelDeltaX,r=e.wheelDeltaY;return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}function gi(e){var t=pi(e);return t.x*=di,t.y*=di,t}function vi(e,t){var r=pi(t),n=r.x,i=r.y,o=e.display,l=o.scroller,s=l.scrollWidth>l.clientWidth,a=l.scrollHeight>l.clientHeight;if(n&&s||i&&a){if(i&&w&&b)e:for(var u=t.target,c=o.view;u!=l;u=u.parentNode)for(var h=0;h<c.length;h++)if(c[h].node==u){e.display.currentWheelTarget=u;break e}if(n&&!g&&!v&&null!=di)return i&&a&&Dn(e,Math.max(0,l.scrollTop+i*di)),Hn(e,Math.max(0,l.scrollLeft+n*di)),(!i||i&&a)&&we(t),void(o.wheelStartX=null);if(i&&null!=di){var f=i*di,d=e.doc.scrollTop,p=d+o.wrapper.clientHeight;f<0?d=Math.max(0,d+f-50):p=Math.min(e.doc.height,p+f+50),ni(e,{top:d,bottom:p})}fi<20&&(null==o.wheelStartX?(o.wheelStartX=l.scrollLeft,o.wheelStartY=l.scrollTop,o.wheelDX=n,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=l.scrollLeft-o.wheelStartX,t=l.scrollTop-o.wheelStartY,r=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX;o.wheelStartX=o.wheelStartY=null,r&&(di=(di*fi+r)/(fi+1),++fi)}},200)):(o.wheelDX+=n,o.wheelDY+=i))}}x?di=-.53:g?di=15:l?di=-.7:a&&(di=-1/3);var mi=function(e,t){this.ranges=e,this.primIndex=t};mi.prototype.primary=function(){return this.ranges[this.primIndex]},mi.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var t=0;t<this.ranges.length;t++){var r=this.ranges[t],n=e.ranges[t];if(!rt(r.anchor,n.anchor)||!rt(r.head,n.head))return!1}return!0},mi.prototype.deepCopy=function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new yi(nt(this.ranges[t].anchor),nt(this.ranges[t].head));return new mi(e,this.primIndex)},mi.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},mi.prototype.contains=function(e,t){t||(t=e);for(var r=0;r<this.ranges.length;r++){var n=this.ranges[r];if(0<=tt(t,n.from())&&tt(e,n.to())<=0)return r}return-1};var yi=function(e,t){this.anchor=e,this.head=t};function bi(e,t,r){var n=e&&e.options.selectionsMayTouch,i=t[r];t.sort(function(e,t){return tt(e.from(),t.from())}),r=B(t,i);for(var o=1;o<t.length;o++){var l=t[o],s=t[o-1],a=tt(s.to(),l.from());if(n&&!l.empty()?0<a:0<=a){var u=ot(s.from(),l.from()),c=it(s.to(),l.to()),h=s.empty()?l.from()==l.head:s.from()==s.head;o<=r&&--r,t.splice(--o,2,new yi(h?c:u,h?u:c))}}return new mi(t,r)}function wi(e,t){return new mi([new yi(e,t||e)],0)}function xi(e){return e.text?et(e.from.line+e.text.length-1,$(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function Ci(e,t){if(tt(e,t.from)<0)return e;if(tt(e,t.to)<=0)return xi(t);var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch;return e.line==t.to.line&&(n+=xi(t).ch-t.to.ch),et(r,n)}function Si(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n];r.push(new yi(Ci(i.anchor,t),Ci(i.head,t)))}return bi(e.cm,r,e.sel.primIndex)}function Li(e,t,r){return e.line==t.line?et(r.line,e.ch-t.ch+r.ch):et(r.line+(e.line-t.line),e.ch)}function ki(e){e.doc.mode=Re(e.options,e.doc.modeOption),Ti(e)}function Ti(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,Qn(e,100),e.state.modeGen++,e.curOp&&sn(e)}function Mi(e,t){return 0==t.from.ch&&0==t.to.ch&&""==$(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Ni(e,n,t,i){function o(e){return t?t[e]:null}function r(e,t,r){!function(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),Nt(e),Ot(e,r);var i=n?n(e):1;i!=e.height&&$e(e,i)}(e,t,r,i),lr(e,"change",e,n)}function l(e,t){for(var r=[],n=e;n<t;++n)r.push(new Xt(u[n],o(n),i));return r}var s=n.from,a=n.to,u=n.text,c=Xe(e,s.line),h=Xe(e,a.line),f=$(u),d=o(u.length-1),p=a.line-s.line;if(n.full)e.insert(0,l(0,u.length)),e.remove(u.length,e.size-u.length);else if(Mi(e,n)){var g=l(0,u.length-1);r(h,h.text,d),p&&e.remove(s.line,p),g.length&&e.insert(s.line,g)}else if(c==h)if(1==u.length)r(c,c.text.slice(0,s.ch)+f+c.text.slice(a.ch),d);else{var v=l(1,u.length-1);v.push(new Xt(f+c.text.slice(a.ch),d,i)),r(c,c.text.slice(0,s.ch)+u[0],o(0)),e.insert(s.line+1,v)}else if(1==u.length)r(c,c.text.slice(0,s.ch)+u[0]+h.text.slice(a.ch),o(0)),e.remove(s.line+1,p);else{r(c,c.text.slice(0,s.ch)+u[0],o(0)),r(h,f+h.text.slice(a.ch),d);var m=l(1,u.length-1);1<p&&e.remove(s.line+1,p-1),e.insert(s.line+1,m)}lr(e,"change",e,n)}function Oi(e,s,a){!function e(t,r,n){if(t.linked)for(var i=0;i<t.linked.length;++i){var o=t.linked[i];if(o.doc!=r){var l=n&&o.sharedHist;a&&!l||(s(o.doc,l),e(o.doc,t,l))}}}(e,null,!0)}function Ai(e,t){if(t.cm)throw new Error("This document is already in use.");nn((e.doc=t).cm=e),ki(e),Di(e),e.options.lineWrapping||jt(e),e.options.mode=t.modeOption,sn(e)}function Di(e){("rtl"==e.doc.direction?H:T)(e.display.lineDiv,"CodeMirror-rtl")}function Wi(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function Hi(e,t){var r={from:nt(t.from),to:xi(t),text:Ye(e,t.from,t.to)};return zi(e,r,t.from.line,t.to.line+1),Oi(e,function(e){return zi(e,r,t.from.line,t.to.line+1)},!0),r}function Fi(e){for(;e.length;){if(!$(e).ranges)break;e.pop()}}function Pi(e,t,r,n){var i=e.history;i.undone.length=0;var o,l,s,a=+new Date;if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&i.lastModTime>a-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=(s=i).lastOp==n?(Fi(s.done),$(s.done)):s.done.length&&!$(s.done).ranges?$(s.done):1<s.done.length&&!s.done[s.done.length-2].ranges?(s.done.pop(),$(s.done)):void 0))l=$(o.changes),0==tt(t.from,t.to)&&0==tt(t.from,l.to)?l.to=xi(t):o.changes.push(Hi(e,t));else{var u=$(i.done);for(u&&u.ranges||Ii(e.sel,i.done),o={changes:[Hi(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=a,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,l||ge(e,"historyAdded")}function Ei(e,t,r,n){var i,o,l,s,a,u=e.history,c=n&&n.origin;r==u.lastSelOp||c&&u.lastSelOrigin==c&&(u.lastModTime==u.lastSelTime&&u.lastOrigin==c||(i=e,o=c,l=$(u.done),s=t,"*"==(a=o.charAt(0))||"+"==a&&l.ranges.length==s.ranges.length&&l.somethingSelected()==s.somethingSelected()&&new Date-i.history.lastSelTime<=(i.cm?i.cm.options.historyEventDelay:500)))?u.done[u.done.length-1]=t:Ii(t,u.done),u.lastSelTime=+new Date,u.lastSelOrigin=c,u.lastSelOp=r,n&&!1!==n.clearRedo&&Fi(u.undone)}function Ii(e,t){var r=$(t);r&&r.ranges&&r.equals(e)||t.push(e)}function zi(t,r,e,n){var i=r["spans_"+t.id],o=0;t.iter(Math.max(t.first,e),Math.min(t.first+t.size,n),function(e){e.markedSpans&&((i||(i=r["spans_"+t.id]={}))[o]=e.markedSpans),++o})}function Ri(e){if(!e)return null;for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r]);return t?t.length?t:null:e}function Bi(e,t){var r=function(e,t){var r=t["spans_"+e.id];if(!r)return null;for(var n=[],i=0;i<t.text.length;++i)n.push(Ri(r[i]));return n}(e,t),n=Tt(e,t);if(!r)return n;if(!n)return r;for(var i=0;i<r.length;++i){var o=r[i],l=n[i];if(o&&l)e:for(var s=0;s<l.length;++s){for(var a=l[s],u=0;u<o.length;++u)if(o[u].marker==a.marker)continue e;o.push(a)}else l&&(r[i]=l)}return r}function Gi(e,t,r){for(var n=[],i=0;i<e.length;++i){var o=e[i];if(o.ranges)n.push(r?mi.prototype.deepCopy.call(o):o);else{var l=o.changes,s=[];n.push({changes:s});for(var a=0;a<l.length;++a){var u=l[a],c=void 0;if(s.push({from:u.from,to:u.to,text:u.text}),t)for(var h in u)(c=h.match(/^spans_(\d+)$/))&&-1<B(t,Number(c[1]))&&($(s)[h]=u[h],delete u[h])}}}return n}function Ui(e,t,r,n){if(n){var i=e.anchor;if(r){var o=tt(t,i)<0;o!=tt(r,i)<0?(i=t,t=r):o!=tt(t,r)<0&&(t=r)}return new yi(i,t)}return new yi(r||t,t)}function Vi(e,t,r,n,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),_i(e,new mi([Ui(e.sel.primary(),t,r,i)],0),n)}function Ki(e,t,r){for(var n=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)n[o]=Ui(e.sel.ranges[o],t[o],null,i);_i(e,bi(e.cm,n,e.sel.primIndex),r)}function ji(e,t,r,n){var i=e.sel.ranges.slice(0);i[t]=r,_i(e,bi(e.cm,i,e.sel.primIndex),n)}function Xi(e,t,r,n){_i(e,wi(t,r),n)}function Yi(e,t,r){var n=e.history.done,i=$(n);i&&i.ranges?$i(e,n[n.length-1]=t,r):_i(e,t,r)}function _i(e,t,r){$i(e,t,r),Ei(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function $i(e,t,r){var n,i,o,l;(ye(e,"beforeSelectionChange")||e.cm&&ye(e.cm,"beforeSelectionChange"))&&(n=e,o=r,l={ranges:(i=t).ranges,update:function(e){this.ranges=[];for(var t=0;t<e.length;t++)this.ranges[t]=new yi(st(n,e[t].anchor),st(n,e[t].head))},origin:o&&o.origin},ge(n,"beforeSelectionChange",n,l),n.cm&&ge(n.cm,"beforeSelectionChange",n.cm,l),t=l.ranges!=i.ranges?bi(n.cm,l.ranges,l.ranges.length-1):i),qi(e,Qi(e,t,r&&r.bias||(tt(t.primary().head,e.sel.primary().head)<0?-1:1),!0)),r&&!1===r.scroll||!e.cm||Mn(e.cm)}function qi(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,me(e.cm)),lr(e,"cursorActivity",e))}function Zi(e){qi(e,Qi(e,e.sel,null,!1))}function Qi(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var l=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],a=eo(e,l.anchor,s&&s.anchor,r,n),u=eo(e,l.head,s&&s.head,r,n);(i||a!=l.anchor||u!=l.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new yi(a,u))}return i?bi(e.cm,i,t.primIndex):t}function Ji(e,t,r,n,i){var o=Xe(e,t.line);if(o.markedSpans)for(var l=0;l<o.markedSpans.length;++l){var s=o.markedSpans[l],a=s.marker;if((null==s.from||(a.inclusiveLeft?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(a.inclusiveRight?s.to>=t.ch:s.to>t.ch))){if(i&&(ge(a,"beforeCursorEnter"),a.explicitlyCleared)){if(o.markedSpans){--l;continue}break}if(!a.atomic)continue;if(r){var u=a.find(n<0?1:-1),c=void 0;if((n<0?a.inclusiveRight:a.inclusiveLeft)&&(u=to(e,u,-n,u&&u.line==t.line?o:null)),u&&u.line==t.line&&(c=tt(u,r))&&(n<0?c<0:0<c))return Ji(e,u,t,n,i)}var h=a.find(n<0?-1:1);return(n<0?a.inclusiveLeft:a.inclusiveRight)&&(h=to(e,h,n,h.line==t.line?o:null)),h?Ji(e,h,t,n,i):null}}return t}function eo(e,t,r,n,i){var o=n||1,l=Ji(e,t,r,o,i)||!i&&Ji(e,t,r,o,!0)||Ji(e,t,r,-o,i)||!i&&Ji(e,t,r,-o,!0);return l||(e.cantEdit=!0,et(e.first,0))}function to(e,t,r,n){return r<0&&0==t.ch?t.line>e.first?st(e,et(t.line-1)):null:0<r&&t.ch==(n||Xe(e,t.line)).text.length?t.line<e.first+e.size-1?et(t.line+1,0):null:new et(t.line,t.ch+r)}function ro(e){e.setSelection(et(e.firstLine(),0),et(e.lastLine()),V)}function no(i,e,t){var o={canceled:!1,from:e.from,to:e.to,text:e.text,origin:e.origin,cancel:function(){return o.canceled=!0}};return t&&(o.update=function(e,t,r,n){e&&(o.from=st(i,e)),t&&(o.to=st(i,t)),r&&(o.text=r),void 0!==n&&(o.origin=n)}),ge(i,"beforeChange",i,o),i.cm&&ge(i.cm,"beforeChange",i.cm,o),o.canceled?(i.cm&&(i.cm.curOp.updateInput=2),null):{from:o.from,to:o.to,text:o.text,origin:o.origin}}function io(e,t,r){if(e.cm){if(!e.cm.curOp)return $n(e.cm,io)(e,t,r);if(e.cm.state.suppressEdits)return}if(!(ye(e,"beforeChange")||e.cm&&ye(e.cm,"beforeChange"))||(t=no(e,t,!0))){var n=xt&&!r&&function(e,t,r){var n=null;if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker;!r.readOnly||n&&-1!=B(n,r)||(n||(n=[])).push(r)}}),!n)return null;for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var l=n[o],s=l.find(0),a=0;a<i.length;++a){var u=i[a];if(!(tt(u.to,s.from)<0||0<tt(u.from,s.to))){var c=[a,1],h=tt(u.from,s.from),f=tt(u.to,s.to);(h<0||!l.inclusiveLeft&&!h)&&c.push({from:u.from,to:s.from}),(0<f||!l.inclusiveRight&&!f)&&c.push({from:s.to,to:u.to}),i.splice.apply(i,c),a+=c.length-3}}return i}(e,t.from,t.to);if(n)for(var i=n.length-1;0<=i;--i)oo(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text,origin:t.origin});else oo(e,t)}}function oo(e,r){if(1!=r.text.length||""!=r.text[0]||0!=tt(r.from,r.to)){var t=Si(e,r);Pi(e,r,t,e.cm?e.cm.curOp.id:NaN),ao(e,r,t,Tt(e,r));var n=[];Oi(e,function(e,t){t||-1!=B(n,e.history)||(fo(e.history,r),n.push(e.history)),ao(e,r,null,Tt(e,r))})}}function lo(i,o,e){var t=i.cm&&i.cm.state.suppressEdits;if(!t||e){for(var l,r=i.history,n=i.sel,s="undo"==o?r.done:r.undone,a="undo"==o?r.undone:r.done,u=0;u<s.length&&(l=s[u],e?!l.ranges||l.equals(i.sel):l.ranges);u++);if(u!=s.length){for(r.lastOrigin=r.lastSelOrigin=null;;){if(!(l=s.pop()).ranges){if(t)return void s.push(l);break}if(Ii(l,a),e&&!l.equals(i.sel))return void _i(i,l,{clearRedo:!1});n=l}var c=[];Ii(n,a),a.push({changes:c,generation:r.generation}),r.generation=l.generation||++r.maxGeneration;for(var h=ye(i,"beforeChange")||i.cm&&ye(i.cm,"beforeChange"),f=function(e){var r=l.changes[e];if(r.origin=o,h&&!no(i,r,!1))return s.length=0,{};c.push(Hi(i,r));var t=e?Si(i,r):$(s);ao(i,r,t,Bi(i,r)),!e&&i.cm&&i.cm.scrollIntoView({from:r.from,to:xi(r)});var n=[];Oi(i,function(e,t){t||-1!=B(n,e.history)||(fo(e.history,r),n.push(e.history)),ao(e,r,null,Bi(e,r))})},d=l.changes.length-1;0<=d;--d){var p=f(d);if(p)return p.v}}}}function so(e,t){if(0!=t&&(e.first+=t,e.sel=new mi(q(e.sel.ranges,function(e){return new yi(et(e.anchor.line+t,e.anchor.ch),et(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){sn(e.cm,e.first,e.first-t,t);for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)an(e.cm,n,"gutter")}}function ao(e,t,r,n){if(e.cm&&!e.cm.curOp)return $n(e.cm,ao)(e,t,r,n);if(t.to.line<e.first)so(e,t.text.length-1-(t.to.line-t.from.line));else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line);so(e,i),t={from:et(e.first,0),to:et(t.to.line+i,t.to.ch),text:[$(t.text)],origin:t.origin}}var o=e.lastLine();t.to.line>o&&(t={from:t.from,to:et(o,Xe(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=Ye(e,t.from,t.to),r||(r=Si(e,t)),e.cm?function(e,t,r){var n=e.doc,i=e.display,o=t.from,l=t.to,s=!1,a=o.line;e.options.lineWrapping||(a=qe(zt(Xe(n,o.line))),n.iter(a,l.line+1,function(e){if(e==i.maxLine)return s=!0}));-1<n.sel.contains(t.from,t.to)&&me(e);Ni(n,t,r,rn(e)),e.options.lineWrapping||(n.iter(a,o.line+t.text.length,function(e){var t=Kt(e);t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)}),s&&(e.curOp.updateMaxLine=!0));(function(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var r=e.first,n=t-1;r<n;n--){var i=Xe(e,n).stateAfter;if(i&&(!(i instanceof ut)||n+i.lookAhead<t)){r=n+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,r)}})(n,o.line),Qn(e,400);var u=t.text.length-(l.line-o.line)-1;t.full?sn(e):o.line!=l.line||1!=t.text.length||Mi(e.doc,t)?sn(e,o.line,l.line+1,u):an(e,o.line,"text");var c=ye(e,"changes"),h=ye(e,"change");if(h||c){var f={from:o,to:l,text:t.text,removed:t.removed,origin:t.origin};h&&lr(e,"change",e,f),c&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(f)}e.display.selForContextMenu=null}(e.cm,t,n):Ni(e,t,n),$i(e,r,V)}}function uo(e,t,r,n,i){var o;n||(n=r),tt(n,r)<0&&(r=(o=[n,r])[0],n=o[1]),"string"==typeof t&&(t=e.splitLines(t)),io(e,{from:r,to:n,text:t,origin:i})}function co(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function ho(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],l=!0;if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0);for(var s=0;s<o.ranges.length;s++)co(o.ranges[s].anchor,t,r,n),co(o.ranges[s].head,t,r,n)}else{for(var a=0;a<o.changes.length;++a){var u=o.changes[a];if(r<u.from.line)u.from=et(u.from.line+n,u.from.ch),u.to=et(u.to.line+n,u.to.ch);else if(t<=u.to.line){l=!1;break}}l||(e.splice(0,i+1),i=0)}}}function fo(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1;ho(e.done,r,n,i),ho(e.undone,r,n,i)}function po(e,t,r,n){var i=t,o=t;return"number"==typeof t?o=Xe(e,lt(e,t)):i=qe(t),null==i?null:(n(o,i)&&e.cm&&an(e.cm,i,r),o)}function go(e){this.lines=e,this.parent=null;for(var t=0,r=0;r<e.length;++r)e[r].parent=this,t+=e[r].height;this.height=t}function vo(e){this.children=e;for(var t=0,r=0,n=0;n<e.length;++n){var i=e[n];t+=i.chunkSize(),r+=i.height,i.parent=this}this.size=t,this.height=r,this.parent=null}yi.prototype.from=function(){return ot(this.anchor,this.head)},yi.prototype.to=function(){return it(this.anchor,this.head)},yi.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},go.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r,n=e,i=e+t;n<i;++n){var o=this.lines[n];this.height-=o.height,(r=o).parent=null,Nt(r),lr(o,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,r){this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e));for(var n=0;n<t.length;++n)t[n].parent=this},iterN:function(e,t,r){for(var n=e+t;e<n;++e)if(r(this.lines[e]))return!0}},vo.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t;for(var r=0;r<this.children.length;++r){var n=this.children[r],i=n.chunkSize();if(e<i){var o=Math.min(t,i-e),l=n.height;if(n.removeInner(e,o),this.height-=l-n.height,i==o&&(this.children.splice(r--,1),n.parent=null),0==(t-=o))break;e=0}else e-=i}if(this.size-t<25&&(1<this.children.length||!(this.children[0]instanceof go))){var s=[];this.collapse(s),this.children=[new go(s)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,r){this.size+=t.length,this.height+=r;for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize();if(e<=o){if(i.insertInner(e,t,r),i.lines&&50<i.lines.length){for(var l=i.lines.length%25+25,s=l;s<i.lines.length;){var a=new go(i.lines.slice(s,s+=25));i.height-=a.height,this.children.splice(++n,0,a),a.parent=this}i.lines=i.lines.slice(0,l),this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var t=new vo(e.children.splice(e.children.length-5,5));if(e.parent){e.size-=t.size,e.height-=t.height;var r=B(e.parent.children,e);e.parent.children.splice(r+1,0,t)}else{var n=new vo(e.children);(n.parent=e).children=[n,t],e=n}t.parent=e.parent}while(10<e.children.length);e.parent.maybeSpill()}},iterN:function(e,t,r){for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize();if(e<o){var l=Math.min(t,o-e);if(i.iterN(e,l,r))return!0;if(0==(t-=l))break;e=0}else e-=o}}};var mo=function(e,t,r){if(r)for(var n in r)r.hasOwnProperty(n)&&(this[n]=r[n]);this.doc=e,this.node=t};function yo(e,t,r){Vt(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Tn(e,r)}mo.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,r=this.line,n=qe(r);if(null!=n&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1);t.length||(r.widgets=null);var o=yr(this);$e(r,Math.max(0,r.height-o)),e&&(_n(e,function(){yo(e,r,-o),an(e,n,"widget")}),lr(e,"lineWidgetCleared",e,this,n))}},mo.prototype.changed=function(){var e=this,t=this.height,r=this.doc.cm,n=this.line;this.height=null;var i=yr(this)-t;i&&(Gt(this.doc,n)||$e(n,n.height+i),r&&_n(r,function(){r.curOp.forceUpdate=!0,yo(r,n,i),lr(r,"lineWidgetChanged",r,e,qe(n))}))},be(mo);var bo=0,wo=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++bo};function xo(t,n,i,e,r){if(e&&e.shared)return function(e,r,n,i,o){(i=I(i)).shared=!1;var l=[xo(e,r,n,i,o)],s=l[0],a=i.widgetNode;return Oi(e,function(e){a&&(i.widgetNode=a.cloneNode(!0)),l.push(xo(e,st(e,r),st(e,n),i,o));for(var t=0;t<e.linked.length;++t)if(e.linked[t].isParent)return;s=$(l)}),new Co(l,s)}(t,n,i,e,r);if(t.cm&&!t.cm.curOp)return $n(t.cm,xo)(t,n,i,e,r);var o=new wo(t,r),l=tt(n,i);if(e&&I(e,o,!1),0<l||0==l&&!1!==o.clearWhenEmpty)return o;if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=O("span",[o.replacedWith],"CodeMirror-widget"),e.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),e.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(It(t,n.line,n,i,o)||n.line!=i.line&&It(t,i.line,n,i,o))throw new Error("Inserting collapsed marker partially overlapping an existing one");Ct=!0}o.addToHistory&&Pi(t,{from:n,to:i,origin:"markText"},t.sel,NaN);var s,a=n.line,u=t.cm;if(t.iter(a,i.line+1,function(e){var t,r;u&&o.collapsed&&!u.options.lineWrapping&&zt(e)==u.display.maxLine&&(s=!0),o.collapsed&&a!=n.line&&$e(e,0),t=e,r=new St(o,a==n.line?n.ch:null,a==i.line?i.ch:null),t.markedSpans=t.markedSpans?t.markedSpans.concat([r]):[r],r.marker.attachLine(t),++a}),o.collapsed&&t.iter(n.line,i.line+1,function(e){Gt(t,e)&&$e(e,0)}),o.clearOnEnter&&fe(o,"beforeCursorEnter",function(){return o.clear()}),o.readOnly&&(xt=!0,(t.history.done.length||t.history.undone.length)&&t.clearHistory()),o.collapsed&&(o.id=++bo,o.atomic=!0),u){if(s&&(u.curOp.updateMaxLine=!0),o.collapsed)sn(u,n.line,i.line+1);else if(o.className||o.startStyle||o.endStyle||o.css||o.attributes||o.title)for(var c=n.line;c<=i.line;c++)an(u,c,"text");o.atomic&&Zi(u.doc),lr(u,"markerAdded",u,o)}return o}wo.prototype.clear=function(){var e=this;if(!this.explicitlyCleared){var t=this.doc.cm,r=t&&!t.curOp;if(r&&Un(t),ye(this,"clear")){var n=this.find();n&&lr(this,"clear",n.from,n.to)}for(var i=null,o=null,l=0;l<this.lines.length;++l){var s=e.lines[l],a=Lt(s.markedSpans,e);t&&!e.collapsed?an(t,qe(s),"text"):t&&(null!=a.to&&(o=qe(s)),null!=a.from&&(i=qe(s))),s.markedSpans=kt(s.markedSpans,a),null==a.from&&e.collapsed&&!Gt(e.doc,s)&&t&&$e(s,Qr(t.display))}if(t&&this.collapsed&&!t.options.lineWrapping)for(var u=0;u<this.lines.length;++u){var c=zt(e.lines[u]),h=Kt(c);h>t.display.maxLineLength&&(t.display.maxLine=c,t.display.maxLineLength=h,t.display.maxLineChanged=!0)}null!=i&&t&&this.collapsed&&sn(t,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,t&&Zi(t.doc)),t&&lr(t,"markerCleared",t,this,i,o),r&&Vn(t),this.parent&&this.parent.clear()}},wo.prototype.find=function(e,t){var r,n;null==e&&"bookmark"==this.type&&(e=1);for(var i=0;i<this.lines.length;++i){var o=this.lines[i],l=Lt(o.markedSpans,this);if(null!=l.from&&(r=et(t?o:qe(o),l.from),-1==e))return r;if(null!=l.to&&(n=et(t?o:qe(o),l.to),1==e))return n}return r&&{from:r,to:n}},wo.prototype.changed=function(){var o=this,l=this.find(-1,!0),s=this,a=this.doc.cm;l&&a&&_n(a,function(){var e=l.line,t=qe(l.line),r=Nr(a,t);if(r&&(Pr(r),a.curOp.selectionChanged=a.curOp.forceUpdate=!0),a.curOp.updateMaxLine=!0,!Gt(s.doc,e)&&null!=s.height){var n=s.height;s.height=null;var i=yr(s)-n;i&&$e(e,e.height+i)}lr(a,"markerChanged",a,o)})},wo.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;t.maybeHiddenMarkers&&-1!=B(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},wo.prototype.detachLine=function(e){if(this.lines.splice(B(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},be(wo);var Co=function(e,t){this.markers=e,this.primary=t;for(var r=0;r<e.length;++r)e[r].parent=this};function So(e){return e.findMarks(et(e.first,0),e.clipPos(et(e.lastLine())),function(e){return e.parent})}function Lo(o){for(var e=function(e){var t=o[e],r=[t.primary.doc];Oi(t.primary.doc,function(e){return r.push(e)});for(var n=0;n<t.markers.length;n++){var i=t.markers[n];-1==B(r,i.doc)&&(i.parent=null,t.markers.splice(n--,1))}},t=0;t<o.length;t++)e(t)}Co.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();lr(this,"clear")}},Co.prototype.find=function(e,t){return this.primary.find(e,t)},be(Co);var ko=0,To=function(e,t,r,n,i){if(!(this instanceof To))return new To(e,t,r,n,i);null==r&&(r=0),vo.call(this,[new go([new Xt("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=r;var o=et(r,0);this.sel=wi(o),this.history=new Wi(null),this.id=++ko,this.modeOption=t,this.lineSep=n,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Ni(this,{from:o,to:o,text:e}),_i(this,wi(o),V)};To.prototype=Q(vo.prototype,{constructor:To,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height;this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=_e(this,this.first,this.first+this.size);return!1===e?t:t.join(e||this.lineSeparator())},setValue:Zn(function(e){var t=et(this.first,0),r=this.first+this.size-1;io(this,{from:t,to:et(r,Xe(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&Nn(this.cm,0,0),_i(this,wi(t),V)}),replaceRange:function(e,t,r,n){uo(this,e,t=st(this,t),r=r?st(this,r):t,n)},getRange:function(e,t,r){var n=Ye(this,st(this,e),st(this,t));return!1===r?n:n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e);return t&&t.text},getLineHandle:function(e){if(Qe(this,e))return Xe(this,e)},getLineNumber:function(e){return qe(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=Xe(this,e)),zt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return st(this,e)},getCursor:function(e){var t=this.sel.primary();return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:Zn(function(e,t,r){Xi(this,st(this,"number"==typeof e?et(e,t||0):e),null,r)}),setSelection:Zn(function(e,t,r){Xi(this,st(this,e),st(this,t||e),r)}),extendSelection:Zn(function(e,t,r){Vi(this,st(this,e),t&&st(this,t),r)}),extendSelections:Zn(function(e,t){Ki(this,at(this,e),t)}),extendSelectionsBy:Zn(function(e,t){Ki(this,at(this,q(this.sel.ranges,e)),t)}),setSelections:Zn(function(e,t,r){if(e.length){for(var n=[],i=0;i<e.length;i++)n[i]=new yi(st(this,e[i].anchor),st(this,e[i].head));null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),_i(this,bi(this.cm,n,t),r)}}),addSelection:Zn(function(e,t,r){var n=this.sel.ranges.slice(0);n.push(new yi(st(this,e),st(this,t||e))),_i(this,bi(this.cm,n,n.length-1),r)}),getSelection:function(e){for(var t,r=this.sel.ranges,n=0;n<r.length;n++){var i=Ye(this,r[n].from(),r[n].to());t=t?t.concat(i):i}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],r=this.sel.ranges,n=0;n<r.length;n++){var i=Ye(this,r[n].from(),r[n].to());!1!==e&&(i=i.join(e||this.lineSeparator())),t[n]=i}return t},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e;this.replaceSelections(n,t,r||"+input")},replaceSelections:Zn(function(e,t,r){for(var n=[],i=this.sel,o=0;o<i.ranges.length;o++){var l=i.ranges[o];n[o]={from:l.from(),to:l.to(),text:this.splitLines(e[o]),origin:r}}for(var s=t&&"end"!=t&&function(e,t,r){for(var n=[],i=et(e.first,0),o=i,l=0;l<t.length;l++){var s=t[l],a=Li(s.from,i,o),u=Li(xi(s),i,o);if(i=s.to,o=u,"around"==r){var c=e.sel.ranges[l],h=tt(c.head,c.anchor)<0;n[l]=new yi(h?u:a,h?a:u)}else n[l]=new yi(a,a)}return new mi(n,e.sel.primIndex)}(this,n,t),a=n.length-1;0<=a;a--)io(this,n[a]);s?Yi(this,s):this.cm&&Mn(this.cm)}),undo:Zn(function(){lo(this,"undo")}),redo:Zn(function(){lo(this,"redo")}),undoSelection:Zn(function(){lo(this,"undo",!0)}),redoSelection:Zn(function(){lo(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t;for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++r;return{undo:t,redo:r}},clearHistory:function(){this.history=new Wi(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Gi(this.history.done),undone:Gi(this.history.undone)}},setHistory:function(e){var t=this.history=new Wi(this.history.maxGeneration);t.done=Gi(e.done.slice(0),null,!0),t.undone=Gi(e.undone.slice(0),null,!0)},setGutterMarker:Zn(function(e,r,n){return po(this,e,"gutter",function(e){var t=e.gutterMarkers||(e.gutterMarkers={});return!(t[r]=n)&&re(t)&&(e.gutterMarkers=null),!0})}),clearGutter:Zn(function(t){var r=this;this.iter(function(e){e.gutterMarkers&&e.gutterMarkers[t]&&po(r,e,"gutter",function(){return e.gutterMarkers[t]=null,re(e.gutterMarkers)&&(e.gutterMarkers=null),!0})})}),lineInfo:function(e){var t;if("number"==typeof e){if(!Qe(this,e))return null;if(!(e=Xe(this,t=e)))return null}else if(null==(t=qe(e)))return null;return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:Zn(function(e,r,n){return po(this,e,"gutter"==r?"gutter":"class",function(e){var t="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass";if(e[t]){if(L(n).test(e[t]))return!1;e[t]+=" "+n}else e[t]=n;return!0})}),removeLineClass:Zn(function(e,o,l){return po(this,e,"gutter"==o?"gutter":"class",function(e){var t="text"==o?"textClass":"background"==o?"bgClass":"gutter"==o?"gutterClass":"wrapClass",r=e[t];if(!r)return!1;if(null==l)e[t]=null;else{var n=r.match(L(l));if(!n)return!1;var i=n.index+n[0].length;e[t]=r.slice(0,n.index)+(n.index&&i!=r.length?" ":"")+r.slice(i)||null}return!0})}),addLineWidget:Zn(function(e,t,r){return i=e,o=new mo(n=this,t,r),(l=n.cm)&&o.noHScroll&&(l.display.alignWidgets=!0),po(n,i,"widget",function(e){var t=e.widgets||(e.widgets=[]);if(null==o.insertAt?t.push(o):t.splice(Math.min(t.length-1,Math.max(0,o.insertAt)),0,o),o.line=e,l&&!Gt(n,e)){var r=Vt(e)<n.scrollTop;$e(e,e.height+yr(o)),r&&Tn(l,o.height),l.curOp.forceUpdate=!0}return!0}),l&&lr(l,"lineWidgetAdded",l,o,"number"==typeof i?i:qe(i)),o;var n,i,o,l}),removeLineWidget:function(e){e.clear()},markText:function(e,t,r){return xo(this,st(this,e),st(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents};return xo(this,e=st(this,e),e,r,"bookmark")},findMarksAt:function(e){var t=[],r=Xe(this,(e=st(this,e)).line).markedSpans;if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(i,o,l){i=st(this,i),o=st(this,o);var s=[],a=i.line;return this.iter(i.line,o.line+1,function(e){var t=e.markedSpans;if(t)for(var r=0;r<t.length;r++){var n=t[r];null!=n.to&&a==i.line&&i.ch>=n.to||null==n.from&&a!=i.line||null!=n.from&&a==o.line&&n.from>=o.ch||l&&!l(n.marker)||s.push(n.marker.parent||n.marker)}++a}),s},getAllMarks:function(){var n=[];return this.iter(function(e){var t=e.markedSpans;if(t)for(var r=0;r<t.length;++r)null!=t[r].from&&n.push(t[r].marker)}),n},posFromIndex:function(r){var n,i=this.first,o=this.lineSeparator().length;return this.iter(function(e){var t=e.text.length+o;if(r<t)return n=r,!0;r-=t,++i}),st(this,et(i,n))},indexFromPos:function(e){var t=(e=st(this,e)).ch;if(e.line<this.first||e.ch<0)return 0;var r=this.lineSeparator().length;return this.iter(this.first,e.line,function(e){t+=e.text.length+r}),t},copy:function(e){var t=new To(_e(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={});var t=this.first,r=this.first+this.size;null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to);var n=new To(_e(this,t,r),e.mode||this.modeOption,t,this.lineSep,this.direction);return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),l=e.clipPos(i.to);if(tt(o,l)){var s=xo(e,o,l,n.primary,n.primary.type);n.markers.push(s),s.parent=n}}}(n,So(this)),n},unlinkDoc:function(e){if(e instanceof Cl&&(e=e.doc),this.linked)for(var t=0;t<this.linked.length;++t){if(this.linked[t].doc==e){this.linked.splice(t,1),e.unlinkDoc(this),Lo(So(this));break}}if(e.history==this.history){var r=[e.id];Oi(e,function(e){return r.push(e.id)},!0),e.history=new Wi(null),e.history.done=Gi(this.history.done,r),e.history.undone=Gi(this.history.undone,r)}},iterLinkedDocs:function(e){Oi(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):We(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:Zn(function(e){var t;("rtl"!=e&&(e="ltr"),e!=this.direction)&&(this.direction=e,this.iter(function(e){return e.order=null}),this.cm&&_n(t=this.cm,function(){Di(t),sn(t)}))})}),To.prototype.eachLine=To.prototype.iter;var Mo=0;function No(e){var i=this;if(Oo(i),!ve(i,e)&&!br(i.display,e)){we(e),x&&(Mo=+new Date);var o=on(i,e,!0),t=e.dataTransfer.files;if(o&&!i.isReadOnly())if(t&&t.length&&window.FileReader&&window.File)for(var l=t.length,s=Array(l),a=0,r=function(e,r){if(!i.options.allowDropFileTypes||-1!=B(i.options.allowDropFileTypes,e.type)){var n=new FileReader;n.onload=$n(i,function(){var e=n.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),s[r]=e,++a==l){var t={from:o=st(i.doc,o),to:o,text:i.doc.splitLines(s.join(i.doc.lineSeparator())),origin:"paste"};io(i.doc,t),Yi(i.doc,wi(o,xi(t)))}}),n.readAsText(e)}},n=0;n<l;++n)r(t[n],n);else{if(i.state.draggingText&&-1<i.doc.sel.contains(o))return i.state.draggingText(e),void setTimeout(function(){return i.display.input.focus()},20);try{var u=e.dataTransfer.getData("Text");if(u){var c;if(i.state.draggingText&&!i.state.draggingText.copy&&(c=i.listSelections()),$i(i.doc,wi(o,o)),c)for(var h=0;h<c.length;++h)uo(i.doc,"",c[h].anchor,c[h].head,"drag");i.replaceSelection(u,"around","paste"),i.display.input.focus()}}catch(e){}}}}function Oo(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Ao(t){if(document.getElementsByClassName){for(var e=document.getElementsByClassName("CodeMirror"),r=[],n=0;n<e.length;n++){var i=e[n].CodeMirror;i&&r.push(i)}r.length&&r[0].operation(function(){for(var e=0;e<r.length;e++)t(r[e])})}}var Do=!1;function Wo(){var e;Do||(fe(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,Ao(Ho)},100))}),fe(window,"blur",function(){return Ao(xn)}),Do=!0)}function Ho(e){var t=e.display;t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize()}for(var Fo={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Po=0;Po<10;Po++)Fo[Po+48]=Fo[Po+96]=String(Po);for(var Eo=65;Eo<=90;Eo++)Fo[Eo]=String.fromCharCode(Eo);for(var Io=1;Io<=12;Io++)Fo[Io+111]=Fo[Io+63235]="F"+Io;var zo={};function Ro(e){var t,r,n,i,o=e.split(/-(?!$)/);e=o[o.length-1];for(var l=0;l<o.length-1;l++){var s=o[l];if(/^(cmd|meta|m)$/i.test(s))i=!0;else if(/^a(lt)?$/i.test(s))t=!0;else if(/^(c|ctrl|control)$/i.test(s))r=!0;else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s);n=!0}}return t&&(e="Alt-"+e),r&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),n&&(e="Shift-"+e),e}function Bo(e){var t={};for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue;if("..."==n){delete e[r];continue}for(var i=q(r.split(" "),Ro),o=0;o<i.length;o++){var l=void 0,s=void 0;l=o==i.length-1?(s=i.join(" "),n):(s=i.slice(0,o+1).join(" "),"...");var a=t[s];if(a){if(a!=l)throw new Error("Inconsistent bindings for "+s)}else t[s]=l}delete e[r]}for(var u in t)e[u]=t[u];return e}function Go(e,t,r,n){var i=(t=jo(t)).call?t.call(e,n):t[e];if(!1===i)return"nothing";if("..."===i)return"multi";if(null!=i&&r(i))return"handled";if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return Go(e,t.fallthrough,r,n);for(var o=0;o<t.fallthrough.length;o++){var l=Go(e,t.fallthrough[o],r,n);if(l)return l}}}function Uo(e){var t="string"==typeof e?e:Fo[e.keyCode];return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function Vo(e,t,r){var n=e;return t.altKey&&"Alt"!=n&&(e="Alt-"+e),(y?t.metaKey:t.ctrlKey)&&"Ctrl"!=n&&(e="Ctrl-"+e),(y?t.ctrlKey:t.metaKey)&&"Cmd"!=n&&(e="Cmd-"+e),!r&&t.shiftKey&&"Shift"!=n&&(e="Shift-"+e),e}function Ko(e,t){if(v&&34==e.keyCode&&e.char)return!1;var r=Fo[e.keyCode];return null!=r&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(r=e.code),Vo(r,e,t))}function jo(e){return"string"==typeof e?zo[e]:e}function Xo(t,e){for(var r=t.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=e(r[i]);n.length&&tt(o.from,$(n).to)<=0;){var l=n.pop();if(tt(l.from,o.from)<0){o.from=l.from;break}}n.push(o)}_n(t,function(){for(var e=n.length-1;0<=e;e--)uo(t.doc,"",n[e].from,n[e].to,"+delete");Mn(t)})}function Yo(e,t,r){var n=oe(e.text,t+r,r);return n<0||n>e.text.length?null:n}function _o(e,t,r){var n=Yo(e,t.ch,r);return null==n?null:new et(t.line,n,r<0?"after":"before")}function $o(e,t,r,n,i){if(e){var o=ce(r,t.doc.direction);if(o){var l,s=i<0?$(o):o[0],a=i<0==(1==s.level)?"after":"before";if(0<s.level||"rtl"==t.doc.direction){var u=Or(t,r);l=i<0?r.text.length-1:0;var c=Ar(t,u,l).top;l=le(function(e){return Ar(t,u,e).top==c},i<0==(1==s.level)?s.from:s.to-1,l),"before"==a&&(l=Yo(r,l,1))}else l=i<0?s.to:s.from;return new et(n,l,a)}}return new et(n,i<0?r.text.length:0,i<0?"before":"after")}zo.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},zo.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},zo.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},zo.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},zo.default=w?zo.macDefault:zo.pcDefault;var qo={selectAll:ro,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),V)},killLine:function(r){return Xo(r,function(e){if(e.empty()){var t=Xe(r.doc,e.head.line).text.length;return e.head.ch==t&&e.head.line<r.lastLine()?{from:e.head,to:et(e.head.line+1,0)}:{from:e.head,to:et(e.head.line,t)}}return{from:e.from(),to:e.to()}})},deleteLine:function(t){return Xo(t,function(e){return{from:et(e.from().line,0),to:st(t.doc,et(e.to().line+1,0))}})},delLineLeft:function(e){return Xo(e,function(e){return{from:et(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(r){return Xo(r,function(e){var t=r.charCoords(e.head,"div").top+5;return{from:r.coordsChar({left:0,top:t},"div"),to:e.from()}})},delWrappedLineRight:function(n){return Xo(n,function(e){var t=n.charCoords(e.head,"div").top+5,r=n.coordsChar({left:n.display.lineDiv.offsetWidth+100,top:t},"div");return{from:e.from(),to:r}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(et(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(et(e.lastLine()))},goLineStart:function(t){return t.extendSelectionsBy(function(e){return Zo(t,e.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(t){return t.extendSelectionsBy(function(e){return Qo(t,e.head)},{origin:"+move",bias:1})},goLineEnd:function(t){return t.extendSelectionsBy(function(e){return function(e,t){var r=Xe(e.doc,t),n=function(e){for(var t;t=Pt(e);)e=t.find(1,!0).line;return e}(r);n!=r&&(t=qe(n));return $o(!0,e,r,t,-1)}(t,e.head.line)},{origin:"+move",bias:-1})},goLineRight:function(r){return r.extendSelectionsBy(function(e){var t=r.cursorCoords(e.head,"div").top+5;return r.coordsChar({left:r.display.lineDiv.offsetWidth+100,top:t},"div")},j)},goLineLeft:function(r){return r.extendSelectionsBy(function(e){var t=r.cursorCoords(e.head,"div").top+5;return r.coordsChar({left:0,top:t},"div")},j)},goLineLeftSmart:function(n){return n.extendSelectionsBy(function(e){var t=n.cursorCoords(e.head,"div").top+5,r=n.coordsChar({left:0,top:t},"div");return r.ch<n.getLine(r.line).search(/\S/)?Qo(n,e.head):r},j)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),l=z(e.getLine(o.line),o.ch,n);t.push(_(n-l%n))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(l){return _n(l,function(){for(var e=l.listSelections(),t=[],r=0;r<e.length;r++)if(e[r].empty()){var n=e[r].head,i=Xe(l.doc,n.line).text;if(i)if(n.ch==i.length&&(n=new et(n.line,n.ch-1)),0<n.ch)n=new et(n.line,n.ch+1),l.replaceRange(i.charAt(n.ch-1)+i.charAt(n.ch-2),et(n.line,n.ch-2),n,"+transpose");else if(n.line>l.doc.first){var o=Xe(l.doc,n.line-1).text;o&&(n=new et(n.line,1),l.replaceRange(i.charAt(0)+l.doc.lineSeparator()+o.charAt(o.length-1),et(n.line-1,o.length-1),n,"+transpose"))}t.push(new yi(n,n))}l.setSelections(t)})},newlineAndIndent:function(n){return _n(n,function(){for(var e=n.listSelections(),t=e.length-1;0<=t;t--)n.replaceRange(n.doc.lineSeparator(),e[t].anchor,e[t].head,"+input");e=n.listSelections();for(var r=0;r<e.length;r++)n.indentLine(e[r].from().line,null,!0);Mn(n)})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function Zo(e,t){var r=Xe(e.doc,t),n=zt(r);return n!=r&&(t=qe(n)),$o(!0,e,n,t,1)}function Qo(e,t){var r=Zo(e,t.line),n=Xe(e.doc,r.line),i=ce(n,e.doc.direction);if(i&&0!=i[0].level)return r;var o=Math.max(0,n.text.search(/\S/)),l=t.line==r.line&&t.ch<=o&&t.ch;return et(r.line,l?0:o,r.sticky)}function Jo(e,t,r){if("string"==typeof t&&!(t=qo[t]))return!1;e.display.input.ensurePolled();var n=e.display.shift,i=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=U}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}var el=new R;function tl(e,t,r,n){var i=e.state.keySeq;if(i){if(Uo(t))return"handled";if(/\'$/.test(t)?e.state.keySeq=null:el.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),rl(e,i+" "+t,r,n))return!0}return rl(e,t,r,n)}function rl(e,t,r,n){var i=function(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=Go(t,e.state.keyMaps[n],r,e);if(i)return i}return e.options.extraKeys&&Go(t,e.options.extraKeys,r,e)||Go(t,e.options.keyMap,r,e)}(e,t,n);return"multi"==i&&(e.state.keySeq=t),"handled"==i&&lr(e,"keyHandled",e,t,r),"handled"!=i&&"multi"!=i||(we(r),mn(e)),!!i}function nl(t,e){var r=Ko(e,!0);return!!r&&(e.shiftKey&&!t.state.keySeq?tl(t,"Shift-"+r,e,function(e){return Jo(t,e,!0)})||tl(t,r,e,function(e){if("string"==typeof e?/^go[A-Z]/.test(e):e.motion)return Jo(t,e)}):tl(t,r,e,function(e){return Jo(t,e)}))}var il=null;function ol(e){var t=this;if(t.curOp.focus=W(),!ve(t,e)){x&&C<11&&27==e.keyCode&&(e.returnValue=!1);var r=e.keyCode;t.display.shift=16==r||e.shiftKey;var n=nl(t,e);v&&(il=n?r:null,!n&&88==r&&!Fe&&(w?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||function(e){var t=e.display.lineDiv;function r(e){18!=e.keyCode&&e.altKey||(T(t,"CodeMirror-crosshair"),pe(document,"keyup",r),pe(document,"mouseover",r))}H(t,"CodeMirror-crosshair"),fe(document,"keyup",r),fe(document,"mouseover",r)}(t)}}function ll(e){16==e.keyCode&&(this.doc.sel.shift=!1),ve(this,e)}function sl(e){var t=this;if(!(br(t.display,e)||ve(t,e)||e.ctrlKey&&!e.altKey||w&&e.metaKey)){var r=e.keyCode,n=e.charCode;if(v&&r==il)return il=null,void we(e);if(!v||e.which&&!(e.which<10)||!nl(t,e)){var i,o=String.fromCharCode(null==n?r:n);if("\b"!=o)if(!tl(i=t,"'"+o+"'",e,function(e){return Jo(i,e,!0)}))t.display.input.onKeyPress(e)}}}var al,ul,cl=function(e,t,r){this.time=e,this.pos=t,this.button=r};function hl(e){var t=this,r=t.display;if(!(ve(t,e)||r.activeTouch&&r.input.supportsTouch()))if(r.input.ensurePolled(),r.shift=e.shiftKey,br(r,e))b||(r.scroller.draggable=!1,setTimeout(function(){return r.scroller.draggable=!0},100));else if(!pl(t,e)){var n,i,o,l=on(t,e),s=ke(e),a=l?(n=l,i=s,o=+new Date,ul&&ul.compare(o,n,i)?(al=ul=null,"triple"):al&&al.compare(o,n,i)?(ul=new cl(o,n,i),al=null,"double"):(al=new cl(o,n,i),ul=null,"single")):"single";window.focus(),1==s&&t.state.selectingText&&t.state.selectingText(e),l&&function(r,e,n,t,i){var o="Click";"double"==t?o="Double"+o:"triple"==t&&(o="Triple"+o);return tl(r,Vo(o=(1==e?"Left":2==e?"Middle":"Right")+o,i),i,function(e){if("string"==typeof e&&(e=qo[e]),!e)return!1;var t=!1;try{r.isReadOnly()&&(r.state.suppressEdits=!0),t=e(r,n)!=U}finally{r.state.suppressEdits=!1}return t})}(t,s,l,a,e)||(1==s?l?function(e,t,r,n){x?setTimeout(E(yn,e),0):e.curOp.focus=W();var i,o=function(e,t,r){var n=e.getOption("configureMouse"),i=n?n(e,t,r):{};if(null==i.unit){var o=d?r.shiftKey&&r.metaKey:r.altKey;i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||r.shiftKey);null==i.addNew&&(i.addNew=w?r.metaKey:r.ctrlKey);null==i.moveOnDrag&&(i.moveOnDrag=!(w?r.altKey:r.ctrlKey));return i}(e,r,n),l=e.doc.sel;e.options.dragDrop&&Ne&&!e.isReadOnly()&&"single"==r&&-1<(i=l.contains(t))&&(tt((i=l.ranges[i]).from(),t)<0||0<t.xRel)&&(0<tt(i.to(),t)||t.xRel<0)?function(t,r,n,i){var o=t.display,l=!1,s=$n(t,function(e){b&&(o.scroller.draggable=!1),t.state.draggingText=!1,pe(o.wrapper.ownerDocument,"mouseup",s),pe(o.wrapper.ownerDocument,"mousemove",a),pe(o.scroller,"dragstart",u),pe(o.scroller,"drop",s),l||(we(e),i.addNew||Vi(t.doc,n,null,null,i.extend),b||x&&9==C?setTimeout(function(){o.wrapper.ownerDocument.body.focus(),o.input.focus()},20):o.input.focus())}),a=function(e){l=l||10<=Math.abs(r.clientX-e.clientX)+Math.abs(r.clientY-e.clientY)},u=function(){return l=!0};b&&(o.scroller.draggable=!0);(t.state.draggingText=s).copy=!i.moveOnDrag,o.scroller.dragDrop&&o.scroller.dragDrop();fe(o.wrapper.ownerDocument,"mouseup",s),fe(o.wrapper.ownerDocument,"mousemove",a),fe(o.scroller,"dragstart",u),fe(o.scroller,"drop",s),bn(t),setTimeout(function(){return o.input.focus()},20)}(e,n,t,o):function(v,e,m,y){var l=v.display,b=v.doc;we(e);var w,x,C=b.sel,t=C.ranges;y.addNew&&!y.extend?(x=b.sel.contains(m),w=-1<x?t[x]:new yi(m,m)):(w=b.sel.primary(),x=b.sel.primIndex);if("rectangle"==y.unit)y.addNew||(w=new yi(m,m)),m=on(v,e,!0,!0),x=-1;else{var r=fl(v,m,y.unit);w=y.extend?Ui(w,r.anchor,r.head,y.extend):r}y.addNew?-1==x?(x=t.length,_i(b,bi(v,t.concat([w]),x),{scroll:!1,origin:"*mouse"})):1<t.length&&t[x].empty()&&"char"==y.unit&&!y.extend?(_i(b,bi(v,t.slice(0,x).concat(t.slice(x+1)),0),{scroll:!1,origin:"*mouse"}),C=b.sel):ji(b,x,w,K):(_i(b,new mi([w],x=0),K),C=b.sel);var S=m;function s(e){if(0!=tt(S,e))if(S=e,"rectangle"==y.unit){for(var t=[],r=v.options.tabSize,n=z(Xe(b,m.line).text,m.ch,r),i=z(Xe(b,e.line).text,e.ch,r),o=Math.min(n,i),l=Math.max(n,i),s=Math.min(m.line,e.line),a=Math.min(v.lastLine(),Math.max(m.line,e.line));s<=a;s++){var u=Xe(b,s).text,c=X(u,o,r);o==l?t.push(new yi(et(s,c),et(s,c))):u.length>c&&t.push(new yi(et(s,c),et(s,X(u,l,r))))}t.length||t.push(new yi(m,m)),_i(b,bi(v,C.ranges.slice(0,x).concat(t),x),{origin:"*mouse",scroll:!1}),v.scrollIntoView(e)}else{var h,f=w,d=fl(v,e,y.unit),p=f.anchor;p=0<tt(d.anchor,p)?(h=d.head,ot(f.from(),d.anchor)):(h=d.anchor,it(f.to(),d.head));var g=C.ranges.slice(0);g[x]=function(e,t){var r=t.anchor,n=t.head,i=Xe(e.doc,r.line);if(0==tt(r,n)&&r.sticky==n.sticky)return t;var o=ce(i);if(!o)return t;var l=ae(o,r.ch,r.sticky),s=o[l];if(s.from!=r.ch&&s.to!=r.ch)return t;var a,u=l+(s.from==r.ch==(1!=s.level)?0:1);if(0==u||u==o.length)return t;if(n.line!=r.line)a=0<(n.line-r.line)*("ltr"==e.doc.direction?1:-1);else{var c=ae(o,n.ch,n.sticky),h=c-l||(n.ch-r.ch)*(1==s.level?-1:1);a=c==u-1||c==u?h<0:0<h}var f=o[u+(a?-1:0)],d=a==(1==f.level),p=d?f.from:f.to,g=d?"after":"before";return r.ch==p&&r.sticky==g?t:new yi(new et(r.line,p,g),n)}(v,new yi(st(b,p),h)),_i(b,bi(v,g,x),K)}}var a=l.wrapper.getBoundingClientRect(),u=0;function n(e){v.state.selectingText=!1,u=1/0,e&&(we(e),l.input.focus()),pe(l.wrapper.ownerDocument,"mousemove",i),pe(l.wrapper.ownerDocument,"mouseup",o),b.history.lastSelOrigin=null}var i=$n(v,function(e){0!==e.buttons&&ke(e)?function e(t){var r=++u;var n=on(v,t,!0,"rectangle"==y.unit);if(!n)return;if(0!=tt(n,S)){v.curOp.focus=W(),s(n);var i=Ln(l,b);(n.line>=i.to||n.line<i.from)&&setTimeout($n(v,function(){u==r&&e(t)}),150)}else{var o=t.clientY<a.top?-20:t.clientY>a.bottom?20:0;o&&setTimeout($n(v,function(){u==r&&(l.scroller.scrollTop+=o,e(t))}),50)}}(e):n(e)}),o=$n(v,n);v.state.selectingText=o,fe(l.wrapper.ownerDocument,"mousemove",i),fe(l.wrapper.ownerDocument,"mouseup",o)}(e,n,t,o)}(t,l,a,e):Le(e)==r.scroller&&we(e):2==s?(l&&Vi(t.doc,l),setTimeout(function(){return r.input.focus()},20)):3==s&&(S?t.display.input.onContextMenu(e):bn(t)))}}function fl(e,t,r){if("char"==r)return new yi(t,t);if("word"==r)return e.findWordAt(t);if("line"==r)return new yi(et(t.line,0),st(e.doc,et(t.line+1,0)));var n=r(e,t);return new yi(n.from,n.to)}function dl(e,t,r,n){var i,o;if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY;else try{i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;n&&we(t);var l=e.display,s=l.lineDiv.getBoundingClientRect();if(o>s.bottom||!ye(e,r))return Ce(t);o-=s.top-l.viewOffset;for(var a=0;a<e.display.gutterSpecs.length;++a){var u=l.gutters.childNodes[a];if(u&&u.getBoundingClientRect().right>=i)return ge(e,r,e,Ze(e.doc,o),e.display.gutterSpecs[a].className,t),Ce(t)}}function pl(e,t){return dl(e,t,"gutterClick",!0)}function gl(e,t){var r,n;br(e.display,t)||(n=t,ye(r=e,"gutterContextMenu")&&dl(r,n,"gutterContextMenu",!1))||(ve(e,t,"contextmenu")||S||e.display.input.onContextMenu(t))}function vl(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),Ir(e)}cl.prototype.compare=function(e,t,r){return this.time+400>e&&0==tt(t,this.pos)&&r==this.button};var ml={toString:function(){return"CodeMirror.Init"}},yl={},bl={};function wl(e,t,r){if(!t!=!(r&&r!=ml)){var n=e.display.dragFunctions,i=t?fe:pe;i(e.display.scroller,"dragstart",n.start),i(e.display.scroller,"dragenter",n.enter),i(e.display.scroller,"dragover",n.over),i(e.display.scroller,"dragleave",n.leave),i(e.display.scroller,"drop",n.drop)}}function xl(e){e.options.lineWrapping?(H(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(T(e.display.wrapper,"CodeMirror-wrap"),jt(e)),nn(e),sn(e),Ir(e),setTimeout(function(){return In(e)},100)}function Cl(e,t){var r=this;if(!(this instanceof Cl))return new Cl(e,t);this.options=t=t?I(t):{},I(yl,t,!1);var n=t.value;"string"==typeof n?n=new To(n,t.mode,null,t.lineSeparator,t.direction):t.mode&&(n.modeOption=t.mode),this.doc=n;var i=new Cl.inputStyles[t.inputStyle](this),o=this.display=new hi(e,n,i,t);for(var l in vl(o.wrapper.CodeMirror=this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),Bn(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new R,keySeq:null,specialChars:null},t.autofocus&&!f&&o.input.focus(),x&&C<11&&setTimeout(function(){return r.display.input.reset(!0)},20),function(i){var o=i.display;fe(o.scroller,"mousedown",$n(i,hl)),fe(o.scroller,"dblclick",x&&C<11?$n(i,function(e){if(!ve(i,e)){var t=on(i,e);if(t&&!pl(i,e)&&!br(i.display,e)){we(e);var r=i.findWordAt(t);Vi(i.doc,r.anchor,r.head)}}}):function(e){return ve(i,e)||we(e)});fe(o.scroller,"contextmenu",function(e){return gl(i,e)});var r,n={end:0};function l(){o.activeTouch&&(r=setTimeout(function(){return o.activeTouch=null},1e3),(n=o.activeTouch).end=+new Date)}function s(e,t){if(null==t.left)return!0;var r=t.left-e.left,n=t.top-e.top;return 400<r*r+n*n}fe(o.scroller,"touchstart",function(e){if(!ve(i,e)&&!function(e){if(1!=e.touches.length)return!1;var t=e.touches[0];return t.radiusX<=1&&t.radiusY<=1}(e)&&!pl(i,e)){o.input.ensurePolled(),clearTimeout(r);var t=+new Date;o.activeTouch={start:t,moved:!1,prev:t-n.end<=300?n:null},1==e.touches.length&&(o.activeTouch.left=e.touches[0].pageX,o.activeTouch.top=e.touches[0].pageY)}}),fe(o.scroller,"touchmove",function(){o.activeTouch&&(o.activeTouch.moved=!0)}),fe(o.scroller,"touchend",function(e){var t=o.activeTouch;if(t&&!br(o,e)&&null!=t.left&&!t.moved&&new Date-t.start<300){var r,n=i.coordsChar(o.activeTouch,"page");r=!t.prev||s(t,t.prev)?new yi(n,n):!t.prev.prev||s(t,t.prev.prev)?i.findWordAt(n):new yi(et(n.line,0),st(i.doc,et(n.line+1,0))),i.setSelection(r.anchor,r.head),i.focus(),we(e)}l()}),fe(o.scroller,"touchcancel",l),fe(o.scroller,"scroll",function(){o.scroller.clientHeight&&(Dn(i,o.scroller.scrollTop),Hn(i,o.scroller.scrollLeft,!0),ge(i,"scroll",i))}),fe(o.scroller,"mousewheel",function(e){return vi(i,e)}),fe(o.scroller,"DOMMouseScroll",function(e){return vi(i,e)}),fe(o.wrapper,"scroll",function(){return o.wrapper.scrollTop=o.wrapper.scrollLeft=0}),o.dragFunctions={enter:function(e){ve(i,e)||Se(e)},over:function(e){ve(i,e)||(!function(e,t){var r=on(e,t);if(r){var n=document.createDocumentFragment();pn(e,r,n),e.display.dragCursor||(e.display.dragCursor=A("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),N(e.display.dragCursor,n)}}(i,e),Se(e))},start:function(e){return function(e,t){if(x&&(!e.state.draggingText||+new Date-Mo<100))Se(t);else if(!ve(e,t)&&!br(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!a)){var r=A("img",null,null,"position: fixed; left: 0; top: 0;");r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",v&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),v&&r.parentNode.removeChild(r)}}(i,e)},drop:$n(i,No),leave:function(e){ve(i,e)||Oo(i)}};var e=o.input.getField();fe(e,"keyup",function(e){return ll.call(i,e)}),fe(e,"keydown",$n(i,ol)),fe(e,"keypress",$n(i,sl)),fe(e,"focus",function(e){return wn(i,e)}),fe(e,"blur",function(e){return xn(i,e)})}(this),Wo(),Un(this),this.curOp.forceUpdate=!0,Ai(this,n),t.autofocus&&!f||this.hasFocus()?setTimeout(E(wn,this),20):xn(this),bl)bl.hasOwnProperty(l)&&bl[l](r,t[l],ml);si(this),t.finishInit&&t.finishInit(this);for(var s=0;s<Sl.length;++s)Sl[s](r);Vn(this),b&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}Cl.defaults=yl,Cl.optionHandlers=bl;var Sl=[];function Ll(e,t,r,n){var i,o=e.doc;null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=dt(e,t).state:r="prev");var l=e.options.tabSize,s=Xe(o,t),a=z(s.text,null,l);s.stateAfter&&(s.stateAfter=null);var u,c=s.text.match(/^\s*/)[0];if(n||/\S/.test(s.text)){if("smart"==r&&((u=o.mode.indent(i,s.text.slice(c.length),s.text))==U||150<u)){if(!n)return;r="prev"}}else u=0,r="not";"prev"==r?u=t>o.first?z(Xe(o,t-1).text,null,l):0:"add"==r?u=a+e.options.indentUnit:"subtract"==r?u=a-e.options.indentUnit:"number"==typeof r&&(u=a+r),u=Math.max(0,u);var h="",f=0;if(e.options.indentWithTabs)for(var d=Math.floor(u/l);d;--d)f+=l,h+="\t";if(f<u&&(h+=_(u-f)),h!=c)return uo(o,h,et(t,0),et(t,c.length),"+input"),!(s.stateAfter=null);for(var p=0;p<o.sel.ranges.length;p++){var g=o.sel.ranges[p];if(g.head.line==t&&g.head.ch<c.length){var v=et(t,c.length);ji(o,p,new yi(v,v));break}}}Cl.defineInitHook=function(e){return Sl.push(e)};var kl=null;function Tl(e){kl=e}function Ml(e,t,r,n,i){var o=e.doc;e.display.shift=!1,n||(n=o.sel);var l=+new Date-200,s="paste"==i||e.state.pasteIncoming>l,a=We(t),u=null;if(s&&1<n.ranges.length)if(kl&&kl.text.join("\n")==t){if(n.ranges.length%kl.text.length==0){u=[];for(var c=0;c<kl.text.length;c++)u.push(o.splitLines(kl.text[c]))}}else a.length==n.ranges.length&&e.options.pasteLinesPerSelection&&(u=q(a,function(e){return[e]}));for(var h=e.curOp.updateInput,f=n.ranges.length-1;0<=f;f--){var d=n.ranges[f],p=d.from(),g=d.to();d.empty()&&(r&&0<r?p=et(p.line,p.ch-r):e.state.overwrite&&!s?g=et(g.line,Math.min(Xe(o,g.line).text.length,g.ch+$(a).length)):s&&kl&&kl.lineWise&&kl.text.join("\n")==t&&(p=g=et(p.line,0)));var v={from:p,to:g,text:u?u[f%u.length]:a,origin:i||(s?"paste":e.state.cutIncoming>l?"cut":"+input")};io(e.doc,v),lr(e,"inputRead",e,v)}t&&!s&&Ol(e,t),Mn(e),e.curOp.updateInput<2&&(e.curOp.updateInput=h),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Nl(e,t){var r=e.clipboardData&&e.clipboardData.getData("Text");if(r)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||_n(t,function(){return Ml(t,r,0,null,"paste")}),!0}function Ol(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;0<=n;n--){var i=r.ranges[n];if(!(100<i.head.ch||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),l=!1;if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(-1<t.indexOf(o.electricChars.charAt(s))){l=Ll(e,i.head.line,"smart");break}}else o.electricInput&&o.electricInput.test(Xe(e.doc,i.head.line).text.slice(0,i.head.ch))&&(l=Ll(e,i.head.line,"smart"));l&&lr(e,"electricInput",e,i.head.line)}}}function Al(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:et(i,0),head:et(i+1,0)};r.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:r}}function Dl(e,t,r,n){e.setAttribute("autocorrect",r?"":"off"),e.setAttribute("autocapitalize",n?"":"off"),e.setAttribute("spellcheck",!!t)}function Wl(){var e=A("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=A("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return b?e.style.width="1000px":e.setAttribute("wrap","off"),c&&(e.style.border="1px solid black"),Dl(e),t}function Hl(n,i,o,e,l){var t=i,r=o,s=Xe(n,i.line);function a(e){var t,r;if(null==(t=l?function(t,r,s,e){var a=ce(r,t.doc.direction);if(!a)return _o(r,s,e);s.ch>=r.text.length?(s.ch=r.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var n=ae(a,s.ch,s.sticky),i=a[n];if("ltr"==t.doc.direction&&i.level%2==0&&(0<e?i.to>s.ch:i.from<s.ch))return _o(r,s,e);var o,u=function(e,t){return Yo(r,e instanceof et?e.ch:e,t)},l=function(e){return t.options.lineWrapping?(o=o||Or(t,r),$r(t,r,o,e)):{begin:0,end:r.text.length}},c=l("before"==s.sticky?u(s,-1):s.ch);if("rtl"==t.doc.direction||1==i.level){var h=1==i.level==e<0,f=u(s,h?1:-1);if(null!=f&&(h?f<=i.to&&f<=c.end:f>=i.from&&f>=c.begin)){var d=h?"before":"after";return new et(s.line,f,d)}}var p=function(e,t,r){for(var n=function(e,t){return t?new et(s.line,u(e,1),"before"):new et(s.line,e,"after")};0<=e&&e<a.length;e+=t){var i=a[e],o=0<t==(1!=i.level),l=o?r.begin:u(r.end,-1);if(i.from<=l&&l<i.to)return n(l,o);if(l=o?i.from:u(i.to,-1),r.begin<=l&&l<r.end)return n(l,o)}},g=p(n+e,e,c);if(g)return g;var v=0<e?c.end:u(c.begin,-1);return null==v||0<e&&v==r.text.length||!(g=p(0<e?0:a.length-1,e,l(v)))?null:g}(n.cm,s,i,o):_o(s,i,o))){if(e||(r=i.line+o)<n.first||r>=n.first+n.size||(i=new et(r,i.ch,i.sticky),!(s=Xe(n,r))))return!1;i=$o(l,n.cm,s,i.line,o)}else i=t;return!0}if("char"==e)a();else if("column"==e)a(!0);else if("word"==e||"group"==e)for(var u=null,c="group"==e,h=n.cm&&n.cm.getHelper(i,"wordChars"),f=!0;!(o<0)||a(!f);f=!1){var d=s.text.charAt(i.ch)||"\n",p=te(d,h)?"w":c&&"\n"==d?"n":!c||/\s/.test(d)?null:"p";if(!c||f||p||(p="s"),u&&u!=p){o<0&&(o=1,a(),i.sticky="after");break}if(p&&(u=p),0<o&&!a(!f))break}var g=eo(n,i,t,r,!0);return rt(t,g)&&(g.hitSide=!0),g}function Fl(e,t,r,n){var i,o,l=e.doc,s=t.left;if("page"==n){var a=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),u=Math.max(a-.5*Qr(e.display),3);i=(0<r?t.bottom:t.top)+r*u}else"line"==n&&(i=0<r?t.bottom+3:t.top-3);for(;(o=Yr(e,s,i)).outside;){if(r<0?i<=0:i>=l.height){o.hitSide=!0;break}i+=5*r}return o}var Pl=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new R,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};function El(e,t){var r=Nr(e,t.line);if(!r||r.hidden)return null;var n=Xe(e.doc,t.line),i=Tr(r,n,t.line),o=ce(n,e.doc.direction),l="left";o&&(l=ae(o,t.ch)%2?"right":"left");var s=Hr(i.map,t.ch,l);return s.offset="right"==s.collapse?s.end:s.start,s}function Il(e,t){return t&&(e.bad=!0),e}function zl(e,t,r){var n;if(t==e.display.lineDiv){if(!(n=e.display.lineDiv.childNodes[r]))return Il(e.clipPos(et(e.display.viewTo-1)),!0);t=null,r=0}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null;if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i];if(o.node==n)return Rl(o,t,r)}}function Rl(u,e,t){var r=u.text.firstChild,n=!1;if(!e||!D(r,e))return Il(et(qe(u.line),0),!0);if(e==r&&(n=!0,e=r.childNodes[t],t=0,!e)){var i=u.rest?$(u.rest):u.line;return Il(et(qe(i),i.text.length),n)}var o=3==e.nodeType?e:null,l=e;for(o||1!=e.childNodes.length||3!=e.firstChild.nodeType||(o=e.firstChild,t&&(t=o.nodeValue.length));l.parentNode!=r;)l=l.parentNode;var c=u.measure,h=c.maps;function s(e,t,r){for(var n=-1;n<(h?h.length:0);n++)for(var i=n<0?c.map:h[n],o=0;o<i.length;o+=3){var l=i[o+2];if(l==e||l==t){var s=qe(n<0?u.line:u.rest[n]),a=i[o]+r;return(r<0||l!=e)&&(a=i[o+(r?1:0)]),et(s,a)}}}var a=s(o,l,t);if(a)return Il(a,n);for(var f=l.nextSibling,d=o?o.nodeValue.length-t:0;f;f=f.nextSibling){if(a=s(f,f.firstChild,0))return Il(et(a.line,a.ch-d),n);d+=f.textContent.length}for(var p=l.previousSibling,g=t;p;p=p.previousSibling){if(a=s(p,p.firstChild,-1))return Il(et(a.line,a.ch+g),n);g+=p.textContent.length}}Pl.prototype.init=function(e){var t=this,l=this,s=l.cm,a=l.div=e.lineDiv;function r(e){if(!ve(s,e)){if(s.somethingSelected())Tl({lineWise:!1,text:s.getSelections()}),"cut"==e.type&&s.replaceSelection("",null,"cut");else{if(!s.options.lineWiseCopyCut)return;var t=Al(s);Tl({lineWise:!0,text:t.text}),"cut"==e.type&&s.operation(function(){s.setSelections(t.ranges,0,V),s.replaceSelection("",null,"cut")})}if(e.clipboardData){e.clipboardData.clearData();var r=kl.text.join("\n");if(e.clipboardData.setData("Text",r),e.clipboardData.getData("Text")==r)return void e.preventDefault()}var n=Wl(),i=n.firstChild;s.display.lineSpace.insertBefore(n,s.display.lineSpace.firstChild),i.value=kl.text.join("\n");var o=document.activeElement;P(i),setTimeout(function(){s.display.lineSpace.removeChild(n),o.focus(),o==a&&l.showPrimarySelection()},50)}}Dl(a,s.options.spellcheck,s.options.autocorrect,s.options.autocapitalize),fe(a,"paste",function(e){ve(s,e)||Nl(e,s)||C<=11&&setTimeout($n(s,function(){return t.updateFromDOM()}),20)}),fe(a,"compositionstart",function(e){t.composing={data:e.data,done:!1}}),fe(a,"compositionupdate",function(e){t.composing||(t.composing={data:e.data,done:!1})}),fe(a,"compositionend",function(e){t.composing&&(e.data!=t.composing.data&&t.readFromDOMSoon(),t.composing.done=!0)}),fe(a,"touchstart",function(){return l.forceCompositionEnd()}),fe(a,"input",function(){t.composing||t.readFromDOMSoon()}),fe(a,"copy",r),fe(a,"cut",r)},Pl.prototype.prepareSelection=function(){var e=dn(this.cm,!1);return e.focus=this.cm.state.focused,e},Pl.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Pl.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Pl.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,r=t.doc.sel.primary(),n=r.from(),i=r.to();if(t.display.viewTo==t.display.viewFrom||n.line>=t.display.viewTo||i.line<t.display.viewFrom)e.removeAllRanges();else{var o=zl(t,e.anchorNode,e.anchorOffset),l=zl(t,e.focusNode,e.focusOffset);if(!o||o.bad||!l||l.bad||0!=tt(ot(o,l),n)||0!=tt(it(o,l),i)){var s=t.display.view,a=n.line>=t.display.viewFrom&&El(t,n)||{node:s[0].measure.map[2],offset:0},u=i.line<t.display.viewTo&&El(t,i);if(!u){var c=s[s.length-1].measure,h=c.maps?c.maps[c.maps.length-1]:c.map;u={node:h[h.length-1],offset:h[h.length-2]-h[h.length-3]}}if(a&&u){var f,d=e.rangeCount&&e.getRangeAt(0);try{f=k(a.node,a.offset,u.offset,u.node)}catch(e){}f&&(!g&&t.state.focused?(e.collapse(a.node,a.offset),f.collapsed||(e.removeAllRanges(),e.addRange(f))):(e.removeAllRanges(),e.addRange(f)),d&&null==e.anchorNode?e.addRange(d):g&&this.startGracePeriod()),this.rememberSelection()}else e.removeAllRanges()}}},Pl.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Pl.prototype.showMultipleSelections=function(e){N(this.cm.display.cursorDiv,e.cursors),N(this.cm.display.selectionDiv,e.selection)},Pl.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Pl.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var t=e.getRangeAt(0).commonAncestorContainer;return D(this.div,t)},Pl.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())},Pl.prototype.blur=function(){this.div.blur()},Pl.prototype.getField=function(){return this.div},Pl.prototype.supportsTouch=function(){return!0},Pl.prototype.receivedFocus=function(){var t=this;this.selectionInEditor()?this.pollSelection():_n(this.cm,function(){return t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))})},Pl.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Pl.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm;if(h&&l&&this.cm.display.gutterSpecs.length&&function(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0;return!1}(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus();if(!this.composing){this.rememberSelection();var r=zl(t,e.anchorNode,e.anchorOffset),n=zl(t,e.focusNode,e.focusOffset);r&&n&&_n(t,function(){_i(t.doc,wi(r,n),V),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0)})}}},Pl.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e,t,r,n=this.cm,i=n.display,o=n.doc.sel.primary(),l=o.from(),s=o.to();if(0==l.ch&&l.line>n.firstLine()&&(l=et(l.line-1,Xe(n.doc,l.line-1).length)),s.ch==Xe(n.doc,s.line).text.length&&s.line<n.lastLine()&&(s=et(s.line+1,0)),l.line<i.viewFrom||s.line>i.viewTo-1)return!1;r=l.line==i.viewFrom||0==(e=ln(n,l.line))?(t=qe(i.view[0].line),i.view[0].node):(t=qe(i.view[e].line),i.view[e-1].node.nextSibling);var a,u,c=ln(n,s.line);if(u=c==i.view.length-1?(a=i.viewTo-1,i.lineDiv.lastChild):(a=qe(i.view[c+1].line)-1,i.view[c+1].node.previousSibling),!r)return!1;for(var h=n.doc.splitLines(function(a,e,t,u,c){var r="",h=!1,f=a.doc.lineSeparator(),d=!1;function p(){h&&(r+=f,d&&(r+=f),h=d=!1)}function g(e){e&&(p(),r+=e)}function v(e){if(1==e.nodeType){var t=e.getAttribute("cm-text");if(t)return void g(t);var r,n=e.getAttribute("cm-marker");if(n){var i=a.findMarks(et(u,0),et(c+1,0),(s=+n,function(e){return e.id==s}));return void(i.length&&(r=i[0].find(0))&&g(Ye(a.doc,r.from,r.to).join(f)))}if("false"==e.getAttribute("contenteditable"))return;var o=/^(pre|div|p|li|table|br)$/i.test(e.nodeName);if(!/^br$/i.test(e.nodeName)&&0==e.textContent.length)return;o&&p();for(var l=0;l<e.childNodes.length;l++)v(e.childNodes[l]);/^(pre|p)$/i.test(e.nodeName)&&(d=!0),o&&(h=!0)}else 3==e.nodeType&&g(e.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "));var s}for(;v(e),e!=t;)e=e.nextSibling,d=!1;return r}(n,r,u,t,a)),f=Ye(n.doc,et(t,0),et(a,Xe(n.doc,a).text.length));1<h.length&&1<f.length;)if($(h)==$(f))h.pop(),f.pop(),a--;else{if(h[0]!=f[0])break;h.shift(),f.shift(),t++}for(var d=0,p=0,g=h[0],v=f[0],m=Math.min(g.length,v.length);d<m&&g.charCodeAt(d)==v.charCodeAt(d);)++d;for(var y=$(h),b=$(f),w=Math.min(y.length-(1==h.length?d:0),b.length-(1==f.length?d:0));p<w&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)++p;if(1==h.length&&1==f.length&&t==l.line)for(;d&&d>l.ch&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)d--,p++;h[h.length-1]=y.slice(0,y.length-p).replace(/^\u200b+/,""),h[0]=h[0].slice(d).replace(/\u200b+$/,"");var x=et(t,d),C=et(a,f.length?$(f).length-p:0);return 1<h.length||h[0]||tt(x,C)?(uo(n.doc,h,x,C,"+input"),!0):void 0},Pl.prototype.ensurePolled=function(){this.forceCompositionEnd()},Pl.prototype.reset=function(){this.forceCompositionEnd()},Pl.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Pl.prototype.readFromDOMSoon=function(){var e=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return;e.composing=null}e.updateFromDOM()},80))},Pl.prototype.updateFromDOM=function(){var e=this;!this.cm.isReadOnly()&&this.pollContent()||_n(this.cm,function(){return sn(e.cm)})},Pl.prototype.setUneditable=function(e){e.contentEditable="false"},Pl.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||$n(this.cm,Ml)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},Pl.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},Pl.prototype.onContextMenu=function(){},Pl.prototype.resetPosition=function(){},Pl.prototype.needsContentAttribute=!0;var Bl,Gl,Ul,Vl=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new R,this.hasSelection=!1,this.composing=null};Vl.prototype.init=function(r){var e=this,n=this,i=this.cm;this.createField(r);var o=this.textarea;function t(e){if(!ve(i,e)){if(i.somethingSelected())Tl({lineWise:!1,text:i.getSelections()});else{if(!i.options.lineWiseCopyCut)return;var t=Al(i);Tl({lineWise:!0,text:t.text}),"cut"==e.type?i.setSelections(t.ranges,null,V):(n.prevInput="",o.value=t.text.join("\n"),P(o))}"cut"==e.type&&(i.state.cutIncoming=+new Date)}}r.wrapper.insertBefore(this.wrapper,r.wrapper.firstChild),c&&(o.style.width="0px"),fe(o,"input",function(){x&&9<=C&&e.hasSelection&&(e.hasSelection=null),n.poll()}),fe(o,"paste",function(e){ve(i,e)||Nl(e,i)||(i.state.pasteIncoming=+new Date,n.fastPoll())}),fe(o,"cut",t),fe(o,"copy",t),fe(r.scroller,"paste",function(e){if(!br(r,e)&&!ve(i,e)){if(!o.dispatchEvent)return i.state.pasteIncoming=+new Date,void n.focus();var t=new Event("paste");t.clipboardData=e.clipboardData,o.dispatchEvent(t)}}),fe(r.lineSpace,"selectstart",function(e){br(r,e)||we(e)}),fe(o,"compositionstart",function(){var e=i.getCursor("from");n.composing&&n.composing.range.clear(),n.composing={start:e,range:i.markText(e,i.getCursor("to"),{className:"CodeMirror-composing"})}}),fe(o,"compositionend",function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)})},Vl.prototype.createField=function(e){this.wrapper=Wl(),this.textarea=this.wrapper.firstChild},Vl.prototype.prepareSelection=function(){var e=this.cm,t=e.display,r=e.doc,n=dn(e);if(e.options.moveInputWithCursor){var i=Kr(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),l=t.lineDiv.getBoundingClientRect();n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+l.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+l.left-o.left))}return n},Vl.prototype.showSelection=function(e){var t=this.cm.display;N(t.cursorDiv,e.cursors),N(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},Vl.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm;if(t.somethingSelected()){this.prevInput="";var r=t.getSelection();this.textarea.value=r,t.state.focused&&P(this.textarea),x&&9<=C&&(this.hasSelection=r)}else e||(this.prevInput=this.textarea.value="",x&&9<=C&&(this.hasSelection=null))}},Vl.prototype.getField=function(){return this.textarea},Vl.prototype.supportsTouch=function(){return!1},Vl.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!f||W()!=this.textarea))try{this.textarea.focus()}catch(e){}},Vl.prototype.blur=function(){this.textarea.blur()},Vl.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},Vl.prototype.receivedFocus=function(){this.slowPoll()},Vl.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},Vl.prototype.fastPoll=function(){var t=!1,r=this;r.pollingFast=!0,r.polling.set(20,function e(){r.poll()||t?(r.pollingFast=!1,r.slowPoll()):(t=!0,r.polling.set(60,e))})},Vl.prototype.poll=function(){var e=this,t=this.cm,r=this.textarea,n=this.prevInput;if(this.contextMenuPending||!t.state.focused||He(r)&&!n&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1;var i=r.value;if(i==n&&!t.somethingSelected())return!1;if(x&&9<=C&&this.hasSelection===i||w&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1;if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0);if(8203!=o||n||(n="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var l=0,s=Math.min(n.length,i.length);l<s&&n.charCodeAt(l)==i.charCodeAt(l);)++l;return _n(t,function(){Ml(t,i.slice(l),n.length-l,null,e.composing?"*compose":null),1e3<i.length||-1<i.indexOf("\n")?r.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},Vl.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},Vl.prototype.onKeyPress=function(){x&&9<=C&&(this.hasSelection=null),this.fastPoll()},Vl.prototype.onContextMenu=function(e){var r=this,n=r.cm,i=n.display,o=r.textarea;r.contextMenuPending&&r.contextMenuPending();var t=on(n,e),l=i.scroller.scrollTop;if(t&&!v){n.options.resetSelectionOnContextMenu&&-1==n.doc.sel.contains(t)&&$n(n,_i)(n.doc,wi(t),V);var s,a=o.style.cssText,u=r.wrapper.style.cssText,c=r.wrapper.offsetParent.getBoundingClientRect();if(r.wrapper.style.cssText="position: static",o.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-c.top-5)+"px; left: "+(e.clientX-c.left-5)+"px;\n      z-index: 1000; background: "+(x?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",b&&(s=window.scrollY),i.input.focus(),b&&window.scrollTo(null,s),i.input.reset(),n.somethingSelected()||(o.value=r.prevInput=" "),r.contextMenuPending=d,i.selForContextMenu=n.doc.sel,clearTimeout(i.detectingSelectAll),x&&9<=C&&f(),S){Se(e);var h=function(){pe(window,"mouseup",h),setTimeout(d,20)};fe(window,"mouseup",h)}else setTimeout(d,50)}function f(){if(null!=o.selectionStart){var e=n.somethingSelected(),t="​"+(e?o.value:"");o.value="⇚",o.value=t,r.prevInput=e?"":"​",o.selectionStart=1,o.selectionEnd=t.length,i.selForContextMenu=n.doc.sel}}function d(){if(r.contextMenuPending==d&&(r.contextMenuPending=!1,r.wrapper.style.cssText=u,o.style.cssText=a,x&&C<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=l),null!=o.selectionStart)){(!x||x&&C<9)&&f();var e=0,t=function(){i.selForContextMenu==n.doc.sel&&0==o.selectionStart&&0<o.selectionEnd&&"​"==r.prevInput?$n(n,ro)(n):e++<10?i.detectingSelectAll=setTimeout(t,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(t,200)}}},Vl.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e},Vl.prototype.setUneditable=function(){},Vl.prototype.needsContentAttribute=!1,function(i){var o=i.optionHandlers;function e(e,t,n,r){i.defaults[e]=t,n&&(o[e]=r?function(e,t,r){r!=ml&&n(e,t,r)}:n)}i.defineOption=e,i.Init=ml,e("value","",function(e,t){return e.setValue(t)},!0),e("mode",null,function(e,t){e.doc.modeOption=t,ki(e)},!0),e("indentUnit",2,ki,!0),e("indentWithTabs",!1),e("smartIndent",!0),e("tabSize",4,function(e){Ti(e),Ir(e),sn(e)},!0),e("lineSeparator",null,function(e,n){if(e.doc.lineSep=n){var i=[],o=e.doc.first;e.doc.iter(function(e){for(var t=0;;){var r=e.text.indexOf(n,t);if(-1==r)break;t=r+n.length,i.push(et(o,r))}o++});for(var t=i.length-1;0<=t;t--)uo(e.doc,n,i[t],et(i[t].line,i[t].ch+n.length))}}),e("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(e,t,r){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),r!=ml&&e.refresh()}),e("specialCharPlaceholder",Zt,function(e){return e.refresh()},!0),e("electricChars",!0),e("inputStyle",f?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),e("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),e("autocorrect",!1,function(e,t){return e.getInputField().autocorrect=t},!0),e("autocapitalize",!1,function(e,t){return e.getInputField().autocapitalize=t},!0),e("rtlMoveVisually",!p),e("wholeLineUpdateBefore",!0),e("theme","default",function(e){vl(e),ci(e)},!0),e("keyMap","default",function(e,t,r){var n=jo(t),i=r!=ml&&jo(r);i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null)}),e("extraKeys",null),e("configureMouse",null),e("lineWrapping",!1,xl,!0),e("gutters",[],function(e,t){e.display.gutterSpecs=ai(t,e.options.lineNumbers),ci(e)},!0),e("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?tn(e.display)+"px":"0",e.refresh()},!0),e("coverGutterNextToScrollbar",!1,function(e){return In(e)},!0),e("scrollbarStyle","native",function(e){Bn(e),In(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),e("lineNumbers",!1,function(e,t){e.display.gutterSpecs=ai(e.options.gutters,t),ci(e)},!0),e("firstLineNumber",1,ci,!0),e("lineNumberFormatter",function(e){return e},ci,!0),e("showCursorWhenSelecting",!1,fn,!0),e("resetSelectionOnContextMenu",!0),e("lineWiseCopyCut",!0),e("pasteLinesPerSelection",!0),e("selectionsMayTouch",!1),e("readOnly",!1,function(e,t){"nocursor"==t&&(xn(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)}),e("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),e("dragDrop",!0,wl),e("allowDropFileTypes",null),e("cursorBlinkRate",530),e("cursorScrollMargin",0),e("cursorHeight",1,fn,!0),e("singleCursorHeightPerLine",!0,fn,!0),e("workTime",100),e("workDelay",100),e("flattenSpans",!0,Ti,!0),e("addModeClass",!1,Ti,!0),e("pollInterval",100),e("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),e("historyEventDelay",1250),e("viewportMargin",10,function(e){return e.refresh()},!0),e("maxHighlightLength",1e4,Ti,!0),e("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),e("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),e("autofocus",null),e("direction","ltr",function(e,t){return e.doc.setDirection(t)},!0),e("phrases",null)}(Cl),Gl=(Bl=Cl).optionHandlers,Ul=Bl.helpers={},Bl.prototype={constructor:Bl,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,t){var r=this.options,n=r[e];r[e]==t&&"mode"!=e||(r[e]=t,Gl.hasOwnProperty(e)&&$n(this,Gl[e])(this,t,n),ge(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](jo(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:qn(function(e,t){var r=e.token?e:Bl.getMode(this.options,e);if(r.startState)throw new Error("Overlays may not be stateful.");!function(e,t,r){for(var n=0,i=r(t);n<e.length&&r(e[n])<=i;)n++;e.splice(n,0,t)}(this.state.overlays,{mode:r,modeSpec:e,opaque:t&&t.opaque,priority:t&&t.priority||0},function(e){return e.priority}),this.state.modeGen++,sn(this)}),removeOverlay:qn(function(e){for(var t=this.state.overlays,r=0;r<t.length;++r){var n=t[r].modeSpec;if(n==e||"string"==typeof e&&n.name==e)return t.splice(r,1),this.state.modeGen++,void sn(this)}}),indentLine:qn(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),Qe(this.doc,e)&&Ll(this,e,t,r)}),indentSelection:qn(function(e){for(var t=this,r=this.doc.sel.ranges,n=-1,i=0;i<r.length;i++){var o=r[i];if(o.empty())o.head.line>n&&(Ll(t,o.head.line,e,!0),n=o.head.line,i==t.doc.sel.primIndex&&Mn(t));else{var l=o.from(),s=o.to(),a=Math.max(n,l.line);n=Math.min(t.lastLine(),s.line-(s.ch?0:1))+1;for(var u=a;u<n;++u)Ll(t,u,e);var c=t.doc.sel.ranges;0==l.ch&&r.length==c.length&&0<c[i].from().ch&&ji(t.doc,i,new yi(l,c[i].to()),V)}}}),getTokenAt:function(e,t){return yt(this,e,t)},getLineTokens:function(e,t){return yt(this,et(e),t,!0)},getTokenTypeAt:function(e){e=st(this.doc,e);var t,r=ft(this,Xe(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch;if(0==o)t=r[2];else for(;;){var l=n+i>>1;if((l?r[2*l-1]:0)>=o)i=l;else{if(!(r[2*l+1]<o)){t=r[2*l+2];break}n=l+1}}var s=t?t.indexOf("overlay "):-1;return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(e){var t=this.doc.mode;return t.innerMode?Bl.innerMode(t,this.getTokenAt(e).state).mode:t},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var r=[];if(!Ul.hasOwnProperty(t))return r;var n=Ul[t],i=this.getModeAt(e);if("string"==typeof i[t])n[i[t]]&&r.push(n[i[t]]);else if(i[t])for(var o=0;o<i[t].length;o++){var l=n[i[t][o]];l&&r.push(l)}else i.helperType&&n[i.helperType]?r.push(n[i.helperType]):n[i.name]&&r.push(n[i.name]);for(var s=0;s<n._global.length;s++){var a=n._global[s];a.pred(i,this)&&-1==B(r,a.val)&&r.push(a.val)}return r},getStateAfter:function(e,t){var r=this.doc;return dt(this,(e=lt(r,null==e?r.first+r.size-1:e))+1,t).state},cursorCoords:function(e,t){var r=this.doc.sel.primary();return Kr(this,null==e?r.head:"object"==typeof e?st(this.doc,e):e?r.from():r.to(),t||"page")},charCoords:function(e,t){return Vr(this,st(this.doc,e),t||"page")},coordsChar:function(e,t){return Yr(this,(e=Ur(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=Ur(this,{top:e,left:0},t||"page").top,Ze(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,r){var n,i=!1;if("number"==typeof e){var o=this.doc.first+this.doc.size-1;e<this.doc.first?e=this.doc.first:o<e&&(e=o,i=!0),n=Xe(this.doc,e)}else n=e;return Gr(this,n,{top:0,left:0},t||"page",r||i).top+(i?this.doc.height-Vt(n):0)},defaultTextHeight:function(){return Qr(this.display)},defaultCharWidth:function(){return Jr(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o,l,s,a=this.display,u=(e=Kr(this,st(this.doc,e))).bottom,c=e.left;if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),a.sizer.appendChild(t),"over"==n)u=e.top;else if("above"==n||"near"==n){var h=Math.max(a.wrapper.clientHeight,this.doc.height),f=Math.max(a.sizer.clientWidth,a.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>h)&&e.top>t.offsetHeight?u=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=h&&(u=e.bottom),c+t.offsetWidth>f&&(c=f-t.offsetWidth)}t.style.top=u+"px",t.style.left=t.style.right="","right"==i?(c=a.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?c=0:"middle"==i&&(c=(a.sizer.clientWidth-t.offsetWidth)/2),t.style.left=c+"px"),r&&(o=this,l={left:c,top:u,right:c+t.offsetWidth,bottom:u+t.offsetHeight},null!=(s=kn(o,l)).scrollTop&&Dn(o,s.scrollTop),null!=s.scrollLeft&&Hn(o,s.scrollLeft))},triggerOnKeyDown:qn(ol),triggerOnKeyPress:qn(sl),triggerOnKeyUp:ll,triggerOnMouseDown:qn(hl),execCommand:function(e){if(qo.hasOwnProperty(e))return qo[e].call(null,this)},triggerElectric:qn(function(e){Ol(this,e)}),findPosH:function(e,t,r,n){var i=1;t<0&&(i=-1,t=-t);for(var o=st(this.doc,e),l=0;l<t&&!(o=Hl(this.doc,o,i,r,n)).hitSide;++l);return o},moveH:qn(function(t,r){var n=this;this.extendSelectionsBy(function(e){return n.display.shift||n.doc.extend||e.empty()?Hl(n.doc,e.head,t,r,n.options.rtlMoveVisually):t<0?e.from():e.to()},j)}),deleteH:qn(function(r,n){var e=this.doc.sel,i=this.doc;e.somethingSelected()?i.replaceSelection("",null,"+delete"):Xo(this,function(e){var t=Hl(i,e.head,r,n,!1);return r<0?{from:t,to:e.head}:{from:e.head,to:t}})}),findPosV:function(e,t,r,n){var i=1,o=n;t<0&&(i=-1,t=-t);for(var l=st(this.doc,e),s=0;s<t;++s){var a=Kr(this,l,"div");if(null==o?o=a.left:a.left=o,(l=Fl(this,a,i,r)).hitSide)break}return l},moveV:qn(function(n,i){var o=this,l=this.doc,s=[],a=!this.display.shift&&!l.extend&&l.sel.somethingSelected();if(l.extendSelectionsBy(function(e){if(a)return n<0?e.from():e.to();var t=Kr(o,e.head,"div");null!=e.goalColumn&&(t.left=e.goalColumn),s.push(t.left);var r=Fl(o,t,n,i);return"page"==i&&e==l.sel.primary()&&Tn(o,Vr(o,r,"div").top-t.top),r},j),s.length)for(var e=0;e<l.sel.ranges.length;e++)l.sel.ranges[e].goalColumn=s[e]}),findWordAt:function(e){var t=Xe(this.doc,e.line).text,r=e.ch,n=e.ch;if(t){var i=this.getHelper(e,"wordChars");"before"!=e.sticky&&n!=t.length||!r?++n:--r;for(var o=t.charAt(r),l=te(o,i)?function(e){return te(e,i)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!te(e)};0<r&&l(t.charAt(r-1));)--r;for(;n<t.length&&l(t.charAt(n));)++n}return new yi(et(e.line,r),et(e.line,n))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?H(this.display.cursorDiv,"CodeMirror-overwrite"):T(this.display.cursorDiv,"CodeMirror-overwrite"),ge(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==W()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:qn(function(e,t){Nn(this,e,t)}),getScrollInfo:function(){var e=this.display.scroller;return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Sr(this)-this.display.barHeight,width:e.scrollWidth-Sr(this)-this.display.barWidth,clientHeight:kr(this),clientWidth:Lr(this)}},scrollIntoView:qn(function(e,t){var r,n;null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:et(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?(n=e,On(r=this),r.curOp.scrollToPos=n):An(this,e.from,e.to,e.margin)}),setSize:qn(function(e,t){var r=this,n=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e};null!=e&&(this.display.wrapper.style.width=n(e)),null!=t&&(this.display.wrapper.style.height=n(t)),this.options.lineWrapping&&Er(this);var i=this.display.viewFrom;this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){an(r,i,"widget");break}++i}),this.curOp.forceUpdate=!0,ge(this,"refresh",this)}),operation:function(e){return _n(this,e)},startOperation:function(){return Un(this)},endOperation:function(){return Vn(this)},refresh:qn(function(){var e=this.display.cachedTextHeight;sn(this),this.curOp.forceUpdate=!0,Ir(this),Nn(this,this.doc.scrollLeft,this.doc.scrollTop),ii(this.display),(null==e||.5<Math.abs(e-Qr(this.display)))&&nn(this),ge(this,"refresh",this)}),swapDoc:qn(function(e){var t=this.doc;return t.cm=null,this.state.selectingText&&this.state.selectingText(),Ai(this,e),Ir(this),this.display.input.reset(),Nn(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,lr(this,"swapDoc",this,t),t}),phrase:function(e){var t=this.options.phrases;return t&&Object.prototype.hasOwnProperty.call(t,e)?t[e]:e},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},be(Bl),Bl.registerHelper=function(e,t,r){Ul.hasOwnProperty(e)||(Ul[e]=Bl[e]={_global:[]}),Ul[e][t]=r},Bl.registerGlobalHelper=function(e,t,r,n){Bl.registerHelper(e,t,n),Ul[e]._global.push({pred:r,val:n})};var Kl,jl="iter insert remove copy getEditor constructor".split(" ");for(var Xl in To.prototype)To.prototype.hasOwnProperty(Xl)&&B(jl,Xl)<0&&(Cl.prototype[Xl]=function(e){return function(){return e.apply(this.doc,arguments)}}(To.prototype[Xl]));return be(To),Cl.inputStyles={textarea:Vl,contenteditable:Pl},Cl.defineMode=function(e){Cl.defaults.mode||"null"==e||(Cl.defaults.mode=e),function(e,t){2<arguments.length&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Ee[e]=t}.apply(this,arguments)},Cl.defineMIME=function(e,t){Ie[e]=t},Cl.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Cl.defineMIME("text/plain","null"),Cl.defineExtension=function(e,t){Cl.prototype[e]=t},Cl.defineDocExtension=function(e,t){To.prototype[e]=t},Cl.fromTextArea=function(t,e){if((e=e?I(e):{}).value=t.value,!e.tabindex&&t.tabIndex&&(e.tabindex=t.tabIndex),!e.placeholder&&t.placeholder&&(e.placeholder=t.placeholder),null==e.autofocus){var r=W();e.autofocus=r==t||null!=t.getAttribute("autofocus")&&r==document.body}function n(){t.value=s.getValue()}var i;if(t.form&&(fe(t.form,"submit",n),!e.leaveSubmitMethodAlone)){var o=t.form;i=o.submit;try{var l=o.submit=function(){n(),o.submit=i,o.submit(),o.submit=l}}catch(e){}}e.finishInit=function(e){e.save=n,e.getTextArea=function(){return t},e.toTextArea=function(){e.toTextArea=isNaN,n(),t.parentNode.removeChild(e.getWrapperElement()),t.style.display="",t.form&&(pe(t.form,"submit",n),"function"==typeof t.form.submit&&(t.form.submit=i))}},t.style.display="none";var s=Cl(function(e){return t.parentNode.insertBefore(e,t.nextSibling)},e);return s},(Kl=Cl).off=pe,Kl.on=fe,Kl.wheelEventPixels=gi,Kl.Doc=To,Kl.splitLines=We,Kl.countColumn=z,Kl.findColumn=X,Kl.isWordChar=ee,Kl.Pass=U,Kl.signal=ge,Kl.Line=Xt,Kl.changeEnd=xi,Kl.scrollbarModel=Rn,Kl.Pos=et,Kl.cmpPos=tt,Kl.modes=Ee,Kl.mimeModes=Ie,Kl.resolveMode=ze,Kl.getMode=Re,Kl.modeExtensions=Be,Kl.extendMode=Ge,Kl.copyState=Ue,Kl.startState=Ke,Kl.innerMode=Ve,Kl.commands=qo,Kl.keyMap=zo,Kl.keyName=Ko,Kl.isModifierKey=Uo,Kl.lookupKey=Go,Kl.normalizeKeyMap=Bo,Kl.StringStream=je,Kl.SharedTextMarker=Co,Kl.TextMarker=wo,Kl.LineWidget=mo,Kl.e_preventDefault=we,Kl.e_stopPropagation=xe,Kl.e_stop=Se,Kl.addClass=H,Kl.contains=D,Kl.rmClass=T,Kl.keyNames=Fo,Cl.version="5.46.0",Cl});
/*****/
//
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("css", function(config, parserConfig) {
  var inline = parserConfig.inline
  if (!parserConfig.propertyKeywords) parserConfig = CodeMirror.resolveMode("text/css");

  var indentUnit = config.indentUnit,
      tokenHooks = parserConfig.tokenHooks,
      documentTypes = parserConfig.documentTypes || {},
      mediaTypes = parserConfig.mediaTypes || {},
      mediaFeatures = parserConfig.mediaFeatures || {},
      mediaValueKeywords = parserConfig.mediaValueKeywords || {},
      propertyKeywords = parserConfig.propertyKeywords || {},
      nonStandardPropertyKeywords = parserConfig.nonStandardPropertyKeywords || {},
      fontProperties = parserConfig.fontProperties || {},
      counterDescriptors = parserConfig.counterDescriptors || {},
      colorKeywords = parserConfig.colorKeywords || {},
      valueKeywords = parserConfig.valueKeywords || {},
      allowNested = parserConfig.allowNested,
      lineComment = parserConfig.lineComment,
      supportsAtComponent = parserConfig.supportsAtComponent === true;

  var type, override;
  function ret(style, tp) { type = tp; return style; }

  // Tokenizers

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (tokenHooks[ch]) {
      var result = tokenHooks[ch](stream, state);
      if (result !== false) return result;
    }
    if (ch == "@") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("def", stream.current());
    } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) {
      return ret(null, "compare");
    } else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "#") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("atom", "hash");
    } else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    } else if (ch === "-") {
      if (/[\d.]/.test(stream.peek())) {
        stream.eatWhile(/[\w.%]/);
        return ret("number", "unit");
      } else if (stream.match(/^-[\w\\\-]*/)) {
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ret("variable-2", "variable-definition");
        return ret("variable-2", "variable");
      } else if (stream.match(/^\w+-/)) {
        return ret("meta", "meta");
      }
    } else if (/[,+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    } else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
      return ret("qualifier", "qualifier");
    } else if (/[:;{}\[\]\(\)]/.test(ch)) {
      return ret(null, ch);
    } else if (stream.match(/[\w-.]+(?=\()/)) {
      if (/^(url(-prefix)?|domain|regexp)$/.test(stream.current().toLowerCase())) {
        state.tokenize = tokenParenthesized;
      }
      return ret("variable callee", "variable");
    } else if (/[\w\\\-]/.test(ch)) {
      stream.eatWhile(/[\w\\\-]/);
      return ret("property", "word");
    } else {
      return ret(null, null);
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped) {
          if (quote == ")") stream.backUp(1);
          break;
        }
        escaped = !escaped && ch == "\\";
      }
      if (ch == quote || !escaped && quote != ")") state.tokenize = null;
      return ret("string", "string");
    };
  }

  function tokenParenthesized(stream, state) {
    stream.next(); // Must be '('
    if (!stream.match(/\s*[\"\')]/, false))
      state.tokenize = tokenString(")");
    else
      state.tokenize = null;
    return ret(null, "(");
  }

  // Context management

  function Context(type, indent, prev) {
    this.type = type;
    this.indent = indent;
    this.prev = prev;
  }

  function pushContext(state, stream, type, indent) {
    state.context = new Context(type, stream.indentation() + (indent === false ? 0 : indentUnit), state.context);
    return type;
  }

  function popContext(state) {
    if (state.context.prev)
      state.context = state.context.prev;
    return state.context.type;
  }

  function pass(type, stream, state) {
    return states[state.context.type](type, stream, state);
  }
  function popAndPass(type, stream, state, n) {
    for (var i = n || 1; i > 0; i--)
      state.context = state.context.prev;
    return pass(type, stream, state);
  }

  // Parser

  function wordAsValue(stream) {
    var word = stream.current().toLowerCase();
    if (valueKeywords.hasOwnProperty(word))
      override = "atom";
    else if (colorKeywords.hasOwnProperty(word))
      override = "keyword";
    else
      override = "variable";
  }

  var states = {};

  states.top = function(type, stream, state) {
    if (type == "{") {
      return pushContext(state, stream, "block");
    } else if (type == "}" && state.context.prev) {
      return popContext(state);
    } else if (supportsAtComponent && /@component/i.test(type)) {
      return pushContext(state, stream, "atComponentBlock");
    } else if (/^@(-moz-)?document$/i.test(type)) {
      return pushContext(state, stream, "documentTypes");
    } else if (/^@(media|supports|(-moz-)?document|import)$/i.test(type)) {
      return pushContext(state, stream, "atBlock");
    } else if (/^@(font-face|counter-style)/i.test(type)) {
      state.stateArg = type;
      return "restricted_atBlock_before";
    } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(type)) {
      return "keyframes";
    } else if (type && type.charAt(0) == "@") {
      return pushContext(state, stream, "at");
    } else if (type == "hash") {
      override = "builtin";
    } else if (type == "word") {
      override = "tag";
    } else if (type == "variable-definition") {
      return "maybeprop";
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    } else if (type == ":") {
      return "pseudo";
    } else if (allowNested && type == "(") {
      return pushContext(state, stream, "parens");
    }
    return state.context.type;
  };

  states.block = function(type, stream, state) {
    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (propertyKeywords.hasOwnProperty(word)) {
        override = "property";
        return "maybeprop";
      } else if (nonStandardPropertyKeywords.hasOwnProperty(word)) {
        override = "string-2";
        return "maybeprop";
      } else if (allowNested) {
        override = stream.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
        return "block";
      } else {
        override += " error";
        return "maybeprop";
      }
    } else if (type == "meta") {
      return "block";
    } else if (!allowNested && (type == "hash" || type == "qualifier")) {
      override = "error";
      return "block";
    } else {
      return states.top(type, stream, state);
    }
  };

  states.maybeprop = function(type, stream, state) {
    if (type == ":") return pushContext(state, stream, "prop");
    return pass(type, stream, state);
  };

  states.prop = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" && allowNested) return pushContext(state, stream, "propBlock");
    if (type == "}" || type == "{") return popAndPass(type, stream, state);
    if (type == "(") return pushContext(state, stream, "parens");

    if (type == "hash" && !/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())) {
      override += " error";
    } else if (type == "word") {
      wordAsValue(stream);
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    }
    return "prop";
  };

  states.propBlock = function(type, _stream, state) {
    if (type == "}") return popContext(state);
    if (type == "word") { override = "property"; return "maybeprop"; }
    return state.context.type;
  };

  states.parens = function(type, stream, state) {
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == ")") return popContext(state);
    if (type == "(") return pushContext(state, stream, "parens");
    if (type == "interpolation") return pushContext(state, stream, "interpolation");
    if (type == "word") wordAsValue(stream);
    return "parens";
  };

  states.pseudo = function(type, stream, state) {
    if (type == "meta") return "pseudo";

    if (type == "word") {
      override = "variable-3";
      return state.context.type;
    }
    return pass(type, stream, state);
  };

  states.documentTypes = function(type, stream, state) {
    if (type == "word" && documentTypes.hasOwnProperty(stream.current())) {
      override = "tag";
      return state.context.type;
    } else {
      return states.atBlock(type, stream, state);
    }
  };

  states.atBlock = function(type, stream, state) {
    if (type == "(") return pushContext(state, stream, "atBlock_parens");
    if (type == "}" || type == ";") return popAndPass(type, stream, state);
    if (type == "{") return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top");

    if (type == "interpolation") return pushContext(state, stream, "interpolation");

    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (word == "only" || word == "not" || word == "and" || word == "or")
        override = "keyword";
      else if (mediaTypes.hasOwnProperty(word))
        override = "attribute";
      else if (mediaFeatures.hasOwnProperty(word))
        override = "property";
      else if (mediaValueKeywords.hasOwnProperty(word))
        override = "keyword";
      else if (propertyKeywords.hasOwnProperty(word))
        override = "property";
      else if (nonStandardPropertyKeywords.hasOwnProperty(word))
        override = "string-2";
      else if (valueKeywords.hasOwnProperty(word))
        override = "atom";
      else if (colorKeywords.hasOwnProperty(word))
        override = "keyword";
      else
        override = "error";
    }
    return state.context.type;
  };

  states.atComponentBlock = function(type, stream, state) {
    if (type == "}")
      return popAndPass(type, stream, state);
    if (type == "{")
      return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top", false);
    if (type == "word")
      override = "error";
    return state.context.type;
  };

  states.atBlock_parens = function(type, stream, state) {
    if (type == ")") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state, 2);
    return states.atBlock(type, stream, state);
  };

  states.restricted_atBlock_before = function(type, stream, state) {
    if (type == "{")
      return pushContext(state, stream, "restricted_atBlock");
    if (type == "word" && state.stateArg == "@counter-style") {
      override = "variable";
      return "restricted_atBlock_before";
    }
    return pass(type, stream, state);
  };

  states.restricted_atBlock = function(type, stream, state) {
    if (type == "}") {
      state.stateArg = null;
      return popContext(state);
    }
    if (type == "word") {
      if ((state.stateArg == "@font-face" && !fontProperties.hasOwnProperty(stream.current().toLowerCase())) ||
          (state.stateArg == "@counter-style" && !counterDescriptors.hasOwnProperty(stream.current().toLowerCase())))
        override = "error";
      else
        override = "property";
      return "maybeprop";
    }
    return "restricted_atBlock";
  };

  states.keyframes = function(type, stream, state) {
    if (type == "word") { override = "variable"; return "keyframes"; }
    if (type == "{") return pushContext(state, stream, "top");
    return pass(type, stream, state);
  };

  states.at = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == "word") override = "tag";
    else if (type == "hash") override = "builtin";
    return "at";
  };

  states.interpolation = function(type, stream, state) {
    if (type == "}") return popContext(state);
    if (type == "{" || type == ";") return popAndPass(type, stream, state);
    if (type == "word") override = "variable";
    else if (type != "variable" && type != "(" && type != ")") override = "error";
    return "interpolation";
  };

  return {
    startState: function(base) {
      return {tokenize: null,
              state: inline ? "block" : "top",
              stateArg: null,
              context: new Context(inline ? "block" : "top", base || 0, null)};
    },

    token: function(stream, state) {
      if (!state.tokenize && stream.eatSpace()) return null;
      var style = (state.tokenize || tokenBase)(stream, state);
      if (style && typeof style == "object") {
        type = style[1];
        style = style[0];
      }
      override = style;
      if (type != "comment")
        state.state = states[state.state](type, stream, state);
      return override;
    },

    indent: function(state, textAfter) {
      var cx = state.context, ch = textAfter && textAfter.charAt(0);
      var indent = cx.indent;
      if (cx.type == "prop" && (ch == "}" || ch == ")")) cx = cx.prev;
      if (cx.prev) {
        if (ch == "}" && (cx.type == "block" || cx.type == "top" ||
                          cx.type == "interpolation" || cx.type == "restricted_atBlock")) {
          // Resume indentation from parent context.
          cx = cx.prev;
          indent = cx.indent;
        } else if (ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") ||
            ch == "{" && (cx.type == "at" || cx.type == "atBlock")) {
          // Dedent relative to current context.
          indent = Math.max(0, cx.indent - indentUnit);
        }
      }
      return indent;
    },

    electricChars: "}",
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: lineComment,
    fold: "brace"
  };
});

  function keySet(array) {
    var keys = {};
    for (var i = 0; i < array.length; ++i) {
      keys[array[i].toLowerCase()] = true;
    }
    return keys;
  }

  var documentTypes_ = [
    "domain", "regexp", "url", "url-prefix"
  ], documentTypes = keySet(documentTypes_);

  var mediaTypes_ = [
    "all", "aural", "braille", "handheld", "print", "projection", "screen",
    "tty", "tv", "embossed"
  ], mediaTypes = keySet(mediaTypes_);

  var mediaFeatures_ = [
    "width", "min-width", "max-width", "height", "min-height", "max-height",
    "device-width", "min-device-width", "max-device-width", "device-height",
    "min-device-height", "max-device-height", "aspect-ratio",
    "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio",
    "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color",
    "max-color", "color-index", "min-color-index", "max-color-index",
    "monochrome", "min-monochrome", "max-monochrome", "resolution",
    "min-resolution", "max-resolution", "scan", "grid", "orientation",
    "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio",
    "pointer", "any-pointer", "hover", "any-hover"
  ], mediaFeatures = keySet(mediaFeatures_);

  var mediaValueKeywords_ = [
    "landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover",
    "interlace", "progressive"
  ], mediaValueKeywords = keySet(mediaValueKeywords_);

  var propertyKeywords_ = [
    "align-content", "align-items", "align-self", "alignment-adjust",
    "alignment-baseline", "anchor-point", "animation", "animation-delay",
    "animation-direction", "animation-duration", "animation-fill-mode",
    "animation-iteration-count", "animation-name", "animation-play-state",
    "animation-timing-function", "appearance", "azimuth", "backface-visibility",
    "background", "background-attachment", "background-blend-mode", "background-clip",
    "background-color", "background-image", "background-origin", "background-position",
    "background-repeat", "background-size", "baseline-shift", "binding",
    "bleed", "bookmark-label", "bookmark-level", "bookmark-state",
    "bookmark-target", "border", "border-bottom", "border-bottom-color",
    "border-bottom-left-radius", "border-bottom-right-radius",
    "border-bottom-style", "border-bottom-width", "border-collapse",
    "border-color", "border-image", "border-image-outset",
    "border-image-repeat", "border-image-slice", "border-image-source",
    "border-image-width", "border-left", "border-left-color",
    "border-left-style", "border-left-width", "border-radius", "border-right",
    "border-right-color", "border-right-style", "border-right-width",
    "border-spacing", "border-style", "border-top", "border-top-color",
    "border-top-left-radius", "border-top-right-radius", "border-top-style",
    "border-top-width", "border-width", "bottom", "box-decoration-break",
    "box-shadow", "box-sizing", "break-after", "break-before", "break-inside",
    "caption-side", "caret-color", "clear", "clip", "color", "color-profile", "column-count",
    "column-fill", "column-gap", "column-rule", "column-rule-color",
    "column-rule-style", "column-rule-width", "column-span", "column-width",
    "columns", "content", "counter-increment", "counter-reset", "crop", "cue",
    "cue-after", "cue-before", "cursor", "direction", "display",
    "dominant-baseline", "drop-initial-after-adjust",
    "drop-initial-after-align", "drop-initial-before-adjust",
    "drop-initial-before-align", "drop-initial-size", "drop-initial-value",
    "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis",
    "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap",
    "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings",
    "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust",
    "font-stretch", "font-style", "font-synthesis", "font-variant",
    "font-variant-alternates", "font-variant-caps", "font-variant-east-asian",
    "font-variant-ligatures", "font-variant-numeric", "font-variant-position",
    "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow",
    "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap",
    "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap",
    "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns",
    "grid-template-rows", "hanging-punctuation", "height", "hyphens",
    "icon", "image-orientation", "image-rendering", "image-resolution",
    "inline-box-align", "justify-content", "justify-items", "justify-self", "left", "letter-spacing",
    "line-break", "line-height", "line-stacking", "line-stacking-ruby",
    "line-stacking-shift", "line-stacking-strategy", "list-style",
    "list-style-image", "list-style-position", "list-style-type", "margin",
    "margin-bottom", "margin-left", "margin-right", "margin-top",
    "marks", "marquee-direction", "marquee-loop",
    "marquee-play-count", "marquee-speed", "marquee-style", "max-height",
    "max-width", "min-height", "min-width", "mix-blend-mode", "move-to", "nav-down", "nav-index",
    "nav-left", "nav-right", "nav-up", "object-fit", "object-position",
    "opacity", "order", "orphans", "outline",
    "outline-color", "outline-offset", "outline-style", "outline-width",
    "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y",
    "padding", "padding-bottom", "padding-left", "padding-right", "padding-top",
    "page", "page-break-after", "page-break-before", "page-break-inside",
    "page-policy", "pause", "pause-after", "pause-before", "perspective",
    "perspective-origin", "pitch", "pitch-range", "place-content", "place-items", "place-self", "play-during", "position",
    "presentation-level", "punctuation-trim", "quotes", "region-break-after",
    "region-break-before", "region-break-inside", "region-fragment",
    "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness",
    "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang",
    "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin",
    "shape-outside", "size", "speak", "speak-as", "speak-header",
    "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set",
    "tab-size", "table-layout", "target", "target-name", "target-new",
    "target-position", "text-align", "text-align-last", "text-decoration",
    "text-decoration-color", "text-decoration-line", "text-decoration-skip",
    "text-decoration-style", "text-emphasis", "text-emphasis-color",
    "text-emphasis-position", "text-emphasis-style", "text-height",
    "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow",
    "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position",
    "text-wrap", "top", "transform", "transform-origin", "transform-style",
    "transition", "transition-delay", "transition-duration",
    "transition-property", "transition-timing-function", "unicode-bidi",
    "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration",
    "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress",
    "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break",
    "word-spacing", "word-wrap", "z-index",
    // SVG-specific
    "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color",
    "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events",
    "color-interpolation", "color-interpolation-filters",
    "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering",
    "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke",
    "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin",
    "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering",
    "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal",
    "glyph-orientation-vertical", "text-anchor", "writing-mode"
  ], propertyKeywords = keySet(propertyKeywords_);

  var nonStandardPropertyKeywords_ = [
    "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color",
    "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color",
    "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside",
    "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button",
    "searchfield-results-decoration", "zoom"
  ], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);

  var fontProperties_ = [
    "font-family", "src", "unicode-range", "font-variant", "font-feature-settings",
    "font-stretch", "font-weight", "font-style"
  ], fontProperties = keySet(fontProperties_);

  var counterDescriptors_ = [
    "additive-symbols", "fallback", "negative", "pad", "prefix", "range",
    "speak-as", "suffix", "symbols", "system"
  ], counterDescriptors = keySet(counterDescriptors_);

  var colorKeywords_ = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige",
    "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown",
    "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod",
    "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
    "darkslateblue", "darkslategray", "darkturquoise", "darkviolet",
    "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
    "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
    "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew",
    "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender",
    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",
    "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta",
    "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
    "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
    "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
    "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue",
    "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown",
    "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue",
    "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan",
    "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white",
    "whitesmoke", "yellow", "yellowgreen"
  ], colorKeywords = keySet(colorKeywords_);

  var valueKeywords_ = [
    "above", "absolute", "activeborder", "additive", "activecaption", "afar",
    "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate",
    "always", "amharic", "amharic-abegede", "antialiased", "appworkspace",
    "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page",
    "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary",
    "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box",
    "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel",
    "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian",
    "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret",
    "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch",
    "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote",
    "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse",
    "compact", "condensed", "contain", "content", "contents",
    "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop",
    "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal",
    "decimal-leading-zero", "default", "default-button", "dense", "destination-atop",
    "destination-in", "destination-out", "destination-over", "devanagari", "difference",
    "disc", "discard", "disclosure-closed", "disclosure-open", "document",
    "dot-dash", "dot-dot-dash",
    "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out",
    "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede",
    "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er",
    "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er",
    "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et",
    "ethiopic-halehame-gez", "ethiopic-halehame-om-et",
    "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et",
    "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig",
    "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed",
    "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes",
    "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove",
    "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew",
    "help", "hidden", "hide", "higher", "highlight", "highlighttext",
    "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore",
    "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite",
    "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis",
    "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert",
    "italic", "japanese-formal", "japanese-informal", "justify", "kannada",
    "katakana", "katakana-iroha", "keep-all", "khmer",
    "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal",
    "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten",
    "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem",
    "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian",
    "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian",
    "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d",
    "media-controls-background", "media-current-time-display",
    "media-fullscreen-button", "media-mute-button", "media-play-button",
    "media-return-to-realtime-button", "media-rewind-button",
    "media-seek-back-button", "media-seek-forward-button", "media-slider",
    "media-sliderthumb", "media-time-remaining-display", "media-volume-slider",
    "media-volume-slider-container", "media-volume-sliderthumb", "medium",
    "menu", "menulist", "menulist-button", "menulist-text",
    "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic",
    "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize",
    "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop",
    "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap",
    "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote",
    "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset",
    "outside", "outside-shape", "overlay", "overline", "padding", "padding-box",
    "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter",
    "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d",
    "progress", "push-button", "radial-gradient", "radio", "read-only",
    "read-write", "read-write-plaintext-only", "rectangle", "region",
    "relative", "repeat", "repeating-linear-gradient",
    "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse",
    "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY",
    "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running",
    "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen",
    "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield",
    "searchfield-cancel-button", "searchfield-decoration",
    "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end",
    "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama",
    "simp-chinese-formal", "simp-chinese-informal", "single",
    "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal",
    "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow",
    "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali",
    "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square",
    "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub",
    "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table",
    "table-caption", "table-cell", "table-column", "table-column-group",
    "table-footer-group", "table-header-group", "table-row", "table-row-group",
    "tamil",
    "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai",
    "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight",
    "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er",
    "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top",
    "trad-chinese-formal", "trad-chinese-informal", "transform",
    "translate", "translate3d", "translateX", "translateY", "translateZ",
    "transparent", "ultra-condensed", "ultra-expanded", "underline", "unset", "up",
    "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal",
    "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url",
    "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted",
    "visibleStroke", "visual", "w-resize", "wait", "wave", "wider",
    "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor",
    "xx-large", "xx-small"
  ], valueKeywords = keySet(valueKeywords_);

  var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_)
    .concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_)
    .concat(valueKeywords_);
  CodeMirror.registerHelper("hintWords", "css", allWords);

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = null;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ["comment", "comment"];
  }

  CodeMirror.defineMIME("text/css", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css"
  });

  CodeMirror.defineMIME("text/x-scss", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      ":": function(stream) {
        if (stream.match(/\s*\{/, false))
          return [null, null]
        return false;
      },
      "$": function(stream) {
        stream.match(/^[\w-]+/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "#": function(stream) {
        if (!stream.eat("{")) return false;
        return [null, "interpolation"];
      }
    },
    name: "css",
    helperType: "scss"
  });

  CodeMirror.defineMIME("text/x-less", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      "@": function(stream) {
        if (stream.eat("{")) return [null, "interpolation"];
        if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false)) return false;
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "&": function() {
        return ["atom", "atom"];
      }
    },
    name: "css",
    helperType: "less"
  });

  CodeMirror.defineMIME("text/x-gss", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    supportsAtComponent: true,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css",
    helperType: "gss"
  });

});

/*****/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";  
  
CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var statementIndent = parserConfig.statementIndent;
  var jsonldMode = parserConfig.jsonld;
  var jsonMode = parserConfig.json || jsonldMode;
  var isTS = parserConfig.typescript;
  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

    return {
      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": D, "break": D, "continue": D, "new": kw("new"), "delete": C, "void": C, "throw": C,
      "debugger": kw("debugger"), "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
      "await": C
    };
  }();

  var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

  function readRegexp(stream) {
    var escaped = false, next, inSet = false;
    while ((next = stream.next()) != null) {
      if (!escaped) {
        if (next == "/" && !inSet) return;
        if (next == "[") inSet = true;
        else if (inSet && next == "]") inSet = false;
      }
      escaped = !escaped && next == "\\";
    }
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }
  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "." && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
      return ret("number", "number");
    } else if (ch == "." && stream.match("..")) {
      return ret("spread", "meta");
    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      return ret(ch);
    } else if (ch == "=" && stream.eat(">")) {
      return ret("=>", "operator");
    } else if (ch == "0" && stream.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i)) {
      return ret("number", "number");
    } else if (/\d/.test(ch)) {
      stream.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/);
      return ret("number", "number");
    } else if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      } else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      } else if (expressionAllowed(stream, state, 1)) {
        readRegexp(stream);
        stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
        return ret("regexp", "string-2");
      } else {
        stream.eat("=");
        return ret("operator", "operator", stream.current());
      }
    } else if (ch == "`") {
      state.tokenize = tokenQuasi;
      return tokenQuasi(stream, state);
    } else if (ch == "#") {
      stream.skipToEnd();
      return ret("error", "error");
    } else if (isOperatorChar.test(ch)) {
      if (ch != ">" || !state.lexical || state.lexical.type != ">") {
        if (stream.eat("=")) {
          if (ch == "!" || ch == "=") stream.eat("=")
        } else if (/[<>*+\-]/.test(ch)) {
          stream.eat(ch)
          if (ch == ">") stream.eat(ch)
        }
      }
      return ret("operator", "operator", stream.current());
    } else if (wordRE.test(ch)) {
      stream.eatWhile(wordRE);
      var word = stream.current()
      if (state.lastType != ".") {
        if (keywords.propertyIsEnumerable(word)) {
          var kw = keywords[word]
          return ret(kw.type, kw.style, word)
        }
        if (word == "async" && stream.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, false))
          return ret("async", "keyword", word)
      }
      return ret("variable", "variable", word)
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next;
      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
        state.tokenize = tokenBase;
        return ret("jsonld-keyword", "meta");
      }
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) break;
        escaped = !escaped && next == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenQuasi(stream, state) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
        state.tokenize = tokenBase;
        break;
      }
      escaped = !escaped && next == "\\";
    }
    return ret("quasi", "string-2", stream.current());
  }

  var brackets = "([{}])";
  // This is a crude lookahead trick to try and notice that we're
  // parsing the argument patterns for a fat-arrow function before we
  // actually hit the arrow token. It only works if the arrow is on
  // the same line as the arguments and there's no strange noise
  // (comments) in between. Fallback is to only notice when we hit the
  // arrow, and not declare the arguments as locals for the arrow
  // body.
  function findFatArrow(stream, state) {
    if (state.fatArrowAt) state.fatArrowAt = null;
    var arrow = stream.string.indexOf("=>", stream.start);
    if (arrow < 0) return;

    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow))
      if (m) arrow = m.index
    }

    var depth = 0, sawSomething = false;
    for (var pos = arrow - 1; pos >= 0; --pos) {
      var ch = stream.string.charAt(pos);
      var bracket = brackets.indexOf(ch);
      if (bracket >= 0 && bracket < 3) {
        if (!depth) { ++pos; break; }
        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
      } else if (bracket >= 3 && bracket < 6) {
        ++depth;
      } else if (wordRE.test(ch)) {
        sawSomething = true;
      } else if (/["'\/]/.test(ch)) {
        return;
      } else if (sawSomething && !depth) {
        ++pos;
        break;
      }
    }
    if (sawSomething && !depth) state.fatArrowAt = pos;
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
    for (var cx = state.context; cx; cx = cx.prev) {
      for (var v = cx.vars; v; v = v.next)
        if (v.name == varname) return true;
    }
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function inList(name, list) {
    for (var v = list; v; v = v.next) if (v.name == name) return true
    return false;
  }
  function register(varname) {
    var state = cx.state;
    cx.marked = "def";
    if (state.context) {
      if (state.lexical.info == "var" && state.context && state.context.block) {
        // FIXME function decls are also not block scoped
        var newContext = registerVarScoped(varname, state.context)
        if (newContext != null) {
          state.context = newContext
          return
        }
      } else if (!inList(varname, state.localVars)) {
        state.localVars = new Var(varname, state.localVars)
        return
      }
    }
    // Fall through means this is global
    if (parserConfig.globalVars && !inList(varname, state.globalVars))
      state.globalVars = new Var(varname, state.globalVars)
  }
  function registerVarScoped(varname, context) {
    if (!context) {
      return null
    } else if (context.block) {
      var inner = registerVarScoped(varname, context.prev)
      if (!inner) return null
      if (inner == context.prev) return context
      return new Context(inner, context.vars, true)
    } else if (inList(varname, context.vars)) {
      return context
    } else {
      return new Context(context.prev, new Var(varname, context.vars), false)
    }
  }

  function isModifier(name) {
    return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly"
  }

  // Combinators

  function Context(prev, vars, block) { this.prev = prev; this.vars = vars; this.block = block }
  function Var(name, next) { this.name = name; this.next = next }

  var defaultVars = new Var("this", new Var("arguments", null))
  function pushcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, false)
    cx.state.localVars = defaultVars
  }
  function pushblockcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, true)
    cx.state.localVars = null
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars
    cx.state.context = cx.state.context.prev
  }
  popcontext.lex = true
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state, indent = state.indented;
      if (state.lexical.type == "stat") indent = state.lexical.indented;
      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
        indent = outer.indented;
      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    function exp(type) {
      if (type == wanted) return cont();
      else if (wanted == ";" || type == "}" || type == ")" || type == "]") return pass();
      else return cont(exp);
    };
    return exp;
  }

  function statement(type, value) {
    if (type == "var") return cont(pushlex("vardef", value), vardef, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "keyword d") return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
    if (type == "debugger") return cont(expect(";"));
    if (type == "{") return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext);
    if (type == ";") return cont();
    if (type == "if") {
      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
        cx.state.cc.pop()();
      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
    }
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
    if (type == "class" || (isTS && value == "interface")) {
      cx.marked = "keyword"
      return cont(pushlex("form", type == "class" ? type : value), className, poplex)
    }
    if (type == "variable") {
      if (isTS && value == "declare") {
        cx.marked = "keyword"
        return cont(statement)
      } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
        cx.marked = "keyword"
        if (value == "enum") return cont(enumdef);
        else if (value == "type") return cont(typename, expect("operator"), typeexpr, expect(";"));
        else return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex)
      } else if (isTS && value == "namespace") {
        cx.marked = "keyword"
        return cont(pushlex("form"), expression, statement, poplex)
      } else if (isTS && value == "abstract") {
        cx.marked = "keyword"
        return cont(statement)
      } else {
        return cont(pushlex("stat"), maybelabel);
      }
    }
    if (type == "switch") return cont(pushlex("form"), parenExpr, expect("{"), pushlex("}", "switch"), pushblockcontext,
                                      block, poplex, poplex, popcontext);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
    if (type == "async") return cont(statement)
    if (value == "@") return cont(expression, statement)
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function maybeCatchBinding(type) {
    if (type == "(") return cont(funarg, expect(")"))
  }
  function expression(type, value) {
    return expressionInner(type, value, false);
  }
  function expressionNoComma(type, value) {
    return expressionInner(type, value, true);
  }
  function parenExpr(type) {
    if (type != "(") return pass()
    return cont(pushlex(")"), expression, expect(")"), poplex)
  }
  function expressionInner(type, value, noComma) {
    if (cx.state.fatArrowAt == cx.stream.start) {
      var body = noComma ? arrowBodyNoComma : arrowBody;
      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
    }

    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
    if (type == "function") return cont(functiondef, maybeop);
    if (type == "class" || (isTS && value == "interface")) { cx.marked = "keyword"; return cont(pushlex("form"), classExpression, poplex); }
    if (type == "keyword c" || type == "async") return cont(noComma ? expressionNoComma : expression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
    if (type == "quasi") return pass(quasi, maybeop);
    if (type == "new") return cont(maybeTarget(noComma));
    if (type == "import") return cont(expression);
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }

  function maybeoperatorComma(type, value) {
    if (type == ",") return cont(expression);
    return maybeoperatorNoComma(type, value, false);
  }
  function maybeoperatorNoComma(type, value, noComma) {
    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
    var expr = noComma == false ? expression : expressionNoComma;
    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
    if (type == "operator") {
      if (/\+\+|--/.test(value) || isTS && value == "!") return cont(me);
      if (isTS && value == "<" && cx.stream.match(/^([^>]|<.*?>)*>\s*\(/, false))
        return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me);
      if (value == "?") return cont(expression, expect(":"), expr);
      return cont(expr);
    }
    if (type == "quasi") { return pass(quasi, me); }
    if (type == ";") return;
    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
    if (type == ".") return cont(property, me);
    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
    if (isTS && value == "as") { cx.marked = "keyword"; return cont(typeexpr, me) }
    if (type == "regexp") {
      cx.state.lastType = cx.marked = "operator"
      cx.stream.backUp(cx.stream.pos - cx.stream.start - 1)
      return cont(expr)
    }
  }
  function quasi(type, value) {
    if (type != "quasi") return pass();
    if (value.slice(value.length - 2) != "${") return cont(quasi);
    return cont(expression, continueQuasi);
  }
  function continueQuasi(type) {
    if (type == "}") {
      cx.marked = "string-2";
      cx.state.tokenize = tokenQuasi;
      return cont(quasi);
    }
  }
  function arrowBody(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expression);
  }
  function arrowBodyNoComma(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expressionNoComma);
  }
  function maybeTarget(noComma) {
    return function(type) {
      if (type == ".") return cont(noComma ? targetNoComma : target);
      else if (type == "variable" && isTS) return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma)
      else return pass(noComma ? expressionNoComma : expression);
    };
  }
  function target(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
  }
  function targetNoComma(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperatorComma, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type, value) {
    if (type == "async") {
      cx.marked = "property";
      return cont(objprop);
    } else if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      if (value == "get" || value == "set") return cont(getterSetter);
      var m // Work around fat-arrow-detection complication for detecting typescript typed arrow params
      if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
        cx.state.fatArrowAt = cx.stream.pos + m[0].length
      return cont(afterprop);
    } else if (type == "number" || type == "string") {
      cx.marked = jsonldMode ? "property" : (cx.style + " property");
      return cont(afterprop);
    } else if (type == "jsonld-keyword") {
      return cont(afterprop);
    } else if (isTS && isModifier(value)) {
      cx.marked = "keyword"
      return cont(objprop)
    } else if (type == "[") {
      return cont(expression, maybetype, expect("]"), afterprop);
    } else if (type == "spread") {
      return cont(expressionNoComma, afterprop);
    } else if (value == "*") {
      cx.marked = "keyword";
      return cont(objprop);
    } else if (type == ":") {
      return pass(afterprop)
    }
  }
  function getterSetter(type) {
    if (type != "variable") return pass(afterprop);
    cx.marked = "property";
    return cont(functiondef);
  }
  function afterprop(type) {
    if (type == ":") return cont(expressionNoComma);
    if (type == "(") return pass(functiondef);
  }
  function commasep(what, end, sep) {
    function proceed(type, value) {
      if (sep ? sep.indexOf(type) > -1 : type == ",") {
        var lex = cx.state.lexical;
        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
        return cont(function(type, value) {
          if (type == end || value == end) return pass()
          return pass(what)
        }, proceed);
      }
      if (type == end || value == end) return cont();
      if (sep && sep.indexOf(";") > -1) return pass(what)
      return cont(expect(end));
    }
    return function(type, value) {
      if (type == end || value == end) return cont();
      return pass(what, proceed);
    };
  }
  function contCommasep(what, end, info) {
    for (var i = 3; i < arguments.length; i++)
      cx.cc.push(arguments[i]);
    return cont(pushlex(end, info), commasep(what, end), poplex);
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function maybetype(type, value) {
    if (isTS) {
      if (type == ":" || value == "in") return cont(typeexpr);
      if (value == "?") return cont(maybetype);
    }
  }
  function mayberettype(type) {
    if (isTS && type == ":") {
      if (cx.stream.match(/^\s*\w+\s+is\b/, false)) return cont(expression, isKW, typeexpr)
      else return cont(typeexpr)
    }
  }
  function isKW(_, value) {
    if (value == "is") {
      cx.marked = "keyword"
      return cont()
    }
  }
  function typeexpr(type, value) {
    if (value == "keyof" || value == "typeof" || value == "infer") {
      cx.marked = "keyword"
      return cont(value == "typeof" ? expressionNoComma : typeexpr)
    }
    if (type == "variable" || value == "void") {
      cx.marked = "type"
      return cont(afterType)
    }
    if (value == "|" || value == "&") return cont(typeexpr)
    if (type == "string" || type == "number" || type == "atom") return cont(afterType);
    if (type == "[") return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType)
    if (type == "{") return cont(pushlex("}"), commasep(typeprop, "}", ",;"), poplex, afterType)
    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType, afterType)
    if (type == "<") return cont(commasep(typeexpr, ">"), typeexpr)
  }
  function maybeReturnType(type) {
    if (type == "=>") return cont(typeexpr)
  }
  function typeprop(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property"
      return cont(typeprop)
    } else if (value == "?" || type == "number" || type == "string") {
      return cont(typeprop)
    } else if (type == ":") {
      return cont(typeexpr)
    } else if (type == "[") {
      return cont(expect("variable"), maybetype, expect("]"), typeprop)
    } else if (type == "(") {
      return pass(functiondecl, typeprop)
    }
  }
  function typearg(type, value) {
    if (type == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?") return cont(typearg)
    if (type == ":") return cont(typeexpr)
    if (type == "spread") return cont(typearg)
    return pass(typeexpr)
  }
  function afterType(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
    if (value == "|" || type == "." || value == "&") return cont(typeexpr)
    if (type == "[") return cont(typeexpr, expect("]"), afterType)
    if (value == "extends" || value == "implements") { cx.marked = "keyword"; return cont(typeexpr) }
    if (value == "?") return cont(typeexpr, expect(":"), typeexpr)
  }
  function maybeTypeArgs(_, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
  }
  function typeparam() {
    return pass(typeexpr, maybeTypeDefault)
  }
  function maybeTypeDefault(_, value) {
    if (value == "=") return cont(typeexpr)
  }
  function vardef(_, value) {
    if (value == "enum") {cx.marked = "keyword"; return cont(enumdef)}
    return pass(pattern, maybetype, maybeAssign, vardefCont);
  }
  function pattern(type, value) {
    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(pattern) }
    if (type == "variable") { register(value); return cont(); }
    if (type == "spread") return cont(pattern);
    if (type == "[") return contCommasep(eltpattern, "]");
    if (type == "{") return contCommasep(proppattern, "}");
  }
  function proppattern(type, value) {
    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
      register(value);
      return cont(maybeAssign);
    }
    if (type == "variable") cx.marked = "property";
    if (type == "spread") return cont(pattern);
    if (type == "}") return pass();
    if (type == "[") return cont(expression, expect(']'), expect(':'), proppattern);
    return cont(expect(":"), pattern, maybeAssign);
  }
  function eltpattern() {
    return pass(pattern, maybeAssign)
  }
  function maybeAssign(_type, value) {
    if (value == "=") return cont(expressionNoComma);
  }
  function vardefCont(type) {
    if (type == ",") return cont(vardef);
  }
  function maybeelse(type, value) {
    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
  }
  function forspec(type, value) {
    if (value == "await") return cont(forspec);
    if (type == "(") return cont(pushlex(")"), forspec1, poplex);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef, forspec2);
    if (type == "variable") return cont(forspec2);
    return pass(forspec2)
  }
  function forspec2(type, value) {
    if (type == ")") return cont()
    if (type == ";") return cont(forspec2)
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression, forspec2) }
    return pass(expression, forspec2)
  }
  function functiondef(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef)
  }
  function functiondecl(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondecl);}
    if (type == "variable") {register(value); return cont(functiondecl);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl)
  }
  function typename(type, value) {
    if (type == "keyword" || type == "variable") {
      cx.marked = "type"
      return cont(typename)
    } else if (value == "<") {
      return cont(pushlex(">"), commasep(typeparam, ">"), poplex)
    }
  }
  function funarg(type, value) {
    if (value == "@") cont(expression, funarg)
    if (type == "spread") return cont(funarg);
    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(funarg); }
    if (isTS && type == "this") return cont(maybetype, maybeAssign)
    return pass(pattern, maybetype, maybeAssign);
  }
  function classExpression(type, value) {
    // Class expressions may have an optional name.
    if (type == "variable") return className(type, value);
    return classNameAfter(type, value);
  }
  function className(type, value) {
    if (type == "variable") {register(value); return cont(classNameAfter);}
  }
  function classNameAfter(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter)
    if (value == "extends" || value == "implements" || (isTS && type == ",")) {
      if (value == "implements") cx.marked = "keyword";
      return cont(isTS ? typeexpr : expression, classNameAfter);
    }
    if (type == "{") return cont(pushlex("}"), classBody, poplex);
  }
  function classBody(type, value) {
    if (type == "async" ||
        (type == "variable" &&
         (value == "static" || value == "get" || value == "set" || (isTS && isModifier(value))) &&
         cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false))) {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      return cont(isTS ? classfield : functiondef, classBody);
    }
    if (type == "number" || type == "string") return cont(isTS ? classfield : functiondef, classBody);
    if (type == "[")
      return cont(expression, maybetype, expect("]"), isTS ? classfield : functiondef, classBody)
    if (value == "*") {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (isTS && type == "(") return pass(functiondecl, classBody)
    if (type == ";" || type == ",") return cont(classBody);
    if (type == "}") return cont();
    if (value == "@") return cont(expression, classBody)
  }
  function classfield(type, value) {
    if (value == "?") return cont(classfield)
    if (type == ":") return cont(typeexpr, maybeAssign)
    if (value == "=") return cont(expressionNoComma)
    var context = cx.state.lexical.prev, isInterface = context && context.info == "interface"
    return pass(isInterface ? functiondecl : functiondef)
  }
  function afterExport(type, value) {
    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
    if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
    return pass(statement);
  }
  function exportField(type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
    if (type == "variable") return pass(expressionNoComma, exportField);
  }
  function afterImport(type) {
    if (type == "string") return cont();
    if (type == "(") return pass(expression);
    return pass(importSpec, maybeMoreImports, maybeFrom);
  }
  function importSpec(type, value) {
    if (type == "{") return contCommasep(importSpec, "}");
    if (type == "variable") register(value);
    if (value == "*") cx.marked = "keyword";
    return cont(maybeAs);
  }
  function maybeMoreImports(type) {
    if (type == ",") return cont(importSpec, maybeMoreImports)
  }
  function maybeAs(_type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
  }
  function maybeFrom(_type, value) {
    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
  }
  function arrayLiteral(type) {
    if (type == "]") return cont();
    return pass(commasep(expressionNoComma, "]"));
  }
  function enumdef() {
    return pass(pushlex("form"), pattern, expect("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex)
  }
  function enummember() {
    return pass(pattern, maybeAssign);
  }

  function isContinuedStatement(state, textAfter) {
    return state.lastType == "operator" || state.lastType == "," ||
      isOperatorChar.test(textAfter.charAt(0)) ||
      /[,.]/.test(textAfter.charAt(0));
  }

  function expressionAllowed(stream, state, backUp) {
    return state.tokenize == tokenBase &&
      /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
      (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
  }

  // Interface

  return {
    startState: function(basecolumn) {
      var state = {
        tokenize: tokenBase,
        lastType: "sof",
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && new Context(null, null, false),
        indented: basecolumn || 0
      };
      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
        state.globalVars = parserConfig.globalVars;
      return state;
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
        findFatArrow(stream, state);
      }
      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize == tokenComment) return CodeMirror.Pass;
      if (state.tokenize != tokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top
      // Kludge to prevent 'maybelse' from blocking lexical scope pops
      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
        var c = state.cc[i];
        if (c == poplex) lexical = lexical.prev;
        else if (c != maybeelse) break;
      }
      while ((lexical.type == "stat" || lexical.type == "form") &&
             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
        lexical = lexical.prev;
      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
        lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;

      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info.length + 1 : 0);
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "form") return lexical.indented + indentUnit;
      else if (type == "stat")
        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: jsonMode ? null : "/*",
    blockCommentEnd: jsonMode ? null : "*/",
    blockCommentContinue: jsonMode ? null : " * ",
    lineComment: jsonMode ? null : "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``",

    helperType: jsonMode ? "json" : "javascript",
    jsonldMode: jsonldMode,
    jsonMode: jsonMode,

    expressionAllowed: expressionAllowed,

    skipExpression: function(state) {
      var top = state.cc[state.cc.length - 1]
      if (top == expression || top == expressionNoComma) state.cc.pop()
    }
  };
});

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("text/ecmascript", "javascript");
CodeMirror.defineMIME("application/javascript", "javascript");
CodeMirror.defineMIME("application/x-javascript", "javascript");
CodeMirror.defineMIME("application/ecmascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

});

/*****/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../javascript/javascript"), require("../css/css"), require("../htmlmixed/htmlmixed"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../javascript/javascript", "../css/css", "../htmlmixed/htmlmixed"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("pug", function (config) {
  // token types
  var KEYWORD = 'keyword';
  var DOCTYPE = 'meta';
  var ID = 'builtin';
  var CLASS = 'qualifier';

  var ATTRS_NEST = {
    '{': '}',
    '(': ')',
    '[': ']'
  };

  var jsMode = CodeMirror.getMode(config, 'javascript');

  function State() {
    this.javaScriptLine = false;
    this.javaScriptLineExcludesColon = false;

    this.javaScriptArguments = false;
    this.javaScriptArgumentsDepth = 0;

    this.isInterpolating = false;
    this.interpolationNesting = 0;

    this.jsState = CodeMirror.startState(jsMode);

    this.restOfLine = '';

    this.isIncludeFiltered = false;
    this.isEach = false;

    this.lastTag = '';
    this.scriptType = '';

    // Attributes Mode
    this.isAttrs = false;
    this.attrsNest = [];
    this.inAttributeName = true;
    this.attributeIsType = false;
    this.attrValue = '';

    // Indented Mode
    this.indentOf = Infinity;
    this.indentToken = '';

    this.innerMode = null;
    this.innerState = null;

    this.innerModeForLine = false;
  }
  /**
   * Safely copy a state
   *
   * @return {State}
   */
  State.prototype.copy = function () {
    var res = new State();
    res.javaScriptLine = this.javaScriptLine;
    res.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon;
    res.javaScriptArguments = this.javaScriptArguments;
    res.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth;
    res.isInterpolating = this.isInterpolating;
    res.interpolationNesting = this.interpolationNesting;

    res.jsState = CodeMirror.copyState(jsMode, this.jsState);

    res.innerMode = this.innerMode;
    if (this.innerMode && this.innerState) {
      res.innerState = CodeMirror.copyState(this.innerMode, this.innerState);
    }

    res.restOfLine = this.restOfLine;

    res.isIncludeFiltered = this.isIncludeFiltered;
    res.isEach = this.isEach;
    res.lastTag = this.lastTag;
    res.scriptType = this.scriptType;
    res.isAttrs = this.isAttrs;
    res.attrsNest = this.attrsNest.slice();
    res.inAttributeName = this.inAttributeName;
    res.attributeIsType = this.attributeIsType;
    res.attrValue = this.attrValue;
    res.indentOf = this.indentOf;
    res.indentToken = this.indentToken;

    res.innerModeForLine = this.innerModeForLine;

    return res;
  };

  function javaScript(stream, state) {
    if (stream.sol()) {
      // if javaScriptLine was set at end of line, ignore it
      state.javaScriptLine = false;
      state.javaScriptLineExcludesColon = false;
    }
    if (state.javaScriptLine) {
      if (state.javaScriptLineExcludesColon && stream.peek() === ':') {
        state.javaScriptLine = false;
        state.javaScriptLineExcludesColon = false;
        return;
      }
      var tok = jsMode.token(stream, state.jsState);
      if (stream.eol()) state.javaScriptLine = false;
      return tok || true;
    }
  }
  function javaScriptArguments(stream, state) {
    if (state.javaScriptArguments) {
      if (state.javaScriptArgumentsDepth === 0 && stream.peek() !== '(') {
        state.javaScriptArguments = false;
        return;
      }
      if (stream.peek() === '(') {
        state.javaScriptArgumentsDepth++;
      } else if (stream.peek() === ')') {
        state.javaScriptArgumentsDepth--;
      }
      if (state.javaScriptArgumentsDepth === 0) {
        state.javaScriptArguments = false;
        return;
      }

      var tok = jsMode.token(stream, state.jsState);
      return tok || true;
    }
  }

  function yieldStatement(stream) {
    if (stream.match(/^yield\b/)) {
        return 'keyword';
    }
  }

  function doctype(stream) {
    if (stream.match(/^(?:doctype) *([^\n]+)?/)) {
        return DOCTYPE;
    }
  }

  function interpolation(stream, state) {
    if (stream.match('#{')) {
      state.isInterpolating = true;
      state.interpolationNesting = 0;
      return 'punctuation';
    }
  }

  function interpolationContinued(stream, state) {
    if (state.isInterpolating) {
      if (stream.peek() === '}') {
        state.interpolationNesting--;
        if (state.interpolationNesting < 0) {
          stream.next();
          state.isInterpolating = false;
          return 'punctuation';
        }
      } else if (stream.peek() === '{') {
        state.interpolationNesting++;
      }
      return jsMode.token(stream, state.jsState) || true;
    }
  }

  function caseStatement(stream, state) {
    if (stream.match(/^case\b/)) {
      state.javaScriptLine = true;
      return KEYWORD;
    }
  }

  function when(stream, state) {
    if (stream.match(/^when\b/)) {
      state.javaScriptLine = true;
      state.javaScriptLineExcludesColon = true;
      return KEYWORD;
    }
  }

  function defaultStatement(stream) {
    if (stream.match(/^default\b/)) {
      return KEYWORD;
    }
  }

  function extendsStatement(stream, state) {
    if (stream.match(/^extends?\b/)) {
      state.restOfLine = 'string';
      return KEYWORD;
    }
  }

  function append(stream, state) {
    if (stream.match(/^append\b/)) {
      state.restOfLine = 'variable';
      return KEYWORD;
    }
  }
  function prepend(stream, state) {
    if (stream.match(/^prepend\b/)) {
      state.restOfLine = 'variable';
      return KEYWORD;
    }
  }
  function block(stream, state) {
    if (stream.match(/^block\b *(?:(prepend|append)\b)?/)) {
      state.restOfLine = 'variable';
      return KEYWORD;
    }
  }

  function include(stream, state) {
    if (stream.match(/^include\b/)) {
      state.restOfLine = 'string';
      return KEYWORD;
    }
  }

  function includeFiltered(stream, state) {
    if (stream.match(/^include:([a-zA-Z0-9\-]+)/, false) && stream.match('include')) {
      state.isIncludeFiltered = true;
      return KEYWORD;
    }
  }

  function includeFilteredContinued(stream, state) {
    if (state.isIncludeFiltered) {
      var tok = filter(stream, state);
      state.isIncludeFiltered = false;
      state.restOfLine = 'string';
      return tok;
    }
  }

  function mixin(stream, state) {
    if (stream.match(/^mixin\b/)) {
      state.javaScriptLine = true;
      return KEYWORD;
    }
  }

  function call(stream, state) {
    if (stream.match(/^\+([-\w]+)/)) {
      if (!stream.match(/^\( *[-\w]+ *=/, false)) {
        state.javaScriptArguments = true;
        state.javaScriptArgumentsDepth = 0;
      }
      return 'variable';
    }
    if (stream.match(/^\+#{/, false)) {
      stream.next();
      state.mixinCallAfter = true;
      return interpolation(stream, state);
    }
  }
  function callArguments(stream, state) {
    if (state.mixinCallAfter) {
      state.mixinCallAfter = false;
      if (!stream.match(/^\( *[-\w]+ *=/, false)) {
        state.javaScriptArguments = true;
        state.javaScriptArgumentsDepth = 0;
      }
      return true;
    }
  }

  function conditional(stream, state) {
    if (stream.match(/^(if|unless|else if|else)\b/)) {
      state.javaScriptLine = true;
      return KEYWORD;
    }
  }

  function each(stream, state) {
    if (stream.match(/^(- *)?(each|for)\b/)) {
      state.isEach = true;
      return KEYWORD;
    }
  }
  function eachContinued(stream, state) {
    if (state.isEach) {
      if (stream.match(/^ in\b/)) {
        state.javaScriptLine = true;
        state.isEach = false;
        return KEYWORD;
      } else if (stream.sol() || stream.eol()) {
        state.isEach = false;
      } else if (stream.next()) {
        while (!stream.match(/^ in\b/, false) && stream.next());
        return 'variable';
      }
    }
  }

  function whileStatement(stream, state) {
    if (stream.match(/^while\b/)) {
      state.javaScriptLine = true;
      return KEYWORD;
    }
  }

  function tag(stream, state) {
    var captures;
    if (captures = stream.match(/^(\w(?:[-:\w]*\w)?)\/?/)) {
      state.lastTag = captures[1].toLowerCase();
      if (state.lastTag === 'script') {
        state.scriptType = 'application/javascript';
      }
      return 'tag';
    }
  }

  function filter(stream, state) {
    if (stream.match(/^:([\w\-]+)/)) {
      var innerMode;
      if (config && config.innerModes) {
        innerMode = config.innerModes(stream.current().substring(1));
      }
      if (!innerMode) {
        innerMode = stream.current().substring(1);
      }
      if (typeof innerMode === 'string') {
        innerMode = CodeMirror.getMode(config, innerMode);
      }
      setInnerMode(stream, state, innerMode);
      return 'atom';
    }
  }

  function code(stream, state) {
    if (stream.match(/^(!?=|-)/)) {
      state.javaScriptLine = true;
      return 'punctuation';
    }
  }

  function id(stream) {
    if (stream.match(/^#([\w-]+)/)) {
      return ID;
    }
  }

  function className(stream) {
    if (stream.match(/^\.([\w-]+)/)) {
      return CLASS;
    }
  }

  function attrs(stream, state) {
    if (stream.peek() == '(') {
      stream.next();
      state.isAttrs = true;
      state.attrsNest = [];
      state.inAttributeName = true;
      state.attrValue = '';
      state.attributeIsType = false;
      return 'punctuation';
    }
  }

  function attrsContinued(stream, state) {
    if (state.isAttrs) {
      if (ATTRS_NEST[stream.peek()]) {
        state.attrsNest.push(ATTRS_NEST[stream.peek()]);
      }
      if (state.attrsNest[state.attrsNest.length - 1] === stream.peek()) {
        state.attrsNest.pop();
      } else  if (stream.eat(')')) {
        state.isAttrs = false;
        return 'punctuation';
      }
      if (state.inAttributeName && stream.match(/^[^=,\)!]+/)) {
        if (stream.peek() === '=' || stream.peek() === '!') {
          state.inAttributeName = false;
          state.jsState = CodeMirror.startState(jsMode);
          if (state.lastTag === 'script' && stream.current().trim().toLowerCase() === 'type') {
            state.attributeIsType = true;
          } else {
            state.attributeIsType = false;
          }
        }
        return 'attribute';
      }

      var tok = jsMode.token(stream, state.jsState);
      if (state.attributeIsType && tok === 'string') {
        state.scriptType = stream.current().toString();
      }
      if (state.attrsNest.length === 0 && (tok === 'string' || tok === 'variable' || tok === 'keyword')) {
        try {
          Function('', 'var x ' + state.attrValue.replace(/,\s*$/, '').replace(/^!/, ''));
          state.inAttributeName = true;
          state.attrValue = '';
          stream.backUp(stream.current().length);
          return attrsContinued(stream, state);
        } catch (ex) {
          //not the end of an attribute
        }
      }
      state.attrValue += stream.current();
      return tok || true;
    }
  }

  function attributesBlock(stream, state) {
    if (stream.match(/^&attributes\b/)) {
      state.javaScriptArguments = true;
      state.javaScriptArgumentsDepth = 0;
      return 'keyword';
    }
  }

  function indent(stream) {
    if (stream.sol() && stream.eatSpace()) {
      return 'indent';
    }
  }

  function comment(stream, state) {
    if (stream.match(/^ *\/\/(-)?([^\n]*)/)) {
      state.indentOf = stream.indentation();
      state.indentToken = 'comment';
      return 'comment';
    }
  }

  function colon(stream) {
    if (stream.match(/^: */)) {
      return 'colon';
    }
  }

  function text(stream, state) {
    if (stream.match(/^(?:\| ?| )([^\n]+)/)) {
      return 'string';
    }
    if (stream.match(/^(<[^\n]*)/, false)) {
      // html string
      setInnerMode(stream, state, 'htmlmixed');
      state.innerModeForLine = true;
      return innerMode(stream, state, true);
    }
  }

  function dot(stream, state) {
    if (stream.eat('.')) {
      var innerMode = null;
      if (state.lastTag === 'script' && state.scriptType.toLowerCase().indexOf('javascript') != -1) {
        innerMode = state.scriptType.toLowerCase().replace(/"|'/g, '');
      } else if (state.lastTag === 'style') {
        innerMode = 'css';
      }
      setInnerMode(stream, state, innerMode);
      return 'dot';
    }
  }

  function fail(stream) {
    stream.next();
    return null;
  }


  function setInnerMode(stream, state, mode) {
    mode = CodeMirror.mimeModes[mode] || mode;
    mode = config.innerModes ? config.innerModes(mode) || mode : mode;
    mode = CodeMirror.mimeModes[mode] || mode;
    mode = CodeMirror.getMode(config, mode);
    state.indentOf = stream.indentation();

    if (mode && mode.name !== 'null') {
      state.innerMode = mode;
    } else {
      state.indentToken = 'string';
    }
  }
  function innerMode(stream, state, force) {
    if (stream.indentation() > state.indentOf || (state.innerModeForLine && !stream.sol()) || force) {
      if (state.innerMode) {
        if (!state.innerState) {
          state.innerState = state.innerMode.startState ? CodeMirror.startState(state.innerMode, stream.indentation()) : {};
        }
        return stream.hideFirstChars(state.indentOf + 2, function () {
          return state.innerMode.token(stream, state.innerState) || true;
        });
      } else {
        stream.skipToEnd();
        return state.indentToken;
      }
    } else if (stream.sol()) {
      state.indentOf = Infinity;
      state.indentToken = null;
      state.innerMode = null;
      state.innerState = null;
    }
  }
  function restOfLine(stream, state) {
    if (stream.sol()) {
      // if restOfLine was set at end of line, ignore it
      state.restOfLine = '';
    }
    if (state.restOfLine) {
      stream.skipToEnd();
      var tok = state.restOfLine;
      state.restOfLine = '';
      return tok;
    }
  }


  function startState() {
    return new State();
  }
  function copyState(state) {
    return state.copy();
  }
  /**
   * Get the next token in the stream
   *
   * @param {Stream} stream
   * @param {State} state
   */
  function nextToken(stream, state) {
    var tok = innerMode(stream, state)
      || restOfLine(stream, state)
      || interpolationContinued(stream, state)
      || includeFilteredContinued(stream, state)
      || eachContinued(stream, state)
      || attrsContinued(stream, state)
      || javaScript(stream, state)
      || javaScriptArguments(stream, state)
      || callArguments(stream, state)

      || yieldStatement(stream, state)
      || doctype(stream, state)
      || interpolation(stream, state)
      || caseStatement(stream, state)
      || when(stream, state)
      || defaultStatement(stream, state)
      || extendsStatement(stream, state)
      || append(stream, state)
      || prepend(stream, state)
      || block(stream, state)
      || include(stream, state)
      || includeFiltered(stream, state)
      || mixin(stream, state)
      || call(stream, state)
      || conditional(stream, state)
      || each(stream, state)
      || whileStatement(stream, state)
      || tag(stream, state)
      || filter(stream, state)
      || code(stream, state)
      || id(stream, state)
      || className(stream, state)
      || attrs(stream, state)
      || attributesBlock(stream, state)
      || indent(stream, state)
      || text(stream, state)
      || comment(stream, state)
      || colon(stream, state)
      || dot(stream, state)
      || fail(stream, state);

    return tok === true ? null : tok;
  }
  return {
    startState: startState,
    copyState: copyState,
    token: nextToken
  };
}, 'javascript', 'css', 'htmlmixed');

CodeMirror.defineMIME('text/x-pug', 'pug');
CodeMirror.defineMIME('text/x-jade', 'pug');

});

/*****/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var HINT_ELEMENT_CLASS        = "CodeMirror-hint";
  var ACTIVE_HINT_ELEMENT_CLASS = "CodeMirror-hint-active";

  // This is the old interface, kept around for now to stay
  // backwards-compatible.
  CodeMirror.showHint = function(cm, getHints, options) {
    if (!getHints) return cm.showHint(options);
    if (options && options.async) getHints.async = true;
    var newOpts = {hint: getHints};
    if (options) for (var prop in options) newOpts[prop] = options[prop];
    return cm.showHint(newOpts);
  };

  CodeMirror.defineExtension("showHint", function(options) {
    options = parseOptions(this, this.getCursor("start"), options);
    var selections = this.listSelections()
    if (selections.length > 1) return;
    // By default, don't allow completion when something is selected.
    // A hint function can have a `supportsSelection` property to
    // indicate that it can handle selections.
    if (this.somethingSelected()) {
      if (!options.hint.supportsSelection) return;
      // Don't try with cross-line selections
      for (var i = 0; i < selections.length; i++)
        if (selections[i].head.line != selections[i].anchor.line) return;
    }

    if (this.state.completionActive) this.state.completionActive.close();
    var completion = this.state.completionActive = new Completion(this, options);
    if (!completion.options.hint) return;

    CodeMirror.signal(this, "startCompletion", this);
    completion.update(true);
  });

  CodeMirror.defineExtension("closeHint", function() {
    if (this.state.completionActive) this.state.completionActive.close()
  })

  function Completion(cm, options) {
    this.cm = cm;
    this.options = options;
    this.widget = null;
    this.debounce = 0;
    this.tick = 0;
    this.startPos = this.cm.getCursor("start");
    this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length;

    var self = this;
    cm.on("cursorActivity", this.activityFunc = function() { self.cursorActivity(); });
  }

  var requestAnimationFrame = window.requestAnimationFrame || function(fn) {
    return setTimeout(fn, 1000/60);
  };
  var cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

  Completion.prototype = {
    close: function() {
      if (!this.active()) return;
      this.cm.state.completionActive = null;
      this.tick = null;
      this.cm.off("cursorActivity", this.activityFunc);

      if (this.widget && this.data) CodeMirror.signal(this.data, "close");
      if (this.widget) this.widget.close();
      CodeMirror.signal(this.cm, "endCompletion", this.cm);
    },

    active: function() {
      return this.cm.state.completionActive == this;
    },

    pick: function(data, i) {
      var completion = data.list[i];
      if (completion.hint) completion.hint(this.cm, data, completion);
      else this.cm.replaceRange(getText(completion), completion.from || data.from,
                                completion.to || data.to, "complete");
      CodeMirror.signal(data, "pick", completion);
      this.close();
    },

    cursorActivity: function() {
      if (this.debounce) {
        cancelAnimationFrame(this.debounce);
        this.debounce = 0;
      }

      var pos = this.cm.getCursor(), line = this.cm.getLine(pos.line);
      if (pos.line != this.startPos.line || line.length - pos.ch != this.startLen - this.startPos.ch ||
          pos.ch < this.startPos.ch || this.cm.somethingSelected() ||
          (!pos.ch || this.options.closeCharacters.test(line.charAt(pos.ch - 1)))) {
        this.close();
      } else {
        var self = this;
        this.debounce = requestAnimationFrame(function() {self.update();});
        if (this.widget) this.widget.disable();
      }
    },

    update: function(first) {
      if (this.tick == null) return
      var self = this, myTick = ++this.tick
      fetchHints(this.options.hint, this.cm, this.options, function(data) {
        if (self.tick == myTick) self.finishUpdate(data, first)
      })
    },

    finishUpdate: function(data, first) {
      if (this.data) CodeMirror.signal(this.data, "update");

      var picked = (this.widget && this.widget.picked) || (first && this.options.completeSingle);
      if (this.widget) this.widget.close();

      this.data = data;

      if (data && data.list.length) {
        if (picked && data.list.length == 1) {
          this.pick(data, 0);
        } else {
          this.widget = new Widget(this, data);
          CodeMirror.signal(data, "shown");
        }
      }
    }
  };

  function parseOptions(cm, pos, options) {
    var editor = cm.options.hintOptions;
    var out = {};
    for (var prop in defaultOptions) out[prop] = defaultOptions[prop];
    if (editor) for (var prop in editor)
      if (editor[prop] !== undefined) out[prop] = editor[prop];
    if (options) for (var prop in options)
      if (options[prop] !== undefined) out[prop] = options[prop];
    if (out.hint.resolve) out.hint = out.hint.resolve(cm, pos)
    return out;
  }

  function getText(completion) {
    if (typeof completion == "string") return completion;
    else return completion.text;
  }

  function buildKeyMap(completion, handle) {
    var baseMap = {
      Up: function() {handle.moveFocus(-1);},
      Down: function() {handle.moveFocus(1);},
      PageUp: function() {handle.moveFocus(-handle.menuSize() + 1, true);},
      PageDown: function() {handle.moveFocus(handle.menuSize() - 1, true);},
      Home: function() {handle.setFocus(0);},
      End: function() {handle.setFocus(handle.length - 1);},
      Enter: handle.pick,
      Tab: handle.pick,
      Esc: handle.close
    };

    var mac = /Mac/.test(navigator.platform);

    if (mac) {
      baseMap["Ctrl-P"] = function() {handle.moveFocus(-1);};
      baseMap["Ctrl-N"] = function() {handle.moveFocus(1);};
    }

    var custom = completion.options.customKeys;
    var ourMap = custom ? {} : baseMap;
    function addBinding(key, val) {
      var bound;
      if (typeof val != "string")
        bound = function(cm) { return val(cm, handle); };
      // This mechanism is deprecated
      else if (baseMap.hasOwnProperty(val))
        bound = baseMap[val];
      else
        bound = val;
      ourMap[key] = bound;
    }
    if (custom)
      for (var key in custom) if (custom.hasOwnProperty(key))
        addBinding(key, custom[key]);
    var extra = completion.options.extraKeys;
    if (extra)
      for (var key in extra) if (extra.hasOwnProperty(key))
        addBinding(key, extra[key]);
    return ourMap;
  }

  function getHintElement(hintsElement, el) {
    while (el && el != hintsElement) {
      if (el.nodeName.toUpperCase() === "LI" && el.parentNode == hintsElement) return el;
      el = el.parentNode;
    }
  }

  function Widget(completion, data) {
    this.completion = completion;
    this.data = data;
    this.picked = false;
    var widget = this, cm = completion.cm;
    var ownerDocument = cm.getInputField().ownerDocument;
    var parentWindow = ownerDocument.defaultView || ownerDocument.parentWindow;

    var hints = this.hints = ownerDocument.createElement("ul");
    var theme = completion.cm.options.theme;
    hints.className = "CodeMirror-hints " + theme;
    this.selectedHint = data.selectedHint || 0;

    var completions = data.list;
    for (var i = 0; i < completions.length; ++i) {
      var elt = hints.appendChild(ownerDocument.createElement("li")), cur = completions[i];
      var className = HINT_ELEMENT_CLASS + (i != this.selectedHint ? "" : " " + ACTIVE_HINT_ELEMENT_CLASS);
      if (cur.className != null) className = cur.className + " " + className;
      elt.className = className;
      if (cur.render) cur.render(elt, data, cur);
      else elt.appendChild(ownerDocument.createTextNode(cur.displayText || getText(cur)));
      elt.hintId = i;
    }

    var container = completion.options.container || ownerDocument.body;
    var pos = cm.cursorCoords(completion.options.alignWithWord ? data.from : null);
    var left = pos.left, top = pos.bottom, below = true;
    var offsetLeft = 0, offsetTop = 0;
    if (container !== ownerDocument.body) {
      // We offset the cursor position because left and top are relative to the offsetParent's top left corner.
      var isContainerPositioned = ['absolute', 'relative', 'fixed'].indexOf(parentWindow.getComputedStyle(container).position) !== -1;
      var offsetParent = isContainerPositioned ? container : container.offsetParent;
      var offsetParentPosition = offsetParent.getBoundingClientRect();
      var bodyPosition = ownerDocument.body.getBoundingClientRect();
      offsetLeft = (offsetParentPosition.left - bodyPosition.left);
      offsetTop = (offsetParentPosition.top - bodyPosition.top);
    }
    hints.style.left = (left - offsetLeft) + "px";
    hints.style.top = (top - offsetTop) + "px";

    // If we're at the edge of the screen, then we want the menu to appear on the left of the cursor.
    var winW = parentWindow.innerWidth || Math.max(ownerDocument.body.offsetWidth, ownerDocument.documentElement.offsetWidth);
    var winH = parentWindow.innerHeight || Math.max(ownerDocument.body.offsetHeight, ownerDocument.documentElement.offsetHeight);
    container.appendChild(hints);
    var box = hints.getBoundingClientRect(), overlapY = box.bottom - winH;
    var scrolls = hints.scrollHeight > hints.clientHeight + 1
    var startScroll = cm.getScrollInfo();

    if (overlapY > 0) {
      var height = box.bottom - box.top, curTop = pos.top - (pos.bottom - box.top);
      if (curTop - height > 0) { // Fits above cursor
        hints.style.top = (top = pos.top - height - offsetTop) + "px";
        below = false;
      } else if (height > winH) {
        hints.style.height = (winH - 5) + "px";
        hints.style.top = (top = pos.bottom - box.top - offsetTop) + "px";
        var cursor = cm.getCursor();
        if (data.from.ch != cursor.ch) {
          pos = cm.cursorCoords(cursor);
          hints.style.left = (left = pos.left - offsetLeft) + "px";
          box = hints.getBoundingClientRect();
        }
      }
    }
    var overlapX = box.right - winW;
    if (overlapX > 0) {
      if (box.right - box.left > winW) {
        hints.style.width = (winW - 5) + "px";
        overlapX -= (box.right - box.left) - winW;
      }
      hints.style.left = (left = pos.left - overlapX - offsetLeft) + "px";
    }
    if (scrolls) for (var node = hints.firstChild; node; node = node.nextSibling)
      node.style.paddingRight = cm.display.nativeBarWidth + "px"

    cm.addKeyMap(this.keyMap = buildKeyMap(completion, {
      moveFocus: function(n, avoidWrap) { widget.changeActive(widget.selectedHint + n, avoidWrap); },
      setFocus: function(n) { widget.changeActive(n); },
      menuSize: function() { return widget.screenAmount(); },
      length: completions.length,
      close: function() { completion.close(); },
      pick: function() { widget.pick(); },
      data: data
    }));

    if (completion.options.closeOnUnfocus) {
      var closingOnBlur;
      cm.on("blur", this.onBlur = function() { closingOnBlur = setTimeout(function() { completion.close(); }, 100); });
      cm.on("focus", this.onFocus = function() { clearTimeout(closingOnBlur); });
    }

    cm.on("scroll", this.onScroll = function() {
      var curScroll = cm.getScrollInfo(), editor = cm.getWrapperElement().getBoundingClientRect();
      var newTop = top + startScroll.top - curScroll.top;
      var point = newTop - (parentWindow.pageYOffset || (ownerDocument.documentElement || ownerDocument.body).scrollTop);
      if (!below) point += hints.offsetHeight;
      if (point <= editor.top || point >= editor.bottom) return completion.close();
      hints.style.top = newTop + "px";
      hints.style.left = (left + startScroll.left - curScroll.left) + "px";
    });

    CodeMirror.on(hints, "dblclick", function(e) {
      var t = getHintElement(hints, e.target || e.srcElement);
      if (t && t.hintId != null) {widget.changeActive(t.hintId); widget.pick();}
    });

    CodeMirror.on(hints, "click", function(e) {
      var t = getHintElement(hints, e.target || e.srcElement);
      if (t && t.hintId != null) {
        widget.changeActive(t.hintId);
        if (completion.options.completeOnSingleClick) widget.pick();
      }
    });

    CodeMirror.on(hints, "mousedown", function() {
      setTimeout(function(){cm.focus();}, 20);
    });

    CodeMirror.signal(data, "select", completions[this.selectedHint], hints.childNodes[this.selectedHint]);
    return true;
  }

  Widget.prototype = {
    close: function() {
      if (this.completion.widget != this) return;
      this.completion.widget = null;
      this.hints.parentNode.removeChild(this.hints);
      this.completion.cm.removeKeyMap(this.keyMap);

      var cm = this.completion.cm;
      if (this.completion.options.closeOnUnfocus) {
        cm.off("blur", this.onBlur);
        cm.off("focus", this.onFocus);
      }
      cm.off("scroll", this.onScroll);
    },

    disable: function() {
      this.completion.cm.removeKeyMap(this.keyMap);
      var widget = this;
      this.keyMap = {Enter: function() { widget.picked = true; }};
      this.completion.cm.addKeyMap(this.keyMap);
    },

    pick: function() {
      this.completion.pick(this.data, this.selectedHint);
    },

    changeActive: function(i, avoidWrap) {
      if (i >= this.data.list.length)
        i = avoidWrap ? this.data.list.length - 1 : 0;
      else if (i < 0)
        i = avoidWrap ? 0  : this.data.list.length - 1;
      if (this.selectedHint == i) return;
      var node = this.hints.childNodes[this.selectedHint];
      if (node) node.className = node.className.replace(" " + ACTIVE_HINT_ELEMENT_CLASS, "");
      node = this.hints.childNodes[this.selectedHint = i];
      node.className += " " + ACTIVE_HINT_ELEMENT_CLASS;
      if (node.offsetTop < this.hints.scrollTop)
        this.hints.scrollTop = node.offsetTop - 3;
      else if (node.offsetTop + node.offsetHeight > this.hints.scrollTop + this.hints.clientHeight)
        this.hints.scrollTop = node.offsetTop + node.offsetHeight - this.hints.clientHeight + 3;
      CodeMirror.signal(this.data, "select", this.data.list[this.selectedHint], node);
    },

    screenAmount: function() {
      return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
    }
  };

  function applicableHelpers(cm, helpers) {
    if (!cm.somethingSelected()) return helpers
    var result = []
    for (var i = 0; i < helpers.length; i++)
      if (helpers[i].supportsSelection) result.push(helpers[i])
    return result
  }

  function fetchHints(hint, cm, options, callback) {
    if (hint.async) {
      hint(cm, callback, options)
    } else {
      var result = hint(cm, options)
      if (result && result.then) result.then(callback)
      else callback(result)
    }
  }

  function resolveAutoHints(cm, pos) {
    var helpers = cm.getHelpers(pos, "hint"), words
    if (helpers.length) {
      var resolved = function(cm, callback, options) {
        var app = applicableHelpers(cm, helpers);
        function run(i) {
          if (i == app.length) return callback(null)
          fetchHints(app[i], cm, options, function(result) {
            if (result && result.list.length > 0) callback(result)
            else run(i + 1)
          })
        }
        run(0)
      }
      resolved.async = true
      resolved.supportsSelection = true
      return resolved
    } else if (words = cm.getHelper(cm.getCursor(), "hintWords")) {
      return function(cm) { return CodeMirror.hint.fromList(cm, {words: words}) }
    } else if (CodeMirror.hint.anyword) {
      return function(cm, options) { return CodeMirror.hint.anyword(cm, options) }
    } else {
      return function() {}
    }
  }

  CodeMirror.registerHelper("hint", "auto", {
    resolve: resolveAutoHints
  });

  CodeMirror.registerHelper("hint", "fromList", function(cm, options) {
    var cur = cm.getCursor(), token = cm.getTokenAt(cur)
    var term, from = CodeMirror.Pos(cur.line, token.start), to = cur
    if (token.start < cur.ch && /\w/.test(token.string.charAt(cur.ch - token.start - 1))) {
      term = token.string.substr(0, cur.ch - token.start)
    } else {
      term = ""
      from = cur
    }
    var found = [];
    for (var i = 0; i < options.words.length; i++) {
      var word = options.words[i];
      if (word.slice(0, term.length) == term)
        found.push(word);
    }

    if (found.length) return {list: found, from: from, to: to};
  });

  CodeMirror.commands.autocomplete = CodeMirror.showHint;

  var defaultOptions = {
    hint: CodeMirror.hint.auto,
    completeSingle: true,
    alignWithWord: true,
    closeCharacters: /[\s()\[\]{};:>,]/,
    closeOnUnfocus: true,
    completeOnSingleClick: true,
    container: null,
    customKeys: null,
    extraKeys: null
  };

  CodeMirror.defineOption("hintOptions", null);
});

/*****/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../../mode/css/css"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../../mode/css/css"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var pseudoClasses = {link: 1, visited: 1, active: 1, hover: 1, focus: 1,
                       "first-letter": 1, "first-line": 1, "first-child": 1,
                       before: 1, after: 1, lang: 1};

  CodeMirror.registerHelper("hint", "css", function(cm) {
    var cur = cm.getCursor(), token = cm.getTokenAt(cur);
    var inner = CodeMirror.innerMode(cm.getMode(), token.state);
    if (inner.mode.name != "css") return;

    if (token.type == "keyword" && "!important".indexOf(token.string) == 0)
      return {list: ["!important"], from: CodeMirror.Pos(cur.line, token.start),
              to: CodeMirror.Pos(cur.line, token.end)};

    var start = token.start, end = cur.ch, word = token.string.slice(0, end - start);
    if (/[^\w$_-]/.test(word)) {
      word = ""; start = end = cur.ch;
    }

    var spec = CodeMirror.resolveMode("text/css");

    var result = [];
    function add(keywords) {
      for (var name in keywords)
        if (!word || name.lastIndexOf(word, 0) == 0)
          result.push(name);
    }

    var st = inner.state.state;
    if (st == "pseudo" || token.type == "variable-3") {
      add(pseudoClasses);
    } else if (st == "block" || st == "maybeprop") {
      add(spec.propertyKeywords);
    } else if (st == "prop" || st == "parens" || st == "at" || st == "params") {
      add(spec.valueKeywords);
      add(spec.colorKeywords);
    } else if (st == "media" || st == "media_parens") {
      add(spec.mediaTypes);
      add(spec.mediaFeatures);
    }

    if (result.length) return {
      list: result,
      from: CodeMirror.Pos(cur.line, start),
      to: CodeMirror.Pos(cur.line, end)
    };
  });
});

/*****/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  var Pos = CodeMirror.Pos;

  function forEach(arr, f) {
    for (var i = 0, e = arr.length; i < e; ++i) f(arr[i]);
  }

  function arrayContains(arr, item) {
    if (!Array.prototype.indexOf) {
      var i = arr.length;
      while (i--) {
        if (arr[i] === item) {
          return true;
        }
      }
      return false;
    }
    return arr.indexOf(item) != -1;
  }

  function scriptHint(editor, keywords, getToken, options) {
    // Find the token at the cursor
    var cur = editor.getCursor(), token = getToken(editor, cur);
    if (/\b(?:string|comment)\b/.test(token.type)) return;
    var innerMode = CodeMirror.innerMode(editor.getMode(), token.state);
    if (innerMode.mode.helperType === "json") return;
    token.state = innerMode.state;

    // If it's not a 'word-style' token, ignore the token.
    if (!/^[\w$_]*$/.test(token.string)) {
      token = {start: cur.ch, end: cur.ch, string: "", state: token.state,
               type: token.string == "." ? "property" : null};
    } else if (token.end > cur.ch) {
      token.end = cur.ch;
      token.string = token.string.slice(0, cur.ch - token.start);
    }

    var tprop = token;
    // If it is a property, find out what it is a property of.
    while (tprop.type == "property") {
      tprop = getToken(editor, Pos(cur.line, tprop.start));
      if (tprop.string != ".") return;
      tprop = getToken(editor, Pos(cur.line, tprop.start));
      if (!context) var context = [];
      context.push(tprop);
    }
    return {list: getCompletions(token, context, keywords, options),
            from: Pos(cur.line, token.start),
            to: Pos(cur.line, token.end)};
  }

  function javascriptHint(editor, options) {
    return scriptHint(editor, javascriptKeywords,
                      function (e, cur) {return e.getTokenAt(cur);},
                      options);
  };
  CodeMirror.registerHelper("hint", "javascript", javascriptHint);

  function getCoffeeScriptToken(editor, cur) {
  // This getToken, it is for coffeescript, imitates the behavior of
  // getTokenAt method in javascript.js, that is, returning "property"
  // type and treat "." as indepenent token.
    var token = editor.getTokenAt(cur);
    if (cur.ch == token.start + 1 && token.string.charAt(0) == '.') {
      token.end = token.start;
      token.string = '.';
      token.type = "property";
    }
    else if (/^\.[\w$_]*$/.test(token.string)) {
      token.type = "property";
      token.start++;
      token.string = token.string.replace(/\./, '');
    }
    return token;
  }

  function coffeescriptHint(editor, options) {
    return scriptHint(editor, coffeescriptKeywords, getCoffeeScriptToken, options);
  }
  CodeMirror.registerHelper("hint", "coffeescript", coffeescriptHint);

  var stringProps = ("charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight " +
                     "toUpperCase toLowerCase split concat match replace search").split(" ");
  var arrayProps = ("length concat join splice push pop shift unshift slice reverse sort indexOf " +
                    "lastIndexOf every some filter forEach map reduce reduceRight ").split(" ");
  var funcProps = "prototype apply call bind".split(" ");
  var javascriptKeywords = ("break case catch class const continue debugger default delete do else export extends false finally for function " +
                  "if in import instanceof new null return super switch this throw true try typeof var void while with yield").split(" ");
  var coffeescriptKeywords = ("and break catch class continue delete do else extends false finally for " +
                  "if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes").split(" ");

  function forAllProps(obj, callback) {
    if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) {
      for (var name in obj) callback(name)
    } else {
      for (var o = obj; o; o = Object.getPrototypeOf(o))
        Object.getOwnPropertyNames(o).forEach(callback)
    }
  }

  function getCompletions(token, context, keywords, options) {
    var found = [], start = token.string, global = options && options.globalScope || window;
    function maybeAdd(str) {
      if (str.lastIndexOf(start, 0) == 0 && !arrayContains(found, str)) found.push(str);
    }
    function gatherCompletions(obj) {
      if (typeof obj == "string") forEach(stringProps, maybeAdd);
      else if (obj instanceof Array) forEach(arrayProps, maybeAdd);
      else if (obj instanceof Function) forEach(funcProps, maybeAdd);
      forAllProps(obj, maybeAdd)
    }

    if (context && context.length) {
      // If this is a property, see if it belongs to some object we can
      // find in the current environment.
      var obj = context.pop(), base;
      if (obj.type && obj.type.indexOf("variable") === 0) {
        if (options && options.additionalContext)
          base = options.additionalContext[obj.string];
        if (!options || options.useGlobalScope !== false)
          base = base || global[obj.string];
      } else if (obj.type == "string") {
        base = "";
      } else if (obj.type == "atom") {
        base = 1;
      } else if (obj.type == "function") {
        if (global.jQuery != null && (obj.string == '$' || obj.string == 'jQuery') &&
            (typeof global.jQuery == 'function'))
          base = global.jQuery();
        else if (global._ != null && (obj.string == '_') && (typeof global._ == 'function'))
          base = global._();
      }
      while (base != null && context.length)
        base = base[context.pop().string];
      if (base != null) gatherCompletions(base);
    } else {
      // If not, just look in the global object and any local scope
      // (reading into JS mode internals to get at the local and global variables)
      for (var v = token.state.localVars; v; v = v.next) maybeAdd(v.name);
      for (var v = token.state.globalVars; v; v = v.next) maybeAdd(v.name);
      if (!options || options.useGlobalScope !== false)
        gatherCompletions(global);
      forEach(keywords, maybeAdd);
    }
    return found;
  }
});

/*****/
!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(r){var s=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),k=r.Pos,p={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function v(t){return t&&t.bracketRegex||/[(){}[\]]/}function u(t,e,n){var r=t.getLineHandle(e.line),i=e.ch-1,a=n&&n.afterCursor;null==a&&(a=/(^| )cm-fat-cursor($| )/.test(t.getWrapperElement().className));var c=v(n),o=!a&&0<=i&&c.test(r.text.charAt(i))&&p[r.text.charAt(i)]||c.test(r.text.charAt(i+1))&&p[r.text.charAt(++i)];if(!o)return null;var l=">"==o.charAt(1)?1:-1;if(n&&n.strict&&0<l!=(i==e.ch))return null;var h=t.getTokenTypeAt(k(e.line,i+1)),s=f(t,k(e.line,i+(0<l?1:0)),l,h||null,n);return null==s?null:{from:k(e.line,i),to:s&&s.pos,match:s&&s.ch==o.charAt(0),forward:0<l}}function f(t,e,n,r,i){for(var a=i&&i.maxScanLineLength||1e4,c=i&&i.maxScanLines||1e3,o=[],l=v(i),h=0<n?Math.min(e.line+c,t.lastLine()+1):Math.max(t.firstLine()-1,e.line-c),s=e.line;s!=h;s+=n){var u=t.getLine(s);if(u){var f=0<n?0:u.length-1,m=0<n?u.length:-1;if(!(u.length>a))for(s==e.line&&(f=e.ch-(n<0?1:0));f!=m;f+=n){var g=u.charAt(f);if(l.test(g)&&(void 0===r||t.getTokenTypeAt(k(s,f+1))==r)){var d=p[g];if(d&&">"==d.charAt(1)==0<n)o.push(g);else{if(!o.length)return{pos:k(s,f),ch:g};o.pop()}}}}}return s-n!=(0<n?t.lastLine():t.firstLine())&&null}function e(t,e,n){for(var r=t.state.matchBrackets.maxHighlightLineLength||1e3,i=[],a=t.listSelections(),c=0;c<a.length;c++){var o=a[c].empty()&&u(t,a[c].head,n);if(o&&t.getLine(o.from.line).length<=r){var l=o.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";i.push(t.markText(o.from,k(o.from.line,o.from.ch+1),{className:l})),o.to&&t.getLine(o.to.line).length<=r&&i.push(t.markText(o.to,k(o.to.line,o.to.ch+1),{className:l}))}}if(i.length){s&&t.state.focused&&t.focus();var h=function(){t.operation(function(){for(var t=0;t<i.length;t++)i[t].clear()})};if(!e)return h;setTimeout(h,800)}}function i(t){t.operation(function(){t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null),t.state.matchBrackets.currentlyHighlighted=e(t,!1,t.state.matchBrackets)})}r.defineOption("matchBrackets",!1,function(t,e,n){n&&n!=r.Init&&(t.off("cursorActivity",i),t.state.matchBrackets&&t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null)),e&&(t.state.matchBrackets="object"==typeof e?e:{},t.on("cursorActivity",i))}),r.defineExtension("matchBrackets",function(){e(this,!0)}),r.defineExtension("findMatchingBracket",function(t,e,n){return(n||"boolean"==typeof e)&&(e=n?(n.strict=e,n):e?{strict:!0}:null),u(this,t,e)}),r.defineExtension("scanForBracket",function(t,e,n,r){return f(this,t,e,n,r)})});

/*****/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// Utility function that allows modes to be combined. The mode given
// as the base argument takes care of most of the normal mode
// functionality, but a second (typically simple) mode is used, which
// can override the style of text. Both modes get to parse all of the
// text, but when both assign a non-null style to a piece of code, the
// overlay wins, unless the combine argument was true and not overridden,
// or state.overlay.combineTokens was true, in which case the styles are
// combined.

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.overlayMode = function(base, overlay, combine) {
  return {
    startState: function() {
      return {
        base: CodeMirror.startState(base),
        overlay: CodeMirror.startState(overlay),
        basePos: 0, baseCur: null,
        overlayPos: 0, overlayCur: null,
        streamSeen: null
      };
    },
    copyState: function(state) {
      return {
        base: CodeMirror.copyState(base, state.base),
        overlay: CodeMirror.copyState(overlay, state.overlay),
        basePos: state.basePos, baseCur: null,
        overlayPos: state.overlayPos, overlayCur: null
      };
    },

    token: function(stream, state) {
      if (stream != state.streamSeen ||
          Math.min(state.basePos, state.overlayPos) < stream.start) {
        state.streamSeen = stream;
        state.basePos = state.overlayPos = stream.start;
      }

      if (stream.start == state.basePos) {
        state.baseCur = base.token(stream, state.base);
        state.basePos = stream.pos;
      }
      if (stream.start == state.overlayPos) {
        stream.pos = stream.start;
        state.overlayCur = overlay.token(stream, state.overlay);
        state.overlayPos = stream.pos;
      }
      stream.pos = Math.min(state.basePos, state.overlayPos);

      // state.overlay.combineTokens always takes precedence over combine,
      // unless set to null
      if (state.overlayCur == null) return state.baseCur;
      else if (state.baseCur != null &&
               state.overlay.combineTokens ||
               combine && state.overlay.combineTokens == null)
        return state.baseCur + " " + state.overlayCur;
      else return state.overlayCur;
    },

    indent: base.indent && function(state, textAfter, line) {
      return base.indent(state.base, textAfter, line);
    },
    electricChars: base.electricChars,

    innerMode: function(state) { return {state: state.base, mode: base}; },

    blankLine: function(state) {
      var baseToken, overlayToken;
      if (base.blankLine) baseToken = base.blankLine(state.base);
      if (overlay.blankLine) overlayToken = overlay.blankLine(state.overlay);

      return overlayToken == null ?
        baseToken :
        (combine && baseToken != null ? baseToken + " " + overlayToken : overlayToken);
    }
  };
};

});

/*****/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

var htmlConfig = {
  autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
                    'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
                    'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
                    'track': true, 'wbr': true, 'menuitem': true},
  implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
                     'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
                     'th': true, 'tr': true},
  contextGrabbers: {
    'dd': {'dd': true, 'dt': true},
    'dt': {'dd': true, 'dt': true},
    'li': {'li': true},
    'option': {'option': true, 'optgroup': true},
    'optgroup': {'optgroup': true},
    'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
          'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
          'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
          'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
          'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
    'rp': {'rp': true, 'rt': true},
    'rt': {'rp': true, 'rt': true},
    'tbody': {'tbody': true, 'tfoot': true},
    'td': {'td': true, 'th': true},
    'tfoot': {'tbody': true},
    'th': {'td': true, 'th': true},
    'thead': {'tbody': true, 'tfoot': true},
    'tr': {'tr': true}
  },
  doNotIndent: {"pre": true},
  allowUnquoted: true,
  allowMissing: true,
  caseFold: true
}

var xmlConfig = {
  autoSelfClosers: {},
  implicitlyClosed: {},
  contextGrabbers: {},
  doNotIndent: {},
  allowUnquoted: false,
  allowMissing: false,
  allowMissingTagName: false,
  caseFold: false
}

CodeMirror.defineMode("xml", function(editorConf, config_) {
  var indentUnit = editorConf.indentUnit
  var config = {}
  var defaults = config_.htmlMode ? htmlConfig : xmlConfig
  for (var prop in defaults) config[prop] = defaults[prop]
  for (var prop in config_) config[prop] = config_[prop]

  // Return variables for tokenizers
  var type, setStyle;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();
    if (ch == "<") {
      if (stream.eat("!")) {
        if (stream.eat("[")) {
          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
          else return null;
        } else if (stream.match("--")) {
          return chain(inBlock("comment", "-->"));
        } else if (stream.match("DOCTYPE", true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        } else {
          return null;
        }
      } else if (stream.eat("?")) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock("meta", "?>");
        return "meta";
      } else {
        type = stream.eat("/") ? "closeTag" : "openTag";
        state.tokenize = inTag;
        return "tag bracket";
      }
    } else if (ch == "&") {
      var ok;
      if (stream.eat("#")) {
        if (stream.eat("x")) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
      }
      return ok ? "atom" : "error";
    } else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }
  inText.isInText = true;

  function inTag(stream, state) {
    var ch = stream.next();
    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
      state.tokenize = inText;
      type = ch == ">" ? "endTag" : "selfcloseTag";
      return "tag bracket";
    } else if (ch == "=") {
      type = "equals";
      return null;
    } else if (ch == "<") {
      state.tokenize = inText;
      state.state = baseState;
      state.tagName = state.tagStart = null;
      var next = state.tokenize(stream, state);
      return next ? next + " tag error" : "tag error";
    } else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      state.stringStartCol = stream.column();
      return state.tokenize(stream, state);
    } else {
      stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
      return "word";
    }
  }

  function inAttribute(quote) {
    var closure = function(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }
      return "string";
    };
    closure.isInAttribute = true;
    return closure;
  }

  function inBlock(style, terminator) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }
        stream.next();
      }
      return style;
    }
  }

  function doctype(depth) {
    return function(stream, state) {
      var ch;
      while ((ch = stream.next()) != null) {
        if (ch == "<") {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == ">") {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }
      return "meta";
    };
  }

  function Context(state, tagName, startOfLine) {
    this.prev = state.context;
    this.tagName = tagName;
    this.indent = state.indented;
    this.startOfLine = startOfLine;
    if (config.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent))
      this.noIndent = true;
  }
  function popContext(state) {
    if (state.context) state.context = state.context.prev;
  }
  function maybePopContext(state, nextTagName) {
    var parentTagName;
    while (true) {
      if (!state.context) {
        return;
      }
      parentTagName = state.context.tagName;
      if (!config.contextGrabbers.hasOwnProperty(parentTagName) ||
          !config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
        return;
      }
      popContext(state);
    }
  }

  function baseState(type, stream, state) {
    if (type == "openTag") {
      state.tagStart = stream.column();
      return tagNameState;
    } else if (type == "closeTag") {
      return closeTagNameState;
    } else {
      return baseState;
    }
  }
  function tagNameState(type, stream, state) {
    if (type == "word") {
      state.tagName = stream.current();
      setStyle = "tag";
      return attrState;
    } else if (config.allowMissingTagName && type == "endTag") {
      setStyle = "tag bracket";
      return attrState(type, stream, state);
    } else {
      setStyle = "error";
      return tagNameState;
    }
  }
  function closeTagNameState(type, stream, state) {
    if (type == "word") {
      var tagName = stream.current();
      if (state.context && state.context.tagName != tagName &&
          config.implicitlyClosed.hasOwnProperty(state.context.tagName))
        popContext(state);
      if ((state.context && state.context.tagName == tagName) || config.matchClosing === false) {
        setStyle = "tag";
        return closeState;
      } else {
        setStyle = "tag error";
        return closeStateErr;
      }
    } else if (config.allowMissingTagName && type == "endTag") {
      setStyle = "tag bracket";
      return closeState(type, stream, state);
    } else {
      setStyle = "error";
      return closeStateErr;
    }
  }

  function closeState(type, _stream, state) {
    if (type != "endTag") {
      setStyle = "error";
      return closeState;
    }
    popContext(state);
    return baseState;
  }
  function closeStateErr(type, stream, state) {
    setStyle = "error";
    return closeState(type, stream, state);
  }

  function attrState(type, _stream, state) {
    if (type == "word") {
      setStyle = "attribute";
      return attrEqState;
    } else if (type == "endTag" || type == "selfcloseTag") {
      var tagName = state.tagName, tagStart = state.tagStart;
      state.tagName = state.tagStart = null;
      if (type == "selfcloseTag" ||
          config.autoSelfClosers.hasOwnProperty(tagName)) {
        maybePopContext(state, tagName);
      } else {
        maybePopContext(state, tagName);
        state.context = new Context(state, tagName, tagStart == state.indented);
      }
      return baseState;
    }
    setStyle = "error";
    return attrState;
  }
  function attrEqState(type, stream, state) {
    if (type == "equals") return attrValueState;
    if (!config.allowMissing) setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrValueState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    if (type == "word" && config.allowUnquoted) {setStyle = "string"; return attrState;}
    setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrContinuedState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    return attrState(type, stream, state);
  }

  return {
    startState: function(baseIndent) {
      var state = {tokenize: inText,
                   state: baseState,
                   indented: baseIndent || 0,
                   tagName: null, tagStart: null,
                   context: null}
      if (baseIndent != null) state.baseIndent = baseIndent
      return state
    },

    token: function(stream, state) {
      if (!state.tagName && stream.sol())
        state.indented = stream.indentation();

      if (stream.eatSpace()) return null;
      type = null;
      var style = state.tokenize(stream, state);
      if ((style || type) && style != "comment") {
        setStyle = null;
        state.state = state.state(type || style, stream, state);
        if (setStyle)
          style = setStyle == "error" ? style + " error" : setStyle;
      }
      return style;
    },

    indent: function(state, textAfter, fullLine) {
      var context = state.context;
      // Indent multi-line strings (e.g. css).
      if (state.tokenize.isInAttribute) {
        if (state.tagStart == state.indented)
          return state.stringStartCol + 1;
        else
          return state.indented + indentUnit;
      }
      if (context && context.noIndent) return CodeMirror.Pass;
      if (state.tokenize != inTag && state.tokenize != inText)
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      // Indent the starts of attribute names.
      if (state.tagName) {
        if (config.multilineTagIndentPastTag !== false)
          return state.tagStart + state.tagName.length + 2;
        else
          return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
      }
      if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
      var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
      if (tagAfter && tagAfter[1]) { // Closing tag spotted
        while (context) {
          if (context.tagName == tagAfter[2]) {
            context = context.prev;
            break;
          } else if (config.implicitlyClosed.hasOwnProperty(context.tagName)) {
            context = context.prev;
          } else {
            break;
          }
        }
      } else if (tagAfter) { // Opening tag spotted
        while (context) {
          var grabbers = config.contextGrabbers[context.tagName];
          if (grabbers && grabbers.hasOwnProperty(tagAfter[2]))
            context = context.prev;
          else
            break;
        }
      }
      while (context && context.prev && !context.startOfLine)
        context = context.prev;
      if (context) return context.indent + indentUnit;
      else return state.baseIndent || 0;
    },

    electricInput: /<\/[\s\w:]+>$/,
    blockCommentStart: "<!--",
    blockCommentEnd: "-->",

    configuration: config.htmlMode ? "html" : "xml",
    helperType: config.htmlMode ? "html" : "xml",

    skipAttribute: function(state) {
      if (state.state == attrValueState)
        state.state = attrState
    }
  };
});

CodeMirror.defineMIME("text/xml", "xml");
CodeMirror.defineMIME("application/xml", "xml");
if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

});

/*****/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../xml/xml"), require("../meta"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../xml/xml", "../meta"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("markdown", function(cmCfg, modeCfg) {

  var htmlMode = CodeMirror.getMode(cmCfg, "text/html");
  var htmlModeMissing = htmlMode.name == "null"

  function getMode(name) {
    if (CodeMirror.findModeByName) {
      var found = CodeMirror.findModeByName(name);
      if (found) name = found.mime || found.mimes[0];
    }
    var mode = CodeMirror.getMode(cmCfg, name);
    return mode.name == "null" ? null : mode;
  }

  // Should characters that affect highlighting be highlighted separate?
  // Does not include characters that will be output (such as `1.` and `-` for lists)
  if (modeCfg.highlightFormatting === undefined)
    modeCfg.highlightFormatting = false;

  // Maximum number of nested blockquotes. Set to 0 for infinite nesting.
  // Excess `>` will emit `error` token.
  if (modeCfg.maxBlockquoteDepth === undefined)
    modeCfg.maxBlockquoteDepth = 0;

  // Turn on task lists? ("- [ ] " and "- [x] ")
  if (modeCfg.taskLists === undefined) modeCfg.taskLists = false;

  // Turn on strikethrough syntax
  if (modeCfg.strikethrough === undefined)
    modeCfg.strikethrough = false;

  if (modeCfg.emoji === undefined)
    modeCfg.emoji = false;

  if (modeCfg.fencedCodeBlockHighlighting === undefined)
    modeCfg.fencedCodeBlockHighlighting = true;

  if (modeCfg.xml === undefined)
    modeCfg.xml = true;

  // Allow token types to be overridden by user-provided token types.
  if (modeCfg.tokenTypeOverrides === undefined)
    modeCfg.tokenTypeOverrides = {};

  var tokenTypes = {
    header: "header",
    code: "comment",
    quote: "quote",
    list1: "variable-2",
    list2: "variable-3",
    list3: "keyword",
    hr: "hr",
    image: "image",
    imageAltText: "image-alt-text",
    imageMarker: "image-marker",
    formatting: "formatting",
    linkInline: "link",
    linkEmail: "link",
    linkText: "link",
    linkHref: "string",
    em: "em",
    strong: "strong",
    strikethrough: "strikethrough",
    emoji: "builtin"
  };

  for (var tokenType in tokenTypes) {
    if (tokenTypes.hasOwnProperty(tokenType) && modeCfg.tokenTypeOverrides[tokenType]) {
      tokenTypes[tokenType] = modeCfg.tokenTypeOverrides[tokenType];
    }
  }

  var hrRE = /^([*\-_])(?:\s*\1){2,}\s*$/
  ,   listRE = /^(?:[*\-+]|^[0-9]+([.)]))\s+/
  ,   taskListRE = /^\[(x| )\](?=\s)/i // Must follow listRE
  ,   atxHeaderRE = modeCfg.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/
  ,   setextHeaderRE = /^ *(?:\={1,}|-{1,})\s*$/
  ,   textRE = /^[^#!\[\]*_\\<>` "'(~:]+/
  ,   fencedCodeRE = /^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/
  ,   linkDefRE = /^\s*\[[^\]]+?\]:.*$/ // naive link-definition
  ,   punctuation = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/
  ,   expandedTab = "    " // CommonMark specifies tab as 4 spaces

  function switchInline(stream, state, f) {
    state.f = state.inline = f;
    return f(stream, state);
  }

  function switchBlock(stream, state, f) {
    state.f = state.block = f;
    return f(stream, state);
  }

  function lineIsEmpty(line) {
    return !line || !/\S/.test(line.string)
  }

  // Blocks

  function blankLine(state) {
    // Reset linkTitle state
    state.linkTitle = false;
    state.linkHref = false;
    state.linkText = false;
    // Reset EM state
    state.em = false;
    // Reset STRONG state
    state.strong = false;
    // Reset strikethrough state
    state.strikethrough = false;
    // Reset state.quote
    state.quote = 0;
    // Reset state.indentedCode
    state.indentedCode = false;
    if (state.f == htmlBlock) {
      var exit = htmlModeMissing
      if (!exit) {
        var inner = CodeMirror.innerMode(htmlMode, state.htmlState)
        exit = inner.mode.name == "xml" && inner.state.tagStart === null &&
          (!inner.state.context && inner.state.tokenize.isInText)
      }
      if (exit) {
        state.f = inlineNormal;
        state.block = blockNormal;
        state.htmlState = null;
      }
    }
    // Reset state.trailingSpace
    state.trailingSpace = 0;
    state.trailingSpaceNewLine = false;
    // Mark this line as blank
    state.prevLine = state.thisLine
    state.thisLine = {stream: null}
    return null;
  }

  function blockNormal(stream, state) {
    var firstTokenOnLine = stream.column() === state.indentation;
    var prevLineLineIsEmpty = lineIsEmpty(state.prevLine.stream);
    var prevLineIsIndentedCode = state.indentedCode;
    var prevLineIsHr = state.prevLine.hr;
    var prevLineIsList = state.list !== false;
    var maxNonCodeIndentation = (state.listStack[state.listStack.length - 1] || 0) + 3;

    state.indentedCode = false;

    var lineIndentation = state.indentation;
    // compute once per line (on first token)
    if (state.indentationDiff === null) {
      state.indentationDiff = state.indentation;
      if (prevLineIsList) {
        // Reset inline styles which shouldn't propagate aross list items
        state.em = false;
        state.strong = false;
        state.code = false;
        state.strikethrough = false;

        state.list = null;
        // While this list item's marker's indentation is less than the deepest
        //  list item's content's indentation,pop the deepest list item
        //  indentation off the stack, and update block indentation state
        while (lineIndentation < state.listStack[state.listStack.length - 1]) {
          state.listStack.pop();
          if (state.listStack.length) {
            state.indentation = state.listStack[state.listStack.length - 1];
          // less than the first list's indent -> the line is no longer a list
          } else {
            state.list = false;
          }
        }
        if (state.list !== false) {
          state.indentationDiff = lineIndentation - state.listStack[state.listStack.length - 1]
        }
      }
    }

    // not comprehensive (currently only for setext detection purposes)
    var allowsInlineContinuation = (
        !prevLineLineIsEmpty && !prevLineIsHr && !state.prevLine.header &&
        (!prevLineIsList || !prevLineIsIndentedCode) &&
        !state.prevLine.fencedCodeEnd
    );

    var isHr = (state.list === false || prevLineIsHr || prevLineLineIsEmpty) &&
      state.indentation <= maxNonCodeIndentation && stream.match(hrRE);

    var match = null;
    if (state.indentationDiff >= 4 && (prevLineIsIndentedCode || state.prevLine.fencedCodeEnd ||
         state.prevLine.header || prevLineLineIsEmpty)) {
      stream.skipToEnd();
      state.indentedCode = true;
      return tokenTypes.code;
    } else if (stream.eatSpace()) {
      return null;
    } else if (firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(atxHeaderRE)) && match[1].length <= 6) {
      state.quote = 0;
      state.header = match[1].length;
      state.thisLine.header = true;
      if (modeCfg.highlightFormatting) state.formatting = "header";
      state.f = state.inline;
      return getType(state);
    } else if (state.indentation <= maxNonCodeIndentation && stream.eat('>')) {
      state.quote = firstTokenOnLine ? 1 : state.quote + 1;
      if (modeCfg.highlightFormatting) state.formatting = "quote";
      stream.eatSpace();
      return getType(state);
    } else if (!isHr && !state.setext && firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(listRE))) {
      var listType = match[1] ? "ol" : "ul";

      state.indentation = lineIndentation + stream.current().length;
      state.list = true;
      state.quote = 0;

      // Add this list item's content's indentation to the stack
      state.listStack.push(state.indentation);

      if (modeCfg.taskLists && stream.match(taskListRE, false)) {
        state.taskList = true;
      }
      state.f = state.inline;
      if (modeCfg.highlightFormatting) state.formatting = ["list", "list-" + listType];
      return getType(state);
    } else if (firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(fencedCodeRE, true))) {
      state.quote = 0;
      state.fencedEndRE = new RegExp(match[1] + "+ *$");
      // try switching mode
      state.localMode = modeCfg.fencedCodeBlockHighlighting && getMode(match[2]);
      if (state.localMode) state.localState = CodeMirror.startState(state.localMode);
      state.f = state.block = local;
      if (modeCfg.highlightFormatting) state.formatting = "code-block";
      state.code = -1
      return getType(state);
    // SETEXT has lowest block-scope precedence after HR, so check it after
    //  the others (code, blockquote, list...)
    } else if (
      // if setext set, indicates line after ---/===
      state.setext || (
        // line before ---/===
        (!allowsInlineContinuation || !prevLineIsList) && !state.quote && state.list === false &&
        !state.code && !isHr && !linkDefRE.test(stream.string) &&
        (match = stream.lookAhead(1)) && (match = match.match(setextHeaderRE))
      )
    ) {
      if ( !state.setext ) {
        state.header = match[0].charAt(0) == '=' ? 1 : 2;
        state.setext = state.header;
      } else {
        state.header = state.setext;
        // has no effect on type so we can reset it now
        state.setext = 0;
        stream.skipToEnd();
        if (modeCfg.highlightFormatting) state.formatting = "header";
      }
      state.thisLine.header = true;
      state.f = state.inline;
      return getType(state);
    } else if (isHr) {
      stream.skipToEnd();
      state.hr = true;
      state.thisLine.hr = true;
      return tokenTypes.hr;
    } else if (stream.peek() === '[') {
      return switchInline(stream, state, footnoteLink);
    }

    return switchInline(stream, state, state.inline);
  }

  function htmlBlock(stream, state) {
    var style = htmlMode.token(stream, state.htmlState);
    if (!htmlModeMissing) {
      var inner = CodeMirror.innerMode(htmlMode, state.htmlState)
      if ((inner.mode.name == "xml" && inner.state.tagStart === null &&
           (!inner.state.context && inner.state.tokenize.isInText)) ||
          (state.md_inside && stream.current().indexOf(">") > -1)) {
        state.f = inlineNormal;
        state.block = blockNormal;
        state.htmlState = null;
      }
    }
    return style;
  }

  function local(stream, state) {
    var currListInd = state.listStack[state.listStack.length - 1] || 0;
    var hasExitedList = state.indentation < currListInd;
    var maxFencedEndInd = currListInd + 3;
    if (state.fencedEndRE && state.indentation <= maxFencedEndInd && (hasExitedList || stream.match(state.fencedEndRE))) {
      if (modeCfg.highlightFormatting) state.formatting = "code-block";
      var returnType;
      if (!hasExitedList) returnType = getType(state)
      state.localMode = state.localState = null;
      state.block = blockNormal;
      state.f = inlineNormal;
      state.fencedEndRE = null;
      state.code = 0
      state.thisLine.fencedCodeEnd = true;
      if (hasExitedList) return switchBlock(stream, state, state.block);
      return returnType;
    } else if (state.localMode) {
      return state.localMode.token(stream, state.localState);
    } else {
      stream.skipToEnd();
      return tokenTypes.code;
    }
  }

  // Inline
  function getType(state) {
    var styles = [];

    if (state.formatting) {
      styles.push(tokenTypes.formatting);

      if (typeof state.formatting === "string") state.formatting = [state.formatting];

      for (var i = 0; i < state.formatting.length; i++) {
        styles.push(tokenTypes.formatting + "-" + state.formatting[i]);

        if (state.formatting[i] === "header") {
          styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.header);
        }

        // Add `formatting-quote` and `formatting-quote-#` for blockquotes
        // Add `error` instead if the maximum blockquote nesting depth is passed
        if (state.formatting[i] === "quote") {
          if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
            styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.quote);
          } else {
            styles.push("error");
          }
        }
      }
    }

    if (state.taskOpen) {
      styles.push("meta");
      return styles.length ? styles.join(' ') : null;
    }
    if (state.taskClosed) {
      styles.push("property");
      return styles.length ? styles.join(' ') : null;
    }

    if (state.linkHref) {
      styles.push(tokenTypes.linkHref, "url");
    } else { // Only apply inline styles to non-url text
      if (state.strong) { styles.push(tokenTypes.strong); }
      if (state.em) { styles.push(tokenTypes.em); }
      if (state.strikethrough) { styles.push(tokenTypes.strikethrough); }
      if (state.emoji) { styles.push(tokenTypes.emoji); }
      if (state.linkText) { styles.push(tokenTypes.linkText); }
      if (state.code) { styles.push(tokenTypes.code); }
      if (state.image) { styles.push(tokenTypes.image); }
      if (state.imageAltText) { styles.push(tokenTypes.imageAltText, "link"); }
      if (state.imageMarker) { styles.push(tokenTypes.imageMarker); }
    }

    if (state.header) { styles.push(tokenTypes.header, tokenTypes.header + "-" + state.header); }

    if (state.quote) {
      styles.push(tokenTypes.quote);

      // Add `quote-#` where the maximum for `#` is modeCfg.maxBlockquoteDepth
      if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
        styles.push(tokenTypes.quote + "-" + state.quote);
      } else {
        styles.push(tokenTypes.quote + "-" + modeCfg.maxBlockquoteDepth);
      }
    }

    if (state.list !== false) {
      var listMod = (state.listStack.length - 1) % 3;
      if (!listMod) {
        styles.push(tokenTypes.list1);
      } else if (listMod === 1) {
        styles.push(tokenTypes.list2);
      } else {
        styles.push(tokenTypes.list3);
      }
    }

    if (state.trailingSpaceNewLine) {
      styles.push("trailing-space-new-line");
    } else if (state.trailingSpace) {
      styles.push("trailing-space-" + (state.trailingSpace % 2 ? "a" : "b"));
    }

    return styles.length ? styles.join(' ') : null;
  }

  function handleText(stream, state) {
    if (stream.match(textRE, true)) {
      return getType(state);
    }
    return undefined;
  }

  function inlineNormal(stream, state) {
    var style = state.text(stream, state);
    if (typeof style !== 'undefined')
      return style;

    if (state.list) { // List marker (*, +, -, 1., etc)
      state.list = null;
      return getType(state);
    }

    if (state.taskList) {
      var taskOpen = stream.match(taskListRE, true)[1] === " ";
      if (taskOpen) state.taskOpen = true;
      else state.taskClosed = true;
      if (modeCfg.highlightFormatting) state.formatting = "task";
      state.taskList = false;
      return getType(state);
    }

    state.taskOpen = false;
    state.taskClosed = false;

    if (state.header && stream.match(/^#+$/, true)) {
      if (modeCfg.highlightFormatting) state.formatting = "header";
      return getType(state);
    }

    var ch = stream.next();

    // Matches link titles present on next line
    if (state.linkTitle) {
      state.linkTitle = false;
      var matchCh = ch;
      if (ch === '(') {
        matchCh = ')';
      }
      matchCh = (matchCh+'').replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1");
      var regex = '^\\s*(?:[^' + matchCh + '\\\\]+|\\\\\\\\|\\\\.)' + matchCh;
      if (stream.match(new RegExp(regex), true)) {
        return tokenTypes.linkHref;
      }
    }

    // If this block is changed, it may need to be updated in GFM mode
    if (ch === '`') {
      var previousFormatting = state.formatting;
      if (modeCfg.highlightFormatting) state.formatting = "code";
      stream.eatWhile('`');
      var count = stream.current().length
      if (state.code == 0 && (!state.quote || count == 1)) {
        state.code = count
        return getType(state)
      } else if (count == state.code) { // Must be exact
        var t = getType(state)
        state.code = 0
        return t
      } else {
        state.formatting = previousFormatting
        return getType(state)
      }
    } else if (state.code) {
      return getType(state);
    }

    if (ch === '\\') {
      stream.next();
      if (modeCfg.highlightFormatting) {
        var type = getType(state);
        var formattingEscape = tokenTypes.formatting + "-escape";
        return type ? type + " " + formattingEscape : formattingEscape;
      }
    }

    if (ch === '!' && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
      state.imageMarker = true;
      state.image = true;
      if (modeCfg.highlightFormatting) state.formatting = "image";
      return getType(state);
    }

    if (ch === '[' && state.imageMarker && stream.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, false)) {
      state.imageMarker = false;
      state.imageAltText = true
      if (modeCfg.highlightFormatting) state.formatting = "image";
      return getType(state);
    }

    if (ch === ']' && state.imageAltText) {
      if (modeCfg.highlightFormatting) state.formatting = "image";
      var type = getType(state);
      state.imageAltText = false;
      state.image = false;
      state.inline = state.f = linkHref;
      return type;
    }

    if (ch === '[' && !state.image) {
      if (state.linkText && stream.match(/^.*?\]/)) return getType(state)
      state.linkText = true;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      return getType(state);
    }

    if (ch === ']' && state.linkText) {
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      state.linkText = false;
      state.inline = state.f = stream.match(/\(.*?\)| ?\[.*?\]/, false) ? linkHref : inlineNormal
      return type;
    }

    if (ch === '<' && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
      state.f = state.inline = linkInline;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      if (type){
        type += " ";
      } else {
        type = "";
      }
      return type + tokenTypes.linkInline;
    }

    if (ch === '<' && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
      state.f = state.inline = linkInline;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      if (type){
        type += " ";
      } else {
        type = "";
      }
      return type + tokenTypes.linkEmail;
    }

    if (modeCfg.xml && ch === '<' && stream.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i, false)) {
      var end = stream.string.indexOf(">", stream.pos);
      if (end != -1) {
        var atts = stream.string.substring(stream.start, end);
        if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) state.md_inside = true;
      }
      stream.backUp(1);
      state.htmlState = CodeMirror.startState(htmlMode);
      return switchBlock(stream, state, htmlBlock);
    }

    if (modeCfg.xml && ch === '<' && stream.match(/^\/\w*?>/)) {
      state.md_inside = false;
      return "tag";
    } else if (ch === "*" || ch === "_") {
      var len = 1, before = stream.pos == 1 ? " " : stream.string.charAt(stream.pos - 2)
      while (len < 3 && stream.eat(ch)) len++
      var after = stream.peek() || " "
      // See http://spec.commonmark.org/0.27/#emphasis-and-strong-emphasis
      var leftFlanking = !/\s/.test(after) && (!punctuation.test(after) || /\s/.test(before) || punctuation.test(before))
      var rightFlanking = !/\s/.test(before) && (!punctuation.test(before) || /\s/.test(after) || punctuation.test(after))
      var setEm = null, setStrong = null
      if (len % 2) { // Em
        if (!state.em && leftFlanking && (ch === "*" || !rightFlanking || punctuation.test(before)))
          setEm = true
        else if (state.em == ch && rightFlanking && (ch === "*" || !leftFlanking || punctuation.test(after)))
          setEm = false
      }
      if (len > 1) { // Strong
        if (!state.strong && leftFlanking && (ch === "*" || !rightFlanking || punctuation.test(before)))
          setStrong = true
        else if (state.strong == ch && rightFlanking && (ch === "*" || !leftFlanking || punctuation.test(after)))
          setStrong = false
      }
      if (setStrong != null || setEm != null) {
        if (modeCfg.highlightFormatting) state.formatting = setEm == null ? "strong" : setStrong == null ? "em" : "strong em"
        if (setEm === true) state.em = ch
        if (setStrong === true) state.strong = ch
        var t = getType(state)
        if (setEm === false) state.em = false
        if (setStrong === false) state.strong = false
        return t
      }
    } else if (ch === ' ') {
      if (stream.eat('*') || stream.eat('_')) { // Probably surrounded by spaces
        if (stream.peek() === ' ') { // Surrounded by spaces, ignore
          return getType(state);
        } else { // Not surrounded by spaces, back up pointer
          stream.backUp(1);
        }
      }
    }

    if (modeCfg.strikethrough) {
      if (ch === '~' && stream.eatWhile(ch)) {
        if (state.strikethrough) {// Remove strikethrough
          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
          var t = getType(state);
          state.strikethrough = false;
          return t;
        } else if (stream.match(/^[^\s]/, false)) {// Add strikethrough
          state.strikethrough = true;
          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
          return getType(state);
        }
      } else if (ch === ' ') {
        if (stream.match(/^~~/, true)) { // Probably surrounded by space
          if (stream.peek() === ' ') { // Surrounded by spaces, ignore
            return getType(state);
          } else { // Not surrounded by spaces, back up pointer
            stream.backUp(2);
          }
        }
      }
    }

    if (modeCfg.emoji && ch === ":" && stream.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)) {
      state.emoji = true;
      if (modeCfg.highlightFormatting) state.formatting = "emoji";
      var retType = getType(state);
      state.emoji = false;
      return retType;
    }

    if (ch === ' ') {
      if (stream.match(/^ +$/, false)) {
        state.trailingSpace++;
      } else if (state.trailingSpace) {
        state.trailingSpaceNewLine = true;
      }
    }

    return getType(state);
  }

  function linkInline(stream, state) {
    var ch = stream.next();

    if (ch === ">") {
      state.f = state.inline = inlineNormal;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      if (type){
        type += " ";
      } else {
        type = "";
      }
      return type + tokenTypes.linkInline;
    }

    stream.match(/^[^>]+/, true);

    return tokenTypes.linkInline;
  }

  function linkHref(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if(stream.eatSpace()){
      return null;
    }
    var ch = stream.next();
    if (ch === '(' || ch === '[') {
      state.f = state.inline = getLinkHrefInside(ch === "(" ? ")" : "]");
      if (modeCfg.highlightFormatting) state.formatting = "link-string";
      state.linkHref = true;
      return getType(state);
    }
    return 'error';
  }

  var linkRE = {
    ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
    "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/
  }

  function getLinkHrefInside(endChar) {
    return function(stream, state) {
      var ch = stream.next();

      if (ch === endChar) {
        state.f = state.inline = inlineNormal;
        if (modeCfg.highlightFormatting) state.formatting = "link-string";
        var returnState = getType(state);
        state.linkHref = false;
        return returnState;
      }

      stream.match(linkRE[endChar])
      state.linkHref = true;
      return getType(state);
    };
  }

  function footnoteLink(stream, state) {
    if (stream.match(/^([^\]\\]|\\.)*\]:/, false)) {
      state.f = footnoteLinkInside;
      stream.next(); // Consume [
      if (modeCfg.highlightFormatting) state.formatting = "link";
      state.linkText = true;
      return getType(state);
    }
    return switchInline(stream, state, inlineNormal);
  }

  function footnoteLinkInside(stream, state) {
    if (stream.match(/^\]:/, true)) {
      state.f = state.inline = footnoteUrl;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var returnType = getType(state);
      state.linkText = false;
      return returnType;
    }

    stream.match(/^([^\]\\]|\\.)+/, true);

    return tokenTypes.linkText;
  }

  function footnoteUrl(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if(stream.eatSpace()){
      return null;
    }
    // Match URL
    stream.match(/^[^\s]+/, true);
    // Check for link title
    if (stream.peek() === undefined) { // End of line, set flag to check next line
      state.linkTitle = true;
    } else { // More content on line, check if link title
      stream.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, true);
    }
    state.f = state.inline = inlineNormal;
    return tokenTypes.linkHref + " url";
  }

  var mode = {
    startState: function() {
      return {
        f: blockNormal,

        prevLine: {stream: null},
        thisLine: {stream: null},

        block: blockNormal,
        htmlState: null,
        indentation: 0,

        inline: inlineNormal,
        text: handleText,

        formatting: false,
        linkText: false,
        linkHref: false,
        linkTitle: false,
        code: 0,
        em: false,
        strong: false,
        header: 0,
        setext: 0,
        hr: false,
        taskList: false,
        list: false,
        listStack: [],
        quote: 0,
        trailingSpace: 0,
        trailingSpaceNewLine: false,
        strikethrough: false,
        emoji: false,
        fencedEndRE: null
      };
    },

    copyState: function(s) {
      return {
        f: s.f,

        prevLine: s.prevLine,
        thisLine: s.thisLine,

        block: s.block,
        htmlState: s.htmlState && CodeMirror.copyState(htmlMode, s.htmlState),
        indentation: s.indentation,

        localMode: s.localMode,
        localState: s.localMode ? CodeMirror.copyState(s.localMode, s.localState) : null,

        inline: s.inline,
        text: s.text,
        formatting: false,
        linkText: s.linkText,
        linkTitle: s.linkTitle,
        linkHref: s.linkHref,
        code: s.code,
        em: s.em,
        strong: s.strong,
        strikethrough: s.strikethrough,
        emoji: s.emoji,
        header: s.header,
        setext: s.setext,
        hr: s.hr,
        taskList: s.taskList,
        list: s.list,
        listStack: s.listStack.slice(0),
        quote: s.quote,
        indentedCode: s.indentedCode,
        trailingSpace: s.trailingSpace,
        trailingSpaceNewLine: s.trailingSpaceNewLine,
        md_inside: s.md_inside,
        fencedEndRE: s.fencedEndRE
      };
    },

    token: function(stream, state) {

      // Reset state.formatting
      state.formatting = false;

      if (stream != state.thisLine.stream) {
        state.header = 0;
        state.hr = false;

        if (stream.match(/^\s*$/, true)) {
          blankLine(state);
          return null;
        }

        state.prevLine = state.thisLine
        state.thisLine = {stream: stream}

        // Reset state.taskList
        state.taskList = false;

        // Reset state.trailingSpace
        state.trailingSpace = 0;
        state.trailingSpaceNewLine = false;

        if (!state.localState) {
          state.f = state.block;
          if (state.f != htmlBlock) {
            var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, expandedTab).length;
            state.indentation = indentation;
            state.indentationDiff = null;
            if (indentation > 0) return null;
          }
        }
      }
      return state.f(stream, state);
    },

    innerMode: function(state) {
      if (state.block == htmlBlock) return {state: state.htmlState, mode: htmlMode};
      if (state.localState) return {state: state.localState, mode: state.localMode};
      return {state: state, mode: mode};
    },

    indent: function(state, textAfter, line) {
      if (state.block == htmlBlock && htmlMode.indent) return htmlMode.indent(state.htmlState, textAfter, line)
      if (state.localState && state.localMode.indent) return state.localMode.indent(state.localState, textAfter, line)
      return CodeMirror.Pass
    },

    blankLine: blankLine,

    getType: getType,

    blockCommentStart: "<!--",
    blockCommentEnd: "-->",
    closeBrackets: "()[]{}''\"\"``",
    fold: "markdown"
  };
  return mode;
}, "xml");

CodeMirror.defineMIME("text/markdown", "markdown");

CodeMirror.defineMIME("text/x-markdown", "markdown");

});

/*****/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../markdown/markdown"), require("../../addon/mode/overlay"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../markdown/markdown", "../../addon/mode/overlay"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

var urlRE = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i

CodeMirror.defineMode("gfm", function(config, modeConfig) {
  var codeDepth = 0;
  function blankLine(state) {
    state.code = false;
    return null;
  }
  var gfmOverlay = {
    startState: function() {
      return {
        code: false,
        codeBlock: false,
        ateSpace: false
      };
    },
    copyState: function(s) {
      return {
        code: s.code,
        codeBlock: s.codeBlock,
        ateSpace: s.ateSpace
      };
    },
    token: function(stream, state) {
      state.combineTokens = null;

      // Hack to prevent formatting override inside code blocks (block and inline)
      if (state.codeBlock) {
        if (stream.match(/^```+/)) {
          state.codeBlock = false;
          return null;
        }
        stream.skipToEnd();
        return null;
      }
      if (stream.sol()) {
        state.code = false;
      }
      if (stream.sol() && stream.match(/^```+/)) {
        stream.skipToEnd();
        state.codeBlock = true;
        return null;
      }
      // If this block is changed, it may need to be updated in Markdown mode
      if (stream.peek() === '`') {
        stream.next();
        var before = stream.pos;
        stream.eatWhile('`');
        var difference = 1 + stream.pos - before;
        if (!state.code) {
          codeDepth = difference;
          state.code = true;
        } else {
          if (difference === codeDepth) { // Must be exact
            state.code = false;
          }
        }
        return null;
      } else if (state.code) {
        stream.next();
        return null;
      }
      // Check if space. If so, links can be formatted later on
      if (stream.eatSpace()) {
        state.ateSpace = true;
        return null;
      }
      if (stream.sol() || state.ateSpace) {
        state.ateSpace = false;
        if (modeConfig.gitHubSpice !== false) {
          if(stream.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/)) {
            // User/Project@SHA
            // User@SHA
            // SHA
            state.combineTokens = true;
            return "link";
          } else if (stream.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)) {
            // User/Project#Num
            // User#Num
            // #Num
            state.combineTokens = true;
            return "link";
          }
        }
      }
      if (stream.match(urlRE) &&
          stream.string.slice(stream.start - 2, stream.start) != "](" &&
          (stream.start == 0 || /\W/.test(stream.string.charAt(stream.start - 1)))) {
        // URLs
        // Taken from http://daringfireball.net/2010/07/improved_regex_for_matching_urls
        // And then (issue #1160) simplified to make it not crash the Chrome Regexp engine
        // And then limited url schemes to the CommonMark list, so foo:bar isn't matched as a URL
        state.combineTokens = true;
        return "link";
      }
      stream.next();
      return null;
    },
    blankLine: blankLine
  };

  var markdownConfig = {
    taskLists: true,
    strikethrough: true,
    emoji: true
  };
  for (var attr in modeConfig) {
    markdownConfig[attr] = modeConfig[attr];
  }
  markdownConfig.name = "markdown";
  return CodeMirror.overlayMode(CodeMirror.getMode(config, markdownConfig), gfmOverlay);

}, "markdown");

  CodeMirror.defineMIME("text/x-gfm", "gfm");
});

/*****/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var defaultTags = {
    script: [
      ["lang", /(javascript|babel)/i, "javascript"],
      ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"],
      ["type", /./, "text/plain"],
      [null, null, "javascript"]
    ],
    style:  [
      ["lang", /^css$/i, "css"],
      ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
      ["type", /./, "text/plain"],
      [null, null, "css"]
    ]
  };

  function maybeBackup(stream, pat, style) {
    var cur = stream.current(), close = cur.search(pat);
    if (close > -1) {
      stream.backUp(cur.length - close);
    } else if (cur.match(/<\/?$/)) {
      stream.backUp(cur.length);
      if (!stream.match(pat, false)) stream.match(cur);
    }
    return style;
  }

  var attrRegexpCache = {};
  function getAttrRegexp(attr) {
    var regexp = attrRegexpCache[attr];
    if (regexp) return regexp;
    return attrRegexpCache[attr] = new RegExp("\\s+" + attr + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*");
  }

  function getAttrValue(text, attr) {
    var match = text.match(getAttrRegexp(attr))
    return match ? /^\s*(.*?)\s*$/.exec(match[2])[1] : ""
  }

  function getTagRegexp(tagName, anchored) {
    return new RegExp((anchored ? "^" : "") + "<\/\s*" + tagName + "\s*>", "i");
  }

  function addTags(from, to) {
    for (var tag in from) {
      var dest = to[tag] || (to[tag] = []);
      var source = from[tag];
      for (var i = source.length - 1; i >= 0; i--)
        dest.unshift(source[i])
    }
  }

  function findMatchingMode(tagInfo, tagText) {
    for (var i = 0; i < tagInfo.length; i++) {
      var spec = tagInfo[i];
      if (!spec[0] || spec[1].test(getAttrValue(tagText, spec[0]))) return spec[2];
    }
  }

  CodeMirror.defineMode("htmlmixed", function (config, parserConfig) {
    var htmlMode = CodeMirror.getMode(config, {
      name: "xml",
      htmlMode: true,
      multilineTagIndentFactor: parserConfig.multilineTagIndentFactor,
      multilineTagIndentPastTag: parserConfig.multilineTagIndentPastTag
    });

    var tags = {};
    var configTags = parserConfig && parserConfig.tags, configScript = parserConfig && parserConfig.scriptTypes;
    addTags(defaultTags, tags);
    if (configTags) addTags(configTags, tags);
    if (configScript) for (var i = configScript.length - 1; i >= 0; i--)
      tags.script.unshift(["type", configScript[i].matches, configScript[i].mode])

    function html(stream, state) {
      var style = htmlMode.token(stream, state.htmlState), tag = /\btag\b/.test(style), tagName
      if (tag && !/[<>\s\/]/.test(stream.current()) &&
          (tagName = state.htmlState.tagName && state.htmlState.tagName.toLowerCase()) &&
          tags.hasOwnProperty(tagName)) {
        state.inTag = tagName + " "
      } else if (state.inTag && tag && />$/.test(stream.current())) {
        var inTag = /^([\S]+) (.*)/.exec(state.inTag)
        state.inTag = null
        var modeSpec = stream.current() == ">" && findMatchingMode(tags[inTag[1]], inTag[2])
        var mode = CodeMirror.getMode(config, modeSpec)
        var endTagA = getTagRegexp(inTag[1], true), endTag = getTagRegexp(inTag[1], false);
        state.token = function (stream, state) {
          if (stream.match(endTagA, false)) {
            state.token = html;
            state.localState = state.localMode = null;
            return null;
          }
          return maybeBackup(stream, endTag, state.localMode.token(stream, state.localState));
        };
        state.localMode = mode;
        state.localState = CodeMirror.startState(mode, htmlMode.indent(state.htmlState, "", ""));
      } else if (state.inTag) {
        state.inTag += stream.current()
        if (stream.eol()) state.inTag += " "
      }
      return style;
    };

    return {
      startState: function () {
        var state = CodeMirror.startState(htmlMode);
        return {token: html, inTag: null, localMode: null, localState: null, htmlState: state};
      },

      copyState: function (state) {
        var local;
        if (state.localState) {
          local = CodeMirror.copyState(state.localMode, state.localState);
        }
        return {token: state.token, inTag: state.inTag,
                localMode: state.localMode, localState: local,
                htmlState: CodeMirror.copyState(htmlMode, state.htmlState)};
      },

      token: function (stream, state) {
        return state.token(stream, state);
      },

      indent: function (state, textAfter, line) {
        if (!state.localMode || /^\s*<\//.test(textAfter))
          return htmlMode.indent(state.htmlState, textAfter, line);
        else if (state.localMode.indent)
          return state.localMode.indent(state.localState, textAfter, line);
        else
          return CodeMirror.Pass;
      },

      innerMode: function (state) {
        return {state: state.localState || state.htmlState, mode: state.localMode || htmlMode};
      }
    };
  }, "xml", "javascript", "css");

  CodeMirror.defineMIME("text/html", "htmlmixed");
});

/*****/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

function Context(indented, column, type, info, align, prev) {
  this.indented = indented;
  this.column = column;
  this.type = type;
  this.info = info;
  this.align = align;
  this.prev = prev;
}
function pushContext(state, col, type, info) {
  var indent = state.indented;
  if (state.context && state.context.type == "statement" && type != "statement")
    indent = state.context.indented;
  return state.context = new Context(indent, col, type, info, null, state.context);
}
function popContext(state) {
  var t = state.context.type;
  if (t == ")" || t == "]" || t == "}")
    state.indented = state.context.indented;
  return state.context = state.context.prev;
}

function typeBefore(stream, state, pos) {
  if (state.prevToken == "variable" || state.prevToken == "type") return true;
  if (/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(stream.string.slice(0, pos))) return true;
  if (state.typeAtEndOfLine && stream.column() == stream.indentation()) return true;
}

function isTopScope(context) {
  for (;;) {
    if (!context || context.type == "top") return true;
    if (context.type == "}" && context.prev.info != "namespace") return false;
    context = context.prev;
  }
}

CodeMirror.defineMode("clike", function(config, parserConfig) {
  var indentUnit = config.indentUnit,
      statementIndentUnit = parserConfig.statementIndentUnit || indentUnit,
      dontAlignCalls = parserConfig.dontAlignCalls,
      keywords = parserConfig.keywords || {},
      types = parserConfig.types || {},
      builtin = parserConfig.builtin || {},
      blockKeywords = parserConfig.blockKeywords || {},
      defKeywords = parserConfig.defKeywords || {},
      atoms = parserConfig.atoms || {},
      hooks = parserConfig.hooks || {},
      multiLineStrings = parserConfig.multiLineStrings,
      indentStatements = parserConfig.indentStatements !== false,
      indentSwitch = parserConfig.indentSwitch !== false,
      namespaceSeparator = parserConfig.namespaceSeparator,
      isPunctuationChar = parserConfig.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
      numberStart = parserConfig.numberStart || /[\d\.]/,
      number = parserConfig.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
      isOperatorChar = parserConfig.isOperatorChar || /[+\-*&%=<>!?|\/]/,
      isIdentifierChar = parserConfig.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
      // An optional function that takes a {string} token and returns true if it
      // should be treated as a builtin.
      isReservedIdentifier = parserConfig.isReservedIdentifier || false;

  var curPunc, isDefKeyword;

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (hooks[ch]) {
      var result = hooks[ch](stream, state);
      if (result !== false) return result;
    }
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    }
    if (isPunctuationChar.test(ch)) {
      curPunc = ch;
      return null;
    }
    if (numberStart.test(ch)) {
      stream.backUp(1)
      if (stream.match(number)) return "number"
      stream.next()
    }
    if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      }
      if (stream.eat("/")) {
        stream.skipToEnd();
        return "comment";
      }
    }
    if (isOperatorChar.test(ch)) {
      while (!stream.match(/^\/[\/*]/, false) && stream.eat(isOperatorChar)) {}
      return "operator";
    }
    stream.eatWhile(isIdentifierChar);
    if (namespaceSeparator) while (stream.match(namespaceSeparator))
      stream.eatWhile(isIdentifierChar);

    var cur = stream.current();
    if (contains(keywords, cur)) {
      if (contains(blockKeywords, cur)) curPunc = "newstatement";
      if (contains(defKeywords, cur)) isDefKeyword = true;
      return "keyword";
    }
    if (contains(types, cur)) return "type";
    if (contains(builtin, cur)
        || (isReservedIdentifier && isReservedIdentifier(cur))) {
      if (contains(blockKeywords, cur)) curPunc = "newstatement";
      return "builtin";
    }
    if (contains(atoms, cur)) return "atom";
    return "variable";
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next, end = false;
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) {end = true; break;}
        escaped = !escaped && next == "\\";
      }
      if (end || !(escaped || multiLineStrings))
        state.tokenize = null;
      return "string";
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = null;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return "comment";
  }

  function maybeEOL(stream, state) {
    if (parserConfig.typeFirstDefinitions && stream.eol() && isTopScope(state.context))
      state.typeAtEndOfLine = typeBefore(stream, state, stream.pos)
  }

  // Interface

  return {
    startState: function(basecolumn) {
      return {
        tokenize: null,
        context: new Context((basecolumn || 0) - indentUnit, 0, "top", null, false),
        indented: 0,
        startOfLine: true,
        prevToken: null
      };
    },

    token: function(stream, state) {
      var ctx = state.context;
      if (stream.sol()) {
        if (ctx.align == null) ctx.align = false;
        state.indented = stream.indentation();
        state.startOfLine = true;
      }
      if (stream.eatSpace()) { maybeEOL(stream, state); return null; }
      curPunc = isDefKeyword = null;
      var style = (state.tokenize || tokenBase)(stream, state);
      if (style == "comment" || style == "meta") return style;
      if (ctx.align == null) ctx.align = true;

      if (curPunc == ";" || curPunc == ":" || (curPunc == "," && stream.match(/^\s*(?:\/\/.*)?$/, false)))
        while (state.context.type == "statement") popContext(state);
      else if (curPunc == "{") pushContext(state, stream.column(), "}");
      else if (curPunc == "[") pushContext(state, stream.column(), "]");
      else if (curPunc == "(") pushContext(state, stream.column(), ")");
      else if (curPunc == "}") {
        while (ctx.type == "statement") ctx = popContext(state);
        if (ctx.type == "}") ctx = popContext(state);
        while (ctx.type == "statement") ctx = popContext(state);
      }
      else if (curPunc == ctx.type) popContext(state);
      else if (indentStatements &&
               (((ctx.type == "}" || ctx.type == "top") && curPunc != ";") ||
                (ctx.type == "statement" && curPunc == "newstatement"))) {
        pushContext(state, stream.column(), "statement", stream.current());
      }

      if (style == "variable" &&
          ((state.prevToken == "def" ||
            (parserConfig.typeFirstDefinitions && typeBefore(stream, state, stream.start) &&
             isTopScope(state.context) && stream.match(/^\s*\(/, false)))))
        style = "def";

      if (hooks.token) {
        var result = hooks.token(stream, state, style);
        if (result !== undefined) style = result;
      }

      if (style == "def" && parserConfig.styleDefs === false) style = "variable";

      state.startOfLine = false;
      state.prevToken = isDefKeyword ? "def" : style || curPunc;
      maybeEOL(stream, state);
      return style;
    },

    indent: function(state, textAfter) {
      if (state.tokenize != tokenBase && state.tokenize != null || state.typeAtEndOfLine) return CodeMirror.Pass;
      var ctx = state.context, firstChar = textAfter && textAfter.charAt(0);
      var closing = firstChar == ctx.type;
      if (ctx.type == "statement" && firstChar == "}") ctx = ctx.prev;
      if (parserConfig.dontIndentStatements)
        while (ctx.type == "statement" && parserConfig.dontIndentStatements.test(ctx.info))
          ctx = ctx.prev
      if (hooks.indent) {
        var hook = hooks.indent(state, ctx, textAfter, indentUnit);
        if (typeof hook == "number") return hook
      }
      var switchBlock = ctx.prev && ctx.prev.info == "switch";
      if (parserConfig.allmanIndentation && /[{(]/.test(firstChar)) {
        while (ctx.type != "top" && ctx.type != "}") ctx = ctx.prev
        return ctx.indented
      }
      if (ctx.type == "statement")
        return ctx.indented + (firstChar == "{" ? 0 : statementIndentUnit);
      if (ctx.align && (!dontAlignCalls || ctx.type != ")"))
        return ctx.column + (closing ? 0 : 1);
      if (ctx.type == ")" && !closing)
        return ctx.indented + statementIndentUnit;

      return ctx.indented + (closing ? 0 : indentUnit) +
        (!closing && switchBlock && !/^(?:case|default)\b/.test(textAfter) ? indentUnit : 0);
    },

    electricInput: indentSwitch ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: "//",
    fold: "brace"
  };
});

  function words(str) {
    var obj = {}, words = str.split(" ");
    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
    return obj;
  }
  function contains(words, word) {
    if (typeof words === "function") {
      return words(word);
    } else {
      return words.propertyIsEnumerable(word);
    }
  }
  var cKeywords = "auto if break case register continue return default do sizeof " +
    "static else struct switch extern typedef union for goto while enum const " +
    "volatile inline restrict asm fortran";

  // Do not use this. Use the cTypes function below. This is global just to avoid
  // excessive calls when cTypes is being called multiple times during a parse.
  var basicCTypes = words("int long char short double float unsigned signed " +
    "void bool");

  // Do not use this. Use the objCTypes function below. This is global just to avoid
  // excessive calls when objCTypes is being called multiple times during a parse.
  var basicObjCTypes = words("SEL instancetype id Class Protocol BOOL");

  // Returns true if identifier is a "C" type.
  // C type is defined as those that are reserved by the compiler (basicTypes),
  // and those that end in _t (Reserved by POSIX for types)
  // http://www.gnu.org/software/libc/manual/html_node/Reserved-Names.html
  function cTypes(identifier) {
    return contains(basicCTypes, identifier) || /.+_t$/.test(identifier);
  }

  // Returns true if identifier is a "Objective C" type.
  function objCTypes(identifier) {
    return cTypes(identifier) || contains(basicObjCTypes, identifier);
  }

  var cBlockKeywords = "case do else for if switch while struct enum union";
  var cDefKeywords = "struct enum union";

  function cppHook(stream, state) {
    if (!state.startOfLine) return false
    for (var ch, next = null; ch = stream.peek();) {
      if (ch == "\\" && stream.match(/^.$/)) {
        next = cppHook
        break
      } else if (ch == "/" && stream.match(/^\/[\/\*]/, false)) {
        break
      }
      stream.next()
    }
    state.tokenize = next
    return "meta"
  }

  function pointerHook(_stream, state) {
    if (state.prevToken == "type") return "type";
    return false;
  }

  // For C and C++ (and ObjC): identifiers starting with __
  // or _ followed by a capital letter are reserved for the compiler.
  function cIsReservedIdentifier(token) {
    if (!token || token.length < 2) return false;
    if (token[0] != '_') return false;
    return (token[1] == '_') || (token[1] !== token[1].toLowerCase());
  }

  function cpp14Literal(stream) {
    stream.eatWhile(/[\w\.']/);
    return "number";
  }

  function cpp11StringHook(stream, state) {
    stream.backUp(1);
    // Raw strings.
    if (stream.match(/(R|u8R|uR|UR|LR)/)) {
      var match = stream.match(/"([^\s\\()]{0,16})\(/);
      if (!match) {
        return false;
      }
      state.cpp11RawStringDelim = match[1];
      state.tokenize = tokenRawString;
      return tokenRawString(stream, state);
    }
    // Unicode strings/chars.
    if (stream.match(/(u8|u|U|L)/)) {
      if (stream.match(/["']/, /* eat */ false)) {
        return "string";
      }
      return false;
    }
    // Ignore this hook.
    stream.next();
    return false;
  }

  function cppLooksLikeConstructor(word) {
    var lastTwo = /(\w+)::~?(\w+)$/.exec(word);
    return lastTwo && lastTwo[1] == lastTwo[2];
  }

  // C#-style strings where "" escapes a quote.
  function tokenAtString(stream, state) {
    var next;
    while ((next = stream.next()) != null) {
      if (next == '"' && !stream.eat('"')) {
        state.tokenize = null;
        break;
      }
    }
    return "string";
  }

  // C++11 raw string literal is <prefix>"<delim>( anything )<delim>", where
  // <delim> can be a string up to 16 characters long.
  function tokenRawString(stream, state) {
    // Escape characters that have special regex meanings.
    var delim = state.cpp11RawStringDelim.replace(/[^\w\s]/g, '\\$&');
    var match = stream.match(new RegExp(".*?\\)" + delim + '"'));
    if (match)
      state.tokenize = null;
    else
      stream.skipToEnd();
    return "string";
  }

  function def(mimes, mode) {
    if (typeof mimes == "string") mimes = [mimes];
    var words = [];
    function add(obj) {
      if (obj) for (var prop in obj) if (obj.hasOwnProperty(prop))
        words.push(prop);
    }
    add(mode.keywords);
    add(mode.types);
    add(mode.builtin);
    add(mode.atoms);
    if (words.length) {
      mode.helperType = mimes[0];
      CodeMirror.registerHelper("hintWords", mimes[0], words);
    }

    for (var i = 0; i < mimes.length; ++i)
      CodeMirror.defineMIME(mimes[i], mode);
  }

  def(["text/x-csrc", "text/x-c", "text/x-chdr"], {
    name: "clike",
    keywords: words(cKeywords),
    types: cTypes,
    blockKeywords: words(cBlockKeywords),
    defKeywords: words(cDefKeywords),
    typeFirstDefinitions: true,
    atoms: words("NULL true false"),
    isReservedIdentifier: cIsReservedIdentifier,
    hooks: {
      "#": cppHook,
      "*": pointerHook,
    },
    modeProps: {fold: ["brace", "include"]}
  });

  def(["text/x-c++src", "text/x-c++hdr"], {
    name: "clike",
    // Keywords from https://en.cppreference.com/w/cpp/keyword includes C++20.
    keywords: words(cKeywords + "alignas alignof and and_eq audit axiom bitand bitor catch " +
                    "class compl concept constexpr const_cast decltype delete dynamic_cast " +
                    "explicit export final friend import module mutable namespace new noexcept " +
                    "not not_eq operator or or_eq override private protected public " +
                    "reinterpret_cast requires static_assert static_cast template this " +
                    "thread_local throw try typeid typename using virtual xor xor_eq"),
    types: cTypes,
    blockKeywords: words(cBlockKeywords + " class try catch"),
    defKeywords: words(cDefKeywords + " class namespace"),
    typeFirstDefinitions: true,
    atoms: words("true false NULL nullptr"),
    dontIndentStatements: /^template$/,
    isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
    isReservedIdentifier: cIsReservedIdentifier,
    hooks: {
      "#": cppHook,
      "*": pointerHook,
      "u": cpp11StringHook,
      "U": cpp11StringHook,
      "L": cpp11StringHook,
      "R": cpp11StringHook,
      "0": cpp14Literal,
      "1": cpp14Literal,
      "2": cpp14Literal,
      "3": cpp14Literal,
      "4": cpp14Literal,
      "5": cpp14Literal,
      "6": cpp14Literal,
      "7": cpp14Literal,
      "8": cpp14Literal,
      "9": cpp14Literal,
      token: function(stream, state, style) {
        if (style == "variable" && stream.peek() == "(" &&
            (state.prevToken == ";" || state.prevToken == null ||
             state.prevToken == "}") &&
            cppLooksLikeConstructor(stream.current()))
          return "def";
      }
    },
    namespaceSeparator: "::",
    modeProps: {fold: ["brace", "include"]}
  });

  def("text/x-java", {
    name: "clike",
    keywords: words("abstract assert break case catch class const continue default " +
                    "do else enum extends final finally float for goto if implements import " +
                    "instanceof interface native new package private protected public " +
                    "return static strictfp super switch synchronized this throw throws transient " +
                    "try volatile while @interface"),
    types: words("byte short int long float double boolean char void Boolean Byte Character Double Float " +
                 "Integer Long Number Object Short String StringBuffer StringBuilder Void"),
    blockKeywords: words("catch class do else finally for if switch try while"),
    defKeywords: words("class interface enum @interface"),
    typeFirstDefinitions: true,
    atoms: words("true false null"),
    number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
    hooks: {
      "@": function(stream) {
        // Don't match the @interface keyword.
        if (stream.match('interface', false)) return false;

        stream.eatWhile(/[\w\$_]/);
        return "meta";
      }
    },
    modeProps: {fold: ["brace", "import"]}
  });

  def("text/x-csharp", {
    name: "clike",
    keywords: words("abstract as async await base break case catch checked class const continue" +
                    " default delegate do else enum event explicit extern finally fixed for" +
                    " foreach goto if implicit in interface internal is lock namespace new" +
                    " operator out override params private protected public readonly ref return sealed" +
                    " sizeof stackalloc static struct switch this throw try typeof unchecked" +
                    " unsafe using virtual void volatile while add alias ascending descending dynamic from get" +
                    " global group into join let orderby partial remove select set value var yield"),
    types: words("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func" +
                 " Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32" +
                 " UInt64 bool byte char decimal double short int long object"  +
                 " sbyte float string ushort uint ulong"),
    blockKeywords: words("catch class do else finally for foreach if struct switch try while"),
    defKeywords: words("class interface namespace struct var"),
    typeFirstDefinitions: true,
    atoms: words("true false null"),
    hooks: {
      "@": function(stream, state) {
        if (stream.eat('"')) {
          state.tokenize = tokenAtString;
          return tokenAtString(stream, state);
        }
        stream.eatWhile(/[\w\$_]/);
        return "meta";
      }
    }
  });

  function tokenTripleString(stream, state) {
    var escaped = false;
    while (!stream.eol()) {
      if (!escaped && stream.match('"""')) {
        state.tokenize = null;
        break;
      }
      escaped = stream.next() == "\\" && !escaped;
    }
    return "string";
  }

  function tokenNestedComment(depth) {
    return function (stream, state) {
      var ch
      while (ch = stream.next()) {
        if (ch == "*" && stream.eat("/")) {
          if (depth == 1) {
            state.tokenize = null
            break
          } else {
            state.tokenize = tokenNestedComment(depth - 1)
            return state.tokenize(stream, state)
          }
        } else if (ch == "/" && stream.eat("*")) {
          state.tokenize = tokenNestedComment(depth + 1)
          return state.tokenize(stream, state)
        }
      }
      return "comment"
    }
  }

  def("text/x-scala", {
    name: "clike",
    keywords: words(
      /* scala */
      "abstract case catch class def do else extends final finally for forSome if " +
      "implicit import lazy match new null object override package private protected return " +
      "sealed super this throw trait try type val var while with yield _ " +

      /* package scala */
      "assert assume require print println printf readLine readBoolean readByte readShort " +
      "readChar readInt readLong readFloat readDouble"
    ),
    types: words(
      "AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either " +
      "Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable " +
      "Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering " +
      "Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder " +
      "StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector " +

      /* package java.lang */
      "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable " +
      "Compiler Double Exception Float Integer Long Math Number Object Package Pair Process " +
      "Runtime Runnable SecurityManager Short StackTraceElement StrictMath String " +
      "StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"
    ),
    multiLineStrings: true,
    blockKeywords: words("catch class enum do else finally for forSome if match switch try while"),
    defKeywords: words("class enum def object package trait type val var"),
    atoms: words("true false null"),
    indentStatements: false,
    indentSwitch: false,
    isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
    hooks: {
      "@": function(stream) {
        stream.eatWhile(/[\w\$_]/);
        return "meta";
      },
      '"': function(stream, state) {
        if (!stream.match('""')) return false;
        state.tokenize = tokenTripleString;
        return state.tokenize(stream, state);
      },
      "'": function(stream) {
        stream.eatWhile(/[\w\$_\xa1-\uffff]/);
        return "atom";
      },
      "=": function(stream, state) {
        var cx = state.context
        if (cx.type == "}" && cx.align && stream.eat(">")) {
          state.context = new Context(cx.indented, cx.column, cx.type, cx.info, null, cx.prev)
          return "operator"
        } else {
          return false
        }
      },

      "/": function(stream, state) {
        if (!stream.eat("*")) return false
        state.tokenize = tokenNestedComment(1)
        return state.tokenize(stream, state)
      }
    },
    modeProps: {closeBrackets: {pairs: '()[]{}""', triples: '"'}}
  });

  function tokenKotlinString(tripleString){
    return function (stream, state) {
      var escaped = false, next, end = false;
      while (!stream.eol()) {
        if (!tripleString && !escaped && stream.match('"') ) {end = true; break;}
        if (tripleString && stream.match('"""')) {end = true; break;}
        next = stream.next();
        if(!escaped && next == "$" && stream.match('{'))
          stream.skipTo("}");
        escaped = !escaped && next == "\\" && !tripleString;
      }
      if (end || !tripleString)
        state.tokenize = null;
      return "string";
    }
  }

  def("text/x-kotlin", {
    name: "clike",
    keywords: words(
      /*keywords*/
      "package as typealias class interface this super val operator " +
      "var fun for is in This throw return annotation " +
      "break continue object if else while do try when !in !is as? " +

      /*soft keywords*/
      "file import where by get set abstract enum open inner override private public internal " +
      "protected catch finally out final vararg reified dynamic companion constructor init " +
      "sealed field property receiver param sparam lateinit data inline noinline tailrec " +
      "external annotation crossinline const operator infix suspend actual expect setparam"
    ),
    types: words(
      /* package java.lang */
      "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable " +
      "Compiler Double Exception Float Integer Long Math Number Object Package Pair Process " +
      "Runtime Runnable SecurityManager Short StackTraceElement StrictMath String " +
      "StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray " +
      "ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy " +
      "LazyThreadSafetyMode LongArray Nothing ShortArray Unit"
    ),
    intendSwitch: false,
    indentStatements: false,
    multiLineStrings: true,
    number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
    blockKeywords: words("catch class do else finally for if where try while enum"),
    defKeywords: words("class val var object interface fun"),
    atoms: words("true false null this"),
    hooks: {
      "@": function(stream) {
        stream.eatWhile(/[\w\$_]/);
        return "meta";
      },
      '*': function(_stream, state) {
        return state.prevToken == '.' ? 'variable' : 'operator';
      },
      '"': function(stream, state) {
        state.tokenize = tokenKotlinString(stream.match('""'));
        return state.tokenize(stream, state);
      },
      indent: function(state, ctx, textAfter, indentUnit) {
        var firstChar = textAfter && textAfter.charAt(0);
        if ((state.prevToken == "}" || state.prevToken == ")") && textAfter == "")
          return state.indented;
        if (state.prevToken == "operator" && textAfter != "}" ||
          state.prevToken == "variable" && firstChar == "." ||
          (state.prevToken == "}" || state.prevToken == ")") && firstChar == ".")
          return indentUnit * 2 + ctx.indented;
        if (ctx.align && ctx.type == "}")
          return ctx.indented + (state.context.type == (textAfter || "").charAt(0) ? 0 : indentUnit);
      }
    },
    modeProps: {closeBrackets: {triples: '"'}}
  });

  def(["x-shader/x-vertex", "x-shader/x-fragment"], {
    name: "clike",
    keywords: words("sampler1D sampler2D sampler3D samplerCube " +
                    "sampler1DShadow sampler2DShadow " +
                    "const attribute uniform varying " +
                    "break continue discard return " +
                    "for while do if else struct " +
                    "in out inout"),
    types: words("float int bool void " +
                 "vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 " +
                 "mat2 mat3 mat4"),
    blockKeywords: words("for while do if else struct"),
    builtin: words("radians degrees sin cos tan asin acos atan " +
                    "pow exp log exp2 sqrt inversesqrt " +
                    "abs sign floor ceil fract mod min max clamp mix step smoothstep " +
                    "length distance dot cross normalize ftransform faceforward " +
                    "reflect refract matrixCompMult " +
                    "lessThan lessThanEqual greaterThan greaterThanEqual " +
                    "equal notEqual any all not " +
                    "texture1D texture1DProj texture1DLod texture1DProjLod " +
                    "texture2D texture2DProj texture2DLod texture2DProjLod " +
                    "texture3D texture3DProj texture3DLod texture3DProjLod " +
                    "textureCube textureCubeLod " +
                    "shadow1D shadow2D shadow1DProj shadow2DProj " +
                    "shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod " +
                    "dFdx dFdy fwidth " +
                    "noise1 noise2 noise3 noise4"),
    atoms: words("true false " +
                "gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex " +
                "gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 " +
                "gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 " +
                "gl_FogCoord gl_PointCoord " +
                "gl_Position gl_PointSize gl_ClipVertex " +
                "gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor " +
                "gl_TexCoord gl_FogFragCoord " +
                "gl_FragCoord gl_FrontFacing " +
                "gl_FragData gl_FragDepth " +
                "gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix " +
                "gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse " +
                "gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse " +
                "gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose " +
                "gl_ProjectionMatrixInverseTranspose " +
                "gl_ModelViewProjectionMatrixInverseTranspose " +
                "gl_TextureMatrixInverseTranspose " +
                "gl_NormalScale gl_DepthRange gl_ClipPlane " +
                "gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel " +
                "gl_FrontLightModelProduct gl_BackLightModelProduct " +
                "gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ " +
                "gl_FogParameters " +
                "gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords " +
                "gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats " +
                "gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits " +
                "gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits " +
                "gl_MaxDrawBuffers"),
    indentSwitch: false,
    hooks: {"#": cppHook},
    modeProps: {fold: ["brace", "include"]}
  });

  def("text/x-nesc", {
    name: "clike",
    keywords: words(cKeywords + " as atomic async call command component components configuration event generic " +
                    "implementation includes interface module new norace nx_struct nx_union post provides " +
                    "signal task uses abstract extends"),
    types: cTypes,
    blockKeywords: words(cBlockKeywords),
    atoms: words("null true false"),
    hooks: {"#": cppHook},
    modeProps: {fold: ["brace", "include"]}
  });

  def("text/x-objectivec", {
    name: "clike",
    keywords: words(cKeywords + " bycopy byref in inout oneway out self super atomic nonatomic retain copy " +
                    "readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd " +
                    "@interface @implementation @end @protocol @encode @property @synthesize @dynamic @class " +
                    "@public @package @private @protected @required @optional @try @catch @finally @import " +
                    "@selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available"),
    types: objCTypes,
    builtin: words("FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION NS_RETURNS_RETAINED " +
                   "NS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER " +
                   "NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN " +
                   "NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT"),
    blockKeywords: words(cBlockKeywords + " @synthesize @try @catch @finally @autoreleasepool @synchronized"),
    defKeywords: words(cDefKeywords + " @interface @implementation @protocol @class"),
    dontIndentStatements: /^@.*$/,
    typeFirstDefinitions: true,
    atoms: words("YES NO NULL Nil nil true false nullptr"),
    isReservedIdentifier: cIsReservedIdentifier,
    hooks: {
      "#": cppHook,
      "*": pointerHook,
    },
    modeProps: {fold: ["brace", "include"]}
  });

  def("text/x-squirrel", {
    name: "clike",
    keywords: words("base break clone continue const default delete enum extends function in class" +
                    " foreach local resume return this throw typeof yield constructor instanceof static"),
    types: cTypes,
    blockKeywords: words("case catch class else for foreach if switch try while"),
    defKeywords: words("function local class"),
    typeFirstDefinitions: true,
    atoms: words("true false null"),
    hooks: {"#": cppHook},
    modeProps: {fold: ["brace", "include"]}
  });

  // Ceylon Strings need to deal with interpolation
  var stringTokenizer = null;
  function tokenCeylonString(type) {
    return function(stream, state) {
      var escaped = false, next, end = false;
      while (!stream.eol()) {
        if (!escaped && stream.match('"') &&
              (type == "single" || stream.match('""'))) {
          end = true;
          break;
        }
        if (!escaped && stream.match('``')) {
          stringTokenizer = tokenCeylonString(type);
          end = true;
          break;
        }
        next = stream.next();
        escaped = type == "single" && !escaped && next == "\\";
      }
      if (end)
          state.tokenize = null;
      return "string";
    }
  }

  def("text/x-ceylon", {
    name: "clike",
    keywords: words("abstracts alias assembly assert assign break case catch class continue dynamic else" +
                    " exists extends finally for function given if import in interface is let module new" +
                    " nonempty object of out outer package return satisfies super switch then this throw" +
                    " try value void while"),
    types: function(word) {
        // In Ceylon all identifiers that start with an uppercase are types
        var first = word.charAt(0);
        return (first === first.toUpperCase() && first !== first.toLowerCase());
    },
    blockKeywords: words("case catch class dynamic else finally for function if interface module new object switch try while"),
    defKeywords: words("class dynamic function interface module object package value"),
    builtin: words("abstract actual aliased annotation by default deprecated doc final formal late license" +
                   " native optional sealed see serializable shared suppressWarnings tagged throws variable"),
    isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
    isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
    numberStart: /[\d#$]/,
    number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
    multiLineStrings: true,
    typeFirstDefinitions: true,
    atoms: words("true false null larger smaller equal empty finished"),
    indentSwitch: false,
    styleDefs: false,
    hooks: {
      "@": function(stream) {
        stream.eatWhile(/[\w\$_]/);
        return "meta";
      },
      '"': function(stream, state) {
          state.tokenize = tokenCeylonString(stream.match('""') ? "triple" : "single");
          return state.tokenize(stream, state);
        },
      '`': function(stream, state) {
          if (!stringTokenizer || !stream.match('`')) return false;
          state.tokenize = stringTokenizer;
          stringTokenizer = null;
          return state.tokenize(stream, state);
        },
      "'": function(stream) {
        stream.eatWhile(/[\w\$_\xa1-\uffff]/);
        return "atom";
      },
      token: function(_stream, state, style) {
          if ((style == "variable" || style == "type") &&
              state.prevToken == ".") {
            return "variable-2";
          }
        }
    },
    modeProps: {
        fold: ["brace", "import"],
        closeBrackets: {triples: '"'}
    }
  });

});

/*****/
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  CodeMirror.modeInfo = [
    {name: "APL", mime: "text/apl", mode: "apl", ext: ["dyalog", "apl"]},
    {name: "PGP", mimes: ["application/pgp", "application/pgp-encrypted", "application/pgp-keys", "application/pgp-signature"], mode: "asciiarmor", ext: ["asc", "pgp", "sig"]},
    {name: "ASN.1", mime: "text/x-ttcn-asn", mode: "asn.1", ext: ["asn", "asn1"]},
    {name: "Asterisk", mime: "text/x-asterisk", mode: "asterisk", file: /^extensions\.conf$/i},
    {name: "Brainfuck", mime: "text/x-brainfuck", mode: "brainfuck", ext: ["b", "bf"]},
    {name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h", "ino"]},
    {name: "C++", mime: "text/x-c++src", mode: "clike", ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"], alias: ["cpp"]},
    {name: "Cobol", mime: "text/x-cobol", mode: "cobol", ext: ["cob", "cpy"]},
    {name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp"]},
    {name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj", "cljc", "cljx"]},
    {name: "ClojureScript", mime: "text/x-clojurescript", mode: "clojure", ext: ["cljs"]},
    {name: "Closure Stylesheets (GSS)", mime: "text/x-gss", mode: "css", ext: ["gss"]},
    {name: "CMake", mime: "text/x-cmake", mode: "cmake", ext: ["cmake", "cmake.in"], file: /^CMakeLists.txt$/},
    {name: "CoffeeScript", mimes: ["application/vnd.coffeescript", "text/coffeescript", "text/x-coffeescript"], mode: "coffeescript", ext: ["coffee"], alias: ["coffee", "coffee-script"]},
    {name: "Common Lisp", mime: "text/x-common-lisp", mode: "commonlisp", ext: ["cl", "lisp", "el"], alias: ["lisp"]},
    {name: "Cypher", mime: "application/x-cypher-query", mode: "cypher", ext: ["cyp", "cypher"]},
    {name: "Cython", mime: "text/x-cython", mode: "python", ext: ["pyx", "pxd", "pxi"]},
    {name: "Crystal", mime: "text/x-crystal", mode: "crystal", ext: ["cr"]},
    {name: "CSS", mime: "text/css", mode: "css", ext: ["css"]},
    {name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"]},
    {name: "D", mime: "text/x-d", mode: "d", ext: ["d"]},
    {name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"]},
    {name: "diff", mime: "text/x-diff", mode: "diff", ext: ["diff", "patch"]},
    {name: "Django", mime: "text/x-django", mode: "django"},
    {name: "Dockerfile", mime: "text/x-dockerfile", mode: "dockerfile", file: /^Dockerfile$/},
    {name: "DTD", mime: "application/xml-dtd", mode: "dtd", ext: ["dtd"]},
    {name: "Dylan", mime: "text/x-dylan", mode: "dylan", ext: ["dylan", "dyl", "intr"]},
    {name: "EBNF", mime: "text/x-ebnf", mode: "ebnf"},
    {name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"]},
    {name: "edn", mime: "application/edn", mode: "clojure", ext: ["edn"]},
    {name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"]},
    {name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"]},
    {name: "Embedded Javascript", mime: "application/x-ejs", mode: "htmlembedded", ext: ["ejs"]},
    {name: "Embedded Ruby", mime: "application/x-erb", mode: "htmlembedded", ext: ["erb"]},
    {name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"]},
    {name: "Esper", mime: "text/x-esper", mode: "sql"},
    {name: "Factor", mime: "text/x-factor", mode: "factor", ext: ["factor"]},
    {name: "FCL", mime: "text/x-fcl", mode: "fcl"},
    {name: "Forth", mime: "text/x-forth", mode: "forth", ext: ["forth", "fth", "4th"]},
    {name: "Fortran", mime: "text/x-fortran", mode: "fortran", ext: ["f", "for", "f77", "f90", "f95"]},
    {name: "F#", mime: "text/x-fsharp", mode: "mllike", ext: ["fs"], alias: ["fsharp"]},
    {name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"]},
    {name: "Gherkin", mime: "text/x-feature", mode: "gherkin", ext: ["feature"]},
    {name: "GitHub Flavored Markdown", mime: "text/x-gfm", mode: "gfm", file: /^(readme|contributing|history).md$/i},
    {name: "Go", mime: "text/x-go", mode: "go", ext: ["go"]},
    {name: "Groovy", mime: "text/x-groovy", mode: "groovy", ext: ["groovy", "gradle"], file: /^Jenkinsfile$/},
    {name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"]},
    {name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"]},
    {name: "Haskell (Literate)", mime: "text/x-literate-haskell", mode: "haskell-literate", ext: ["lhs"]},
    {name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"]},
    {name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"]},
    {name: "ASP.NET", mime: "application/x-aspx", mode: "htmlembedded", ext: ["aspx"], alias: ["asp", "aspx"]},
    {name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm", "handlebars", "hbs"], alias: ["xhtml"]},
    {name: "HTTP", mime: "message/http", mode: "http"},
    {name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"]},
    {name: "Pug", mime: "text/x-pug", mode: "pug", ext: ["jade", "pug"], alias: ["jade"]},
    {name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"]},
    {name: "Java Server Pages", mime: "application/x-jsp", mode: "htmlembedded", ext: ["jsp"], alias: ["jsp"]},
    {name: "JavaScript", mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
     mode: "javascript", ext: ["js"], alias: ["ecmascript", "js", "node"]},
    {name: "JSON", mimes: ["application/json", "application/x-json"], mode: "javascript", ext: ["json", "map"], alias: ["json5"]},
    {name: "JSON-LD", mime: "application/ld+json", mode: "javascript", ext: ["jsonld"], alias: ["jsonld"]},
    {name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"]},
    {name: "Jinja2", mime: "text/jinja2", mode: "jinja2", ext: ["j2", "jinja", "jinja2"]},
    {name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"]},
    {name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"]},
    {name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"]},
    {name: "LiveScript", mime: "text/x-livescript", mode: "livescript", ext: ["ls"], alias: ["ls"]},
    {name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"]},
    {name: "Markdown", mime: "text/x-markdown", mode: "markdown", ext: ["markdown", "md", "mkd"]},
    {name: "mIRC", mime: "text/mirc", mode: "mirc"},
    {name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql"},
    {name: "Mathematica", mime: "text/x-mathematica", mode: "mathematica", ext: ["m", "nb"]},
    {name: "Modelica", mime: "text/x-modelica", mode: "modelica", ext: ["mo"]},
    {name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"]},
    {name: "MS SQL", mime: "text/x-mssql", mode: "sql"},
    {name: "mbox", mime: "application/mbox", mode: "mbox", ext: ["mbox"]},
    {name: "MySQL", mime: "text/x-mysql", mode: "sql"},
    {name: "Nginx", mime: "text/x-nginx-conf", mode: "nginx", file: /nginx.*\.conf$/i},
    {name: "NSIS", mime: "text/x-nsis", mode: "nsis", ext: ["nsh", "nsi"]},
    {name: "NTriples", mimes: ["application/n-triples", "application/n-quads", "text/n-triples"],
     mode: "ntriples", ext: ["nt", "nq"]},
    {name: "Objective-C", mime: "text/x-objectivec", mode: "clike", ext: ["m", "mm"], alias: ["objective-c", "objc"]},
    {name: "OCaml", mime: "text/x-ocaml", mode: "mllike", ext: ["ml", "mli", "mll", "mly"]},
    {name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"]},
    {name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"]},
    {name: "Pascal", mime: "text/x-pascal", mode: "pascal", ext: ["p", "pas"]},
    {name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"]},
    {name: "Perl", mime: "text/x-perl", mode: "perl", ext: ["pl", "pm"]},
    {name: "PHP", mimes: ["text/x-php", "application/x-httpd-php", "application/x-httpd-php-open"], mode: "php", ext: ["php", "php3", "php4", "php5", "php7", "phtml"]},
    {name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"]},
    {name: "Plain Text", mime: "text/plain", mode: "null", ext: ["txt", "text", "conf", "def", "list", "log"]},
    {name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"]},
    {name: "PowerShell", mime: "application/x-powershell", mode: "powershell", ext: ["ps1", "psd1", "psm1"]},
    {name: "Properties files", mime: "text/x-properties", mode: "properties", ext: ["properties", "ini", "in"], alias: ["ini", "properties"]},
    {name: "ProtoBuf", mime: "text/x-protobuf", mode: "protobuf", ext: ["proto"]},
    {name: "Python", mime: "text/x-python", mode: "python", ext: ["BUILD", "bzl", "py", "pyw"], file: /^(BUCK|BUILD)$/},
    {name: "Puppet", mime: "text/x-puppet", mode: "puppet", ext: ["pp"]},
    {name: "Q", mime: "text/x-q", mode: "q", ext: ["q"]},
    {name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r", "R"], alias: ["rscript"]},
    {name: "reStructuredText", mime: "text/x-rst", mode: "rst", ext: ["rst"], alias: ["rst"]},
    {name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm"},
    {name: "RPM Spec", mime: "text/x-rpm-spec", mode: "rpm", ext: ["spec"]},
    {name: "Ruby", mime: "text/x-ruby", mode: "ruby", ext: ["rb"], alias: ["jruby", "macruby", "rake", "rb", "rbx"]},
    {name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"]},
    {name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"]},
    {name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"]},
    {name: "Scala", mime: "text/x-scala", mode: "clike", ext: ["scala"]},
    {name: "Scheme", mime: "text/x-scheme", mode: "scheme", ext: ["scm", "ss"]},
    {name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"]},
    {name: "Shell", mimes: ["text/x-sh", "application/x-sh"], mode: "shell", ext: ["sh", "ksh", "bash"], alias: ["bash", "sh", "zsh"], file: /^PKGBUILD$/},
    {name: "Sieve", mime: "application/sieve", mode: "sieve", ext: ["siv", "sieve"]},
    {name: "Slim", mimes: ["text/x-slim", "application/x-slim"], mode: "slim", ext: ["slim"]},
    {name: "Smalltalk", mime: "text/x-stsrc", mode: "smalltalk", ext: ["st"]},
    {name: "Smarty", mime: "text/x-smarty", mode: "smarty", ext: ["tpl"]},
    {name: "Solr", mime: "text/x-solr", mode: "solr"},
    {name: "SML", mime: "text/x-sml", mode: "mllike", ext: ["sml", "sig", "fun", "smackspec"]},
    {name: "Soy", mime: "text/x-soy", mode: "soy", ext: ["soy"], alias: ["closure template"]},
    {name: "SPARQL", mime: "application/sparql-query", mode: "sparql", ext: ["rq", "sparql"], alias: ["sparul"]},
    {name: "Spreadsheet", mime: "text/x-spreadsheet", mode: "spreadsheet", alias: ["excel", "formula"]},
    {name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"]},
    {name: "SQLite", mime: "text/x-sqlite", mode: "sql"},
    {name: "Squirrel", mime: "text/x-squirrel", mode: "clike", ext: ["nut"]},
    {name: "Stylus", mime: "text/x-styl", mode: "stylus", ext: ["styl"]},
    {name: "Swift", mime: "text/x-swift", mode: "swift", ext: ["swift"]},
    {name: "sTeX", mime: "text/x-stex", mode: "stex"},
    {name: "LaTeX", mime: "text/x-latex", mode: "stex", ext: ["text", "ltx", "tex"], alias: ["tex"]},
    {name: "SystemVerilog", mime: "text/x-systemverilog", mode: "verilog", ext: ["v", "sv", "svh"]},
    {name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"]},
    {name: "Textile", mime: "text/x-textile", mode: "textile", ext: ["textile"]},
    {name: "TiddlyWiki ", mime: "text/x-tiddlywiki", mode: "tiddlywiki"},
    {name: "Tiki wiki", mime: "text/tiki", mode: "tiki"},
    {name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"]},
    {name: "Tornado", mime: "text/x-tornado", mode: "tornado"},
    {name: "troff", mime: "text/troff", mode: "troff", ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]},
    {name: "TTCN", mime: "text/x-ttcn", mode: "ttcn", ext: ["ttcn", "ttcn3", "ttcnpp"]},
    {name: "TTCN_CFG", mime: "text/x-ttcn-cfg", mode: "ttcn-cfg", ext: ["cfg"]},
    {name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"]},
    {name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"]},
    {name: "TypeScript-JSX", mime: "text/typescript-jsx", mode: "jsx", ext: ["tsx"], alias: ["tsx"]},
    {name: "Twig", mime: "text/x-twig", mode: "twig"},
    {name: "Web IDL", mime: "text/x-webidl", mode: "webidl", ext: ["webidl"]},
    {name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"]},
    {name: "VBScript", mime: "text/vbscript", mode: "vbscript", ext: ["vbs"]},
    {name: "Velocity", mime: "text/velocity", mode: "velocity", ext: ["vtl"]},
    {name: "Verilog", mime: "text/x-verilog", mode: "verilog", ext: ["v"]},
    {name: "VHDL", mime: "text/x-vhdl", mode: "vhdl", ext: ["vhd", "vhdl"]},
    {name: "Vue.js Component", mimes: ["script/x-vue", "text/x-vue"], mode: "vue", ext: ["vue"]},
    {name: "XML", mimes: ["application/xml", "text/xml"], mode: "xml", ext: ["xml", "xsl", "xsd", "svg"], alias: ["rss", "wsdl", "xsd"]},
    {name: "XQuery", mime: "application/xquery", mode: "xquery", ext: ["xy", "xquery"]},
    {name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"]},
    {name: "YAML", mimes: ["text/x-yaml", "text/yaml"], mode: "yaml", ext: ["yaml", "yml"], alias: ["yml"]},
    {name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"]},
    {name: "mscgen", mime: "text/x-mscgen", mode: "mscgen", ext: ["mscgen", "mscin", "msc"]},
    {name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"]},
    {name: "msgenny", mime: "text/x-msgenny", mode: "mscgen", ext: ["msgenny"]}
  ];
  // Ensure all modes have a mime property for backwards compatibility
  for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
    var info = CodeMirror.modeInfo[i];
    if (info.mimes) info.mime = info.mimes[0];
  }

  CodeMirror.findModeByMIME = function(mime) {
    mime = mime.toLowerCase();
    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
      var info = CodeMirror.modeInfo[i];
      if (info.mime == mime) return info;
      if (info.mimes) for (var j = 0; j < info.mimes.length; j++)
        if (info.mimes[j] == mime) return info;
    }
    if (/\+xml$/.test(mime)) return CodeMirror.findModeByMIME("application/xml")
    if (/\+json$/.test(mime)) return CodeMirror.findModeByMIME("application/json")
  };

  CodeMirror.findModeByExtension = function(ext) {
    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
      var info = CodeMirror.modeInfo[i];
      if (info.ext) for (var j = 0; j < info.ext.length; j++)
        if (info.ext[j] == ext) return info;
    }
  };

  CodeMirror.findModeByFileName = function(filename) {
    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
      var info = CodeMirror.modeInfo[i];
      if (info.file && info.file.test(filename)) return info;
    }
    var dot = filename.lastIndexOf(".");
    var ext = dot > -1 && filename.substring(dot + 1, filename.length);
    if (ext) return CodeMirror.findModeByExtension(ext);
  };

  CodeMirror.findModeByName = function(name) {
    name = name.toLowerCase();
    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
      var info = CodeMirror.modeInfo[i];
      if (info.name.toLowerCase() == name) return info;
      if (info.alias) for (var j = 0; j < info.alias.length; j++)
        if (info.alias[j].toLowerCase() == name) return info;
    }
  };
});
