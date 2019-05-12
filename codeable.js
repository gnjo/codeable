;(function(root){
 let defaultOption={},CodeMirror=root.CodeMirror
 ,is={},util={}
 ;
 defaultOption={
  mode:""
  ,lineNumbers:false
  ,tabSize:1
  ,indentUnit:1 
  ,firstLineNumber:1
  ,lineWrapping: true
  ,matchBrackets: true
  ,theme:'0fa'  
  ,extraKeys: {"Ctrl-Space": "autocomplete"}
 }
 ;
 function getMode(str){
  let one=/^(.+?)\s/ 
  let line=(one.test(str))?str.match(/^(.+?)\s/).pop():str
  ,css=/^\/\*css/
  ,js=/^\/\/js|^\/\/javascript|^\/\*js|^\/\*javascript/
  ,pug=/^\/\/pug/
  //,scss=/^\/\*scss|^\/\/scss/
  //if(scss.test(line))return 'text/x-scss'
  if(css.test(line))return 'css'
  if(js.test(line))return 'javascript'
  if(pug.test(line))return 'pug'
  return "null";//mode nothing is string null
 }
 ;
 function getCodeMirror(el,obj){
  let user=root.codeableOption||{}
  ,def=util.defaultOption
  ,opt=Object.assign({},def,user,{value:obj.text,mode:obj.mode})
  ,caller=obj.caller
  ;
  let cm=CodeMirror(el,opt) //gen
  ;
  let input=(cm)=>{
   setTimeout((text,oldmode)=>{
    let mode=util.getMode(text)
    ;
    if(!el)return
    ;
    //meta mapping
    obj.text=text
    obj.mode=mode
    if(obj.meta){
     el.dataset.text=text
     el.dataset.mode=mode
    }
    //caller
    if(caller)caller(el,obj)
    if(oldmode===mode)return;
    //console.log('changemode',mode)
    if(cm)cm.setOption('mode',mode)

   },0,cm.doc.getValue(),cm.getMode().name)
   ;
   //cm.setSize('100%','100%')
  }

  cm.on('blur',(cm)=>{cm.off('change',input)})
  cm.on('focus',(cm)=>{cm.on('change',input)})

  return cm;
 }
 ;
 //util
 util.dummy=()=>{/**/}
 util.getData=(el)=>{return{mode:el.dataset.mode,text:el.dataset.text}}
 util.getMode=getMode
 util.getCodeMirror=getCodeMirror
 util.defaultOption=defaultOption
 ;
 //is
 is.string = function(obj){return toString.call(obj) === '[object String]'}
 is.boolean = function(obj){return obj === true || obj === false || toString.call(obj) === '[object Boolean]'}
 is.bool=is.boolean
 ; 
 function entry(_query,_caller=false){
  ;//param error
  let el=document.querySelector(_query)
  if(!el) return console.log('query empty',_query)
  ;//gather boot value
  let meta=(_caller===false)?false:true
  ,caller=is.boolean(_caller)?void 0:_caller
  ,old=util.getData(el)
  ,text=el.textContent||old.text||""
  ,mode=util.getMode(text)
  ;
  //if(meta)console.log('meta flagged')
  el.textContent='' //swapping
  ;
  let o={}
  o.el=el
  o.text=text
  o.mode=old.mode;
  o.caller=caller;
  o.meta=meta
  o.cm=void 0;
  o.util=util
  o.init=()=>{
   o.cm=o.util.getCodeMirror(el,o)
   if(o.meta){
    o.el.dataset.text=o.text
    o.el.dataset.mode=o.mode
   }
  }
  o.remove=(flg=false)=>{
   let text=o.text||''
   o.cm.getWrapperElement().remove()
   o.cm=void 0;//active garbage collector
   if(flg){o.el.remove();o.el=void 0}
   else{o.el.textContent=text}
   ;
   return text;
  }

  o.init();
  return o;
 }
 ;
 root.codeable=entry
 ;
 //root.codeableOption={}//if added the codemirror option 
})(this);
