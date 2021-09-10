"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[814],{5318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3128:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=["components"],s={title:"Installation",sidebar_position:0,author:"Rohit Gohri",author_url:"https://rohit.page"},u=void 0,l={unversionedId:"getting-started/Installation",id:"getting-started/Installation",isDocsHomePage:!1,title:"Installation",description:"1. Install redocusaurus:",source:"@site/docs/getting-started/Installation.md",sourceDirName:"getting-started",slug:"/getting-started/Installation",permalink:"/redocusaurus/docs/getting-started/Installation",editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/docs/getting-started/Installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Installation",sidebar_position:0,author:"Rohit Gohri",author_url:"https://rohit.page"},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/redocusaurus/docs/"},next:{title:"Schema Imports",permalink:"/redocusaurus/docs/guides/schema-imports"}},p=[],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install redocusaurus:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/redocusaurus?style=flat-square",alt:"npm"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm i --save redocusaurus\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add it as a preset to your docusaurus config and pass options:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pass it a OpenAPI spec URL"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// docusaurus.config.js\n\nmodule.exports = {\n  // ...\n  presets: [\n    [\n      'redocusaurus',\n      {\n        specs: [\n          {\n            specUrl: 'https://redocly.github.io/redoc/openapi.yaml',\n          },\n        ],\n      },\n    ],\n  ],\n  // ...\n};\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pass it a OpenAPI spec local path"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// docusaurus.config.js\n\nmodule.exports = {\n  // ...\n  presets: [\n    [\n      'redocusaurus',\n      {\n        specs: [\n          {\n            spec: 'openapi.yaml',\n          },\n        ],\n      },\n    ],\n  ],\n  // ...\n};\n")))))),(0,o.kt)("p",null,"The API Doc will be available by default at ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/")," path. To customize it see ",(0,o.kt)("a",{parentName:"p",href:"#options"},"full plugin options"),"."))}d.isMDXComponent=!0}}]);