(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(a,b){"use strict";b.Z=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}},5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(5474)}])},2378:function(a,b,c){"use strict";c.d(b,{q:function(){return e}});var d=c(5893),e=[{title:"OCR",lang:"pytorch",content:(0,d.jsxs)(d.Fragment,{children:["Text Recognition - based on"," ",(0,d.jsx)("a",{className:"text-blue-700",href:"https://github.com/clovaai/deep-text-recognition-benchmark",children:"TPS-ResNet-BiLSTM-Attn"}),(0,d.jsx)("br",{}),"Text Detection - based on"," ",(0,d.jsx)("a",{className:"text-blue-700",href:"https://github.com/clovaai/CRAFT-pytorch",children:"CRAFT"})," ",(0,d.jsx)("br",{}),"Doc layout analysis - based on"," ",(0,d.jsx)("a",{className:"text-blue-700",href:"https://arxiv.org/abs/2012.14740",children:"LayoutLMv2"}),", ",(0,d.jsx)("a",{className:"text-blue-700",href:"https://arxiv.org/abs/2104.08836",children:"LayoutXLM"}),(0,d.jsx)("br",{}),"I developed OCR module of RPA(Robotic Process Automation) on my own for a company for 6 months. Trained by data generated by custom text recognition data generator and many other public datasets."]})},{title:"Smart Contracts",lang:"solidity",content:(0,d.jsx)(d.Fragment,{children:"Decentralized program on the ethereum blockchain. I made an anonymous chat app and ERC-20 token (supports minting and more functions)."})},{title:"Trading assistant",lang:"python",content:(0,d.jsx)(d.Fragment,{children:"Fetches data from binance api and tradingview, and shows customized indicators. Displays risk of current portfolio and calculates proper amount of each trade."})},{title:"Virtual display AR app",lang:"swift",content:(0,d.jsxs)(d.Fragment,{children:[" ","Displays a virtual screen right next to a real monitor. Every time launched, the app loads saved world data of my room. (Showing actual content work in progress.)"]})},{title:"Medical report generation",lang:"pytorch",content:(0,d.jsxs)(d.Fragment,{children:[" ","Team project from CS470 course. Image-to-text model trained by a diagnostic report for each medical image. Beyond reimplementing"," ",(0,d.jsx)("a",{className:"text-blue-700",children:"baseline paper"}),", we analyzed how the results change depending on the two rewards (which encourage the factual completeness and consistency) and other models."]})},{title:"Home server",lang:"",content:(0,d.jsxs)(d.Fragment,{children:[" ","Ubuntu server on raspberry pi. Uses next.js, homeassistant (api), traefik, pihole, wireguard.",(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"- Dashboard that shows iot devices and server status"}),(0,d.jsx)("li",{children:"- Control page of home resources"}),(0,d.jsx)("li",{children:"- VPN to connect home network from outside"})]})]})},{title:"This homepage",lang:"nextjs, tailwind",content:(0,d.jsx)(d.Fragment,{children:"Deployed by github pages and vercel."})},]},8045:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d,e=c(9361).Z,f=c(4941).Z,g=c(3929).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){var b,c,d=a.src,m=a.sizes,o=a.unoptimized,q=void 0!==o&&o,v=a.priority,B=void 0!==v&&v,D=a.loading,E=a.lazyRoot,F=void 0===E?null:E,G=a.lazyBoundary,H=a.className,I=a.quality,J=a.width,K=a.height,L=a.style,M=a.objectFit,N=a.objectPosition,O=a.onLoadingComplete,P=a.placeholder,Q=void 0===P?"empty":P,R=a.blurDataURL,S=p(a,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=h.useContext(l.ImageConfigContext),U=h.useMemo(function(){var a=s||T||j.imageConfigDefault,b=g(a.deviceSizes).concat(g(a.imageSizes)).sort(function(a,b){return a-b}),c=a.deviceSizes.sort(function(a,b){return a-b});return n({},a,{allSizes:b,deviceSizes:c})},[T]),V=S,W=m?"responsive":"intrinsic";"layout"in V&&(V.layout&&(W=V.layout),delete V.layout);var X=A;if("loader"in V){if(V.loader){var Y,Z=V.loader;X=function(a){a.config;var b=p(a,["config"]);return Z(b)}}delete V.loader}var $="";if(x(d)){var _=w(d)?d.default:d;if(!_.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(_)));if(R=R||_.blurDataURL,$=_.src,(!W||"fill"!==W)&&(K=K||_.height,J=J||_.width,!_.height||!_.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(_)))}d="string"==typeof d?d:$;var aa=!B&&("lazy"===D|| void 0===D);(d.startsWith("data:")||d.startsWith("blob:"))&&(q=!0,aa=!1),t.has(d)&&(aa=!1),r&&(q=!0);var ab=f(h.useState(!1),2),ac=ab[0],ad=ab[1],ae=f(k.useIntersection({rootRef:F,rootMargin:G||"200px",disabled:!aa}),3),af=ae[0],ag=ae[1],ah=ae[2],ai=!aa||ag,aj={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ak={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},al=!1,am=z(J),an=z(K),ao=z(I),ap=Object.assign({},L,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:N}),aq="blur"!==Q||ac?{}:{backgroundSize:M||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(R,'")')};if("fill"===W)aj.display="block",aj.position="absolute",aj.top=0,aj.left=0,aj.bottom=0,aj.right=0;else if(void 0!==am&& void 0!==an){var ar=an/am,as=isNaN(ar)?"100%":"".concat(100*ar,"%");"responsive"===W?(aj.display="block",aj.position="relative",al=!0,ak.paddingTop=as):"intrinsic"===W?(aj.display="inline-block",aj.position="relative",aj.maxWidth="100%",al=!0,ak.maxWidth="100%",b="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(am,"%27%20height=%27").concat(an,"%27/%3e")):"fixed"===W&&(aj.display="inline-block",aj.position="relative",aj.width=am,aj.height=an)}var at={src:u,srcSet:void 0,sizes:void 0};ai&&(at=y({config:U,src:d,unoptimized:q,layout:W,width:am,quality:ao,sizes:m,loader:X}));var au=d,av="imagesrcset",aw="imagesizes";aw="imageSizes";var ax=(e(c={},"imageSrcSet",at.srcSet),e(c,aw,at.sizes),c),ay=h.default.useLayoutEffect,az=h.useRef(O),aA=h.useRef(d);h.useEffect(function(){az.current=O},[O]),ay(function(){aA.current!==d&&(ah(),aA.current=d)},[ah,d]);var aB=n({isLazy:aa,imgAttributes:at,heightInt:an,widthInt:am,qualityInt:ao,layout:W,className:H,imgStyle:ap,blurStyle:aq,loading:D,config:U,unoptimized:q,placeholder:Q,loader:X,srcString:au,onLoadingCompleteRef:az,setBlurComplete:ad,setIntersection:af,isVisible:ai,noscriptSizes:m},V);return h.default.createElement(h.default.Fragment,null,h.default.createElement("span",{style:aj},al?h.default.createElement("span",{style:ak},b?h.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:b}):null):null,h.default.createElement(C,Object.assign({},aB))),B?h.default.createElement(i.default,null,h.default.createElement("link",Object.assign({key:"__nimg-"+at.src+at.srcSet+at.sizes,rel:"preload",as:"image",href:at.srcSet?void 0:at.src},ax))):null)};var h=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=o();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}(c(7294)),i=(d=c(5443),d&&d.__esModule?d:{default:d}),j=c(9309),k=c(7190),l=c(9977);c(3794);var m=c(2392);function n(){return(n=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function o(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return o=function(){return a},a}function p(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var q={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai"},r=(q.experimentalRemotePatterns,q.experimentalUnoptimized),s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai"},t=new Set,u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",v=new Map([["default",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality;return c.endsWith(".svg")&&!b.dangerouslyAllowSVG?c:"".concat(m.normalizePathTrailingSlash(b.path),"?url=").concat(encodeURIComponent(c),"&w=").concat(d,"&q=").concat(e||75)}],["imgix",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=new URL("".concat(b.path).concat(D(c))),g=f.searchParams;return g.set("auto",g.get("auto")||"format"),g.set("fit",g.get("fit")||"max"),g.set("w",g.get("w")||d.toString()),e&&g.set("q",e.toString()),f.href}],["cloudinary",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=["f_auto","c_limit","w_"+d,"q_"+(e||"auto")].join(",")+"/";return"".concat(b.path).concat(f).concat(D(c))}],["akamai",function(a){var b=a.config,c=a.src,d=a.width;return"".concat(b.path).concat(D(c),"?imwidth=").concat(d)}],["custom",function(a){var b=a.src;throw Error('Image with src "'.concat(b,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(a){return void 0!==a.default}function x(a){var b;return"object"==typeof a&&(w(a)|| void 0!==(b=a).src)}function y(a){var b=a.config,c=a.src,d=a.unoptimized,e=a.layout,f=a.width,h=a.quality,i=a.sizes,j=a.loader;if(d)return{src:c,srcSet:void 0,sizes:void 0};var k=function(a,b,c,d){var e=a.deviceSizes,f=a.allSizes;if(d&&("fill"===c||"responsive"===c)){for(var h=/(^|\s)(1?\d?\d)vw/g,i=[];j=h.exec(d);j)i.push(parseInt(j[2]));if(i.length){var j,k,l=.01*(k=Math).min.apply(k,g(i));return{widths:f.filter(function(a){return a>=e[0]*l}),kind:"w"}}return{widths:f,kind:"w"}}return"number"!=typeof b||"fill"===c||"responsive"===c?{widths:e,kind:"w"}:{widths:g(new Set([b,2*b].map(function(a){return f.find(function(b){return b>=a})||f[f.length-1]}))),kind:"x"}}(b,f,e,i),l=k.widths,m=k.kind,n=l.length-1;return{sizes:i||"w"!==m?i:"100vw",srcSet:l.map(function(a,d){return"".concat(j({config:b,src:c,quality:h,width:a})," ").concat("w"===m?a:d+1).concat(m)}).join(", "),src:j({config:b,src:c,quality:h,width:l[n]})}}function z(a){return"number"==typeof a?a:"string"==typeof a?parseInt(a,10):void 0}function A(a){var b,c=(null==(b=a.config)?void 0:b.loader)||"default",d=v.get(c);if(d)return d(a);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(j.VALID_LOADERS.join(", "),". Received: ").concat(c))}function B(a,b,c,d,e,f){a&&a.src!==u&&a["data-loaded-src"]!==b&&(a["data-loaded-src"]=b,("decode"in a?a.decode():Promise.resolve()).catch(function(){}).then(function(){if(a.parentNode&&(t.add(b),"blur"===d&&f(!0),null==e?void 0:e.current)){var c=a.naturalWidth,g=a.naturalHeight;e.current({naturalWidth:c,naturalHeight:g})}}))}var C=function(a){var b=a.imgAttributes,c=(a.heightInt,a.widthInt),d=a.qualityInt,e=a.layout,f=a.className,g=a.imgStyle,i=a.blurStyle,j=a.isLazy,k=a.placeholder,l=a.loading,m=a.srcString,o=a.config,q=a.unoptimized,r=a.loader,s=a.onLoadingCompleteRef,t=a.setBlurComplete,u=a.setIntersection,v=a.onLoad,w=a.onError,x=(a.isVisible,a.noscriptSizes),z=p(a,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return l=j?"lazy":l,h.default.createElement(h.default.Fragment,null,h.default.createElement("img",Object.assign({},z,b,{decoding:"async","data-nimg":e,className:f,style:n({},g,i),ref:h.useCallback(function(a){u(a),(null==a?void 0:a.complete)&&B(a,m,e,k,s,t)},[u,m,e,k,s,t,]),onLoad:function(a){B(a.currentTarget,m,e,k,s,t),v&&v(a)},onError:function(a){"blur"===k&&t(!0),w&&w(a)}})),(j||"blur"===k)&&h.default.createElement("noscript",null,h.default.createElement("img",Object.assign({},z,y({config:o,src:m,unoptimized:q,layout:e,width:c,quality:d,sizes:x,loader:r}),{decoding:"async","data-nimg":e,style:g,className:f,loading:l}))))};function D(a){return"/"===a[0]?a.slice(1):a}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},5474:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return m}});var d=c(5893),e=c(9008),f=c.n(e),g=c(5675),h=c.n(g),i=c(1664),j=c.n(i);function k(a){var b=a.children,c=a.title;return c?(0,d.jsxs)("div",{className:"mx-auto mt-5 mb-20 w-96",children:[(0,d.jsxs)("h1",{className:"font-regular text-center text-4xl mb-2",children:[" ",c," "]}),(0,d.jsx)("div",{className:"bg-blue-500 w-3/4 h-1 mb-5 mx-auto rounded"}),(0,d.jsx)("div",{className:"leading-7 w-96",children:b})]}):(0,d.jsx)("div",{className:"mx-auto lg:w-1/3 md:w-2/3 sm:w-4/5 w-5/6 mt-5 mb-20",children:(0,d.jsx)("div",{className:"leading-7 w-96",children:b})})}var l=c(2378);function m(){return(0,d.jsxs)("div",{children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"Kyunghyun Park"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsx)("div",{className:"text-center my-5 pt-12",children:(0,d.jsx)(h(),{src:"/coding-cat copy.jpg",alt:"my-cat",width:315,height:350,className:"rounded-[120px]"})}),(0,d.jsxs)(k,{title:"About",children:["Hi, I'm Kyunghyun Park."," ","Feel free to contact me. ",(0,d.jsx)("br",{}),(0,d.jsx)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",className:"inline-block mr-2",children:(0,d.jsx)("path",{d:"M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"})}),"South Korea ",(0,d.jsx)("br",{}),(0,d.jsx)("svg",{viewBox:"0 0 210 210",version:"1.1",width:"16",height:"16","aria-hidden":"true",className:"inline-block mr-2",children:(0,d.jsx)("path",{d:"M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761 c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874 c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769 c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816 c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055 c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747 C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507 c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235 C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497 c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282 c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067 c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279 C193.5,169.446,193.31,173.537,190.683,176.164z"})}),"010-8586-4918 ",(0,d.jsx)("br",{}),(0,d.jsx)("svg",{viewBox:"0 0 256 256",version:"1.1",width:"16",height:"16","aria-hidden":"true",className:"inline-block mr-2",children:(0,d.jsxs)("g",{transform:"translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)",children:[(0,d.jsx)("path",{d:"M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z",transform:" matrix(1 0 0 1 0 0) "}),(0,d.jsx)("path",{d:"M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z",transform:" matrix(1 0 0 1 0 0) "}),(0,d.jsx)("path",{d:"M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z",transform:" matrix(1 0 0 1 0 0) "}),(0,d.jsx)("path",{d:"M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z",transform:" matrix(1 0 0 1 0 0) "}),(0,d.jsx)("path",{d:"M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z",transform:" matrix(1 0 0 1 0 0) "})]})}),"joshuahp@kaist.ac.kr ",(0,d.jsx)("br",{})]}),(0,d.jsx)(k,{title:"Education",children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"(2020~) Kaist CS"}),(0,d.jsx)("li",{children:"(2017~2019) GSHS 35th"})]})}),(0,d.jsxs)(k,{title:"Programming Skills",children:[(0,d.jsx)("p",{className:"mb-4",children:"I learn new programming languages very quickly and develop reliable, efficient, errorless programs."}),(0,d.jsx)("p",{className:"mb-4",children:"Python, C, Rust, Swift, Scala, Haskell, Web Dev (next.js,html,css,javascript), Solidity, git, linux, bash, etc."}),(0,d.jsxs)("details",{children:[(0,d.jsx)("summary",{children:"Python"}),(0,d.jsxs)("p",{children:["Used for ML, automation, web app, and much more. ",(0,d.jsx)("br",{}),"numpy, pandas, pytorch, flask, keras, etc"]})]}),(0,d.jsxs)("details",{children:[(0,d.jsx)("summary",{children:"C"}),(0,d.jsx)("p",{children:"Used for a lot of course, system programming, and used to improve the performance of code with high time complexity in python (ocr)."})]}),(0,d.jsxs)("details",{children:[(0,d.jsx)("summary",{children:"Rust"}),(0,d.jsx)("p",{children:"Learned to see how Rust prevents memory leaks. Customized Alacritty to support Korean."})]}),(0,d.jsxs)("details",{children:[(0,d.jsx)("summary",{children:"Haskell"}),(0,d.jsx)("p",{children:"Used when taking Programming Principle course. Learned various features in programming language."})]}),(0,d.jsxs)("details",{children:[(0,d.jsx)("summary",{children:"Swift"}),(0,d.jsx)("p",{children:"Made an app to explore Apple's augmented reality technology and to figure out the intention of Apple."})]}),(0,d.jsxs)("details",{children:[(0,d.jsx)("summary",{children:"Scala"}),(0,d.jsx)("p",{children:"Used when taking Programming Language course."})]}),(0,d.jsxs)("details",{children:[(0,d.jsx)("summary",{children:"Web dev"}),(0,d.jsx)("p",{children:"Used next.js, react to build homeserver dashboard (for home resources using Iot) and this homepage."})]}),(0,d.jsxs)("details",{children:[(0,d.jsx)("summary",{children:"Solidity"}),(0,d.jsx)("p",{children:"Used to build Ethereum Dapp"})]}),(0,d.jsx)("br",{})]}),(0,d.jsx)(k,{title:"Projects",children:(0,d.jsx)("ul",{children:l.q.map(function(a,b){return(0,d.jsx)("li",{children:(0,d.jsx)(j(),{href:{pathname:"projects",query:{to:a.title}},children:(0,d.jsxs)("div",{className:"cursor-pointer group",children:["- "," ",(0,d.jsx)("a",{className:"group-hover:underline",children:a.title})]})})},b)})})})]})}},9008:function(a,b,c){a.exports=c(5443)},5675:function(a,b,c){a.exports=c(8045)}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])