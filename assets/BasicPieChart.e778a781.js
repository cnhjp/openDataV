var m=(p,l,a)=>new Promise((o,n)=>{var c=e=>{try{i(a.next(e))}catch(s){n(s)}},u=e=>{try{i(a.throw(e))}catch(s){n(s)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(c,u);i((a=a.apply(p,l)).next())});import{h as v}from"./index.21190770.js";import{d as _,r as S,q as y,a as C,w as L,u as E,o as z,c as B,f as D}from"./index.596f2ec8.js";import{u as O}from"./useProp.afe31ed3.js";import{c as x}from"./utils.fc532f69.js";import{u as M}from"./hooks.d71204e8.js";import"./theme.31b3b9c9.js";const H=_({__name:"BasicPieChart",props:{component:null},setup(p){const l=p,a=S(null);let o;const n=y(),{updateEchart:c,resizeHandler:u}=M(a),i=()=>{s()},{propValue:e}=O(l.component,i);C(()=>m(this,null,function*(){o=h(),g(),yield s()}));const s=()=>m(this,null,function*(){try{const t=yield v.get({url:e.data.url});if(t.status===200){const r=e.data.upperLimit,d=e.data.lowerLimit,w=t.data.map(f=>({value:x(Number(f.value),r,d),label:f.label}));b(w)}}catch(t){console.log((t==null?void 0:t.message)||t),n.isEditMode&&b(l.component.exampleData)}}),h=()=>{const t={grid:{top:"10%",left:"3%",right:"4%",bottom:"0%",containLabel:!0},tooltip:{trigger:"item"},legend:{show:e.legend.isShow,top:"5%",left:"center"},series:[]};let r=[{type:"pie",radius:[`${e.series.radiusMin||0}%`,`${e.series.radiusMax||100}%`],avoidLabelOverlap:!0,itemStyle:{borderRadius:e.series.borderRadius,borderColor:"transparent",borderWidth:100},label:{show:!1,position:"center",color:e.label.labelColor},emphasis:{label:{show:e.label.isShow,fontSize:e.label.labelSize,fontWeight:e.label.labelWeight},itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},labelLine:{show:!1},data:[]}];return t.series=r,t},b=t=>{o=h(),o.series[0].data=t.map(r=>({value:r.value,name:r.label})),c(o)},g=()=>{c(o)};return(t,r)=>{const d=D("resize");return L((z(),B("div",{ref_key:"chartEl",ref:a},null,512)),[[d,E(u)]])}}});export{H as default};
