(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{820:function(t,e,r){var content=r(830);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("f33f8f44",content,!0,{sourceMap:!1})},829:function(t,e,r){"use strict";var o=r(820);r.n(o).a},830:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,".container[data-v-21de5c9c]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.container .goal-box[data-v-21de5c9c]{max-width:95%;width:300px;float:left;margin:1rem;box-shadow:0 2px 8px 0 rgba(0,0,0,.1),0 6px 24px 0 rgba(0,0,0,.04);font-size:1em}.container .goal-box strong[data-v-21de5c9c]{color:#30343f;font-size:1rem}.container .goal-box .highlight[data-v-21de5c9c]{color:#30343f;font-weight:700}.container .goal-box p[data-v-21de5c9c]{font-size:.9em}.container .goal-box p i[data-v-21de5c9c]{padding-right:.5rem}.container .goal-box .control[data-v-21de5c9c]{margin:1rem 0}.container .goal-box[data-v-21de5c9c]:hover{background:rgba(56,174,204,.03);transition:all .2s cubic-bezier(0,0,.2,1)}",""])},853:function(t,e,r){"use strict";var o=r(0),n=r.n(o),c={props:["goals"],components:{},computed:{},data:function(){return{}},methods:{parseDate:function(t){return n()(t).format("ll")},parseDateTime:function(t){return n()(t).format("lll")},getPercentage:function(t){return 100*t+"%"},progressColor:function(progress){return progress<.25?"progress is-danger":progress<.5?"progress is-warning":progress<.75?"progress is-success":progress<1?"progress is-primary":"progress is-link"},getKpiText:function(t){var output="";switch(t.change){case"__2":case"_":output+="Reduce "+t.metric+" by "+t.target;break;default:output+="Have "+t.metric+" "+t.target}return output}}},l=(r(829),r(27)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},t._l(t.goals,function(e){return r("nuxt-link",{key:e.id,attrs:{to:"/goals/"+e.id+"/view/"}},[r("div",{staticClass:"box goal-box"},[r("p",[r("strong",[t._v(t._s(e.title))])]),t._v(" "),r("p",[r("span",{staticClass:"highlight"},[r("i",{staticClass:"fas fa-hourglass-start"}),t._v("Start :  ")]),t._v("  "+t._s(t.parseDate(e.start)))]),t._v(" "),r("p",[r("span",{staticClass:"highlight"},[r("i",{staticClass:"fas fa-hourglass-end"}),t._v("End :  ")]),t._v(" "+t._s(t.parseDate(e.end)))]),t._v(" "),r("div",{staticClass:"control"},[r("div",{staticClass:"tags has-addons"},[r("span",{staticClass:"tag"},[t._v("Status")]),t._v(" "),r("span",{staticClass:"tag",class:e.statusColor},[t._v(t._s(e.status))])])]),t._v(" "),r("p",[r("progress",{class:t.progressColor(e.progress),attrs:{max:"1",title:t.getPercentage(e.progress)},domProps:{value:e.progress}},[t._v("\n          "+t._s(t.getPercentage(e.progress))+"\n        ")])])])])}),1)},[],!1,null,"21de5c9c",null);e.a=component.exports},927:function(t,e,r){"use strict";r.r(e);var o={components:{GoalCards:r(853).a},computed:{orgGoals:function(){return this.$store.getters["goals/ORGANISATION_GOALS"]}},data:function(){return{}},methods:{}},n=r(27),component=Object(n.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("goal-cards",{attrs:{goals:this.orgGoals}})],1)},[],!1,null,null,null);e.default=component.exports}}]);