import{a as c,v as l}from"./index.596f2ec8.js";function p(e){return{all:e=e||new Map,on:function(t,n){var s=e.get(t);s?s.push(n):e.set(t,[n])},off:function(t,n){var s=e.get(t);s&&(n?s.splice(s.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var s=e.get(t);s&&s.slice().map(function(i){i(n)}),(s=e.get("*"))&&s.slice().map(function(i){i(t,n)})}}}const u=p(),a=new Map;function g(e,t,n={isAppend:!1,isRegExp:!1}){c(()=>{const{isAppend:i}=n;if(i){const{value:o,isRegExp:f}=a.get(e)||{value:0,isRegExp:!1};a.set(e,{value:o+1,isRegExp:f})}u.on(e,t)}),l(()=>{if(a.has(e)){const{value:i,isRegExp:o}=a.get(e)||{value:0,isRegExp:!1};i===1?a.delete(e):a.set(e,{value:i-1,isRegExp:o})}u.off(e,t)});function s(i){u.emit(e,i)}return s}export{u as e,g as u};