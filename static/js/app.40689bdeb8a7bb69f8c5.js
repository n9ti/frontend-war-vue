webpackJsonp([1,2],{108:function(t,e){},109:function(t,e){},110:function(t,e){},111:function(t,e){},114:function(t,e,s){s(110);var n=s(13)(s(68),s(118),null,null);t.exports=n.exports},115:function(t,e,s){s(108);var n=s(13)(s(69),s(116),null,null);t.exports=n.exports},116:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("enemies",{attrs:{path:t.path}}),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"columns is-multiline is-mobile"},[t._l(t.stargazers,function(t){return s("div",{staticClass:"column is-2"},[s("img",{attrs:{src:t.avatar_url,alt:"",width:"100%",height:"100%"}})])}),t._v(" "),s("infinite-loading",{ref:"infiniteLoading",staticClass:"column is-12-mobile has-text-centered",attrs:{"on-infinite":t.fetchStargazers,spinner:"waveDots"}},[s("span",{slot:"no-results"},[s("h1",{staticClass:"title is-3"},[t._v("No results")])]),t._v(" "),s("span",{slot:"no-more"})])],2)],1)},staticRenderFns:[]}},117:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"box"},[s("article",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-64x64"},[s("img",{attrs:{src:t.info.avatar_url,alt:""}})])]),t._v(" "),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("strong",{staticClass:"title"},[t._v(t._s(t.info.name))])]),s("p",{staticClass:"subtitle"},[t._v(t._s(t.info.description))]),t._v(" "),s("p")])])]),t._v(" "),s("hr"),t._v(" "),s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Stars")]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.numberFormat(t.info.stargazers_count)))])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Open Issues")]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.numberFormat(t.info.open_issues_count)))])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Forks")]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.numberFormat(t.info.forks_count)))])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Pull Requests")]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.numberFormat(t.info.pull_requests_count)))])])])])])])},staticRenderFns:[]}},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("h1",{staticClass:"title is-1"},[t._v("Frontend War Room")]),t._v(" "),s("h2",{staticClass:"subtitle is-3"},[t._v("Here you can find your allies and enemies.")]),t._v(" "),s("div",{staticClass:"columns is-multiline is-tablet"},[t._m(0),t._v(" "),t._l(t.allies,function(t){return s("enemies",{key:t,staticClass:"column is-12-tablet",attrs:{path:t}})}),t._v(" "),t._m(1),t._v(" "),t._l(t.enemies,function(e){return s("enemies",{key:t.enemies,staticClass:"column is-6-tablet",attrs:{path:e}})})],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-12-tablet"},[s("h1",{staticClass:"title is-2"},[t._v("Allies")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-12-tablet"},[s("h1",{staticClass:"title is-2"},[t._v("Enemies")])])}]}},119:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("router-view")],1)])},staticRenderFns:[]}},123:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(25),a=s(47),i=s.n(a),r=s(45),o=s(46);s.n(o);n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},31:function(t,e,s){"use strict";function n(t){var e={headers:{Authorization:"token fbedabf134e561e8515b0c939d4f7b7b17f749ff"}};return d.a.get("https://api.github.com"+t,e)}function a(t){return n("/search/issues?q="+encodeURIComponent("repo:"+t+" type:pr is:open"))}function i(t){return n("/repos/"+t)}function r(t){return f.a.all([i(t),a(t)]).then(function(t){var e=l()(t,2),s=e[0],n=e[1];return{name:s.data.name,description:s.data.description,avatar_url:s.data.organization.avatar_url,stargazers_count:s.data.stargazers_count,open_issues_count:s.data.open_issues_count,forks_count:s.data.forks_count,pull_requests_count:n.data.total_count}})}function o(t){return n("/repos/"+t+"/stargazers?page="+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+"&per_page="+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:30))}var c=s(73),l=s.n(c),u=s(72),f=s.n(u),v=s(48),d=s.n(v);e.b=r,e.a=o},44:function(t,e,s){s(109);var n=s(13)(s(67),s(117),null,null);t.exports=n.exports},45:function(t,e,s){"use strict";var n=s(25),a=s(120),i=s(114),r=s.n(i),o=s(115),c=s.n(o);n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/:owner/:repo",name:"Stargazers",component:c.a}]})},46:function(t,e){},47:function(t,e,s){s(111);var n=s(13)(s(66),s(119),null,null);t.exports=n.exports},66:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},67:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(31);e.default={props:["path"],data:function(){return{info:{organization:{}}}},methods:{numberFormat:function(t){return t?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):t}},created:function(){var t=this;s.i(n.b)(this.path).then(function(e){t.info=e})}}},68:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(44),a=s.n(n);e.default={name:"Home",components:{Enemies:a.a},data:function(){return{allies:["vuejs/vue"],enemies:["facebook/react","angular/angular"]}}}},69:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(31),a=s(113),i=s.n(a),r=s(44),o=s.n(r);e.default={components:{Enemies:o.a,InfiniteLoading:i.a},computed:{path:function(){var t=this;return t.$route.params.owner+"/"+t.$route.params.repo}},data:function(){return{page:0,stargazers:[]}},methods:{fetchStargazers:function(){var t=this;t.page++,s.i(n.a)(t.path,t.page,30).then(function(e){t.stargazers=t.stargazers.concat(e.data),t.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded")}).catch(function(e,s){console.log(e.message),t.$refs.infiniteLoading.$emit("$InfiniteLoading:complete")})}},created:function(){this.fetchStargazers()}}}},[123]);
//# sourceMappingURL=app.40689bdeb8a7bb69f8c5.js.map