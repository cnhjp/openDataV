import{u as f}from"./useProp.afe31ed3.js";import{d as b,r as u,w as $,o as r,c as d,b as l,f as m,_ as g}from"./index.394616ab.js";const p={class:"dv-decoration-10"},y=["width","height"],k=["stroke","points"],z=["stroke","points","stroke-dasharray"],N=["values","begin"],x=["values","begin"],w=["stroke","points","stroke-dasharray"],D=["values","begin"],B=["values","begin"],C=["stroke","points","stroke-dasharray"],V=["values","begin"],E=["values","begin"],H=["cy","fill"],I=["values","begin"],P=["cx","cy","fill"],R=["values","begin"],j=["values","begin"],q=["cx","cy","fill"],A=["values","begin"],F=["values","begin"],G=["cx","cy","fill"],J=["values","begin"],K=["values","begin"],L=b({__name:"Decoration",props:{component:null},setup(v){const c=v,_=(s,n,i)=>{s==="base"&&n==="color1"&&(a.value[0]=i),s==="base"&&n==="color2"&&(a.value[1]=i)},{propValue:o}=f(c.component,_),e=u(300),t=u(35),h=s=>{const i=s[0].contentRect;e.value=i.width,t.value=i.height},a=u([o.base.color1,o.base.color2]);return(s,n)=>{const i=m("resize");return $((r(),d("div",p,[(r(),d("svg",{width:e.value,height:t.value},[l("polyline",{stroke:a.value[1],"stroke-width":"2",points:`0, ${t.value/2} ${e.value}, ${t.value/2}`},null,8,k),l("polyline",{stroke:a.value[0],"stroke-width":"2",points:`5, ${t.value/2} ${e.value*.2-3}, ${t.value/2}`,"stroke-dasharray":`0, ${e.value*.2}`,fill:"freeze"},[l("animate",{id:"d10ani2",attributeName:"stroke-dasharray",values:`0, ${e.value*.2};${e.value*.2}, 0;`,dur:"3s",begin:"d10ani1.end",fill:"freeze"},null,8,N),l("animate",{attributeName:"stroke-dasharray",values:`${e.value*.2}, 0;0, ${e.value*.2}`,dur:"0.01s",begin:"d10ani7.end",fill:"freeze"},null,8,x)],8,z),l("polyline",{stroke:a.value[0],"stroke-width":"2",points:`${e.value*.2+3}, ${t.value/2} ${e.value*.8-3}, ${t.value/2}`,"stroke-dasharray":`0, ${e.value*.6}`},[l("animate",{id:"d10ani4",attributeName:"stroke-dasharray",values:`0, ${e.value*.6};${e.value*.6}, 0`,dur:"3s",begin:"d10ani3.end + 1s",fill:"freeze"},null,8,D),l("animate",{attributeName:"stroke-dasharray",values:`${e.value*.6}, 0;0, ${e.value*.6}`,dur:"0.01s",begin:"d10ani7.end",fill:"freeze"},null,8,B)],8,w),l("polyline",{stroke:a.value[0],"stroke-width":"2",points:`${e.value*.8+3}, ${t.value/2} ${e.value-5}, ${t.value/2}`,"stroke-dasharray":`0, ${e.value*.2}`},[l("animate",{id:"d10ani6",attributeName:"stroke-dasharray",values:`0, ${e.value*.2};${e.value*.2}, 0`,dur:"3s",begin:"d10ani5.end + 1s",fill:"freeze"},null,8,V),l("animate",{attributeName:"stroke-dasharray",values:`${e.value*.2}, 0;0, ${e.value*.3}`,dur:"0.01s",begin:"d10ani7.end",fill:"freeze"},null,8,E)],8,C),l("circle",{cx:"2",cy:t.value/2,r:"2",fill:a.value[1]},[l("animate",{id:"d10ani1",attributeName:"fill",values:`${a.value[1]};${a.value[0]}`,begin:"0s;d10ani7.end",dur:"0.3s",fill:"freeze"},null,8,I)],8,H),l("circle",{cx:e.value*.2,cy:t.value/2,r:"2",fill:a.value[1]},[l("animate",{id:"d10ani3",attributeName:"fill",values:`${a.value[1]};${a.value[0]}`,begin:"d10ani2.end",dur:"0.3s",fill:"freeze"},null,8,R),l("animate",{attributeName:"fill",values:`${a.value[1]};${a.value[1]}`,dur:"0.01s",begin:"d10ani7.end",fill:"freeze"},null,8,j)],8,P),l("circle",{cx:e.value*.8,cy:t.value/2,r:"2",fill:a.value[1]},[l("animate",{id:"d10ani5",attributeName:"fill",values:`${a.value[1]};${a.value[0]}`,begin:"d10ani4.end",dur:"0.3s",fill:"freeze"},null,8,A),l("animate",{attributeName:"fill",values:`${a.value[1]};${a.value[1]}`,dur:"0.01s",begin:"d10ani7.end",fill:"freeze"},null,8,F)],8,q),l("circle",{cx:e.value-2,cy:t.value/2,r:"2",fill:a.value[1]},[l("animate",{id:"d10ani7",attributeName:"fill",values:`${a.value[1]};${a.value[0]}`,begin:"d10ani6.end",dur:"0.3s",fill:"freeze"},null,8,J),l("animate",{attributeName:"fill",values:`${a.value[1]};${a.value[1]}`,dur:"0.01s",begin:"d10ani7.end",fill:"freeze"},null,8,K)],8,G)],8,y))])),[[i,h]])}}});const Q=g(L,[["__scopeId","data-v-07792d58"]]);export{Q as default};
