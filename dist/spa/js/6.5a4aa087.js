(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"5ead":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("OnlineEventsTable",{attrs:{"online-events":e.online_events}})],1)},l=[],i=n("0d87"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-table",e._g(e._b({attrs:{data:e.onlineEvents,columns:e.columns,pagination:e.initialPagination},scopedSlots:e._u([{key:"top",fn:function(){return[n("div",{staticClass:"text-h5"},[e._v("\n      Events\n    ")])]},proxy:!0},{key:"body-cell-start_time",fn:function(t){return[n("td",[e._v("\n      "+e._s(e.$dayjs(t.row.start_time).format("DD/MM/YYYY h:mmA"))+"\n    ")])]}},{key:"body-cell-end_time",fn:function(t){return[n("td",[e._v("\n      "+e._s(e.$dayjs(t.row.end_time).format("DD/MM/YYYY h:mmA"))+"\n    ")])]}},{key:"body-cell-automated",fn:function(t){return[n("td",{staticClass:"text-center"},[e._v("\n      "+e._s(t.row.automated?"yes":"no")+"\n    ")])]}}])},"q-table",e.$attrs,!1),e.$listeners))},o=[],r={props:{onlineEvents:{required:!0,type:Array}},components:{},computed:{columns(){return[{align:"left",field:"title",label:"Title",name:"title"},{align:"left",field:"description",label:"Description",name:"description"},{align:"left",field:"start_time",label:"Start",name:"start_time"},{align:"left",field:"end_time",label:"End",name:"end_time"},{align:"center",field:"automated",label:"Automated",name:"automated"}]}},methods:{},data(){return{initialPagination:{descending:!1,rowsPerPage:20}}}},d=r,c=n("a6c2"),m=n("3846"),u=n("63c1"),f=n.n(u),p=Object(c["a"])(d,s,o,!1,null,null,null),_=p.exports;f()(p,"components",{QTable:m["a"]});var v={name:"EventsPage",components:{OnlineEventsTable:_},created(){this.$MOnlineEvent.$get()},computed:{online_events(){return i["a"].all()}}},b=v,g=n("505d"),y=Object(c["a"])(b,a,l,!1,null,null,null);t["default"]=y.exports;f()(y,"components",{QPage:g["a"]})}}]);