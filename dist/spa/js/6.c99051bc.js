(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"5ead":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("OnlineEventsTableDynamic",{staticStyle:{height:"calc(100vh - 50px)"},attrs:{"online-events":e.online_events,"hide-delete-button":"","hide-create-button":"","hide-update-button":"","disable-header-menu":"","visible-columns":["title","description","start_time","end_time"]},scopedSlots:e._u([{key:"top-right",fn:function(){return[n("MShowTutorialVideoButton",{staticClass:"q-mr-sm",attrs:{title:"Online Events"}})]},proxy:!0}])})],1)},a=[],i=n("0d87"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("RManageModelTable",e._g(e._b({attrs:{data:e.onlineEvents,columns:e.columns,pagination:e.initialPagination,"model-class":e.$MOnlineEvent,role:"ibo","merge-fields":e.merrgeFields,search:{fields:["title","description"]}},scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,n){return{key:n,fn:function(t){return[e._t(n,null,null,t)]}}}))],null,!0)},"RManageModelTable",e.$attrs,!1),e.$listeners))},r=[],o=n("5bc0"),d={props:{onlineEvents:{required:!0,type:Array}},components:{RManageModelTable:o["b"]},computed:{columns(){return[{align:"left",field:"title",label:"Title",name:"title"},{align:"left",field:"description",label:"Description",name:"description"},{align:"left",field:"start_time",label:"Start",name:"start_time"},{align:"left",field:"end_time",label:"End",name:"end_time"},{align:"center",field:"automated",label:"Automated",name:"automated"}]}},methods:{},data(){const e=this;return{merrgeFields:{end_time:{format(t){return e.$dayjs(t.start_time).format("DD/MM/YYYY h:mmA")}},start_time:{format(t){return e.$dayjs(t.start_time).format("DD/MM/YYYY h:mmA")}}},initialPagination:{descending:!1,rowsPerPage:20}}}},c=d,m=n("a6c2"),u=Object(m["a"])(c,s,r,!1,null,null,null),p=u.exports,f={name:"EventsPage",components:{OnlineEventsTableDynamic:p},created(){this.$MOnlineEvent.$get()},computed:{online_events(){return i["a"].all()}}},b=f,g=n("505d"),_=n("63c1"),h=n.n(_),v=Object(m["a"])(b,l,a,!1,null,null,null);t["default"]=v.exports;h()(v,"components",{QPage:g["a"]})}}]);