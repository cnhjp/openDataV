var vt=Object.defineProperty;var U=Object.getOwnPropertySymbols;var wt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable;var V=(t,n,e)=>n in t?vt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,R=(t,n)=>{for(var e in n||(n={}))wt.call(n,e)&&V(t,e,n[e]);if(U)for(var e of U(n))_t.call(n,e)&&V(t,e,n[e]);return t};import{K as St,q as j,L as tt,M as $,N as bt,O as Dt,P as I,Q as et,R as Q,S as nt,T as zt,h as Et,U as p,d as Lt,i as H,r as P,V as Pt,a as kt,W as Mt,w as T,X as A,Y as Z,Z as X,$ as Rt,z as O,F as It,a0 as N,f as At}from"./index.96806c45.js";import{e as Yt}from"./useEventBus.1841945c.js";const Tt=(t,n)=>{const e=[],s=new Set,i=new Set,d=new Set,u=new Set;if(n.forEach(f=>{const{width:l,height:r,left:a,top:h,rotate:y}=f.style,m=St({width:l,height:r,left:a,top:h,rotate:y});m.left>=t.left&&m.right<=t.right&&m.top>=t.top&&m.bottom<=t.bottom&&(e.push(f),s.add(m.left),i.add(m.top),d.add(m.right),u.add(m.bottom))}),e.length>0){const f=Math.min(...s),l=Math.max(...d),r=Math.min(...i),a=Math.max(...u);return{components:e,rect:{left:f,right:l,top:r,bottom:a}}}},x=j(),Xt=tt({id:"compose",state:()=>({style:{top:0,left:0,width:0,height:0},components:[],ids:new Set}),getters:{canCompose(){return this.components.length>1},hidden(){return this.style.width>0}},actions:{isActived(t){return this.components.findIndex(n=>n.id===t.id)!==-1},setSelectComponents(t){const n=Tt(t,x.componentData);if(n){const{components:e,rect:s}=n;this.style.left=s.left,this.style.top=s.top,this.style.width=s.right-s.left,this.style.height=s.bottom-s.top,this.components=e||[],this.ids.clear(),this.components.forEach(i=>this.ids.add(i.id))}else this.setHidden()},appendComponent(t){!t||this.ids.has(t.id)||(this.components.push(t),this.ids.add(t.id),this.components.length>1&&(this.style=R(R({},this.style),$(this.components))))},setHidden(){this.style={left:0,top:0,width:0,height:0},this.components=[],this.ids.clear()},setPostion(t){t.left&&(this.style.left=t.left),t.top&&(this.style.top=t.top),t.width&&(this.style.width=t.width),t.height&&(this.style.height=t.height)},compose(){this.style.width===0&&(this.style=R(R({},this.style),$(this.components)));const t=bt.Group,n=new t;for(const s in this.style)n.change(s,this.style[s]);n.addComponent(this.components,!0),Dt(n),this.batchDeleteComponent(this.components),x.appendComponent(n);const e=x.componentData.length-1;x.setCurComponent(x.componentData[e],e.toString()),this.components=[]},batchDeleteComponent(t){t.forEach(n=>{for(let e=0,s=x.componentData.length;e<s;e++)if(n.id===x.componentData[e].id){x.componentData.splice(e,1);break}}),this.ids.clear()},flushRight(){const{right:t,items:n}=I(this.components);n.forEach(e=>{const s=t-e.right;e.component.change("left",e.component.positionStyle.left+s)}),x.saveComponentData()},flushLeft(){const{left:t,items:n}=I(this.components);n.forEach(e=>{const s=e.left-t;e.component.change("left",e.component.positionStyle.left-s)}),x.saveComponentData()},flushTop(){const{top:t,items:n}=I(this.components);n.forEach(e=>{const s=e.top-t;e.component.change("top",e.component.positionStyle.top-s)}),x.saveComponentData()},flushBottom(){const{bottom:t,items:n}=I(this.components);n.forEach(e=>{const s=t-e.bottom;e.component.change("top",e.component.positionStyle.top+s)}),x.saveComponentData()},flushRow(){const{top:t,bottom:n,items:e}=I(this.components);e.forEach(s=>{const i=(n+t)/2-s.center.y;s.component.change("top",s.component.positionStyle.top+i)}),x.saveComponentData()},flushColumn(){const{left:t,right:n,items:e}=I(this.components);e.forEach(s=>{const i=(t+n)/2-s.center.x;s.component.change("left",s.component.positionStyle.left+i)}),x.saveComponentData()}}}),Bt=()=>Xt(et),Wt=tt({id:"copy",state:()=>({copyData:void 0,isCut:!1}),actions:{copy(t){this.copyData=Q(t),this.copyData.parent=void 0,this.copyData.groupStyle=void 0,nt(JSON.stringify(this.copyData.toJson()))},paste(t,n,e){if(!this.copyData){zt.info("\u8BF7\u9009\u62E9\u7EC4\u4EF6");return}const s=j();t?(this.copyData.change("top",e),this.copyData.change("left",n)):(this.copyData.change("top",this.copyData.style.top+10),this.copyData.change("left",this.copyData.style.left+10));const i=Q(this.copyData);i.id=Et(),s.appendComponent(i)}}});function Ht(){return Wt(et)}const Ot={lt:Nt,t:Gt,rt:Jt,r:Ut,rb:Kt,b:qt,lb:Ft,l:jt};function E(t){const{top:n,left:e,height:s,width:i}=t;return{y:n+s/2,x:e+i/2}}function ot(t,n,e){return t*(e-n.x)+n.y}function st(t,n,e){return n.x-(n.y-e)/t}function Nt(t,n){const{top:e,left:s,rotate:i,width:d,height:u}=t,f=E(t),l={x:s+d,y:e+u},r=p(l,f,i),a={x:(r.x+n.x)/2,y:(r.y+n.y)/2},h=p(n,a,-i),y=p(r,a,-i),m=y.y-h.y,v=y.x-h.x;return{top:h.y,left:h.x,width:v,height:m}}function jt(t,n){const{left:e,rotate:s,width:i,height:d,top:u}=t,f=E(t),l={x:e+i,y:u+d/2},r=p(l,f,s);if(s%180!=90){const v=(f.y-r.y)/(f.x-r.x),L=ot(v,f,n.x);n.y=L}else n.x=f.x;const a={x:(r.x+n.x)/2,y:(r.y+n.y)/2},h=p(n,a,-s),m=p(r,a,-s).x-h.x;return{top:a.y-d/2,left:h.x,width:m,height:d}}function Ft(t,n){const{top:e,left:s,rotate:i,width:d}=t,u=E(t),f={x:s+d,y:e},l=p(f,u,i),r={x:(l.x+n.x)/2,y:(l.y+n.y)/2},a=p(n,r,-i),h=p(l,r,-i),y=a.y-h.y,m=h.x-a.x;return{top:a.y-y,left:a.x,width:m,height:y}}function qt(t,n){const{top:e,left:s,rotate:i,width:d}=t,u=E(t),f={x:s+d/2,y:e},l=p(f,u,i);if(i%180!=90){const m=(u.y-l.y)/(u.x-l.x),v=st(m,u,n.y);n.x=v}else n.y=u.y;const r={x:(l.x+n.x)/2,y:(l.y+n.y)/2},a=p(n,r,-i),h=p(l,r,-i),y=a.y-h.y;return{top:a.y-y,left:r.x-d/2,width:d,height:y}}function Gt(t,n){const{top:e,left:s,rotate:i,width:d,height:u}=t,f=E(t),l={x:s+d/2,y:e+u},r=p(l,f,i);if(i%180!=90){const v=(f.y-r.y)/(f.x-r.x),L=st(v,f,n.y);n.x=L}else n.y=f.y;const a={x:(r.x+n.x)/2,y:(r.y+n.y)/2},h=p(n,a,-i),m=p(r,a,-i).y-h.y;return{top:h.y,left:a.x-d/2,width:d,height:m}}function Jt(t,n){const{top:e,left:s,rotate:i,height:d}=t,u=E(t),f={x:s,y:e+d},l=p(f,u,i),r={x:(l.x+n.x)/2,y:(l.y+n.y)/2},a=p(n,r,-i),h=p(l,r,-i),y=h.y-a.y,m=a.x-h.x;return{top:a.y,left:h.x,width:m,height:y}}function Kt(t,n){const{top:e,left:s,rotate:i}=t,d=E(t),f=p({x:s,y:e},d,i),l={x:(f.x+n.x)/2,y:(f.y+n.y)/2},r=p(n,l,-i),a=p(f,l,-i),h=r.y-a.y,y=r.x-a.x;return{top:a.y,left:a.x,width:y,height:h}}function Ut(t,n){const{top:e,left:s,rotate:i,height:d}=t,u=E(t),f={x:s,y:e+d/2},l=p(f,u,i);if(i%180!=90){const m=(u.y-l.y)/(u.x-l.x),v=ot(m,u,n.x);n.y=v}else n.x=u.x;const r={x:(l.x+n.x)/2,y:(l.y+n.y)/2},a=p(n,r,-i),h=p(l,r,-i),y=a.x-h.x;return{top:h.y-d/2,left:h.x,width:y,height:d}}function Vt(t,n,e){const{top:s,left:i,width:d,height:u}=Ot[t](n,e);return{top:Math.round(s),left:Math.round(i),width:Math.round(d),height:Math.round(u)}}const $t="_shape_s93dy_1",Qt="_error-info_s93dy_7",Zt="_active_s93dy_12",te="_shape-point_s93dy_16",ee="_rotation_s93dy_21",ne="_icon-jiesuo_s93dy_33",oe="_lt_s93dy_39",se="_rotate-0_s93dy_39",ie="_rb_s93dy_40",ce="_l_s93dy_39",re="_rotate-45_s93dy_41",ae="_r_s93dy_21",le="_lb_s93dy_43",fe="_rotate-90_s93dy_43",de="_rt_s93dy_44",ue="_t_s93dy_45",he="_rotate-135_s93dy_45",me="_b_s93dy_46",k={shape:$t,"error-info":"_error-info_s93dy_7",errorInfo:Qt,active:Zt,"shape-point":"_shape-point_s93dy_16",shapePoint:te,rotation:ee,"icon-jiesuo":"_icon-jiesuo_s93dy_33",iconJiesuo:ne,lt:oe,"rotate-0":"_rotate-0_s93dy_39",rotate0:se,rb:ie,l:ce,"rotate-45":"_rotate-45_s93dy_41",rotate45:re,r:ae,lb:le,"rotate-90":"_rotate-90_s93dy_43",rotate90:fe,rt:de,t:ue,"rotate-135":"_rotate-135_s93dy_45",rotate135:he,b:me},xe=Lt({props:{active:{type:Boolean,default:!1},isInner:{type:Boolean,default:!1},info:Object,defaultStyle:Object,index:Number},setup(t,{slots:n}){const e=j(),s=Bt(),i=Ht(),d=()=>{i.copy(e.curComponent)},u=()=>{e.removeComponent(t.index,t.info.parent)},f=()=>{e.upComponent(t.index,t.info.parent)},l=()=>{e.downComponent(t.index,t.info.parent)},r=()=>{e.topComponent(t.index,t.info.parent)},a=()=>{const o=e.curComponent.id;nt(o)},h=()=>{e.bottomComponent(t.index,t.info.parent)},y=()=>{e.decompose()},m=(o,c)=>{var C;if(e.curComponent&&e.curComponent.id===t.info.id)c.stopPropagation();else if(!e.curComponent&&!t.info.parent)e.setCurComponent(t.info,t.index.toString()),c.stopPropagation();else return;return[{text:"\u62C6\u5206",subText:"",disable:((C=e.curComponent)==null?void 0:C.component)!=="Group",handler:y},{divider:!0},{text:"\u590D\u5236",subText:"Ctrl + C",handler:d},{text:"\u590D\u5236ID",subText:"",handler:a},{text:"\u5220\u9664",subText:"Ctr + Delete",handler:u},{divider:!0},{text:"\u7F6E\u4E8E\u9876\u5C42",handler:r,children:[{text:"\u7F6E\u4E8E\u9876\u5C42",handler:r},{text:"\u4E0A\u79FB\u4E00\u5C42",handler:f}]},{text:"\u7F6E\u4E8E\u5E95\u5C42",handler:h,children:[{text:"\u7F6E\u4E8E\u5E95\u5C42",handler:h},{text:"\u4E0B\u79FB\u4E00\u5C42",handler:l}]}]},v=H(()=>e.isShowEm),L=P(null),F=P({}),it=P("0px"),ct=P("#fff0"),rt=P("none"),q=P(!1),B=P("");Pt((o,c,C)=>{if(console.log(o),C==="render function"){if(e.isEditMode){if(c){const{name:w}=c.component||{};B.value=`\u7EC4\u4EF6[${w}]\u6E32\u67D3\u5F02\u5E38`}else B.value="\u7EC4\u4EF6\u6E32\u67D3\u5F02\u5E38";it.value="5px",ct.value="red",rt.value="dashed",q.value=!0}return!1}else return!0});const W=H(()=>t.active&&!t.info.locked||s.isActived(t.info)),at=()=>{s.appendComponent(e.curComponent),s.appendComponent(t.info)},lt=o=>{if(o.preventDefault(),t.info.parent||o.stopPropagation(),!e.curComponent||t.info.id!==e.curComponent.id||t.info.locked)return;o.stopPropagation(),F.value=G();let{top:c,left:C}=t.defaultStyle;const w=o.clientY,D=o.clientX,b=c,_=C,g=N(S=>{const M=S.clientX;c=(S.clientY-w)/e.scale+b,C=(M-D)/e.scale+_,e.syncComponentLoction({top:c,left:C},t.info.parent,!1)}),z=()=>{Yt.emit("unmove"),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",z),t.info&&t.info.parent&&e.resizeAutoComponent(t.info.parent),e.saveComponentData()};document.addEventListener("mousemove",g),document.addEventListener("mouseup",z)},ft=o=>{var c,C;if(o.ctrlKey){at();return}o.preventDefault(),t.isInner?((c=t.info.parent)==null?void 0:c.id)===((C=e.benchmarkComponent)==null?void 0:C.id)&&(o.stopPropagation(),e.setCurComponent(t.info,t.index.toString())):(o.stopPropagation(),e.setCurComponent(t.info,t.index.toString()))},dt=o=>{var c;!t.isInner||(o.preventDefault(),t.info&&(!t.info.parent||((c=t.info.parent)==null?void 0:c.active))&&(o.stopPropagation(),e.setCurComponent(t.info,t.index.toString())))},ut=(o,c)=>{if(c.button!==0||!(e.curComponent&&t.info.id===e.curComponent.id))return;c.stopPropagation(),c.preventDefault();const C={top:t.defaultStyle.top,left:t.defaultStyle.left,height:t.defaultStyle.height,width:t.defaultStyle.width,rotate:t.defaultStyle.rotate},w=document.querySelector("#editor").getBoundingClientRect(),D=N(_=>{const g={x:(_.clientX-w.left)/e.scale,y:(_.clientY-w.top)/e.scale},{top:z,left:S,width:M,height:Y}=Vt(o,C,g);e.syncComponentLoction({top:z,left:S,width:M,height:Y},t.info.parent,!1)}),b=()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",b),t.info&&e.resizeAutoComponent(t.info.parent),e.saveComponentData()};document.addEventListener("mousemove",D),document.addEventListener("mouseup",b)},ht=o=>{if(o.button!==0||!L.value||(o.preventDefault(),o.stopPropagation(),!(e.curComponent&&t.info.id===e.curComponent.id))||t.info.locked)return;let{rotate:c}=R({},t.defaultStyle);const C=o.clientY,w=o.clientX,D=c,b=L.value.getBoundingClientRect(),_=b.left+b.width/2,g=b.top+b.height/2,z=Math.atan2(C-g,w-_)/(Math.PI/180),S=N(Y=>{const Ct=Y.clientX,xt=Y.clientY,gt=Math.atan2(xt-g,Ct-_)/(Math.PI/180);c=D+gt-z,e.syncComponentLoction({rotate:c},t.info.parent,!1)}),M=()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",M),t.info&&e.resizeAutoComponent(t.info.parent),e.saveComponentData()};document.addEventListener("mousemove",S),document.addEventListener("mouseup",M)},G=()=>{if(!e.curComponent)return{};const o=Z(e.curComponent.style.rotate),c={};let C=-1;const w=[{start:338,end:23,cursor:"nw"},{start:23,end:68,cursor:"n"},{start:68,end:113,cursor:"ne"},{start:113,end:158,cursor:"e"},{start:158,end:203,cursor:"se"},{start:203,end:248,cursor:"s"},{start:248,end:293,cursor:"sw"},{start:293,end:338,cursor:"w"}],D={lt:0,t:45,rt:90,r:135,rb:180,b:225,lb:270,l:315};return["lt","t","rt","r","rb","b","lb","l"].forEach(_=>{const g=Z(D[_]+o),z=w.length;for(;;){C=(C+1)%z;const S=w[C];if(g<23||g>=338){c[_]="nw-resize";return}if(S.start<=g&&g<S.end){c[_]=S.cursor+"-resize";return}}}),c},mt=H(()=>{const o="rotate-",c=t.defaultStyle.rotate;return c>-22.5&&c<=22.5?o+0:c>22.5&&c<=67.5?o+45:c>67.5&&c<=112.5?o+90:c>112.5&&c<=157.5?o+135:c>157.5||c<=-157.5?o+0:c>-157.5&&c<=-112.5?o+45:c>-112.5&&c<=-67.5?o+90:c>-67.5&&c<=-22.5?o+135:o+0}),J=o=>{if(document.addEventListener("keyup",K),!!(e.curComponent&&t.info.id===e.curComponent.id)&&(o.stopPropagation(),t.info&&o.ctrlKey))switch(o.key){case"ArrowLeft":o.preventDefault(),e.syncComponentLoction({left:t.info.positionStyle.left-1},t.info.parent,!1);break;case"ArrowUp":o.preventDefault(),e.syncComponentLoction({top:t.info.positionStyle.top-1},t.info.parent,!1);break;case"ArrowRight":o.preventDefault(),e.syncComponentLoction({left:t.info.positionStyle.left+1},t.info.parent,!1);break;case"ArrowDown":o.preventDefault(),e.syncComponentLoction({top:t.info.positionStyle.top+1},t.info.parent,!1);break;case"Delete":o.preventDefault(),u();break;default:return}},K=o=>{!(e.curComponent&&t.info.id===e.curComponent.id)||(o.stopPropagation(),t.info&&e.resizeAutoComponent(t.info.parent),e.saveComponentData(),document.removeEventListener("keyup",K))};kt(()=>{F.value=G()}),Mt(()=>e.curComponent,o=>{o&&t.info.id===o.id?document.addEventListener("keydown",J):document.removeEventListener("keydown",J)});const pt=[{top:"0%",left:"0%",direction:"lt"},{top:"0%",left:"50%",direction:"t"},{top:"0%",left:"100%",direction:"rt"},{top:"50%",left:"100%",direction:"r"},{top:"100%",left:"100%",direction:"rb"},{top:"100%",left:"50%",direction:"b"},{top:"100%",left:"0%",direction:"lb"},{top:"50%",left:"0%",direction:"l"}],yt=()=>A(It,null,[T(A("span",{class:k.errorInfo},[B.value]),[[X,q.value]]),T(A(Rt,{class:k.rotation,name:"one-third-rotation",onMousedown:ht},null),[[X,W.value]]),T(A("em",null,[O("("),t.defaultStyle.left,O(","),t.defaultStyle.top,O(")")]),[[X,v.value]]),pt.map(o=>T(A("div",{class:[k.shapePoint,k[o.direction],k[mt.value]],style:{top:o.top,left:o.left},onMousedown:c=>ut(o.direction,c)},null),[[X,W.value]])),n.default&&n.default()]);return()=>T(A("div",{ref:L,class:[k.shape,W.value||t.active?k.active:""],onDblclick:o=>dt(o),onClick:o=>ft(o),onMousedown:o=>lt(o)},[yt()]),[[At("contextmenu"),(o,c)=>m(o,c)]])}});export{xe as S,Bt as a,Ht as u};
