var o=(a,i,t)=>new Promise((r,s)=>{var g=e=>{try{f(t.next(e))}catch(C){s(C)}},n=e=>{try{f(t.throw(e))}catch(C){s(C)}},f=e=>e.done?r(e.value):Promise.resolve(e.value).then(g,n);f((t=t.apply(a,i)).next())});import{a as u,v as d,D as l}from"./index.96806c45.js";const p=(a,i)=>{var s;a.changeDataCallback(i);let t=0;const r=()=>o(void 0,null,function*(){var n,f;if(((n=a.dataConfig)==null?void 0:n.requestConfig)&&i){const e=yield(f=a.dataConfig)==null?void 0:f.requestConfig.getRespData({propvalue:a.propValue});i&&i(e,a.dataConfig.type)}});if(u(()=>o(void 0,null,function*(){yield r()})),d(()=>{t&&clearInterval(t)}),i&&a.dataConfig&&((s=a.dataConfig)==null?void 0:s.type)===l.REST&&a.dataConfig.otherConfig.isRepeat){t&&clearInterval(t);const g=a.dataConfig;t=setInterval(r,g.otherConfig.interval||300)}};export{p as u};
