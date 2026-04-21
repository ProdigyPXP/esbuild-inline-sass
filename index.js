var g=Object.create;var o=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var C=(e,t)=>{for(var n in t)o(e,n,{get:t[n],enumerable:!0})},d=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of S(t))!j.call(e,i)&&i!==n&&o(e,i,{get:()=>t[i],enumerable:!(r=b(t,i))||r.enumerable});return e};var c=(e,t,n)=>(n=e!=null?g(P(e)):{},d(t||!e||!e.__esModule?o(n,"default",{value:e,enumerable:!0}):n,e)),O=e=>d(o({},"__esModule",{value:!0}),e);var w={};C(w,{default:()=>$,inlineSass:()=>p,inlineScss:()=>v});module.exports=O(w);var f=c(require("node:path")),m=c(require("esbuild-sass-plugin"));function p({minify:e=!0,charset:t="utf8"}={}){let n;return{name:"inlineSass",setup({onResolve:r,onLoad:i,esbuild:y}){let h={logLevel:"silent",bundle:!0,write:!1,charset:t,minify:e},_=()=>y||(n||=require("esbuild"));i({filter:/\.s[ac]ss$/},async s=>{let{errors:u,warnings:a,outputFiles:l}=await _().build({entryPoints:[s.path],absWorkingDir:s.resolveDir||f.default.dirname(s.path),plugins:[(0,m.default)()],...h});if(!(l!=null&&l.length))return{errors:[...u,{text:`No CSS output generated for "${s.path}"`}],warnings:a};let x=l[0].text.trimEnd();return{errors:u,warnings:a,contents:`import { inject_style } from "__style_helper__"
inject_style(${JSON.stringify(x)})`,loader:"js"}}),r({filter:/^__style_helper__$/},()=>({path:"index.js",namespace:"style-helper"})),i({filter:/.*/,namespace:"style-helper"},()=>({contents:`export function inject_style(text) {
  if (typeof document !== 'undefined') {
    var style = document.createElement('style')
    var node = document.createTextNode(text)
    style.appendChild(node)
    document.head.appendChild(style)
  }
}`}))}}}var v=p,$=p;0&&(module.exports={inlineSass,inlineScss});
//# sourceMappingURL=index.js.map
