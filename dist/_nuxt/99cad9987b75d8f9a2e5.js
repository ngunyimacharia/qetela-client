(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{804:function(t,e,n){var content=n(807);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("d84cfed0",content,!0,{sourceMap:!1})},806:function(t,e,n){"use strict";var o=n(804);n.n(o).a},807:function(t,e,n){(t.exports=n(52)(!1)).push([t.i,".hero{background:#eff0f1;color:#011638;padding:.5rem 0!important;margin-bottom:2rem;border-bottom:1px solid #dbdfe1}.hero .hero-body{padding:0}.hero .hero-body h3{margin:.5rem 0 3rem!important}.hero .hero-body h6{margin:1rem 0!important}",""])},813:function(t,e,n){"use strict";var o={props:["title","description","heroNavItems"],data:function(){return{}},methods:{menuActive:function(t){if($nuxt.$route.path===t)return"is-active"}}},r=(n(806),n(29)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h3",{staticClass:"title is-4"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("p",{staticClass:"subtitle is-6"},[t._v("\n        "+t._s(t.description)+"\n      ")]),t._v(" "),n("div",{staticClass:"tabs is-centered is-boxed"},[n("ul",t._l(t.heroNavItems,function(menu){return n("li",{key:menu.target,class:t.menuActive(menu.target)},[n("nuxt-link",{attrs:{to:menu.target}},[t._v("\n              "+t._s(menu.name)+"\n            ")])],1)}),0)])])])])},[],!1,null,null,null);e.a=component.exports},868:function(t,e,n){"use strict";n.r(e);n(67);var o={layout:"default",components:{HeroNav:n(813).a},asyncData:function(t){t.route.query.login&&(t.store.dispatch("nuxtClientInit",t),t.app.router.replace("/organisation"))},computed:{organisation:function(){return this.$store.getters["organisation/ORGANISATION"]}},data:function(){return{heroNavItems:[{name:"General",target:"/organisation",active:!0},{name:"Teams",target:"/organisation/teams"},{name:"Positions",target:"/organisation/positions"},{name:"Members",target:"/organisation/members"}]}},methods:{menuActive:function(t){if($nuxt.$route.path===t)return"is-active"}}},r=n(29),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"organisation"}},[t.organisation?n("section",[n("hero-nav",{attrs:{title:t.organisation.name,description:"Manage your organisation details, levels, teams, positions and users",heroNavItems:t.heroNavItems}})],1):t._e(),t._v(" "),t.organisation?n("section",[n("NuxtChild",{attrs:{organisation:t.organisation}})],1):t._e()])},[],!1,null,null,null);e.default=component.exports}}]);