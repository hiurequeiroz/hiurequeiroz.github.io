(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{324:function(t,e,l){"use strict";var r=l(325),n=l.n(r);e.a=function(img,t){var e;return img?(e=n()(img)?img:l(170)("./".concat(img)),t?'background-image: url("'.concat(e,'");'):e):null}},358:function(t,e,l){"use strict";l.r(e);var r=l(2),n=(l(22),l(324)),o={layout:"pages",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var l,r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$content,r=t.params,e.next=3,l("projects",r).where({ativo:{$in:["sim","Sim","si","s"]},tipo:{$in:["cn"]}}).fetch();case 3:return n=e.sent,e.next=6,l("projects",r).where({ativo:{$in:["sim","Sim","si","s"]},tipo:{$in:["sitio"]}}).fetch();case 6:return o=e.sent,e.abrupt("return",{cnprojects:n,sitioprojects:o});case 8:case"end":return e.stop()}}),e)})))()},methods:{getBackground:function(img){return Object(n.a)(img,!0)}}},c=l(14),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("article",[l("h2",{staticClass:"text-3xl py-20px text-center"},[t._v("Projects")]),t._v(" "),l("div",[l("h3",{staticClass:"text-2xl text-left absolute left-4 sm:left-25"},[t._v("Community Networks")]),t._v(" "),l("div",{staticClass:"flex flex-col lg:flex-row lg:flex-wrap max-w-full lg:max-w-4/5 items-center lg:items-stretch mx-auto py-5vh"},t._l(t.cnprojects,(function(e,r){return l("div",{key:r,staticClass:"w-90vw lg:w-70vw xl:w-1/3 max-w-full md:max-w-1/2 border-2 shadow-xl rounded my-5px bg-green-50"},[l("NuxtLink",{staticClass:"flex flex-col sm:flex-row",attrs:{to:{name:"projects-slug",params:{slug:e.slug}}}},[e.imagem?l("div",{staticClass:"h-195px sm:h-auto sm:w-1/3 bg-cover bg-center",style:t.getBackground(e.imagem),attrs:{alt:"imagem serviço"}}):t._e(),t._v(" "),l("div",{staticClass:"sm:w-2/3 pl-25px py-25px rounded-3"},[l("h3",{staticClass:"pb-2 text-xl font-semibold"},[t._v(t._s(e.titulo))]),t._v(" "),l("p",[t._v(t._s(e.descricao))])])])],1)})),0)]),t._v(" "),l("div",[l("h3",{staticClass:"text-2xl text-left absolute left-4 sm:left-25"},[t._v("Sitio do Astronauta")]),t._v(" "),l("div",{staticClass:"flex flex-col lg:flex-row lg:flex-wrap max-w-full lg:max-w-4/5 items-center lg:items-stretch mx-auto py-5vh"},t._l(t.sitioprojects,(function(e,r){return l("div",{key:r,staticClass:"w-90vw lg:w-70vw xl:w-1/3 max-w-full md:max-w-1/2 border-2 shadow-xl rounded my-5px bg-green-50"},[l("NuxtLink",{staticClass:"flex flex-col sm:flex-row",attrs:{to:{name:"projects-slug",params:{slug:e.slug}}}},[e.imagem?l("div",{staticClass:"h-195px sm:h-auto sm:w-1/3 bg-cover bg-center",style:t.getBackground(e.imagem),attrs:{alt:"imagem serviço"}}):t._e(),t._v(" "),l("div",{staticClass:"sm:w-2/3 pl-25px py-25px rounded-3"},[l("h3",{staticClass:"pb-2 text-xl font-semibold"},[t._v(t._s(e.titulo))]),t._v(" "),l("p",[t._v(t._s(e.descricao))])])])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);