var v=(f,h,c)=>new Promise((p,a)=>{var r=e=>{try{n(c.next(e))}catch(l){a(l)}},d=e=>{try{n(c.throw(e))}catch(l){a(l)}},n=e=>e.done?p(e.value):Promise.resolve(e.value).then(r,d);n((c=c.apply(f,h)).next())});import{d as N,m as $,r as u,a as C,$ as T,e as B,w as M,o as _,c as m,s as V,b as o,F as z,f as D,t as k,_ as S}from"./index.642367b9.js";import{u as E}from"./index.f9a5bc2d.js";import{u as F}from"./useEventBus.f9618377.js";const G={class:"dv-decoration-9"},I=["stroke"],R=["dur"],A=["stroke"],H=["dur"],L=["stroke"],O=["xlink:href","stroke","fill"],P=["dur","begin"],W=["stroke"],j=N({__name:"Gauge",props:{component:null},setup(f){const h=f,c=$(),p=(t,s,i)=>{t==="attr"&&s==="color1"&&(r.value[0]=i),t==="attr"&&s==="color2"&&(r.value[1]=i),t==="attr"&&s==="unit"&&(g.value=i)},{propValue:a}=E(h.component,p),r=u([a.attr.color1,a.attr.color2]),d="decoration-9-polygon",n=u(3),e=u(0),l=u([1,1]),g=u(a.attr.unit||""),w=t=>{const s=t.contentRect,i=Math.min(s.width/100,s.height/100);l.value=[i,i]},x=t=>{const s=t;a.data.datatag&&s.TagName===a.data.datatag&&(e.value=Number(s.TagValue))};C(()=>v(this,null,function*(){yield b()}));const b=()=>v(this,null,function*(){if(a.data.history)try{const t=yield T.post({url:a.data.history,data:[a.data.datatag]});t.status===200&&(e.value=Number(t.data.TagValue))}catch(t){console.log(t.message||t)}c.isEditMode&&(e.value=Number((Math.random()*100).toFixed(2)))});return F("actual",x),(t,s)=>{const i=B("resize");return M((_(),m("div",G,[(_(),m("svg",{width:"100",height:"100",style:V(`transform: scale(${l.value[0]}, ${l.value[1]})`)},[o("defs",null,[o("polygon",{id:d,points:"15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5"})]),o("circle",{cx:"50",cy:"50",r:"45",fill:"transparent",stroke:r.value[1],"stroke-width":"10","stroke-dasharray":"80, 100, 30, 100"},[o("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",dur:`${n.value}s`,repeatCount:"indefinite"},null,8,R)],8,I),o("circle",{cx:"50",cy:"50",r:"45",fill:"transparent",stroke:r.value[0],"stroke-width":"6","stroke-dasharray":"50, 66, 100, 66"},[o("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;-360 50 50",dur:`${n.value}s`,repeatCount:"indefinite"},null,8,H)],8,A),o("circle",{cx:"50",cy:"50",r:"38",fill:"transparent",stroke:r.value[1],"stroke-width":"1","stroke-dasharray":"5, 1"},null,8,L),(_(!0),m(z,null,D(new Array(20).fill(0),(q,y)=>(_(),m("use",{key:y,"xlink:href":`#${d}`,stroke:r.value[1],fill:Math.random()>.4?"transparent":r.value[0]},[o("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",dur:`${n.value}s`,begin:`${y*n.value/20}s`,repeatCount:"indefinite"},null,8,P)],8,O))),128)),o("circle",{cx:"50",cy:"50",r:"26",fill:"transparent",stroke:r.value[1],"stroke-width":"1","stroke-dasharray":"5, 1"},null,8,W)],4)),o("div",null,k(e.value)+k(g.value),1)])),[[i,w]])}}});const X=S(j,[["__scopeId","data-v-c0614a3a"]]);export{X as default};