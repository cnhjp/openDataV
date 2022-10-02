import{d as _,o as n,c as m,X as o,u as e,$ as I,b as h,t as C,_ as b,i as S,a1 as T,a2 as z,q as L,a3 as D,a4 as O,a5 as E,a6 as A,B as d,H as r,a7 as F,a8 as V,a9 as j,m as H,F as k,aa as W,n as q,ab as G,ac as P,e as N,ad as Q,ae as J,af as M,r as g,f as X,ag as K,ah as R,ai as B,w as U,aj as Y,l as Z}from"./index.96806c45.js";import{R as ee,N as te}from"./Rest.891138d7.js";const ae={class:"sider-bar-item"},oe={class:"label"},ne=_({__name:"TypeItem",props:{icon:null,label:null},setup(t){return(a,s)=>(n(),m("div",ae,[o(e(I),{name:t.icon,class:"icon"},null,8,["name"]),h("span",oe,C(t.label),1)]))}});const se=b(ne,[["__scopeId","data-v-5e662d36"]]),le={class:"main"},ce=_({__name:"ApiType",setup(t){const a=[{label:"REST",icon:"api",key:"REST"},{label:"GraphQL",icon:"earth",key:"GraphQL"},{label:"\u5B9E\u65F6",icon:"transform",key:"RealTime"}],s=S(()=>{const u=[];return a.forEach(c=>{u.push({key:c.key,icon:()=>T(se,{icon:c.icon,label:c.label})})}),u});return(u,c)=>(n(),m("div",le,[o(e(z),{options:e(s),class:"sider-bar-item",collapsed:!1,"icon-size":30},null,8,["options"])]))}});const ie=b(ce,[["__scopeId","data-v-63a45971"]]),y=L(),w=D(),re=t=>{const a=`${y.name}`||"OpenDataV";O(`${a}.json`,JSON.stringify({id:t,name:a,canvasData:y.layoutData,canvasStyle:y.canvasStyleData}))},ue=()=>{E(de,".json")},de=t=>{if(t.target&&t.target.result){const a=JSON.parse(t.target.result);a&&(y.setComponentData(a.canvasData),y.setCanvasStyle(a.canvasStyle))}},_e=()=>{w.setNavTheme(w.darkTheme?"dark":"light"),w.setDarkTheme(!w.darkTheme)},pe=_({__name:"ThemeIcon",setup(t){const a=D(),s=S(()=>a.darkTheme?"sun-one":"moon");return(u,c)=>{const v=A("icon-park");return n(),d(v,{name:e(s),size:"24"},null,8,["name"])}}}),$=_({__name:"ToolBarItem",props:{label:null,action:null,disable:{type:Function,default:()=>!1},icon:null,divider:{type:[Boolean,null]},children:null,otherShow:null,isButton:{type:Boolean,default:!0}},setup(t){const a=t,s=S(()=>typeof a.icon=="string"?T(I,{name:a.icon,size:"24"}):a.icon());return(u,c)=>(n(),m(k,null,[o(e(V),null,{trigger:r(()=>[t.isButton?(n(),d(e(F),{key:0,quaternary:"",size:"small",onClick:t.action,title:t.label},{default:r(()=>[o(e(s))]),_:1},8,["onClick","title"])):(n(),d(e(s),{key:1,class:"bar",onClick:t.action},null,8,["onClick"]))]),default:r(()=>[h("span",null,C(t.label),1)]),_:1}),t.divider?(n(),d(e(j),{key:0,vertical:""})):H("",!0)],64))}}),me={class:"logo"},he=["src"],ve=_({__name:"LogoView",setup(t){return(a,s)=>(n(),m("div",me,[h("img",{src:e(W),alt:"",class:q({"mr-2":!0})},null,8,he)]))}});const fe=b(ve,[["__scopeId","data-v-05df8a46"]]),ye={class:"tool-bar"},be={class:"tool-bar-item"},ge={class:"tool-bar-title"},we={class:"tool-bar-item"},Te=_({__name:"Toolbar",setup(t){const a=L(),s=G(),u=P(),c=[{label:"\u9996\u9875",action:p=>{s.push({name:"Pages"})},icon:()=>T(fe),divider:!0,location:"left",isButton:!1},{label:"\u5BFC\u5165",action:ue,icon:"upload-one",location:"right"},{label:"\u5BFC\u51FA",action:()=>re(u.params.index||""),icon:"download-one",location:"right"},{label:"\u4E3B\u9898",action:_e,icon:()=>T(pe),location:"right"}],v=c.filter(p=>p.location==="left"),x=c.filter(p=>p.location==="right");return(p,i)=>(n(),m("div",ye,[h("div",be,[(n(!0),m(k,null,N(e(v),(l,f)=>(n(),d($,{key:f,action:l.action,label:l.label,divider:l.divider,icon:l.icon,"is-button":l.isButton===void 0},null,8,["action","label","divider","icon","is-button"]))),128))]),h("div",ge,C(e(a).name),1),h("div",we,[(n(!0),m(k,null,N(e(x),(l,f)=>(n(),d($,{key:f,action:l.action,label:l.label,divider:l.divider,icon:l.icon},null,8,["action","label","divider","icon"]))),128))])]))}});const ke=b(Te,[["__scopeId","data-v-b0ed038a"]]),Se=_({__name:"GraphQL",setup(t){return(a,s)=>(n(),d(e(M),null,{default:r(()=>[h("div",null,[o(e(Q)),o(e(J))])]),_:1}))}}),xe=_({props:{active:{type:String,default:"REST"}},setup(t){return()=>o(k,null,[t.active=="REST"?o(ee,null,null):o(Se,null,null)])}}),Be=_({__name:"OpenApi",setup(t){const a=g(!0),s=g(!1),u=g(0),c=g(0),v=S(()=>({width:u.value+"px",height:c.value+"px"})),x=p=>{const i=p[0],{width:l,height:f}=i.contentRect;u.value=l,c.value=f};return(p,i)=>{const l=X("resize");return n(),d(e(B),{class:"home"},{default:r(()=>[o(e(K),{class:"header"},{default:r(()=>[o(e(ke))]),_:1}),o(e(B),{"has-sider":"",class:"main"},{default:r(()=>[o(e(R),{class:"left",width:400,collapsed:a.value,"native-scrollbar":!1,"collapsed-width":80,bordered:"","collapse-mode":"width","show-trigger":"",onCollapse:i[0]||(i[0]=()=>a.value=!0),onExpand:i[1]||(i[1]=()=>a.value=!1)},{default:r(()=>[o(e(ie))]),_:1},8,["collapsed"]),o(e(B),{"has-sider":"","sider-placement":"right"},{default:r(()=>[U((n(),d(e(Y),{class:"content"},{default:r(()=>[o(e(te),{"x-scrollable":"",style:Z(e(v))},{default:r(()=>[o(e(xe))]),_:1},8,["style"])]),_:1})),[[l,x]]),o(e(R),{class:"right",width:"240",collapsed:s.value,"native-scrollbar":!1,bordered:"","collapsed-width":35,"collapse-mode":"width","show-trigger":"arrow-circle",onCollapse:i[2]||(i[2]=()=>s.value=!0),onExpand:i[3]||(i[3]=()=>s.value=!1)},null,8,["collapsed"])]),_:1})]),_:1})]),_:1})}}});const Re=b(Be,[["__scopeId","data-v-f9a943c5"]]);export{Re as default};
