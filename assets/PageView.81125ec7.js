var w=Object.defineProperty,S=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var v=(n,a,e)=>a in n?w(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,_=(n,a)=>{for(var e in a||(a={}))k.call(a,e)&&v(n,e,a[e]);if(p)for(var e of p(a))C.call(a,e)&&v(n,e,a[e]);return n},y=(n,a)=>S(n,b(a));var g=(n,a,e)=>new Promise((i,c)=>{var l=o=>{try{r(e.next(o))}catch(t){c(t)}},d=o=>{try{r(e.throw(o))}catch(t){c(t)}},r=o=>o.done?i(o.value):Promise.resolve(o.value).then(l,d);r((e=e.apply(n,a)).next())});import{C as E}from"./ComponentWrapper.3485c561.js";import{g as x}from"./pages.499cc291.js";import{d as z,r as h,i as D,H as P,Y as F,Z as A,a as B,v as I,$ as L,o as m,c as f,F as V,e as H,A as R,l as W,u as q,a0 as M,_ as U}from"./index.394616ab.js";import"./index.534d16de.js";const Y=z({__name:"PageView",setup(n){const a=h([]),e=h({width:0,height:0,scale:0,image:"",color:"#084860"}),i=D(()=>{const t=y(_({},e.value),{backgroundImage:e.value.image,backgroundSize:"cover",backgroundColor:e.value.color||"#084860"});return P(t,["width","height","backgroundImage","backgroundSize","backgroundColor"])}),c=F(),l=A(),d=t=>g(this,null,function*(){console.log("\u52A0\u8F7D\u901A\u7528\u7EC4\u4EF6");try{const s=yield x(t);r(s.data)}catch(s){l.push({name:"Error"})}}),r=t=>{t.canvasStyle&&(e.value=t.canvasStyle),t.canvasData&&(a.value=t.canvasData.map(s=>M(s))),o()};B(()=>g(this,null,function*(){yield d(c.params.index),window.addEventListener("resize",o)})),I(()=>{window.removeEventListener("resize",o)});const o=()=>{const t=document.querySelector(".screen");if(t){const s=e.value.width,u=e.value.height;L(t,s,u)}};return(t,s)=>(m(),f("div",{class:"bg",style:W(q(i))},[(m(!0),f(V,null,H(a.value,u=>(m(),R(E,{key:u.id,component:u},null,8,["component"]))),128))],4))}});const K=U(Y,[["__scopeId","data-v-2b6a415c"]]);export{K as default};
