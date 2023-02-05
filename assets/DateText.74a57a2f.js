import{a1 as K,d as X,r as B,a as tt,Z as et,e as nt,w as rt,o as st,c as it,V as at,t as ot,l as ut,_ as ct}from"./index.642367b9.js";import{u as ht}from"./index.f9a5bc2d.js";var P={exports:{}};(function(V,U){(function(x,D){V.exports=D()})(K,function(){var x=1e3,D=6e4,L=36e5,O="millisecond",v="second",y="minute",$="hour",m="day",Y="week",p="month",F="quarter",_="year",H="date",Z="Invalid Date",q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},j=function(r,n,t){var s=String(r);return!s||s.length>=n?r:""+Array(n+1-s.length).join(t)+r},R={s:j,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),s=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+j(s,2,"0")+":"+j(e,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var s=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(s,p),a=t-e<0,i=n.clone().add(s+(a?-1:1),p);return+(-(s+(t-e)/(a?e-i:i-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:p,y:_,w:Y,d:m,D:H,h:$,m:y,s:v,ms:O,Q:F}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},b="en",w={};w[b]=Q;var z=function(r){return r instanceof k},W=function r(n,t,s){var e;if(!n)return b;if(typeof n=="string"){var a=n.toLowerCase();w[a]&&(e=a),t&&(w[a]=t,e=a);var i=n.split("-");if(!e&&i.length>1)return r(i[0])}else{var o=n.name;w[o]=n,e=o}return!s&&e&&(b=e),e||!s&&b},f=function(r,n){if(z(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new k(t)},u=R;u.l=W,u.i=z,u.w=function(r,n){return f(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var k=function(){function r(t){this.$L=W(t.locale,null,!0),this.parse(t)}var n=r.prototype;return n.parse=function(t){this.$d=function(s){var e=s.date,a=s.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(q);if(i){var o=i[2]-1||0,h=(i[7]||"0").substring(0,3);return a?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,h)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,h)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==Z},n.isSame=function(t,s){var e=f(t);return this.startOf(s)<=e&&e<=this.endOf(s)},n.isAfter=function(t,s){return f(t)<this.startOf(s)},n.isBefore=function(t,s){return this.endOf(s)<f(t)},n.$g=function(t,s,e){return u.u(t)?this[s]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,s){var e=this,a=!!u.u(s)||s,i=u.p(t),o=function(T,l){var S=u.w(e.$u?Date.UTC(e.$y,l,T):new Date(e.$y,l,T),e);return a?S:S.endOf(m)},h=function(T,l){return u.w(e.toDate()[T].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(l)),e)},c=this.$W,d=this.$M,g=this.$D,M="set"+(this.$u?"UTC":"");switch(i){case _:return a?o(1,0):o(31,11);case p:return a?o(1,d):o(0,d+1);case Y:var C=this.$locale().weekStart||0,I=(c<C?c+7:c)-C;return o(a?g-I:g+(6-I),d);case m:case H:return h(M+"Hours",0);case $:return h(M+"Minutes",1);case y:return h(M+"Seconds",2);case v:return h(M+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,s){var e,a=u.p(t),i="set"+(this.$u?"UTC":""),o=(e={},e[m]=i+"Date",e[H]=i+"Date",e[p]=i+"Month",e[_]=i+"FullYear",e[$]=i+"Hours",e[y]=i+"Minutes",e[v]=i+"Seconds",e[O]=i+"Milliseconds",e)[a],h=a===m?this.$D+(s-this.$W):s;if(a===p||a===_){var c=this.clone().set(H,1);c.$d[o](h),c.init(),this.$d=c.set(H,Math.min(this.$D,c.daysInMonth())).$d}else o&&this.$d[o](h);return this.init(),this},n.set=function(t,s){return this.clone().$set(t,s)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,s){var e,a=this;t=Number(t);var i=u.p(s),o=function(d){var g=f(a);return u.w(g.date(g.date()+Math.round(d*t)),a)};if(i===p)return this.set(p,this.$M+t);if(i===_)return this.set(_,this.$y+t);if(i===m)return o(1);if(i===Y)return o(7);var h=(e={},e[y]=D,e[$]=L,e[v]=x,e)[i]||1,c=this.$d.getTime()+t*h;return u.w(c,this)},n.subtract=function(t,s){return this.add(-1*t,s)},n.format=function(t){var s=this,e=this.$locale();if(!this.isValid())return e.invalidDate||Z;var a=t||"YYYY-MM-DDTHH:mm:ssZ",i=u.z(this),o=this.$H,h=this.$m,c=this.$M,d=e.weekdays,g=e.months,M=function(l,S,N,A){return l&&(l[S]||l(s,a))||N[S].slice(0,A)},C=function(l){return u.s(o%12||12,l,"0")},I=e.meridiem||function(l,S,N){var A=l<12?"AM":"PM";return N?A.toLowerCase():A},T={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:u.s(c+1,2,"0"),MMM:M(e.monthsShort,c,g,3),MMMM:M(g,c),D:this.$D,DD:u.s(this.$D,2,"0"),d:String(this.$W),dd:M(e.weekdaysMin,this.$W,d,2),ddd:M(e.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(o),HH:u.s(o,2,"0"),h:C(1),hh:C(2),a:I(o,h,!0),A:I(o,h,!1),m:String(h),mm:u.s(h,2,"0"),s:String(this.$s),ss:u.s(this.$s,2,"0"),SSS:u.s(this.$ms,3,"0"),Z:i};return a.replace(G,function(l,S){return S||T[l]||i.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,s,e){var a,i=u.p(s),o=f(t),h=(o.utcOffset()-this.utcOffset())*D,c=this-o,d=u.m(this,o);return d=(a={},a[_]=d/12,a[p]=d,a[F]=d/3,a[Y]=(c-h)/6048e5,a[m]=(c-h)/864e5,a[$]=c/L,a[y]=c/D,a[v]=c/x,a)[i]||c,e?d:u.a(d)},n.daysInMonth=function(){return this.endOf(p).$D},n.$locale=function(){return w[this.$L]},n.locale=function(t,s){if(!t)return this.$L;var e=this.clone(),a=W(t,s,!0);return a&&(e.$L=a),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),J=k.prototype;return f.prototype=J,[["$ms",O],["$s",v],["$m",y],["$H",$],["$W",m],["$M",p],["$y",_],["$D",H]].forEach(function(r){J[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),f.extend=function(r,n){return r.$i||(r(n,k,f),r.$i=!0),f},f.locale=W,f.isDayjs=z,f.unix=function(r){return f(1e3*r)},f.en=w[b],f.Ls=w,f.p={},f})})(P);const E=P.exports,ft=X({__name:"DateText",props:{component:null},setup(V){const U=V;ut($=>({a8605e82:D.value}));const{propValue:x}=ht(U.component),D=B("20px"),L=$=>{const{height:m}=$.contentRect;D.value=`${m}px`};let O;const v=B(E().format(x.base.format||"YYYY-MM-DD HH:mm:ss")),y=()=>{const $=x.base.format;v.value=E().format($||"YYYY-MM-DD HH:mm:ss")};return tt(()=>{O=setInterval(y,1e3)}),et(()=>{clearInterval(O)}),($,m)=>{const Y=nt("resize");return rt((st(),it("span",null,[at(ot(v.value),1)])),[[Y,L]])}}});const $t=ct(ft,[["__scopeId","data-v-daa85d9d"]]);export{$t as default};