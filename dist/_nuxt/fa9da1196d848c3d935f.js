(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{751:function(t,e,r){var content=r(758);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(47).default)("4bc44570",content,!0,{sourceMap:!1})},757:function(t,e,r){"use strict";var n=r(751);r.n(n).a},758:function(t,e,r){(t.exports=r(46)(!1)).push([t.i,"#teams .leveld{margin:2rem 0}",""])},766:function(t,e,r){"use strict";r.r(e);r(60);function n(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){var e=[],r=!0,n=!1,l=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(e.push(o.value),!i||e.length!==i);r=!0);}catch(t){n=!0,l=t}finally{try{r||null==c.return||c.return()}finally{if(n)throw l}}return e}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r(37),r(38),r(30);var l={props:["organisation"],data:function(){return{levels:[],columns:["name","parent","active","id"],options:{headings:{name:"Name",parent:"Parent",active:"Active",id:""},sortable:["name","parent","active"],filterable:["name","parent"]}}},mounted:function(){var t=[],e=[],r=!0,l=!1,o=void 0;try{for(var c,v=this.organisation.levelSet[Symbol.iterator]();!(r=(c=v.next()).done);r=!0){var f=c.value,d={name:f.label,teams:[]},m=!0,y=!1,h=void 0;try{for(var w,_=f.teamSet[Symbol.iterator]();!(m=(w=_.next()).done);m=!0){var S=w.value,x=JSON.parse(JSON.stringify(S));x.active?x.active="Active":x.active="",e[x.id]=x,d.teams.push(x)}}catch(t){y=!0,h=t}finally{try{m||null==_.return||_.return()}finally{if(y)throw h}}t.push(d)}}catch(t){l=!0,o=t}finally{try{r||null==v.return||v.return()}finally{if(l)throw o}}for(var k=0;k<t.length;k++){var A=t[k],J=!0,C=!1,E=void 0;try{for(var N,O=A.teams.entries()[Symbol.iterator]();!(J=(N=O.next()).done);J=!0){var P=n(N.value,2),j=P[0],I=P[1];I.parent&&(A.teams[j].parent=e[I.parent.id].name)}}catch(t){C=!0,E=t}finally{try{J||null==O.return||O.return()}finally{if(C)throw E}}}this.levels=t},methods:{getParent:function(t){var e=!0,r=!1,n=void 0;try{for(var l,o=this.teams[Symbol.iterator]();!(e=(l=o.next()).done);e=!0){var c=l.value;if(c.id===t.id)return c.name}}catch(t){r=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw n}}}}},o=(r(757),r(25)),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container",attrs:{id:"teams"}},t._l(t.levels,function(e){return r("div",{key:e.id,staticClass:"leveld"},[r("h4",{staticClass:"title is-4 has-text-centered"},[t._v(t._s(e.name))]),t._v(" "),r("v-client-table",{attrs:{data:e.teams,columns:t.columns,options:t.options},scopedSlots:t._u([{key:"id",fn:function(e){return r("span",{},[r("a",{attrs:{target:"_blank",href:"/organisation/team/view/"+e.row.id}},[t._v("View")]),t._v(" | \n        "),r("a",{attrs:{target:"_blank",href:"/organisation/team/edit/"+e.row.id}},[t._v("Edit")])])}}],null,!0)})],1)}),0)},[],!1,null,null,null);e.default=component.exports}}]);