var d=Object.defineProperty,l=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var u=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,r=(s,e)=>{for(var t in e||(e={}))f.call(e,t)&&u(s,t,e[t]);if(c)for(var t of c(e))q.call(e,t)&&u(s,t,e[t]);return s},n=(s,e)=>l(s,m(e));var h=(s,e,t)=>(u(s,typeof e!="symbol"?e+"":e,t),t);import{a as k}from"./axios.744bc20e.js";import{C as x,a as H,u as P}from"./index.2ad55fca.js";const i={baseURL:"http://localhost:13000",timeout:1e4,headers:{"Content-Type":x.JSON}};function T(s){if(!s)return i;const{headers:e}=s;return e&&typeof e=="object"&&(i.headers=r(r({},i.headers),e)),r(r({},S(s,"headers")),i)}function S(s,e){return Object.keys(s).filter(t=>!e.includes(t)).reduce((t,o)=>(t[o]=s[o],t),{})}class p{constructor(e=!1){h(this,"axiosInstance");h(this,"isBlock",!1);this.axiosInstance=k.create(T()),this.httpHookRequest(),this.httpHookResponse(),this.isBlock=e}httpHookRequest(){this.axiosInstance.interceptors.request.use(e=>{const o=H().userToken;o&&e.headers&&(e.headers.authorization=o);const a=P();return this.isBlock&&a.isEditMode?Promise.reject("http is disable where the mode is edit"):e},e=>Promise.reject(e))}httpHookResponse(){this.axiosInstance.interceptors.response.use(e=>e.data,e=>{const{response:t}=e;return t&&this.errorHandler(t.status,t.data.message),Promise.reject(e)})}errorHandler(e,t){console.log(e,t)}get(e){return this.request(n(r({},e),{method:"GET"}))}post(e){return this.request(n(r({},e),{method:"POST"}))}put(e){return this.request(n(r({},e),{method:"PUT"}))}patch(e){return this.request(n(r({},e),{method:"PATCH"}))}delete(e){return this.request(n(r({},e),{method:"DELETE"}))}request(e){return new Promise((t,o)=>{this.axiosInstance.request(e).then(a=>{t(a)}).catch(a=>{o(a)})})}}const j=new p(!0),I=new p(!1);export{I as a,j as h};
