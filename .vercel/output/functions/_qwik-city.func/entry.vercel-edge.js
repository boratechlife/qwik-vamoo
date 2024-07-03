import{getNotFound as Ae}from"./@qwik-city-not-found-paths.js";import{isStaticPath as K}from"./@qwik-city-static-paths.js";import{_ as Te,a as xe,v as Ce}from"./q-DJcTY5be.js";import{s as De,r as Me,m as Pe}from"./q-Bd0SLzqh.js";import Oe from"./@qwik-city-plan.js";var ve=class extends Error{constructor(e,t){super(),this.status=e,this.data=t}},ce=class extends Error{constructor(e,t){super(t),this.status=e}};function Ne(e,t){let n="Server Error";return t!=null&&(typeof t.message=="string"?n=t.message:n=String(t)),"<html>"+le(e,n)+"</html>"}function le(e,t){typeof e!="number"&&(e=500),typeof t=="string"?t=We(t):t="";const n=typeof t=="string"?"600px":"300px",r=e>=500?$e:Le;return`
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${n}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`}var ke=/[&<>]/g,We=e=>e.replace(ke,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),Le="#006ce9",$e="#713fc2",Ie={lax:"Lax",Lax:"Lax",None:"None",none:"None",strict:"Strict",Strict:"Strict"},He={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},G=(e,t,n)=>{const r=[`${e}=${t}`];typeof n.domain=="string"&&r.push(`Domain=${n.domain}`),typeof n.maxAge=="number"?r.push(`Max-Age=${n.maxAge}`):Array.isArray(n.maxAge)?r.push(`Max-Age=${n.maxAge[0]*He[n.maxAge[1]]}`):typeof n.expires=="number"||typeof n.expires=="string"?r.push(`Expires=${n.expires}`):n.expires instanceof Date&&r.push(`Expires=${n.expires.toUTCString()}`),n.httpOnly&&r.push("HttpOnly"),typeof n.path=="string"&&r.push(`Path=${n.path}`);const a=Ee(n.sameSite);return a&&r.push(`SameSite=${a}`),n.secure&&r.push("Secure"),r.join("; ")};function J(e){try{return decodeURIComponent(e)}catch{return e}}var Ue=e=>{const t={};if(typeof e=="string"&&e!==""){const n=e.split(";");for(const r of n){const a=r.indexOf("=");a!==-1&&(t[J(r.slice(0,a).trim())]=J(r.slice(a+1).trim()))}}return t};function Ee(e){if(e===!0)return"Strict";if(e===!1)return"None";if(e)return Ie[e]}var D=Symbol("request-cookies"),v=Symbol("response-cookies"),A=Symbol("live-cookies"),fe,ue,Qe=class{constructor(e){this[fe]={},this[ue]={},this.appendCounter=0,this[D]=Ue(e),this[A]={...this[D]}}get(e,t=!0){const n=this[t?A:D][e];return n?{value:n,json(){return JSON.parse(n)},number(){return Number(n)}}:null}getAll(e=!0){return Object.keys(this[e?A:D]).reduce((t,n)=>(t[n]=this.get(n),t),{})}has(e,t=!0){return!!this[t?A:D][e]}set(e,t,n={}){this[A][e]=typeof t=="string"?t:JSON.stringify(t);const r=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[v][e]=G(e,r,n)}append(e,t,n={}){this[A][e]=typeof t=="string"?t:JSON.stringify(t);const r=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[v][++this.appendCounter]=G(e,r,n)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0}),this[A][e]=null}headers(){return Object.values(this[v])}};fe=v,ue=A;var ze=(e,t)=>{const n=t.headers();if(n.length>0){const r=new Headers(e);for(const a of n)r.append("Set-Cookie",a);return r}return e},F=class{},N=class extends F{},X=new WeakMap,Y="qaction",je="qfunc",V="qdata";function Fe(e){const{url:t,params:n,request:r,status:a,locale:s}=e,o={};r.headers.forEach((y,w)=>o[w]=y);const i=e.sharedMap.get(H),l=e.sharedMap.get(we),c=e.sharedMap.get(ye),f=e.sharedMap.get(it),d=e.request.headers,p=new URL(t.pathname+t.search,t),m=d.get("X-Forwarded-Host"),g=d.get("X-Forwarded-Proto");return m&&(p.port="",p.host=m),g&&(p.protocol=g),{url:p.href,requestHeaders:o,locale:s(),nonce:f,containerAttributes:{"q:route":c},qwikcity:{routeName:c,ev:e,params:{...n},loadedRoute:ct(e),response:{status:a(),loaders:U(e),action:i,formData:l}}}}var Be=(e,t,n,r,a)=>{const s=[],o=[],i=[],l=!!(t&&Ve(t[2]));if(e&&Z(s,o,i,e,l,n),t){const c=t[0];r&&(n==="POST"||n==="PUT"||n==="PATCH"||n==="DELETE")&&i.unshift(Ze),l&&((n==="POST"||n==="GET")&&i.push(Je),i.push(Xe),i.push(tt)),i.push(et),Z(s,o,i,t[2],l,n),l&&(i.push(f=>{f.sharedMap.set(ye,c)}),i.push(Ke(s,o)),i.push(a))}return i},Z=(e,t,n,r,a,s)=>{for(const o of r){typeof o.onRequest=="function"?n.push(o.onRequest):Array.isArray(o.onRequest)&&n.push(...o.onRequest);let i;switch(s){case"GET":{i=o.onGet;break}case"POST":{i=o.onPost;break}case"PUT":{i=o.onPut;break}case"PATCH":{i=o.onPatch;break}case"DELETE":{i=o.onDelete;break}case"OPTIONS":{i=o.onOptions;break}case"HEAD":{i=o.onHead;break}}if(typeof i=="function"?n.push(i):Array.isArray(i)&&n.push(...i),a){const l=Object.values(o).filter(f=>q(f,"server_loader"));e.push(...l);const c=Object.values(o).filter(f=>q(f,"server_action"));t.push(...c)}}},q=(e,t)=>e&&typeof e=="function"&&e.__brand===t;function Ke(e,t){return async n=>{if(n.headersSent){n.exit();return}const{method:r}=n,a=U(n),s=E(n)==="dev",o=n[I];if(s&&r==="GET"&&n.query.has(Y)&&console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`),r==="POST"){const i=n.query.get(Y);if(i){const l=globalThis._qwikActionsMap,c=t.find(f=>f.__id===i)??(l==null?void 0:l.get(i));if(c){n.sharedMap.set(H,i);const f=await n.parseBody();if(!f||typeof f!="object")throw new Error("Expected request data to be an object");const d=await ee(n,c.__validators,f,s);if(!d.success)a[i]=n.fail(d.status??500,d.error);else{const p=s?await W(n,c.__qrl.getSymbol().split("_",1)[0],()=>c.__qrl.call(n,d.data,n)):await c.__qrl.call(n,d.data,n);s&&k(o,p,c.__qrl),a[i]=p}}}}e.length>0&&await Promise.all(e.map(i=>{const l=i.__id;return a[l]=ee(n,i.__validators,void 0,s).then(c=>c.success?s?W(n,i.__qrl.getSymbol().split("_",1)[0],()=>i.__qrl.call(n,n)):i.__qrl.call(n,n):n.fail(c.status??500,c.error)).then(c=>(typeof c=="function"?a[l]=c():(s&&k(o,c,i.__qrl),a[l]=c),c))}))}}async function ee(e,t,n,r){let a={success:!0,data:n};if(t)for(const s of t)if(r?a=await W(e,"validator$",()=>s.validate(e,n)):a=await s.validate(e,n),a.success)n=a.data;else return a;return a}function Ge(e){return e?typeof e=="object"&&Symbol.asyncIterator in e:!1}async function Je(e){const t=e.query.get(je);if(t&&e.request.headers.get("X-QRL")===t&&e.request.headers.get("Content-Type")==="application/qwik-json"){e.exit();const n=E(e)==="dev",r=e[I],a=await e.parseBody();if(Array.isArray(a)){const[s,...o]=a;if(Ye(s)&&s.getHash()===t){let i;try{n?i=await W(e,`server_${s.getSymbol()}`,()=>s.apply(e,o)):i=await s.apply(e,o)}catch(l){if(l instanceof ve){e.headers.set("Content-Type","application/qwik-json"),e.send(l.status,await r._serializeData(l.data,!0));return}e.headers.set("Content-Type","application/qwik-json"),e.send(500,await r._serializeData(l,!0));return}if(Ge(i)){e.headers.set("Content-Type","text/qwik-json-stream");const c=e.getWritableStream().getWriter();for await(const f of i){n&&k(r,f,s);const d=await r._serializeData(f,!0);if(e.signal.aborted)break;await c.write($.encode(`${d}
`))}c.close()}else{k(r,i,s),e.headers.set("Content-Type","application/qwik-json");const l=await r._serializeData(i,!0);e.send(200,l)}return}}throw e.error(500,"Invalid request")}}function Xe(e){const t=B(e),{basePathname:n,pathname:r,url:a,sharedMap:s}=e;if(!s.has(M)&&r!==n&&!r.endsWith(".html")){if(t){if(!r.endsWith("/"))throw e.redirect(302,r+"/"+a.search)}else if(r.endsWith("/"))throw e.redirect(302,r.slice(0,r.length-1)+a.search)}}function k(e,t,n){try{e._verifySerializable(t,void 0)}catch(r){throw r instanceof Error&&n.dev&&(r.loc=n.dev),r}}var Ye=e=>typeof e=="function"&&typeof e.getSymbol=="function";function Ve(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function de(e,t){return e=new URL(e),e.pathname.endsWith(T)&&(e.pathname=e.pathname.slice(0,-T.length)),t?e.pathname.endsWith("/")||(e.pathname+="/"):e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),e.toString().substring(e.origin.length)}var $=new TextEncoder;function Ze(e){if(rt(e.request.headers,"application/x-www-form-urlencoded","multipart/form-data","text/plain")){const n=e.request.headers.get("origin"),r=e.url.origin;if(n!==r)throw e.error(403,`CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${n}" does not match the server origin "${r}".`)}}function qe(e){return async t=>{if(t.headersSent||t.sharedMap.has(M))return;t.request.headers.forEach((d,p)=>d);const r=t.headers;r.has("Content-Type")||r.set("Content-Type","text/html; charset=utf-8");const a=B(t),{readable:s,writable:o}=new TextEncoderStream,i=t.getWritableStream(),l=s.pipeTo(i,{preventClose:!0}),c=o.getWriter(),f=t.status();try{const d=E(t)==="static",p=Fe(t),m=await e({base:t.basePathname+"build/",stream:c,serverData:p,containerAttributes:{"q:render":d?"static":"",...p.containerAttributes}}),g={loaders:U(t),action:t.sharedMap.get(H),status:f!==200?f:200,href:de(t.url,a)};typeof m.html=="string"&&await c.write(m.html),t.sharedMap.set("qData",g)}finally{await c.ready,await c.close(),await l}await i.close()}}async function et(e){if(e.sharedMap.has(M)){try{await e.next()}catch(s){if(!(s instanceof N))throw s}if(e.headersSent)return;const n=e.status(),r=e.headers.get("Location");if(n>=301&&n<=308&&r){const s=nt(r);if(s){e.headers.set("Location",s),e.getWritableStream().close();return}else e.status(200),e.headers.delete("Location")}}}async function tt(e){if(e.sharedMap.has(M)){if(await e.next(),e.headersSent||e.exited)return;const n=e.status(),r=e.headers.get("Location"),a=B(e);e.request.headers.forEach((c,f)=>c),e.headers.set("Content-Type","application/json; charset=utf-8");const s={loaders:U(e),action:e.sharedMap.get(H),status:n!==200?n:200,href:de(e.url,a),redirect:r??void 0},o=e.getWritableStream().getWriter(),l=await e[I]._serializeData(s,!0);o.write($.encode(l)),e.sharedMap.set("qData",s),o.close()}}function nt(e){if(e.startsWith("/")){const t=T,n=new URL(e,"http://localhost");return(n.pathname.endsWith("/")?n.pathname.slice(0,-1):n.pathname)+(t.startsWith("/")?"":"/")+t+n.search}else return}function te(){return typeof performance<"u"?performance.now():0}async function W(e,t,n){const r=te();try{return await n()}finally{const a=te()-r;let s=e.sharedMap.get("@serverTiming");s||e.sharedMap.set("@serverTiming",s=[]),s.push([t,a])}}function rt(e,...t){var n;const r=((n=e.get("content-type"))==null?void 0:n.split(/;,/,1)[0].trim())??"";return t.includes(r)}function at(e){const t=[];return e==="day"?e=60*60*24:e==="week"?e=60*60*24*7:e==="month"?e=60*60*24*30:e==="year"?e=60*60*24*365:e==="private"?e={private:!0,noCache:!0}:e==="immutable"?e={public:!0,immutable:!0,maxAge:60*60*24*365,staleWhileRevalidate:60*60*24*365}:e==="no-cache"&&(e={noCache:!0}),typeof e=="number"&&(e={maxAge:e,sMaxAge:e,staleWhileRevalidate:e}),e.immutable&&t.push("immutable"),e.maxAge&&t.push(`max-age=${e.maxAge}`),e.sMaxAge&&t.push(`s-maxage=${e.sMaxAge}`),e.noStore&&t.push("no-store"),e.noCache&&t.push("no-cache"),e.private&&t.push("private"),e.public&&t.push("public"),e.staleWhileRevalidate&&t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),e.staleIfError&&t.push(`stale-if-error=${e.staleIfError}`),t.join(", ")}var st=e=>e&&typeof e.then=="function",he=Symbol("RequestEvLoaders"),pe=Symbol("RequestEvMode"),me=Symbol("RequestEvRoute"),I=Symbol("RequestEvQwikSerializer"),ge=Symbol("RequestEvTrailingSlash"),ye="@routeName",H="@actionId",we="@actionFormData",it="@nonce";function ot(e,t,n,r,a,s,o,i){const{request:l,platform:c,env:f}=e,d=new Map,p=new Qe(l.headers.get("cookie")),m=new Headers,g=new URL(l.url);g.pathname.endsWith(T)&&(g.pathname=g.pathname.slice(0,-Se),a&&!g.pathname.endsWith("/")&&(g.pathname+="/"),d.set(M,!0)),d.set("@manifest",r);let y=-1,w=null,R,x=e.locale,b=200;const Re=async()=>{for(y++;y<n.length;){const u=n[y],h=globalThis.qcAsyncRequestStore,S=h!=null&&h.run?h.run(_,u,_):u(_);st(S)&&await S,y++}},C=()=>{if(w!==null)throw new Error("Response already sent")},P=(u,h)=>{if(C(),typeof u=="number"){b=u;const O=_.getWritableStream().getWriter();O.write(typeof h=="string"?$.encode(h):h),O.close()}else if(b=u.status,u.headers.forEach((S,O)=>{m.append(O,S)}),u.body){const S=_.getWritableStream();u.body.pipeTo(S)}else{if(b>=300&&b<400)return new N;_.getWritableStream().getWriter().close()}return Q()},Q=()=>(y=ne,new F),z={},_={[he]:z,[pe]:e.mode,[ge]:a,[me]:t,[I]:o,cookie:p,headers:m,env:f,method:l.method,signal:l.signal,params:(t==null?void 0:t[1])??{},pathname:g.pathname,platform:c,query:g.searchParams,request:l,url:g,basePathname:s,sharedMap:d,get headersSent(){return w!==null},get exited(){return y>=ne},get clientConn(){return e.getClientConn()},next:Re,exit:Q,cacheControl:(u,h="Cache-Control")=>{C(),m.set(h,at(u))},resolveValue:async u=>{const h=u.__id;if(u.__brand==="server_loader"&&!(h in z))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");return z[h]},status:u=>typeof u=="number"?(C(),b=u,u):b,locale:u=>(typeof u=="string"&&(x=u),x||""),error:(u,h)=>(b=u,m.delete("Cache-Control"),new ce(u,h)),redirect:(u,h)=>{if(C(),b=u,h){const S=h.replace(/([^:])\/{2,}/g,"$1/");h!==S&&console.warn(`Redirect URL ${h} is invalid, fixing to ${S}`),m.set("Location",S)}return m.delete("Cache-Control"),u>301&&m.set("Cache-Control","no-store"),Q(),new N},defer:u=>typeof u=="function"?u:()=>u,fail:(u,h)=>(C(),b=u,m.delete("Cache-Control"),{failed:!0,...h}),text:(u,h)=>(m.set("Content-Type","text/plain; charset=utf-8"),P(u,h)),html:(u,h)=>(m.set("Content-Type","text/html; charset=utf-8"),P(u,h)),parseBody:async()=>R!==void 0?R:R=lt(_,d,o),json:(u,h)=>(m.set("Content-Type","application/json; charset=utf-8"),P(u,JSON.stringify(h))),send:P,isDirty:()=>w!==null,getWritableStream:()=>{if(w===null){if(e.mode==="dev"){const u=d.get("@serverTiming");u&&m.set("Server-Timing",u.map(h=>`${h[0]};dur=${h[1]}`).join(","))}w=e.getWritableStream(b,m,p,i,_)}return w}};return Object.freeze(_)}function U(e){return e[he]}function B(e){return e[ge]}function ct(e){return e[me]}function E(e){return e[pe]}var ne=Number.MAX_SAFE_INTEGER,lt=async({request:e,method:t,query:n},r,a)=>{var s;const o=((s=e.headers.get("content-type"))==null?void 0:s.split(/[;,]/,1)[0].trim())??"";if(o==="application/x-www-form-urlencoded"||o==="multipart/form-data"){const i=await e.formData();return r.set(we,i),ft(i)}else{if(o==="application/json")return await e.json();if(o==="application/qwik-json"){if(t==="GET"&&n.has(V)){const i=n.get(V);if(i)try{return a._deserializeData(decodeURIComponent(i))}catch{}}return a._deserializeData(await e.text())}}},ft=e=>[...e.entries()].reduce((n,[r,a])=>(r.split(".").reduce((s,o,i,l)=>{if(o.endsWith("[]")){const c=o.slice(0,-2);return s[c]=s[c]||[],s[c]=[...s[c],a]}return i<l.length-1?s[o]=s[o]||(Number.isNaN(+l[i+1])?{}:[]):s[o]=a},n),n),{}),L;import("node:async_hooks").then(e=>{const t=e.AsyncLocalStorage;L=new t,globalThis.qcAsyncRequestStore=L}).catch(e=>{console.warn("AsyncLocalStorage not available, continuing without it. This might impact concurrent server calls.",e)});function ut(e,t,n,r,a=!0,s="/",o){let i;const l=new Promise(f=>i=f),c=ot(e,t,n,r,a,s,o,i);return{response:l,requestEv:c,completion:L?L.run(c,re,c,i):re(c,i)}}async function re(e,t){try{await e.next()}catch(n){if(n instanceof N)await e.getWritableStream().close();else if(n instanceof ce){if(console.error(n),!e.headersSent){const r=Ne(n.status,n),a=n.status;e.html(a,r)}}else if(!(n instanceof F)){if(E(e)!=="dev")try{e.headersSent||(e.headers.set("content-type","text/html; charset=utf-8"),e.cacheControl({noCache:!0}),e.status(500));const r=e.getWritableStream();if(!r.locked){const a=r.getWriter();await a.write($.encode(le(500,"Internal Server Error"))),await a.close()}}catch{console.error("Unable to render error page")}return n}}finally{e.isDirty()||t(null)}}function dt(e,t){if(e.endsWith(T)){const n=e.length-Se+(t?1:0);e=e.slice(0,n),e===""&&(e="/")}return e}var M="@isQData",T="/q-data.json",Se=T.length;function ht(e,t){const n=ie(e),r=ae(e),a=ie(t),s=ae(t);return be(e,n,r,t,a,s)}function be(e,t,n,r,a,s){let o=null;for(;t<n;){const i=e.charCodeAt(t++),l=r.charCodeAt(a++);if(i===91){const c=_e(e,t),f=t+(c?3:0),d=j(e,f,n,93),p=e.substring(f,d),m=j(e,d+1,n,47),g=e.substring(d+1,m);t=d+1;const y=a-1;if(c){const x=mt(p,g,r,y,s,e,t+g.length+1,n);if(x)return Object.assign(o||(o={}),x)}const w=j(r,y,s,47,g);if(w==-1)return null;const R=r.substring(y,w);if(!c&&!g&&!R)return null;a=w,(o||(o={}))[p]=decodeURIComponent(R)}else if(i!==l&&!(isNaN(l)&&pt(e,t)))return null}return se(e,t)&&se(r,a)?o||{}:null}function pt(e,t){return e.charCodeAt(t)===91&&_e(e,t+1)}function ae(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function se(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function ie(e){return e.charCodeAt(0)===47?1:0}function _e(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function j(e,t,n,r,a=""){for(;t<n&&e.charCodeAt(t)!==r;)t++;const s=a.length;for(let o=0;o<s;o++)if(e.charCodeAt(t-s+o)!==a.charCodeAt(o))return-1;return t-s}function mt(e,t,n,r,a,s,o,i){n.charCodeAt(r)===47&&r++;let l=a;const c=t+"/";for(;l>=r;){const f=be(s,o,i,n,l,a);if(f){let p=n.substring(r,Math.min(l,a));return p.endsWith(c)&&(p=p.substring(0,p.length-c.length)),f[e]=decodeURIComponent(p),f}const d=gt(n,r,c,l,r-1)+c.length;if(l===d)break;l=d}return null}function gt(e,t,n,r,a){let s=e.lastIndexOf(n,r);return s==r-n.length&&(s=e.lastIndexOf(n,r-n.length-1)),s>t?s:a}var yt=async(e,t,n,r)=>{if(Array.isArray(e))for(const a of e){const s=a[0],o=ht(s,r);if(o){const i=a[1],l=a[3],c=new Array(i.length),f=[],d=wt(t,r);let p;return i.forEach((m,g)=>{oe(m,f,y=>c[g]=y,n)}),oe(d,f,m=>p=m==null?void 0:m.default,n),f.length>0&&await Promise.all(f),[s,o,c,p,l]}}return null},oe=(e,t,n,r)=>{if(typeof e=="function"){const a=X.get(e);if(a)n(a);else{const s=e();typeof s.then=="function"?t.push(s.then(o=>{r!==!1&&X.set(e,o),n(o)})):s&&n(s)}}},wt=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(r=>r[0]===t||t.startsWith(r[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}};async function St(e,t,n){const{render:r,qwikCityPlan:a,manifest:s,checkOrigin:o}=t,i=e.url.pathname,l=dt(i,a.trailingSlash),c=await bt(a,l,e.request.method,o??!0,r);return c?ut(e,c[0],c[1],s,a.trailingSlash,a.basePathname,n):null}async function bt(e,t,n,r,a){const{routes:s,serverPlugins:o,menus:i,cacheModules:l}=e,c=await yt(s,i,l,t),f=Be(o,c,n,r,qe(a));return f.length>0?[c,f]:null}var _t="x-vercel-ip-country",Rt="x-real-ip",At="__vdpl",Tt="VERCEL_SKEW_PROTECTION_ENABLED",xt="VERCEL_DEPLOYMENT_ID",Ct="BASE_URL";function Dt(e){const t={_deserializeData:Te,_serializeData:xe,_verifySerializable:Ce};e.manifest&&De(e.manifest);async function n(r){try{const a=new URL(r.url);if(K(r.method,a))return new Response(null,{headers:{"x-middleware-next":"1"}});const s=globalThis.process,o={mode:"server",locale:void 0,url:a,request:r,env:{get(c){return s.env[c]}},getWritableStream:(c,f,d,p)=>{const{readable:m,writable:g}=new TransformStream;if(o.env.get(Tt)){const w=o.env.get(xt)||"",R=o.env.get(Ct)||"/";r.headers.has("Sec-Fetch-Dest")&&d.set(At,w,{path:R,secure:!0,sameSite:!0,httpOnly:!0})}const y=new Response(m,{status:c,headers:ze(f,d)});return p(y),g},platform:{},getClientConn:()=>({ip:r.headers.get(Rt)??void 0,country:r.headers.get(_t)??void 0})},i=await St(o,e,t);if(i){i.completion.then(f=>{f&&console.error(f)});const c=await i.response;if(c)return c}const l=K(r.method||"GET",a)?"Not Found":Ae(a.pathname);return new Response(l,{status:404,headers:{"Content-Type":"text/html; charset=utf-8","X-Not-Found":a.pathname}})}catch(a){return console.error(a),new Response(String(a||"Error"),{status:500,headers:{"Content-Type":"text/plain; charset=utf-8","X-Error":"vercel-edge"}})}}return n}const kt=Dt({render:Me,qwikCityPlan:Oe,manifest:Pe});export{kt as default};