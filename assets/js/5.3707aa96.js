(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{375:function(t,e,r){"use strict";var n=r(8),a=r(5),s=r(208),i=r(23),c=r(7),o=r(35),u=r(380),l=r(55),f=r(2),p=r(36),h=r(79).f,v=r(34).f,g=r(9).f,m=r(379).trim,d=a.Number,w=d.prototype,b="Number"==o(p(w)),_=function(t){var e,r,n,a,s,i,c,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=m(u)).charCodeAt(0))||45===e){if(88===(r=u.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(i=(s=u.slice(2)).length,c=0;c<i;c++)if((o=s.charCodeAt(c))<48||o>a)return NaN;return parseInt(s,n)}return+u};if(s("Number",!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var N,C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(b?f((function(){w.valueOf.call(r)})):"Number"!=o(r))?u(new d(_(e)),r,C):_(e)},y=n?h(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;y.length>E;E++)c(d,N=y[E])&&!c(C,N)&&g(C,N,v(d,N));C.prototype=w,w.constructor=C,i(a,"Number",C)}},376:function(t,e,r){},377:function(t,e,r){},378:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},379:function(t,e,r){var n=r(27),a="["+r(378)+"]",s=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(i,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},380:function(t,e,r){var n=r(6),a=r(115);t.exports=function(t,e,r){var s,i;return a&&"function"==typeof(s=e.constructor)&&s!==r&&n(i=s.prototype)&&i!==r.prototype&&a(t,i),t}},386:function(t,e,r){"use strict";var n=r(376);r.n(n).a},387:function(t,e,r){"use strict";var n=r(377);r.n(n).a},388:function(t,e,r){"use strict";r(210),r(113),r(207),r(375),r(116),r(114);var n=r(37),a=function(t){var e=Object.keys(t),r=!0;return e.forEach((function(t){["span","offset"].includes(t)||(r=!1)})),r},s={name:"MangoCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:a},narrowPc:{type:Object,validator:a},pc:{type:Object,validator:a},widePc:{type:Object,validator:a}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var r=[];return t.span&&r.push("col-".concat(e).concat(t.span)),t.offset&&r.push("offset-".concat(e).concat(t.offset)),r}},computed:{colClass:function(){var t=this.span,e=this.offset,r=this.ipad,a=this.narrowPc,s=this.pc,i=this.widePc,c=this.createClasses;return[].concat(Object(n.a)(c({span:t,offset:e})),Object(n.a)(c(r,"ipad-")),Object(n.a)(c(a,"narrow-pc-")),Object(n.a)(c(s,"pc-")),Object(n.a)(c(i,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},i=(r(386),r(54)),c=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"265f7e9b",null);e.a=c.exports},389:function(t,e,r){"use strict";r(113),r(207),r(375),r(114);var n={name:"MangoRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].includes(t)}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(e){e.gutter=t.gutter}))}},a=(r(387),r(54)),s=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"7f2fc2ff",null);e.a=s.exports},410:function(t,e,r){},469:function(t,e,r){"use strict";var n=r(410);r.n(n).a},498:function(t,e,r){"use strict";r.r(e);var n=r(388),a=r(389),s={components:{"m-col":n.a,"m-row":a.a}},i=(r(469),r(54)),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"align-wrapper"},[r("m-row",{staticClass:"row",attrs:{align:"left"}},[r("m-col",{staticClass:"item",attrs:{span:"8"}},[t._v("left")]),t._v(" "),r("m-col",{staticClass:"item",attrs:{span:"8"}},[t._v("left")])],1),t._v(" "),r("m-row",{staticClass:"row",attrs:{align:"center"}},[r("m-col",{staticClass:"item",attrs:{span:"8"}},[t._v("center")]),t._v(" "),r("m-col",{staticClass:"item",attrs:{span:"8"}},[t._v("center")])],1),t._v(" "),r("m-row",{staticClass:"row",attrs:{align:"right"}},[r("m-col",{staticClass:"item",attrs:{span:"8"}},[t._v("right")]),t._v(" "),r("m-col",{staticClass:"item",attrs:{span:"8"}},[t._v("right")])],1)],1)}),[],!1,null,"744a8f76",null);e.default=c.exports}}]);