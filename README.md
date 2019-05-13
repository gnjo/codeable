# codeable
CodeMirror wrapping
```pug
//pug
script(src="https://gnjo.github.io/codeable/codemirror.pack.js")
script(src="https://gnjo.github.io/codeable/codeable.js")
link(href="https://gnjo.github.io/codeable/codemirror.pack.css" rel="stylesheet")
```

```js
//completed detail
codeableOption=opt;
codeable(uniqQuery,caller) or codeable(uniqQuery,true) 

el.dataset.mode
el.dataset.text
//data-mode
//data-text

//query target living only, need the document.body children
codeableOption=opt;
let ca=codeable('.ed',(el,obj)=>{/*//el.dataset.text*/ })

codeable('.ed',true); //meta programming observe the target.dataset.text

ca.el
ca.cm
ca.text
ca.remove(false)//if false, ca.cm. true is all. ca.cm, ca.el 
let text=ca.remove() //if remove, return text
```

## font face
default setting do not join the xxx.ttf. you must write the font-face. choice of the one.
```css
.CodeMirror {
  font-family: consolas,monospace;
}
```
consolas
```css
@font-face {
  font-family: 'consolas';
  src: url('https://gnjo.github.io/codeable/Consolas.ttf');
}
```
newpanama
```css
@font-face {
  font-family: 'newpanama';
  src: url('https://gnjo.github.io/codeable/newpanama.woff?v=1') format("woff"); 
}
```
larabie2
```css
@font-face {
  font-family: 'larabie2';
  src: url('https://gnjo.github.io/codeable/larabie2.ttf');
}
```
gohu
```css
@font-face {
  font-family: 'gohu';
  src: url('https://gnjo.github.io/codeable/gohufont-uni-14ttf');
}
```
Inconsolata
```css
@font-face {
  font-family: 'inconsolata';
  src: url('https://gnjo.github.io/codeable/Inconsolata.ttf');
}
```
monaco
```css
@font-face {
  font-family: 'monaco';
  src: url('https://gnjo.github.io/codeable/monaco.ttf');
}
```
