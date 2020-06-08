(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,v=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(v.length)v.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i=[];function a(e){return s.p+"js/"+({"movie-detail":"movie-detail"}[e]||e)+"."+{"movie-detail":"aa9a5cb2"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(e);var u=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5edf":function(e,t,n){"use strict";var r=n("9ab4"),o=n("bc3a"),i=n.n(o),a=function(){function e(){this.axiosInstance=i.a.create({baseURL:"/"})}return e.prototype.getMovieList=function(e,t){return void 0===t&&(t=1),Object(r["a"])(this,void 0,void 0,(function(){var e;return Object(r["b"])(this,(function(n){switch(n.label){case 0:return[4,this.axiosInstance.get("/api/",{params:{s:"Batman",page:t}})];case 1:return e=n.sent(),[2,{result:e.data.Search,numberOfResult:e.data.totalResults}]}}))}))},e.prototype.getSpecificMovie=function(e,t){return Object(r["a"])(this,void 0,Promise,(function(){var n;return Object(r["b"])(this,(function(r){switch(r.label){case 0:return[4,this.axiosInstance.get("/api/",{params:{i:t,apikey:e}})];case 1:return n=r.sent(),[2,n.data]}}))}))},e}(),s=new a;t["a"]={movieService:s}},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/movies/tt0372784"}},[e._v("Show specific movie")])],1),n("router-view")],1)},i=[],a=(n("5c0b"),n("2877")),s={},c=Object(a["a"])(s,o,i,!1,null,null,null),u=c.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[e._v(" URL is: "+e._s(e.url)+" "),r("img",{attrs:{alt:"Batman logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Hello #TODO#, which batman movie do you want to see?"}}),r("MovieList")],1)},v=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},d=[],m=r["a"].extend({name:"HelloWorld",props:{msg:String}}),h=m,b=Object(a["a"])(h,p,d,!1,null,"5deeff83",null),g=b.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},e._l(e.movies,(function(e){return n("MovieListItem",{key:e.imdbID,attrs:{movie:e}})})),1)},_=[],y=n("9ab4"),w=n("5edf"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[e._v(" "+e._s(e.movie.Title)+" ")])},x=[],M=r["a"].extend({name:"MovieListItem",props:{movie:{type:Object}}}),L=M,S=Object(a["a"])(L,j,x,!1,null,"6eae2a6f",null),E=S.exports,k=r["a"].extend({name:"MovieList",data:function(){return{movies:[]}},created:function(){return Object(y["a"])(this,void 0,void 0,(function(){return Object(y["b"])(this,(function(e){switch(e.label){case 0:return[4,this.loadMovies()];case 1:return e.sent(),[2]}}))}))},methods:{loadMovies:function(){return Object(y["a"])(this,void 0,void 0,(function(){var e;return Object(y["b"])(this,(function(t){switch(t.label){case 0:return[4,w["a"].movieService.getMovieList("273b9080")];case 1:return e=t.sent(),this.movies=e.result,[2]}}))}))}},components:{MovieListItem:E}}),P=k,I=Object(a["a"])(P,O,_,!1,null,"13d7b29d",null),T=I.exports,H={name:"Home",components:{HelloWorld:g,MovieList:T},data(){return{url:""}},created(){this.url=Object({NODE_ENV:"production",BASE_URL:"/"}).API_BASE_URL}},R=H,C=Object(a["a"])(R,f,v,!1,null,null,null),$=C.exports;r["a"].use(l["a"]);var B=[{path:"/",name:"Home",component:$},{path:"/movies/:movieId",name:"MovieView",component:function(){return n.e("movie-detail").then(n.bind(null,"8c25"))}}],A=new l["a"]({mode:"history",base:"/",routes:B}),U=A,D=n("2f62");r["a"].use(D["a"]);var W=new D["a"].Store({state:{user:{name:"Bob Razowski",apiToken:"273b9080"}}});r["a"].config.productionTip=!1,new r["a"]({router:U,store:W,render:function(e){return e(u)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.2a99ad72.png"}});
//# sourceMappingURL=app.a192ba27.js.map