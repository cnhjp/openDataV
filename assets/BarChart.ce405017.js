import{r as c,h as u}from"./echarts.4f9736bc.js";import{b as m}from"./@vueuse.fe63d129.js";import{t as f}from"./mydark.8efe4250.js";import{p as d,r as h,q as x,w as y,o as b,y as g,x as j}from"./@vue.7df1a0ef.js";import"./zrender.706c9170.js";import"./tslib.34a40861.js";const z=d({props:{element:null,propValue:null},setup(l){const n=l;c("mydark",f);const a=h(null);let e=null;x(()=>{p()}),m(a,t=>{const r=t[0],{width:s,height:o}=r.contentRect;e==null||e.resize({width:s,height:o})});function i(){let t=n.propValue,r={title:{text:t.title,subtext:t.subTitle,left:"center"},tooltip:{trigger:"item"},xAxis:{type:"category",data:JSON.parse(t.xAxis)},yAxis:{type:"value"},series:[]},s=JSON.parse(t.series).map(o=>({data:o,type:"bar"}));return r.series=s,r}const p=()=>{e=u(a.value,"mydark"),e.clear(),e.setOption(i())};return y(()=>n.propValue,(t,r)=>{console.log(t),e&&(e.clear(),e.setOption(i()))},{deep:!0}),b(()=>{e&&(e.clear(),e.dispose())}),(t,r)=>(j(),g("div",{ref:(s,o)=>{o.chartEl=s,a.value=s}},null,512))}});export{z as default};