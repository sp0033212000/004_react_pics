(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{20:function(t,e,r){t.exports=r(46)},21:function(t,e,r){},43:function(t,e,r){},46:function(t,e,r){"use strict";r.r(e);r(21);var n=r(0),o=r.n(n),a=r(17),i=r.n(a),c=r(6),u=r(7),s=r(18),l=r.n(s).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID ".concat("e3a560040278efa93220060acd19ca3faa693e19192a2b5bd2c6083c7d95c078")}}),f=r(2),h=r(3),p=r(5),v=r(4),m=function(t){Object(p.a)(r,t);var e=Object(v.a)(r);function r(){var t;Object(f.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={term:""},t.onFormSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.term)},t}return Object(h.a)(r,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"ui segment"},o.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},o.a.createElement("div",{className:"field"},o.a.createElement("label",null,"Image Search"),o.a.createElement("input",{type:"text",value:this.state.term,onChange:function(e){return t.setState({term:e.target.value})}}))))}}]),r}(o.a.Component),d=(r(43),function(t){Object(p.a)(r,t);var e=Object(v.a)(r);function r(t){var n;return Object(f.a)(this,r),(n=e.call(this,t)).setSpans=function(){var t=n.imageRef.current.clientHeight,e=Math.ceil(t/10);n.setState({spans:e})},n.state={spans:0},n.imageRef=o.a.createRef(),n}return Object(h.a)(r,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var t=this.props.image,e=t.description,r=t.urls;return o.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},o.a.createElement("img",{ref:this.imageRef,alt:e,src:r.regular}))}}]),r}(o.a.Component)),y=function(t){var e=t.images;return o.a.createElement("div",{className:"image-list"},e.map((function(t){return o.a.createElement(d,{key:t.id,image:t})})))},g=r(19),b=function(t){var e=t.onEndReached,r=t.disabled,o=t.wait,a=void 0===o?16:o,i=Object(n.useRef)(e),c=Object(n.useRef)(Object(g.throttle)((function(t){return i.current(t)}),a));Object(n.useEffect)((function(){return function(){c.current.cancel()}}),[]),Object(n.useEffect)((function(){i.current=e}),[e]);var u=Object(n.useCallback)((function(t){var e,r,n,o;window.innerHeight+(null!==(e=null===(r=document.querySelector("html"))||void 0===r?void 0:r.scrollTop)&&void 0!==e?e:0)===(null!==(n=null===(o=document.querySelector("html"))||void 0===o?void 0:o.scrollHeight)&&void 0!==n?n:0)&&requestAnimationFrame((function(){return c.current(t)}))}),[]);Object(n.useEffect)((function(){if(!r){var t=document.querySelector("html"),e=window.navigator.maxTouchPoints>0;return e?t.addEventListener("touchmove",u):t.addEventListener("wheel",u),function(){e?t.removeEventListener("touchmove",u):t.removeEventListener("wheel",u)}}}),[r])};function w(){w=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),c=new N(n||[]);return o(i,"_invoke",{value:S(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="executing",v="completed",m={};function d(){}function y(){}function g(){}var b={};s(b,i,(function(){return this}));var E=Object.getPrototypeOf,O=E&&E(E(T([])));O&&O!==r&&n.call(O,i)&&(b=O);var j=g.prototype=d.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function S(e,r,n){var o=h;return function(a,i){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return y.prototype=g,o(j,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:y,configurable:!0}),y.displayName=s(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},x(L.prototype),s(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new L(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(j),s(j,u,"Generator"),s(j,i,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}var E=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(!1),s=Object(u.a)(i,2),f=s[0],h=s[1],p=Object(n.useRef)(1),v=Object(n.useRef)(1),d=Object(n.useRef)(""),g=Object(n.useCallback)(function(){var t=Object(c.a)(w().mark((function t(e){var r,n,o=arguments;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,t.prev=1,h(!0),t.next=5,l.get("/search/photos",{params:{query:e,per_page:10,page:r}});case 5:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,h(!1),t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[1,,7,10]])})));return function(e){return t.apply(this,arguments)}}(),[]),E=Object(n.useCallback)(function(){var t=Object(c.a)(w().mark((function t(e){var r;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:r=t.sent,p.current=1,v.current=r.total_pages,d.current=e,a((function(t){return t.concat(r)}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]);return b({onEndReached:function(){var t=Object(c.a)(w().mark((function t(){var e;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p.current+=1,t.next=3,g(d.current,p.current);case 3:e=t.sent,a((function(t){return t.concat(e)}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),disabled:r.length<=0||f||p.current>=v.current,wait:1e3}),o.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},o.a.createElement(m,{onSubmit:E}),o.a.createElement(y,{images:r}))};i.a.render(o.a.createElement(E,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6bc6f856.chunk.js.map