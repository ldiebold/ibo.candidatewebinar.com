(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"84ea":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("CandidatesTable",{attrs:{users:e.users}})],1)},l=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-table",e._g(e._b({attrs:{data:e.users,columns:e.columns},scopedSlots:e._u([{key:"top",fn:function(){return[n("div",{staticClass:"text-h6"},[e._v("Candidates")]),n("q-space"),n("CreateCandidateButton",{attrs:{round:"",icon:"add"}})]},proxy:!0},{key:"body-cell-online_events",fn:function(t){return[n("td",{staticClass:"text-left"},[e._l(e.getOnlineEventUsers(t.row),(function(e){return n("OnlineEventUserChip",{key:e.id,attrs:{"online-event-user":e}})})),n("AttachOnlineEventToUserButton",{attrs:{label:"Attach","no-caps":"",rounded:"",unelevated:"",color:"primary",dense:"",padding:"xs sm",user:t.row}})],2)]}},{key:"body-cell-edit",fn:function(e){return[n("td",{staticClass:"text-center"},[n("UpdateCandidateButton",{attrs:{flat:"",icon:"edit",round:"",dense:"",color:"blue-4",candidate:e.row}})],1)]}},{key:"body-cell-delete",fn:function(e){return[n("td",{staticClass:"text-center"},[n("MDeleteButton",{attrs:{model:e.row,"model-name":"User",flat:"",icon:"delete",round:"",dense:"",color:"red-4"}})],1)]}}])},"q-table",e.$attrs,!1),e.$listeners))},r=[],i=n("87a6"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BDialogButton",e._g(e._b({ref:"dialogButton"},"BDialogButton",e.$attrs,!1),e.$listeners),[n("q-card-section",[n("CreateCandidateForm",{staticStyle:{"min-width":"250px"},on:{success:function(){return e.$refs.dialogButton.hide()}}})],1)],1)},c=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._g(e._b({},"div",e.$attrs,!1),e.$listeners),[n("q-input",{staticClass:"q-mb-md",attrs:{filled:"",label:"Name",hint:"(Full Name is Best)"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),n("q-input",{staticClass:"q-mb-md",attrs:{filled:"",label:"Email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),n("OnlineEventSelect",{attrs:{filled:"","option-value":"id","emit-value":"","map-options":"",multiple:"","menu-anchor":"top left","menu-self":"bottom left",label:"Information Session",hint:"Please double check the time is right!"},model:{value:e.form.event_ids,callback:function(t){e.$set(e.form,"event_ids",t)},expression:"form.event_ids"}}),n("br"),n("q-btn",{attrs:{label:"Create",color:"primary",loading:e.creating},on:{click:e.handleSubmit}})],1)},u=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-select",e._g(e._b({attrs:{options:e.events,"option-label":e.getLabel,loading:e.fetching}},"q-select",e.$attrs,!1),e.$listeners))},h=[],p={props:{},components:{},computed:{events(){return this.$MOnlineEvent.all()}},mounted(){this.events.length||(this.fetching=!0,this.$MOnlineEvent.$get().then((e=>{this.fetching=!1})).catch((e=>{this.fetching=!1,this.$q.notify({color:"red",message:e.message})})))},methods:{getLabel(e){const t=this.$dayjs(e.start_time).format("ddd DD MMM - hh:ss A");return`${e.title} (${t})`}},data(){return{fetching:!1}}},f=p,v=n("a6c2"),g=n("f636"),b=n("63c1"),_=n.n(b),$=Object(v["a"])(f,m,h,!1,null,null,null),E=$.exports;_()($,"components",{QSelect:g["a"]});var q={props:{},components:{OnlineEventSelect:E},computed:{},mounted(){},methods:{showSuccessDialog(e){const t=e.name.split(" ")[0];this.$q.dialog({title:`An account has been created for ${t}!`,message:`<p>${t} has also been sent an <strong>email</strong> with their <strong>username</strong> and <strong>password</strong>.</p>\n        <p>Shoot 'em a quick <strong>message/call</strong> to confirm that they...</p>\n          <ul>\n            <li><strong>Received</strong> the email</li>\n            <li>Can <strong>login</strong> okay</li>\n          </ul>\n        👍👏🔷`,html:!0})},generateRandomPassword(){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t=10;this.form.password=Array(t).fill(e).map((function(e){return e[Math.floor(Math.random()*e.length)]})).join("")},handleSubmit(){this.creating=!0,this.$MUser.$create(this.form).then(this.handleSuccess).catch(this.handleError)},handleSuccess(e){this.creating=!1,this.$emit("input",!1),this.$emit("success",e),this.showSuccessDialog(e.data)},handleError(e){this.creating=!1,this.$emit(e.message)}},data(){return{passwordVisible:!1,creating:!1,form:{name:null,email:null,role:"candidate",event_ids:[]}}}},C=q,B=n("a3be"),O=n("19dc"),y=n("ef9c"),S=Object(v["a"])(C,d,u,!1,null,null,null),w=S.exports;_()(S,"components",{QInput:B["a"],QIcon:O["a"],QBtn:y["a"]});var x={props:{},components:{BDialogButton:i["a"],CreateCandidateForm:w},computed:{},methods:{},data(){return{}}},U=x,k=n("7006"),M=Object(v["a"])(U,o,c,!1,null,null,null),j=M.exports;_()(M,"components",{QCardSection:k["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BDialogButton",e._g(e._b({ref:"dialogButton"},"BDialogButton",e.$attrs,!1),e.$listeners),[n("q-card-section",[n("UpdateCandidateForm",{attrs:{candidate:e.candidate},on:{success:function(t){return e.$refs.dialogButton.hide()}}})],1)],1)},Q=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-input",{staticClass:"q-mb-md",attrs:{filled:"",label:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),n("q-input",{staticClass:"q-mb-md",attrs:{filled:"",label:"Email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),n("br"),n("q-btn",{attrs:{label:"Update",color:"primary"},on:{click:e.handleSubmit}})],1)},R=[],P=n("8ed0"),F={props:{candidate:{required:!0,type:P["User"]}},components:{},computed:{},methods:{generateRandomPassword(){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t=10;this.form.password=Array(t).fill(e).map((function(e){return e[Math.floor(Math.random()*e.length)]})).join("")},handleSubmit(){this.candidate.$update(this.form).then(this.handleSuccess).catch(this.handleError)},handleSuccess(e){this.$emit("input",!1),this.$emit("success",e)},handleError(e){console.log(e)}},created(){Object.keys(this.form).forEach((e=>{this.candidate[e]&&(this.form[e]=this.candidate[e])}))},data(){return{form:{name:null,email:null}}}},T=F,I=Object(v["a"])(T,A,R,!1,null,null,null),N=I.exports;_()(I,"components",{QInput:B["a"],QBtn:y["a"]});var J={props:{candidate:{required:!0,type:Object}},components:{BDialogButton:i["a"],UpdateCandidateForm:N},computed:{},methods:{},data(){return{}}},L=J,V=Object(v["a"])(L,D,Q,!1,null,null,null),z=V.exports;_()(V,"components",{QCardSection:k["a"]});var G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BDialogButton",e._g(e._b({},"BDialogButton",e.$attrs,!1),e.$listeners),[n("q-card-section",[n("AttachOnlineEventToUserForm",{attrs:{user:e.user}})],1)],1)},H=[],K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._g(e._b({},"div",e.$attrs,!1),e.$listeners),[n("OnlineEventSelect",{staticStyle:{"min-width":"250px"},attrs:{filled:"",label:"event","option-value":"id","emit-value":"","map-options":""},model:{value:e.online_event_id,callback:function(t){e.online_event_id=t},expression:"online_event_id"}}),n("q-btn",{staticClass:"q-mt-md",attrs:{label:"attach"},on:{click:e.handleAttachClicked}})],1)},W=[],X={props:{user:{required:!0,type:Object}},components:{OnlineEventSelect:E},computed:{},methods:{handleAttachClicked(){this.$MOnlineEventUser.$create({user_id:this.user.id,online_event_id:this.online_event_id})}},data(){return{online_event_id:null}}},Y=X,Z=Object(v["a"])(Y,K,W,!1,null,null,null),ee=Z.exports;_()(Z,"components",{QBtn:y["a"]});var te={props:{user:{required:!0,type:Object}},components:{BDialogButton:i["a"],AttachOnlineEventToUserForm:ee},computed:{},methods:{},data(){return{}}},ne=te,ae=Object(v["a"])(ne,G,H,!1,null,null,null),le=ae.exports;_()(ae,"components",{QCardSection:k["a"]});var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-chip",{attrs:{label:e.label,removable:""},on:{remove:e.handleRemove}},[e.removing?n("q-spinner",{staticClass:"q-ml-sm",attrs:{color:"white"}}):e._e()],1)},re=[],ie=n("8d35"),oe=n.n(ie),ce={props:{onlineEventUser:{required:!0,type:Object}},components:{},computed:{onlineEvent(){return this.$MOnlineEvent.find(this.onlineEventUser.online_event_id)},label(){const e=oe()(this.onlineEvent.start_time).format("ddd, DD MMM");return`${this.onlineEvent.title} - (${e})`}},methods:{handleRemove(){this.removing=!0,this.onlineEventUser.$delete().then(this.handleRemoveSuccess).catch(this.handleRemoveError)},handleRemoveSuccess(){this.removing=!1},handleRemoveError(e){this.removing=!1,this.$emit({color:"red",message:e.message})}},data(){return{removing:!1}}},de=ce,ue=n("837a"),me=n("c99e"),he=Object(v["a"])(de,se,re,!1,null,null,null),pe=he.exports;_()(he,"components",{QChip:ue["a"],QSpinner:me["a"]});var fe={props:{users:{required:!0,type:Array}},components:{MDeleteButton:i["b"],CreateCandidateButton:j,UpdateCandidateButton:z,AttachOnlineEventToUserButton:le,OnlineEventUserChip:pe},computed:{columns(){return[{align:"left",field:"name",label:"Name",name:"name"},{align:"left",field:"email",label:"Email",name:"email"},{align:"left",field:"role",label:"Role",name:"role"},{align:"left",field:"online_events",label:"Online Events",name:"online_events"},{align:"center",field:"edit",label:"Edit",name:"edit"},{align:"center",field:"delete",label:"Delete",name:"delete"}]}},methods:{getOnlineEventUsers(e){return this.$MOnlineEventUser.query().where("user_id",e.id).all()}},data(){return{}}},ve=fe,ge=n("3846"),be=n("dc01"),_e=Object(v["a"])(ve,s,r,!1,null,null,null),$e=_e.exports;_()(_e,"components",{QTable:ge["a"],QSpace:be["a"]});var Ee={name:"UsersPage",components:{CandidatesTable:$e},created(){this.$MUser.$candidates({with:["online_events"]}),this.$MOnlineEvent.$get()},data(){return{initialPagination:{rowsPerPage:50}}},computed:{users(){return this.$MUser.query().where("role","candidate").get()}}},qe=Ee,Ce=n("505d"),Be=Object(v["a"])(qe,a,l,!1,null,null,null);t["default"]=Be.exports;_()(Be,"components",{QPage:Ce["a"]})}}]);