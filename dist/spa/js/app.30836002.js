(function(e){function t(t){for(var o,i,l=t[0],s=t[1],u=t[2],c=0,d=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={1:0},a=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{2:"8194e8f6",3:"8fb96cbe",4:"5a63e029",5:"e05cd645",6:"d6beb3fa",7:"cbe502f0",8:"bf776160",9:"b1bd8a3b",10:"062a1818",11:"02487e58"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=u;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("15db"),n("cbcf"),n("7f20"),n("2233"),n("02e1"),n("37d6"),n("9ce7"),n("7e6d");var o=n("e832"),r=n("b661"),a=n("5937"),i=n("f846"),l=n("f6b1"),s=n("b2bf"),u=n("4baa"),c=n("c545");o["a"].use(i["a"],{config:{},lang:r["a"],iconSet:a["a"],directives:{ClosePopup:l["a"]},plugins:{Dialog:s["a"],Cookies:u["a"],Notify:c["a"]}});var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},d=[],f={name:"App"},h=f,b=n("a6c2"),m=Object(b["a"])(h,p,d,!1,null,null,null),v=m.exports,g=n("94ea"),w=n("e3c3"),y=n("8ed0");class P extends y["User"]{}class _ extends y["OnlineEvent"]{}class x extends y["OnlineEventUser"]{}class O extends y["TutorialVideo"]{}class j extends y["UserFeedback"]{}const k=new w["default"].Database;k.register(P),k.register(_),k.register(x),k.register(O),k.register(j);var C=k;o["a"].use(g["a"]),w["default"].use(y["VuexOrmRestPlugin"],{api_url:"https://api.candidatewebinar.com/api"}),w["default"].use(y["SchemaPlugin"],{database:C});var S=function(){const e=new g["a"].Store({plugins:[w["default"].install(C)],strict:!1});return e},E=n("4af9");const V=[{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>n.e(7).then(n.bind(null,"8b24"))},{path:"/candidates",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"84ea"))},{path:"/events",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"5ead"))},{path:"/structure",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"c8b3"))},{path:"/tutorial-videos",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"e4b0"))},{path:"/users",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"6571"))}]},{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"cffb")),children:[{path:"/login",name:"login",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"013f"))}]},{path:"*",component:()=>n.e(5).then(n.bind(null,"e51e"))}];var T=V,$=n("1754");o["a"].use(E["a"]);var M=function(e){const t=new E["a"]({scrollBehavior:()=>({x:0,y:0}),routes:T,mode:"history",base:"/"});return t.beforeEach(((t,n,o)=>q(t,n,o,e))),t};function q(e,t,n,o){const r={localUser:P.query().first(),fetch_user:()=>P.$session(),auth_endpoint:"https://api.candidatewebinar.com/login",login_endpoint:"/login",logout_endpoint:"/logout",errorNotifier:()=>alert("error"),public_routes:["/logout","/login"],home_endpoint:"/"},a=new $["a"](r,e,t,n);return a.authorize()}var U=async function(){const e="function"===typeof S?await S({Vue:o["a"]}):S,t="function"===typeof M?await M({Vue:o["a"],store:e}):M;e.$router=t;const n={router:t,store:e,render:e=>e(v),el:"#q-app"};return{app:n,store:e,router:t}},A=({store:e})=>{Object(y["RegisterModelAliasesToVue"])(o["a"],e)},D=n("7c1e");o["a"].prototype.$schemaFormConfig={fieldComponents:{datetime:D["a"],video_url:D["d"]}};var F=n("7338"),J=n.n(F);J.a.defaults.withCredentials=!0,o["a"].prototype.$axios=J.a;var L=n("8d35"),N=n.n(L),R=n("b106");N.a.extend(R),o["a"].prototype.$dayjs=N.a;var z=n("fd39"),B=n.n(z),Q=n("07fd"),G=n.n(Q),H=({Vue:e})=>{e.use(G.a)},I=n("8746");const K="/";async function W(){const{app:e,store:t,router:n}=await U();let r=!1;const a=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),l=[A,void 0,void 0,void 0,B.a,H,I["a"]];for(let u=0;!1===r&&u<l.length;u++)if("function"===typeof l[u])try{await l[u]({app:e,router:n,store:t,Vue:o["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:K})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==r&&new o["a"](e)}W()},4763:function(e,t,n){"use strict";t["a"]={login_url:"https://api.candidatewebinar.com/login",logout_url:"https://api.candidatewebinar.com/logout",user_endpoint:"https://api.candidatewebinar.com/api/user",csrf_cookie_url:"https://api.candidatewebinar.com/sanctum/csrf-cookie",forgot_password_url:"https://api.candidatewebinar.com/forgot-password"}},"7e6d":function(e,t,n){},fd39:function(e,t){}});