(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{263:function(t,e,r){"use strict";var n=r(264),l=r.n(n);e.a=function(img,t){var e;return img?(e=l()(img)?img:r(170)("./".concat(img)),t?'background-image: url("'.concat(e,'");'):e):null}},290:function(t,e,r){"use strict";r.r(e);var n=r(2),l=(r(22),r(263)),c={layout:"pages",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("posts",n).where({ativo:{$in:["sim","Sim","si","s"]}}).fetch();case 3:return l=e.sent,e.abrupt("return",{posts:l});case 5:case"end":return e.stop()}}),e)})))()},methods:{getBackground:function(img){return Object(l.a)(img,!0)}}},o=r(14),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("h2",{staticClass:"text-3xl py-20px text-center"},[t._v("Blog")]),t._v(" "),r("div",{staticClass:"flex flex-col lg:flex-row lg:flex-wrap max-w-full lg:max-w-4/5 items-center lg:items-stretch mx-auto py-5vh"},t._l(t.posts,(function(e,n){return r("div",{key:n,staticClass:"w-90vw lg:w-70vw xl:w-1/3 max-w-full md:max-w-1/2 border-2 shadow-xl rounded my-5px bg-green-50"},[r("NuxtLink",{staticClass:"flex flex-col sm:flex-row",attrs:{to:{name:"posts-slug",params:{slug:e.slug}}}},[e.imagem?r("div",{staticClass:"h-195px sm:h-auto sm:w-1/3 bg-cover bg-center",style:t.getBackground(e.imagem),attrs:{alt:"imagem serviço"}}):t._e(),t._v(" "),r("div",{staticClass:"sm:w-2/3 pl-25px py-25px rounded-3"},[r("h3",{staticClass:"pb-2 text-xl font-semibold"},[t._v(t._s(e.titulo))]),t._v(" "),r("p",[t._v(t._s(e.descricao))])])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);