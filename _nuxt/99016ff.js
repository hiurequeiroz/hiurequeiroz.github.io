(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{330:function(e,t,r){"use strict";var n=0;function o(e){if(!n){var s=document.createElement("script");s.setAttribute("src",e),document.body.appendChild(s),n=new Promise((function(e){s.onload=function(){e(window.twttr)}}))}return n}var l={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};e.exports={addPlatformScript:o,twitterEmbedComponent:function(e){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},l,e.props),mounted:function(){var t,r=this;t="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:o("//platform.twitter.com/widgets.js")).then((function(n){return e.embedComponent(n,t,r.$el,r.options)})).then((function(data){r.isAvailable=void 0!==data,r.isLoaded=!0}))},render:function(e){if(this.isLoaded&&this.isAvailable)return e("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var t=e("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return e("div",[t])}return e("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},347:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Tweet",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Moment",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Timeline",{enumerable:!0,get:function(){return l.default}});var n=c(r(348)),o=c(r(349)),l=c(r(350));function c(e){return e&&e.__esModule?e:{default:e}}},348:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(330).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=e.widgets).createTweetEmbed.apply(t,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=n},349:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(330).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=e.widgets).createMoment.apply(t,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=n},350:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(330).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=e.widgets).createTimeline.apply(t,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=n},372:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col w-full sm:w-80wv sm:flex-row items-center justify-center gap-20"},[n("h2",{staticClass:"font-extrabold text-3xl"},[e._v("Community Networks")]),e._v(" "),n("img",{staticClass:"md:relative md:top-3 md:left-6 self-center transform hover:scale-110",attrs:{src:r(175),alt:"imgcomunity"}}),e._v(" "),n("div",{staticClass:"flex flex-col items-start justify-center sm:w-350px gap-y-15px lg:p-25px blur-sm hover:blur-none"},[n("h3",{staticClass:"text-center text-2xl"},[e._v("\n          Self-governed and owned telecommunications infrastructure.\n        ")])])])}],o=r(2),l=(r(20),{asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("index").fetch();case 3:return n=t.sent,t.abrupt("return",{page:n});case 5:case"end":return t.stop()}}),t)})))()},head:{link:[{rel:"stylesheet"}]},components:{Timeline:r(347).Timeline}}),c=r(14),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"w-full"},[n("Navbar"),e._v(" "),n("section",{staticClass:"sec p-y-10 sm:p-y-40"},[n("div",{staticClass:"flex flex-col items-start justify-items-center gap-y-15px p-25px blur-sm hover:blur-none"},[n("h1",{staticClass:"hidden"},[e._v("Hiure Queiroz")]),e._v(" "),n("h3",{staticClass:"text-2xl"},[e._v("Hello")]),e._v(" "),n("h3",{staticClass:"font-extrabold text-5xl text-left tracking-tighter"},[e._v("I am Hiure Queiroz")]),e._v(" "),n("h3",{staticClass:"text-2xl"},[e._v("Developer / Researcher / Physicist")]),e._v(" "),n("NuxtLink",{attrs:{to:"/sobre"}},[n("div",{staticClass:"flex flex-row items-center justify-center h-50px w-200px border-2 rounded-4xl bg-green-300 transform hover:scale-110"},[n("p",{staticClass:"align-middle text-center"},[e._v("More about me")])])])],1),e._v(" "),n("img",{staticClass:"transform hover:scale-110",attrs:{src:r(176),alt:"iconeHome"}})]),e._v(" "),n("section",{staticClass:"sec2 bg-green-100/60 p-y-5 pb-20"},[e._m(0),e._v(" "),n("div",{staticClass:"flex flex-col lg:flex-row w-80wv gap-y-30px sm:gap-x-100px "},[n("lite-youtube",{staticClass:"w-300px",attrs:{videoid:"KRib7hyTWMw",playlabel:"Play: Keynote (Google I/O '18)",params:"controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"}}),e._v(" "),n("lite-youtube",{staticClass:"w-300px",attrs:{videoid:"vb9GYb1j85k",playlabel:"Play: Keynote (Google I/O '18)",params:"controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"}}),e._v(" "),n("lite-youtube",{staticClass:"w-300px",attrs:{videoid:"P6YDu3nKNvQ",playlabel:"Play: Keynote (Google I/O '18)",params:"controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"}})],1),e._v(" "),n("div",{staticClass:"relative top-2"},[n("NuxtLink",{attrs:{to:"/projects"}},[n("div",{staticClass:"flex flex-row items-center justify-center h-50px w-200px border-2 rounded-4xl bg-green-300 transform hover:scale-110"},[n("p",{staticClass:"text-center tracking-tighter"},[e._v("Related projects")])])])],1)]),e._v(" "),n("section",{staticClass:"secreverse my-10 p-y-5 sm:p-y-20"},[n("h2",{staticClass:"md:absolute md:top-430 order-3 font-extrabold text-3xl"},[e._v("My Shared Content")]),e._v(" "),n("div",{staticClass:"border-2"},[n("Timeline",{attrs:{id:"hiure",sourceType:"profile",options:{tweetLimit:"2"}}})],1),e._v(" "),n("div",{staticClass:"flex flex-col md:self-start items-center gap-y-15px p-25px blur-sm hover:blur-none"},[n("h3",{staticClass:"text-center text-2xl tracking-tighter"},[e._v("\n        Thoughts, tips and tutorials\n      ")]),e._v(" "),n("NuxtLink",{attrs:{to:"/blog"}},[n("div",{staticClass:"flex flex-row items-center justify-center h-50px w-150px border-2 rounded-4xl bg-green-300 transform hover:scale-110"},[n("p",[e._v("My Blog")])])])],1),e._v(" "),n("img",{staticClass:"md:self-start transform hover:scale-110",attrs:{src:r(174),alt:"iconeHome"}})]),e._v(" "),n("Footer")],1)}),n,!1,null,null,null);t.default=component.exports;installComponents(component,{Navbar:r(172).default,Footer:r(177).default})}}]);