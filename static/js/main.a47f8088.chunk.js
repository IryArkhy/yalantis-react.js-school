(this["webpackJsonpyalantis-reactjs-school"]=this["webpackJsonpyalantis-reactjs-school"]||[]).push([[0],{44:function(e,t,a){e.exports={usersList:"list_usersList__1Qdb8"}},47:function(e,t,a){e.exports={layout:"layout_layout__3uHI-"}},53:function(e,t,a){e.exports=a(81)},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),u=a(8),s=a(112),l=a(111),i=a(108),m=a(109),p=a(110),d=a(46),b=a.n(d),f=a(3),y=["January","February","March","April","May","June","July","August","September","October","November","December"],h=a(44),g=a.n(h),v=a(104),E=Object(v.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)},summaryGray:{backgroundColor:"rgb(174, 187, 193)"},summaryBlue:{backgroundColor:"rgb(164, 224, 252)"},summaryGreen:{backgroundColor:"rgb(164, 252, 189)"},summaryRed:{backgroundColor:"rgb(252, 164, 164)"}}}));function O(e){var t=e.users,a=e.userCounter,o=Object(n.useState)(null),c=Object(u.a)(o,2),d=c[0],h=c[1],v=Object(n.useState)(0),O=Object(u.a)(v,2),j=O[0],k=O[1],N=function(e){var t=e.currentTarget;h(t),k(t.id)},w=function(){h(null)},C=Boolean(d),x=E();return r.a.createElement(r.a.Fragment,null,y.map((function(e,n){return r.a.createElement("div",{key:e,id:e,className:x.root,"aria-owns":C?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:N,onMouseLeave:w},r.a.createElement(s.a,{classes:{root:Object(f.a)(a[n]<=2&&x.summaryGray,a[n]>=3&&x.summaryBlue,a[n]>=7&&x.summaryGreen,a[n]>=11&&x.summaryRed)}},r.a.createElement(l.a,{expandIcon:r.a.createElement(b.a,null),"aria-controls":"panel-".concat(e,"-content"),id:"panel-".concat(e,"-header")},r.a.createElement(i.a,{className:x.heading},e)),r.a.createElement(m.a,null,r.a.createElement("ol",{className:g.a.usersList},function(e){return t.filter((function(t){var a=t.dob;return new Date(a).getMonth()===e}))}(n).map((function(e){var t=e.id,a=e.firstName,n=e.lastName;return r.a.createElement("li",{key:t},"".concat(a," ").concat(n))}))))))})),r.a.createElement(p.a,{id:"mouse-over-popover",className:x.popover,classes:{paper:x.paper},open:C,anchorEl:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:w,disableRestoreFocus:!0},r.a.createElement(i.a,null,"Users born in ".concat(j,": ").concat(a[y.indexOf(j)]))))}var j=a(47),k=a.n(j),N=function(e){var t=e.children;return r.a.createElement("div",{className:k.a.layout},t)},w=a(48),C=a.n(w).a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users"),x=(a(80),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)({}),s=Object(u.a)(c,2),l=s[0],i=s[1];return Object(n.useEffect)((function(){o([]),C.then((function(e){o(e.data),i(e.data.reduce((function(e,t){var a=t.dob,n=new Date(a).getMonth();return e[n]?(e[n]+=1,e):(e[n]=1,e)}),{}))})).catch((function(e){return new Error(e)}))}),[]),r.a.createElement(N,null,r.a.createElement("h1",null,"Users"),r.a.createElement(O,{users:a,userCounter:l}))});c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.a47f8088.chunk.js.map