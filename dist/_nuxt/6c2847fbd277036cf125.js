(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{811:function(e,t,n){"use strict";var o=n(0),r=n.n(o),l={props:["sessions"],method:function(){console.log(this.sessions)},data:function(){return{columns:["kitTitle","user","buddy","completed","id"],options:{headings:{kitTitle:"Kit",user:"Assigned",buddy:"Buddy",completedgetUser:"Completed",id:""},sortable:["kitTitle","user","buddy","completed"],filterable:["kitTitle","user","buddy"]}}},methods:{parseDateTime:function(e){return e?r()(e).format("lll"):""},getUser:function(e){var t=this.$store.getters["organisation/USER"](e);return t?t.firstName+" "+t.lastName:""}}},c=n(29),component=Object(c.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-client-table",{attrs:{data:e.sessions,columns:e.columns,options:e.options},scopedSlots:e._u([{key:"user",fn:function(t){return n("span",{},[e._v("\n      "+e._s(e.getUser(t.row.user.username))+"\n    ")])}},{key:"buddy",fn:function(t){return n("span",{},[e._v("\n      "+e._s(e.getUser(t.row.buddy.username))+"\n    ")])}},{key:"completed",fn:function(t){return n("span",{},[e._v("\n      "+e._s(e.parseDateTime(t.row.completed))+"\n    ")])}},{key:"id",fn:function(t){return n("span",{},[n("nuxt-link",{attrs:{to:"/onboarding/"+t.row.id+"/view/"}},[e._v("View")])],1)}}])})],1)},[],!1,null,null,null);t.a=component.exports},889:function(e,t,n){"use strict";n.r(t);var o={components:{SessionTable:n(811).a},mounted:function(){},computed:{sessions:function(){var e=this.$store.getters["user/USER"].username;return this.$store.getters["onboarding/ASSIGNED"](e)}},data:function(){return{}}},r=n(29),component=Object(r.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"container"},[t("session-table",{attrs:{sessions:this.sessions}})],1)},[],!1,null,null,null);t.default=component.exports}}]);