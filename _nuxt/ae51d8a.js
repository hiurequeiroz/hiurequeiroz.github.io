(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{240:function(n,e,t){n.exports=t.p+"img/blog.146efa4.png"},241:function(n,e,t){n.exports=t.p+"img/communitynetworks.dd64cbf.png"},242:function(n,e,t){n.exports=t.p+"img/perfil-colors.ed7a5e3.png"},243:function(n,e,t){"use strict";var o=t(270),r=t.n(o);e.a=function(img,n){var e;return img?(e=r()(img)?img:t(244)("./".concat(img)),n?'background-image: url("'.concat(e,'");'):e):null}},244:function(n,e,t){var map={"./apps.svg":173,"./archivebox.png":245,"./arvore.svg":174,"./baner2.png":246,"./banner.jpg":247,"./blog.png":240,"./cadvisor.png":248,"./calibre.png":249,"./cc.svg":175,"./chat.svg":250,"./code.png":251,"./communitynetworks.png":241,"./comunidade.svg":171,"./css/main.css":169,"./etherpad.png":252,"./filebrowser.svg":253,"./final-bread.jpg":254,"./home.svg":255,"./icone.png":256,"./icone2.png":257,"./icone3.png":258,"./janeraka.png":259,"./janeraka_cover.jpg":260,"./jellyfin.png":261,"./kiwix.png":262,"./kolibri.png":263,"./mapa.svg":172,"./meshtastic.png":264,"./perfil-colors.png":242,"./pihole.png":265,"./resiliosync.png":266,"./speedtest.png":267,"./tech-heart.svg":170,"./torre.jpg":268,"./youtubedl.png":269};function o(n){var e=r(n);return t(e)}function r(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=244},245:function(n,e,t){n.exports=t.p+"img/archivebox.38a923a.png"},246:function(n,e,t){n.exports=t.p+"img/baner2.eac0990.png"},247:function(n,e,t){n.exports=t.p+"img/banner.54a748c.jpg"},248:function(n,e,t){n.exports=t.p+"img/cadvisor.16fd3e9.png"},249:function(n,e,t){n.exports=t.p+"img/calibre.4c7ef99.png"},250:function(n,e,t){n.exports=t.p+"d77e4f81ffb127eb727578b6b04eb5b2.svg"},251:function(n,e,t){n.exports=t.p+"img/code.8d3a8bf.png"},252:function(n,e,t){n.exports=t.p+"img/etherpad.501fb4a.png"},253:function(n,e,t){n.exports=t.p+"18b3feac23683a530f16fbec069259fc.svg"},254:function(n,e,t){n.exports=t.p+"img/final-bread.e3460c8.jpg"},255:function(n,e,t){n.exports=t.p+"c123bf0064f23dfee7808a3374be8955.svg"},256:function(n,e,t){n.exports=t.p+"img/icone.77b893d.png"},257:function(n,e,t){n.exports=t.p+"img/icone2.38ad5b6.png"},258:function(n,e,t){n.exports=t.p+"img/icone3.5188379.png"},259:function(n,e,t){n.exports=t.p+"img/janeraka.316efbb.png"},260:function(n,e,t){n.exports=t.p+"img/janeraka_cover.2ca6274.jpg"},261:function(n,e,t){n.exports=t.p+"img/jellyfin.0583e90.png"},262:function(n,e,t){n.exports=t.p+"img/kiwix.f5dd076.png"},263:function(n,e,t){n.exports=t.p+"img/kolibri.80cfd2b.png"},264:function(n,e,t){n.exports=t.p+"img/meshtastic.3605620.png"},265:function(n,e,t){n.exports=t.p+"img/pihole.647f306.png"},266:function(n,e,t){n.exports=t.p+"img/resiliosync.63c5613.png"},267:function(n,e,t){n.exports=t.p+"img/speedtest.27fd85f.png"},268:function(n,e,t){n.exports=t.p+"img/torre.bdf5780.jpg"},269:function(n,e,t){n.exports=t.p+"img/youtubedl.882841e.png"},290:function(n,e,t){"use strict";t.r(e);var o=t(2),r=(t(25),t(243)),c={layout:"pages",asyncData:function(n){return Object(o.a)(regeneratorRuntime.mark((function e(){var t,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.$content,e.next=3,t("apps").where({ativo:{$in:["sim","Sim","si","s"]}}).fetch();case 3:return o=e.sent,e.abrupt("return",{apps:o});case 5:case"end":return e.stop()}}),e)})))()},methods:{getBackground:function(img){return Object(r.a)(img,!0)}}},f=t(8),component=Object(f.a)(c,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("article",[t("h2",{staticClass:"text-3xl py-20px text-center"},[n._v("Aplicativos e Serviços")]),n._v(" "),t("div",{staticClass:"flex flex-col lg:flex-row lg:flex-wrap max-w-full lg:max-w-4/5 items-center lg:items-stretch mx-auto py-5vh"},n._l(n.apps,(function(e,o){return t("div",{key:o,staticClass:"w-90vw lg:w-70vw xl:w-1/3 max-w-full md:max-w-1/2 border-2 shadow-xl rounded my-5px bg-green-50"},[t("a",{staticClass:"flex flex-col sm:flex-row",attrs:{target:"_blank",href:e.link}},[e.imagem?t("div",{staticClass:"h-195px sm:h-auto sm:w-1/3 bg-cover bg-center",style:n.getBackground(e.imagem),attrs:{alt:"imagem serviço"}}):n._e(),n._v(" "),t("div",{staticClass:"sm:w-2/3 pl-25px py-25px rounded-3"},[t("h3",{staticClass:"pb-2 text-xl font-semibold"},[n._v(n._s(e.titulo))]),n._v(" "),t("p",[n._v(n._s(e.descricao))])])])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);