import{d as x,m as w,i as l,u as s,o,c as r,F as p,f as i,n as y,y as d,s as u,x as B,Y as f,z as b,A as z,B as E,C as m,_ as G}from"./index.642367b9.js";import{S as I}from"./Shape.88c8276c.js";import"./enums.27e2d34b.js";import"./useEventBus.f9618377.js";const M={key:0,class:"group"},A=x({__name:"Group",props:{component:null},setup(c){const _=c,a=w(),g=l(()=>a.isEditMode),h=l(()=>a.curComponent),S=l(()=>{var n;let t=a.curComponent;for(;t;){if(((n=t.parent)==null?void 0:n.id)===_.component.id)return!0;t=t.parent}return!1}),C=t=>!(a.isEditMode&&t===!1),k=t=>{var n;return(n=t.groupStyle)!=null&&n.gheight?m(t.groupStyle,["gtop","gleft","gwidth","gheight","grotate"]):m(t.style,["top","left","width","height","rotate"])};return(t,n)=>s(g)?(o(),r("div",{key:1,class:y(["group",{dotted:s(S)}])},[(o(!0),r(p,null,i(c.component.subComponents,(e,v)=>(o(),r(p,{key:e.id},[C(e.display)?(o(),d(s(I),{key:0,id:"shape"+e.id,defaultStyle:e.style,style:u(k(e)),active:e.id===(s(h)||{}).id,info:e,class:y({lock:e.locked}),isInner:!0,index:v},{default:b(()=>[(o(),d(f(e.component),{id:"component"+e.id,class:"component",style:u(s(z)(e)),component:e},null,8,["id","style","component"]))]),_:2},1032,["id","defaultStyle","style","active","info","class","index"])):E("",!0)],64))),128))],2)):(o(),r("div",M,[(o(!0),r(p,null,i(c.component.subComponents,e=>(o(),d(f(e.component),{key:e.id,id:"component"+e.id,class:"component",style:u(s(B)(e)),component:e},null,8,["id","style","component"]))),128))]))}});const O=G(A,[["__scopeId","data-v-f0f28382"]]);export{O as default};