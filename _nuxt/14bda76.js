(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{328:function(t,e,r){"use strict";var n=r(329),l=r.n(n);e.a=function(img,t){var e;return img?(e=l()(img)?img:r(171)("./".concat(img)),t?'background-image: url("'.concat(e,'");'):e):null}},331:function(t,e,r){var content=r(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("8767e7c0",content,!0,{sourceMap:!1})},341:function(t,e,r){"use strict";r(331)},342:function(t,e,r){var n=r(33)(!1);n.push([t.i,".nuxt-content a{color:#00f}",""]),t.exports=n},366:function(t,e,r){"use strict";r.r(e);var n=r(2),l=(r(20),r(328)),o={layout:"pages",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("posts",n).where({ativo:{$in:["sim","Sim","si","s"]}}).fetch();case 3:return l=e.sent,e.abrupt("return",{posts:l});case 5:case"end":return e.stop()}}),e)})))()},methods:{getBackground:function(img){return Object(l.a)(img,!0)}}},c=(r(341),r(14)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("span",{staticClass:"w-35px relative top-3 left-2"},[n("NuxtLink",{staticClass:"w-35px",attrs:{to:"/"}},[n("img",{staticClass:"w-35px h-35px cursor-pointer",attrs:{src:r(170),alt:"iconeBack"}})])],1),t._v(" "),n("h2",{staticClass:"text-3xl py-20px text-center"},[t._v("Blog")]),t._v(" "),n("div",{staticClass:"flex flex-col lg:flex-row lg:flex-wrap max-w-full lg:max-w-4/5 items-center lg:items-stretch mx-auto py-5vh"},t._l(t.posts,(function(e,r){return n("div",{key:r,staticClass:"w-90vw lg:w-70vw xl:w-1/3 max-w-full md:max-w-1/2 border-2 shadow-xl rounded my-5px bg-green-50"},[n("NuxtLink",{staticClass:"flex flex-col sm:flex-row bg-[url('/assets/bg-coolab.png')]",attrs:{to:{name:"posts-slug",params:{slug:e.slug}}}},[e.imagem?n("div",{staticClass:"h-195px sm:h-auto sm:w-1/3 bg-cover bg-center",style:t.getBackground(e.imagem),attrs:{alt:"imagem serviço"}}):t._e(),t._v(" "),n("div",{staticClass:"sm:w-2/3 pl-25px py-25px rounded-3"},[n("h3",{staticClass:"pb-2 text-xl font-semibold"},[t._v(t._s(e.titulo))]),t._v(" "),n("p",[t._v(t._s(e.descricao))])])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);