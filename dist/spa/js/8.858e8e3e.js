(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"013f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SanctumLoginPage",{on:{success:e.handleSuccess}})},s=[],c=n("1754"),u=n("ebd1"),o={props:{},components:{SanctumLoginPage:c["b"]},computed:{},methods:{handleSuccess(e){this.$auth.fetchUser().then((e=>{u["a"].create({data:e.data}),this.$router.push("/")}))}},data(){return{}}},r=o,d=n("a6c2"),h=Object(d["a"])(r,a,s,!1,null,null,null);t["default"]=h.exports}}]);