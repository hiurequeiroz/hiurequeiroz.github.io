(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{237:function(n,e,t){"use strict";var o=t(275),r=t.n(o);e.a=function(img,n){var e;return img?(e=r()(img)?img:t(238)("./".concat(img)),n?'background-image: url("'.concat(e,'");'):e):null}},238:function(n,e,t){var map={"./apps.svg":239,"./archivebox.png":240,"./arvore.svg":241,"./baner2.png":242,"./banner.jpg":243,"./blog.png":244,"./cadvisor.png":245,"./calibre.png":246,"./cc.svg":247,"./chat.svg":248,"./code.png":249,"./communitynetworks.png":250,"./comunidade.svg":251,"./css/main.css":252,"./etherpad.png":254,"./filebrowser.svg":255,"./final-bread.jpg":256,"./home.svg":257,"./icone.png":258,"./icone2.png":259,"./icone3.png":260,"./janeraka.png":261,"./janeraka_cover.jpg":262,"./jellyfin.png":263,"./kiwix.png":264,"./kolibri.png":265,"./mapa.svg":266,"./meshtastic.png":267,"./perfil-colors.png":268,"./pihole.png":269,"./resiliosync.png":270,"./speedtest.png":271,"./tech-heart.svg":272,"./torre.jpg":273,"./youtubedl.png":274};function o(n){var e=r(n);return t(e)}function r(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=238},239:function(n,e,t){n.exports=t.p+"fc43d64fc4015683e1778ff8f1d1b9b6.svg"},240:function(n,e,t){n.exports=t.p+"img/archivebox.38a923a.png"},241:function(n,e,t){n.exports=t.p+"a89705c8b3e3d160cd9fb3fe2af7b539.svg"},242:function(n,e,t){n.exports=t.p+"img/baner2.eac0990.png"},243:function(n,e,t){n.exports=t.p+"img/banner.54a748c.jpg"},244:function(n,e,t){n.exports=t.p+"img/blog.146efa4.png"},245:function(n,e,t){n.exports=t.p+"img/cadvisor.16fd3e9.png"},246:function(n,e,t){n.exports=t.p+"img/calibre.4c7ef99.png"},247:function(n,e,t){n.exports=t.p+"92a17d383b46a2c3d7ac16c58775ff0e.svg"},248:function(n,e,t){n.exports=t.p+"d77e4f81ffb127eb727578b6b04eb5b2.svg"},249:function(n,e,t){n.exports=t.p+"img/code.8d3a8bf.png"},250:function(n,e,t){n.exports=t.p+"img/communitynetworks.dd64cbf.png"},251:function(n,e,t){n.exports=t.p+"b6242699d546c48fe1c5081665cfe1ed.svg"},252:function(n,e,t){var content=t(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(41).default)("d9f6b230",content,!0,{sourceMap:!1})},253:function(n,e,t){var o=t(40)(!1);o.push([n.i,'body{font-family:Monaco,"Bitstream Vera Sans Mono","Lucida Console",Terminal,monospace}',""]),n.exports=o},254:function(n,e,t){n.exports=t.p+"img/etherpad.501fb4a.png"},255:function(n,e,t){n.exports=t.p+"18b3feac23683a530f16fbec069259fc.svg"},256:function(n,e,t){n.exports=t.p+"img/final-bread.e3460c8.jpg"},257:function(n,e,t){n.exports=t.p+"c123bf0064f23dfee7808a3374be8955.svg"},258:function(n,e,t){n.exports=t.p+"img/icone.77b893d.png"},259:function(n,e,t){n.exports=t.p+"img/icone2.38ad5b6.png"},260:function(n,e,t){n.exports=t.p+"img/icone3.5188379.png"},261:function(n,e,t){n.exports=t.p+"img/janeraka.316efbb.png"},262:function(n,e,t){n.exports=t.p+"img/janeraka_cover.2ca6274.jpg"},263:function(n,e,t){n.exports=t.p+"img/jellyfin.0583e90.png"},264:function(n,e,t){n.exports=t.p+"img/kiwix.f5dd076.png"},265:function(n,e,t){n.exports=t.p+"img/kolibri.80cfd2b.png"},266:function(n,e,t){n.exports=t.p+"8286a322487ddec496337b6ff19dfab2.svg"},267:function(n,e,t){n.exports=t.p+"img/meshtastic.3605620.png"},268:function(n,e,t){n.exports=t.p+"img/perfil-colors.ed7a5e3.png"},269:function(n,e,t){n.exports=t.p+"img/pihole.647f306.png"},270:function(n,e,t){n.exports=t.p+"img/resiliosync.63c5613.png"},271:function(n,e,t){n.exports=t.p+"img/speedtest.27fd85f.png"},272:function(n,e,t){n.exports=t.p+"948498a0f2c9a713937fef4f5f62b21f.svg"},273:function(n,e,t){n.exports=t.p+"img/torre.bdf5780.jpg"},274:function(n,e,t){n.exports=t.p+"img/youtubedl.882841e.png"},306:function(n,e,t){"use strict";t.r(e);t(170);var o=t(237),r={props:{nome:String,ilustra:String,detalhe:String,index:Number},data:function(){return{icone:Object(o.a)(this.ilustra,!0)}},computed:{link:function(){switch(this.index){case 0:return"/sobre";default:return"/";case 1:return"/apps";case 2:return"/contato"}}}},c=t(9),component=Object(c.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"w-full flex flex-row items-center"},[t("div",{staticClass:"flex flex-col items-center gap-y-15px p-25px blur-sm hover:blur-none cursor-pointer"},[t("h2",{staticClass:"font-extrabold uppercase"},[n._v(n._s(n.nome))]),n._v(" "),t("NuxtLink",{attrs:{to:n.link}},[t("div",{staticClass:"h-150px w-150px bg-cover transform hover:scale-110",style:n.icone})])],1),n._v(" "),t("p",[n._v(n._s(n.detalhe))])])}),[],!1,null,null,null);e.default=component.exports}}]);