(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"5ead":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("MOnlineEventsTable",{staticStyle:{height:"calc(100vh - 50px)"},attrs:{"online-events":e.online_events,"hide-delete-button":"","hide-create-button":"","hide-update-button":"","disable-header-menu":"","visible-columns":["title","description","start_time","end_time"]},scopedSlots:e._u([{key:"top-right",fn:function(){return[n("MShowTutorialVideoButton",{staticClass:"q-mr-sm",attrs:{title:"Online Events"}})]},proxy:!0}])})],1)},a=[],l={name:"EventsPage",components:{},created(){this.$MOnlineEvent.$get()},computed:{online_events(){return this.$MOnlineEvent.all()}}},o=l,s=n("a6c2"),c=n("505d"),r=n("63c1"),u=n.n(r),d=n("a9de"),p=n.n(d),h=n("e136"),v=n("8cb1"),b=Object(s["a"])(o,i,a,!1,null,null,null);t["default"]=b.exports;u()(b,"components",{QPage:c["a"]}),p()(b,{MOnlineEventsTable:h["a"],MShowTutorialVideoButton:v["a"]})}}]);