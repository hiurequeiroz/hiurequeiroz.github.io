(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{327:function(t,e,r){"use strict";var n=r(328),c=r.n(n);e.a=function(img,t){var e;return img?(e=c()(img)?img:r(171)("./".concat(img)),t?'background-image: url("'.concat(e,'");'):e):null}},350:function(t,e,r){"use strict";var n=r(7),c=r(41),o=r(42),l=r(120),f=r(84),v=r(17),N=r(63).f,h=r(64).f,d=r(19).f,I=r(351).trim,x="Number",m=n.Number,_=m,E=m.prototype,w=o(r(85)(E))==x,A="trim"in String.prototype,S=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=A?e.trim():I(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof m&&(w?v((function(){E.valueOf.call(r)})):o(r)!=x)?l(new _(S(e)),r,m):S(e)};for(var k,C=r(16)?N(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),F=0;C.length>F;F++)c(_,k=C[F])&&!c(m,k)&&d(m,k,h(_,k));m.prototype=E,E.constructor=m,r(21)(n,x,m)}},351:function(t,e,r){var n=r(5),c=r(47),o=r(17),l=r(352),f="["+l+"]",v=RegExp("^"+f+f+"*"),N=RegExp(f+f+"*$"),h=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(d):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},d=h.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(N,"")),t};t.exports=h},352:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},374:function(t,e,r){"use strict";r.r(e);r(350);var n=r(327),c={props:{nome:String,ilustra:String,detalhe:String,index:Number},data:function(){return{icone:Object(n.a)(this.ilustra,!0)}},computed:{link:function(){switch(this.index){case 0:return"/sobre";default:return"/";case 1:return"/apps";case 2:return"/contato"}}}},o=r(14),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full flex flex-row items-center"},[r("div",{staticClass:"flex flex-col items-center gap-y-15px p-25px blur-sm hover:blur-none cursor-pointer"},[r("h2",{staticClass:"font-extrabold uppercase"},[t._v(t._s(t.nome))]),t._v(" "),r("NuxtLink",{attrs:{to:t.link}},[r("div",{staticClass:"h-150px w-150px bg-cover transform hover:scale-110",style:t.icone})])],1),t._v(" "),r("p",[t._v(t._s(t.detalhe))])])}),[],!1,null,null,null);e.default=component.exports}}]);