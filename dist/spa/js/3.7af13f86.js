(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.visible?a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"mdi-menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n          IBO\n        ")]),a("q-btn",{attrs:{flat:"",icon:"mdi-logout",round:""},on:{click:e.handleLogout}})],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n          Menu\n        ")]),e._l(e.menuItems,(function(t){return a("q-item",{key:t.label,attrs:{clickable:"",to:t.to}},[a("q-item-section",[a("q-item-label",[e._v("\n              "+e._s(t.label)+"\n            ")]),a("q-item-label",{attrs:{caption:""}},[e._v("\n              "+e._s(t.description)+"\n            ")])],1)],1)}))],2)],1),a("q-page-container",[a("router-view")],1)],1)],1):e._e()},o=[],i={name:"MainLayout",components:{},methods:{handleLogout(){this.visible=!1;const e=this;this.$auth.logout().then((()=>{setTimeout((()=>{e.$router.go("/login")}),300)}))}},mounted(){setTimeout((()=>{this.visible=!0}),400)},data(){return{leftDrawerOpen:!1,visible:!1,menuItems:[{icon:"person",label:"Candidates",description:"manage candidate accounts",to:"/candidates"},{icon:"calendar",label:"Events",description:"create and edit events",to:"/events"}]}}},l=i,r=a("a6c2"),s=a("f624"),c=a("8738"),d=a("66cf"),u=a("ef9c"),b=a("309f"),m=a("5cc9"),f=a("692f"),p=a("dc7c"),v=a("e0e9"),w=a("6c44"),h=a("ddc7"),q=a("63c1"),g=a.n(q),Q=Object(r["a"])(l,n,o,!1,null,null,null);t["default"]=Q.exports;g()(Q,"components",{QLayout:s["a"],QHeader:c["a"],QToolbar:d["a"],QBtn:u["a"],QToolbarTitle:b["a"],QDrawer:m["a"],QList:f["a"],QItemLabel:p["a"],QItem:v["a"],QItemSection:w["a"],QPageContainer:h["a"]})}}]);