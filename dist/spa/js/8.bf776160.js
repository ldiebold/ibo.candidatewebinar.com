(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"013f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[e.visible?s("div",[s("q-btn",{staticClass:"q-mt-sm q-ml-sm",attrs:{flat:"",round:"",icon:"mdi-home",type:"a",href:e.homeUrl,color:"grey-5"}}),e.visible?s("SanctumLoginPage",{on:{success:e.handleSuccess},scopedSlots:e._u([{key:"below",fn:function(){return[s("MResetPasswordButton",{staticClass:"q-mt-md text-grey-7",attrs:{flat:"",label:"reset-password"}})]},proxy:!0}],null,!1,3487349452)}):e._e()],1):e._e()])},n=[],o=s("1754"),i={props:{},mounted(){setTimeout((()=>{this.visible=!0}),300)},components:{SanctumLoginPage:o["b"]},computed:{homeUrl(){return"https://candidatewebinar.com"}},methods:{handleSuccess(e){this.visible=!1,setTimeout((()=>{this.$router.push("/")}),500)}},data(){return{visible:!1}}},r=i,c=s("a6c2"),l=s("ef9c"),u=s("63c1"),d=s.n(u),m=s("a9de"),p=s.n(m),h=s("9622"),b=Object(c["a"])(r,a,n,!1,null,null,null);t["default"]=b.exports;d()(b,"components",{QBtn:l["a"]}),p()(b,{MResetPasswordButton:h["a"]})}}]);