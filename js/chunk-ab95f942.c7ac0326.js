(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab95f942"],{"159b":function(t,e,r){var a=r("da84"),n=r("fdbc"),i=r("17c2"),s=r("9112");for(var o in n){var c=a[o],u=c&&c.prototype;if(u&&u.forEach!==i)try{s(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,n=r("a640"),i=n("forEach");t.exports=i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var a=r("d039"),n=r("b622"),i=r("2d00"),s=n("species");t.exports=function(t){return i>=51||!a((function(){var e=[],r=e.constructor={};return r[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").filter,i=r("1dde"),s=i("filter");a({target:"Array",proto:!0,forced:!s},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5497:function(t,e,r){},"65f0":function(t,e,r){var a=r("861d"),n=r("e8b5"),i=r("b622"),s=i("species");t.exports=function(t,e){var r;return n(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?a(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7120:function(t,e,r){"use strict";r("5497")},"9d46":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Attractions"},[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("div",{attrs:{id:"header"}},[r("header",[r("h1",[t._v("高雄旅遊資訊網")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.currentAttraction,expression:"currentAttraction"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentAttraction=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("請選擇地區")]),t._l(t.area,(function(e){return r("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e))])}))],2)])]),r("div",{attrs:{id:"content"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"result"},t._l(t.filterData[t.currentPage],(function(e){return r("div",{key:e.Id,staticClass:"card"},[r("div",{staticClass:"card-top",style:"background-image:url("+e.Picture1+")"},[r("h2",[t._v(t._s(e.Name))]),r("h3",[t._v(t._s(e.Zone))])]),r("div",{staticClass:"card-text"},[r("p",[t._v(t._s(e.Opentime))]),r("p",[t._v(t._s(e.Add))]),r("a",{attrs:{href:"tel:"+e.Tel}},[t._v(t._s(e.Tel))])])])})),0),r("ul",{staticClass:"pagination"},[t._m(0),t._l(t.filterData.length,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:t.currentPage===e-1}},[r("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(r){r.preventDefault(),t.currentPage=e-1}}},[t._v(t._s(e))])])})),t._m(1)],2)])]),r("p",{staticClass:"source"},[t._v("資料來源：高雄市政府")]),r("div",{staticClass:"goTop",class:{show:t.show},on:{click:function(e){return t.goTop()}}},[r("i",{staticClass:"fas fa-chevron-up"}),r("small",[t._v("TOP")])])],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"page-item"},[r("a",{staticClass:"page-link",attrs:{href:"#"}},[r("i",{staticClass:"fas fa-caret-left"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"page-item"},[r("a",{staticClass:"page-link",attrs:{href:"#"}},[r("i",{staticClass:"fas fa-caret-right"})])])}],i=(r("4de4"),r("159b"),{data:function(){return{isLoading:!1,attractions:[],area:[],currentPage:0,currentAttraction:"",show:!1}},created:function(){this.getData(),window.addEventListener("scroll",this.showGotop)},methods:{getData:function(){var t=this,e="https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json";this.$http.get(e).then((function(e){t.attractions=e.data.result.records,t.attractions.forEach((function(e){-1===t.area.indexOf(e.Zone)&&t.area.push(e.Zone)}))}))},showGotop:function(){window.pageYOffset>400?this.show=!0:this.show=!1},goTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},computed:{filterData:function(){var t=this,e=[];e=""!==this.currentAttraction?this.attractions.filter((function(e){return e.Zone===t.currentAttraction})):this.attractions;var r=[];return e.forEach((function(t,e){e%10===0&&r.push([]);var a=parseInt(e/10);r[a].push(t)})),r}}}),s=i,o=(r("7120"),r("2877")),c=Object(o["a"])(s,a,n,!1,null,null,null);e["default"]=c.exports},a640:function(t,e,r){"use strict";var a=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&a((function(){r.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,r){var a=r("0366"),n=r("44ad"),i=r("7b0b"),s=r("50c4"),o=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,f=6==t,d=7==t,h=5==t||f;return function(v,p,g,m){for(var _,L,C=i(v),w=n(C),b=a(p,g,3),y=s(w.length),T=0,S=m||o,A=e?S(v,y):r||d?S(v,0):void 0;y>T;T++)if((h||T in w)&&(_=w[T],L=b(_,T,C),t))if(e)A[T]=L;else if(L)switch(t){case 3:return!0;case 5:return _;case 6:return T;case 2:c.call(A,_)}else switch(t){case 4:return!1;case 7:c.call(A,_)}return f?-1:u||l?l:A}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},e8b5:function(t,e,r){var a=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-ab95f942.c7ac0326.js.map