var g=(h,r,e)=>new Promise((p,l)=>{var v=d=>{try{u(e.next(d))}catch(f){l(f)}},c=d=>{try{u(e.throw(d))}catch(f){l(f)}},u=d=>d.done?p(d.value):Promise.resolve(d.value).then(v,c);u((e=e.apply(h,r)).next())});import{N as G,a as M,T as Y}from"./Toolbar.96a33ee3.js";import{f as U,e as q,p as Q,k as X,c as L,g as O,N as $,a as T,v as P,i as Z,u as ee,b as te,h as ae,d as se}from"./View.f9d86797.js";import{d as x,b7 as C,ah as ne,r as _,b8 as W,i as k,U as oe,ai as j,o as S,A as D,E as s,b as m,V as a,n as ue,t as z,u as t,a1 as le,_ as F,a2 as V,a_ as R,z as N,a3 as I,b0 as ce,bc as de,R as w,a as ie,c as re,F as pe,e as _e,f as fe,a6 as ve,a7 as H,w as ye,a9 as ge,l as me,a8 as he}from"./index.c09e128e.js";import{S as K}from"./enums.27e2d34b.js";import{u as Se,e as be}from"./useEventBus.fe472429.js";const we={class:"buttons"},De={class:"footer"},Ce=x({__name:"Editor",props:{data:{default:()=>({code:"",type:C.Javascript})},config:{default:()=>({height:"600px",tabSize:4,indentWithTab:!0,autofocus:!0,disabled:!1})},mode:{default:"use"}},emits:["update:data","change"],setup(h,{emit:r}){const e=h,p=ne(),l=_(!0),v=_(!1),c={Javascript:U,Python:Q},u=W(e.data),d=()=>{r("update:data",u),r("change",u)},f=k(()=>Object.keys(C).map(i=>({label:i,value:i}))),B=_(C.Javascript),A=k(()=>c[B.value]||U),o=_(null),n=()=>{const i=o.value.handleRedo;i&&i()},y=()=>{const i=o.value.handleUndo;i&&i()};return oe(()=>e.data,()=>{e.data&&(u.code=e.data.code,u.type=e.data.type)}),(i,b)=>{const J=j("icon-park");return S(),D(t(q),{language:t(A),config:h.config,theme:t(p).darkTheme?"dark":"light",code:u.code,"onUpdate:code":[b[2]||(b[2]=E=>u.code=E),d],ref_key:"cm",ref:o},{"tool-bar":s(()=>[m("div",null,[m("div",we,[a(J,{class:"item button",name:"back",onClick:y}),a(J,{class:"item button",name:"next",onClick:n})])])]),footer:s(()=>[m("div",De,[m("div",{class:ue(["saved-status",l.value?"save":"unsave"])},z(l.value?"\u5DF2\u4FDD\u5B58":"\u672A\u4FDD\u5B58"),3),m("div",{class:"lang",onClick:b[1]||(b[1]=()=>v.value=!0)},[a(t(le),{options:t(f),value:u.type,"onUpdate:value":[b[0]||(b[0]=E=>u.type=E),d],class:"item language",size:"tiny",style:{width:"110px"}},null,8,["options","value"])])])]),_:1},8,["language","config","theme","code"])}}});const Ne=F(Ce,[["__scopeId","data-v-99f75d7a"]]),ke={class:"static-data"},xe=x({__name:"Conetent",setup(h){const r=_({height:"300px",tabSize:4,indentWithTab:!0,autofocus:!0,disabled:!1}),e=W({id:"",title:"",code:"",type:C.Javascript}),p=_(JSON.stringify({},null,"	")),l=o=>{p.value=o},v=o=>g(this,null,function*(){e.code=o.code,e.type=o.type});Se(K.SRCIPT_KEY,o=>g(this,null,function*(){yield f(o)}));const c=_(""),u=k(()=>({code:e.code,type:e.type})),d=()=>{const o=e.code?de(e.type,e.code,["resp","options"],!1):void 0;if(o&&o.handler)try{c.value=JSON.stringify(o.handler(JSON.parse(p.value),{}),null,"	")}catch(n){c.value=n.message||n}else c.value=JSON.stringify(e.code,null,"	")},f=o=>g(this,null,function*(){try{const n=yield X(o);if(n.status===200){const y=n.data;e.id=y.id,e.title=y.name,e.code=y.code,e.type=y.type}}catch(n){console.log(n||n.message)}}),B=()=>g(this,null,function*(){try{const o=yield Z({code:e.code,name:e.title||"\u672A\u547D\u540D",type:e.type});if(o.status===201){const n=o.data;e.id=n.id,e.title=n.name,e.code=n.code,e.type=n.type,w.success("\u6570\u636E\u4FDD\u5B58\u6210\u529F")}else w.warning("\u6570\u636E\u4FDD\u5B58\u5931\u8D25")}catch(o){w.warning("\u6570\u636E\u4FDD\u5B58\u5931\u8D25")}}),A=()=>g(this,null,function*(){try{(yield ee(e.id,{code:e.code,name:e.title||"\u672A\u547D\u540D",type:e.type})).status===200?w.success("\u6570\u636E\u66F4\u65B0\u6210\u529F"):w.warning("\u6570\u636E\u66F4\u65B0\u5931\u8D25")}catch(o){w.warning("\u6570\u636E\u66F4\u65B0\u5931\u8D25")}});return(o,n)=>{const y=j("IconPark");return S(),D(t(I),null,{default:s(()=>[m("div",ke,[a(t(V),{value:e.title,"onUpdate:value":n[0]||(n[0]=i=>e.title=i),class:"title"},{prefix:s(()=>[a(y,{name:"code"})]),_:1},8,["value"]),a(t(L),null,{default:s(()=>[a(t(O),{class:"save"},{default:s(()=>[a(t(R),{onClick:d,type:"success"},{default:s(()=>[N("\u8FD0\u884C")]),_:1})]),_:1})]),_:1}),a(t(L),null,{default:s(()=>[a(t(O),{class:"save"},{default:s(()=>[a(t(R),{onClick:n[1]||(n[1]=i=>e.id?A():B())},{default:s(()=>[N("\u4FDD\u5B58")]),_:1})]),_:1})]),_:1})]),a(t(I),null,{default:s(()=>[a(t($),null,{default:s(()=>[a(t(T),{name:"\u811A\u672C"},{default:s(()=>[a(Ne,{data:t(u),class:"content","onUpdate:data":v,config:r.value},null,8,["data","config"])]),_:1}),a(t(T),{name:"\u5165\u53C2"},{default:s(()=>[a(t(P),{content:p.value,"onUpdate:content":[n[2]||(n[2]=i=>p.value=i),l],class:"content",config:r.value},null,8,["content","config"])]),_:1})]),_:1}),a(t(ce),{"title-placement":"left"},{default:s(()=>[N(" \u8F93\u51FA ")]),_:1}),a(t(P),{content:c.value,"onUpdate:content":n[3]||(n[3]=i=>c.value=i),class:"content",disable:!0,config:r.value},null,8,["content","config"])]),_:1})]),_:1})}}});const Fe=F(xe,[["__scopeId","data-v-3d7882dd"]]),Be={class:"rest-detail"},Ae=x({__name:"History",setup(h){const r=_([]),e=()=>g(this,null,function*(){try{const l=yield ae();l.status===200&&(r.value=l.data)}catch(l){console.log(l||l.message)}}),p=l=>{be.emit(K.SRCIPT_KEY,l)};return ie(()=>g(this,null,function*(){yield e()})),(l,v)=>(S(),D(t(I),{title:"\u811A\u672C",size:"small"},{default:s(()=>[a(t(V),{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u4EF6"}),a(t($),null,{default:s(()=>[a(t(T),{name:"\u811A\u672C\u5217\u8868"},{default:s(()=>[a(t(G),{"align-text":""},{default:s(()=>[(S(!0),re(pe,null,_e(r.value,c=>(S(),D(t(M),{key:c.id,class:"data-item",onClick:u=>p(c.id)},{default:s(()=>[m("div",Be,[m("div",null,[a(t(te),{type:"success",style:{"font-weight":"800"}},{default:s(()=>[N(z(c.type===t(C).Javascript?"JS":"Py"),1)]),_:2},1024),N(" "+z(c.name),1)])])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}});const Ee=F(Ae,[["__scopeId","data-v-8a7efb8f"]]),Te=x({__name:"Scripts",setup(h){const r=_(!1),e=_(0),p=_(0),l=k(()=>({width:e.value+"px",height:p.value+"px"})),v=c=>{const u=c[0],{width:d,height:f}=u.contentRect;e.value=d,p.value=f};return(c,u)=>{const d=fe("resize");return S(),D(t(H),{class:"home"},{default:s(()=>[a(t(ve),{class:"header"},{default:s(()=>[a(t(Y))]),_:1}),a(t(H),{"has-sider":"","sider-placement":"right",class:"main"},{default:s(()=>[ye((S(),D(t(ge),{class:"content"},{default:s(()=>[a(t(se),{"x-scrollable":"",style:me(t(l))},{default:s(()=>[a(Fe)]),_:1},8,["style"])]),_:1})),[[d,v]]),a(t(he),{class:"right",width:"240",collapsed:r.value,"native-scrollbar":!1,bordered:"","collapsed-width":35,"collapse-mode":"width","show-trigger":"arrow-circle",onCollapse:u[0]||(u[0]=()=>r.value=!0),onExpand:u[1]||(u[1]=()=>r.value=!1)},{default:s(()=>[a(Ee)]),_:1},8,["collapsed"])]),_:1})]),_:1})}}});const Pe=F(Te,[["__scopeId","data-v-04dfa96b"]]);export{Pe as default};
