(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{220:function(e,t,r){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},221:function(e,t,r){e.exports=r.p+"img/bg-207659.198540c.jpg"},223:function(e,t,r){var content=r(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("3f78e25a",content,!0,{sourceMap:!1})},227:function(e,t,r){"use strict";r.r(t);r(31),r(106),r(30);var n=r(5),c={data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=3;break}return t.articles=[],r.abrupt("return");case 3:return r.next=5,t.$content("articlesNDI").search(e).fetch();case 5:t.articles=r.sent,console.log(t.articles.length);case 7:case"end":return r.stop()}}),r)})))()}}},l=r(29),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"off",placeholder:"Cerca e Ricerca ..."},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._v(" "),e.articles.length?r("ul",{staticClass:"list pl0"},e._l(e.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black",attrs:{to:{name:"blogNDI-slug",params:{slug:article.slug}}}},[e._v("\n        "+e._s(article.titolo)+" di "+e._s(article.autore)+"\n      ")])],1)})),0):e._e()])}),[],!1,null,null,null);t.default=component.exports},232:function(e,t,r){"use strict";r(223)},233:function(e,t,r){var n=r(37),c=r(220),l=r(221),o=n(!1),f=c(l);o.push([e.i,"#imgNDI{background-image:url("+f+")}",""]),e.exports=o},253:function(e,t,r){"use strict";r.r(t);r(30);var n=r(5),c={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("articlesNDI").sortBy("titolo","asc").fetch();case 3:return n=t.sent,t.abrupt("return",{articles:n});case 5:case"end":return t.stop()}}),t)})))()}},l=(r(232),r(29)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nav",{staticClass:"flex justify-between bg-black bb b--white-10"},[r("NuxtLink",{staticClass:"link white hover-green no-underline flex items-center pa3",attrs:{href:"",title:"Home",to:"/"}},[e._v("HOME")]),e._v(" "),r("h1",{staticClass:"baskerville f1 f-headline-l fw1 i "},[e._v("Nel Dominio dell'Incerto")]),e._v(" "),r("div",{staticClass:"flex-grow pa3 flex items-center"},[r("AppSearchInputNDI",{staticClass:"f6 link green dib mr3 mr4-ns"})],1)],1),e._v(" "),r("div",{staticClass:"center repeat",attrs:{id:"imgNDI"}},[r("div",{staticClass:"flex flex-wrap justify-around"},e._l(e.articles,(function(article){return r("a",{key:article.slug},[r("NuxtLink",{staticClass:"link underline-hover purple",attrs:{to:{name:"blogNDI-slug",params:{slug:article.slug}}}},[r("div",{staticClass:"w-100 pa3 ma1 br3 bg-black grow"},[article.video?r("embed",{attrs:{type:"video/webm",src:article.video,width:"250",height:"200"}}):r("img",{staticClass:"db bg-center br3 cover",staticStyle:{},attrs:{src:article.img}}),e._v(" "),r("h3",{staticClass:"f5 f5-ns mt2 mb0 white-90 tc"},[e._v(e._s(article.titolo))]),e._v(" "),r("h3",{staticClass:"f6 f5 fw4 mt2 white-60 tc"},[e._v(e._s(article.autore))])])])],1)})),0)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppSearchInputNDI:r(227).default})}}]);