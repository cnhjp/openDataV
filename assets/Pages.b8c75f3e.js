var w=(e,i,s)=>new Promise((l,p)=>{var h=o=>{try{g(s.next(o))}catch(m){p(m)}},_=o=>{try{g(s.throw(o))}catch(m){p(m)}},g=o=>o.done?l(o.value):Promise.resolve(o.value).then(h,_);g((s=s.apply(e,i)).next())});import{a as q,d as z}from"./pages.92e251eb.js";import{ap as H,at as U,aq as N,d as $,au as X,av as A,cB as Q,r as C,i as O,a3 as R,ba as M,aj as Y,aY as G,a as J,Q as P,o as T,c as S,v as f,z as u,u as d,b0 as B,V as j,a4 as D,F as K,f as W,y as Z,t as ee,b as E,X as I,cC as te,p as ae,j as ne,_ as se}from"./index.e53ce348.js";const ie=H("ellipsis",{overflow:"hidden"},[U("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),N("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),N("cursor-pointer",`
 cursor: pointer;
 `)]);function F(e){return`${e}-ellipsis--line-clamp`}function V(e,i){return`${e}-ellipsis--cursor-${i}`}const le=Object.assign(Object.assign({},A.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),oe=$({name:"Ellipsis",inheritAttrs:!1,props:le,setup(e,{slots:i,attrs:s}){const{mergedClsPrefixRef:l}=X(e),p=A("Ellipsis","-ellipsis",ie,Q,e,l),h=C(null),_=C(null),g=C(null),o=C(!1),m=O(()=>{const{lineClamp:t}=e,{value:n}=o;return t!==void 0?{textOverflow:"","-webkit-line-clamp":n?"":t}:{textOverflow:n?"":"ellipsis","-webkit-line-clamp":""}});function x(){let t=!1;const{value:n}=o;if(n)return!0;const{value:c}=h;if(c){const{lineClamp:y}=e;if(b(c),y!==void 0)t=c.scrollHeight<=c.offsetHeight;else{const{value:L}=_;L&&(t=L.getBoundingClientRect().width<=c.getBoundingClientRect().width)}r(c,t)}return t}const k=O(()=>e.expandTrigger==="click"?()=>{var t;const{value:n}=o;n&&((t=g.value)===null||t===void 0||t.setShow(!1)),o.value=!n}:void 0),a=()=>R("span",Object.assign({},Y(s,{class:[`${l.value}-ellipsis`,e.lineClamp!==void 0?F(l.value):void 0,e.expandTrigger==="click"?V(l.value,"pointer"):void 0],style:m.value}),{ref:"triggerRef",onClick:k.value,onMouseenter:e.expandTrigger==="click"?x:void 0}),e.lineClamp?i:R("span",{ref:"triggerInnerRef"},i));function b(t){if(!t)return;const n=m.value,c=F(l.value);e.lineClamp!==void 0?v(t,c,"add"):v(t,c,"remove");for(const y in n)t.style[y]!==n[y]&&(t.style[y]=n[y])}function r(t,n){const c=V(l.value,"pointer");e.expandTrigger==="click"&&!n?v(t,c,"add"):v(t,c,"remove")}function v(t,n,c){c==="add"?t.classList.contains(n)||t.classList.add(n):t.classList.contains(n)&&t.classList.remove(n)}return{mergedTheme:p,triggerRef:h,triggerInnerRef:_,tooltipRef:g,handleClick:k,renderTrigger:a,getTooltipDisabled:x}},render(){var e;const{tooltip:i,renderTrigger:s,$slots:l}=this;if(i){const{mergedTheme:p}=this;return R(M,Object.assign({ref:"tooltipRef",placement:"top"},i,{getDisabled:this.getTooltipDisabled,theme:p.peers.Tooltip,themeOverrides:p.peerOverrides.Tooltip}),{trigger:s,default:(e=l.tooltip)!==null&&e!==void 0?e:l.default})}else return s()}}),re=""+new URL("default.5fefac84.png",import.meta.url).href,ce=e=>(ae("data-v-8e5cce91"),e=e(),ne(),e),ue={class:"page-list"},de=["src","onClick"],pe={class:"options"},fe=ce(()=>E("span",null,"\u7F16\u8F91",-1)),ge=$({__name:"Pages",setup(e){const i=G(),s=C(!1),l=C([]),p=[{key:"preview",label:"\u9884\u89C8",icon:h("previewOpen")},{key:"delete",label:"\u5220\u9664",icon:h("delete")}];J(()=>w(this,null,function*(){yield _()}));function h(a){return()=>R(I,{name:a})}const _=()=>w(this,null,function*(){try{const a=yield q();a.data&&(l.value=a.data)}catch(a){P.error("\u9875\u9762\u6570\u636E\u8BF7\u6C42\u5F02\u5E38")}}),g=(a,b)=>w(this,null,function*(){if(a==="preview")yield i.push({name:"PageView",params:{index:b.id}});else if(a==="delete")try{yield z(b.id),yield _()}catch(r){console.log((r==null?void 0:r.message)||r),P.error("\u5220\u9664\u5931\u8D25")}}),o=()=>w(this,null,function*(){if(s.value)return!1;s.value=!0,yield i.push({name:"Create"})}),m=a=>w(this,null,function*(){if(s.value)return!1;s.value=!0,yield i.push({name:"Editor",params:{index:a.id}})}),x=a=>w(this,null,function*(){yield i.push({name:"PageView",params:{index:a.id}})}),k=a=>a||re;return(a,b)=>(T(),S("div",ue,[f(d(D),null,{default:u(()=>[f(d(B),{type:"primary",loading:s.value,onClick:o},{default:u(()=>[j(" \u65B0\u5EFA ")]),_:1},8,["loading"])]),_:1}),(T(!0),S(K,null,W(l.value,r=>(T(),S("div",{key:r.id,class:"card"},[(T(),Z(d(D),{key:r.id,hoverable:""},{header:u(()=>[f(d(oe),{style:{"max-width":"8rem","font-size":"1rem"}},{default:u(()=>[j(ee(r.name),1)]),_:2},1024)]),cover:u(()=>[E("img",{src:k(r.thumbnail),class:"thumbnail-image",alt:"",onClick:v=>x(r)},null,8,de)]),action:u(()=>[E("div",pe,[f(d(M),{trigger:"hover"},{trigger:u(()=>[f(d(B),{quaternary:"",onClick:v=>m(r)},{icon:u(()=>[f(d(I),{name:"edit"})]),_:2},1032,["onClick"])]),default:u(()=>[fe]),_:2},1024),f(d(te),{trigger:"hover",options:p,"show-arrow":!0,onSelect:v=>g(v,r)},{default:u(()=>[f(d(B),{quaternary:""},{icon:u(()=>[f(d(I),{name:"setting"})]),_:1})]),_:2},1032,["onSelect"])])]),_:2},1024))]))),128))]))}});const _e=se(ge,[["__scopeId","data-v-8e5cce91"]]);export{_e as default};
