(function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],s=0,d=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{2:"3dfafc4c",3:"c3d6f7e3",4:"5cc79c5a",5:"da6995b0",6:"c99051bc",7:"b17ede29",8:"ff70162f",9:"23f7e69e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=l;a.push([0,1]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0d87":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("8ed0");class o extends r["OnlineEvent"]{}},"2f39":function(e,t,n){"use strict";n.r(t);n("15db"),n("cbcf"),n("7f20"),n("2233"),n("02e1"),n("37d6"),n("9ce7"),n("7e6d");var r=n("e832"),o=n("b661"),a=n("5937"),i=n("f846"),u=n("f6b1"),c=n("b2bf");r["a"].use(i["a"],{config:{},lang:o["a"],iconSet:a["a"],directives:{ClosePopup:u["a"]},plugins:{Dialog:c["a"]}});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},s=[],p={name:"App"},d=p,f=n("a6c2"),h=Object(f["a"])(d,l,s,!1,null,null,null),b=h.exports,v=n("94ea"),g=n("e3c3"),m=n("8ed0");class w extends m["User"]{}var y=n("0d87");class _ extends m["OnlineEventUser"]{}class O extends m["TutorialVideo"]{}const x=new g["default"].Database;x.register(w),x.register(y["a"]),x.register(_),x.register(O);var j=x;r["a"].use(v["a"]),g["default"].use(m["VuexOrmRestPlugin"],{api_url:"https://api.candidatewebinar.com/api"}),g["default"].use(m["SchemaPlugin"],{database:j});var P=function(){const e=new v["a"].Store({plugins:[g["default"].install(j)],strict:!1});return e},S=n("4af9");const V=[{path:"/",component:()=>n.e(3).then(n.bind(null,"713b")),children:[{path:"",component:()=>n.e(7).then(n.bind(null,"8b24"))},{path:"/candidates",component:()=>n.e(4).then(n.bind(null,"84ea"))},{path:"/events",component:()=>n.e(6).then(n.bind(null,"5ead"))},{path:"/structure",component:()=>n.e(9).then(n.bind(null,"c8b3"))}]},{path:"/",component:()=>n.e(2).then(n.bind(null,"cffb")),children:[{path:"/login",name:"login",component:()=>n.e(8).then(n.bind(null,"013f"))}]},{path:"*",component:()=>n.e(5).then(n.bind(null,"e51e"))}];var E=V,T=n("1754");r["a"].use(S["a"]);var k=function(e){const t=new S["a"]({scrollBehavior:()=>({x:0,y:0}),routes:E,mode:"history",base:"/"});return t.beforeEach(((t,n,r)=>M(t,n,r,e))),t};function M(e,t,n,r){const o={localUser:w.query().first(),fetch_user:()=>w.$session(),auth_endpoint:"https://api.candidatewebinar.com/login",login_endpoint:"/login",logout_endpoint:"/logout",errorNotifier:()=>alert("error"),public_routes:["/logout","/login"],home_endpoint:"/"},a=new T["a"](o,e,t,n);return a.authorize()}var C=async function(){const e="function"===typeof P?await P({Vue:r["a"]}):P,t="function"===typeof k?await k({Vue:r["a"],store:e}):k;e.$router=t;const n={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:n,store:e,router:t}},$=({store:e})=>{Object(m["RegisterModelAliasesToVue"])(r["a"],e)},q=n("7338"),A=n.n(q);A.a.defaults.withCredentials=!0,r["a"].prototype.$axios=A.a;var U=n("8d35"),B=n.n(U),D=n("b106");B.a.extend(D),r["a"].prototype.$dayjs=B.a;var J=n("c175"),L=async({Vue:e})=>{e.component("MShowTutorialVideoButton",J["i"])},R=n("8746");const z="/";async function N(){const{app:e,store:t,router:n}=await C();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),u=[$,void 0,void 0,L,R["a"]];for(let l=0;!1===o&&l<u.length;l++)if("function"===typeof u[l])try{await u[l]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:z})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new r["a"](e)}N()},4763:function(e,t,n){"use strict";t["a"]={login_url:"https://api.candidatewebinar.com/login",logout_url:"https://api.candidatewebinar.com/logout",user_endpoint:"https://api.candidatewebinar.com/api/user",csrf_cookie_url:"https://api.candidatewebinar.com/sanctum/csrf-cookie"}},"7e6d":function(e,t,n){}});