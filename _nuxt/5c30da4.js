(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{327:function(e,t,r){"use strict";var o=0;function n(e){if(!o){var s=document.createElement("script");s.setAttribute("src",e),document.body.appendChild(s),o=new Promise((function(e){s.onload=function(){e(window.twttr)}}))}return o}var l={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};e.exports={addPlatformScript:n,twitterEmbedComponent:function(e){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},l,e.props),mounted:function(){var t,r=this;t="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:n("//platform.twitter.com/widgets.js")).then((function(o){return e.embedComponent(o,t,r.$el,r.options)})).then((function(data){r.isAvailable=void 0!==data,r.isLoaded=!0}))},render:function(e){if(this.isLoaded&&this.isAvailable)return e("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var t=e("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return e("div",[t])}return e("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},329:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Tweet",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Moment",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Timeline",{enumerable:!0,get:function(){return l.default}});var o=c(r(330)),n=c(r(331)),l=c(r(332));function c(e){return e&&e.__esModule?e:{default:e}}},330:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,r(327).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return(t=e.widgets).createTweetEmbed.apply(t,o)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=o},331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,r(327).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return(t=e.widgets).createMoment.apply(t,o)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=o},332:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,r(327).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return(t=e.widgets).createTimeline.apply(t,o)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=o},370:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex flex-col w-3/5 sm:w-80wv sm:flex-row items-center justify-center items-center gap-20"},[o("img",{staticClass:"transform hover:scale-110",attrs:{src:r(175),alt:"imgcomunity"}}),e._v(" "),o("div",{staticClass:"flex flex-col items-start justify-start gap-y-15px lg:p-25px blur-sm hover:blur-none"},[o("h2",{staticClass:"font-extrabold text-3xl"},[e._v("Community Networks")]),e._v(" "),o("h3",{staticClass:"text-2xl"},[e._v("\n          My lastest projetc is about Community Networks, where we work to\n          figure out a solution for conectivity\n        ")])])])}],n=r(2),l=(r(20),{asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("index").fetch();case 3:return o=t.sent,t.abrupt("return",{page:o});case 5:case"end":return t.stop()}}),t)})))()},head:{link:[{rel:"stylesheet"}]},components:{Timeline:r(329).Timeline}}),c=r(14),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",{staticClass:"w-full"},[o("Navbar"),e._v(" "),o("section",{staticClass:"sec sm:p-y-40"},[o("div",{staticClass:"flex flex-col items-start gap-y-15px p-25px blur-sm hover:blur-none"},[o("h3",{staticClass:"text-2xl"},[e._v("Hello")]),e._v(" "),o("h2",{staticClass:"font-extrabold text-5xl"},[e._v("I am Hiure Queiroz")]),e._v(" "),o("h3",{staticClass:"text-2xl"},[e._v("Developer / Researcher / Physicist")]),e._v(" "),o("NuxtLink",{attrs:{to:"/sobre"}},[o("div",{staticClass:"flex flex-row items-center justify-center h-50px w-150px border-2 rounded-4xl bg-green-300 transform hover:scale-110"},[o("p",[e._v("More about me")])])])],1),e._v(" "),o("img",{staticClass:"transform hover:scale-110",attrs:{src:r(176),alt:"iconeHome"}})]),e._v(" "),o("section",{staticClass:"sec2 bg-green-100/60 p-y-5"},[e._m(0),e._v(" "),o("div",{staticClass:"flex flex-col lg:flex-row w-80wv gap-y-30px sm:gap-x-100px "},[o("lite-youtube",{staticClass:"w-300px",attrs:{videoid:"KRib7hyTWMw",playlabel:"Play: Keynote (Google I/O '18)",params:"controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"}}),e._v(" "),o("lite-youtube",{staticClass:"w-300px",attrs:{videoid:"vb9GYb1j85k",playlabel:"Play: Keynote (Google I/O '18)",params:"controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"}}),e._v(" "),o("lite-youtube",{staticClass:"w-300px",attrs:{videoid:"P6YDu3nKNvQ",playlabel:"Play: Keynote (Google I/O '18)",params:"controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"}})],1),e._v(" "),o("div",{staticClass:"flex"},[o("NuxtLink",{attrs:{to:"/projects"}},[o("div",{staticClass:"flex flex-row items-center justify-center h-50px w-200px border-2 rounded-4xl bg-green-300 transform hover:scale-110"},[o("p",[e._v("More about projects")])])])],1)]),e._v(" "),o("section",{staticClass:"secreverse my-10 p-y-5 sm:p-y-40"},[o("div",{staticClass:"border-2"},[o("Timeline",{attrs:{id:"hiure",sourceType:"profile",options:{tweetLimit:"2"}}})],1),e._v(" "),o("div",{staticClass:"flex flex-col md:self-start items-start gap-y-15px p-25px blur-sm hover:blur-none"},[o("h2",{staticClass:"font-extrabold text-3xl"},[e._v("My Shared Content")]),e._v(" "),o("h3",{staticClass:"text-2xl"},[e._v("\n        I like to share all kinds of thoughts and skills\n      ")]),e._v(" "),o("h3",{staticClass:"text-2xl"},[e._v("Checkout my blog with tips and tutorials")]),e._v(" "),o("NuxtLink",{attrs:{to:"/blog"}},[o("div",{staticClass:"flex flex-row items-center justify-center h-50px w-150px border-2 rounded-4xl bg-green-300 transform hover:scale-110"},[o("p",[e._v("My Blog")])])])],1),e._v(" "),o("img",{staticClass:"md:self-start transform hover:scale-110",attrs:{src:r(174),alt:"iconeHome"}})]),e._v(" "),o("Footer")],1)}),o,!1,null,null,null);t.default=component.exports;installComponents(component,{Navbar:r(172).default,Footer:r(177).default})}}]);