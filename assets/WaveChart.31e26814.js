var V=(e,t,l)=>new Promise((v,d)=>{var c=r=>{try{f(l.next(r))}catch(P){d(P)}},p=r=>{try{f(l.throw(r))}catch(P){d(P)}},f=r=>r.done?v(r.value):Promise.resolve(r.value).then(c,p);f((l=l.apply(e,t)).next())});import{c as he,S as X,C as J,a as ne,i as ce,b as fe,d as ge,e as me,f as pe,g as ye,h as we,j as F,G as K,k as Pe,R as Q,Z as ee,l as Se,p as be,m as te,B as Ie,n as ae,o as Me,u as Ce}from"./hooks.2325b603.js";import{u as De}from"./index.f9a5bc2d.js";import{u as Le}from"./index.cbe97bab.js";import{d as Te,r as re,a as Ee,w as xe,u as _e,o as ke,c as Ae,f as Re}from"./index.68969163.js";function We(e,t){return t=t||{},he(e,null,null,t.state!=="normal")}function ze(e){var t=X.extend(e);return X.registerClass(t),t}function Be(e){var t=J.extend(e);return J.registerClass(t),t}ne([ce,fe]);ne(ge);ze({type:"series.liquidFill",optionUpdated:function(){var e=this.option;e.gridSize=Math.max(Math.floor(e.gridSize),4)},getInitialData:function(e,t){var l=me(e.data,{coordDimensions:["value"]}),v=new pe(l,this);return v.initData(e.data),v},defaultOption:{color:["#294D99","#156ACF","#1598ED","#45BDFF"],center:["50%","50%"],radius:"50%",amplitude:"8%",waveLength:"80%",phase:"auto",period:"auto",direction:"right",shape:"circle",waveAnimation:!0,animationEasing:"linear",animationEasingUpdate:"linear",animationDuration:2e3,animationDurationUpdate:1e3,outline:{show:!0,borderDistance:8,itemStyle:{color:"none",borderColor:"#294D99",borderWidth:8,shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.25)"}},backgroundStyle:{color:"#E3F7FF"},itemStyle:{opacity:.95,shadowBlur:50,shadowColor:"rgba(0, 0, 0, 0.4)"},label:{show:!0,color:"#294D99",insideColor:"#fff",fontSize:50,fontWeight:"bold",align:"center",baseline:"middle",position:"inside"},emphasis:{itemStyle:{opacity:.8}}}});const Oe=ye({type:"ec-liquid-fill",shape:{waveLength:0,radius:0,radiusY:0,cx:0,cy:0,waterLevel:0,amplitude:0,phase:0,inverse:!1},buildPath:function(e,t){t.radiusY==null&&(t.radiusY=t.radius);for(var l=Math.max(Math.ceil(2*t.radius/t.waveLength*4)*2,8);t.phase<-Math.PI*2;)t.phase+=Math.PI*2;for(;t.phase>0;)t.phase-=Math.PI*2;var v=t.phase/Math.PI/2*t.waveLength,d=t.cx-t.radius+v-t.radius*2;e.moveTo(d,t.waterLevel);for(var c=0,p=0;p<l;++p){var f=p%4,r=Ye(p*t.waveLength/4,f,t.waveLength,t.amplitude);e.bezierCurveTo(r[0][0]+d,-r[0][1]+t.waterLevel,r[1][0]+d,-r[1][1]+t.waterLevel,r[2][0]+d,-r[2][1]+t.waterLevel),p===l-1&&(c=r[2][0])}t.inverse?(e.lineTo(c+d,t.cy-t.radiusY),e.lineTo(d,t.cy-t.radiusY),e.lineTo(d,t.waterLevel)):(e.lineTo(c+d,t.cy+t.radiusY),e.lineTo(d,t.cy+t.radiusY),e.lineTo(d,t.waterLevel)),e.closePath()}});function Ye(e,t,l,v){return t===0?[[e+1/2*l/Math.PI/2,v/2],[e+1/2*l/Math.PI,v],[e+l/4,v]]:t===1?[[e+1/2*l/Math.PI/2*(Math.PI-2),v],[e+1/2*l/Math.PI/2*(Math.PI-1),v/2],[e+l/4,0]]:t===2?[[e+1/2*l/Math.PI/2,-v/2],[e+1/2*l/Math.PI,-v],[e+l/4,-v]]:[[e+1/2*l/Math.PI/2*(Math.PI-2),-v],[e+1/2*l/Math.PI/2*(Math.PI-1),-v/2],[e+l/4,0]]}var D=be;function ie(e){return e&&e.indexOf("path://")===0}Be({type:"liquidFill",render:function(e,t,l){var v=this,d=this.group;d.removeAll();var c=e.getData(),p=c.getItemModel(0),f=p.get("center"),r=p.get("radius"),P=l.getWidth(),C=l.getHeight(),x=Math.min(P,C),O=0,_=0,U=e.get("outline.show");U&&(O=e.get("outline.borderDistance"),_=D(e.get("outline.itemStyle.borderWidth"),x));var L=D(f[0],P),T=D(f[1],C),E,k,A,b=!1,S=e.get("shape");if(S==="container"?(b=!0,E=[P/2,C/2],k=[E[0]-_/2,E[1]-_/2],A=[D(O,P),D(O,C)],r=[Math.max(k[0]-A[0],0),Math.max(k[1]-A[1],0)]):(E=D(r,x)/2,k=E-_/2,A=D(O,x),r=Math.max(k-A,0)),U){var le=H();le.style.lineWidth=_,d.add(H())}var oe=b?0:L-r,se=b?0:T-r,R=null;d.add(ue());var q=this._data,G=[];c.diff(q).add(function(a){var i=N(a,!1),n=i.shape.waterLevel;i.shape.waterLevel=b?C/2:r,we(i,{shape:{waterLevel:n}},e),i.z2=2,$(a,i,null),d.add(i),c.setItemGraphicEl(a,i),G.push(i)}).update(function(a,i){for(var n=q.getItemGraphicEl(i),u=N(a,!1,n),s={},o=["amplitude","cx","cy","phase","radius","radiusY","waterLevel","waveLength"],g=0;g<o.length;++g){var h=o[g];u.shape.hasOwnProperty(h)&&(s[h]=u.shape[h])}for(var y={},m=["fill","opacity","shadowBlur","shadowColor"],g=0;g<m.length;++g){var h=m[g];u.style.hasOwnProperty(h)&&(y[h]=u.style[h])}b&&(s.radiusY=C/2),F(n,{shape:s,x:u.x,y:u.y},e),e.isUniversalTransitionEnabled&&e.isUniversalTransitionEnabled()?F(n,{style:y},e):n.useStyle(y);var w=n.getClipPath(),I=u.getClipPath();n.setClipPath(u.getClipPath()),n.shape.inverse=u.inverse,w&&I&&v._shape===S&&!ie(S)&&F(I,{shape:w.shape},e,{isFrom:!0}),$(a,n,n),d.add(n),c.setItemGraphicEl(a,n),G.push(n)}).remove(function(a){var i=q.getItemGraphicEl(a);d.remove(i)}).execute(),p.get("label.show")&&d.add(ve(G)),this._shape=S,this._data=c;function W(a,i){if(S)if(ie(S)){var n=te(S.slice(7),{}),u=n.getBoundingRect(),s=u.width,o=u.height;s>o?(o=a*2/s*o,s=a*2):(s=a*2/o*s,o=a*2);var g=i?0:L-s/2,h=i?0:T-o/2;return n=te(S.slice(7),{},new Ie(g,h,s,o)),i&&(n.x=-s/2,n.y=-o/2),n}else if(b){var y=i?-a[0]:L-a[0],m=i?-a[1]:T-a[1];return ae("rect",y,m,a[0]*2,a[1]*2)}else{var y=i?-a:L-a,m=i?-a:T-a;return S==="pin"?m+=a:S==="arrow"&&(m-=a),ae(S,y,m,a*2,a*2)}return new Me({shape:{cx:i?0:L,cy:i?0:T,r:a}})}function H(){var a=W(E);return a.style.fill=null,a.setStyle(e.getModel("outline.itemStyle").getItemStyle()),a}function ue(){var a=W(r);a.setStyle(e.getModel("backgroundStyle").getItemStyle()),a.style.fill=null,a.z2=5;var i=W(r);i.setStyle(e.getModel("backgroundStyle").getItemStyle()),i.style.stroke=null;var n=new K;return n.add(a),n.add(i),n}function N(a,i,n){var u=b?r[0]:r,s=b?C/2:r,o=c.getItemModel(a),g=o.getModel("itemStyle"),h=o.get("phase"),y=D(o.get("amplitude"),s*2),m=D(o.get("waveLength"),u*2),w=c.get("value",a),I=s-w*s*2;h=n?n.shape.phase:h==="auto"?a*Math.PI/4:h;var M=g.getItemStyle();if(!M.fill){var z=e.get("color"),Y=a%z.length;M.fill=z[Y]}var de=u*2,B=new Oe({shape:{waveLength:m,radius:u,radiusY:s,cx:de,cy:0,waterLevel:I,amplitude:y,phase:h,inverse:i},style:M,x:L,y:T});B.shape._waterLevel=I;var j=o.getModel("emphasis.itemStyle").getItemStyle();j.lineWidth=0,B.ensureState("emphasis").style=j,Pe(B);var Z=W(r,!0);return Z.setStyle({fill:"white"}),B.setClipPath(Z),B}function $(a,i,n){var u=c.getItemModel(a),s=u.get("period"),o=u.get("direction"),g=c.get("value",a),h=u.get("phase");h=n?n.shape.phase:h==="auto"?a*Math.PI/4:h;var y=function(I){var M=c.count();return M===0?I:I*(.2+(M-a)/M*.8)},m=0;s==="auto"?m=y(5e3):m=typeof s=="function"?s(g,a):s;var w=0;o==="right"||o==null?w=Math.PI:o==="left"?w=-Math.PI:o==="none"?w=0:console.error("Illegal direction value for liquid fill."),o!=="none"&&u.get("waveAnimation")&&i.animate("shape",!0).when(0,{phase:h}).when(m/2,{phase:w+h}).when(m,{phase:w*2+h}).during(function(){R&&R.dirty(!0)}).start()}function ve(a){var i=p.getModel("label");function n(){var M=e.getFormattedLabel(0,"normal"),z=c.get("value",0)*100,Y=c.getName(0)||e.name;return isNaN(z)||(Y=z.toFixed(0)+"%"),M==null?Y:M}var u={z2:10,shape:{x:oe,y:se,width:(b?r[0]:r)*2,height:(b?r[1]:r)*2},style:{fill:"transparent"},textConfig:{position:i.get("position")||"inside"},silent:!0},s={style:{text:n(),textAlign:i.get("align"),textVerticalAlign:i.get("baseline")}};Object.assign(s.style,We(i));var o=new Q(u),g=new Q(u);g.disableLabelAnimation=!0,o.disableLabelAnimation=!0;var h=new ee(s),y=new ee(s);o.setTextContent(h),g.setTextContent(y);var m=i.get("insideColor");y.style.fill=m;var w=new K;w.add(o),w.add(g);var I=W(r,!0);return R=new Se({shape:{paths:a},x:L,y:T}),R.setClipPath(I),g.setClipPath(R),w}},dispose:function(){}});const He=Te({__name:"WaveChart",props:{component:null},setup(e){const t=e,l=re(null),{updateEchart:v,resizeHandler:d}=Ce(l),c=re(0),p=(P,C)=>{P.status>=0&&(c.value=P.afterData),v(r())};Le(t.component,p);const{propValue:f}=De(t.component,()=>V(this,null,function*(){v(r())})),r=()=>({series:[{type:"liquidFill",amplitude:f.options.amplitude,data:[c.value],outline:{show:f.options.outlineShow,itemStyle:{borderColor:f.options.outlineColor}},shape:f.options.shape,radius:f.options.radius,direction:f.options.direction,waveAnimation:f.options.waveAnimation,label:{show:f.options.labelShow},backgroundStyle:{color:f.options.backgroundColor},color:[f.options.color]}]});return Ee(()=>V(this,null,function*(){v(r())})),(P,C)=>{const x=Re("resize");return xe((ke(),Ae("div",{ref_key:"chartEl",ref:l},null,512)),[[x,_e(d)]])}}});export{He as default};
