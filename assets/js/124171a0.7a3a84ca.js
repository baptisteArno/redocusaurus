(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[752],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||u;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,i=new Array(u);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<u;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1869:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o},useAllPluginInstancesData:function(){return u},usePluginData:function(){return i}});var n=r(353);function o(){var e=(0,n.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function u(e){var t=o()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function i(e,t){void 0===t&&(t="default");var r=u(e)[t];if(!r)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return r}},579:function(e,t,r){"use strict";var n=r(7378).createContext(void 0);t.Z=n},9237:function(e,t,r){"use strict";var n=r(7378),o=r(579);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},2438:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return y},default:function(){return O},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return b}});var n=r(5773),o=r(808),u=r(7378),i=r(5318),a=r(1869),s=r(9237),c=r(8944),l=r(3169),m=r(200),p=r(138),f=["id","hideExample"];var d=function(e){var t,r=e.id,i=e.hideExample,d=(0,o.Z)(e,f),h=(0,s.Z)().isDarkTheme,g=(0,a.useAllPluginInstancesData)("docusaurus-plugin-redoc"),y=(0,a.usePluginData)("docusaurus-theme-redoc"),v=y.lightTheme,b=y.darkTheme,w=y.redocOptions,O=h?b:v,x=g[r]||(null==(t=Object.values(g).filter((function(e){return"object"===e.type})))?void 0:t[0]),P=x.specUrl,k=x.content,D=x.type,S=(0,u.useMemo)((function(){return"object"===D&&k?new m.AppStore(k,P,Object.assign({},w,{theme:O})):(p.warn({allData:g},"[Redocusaurus] ApiSchems needs a spec file to render"),null)}),[k,D,P,w,O]);return S?u.createElement(l.ThemeProvider,{theme:S.options.theme},u.createElement("div",{className:(0,c.Z)(["redocusaurus","redocusaurus-schema",i?"hide-example":null])},u.createElement(m.SchemaDefinition,(0,n.Z)({parser:S.spec.parser,options:S.options},d)))):null},h=["components"],g={title:"Schema Imports"},y="Import Schema Model in Docs",v={unversionedId:"guides/schema-imports",id:"guides/schema-imports",isDocsHomePage:!1,title:"Schema Imports",description:"`tsx",source:"@site/docs/guides/schema-imports.mdx",sourceDirName:"guides",slug:"/guides/schema-imports",permalink:"/redocusaurus/docs/guides/schema-imports",editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/docs/guides/schema-imports.mdx",tags:[],version:"current",frontMatter:{title:"Schema Imports"},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/redocusaurus/docs/getting-started/Installation"},next:{title:"Hello",permalink:"/redocusaurus/docs/hello"}},b=[{value:"Results",id:"results",children:[]},{value:"Results",id:"results-1",children:[]}],w={toc:b};function O(e){var t=e.components,r=(0,o.Z)(e,h);return(0,i.kt)("wrapper",(0,n.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"import-schema-model-in-docs"},"Import Schema Model in Docs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import ApiSchema from '@theme/ApiSchema';\n\n<ApiSchema hideExample schemaRef=\"#/components/schemas/Pet\" />;\n")),(0,i.kt)("h2",{id:"results"},"Results"),(0,i.kt)(d,{hideExample:!0,schemaRef:"#/components/schemas/Pet",mdxType:"ApiSchema"}),(0,i.kt)("h1",{id:"import-schema-model-with-example-in-docs"},"Import Schema Model (with example) in Docs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import ApiSchema from '@theme/ApiSchema';\n\n<ApiSchema schemaRef=\"#/components/schemas/Pet\" />;\n")),(0,i.kt)("h2",{id:"results-1"},"Results"),(0,i.kt)(d,{schemaRef:"#/components/schemas/Pet",mdxType:"ApiSchema"}))}O.isMDXComponent=!0},8944:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})},9184:function(){},8002:function(){},6466:function(){},1632:function(){},1450:function(){}}]);