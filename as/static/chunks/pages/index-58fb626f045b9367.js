(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},2356:function(e,n,r){"use strict";r.d(n,{Ap:function(){return i},I8:function(){return u}});var t=r(5503),o=r(7702),i=((0,t.ZF)({apiKey:"AIzaSyCQgeJjIuwGzYCt3UHuYSXIDBBD_upv7RU",authDomain:"uberclone-saif.firebaseapp.com",projectId:"uberclone-saif",storageBucket:"uberclone-saif.appspot.com",messagingSenderId:"979200701517",appId:"1:979200701517:web:d511e71cea5582a4bf5804"}),new o.hJ),u=(0,o.v0)()},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(t=(u=c.next()).done)&&(r.push(u.value),!n||r.length!==n);t=!0);}catch(a){o=!0,i=a}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},u=r(6273),c=r(387),a=r(7190);var f={};function l(e,n,r,t){if(e&&u.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;f[n+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var n,r=!1!==e.prefetch,o=c.useRouter(),s=i.default.useMemo((function(){var n=t(u.resolveHref(o,e.href,!0),2),r=n[0],i=n[1];return{href:r,as:e.as?u.resolveHref(o,e.as):i||r}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,b=e.shallow,x=e.scroll,y=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var m=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,g=t(a.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],k=i.default.useCallback((function(e){j(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,j]);i.default.useEffect((function(){var e=w&&r&&u.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,t=f[d+"%"+p+(n?"%"+n:"")];e&&!t&&l(o,d,p,{locale:n})}),[p,d,w,y,r,o]);var I={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,i,c,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](r,t,{shallow:i,locale:a,scroll:c}))}(e,o,d,p,h,b,x,y)},onMouseEnter:function(e){u.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof y?y:o&&o.locale,_=o&&o.isLocaleDomain&&u.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);I.href=_||u.addBasePath(u.addLocale(p,E,o&&o.defaultLocale))}return i.default.cloneElement(n,I)};n.default=s},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(t=(u=c.next()).done)&&(r.push(u.value),!n||r.length!==n);t=!0);}catch(a){o=!0,i=a}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!u,a=o.useRef(),f=t(o.useState(!1),2),l=f[0],s=f[1],d=o.useCallback((function(e){a.current&&(a.current(),a.current=void 0),r||l||e&&e.tagName&&(a.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,i=t.observer,u=t.elements;return u.set(e,n),i.observe(e),function(){u.delete(e),i.unobserve(e),0===u.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:n}))}),[r,n,l]);return o.useEffect((function(){if(!u&&!l){var e=i.requestIdleCallback((function(){return s(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[l]),[d,l]};var o=r(7294),i=r(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map},3302:function(e,n,r){"use strict";var t=r(5893),o=r(3043),i=r.n(o),u=r(6158),c=r.n(u),a=r(7294);function f(){var e,n,r=(e=["\n  flex-1 h-1/2\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return f=function(){return r},r}c().accessToken="pk.eyJ1Ijoic2FpZm1vaGFtZWRzdiIsImEiOiJja3ZwNGNneWIwd2E3MndxaG14djg0endqIn0.Y_JAbXg08WKPINYkZC4AdA";n.Z=function(e){(0,a.useEffect)((function(){var r=new(c().Map)({container:"map",style:"mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",center:[30,21],zoom:8});e.pickup&&n(r,e.pickup),e.dropoff&&n(r,e.dropoff),e.pickup&&e.dropoff&&r.fitBounds([e.dropoff,e.pickup],{padding:60})}),[e.pickup,e.dropoff]);var n=function(e,n){console.log(n);(new(c().Marker)).setLngLat(n).addTo(e)};return(0,t.jsx)(l,{id:"map"})};var l=i().div(f())},3678:function(e,n,r){"use strict";r.r(n);var t=r(5893),o=r(7294),i=r(3043),u=r.n(i),c=r(3302),a=r(1664),f=r(2356),l=r(7702),s=r(1163);function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function p(){var e=d(["\n  flex flex-col h-screen\n"]);return p=function(){return e},e}function v(){var e=d(["\n  flex-1 pr-4 pl-4np\n"]);return v=function(){return e},e}function h(){var e=d(["\nflex justify-between items-center\n"]);return h=function(){return e},e}function b(){var e=d(["\nh-28\n"]);return b=function(){return e},e}function x(){var e=d(["\nflex items-center \n"]);return x=function(){return e},e}function y(){var e=d(["\nmr-4 w-22 text-sm\n"]);return y=function(){return e},e}function m(){var e=d(["\nh-12 w-12 rounded-full\n"]);return m=function(){return e},e}function g(){var e=d(["\nflex mx-2\n"]);return g=function(){return e},e}function j(){var e=d(["\nflex flex-col bg-gray-200 flex-1 mx-1 items-center justify-center h-32 rounded-lg transform hover:scale-105 transition text-xl\n"]);return j=function(){return e},e}function w(){var e=d(["\nh-3/5\n"]);return w=function(){return e},e}function k(){var e=d(["\nh-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 mx-3 rounded-lg\n"]);return k=function(){return e},e}n.default=function(){var e=(0,o.useState)(null),n=e[0],r=e[1],i=(0,s.useRouter)();return(0,o.useEffect)((function(){return(0,l.Aj)(f.I8,(function(e){e?r({name:null===e||void 0===e?void 0:e.displayName,pic:null===e||void 0===e?void 0:e.photoURL}):(r(null),i.push("/login"))}))}),[]),(0,t.jsxs)(I,{children:[(0,t.jsx)(c.Z,{}),(0,t.jsxs)(E,{children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(L,{src:"https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"}),(0,t.jsxs)(M,{children:[(0,t.jsx)(C,{children:null===n||void 0===n?void 0:n.name}),(0,t.jsx)(R,{src:null===n||void 0===n?void 0:n.pic,onClick:function(){(0,l.w7)(f.I8)}})]})]}),(0,t.jsxs)(O,{children:[(0,t.jsx)(a.default,{href:"/search",children:(0,t.jsxs)(A,{children:[(0,t.jsx)(N,{src:"https://i.ibb.co/cyvcpfF/uberx.png"}),"Ride"]})}),(0,t.jsxs)(A,{children:[(0,t.jsx)(N,{src:"https://i.ibb.co/n776JLm/bike.png"}),"Wheels"]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(N,{src:"https://i.ibb.co/5RjchBg/uberschedule.png"}),"Reserve"]})]}),(0,t.jsx)(z,{children:"Where to"})]})]})};var I=u().div(p()),E=u().div(v()),_=u().div(h()),L=u().img(b()),M=u().div(x()),C=u().div(y()),R=u().img(m()),O=u().div(g()),A=u().button(j()),N=u().img(w()),z=u().div(k())},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[634,475,737,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);