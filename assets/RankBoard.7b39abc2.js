var V=(r,d,t)=>new Promise((_,v)=>{var e=l=>{try{i(t.next(l))}catch(u){v(u)}},b=l=>{try{i(t.throw(l))}catch(u){v(u)}},i=l=>l.done?_(l.value):Promise.resolve(l.value).then(e,b);i((t=t.apply(r,d)).next())});import{d as E,r as s,i as w,a as F,v as G,o as h,c as x,F as T,e as A,b as c,t as p,l as M,u as m,x as N,D as H,p as j,j as L,_ as P}from"./index.96806c45.js";import{u as U}from"./useProp.afe31ed3.js";import{u as q}from"./index.b881bbc4.js";const J=r=>(j("data-v-c9729a4b"),r=r(),L(),r),K={class:"ranking-info"},O={class:"rank"},Q={class:"info-name"},W={class:"ranking-value"},X={class:"ranking-column"},Y=J(()=>c("div",{class:"shine"},null,-1)),Z=[Y],aa=E({__name:"RankBoard",props:{component:null},setup(r){const d=r;N(o=>({"600a92ed":l.value,"541c078c":C.value,"562d5f8c":u.value,"3249532f":k.value,c9666610:S.value,ddb8951c:B.value,"2b66acbd":i.value,"2dadb5b2":m(I),"098270ad":D.value,"9590b14a":$.value,b045eb2a:f.value}));const t=s([]),_=(o,n)=>{n===H.STATIC?t.value=o:n===H.REST&&(t.value=o.afterData),y(t.value)};q(d.component,_);const v=(o,n,a)=>{if(o==="bar")switch(n){case"barHeight":i.value=`${a}px`;break;case"borderRadius":$.value=`${a}px`;break;case"color1":f.value=a;break;case"color2":g.value=a;break}else if(o==="line")switch(n){case"lineHeight":S.value=`${a}px`;break;case"borderGap":D.value=`${a}px`;break;case"lineColor":B.value=a;break}else if(o==="text")switch(n){case"fontSize":l.value=`${a}px`;break;case"labelColor":u.value=a;break;case"valueColor":k.value=a;break;case"rankColor":C.value=a;break}o==="data"&&n==="unit"&&(b.value=a)},{propValue:e}=U(d.component,v),b=s(e.data.unit),i=s(`${e.bar.barHeight}px`),l=s(`${e.text.fontSize}px`),u=s(e.text.labelColor||"#fff"),k=s(e.text.valueColor||"#fff"),C=s(e.text.rankColor||"#fff"),f=s(e.bar.color1||"#3DE7C9"),g=s(e.bar.color2||"#00BAFF"),$=s(`${e.bar.borderRadius}px`),S=s(`${e.line.lineHeight}px`),D=s(`${e.line.borderGap}px`),B=s(e.line.lineColor||"#3DE7C9"),I=w(()=>`linear-gradient(to right, ${f.value}, ${g.value})`),R=w(()=>e.data.maxValue?e.data.maxValue:Math.max(...t.value.map(o=>o.value))),y=o=>{o.sort((n,a)=>a.value-n.value),t.value=o};return F(()=>V(this,null,function*(){})),G(()=>{}),(o,n)=>(h(),x("div",{class:"dv-scroll-ranking-board",ref:s},[(h(!0),x(T,null,A(t.value,(a,z)=>(h(),x("div",{class:"row-item",key:a.label},[c("div",K,[c("div",O,"No."+p(z+1),1),c("div",Q,p(a.label),1),c("div",W,p(a.value)+" "+p(b.value),1)]),c("div",X,[c("div",{class:"inside-column",style:M({width:`${m(R)?a.value*100/m(R):100}%`})},Z,4)])]))),128))]))}});const la=P(aa,[["__scopeId","data-v-c9729a4b"]]);export{la as default};
