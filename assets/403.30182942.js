var r=(a,t,o)=>new Promise((c,s)=>{var p=e=>{try{_(o.next(e))}catch(n){s(n)}},m=e=>{try{_(o.throw(e))}catch(n){s(n)}},_=e=>e.done?c(e.value):Promise.resolve(e.value).then(p,m);_((o=o.apply(a,t)).next())});import{d as u,aY as i,o as l,c as f,b as d,_ as v}from"./index.e53ce348.js";const h=""+new URL("../errors/403.png",import.meta.url).href,x={class:"notfound"},g=u({__name:"403",setup(a){const t=i(),o=()=>r(this,null,function*(){yield t.push({name:"Home"})});return(c,s)=>(l(),f("div",x,[d("div",null,[d("img",{src:h,alt:"",onClick:o})])]))}});const B=v(g,[["__scopeId","data-v-9dfde920"]]);export{B as default};
