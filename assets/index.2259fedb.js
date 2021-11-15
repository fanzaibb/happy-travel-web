var L=Object.defineProperty,P=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var E=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))N.call(t,r)&&E(e,r,t[r]);if(f)for(var r of f(t))w.call(t,r)&&E(e,r,t[r]);return e},A=(e,t)=>P(e,I(t));import{u as S,a as R,r as x,o as l,c as _,b as u,d,w as $,F as y,e as H,t as V,f as b,g as C,h as k,i as j,j as M,k as W,l as G,m as Y}from"./vendor.4c0a8f40.js";const F=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};F();var O=(e,t)=>{for(const[r,s]of t)e[r]=s;return e};const U={class:"top-0 left-0 w-full z-50 bg-white flex items-center"},z={class:"container flex justify-between"},B={class:"text-4xl font-bold"},q=b("Taiwan"),J={class:"flex pt-4"},K=["onClick"],X={setup(e){const t=S(),r=R(),s=[{name:"\u666F\u9EDE",value:"spot"},{name:"\u7F8E\u98DF",value:"restaurant"},{name:"\u4F4F\u5BBF",value:"hotel"},{name:"\u6D3B\u52D5",value:"activity"}],o=n=>{t.dispatch("SET_MAIN_TYPE",n),r.push(`/${n}`)},a=()=>{t.dispatch("UPDATE_NAV"),t.dispatch("SET_MAIN_TYPE",""),r.push("/")};return(n,m)=>{const p=x("router-link");return l(),_("header",U,[u("nav",z,[u("div",B,[d(p,{to:"/",onClick:a},{default:$(()=>[q]),_:1})]),u("ul",J,[(l(),_(y,null,H(s,v=>u("li",{key:v.value,class:"px-5 cursor-pointer",onClick:le=>o(v.value)},V(v.name),9,K)),64))])])])}}};var Q=O(X,[["__scopeId","data-v-4f4a0c24"]]);const Z={},ee=C('<section class="bg-blue-600 text-white text-3xl pt-20" data-v-4555d015><nav class="container h-full flex items-center" data-v-4555d015><div class="text-4xl font-bold" data-v-4555d015>Taiwan</div><ul class="flex font-medium text-lg" data-v-4555d015><li class="px-5" data-v-4555d015>\u666F\u9EDE</li><li class="px-5" data-v-4555d015>\u7F8E\u98DF</li><li class="px-5" data-v-4555d015>\u4F4F\u5BBF</li><li class="pl-5" data-v-4555d015>\u6D3B\u52D5</li></ul></nav></section><div class="container h-10" data-v-4555d015>footer-link</div>',2),te=[ee];function re(e,t){return l(),_("footer",null,te)}var se=O(Z,[["render",re],["__scopeId","data-v-4555d015"]]);const oe={setup(e){const t=S();return document.getElementById("app").addEventListener("click",()=>t.dispatch("SHOW_DROPDOWN")),(s,o)=>{const a=x("router-view");return l(),_(y,null,[d(Q),d(a),d(se)],64)}}},ae="modulepreload",g={},ne="/happy-travel-web/",i=function(t,r){return!r||r.length===0?t():Promise.all(r.map(s=>{if(s=`${ne}${s}`,s in g)return;g[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":ae,o||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),o)return new Promise((m,p)=>{n.addEventListener("load",m),n.addEventListener("error",p)})})).then(()=>t())},D=k({history:j(),scrollBehavior(){return{top:0}},routes:[{path:"/",component:()=>i(()=>import("./Home.bd466857.js"),["assets/Home.bd466857.js","assets/CardWrapper.vue_vue&type=style&index=0&scoped=true&lang.2291134b.css","assets/CategoryNav.e175b90f.js","assets/CategoryNav.1a5a6ea5.css","assets/vendor.4c0a8f40.js","assets/search.65a4edfe.js","assets/CardWrapper.30d54ca5.js","assets/VerticalCard.b2fbfc9d.js","assets/location.ef052697.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.485734c2.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.d2f5b89e.css","assets/HorizonCard.ea085741.js"])},{path:"/search",component:()=>i(()=>import("./Search.69486e6f.js"),["assets/Search.69486e6f.js","assets/Search.2dc11916.css","assets/NavTab.cdf39b15.js","assets/vendor.4c0a8f40.js","assets/location.ef052697.js","assets/search.65a4edfe.js","assets/VerticalCard.b2fbfc9d.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.485734c2.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.d2f5b89e.css"])},{path:"/search-city",component:()=>i(()=>import("./SearchCity.9acddc99.js"),["assets/SearchCity.9acddc99.js","assets/SearchCity.55471e5d.css","assets/CardWrapper.vue_vue&type=style&index=0&scoped=true&lang.2291134b.css","assets/NavTab.cdf39b15.js","assets/vendor.4c0a8f40.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.485734c2.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.d2f5b89e.css","assets/CardWrapper.30d54ca5.js","assets/VerticalCard.b2fbfc9d.js","assets/location.ef052697.js","assets/HorizonCard.ea085741.js"])},{path:"/detail",component:()=>i(()=>import("./Detail.c4be49dc.js"),["assets/Detail.c4be49dc.js","assets/Detail.58bb5f05.css","assets/NavTab.cdf39b15.js","assets/vendor.4c0a8f40.js","assets/location.ef052697.js"])},{path:"/spot",component:()=>i(()=>import("./Spot.d46691a7.js"),["assets/Spot.d46691a7.js","assets/CardWrapper.vue_vue&type=style&index=0&scoped=true&lang.2291134b.css","assets/CategoryNav.e175b90f.js","assets/CategoryNav.1a5a6ea5.css","assets/vendor.4c0a8f40.js","assets/search.65a4edfe.js","assets/VerticalCard.b2fbfc9d.js","assets/location.ef052697.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.485734c2.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.d2f5b89e.css"])},{path:"/restaurant",component:()=>i(()=>import("./Restaurant.034a5f35.js"),["assets/Restaurant.034a5f35.js","assets/CardWrapper.vue_vue&type=style&index=0&scoped=true&lang.2291134b.css","assets/CategoryNav.e175b90f.js","assets/CategoryNav.1a5a6ea5.css","assets/vendor.4c0a8f40.js","assets/search.65a4edfe.js","assets/VerticalCard.b2fbfc9d.js","assets/location.ef052697.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.485734c2.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.d2f5b89e.css"])},{path:"/activity",component:()=>i(()=>import("./Activity.da1886be.js"),["assets/Activity.da1886be.js","assets/CardWrapper.vue_vue&type=style&index=0&scoped=true&lang.2291134b.css","assets/CategoryNav.e175b90f.js","assets/CategoryNav.1a5a6ea5.css","assets/vendor.4c0a8f40.js","assets/search.65a4edfe.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.485734c2.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.d2f5b89e.css","assets/HorizonCard.ea085741.js","assets/location.ef052697.js"])},{path:"/hotel",component:()=>i(()=>import("./Hotel.2a0c6756.js"),["assets/Hotel.2a0c6756.js","assets/CardWrapper.vue_vue&type=style&index=0&scoped=true&lang.2291134b.css","assets/CategoryNav.e175b90f.js","assets/CategoryNav.1a5a6ea5.css","assets/vendor.4c0a8f40.js","assets/search.65a4edfe.js","assets/VerticalCard.b2fbfc9d.js","assets/location.ef052697.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.485734c2.js","assets/VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.d2f5b89e.css"])}]});D.beforeEach(async(e,t,r)=>{e.path!=="/"&&!t.href?r({path:"/"}):r()});const c=M.create({baseURL:"https://ptx.transportdata.tw/MOTC/v2/Tourism"});function ie(){let e="e3c094ff4237499c94407751d39cef1a",t="1VHLF8NU_sKTMF88LeGX5V4yb3I",r=new Date().toGMTString(),s=new W("SHA-1","TEXT");s.setHMACKey(t,"TEXT"),s.update("x-date: "+r);let o=s.getHMAC("B64");return{Authorization:'hmac username="'+e+'", algorithm="hmac-sha1", headers="x-date", signature="'+o+'"',"X-Date":r}}c.interceptors.request.use(e=>(e.headers.Authorization=ie(),e),e=>(console.error("Axios request error: "+e),Promise.resolve(e)));c.interceptors.response.use(e=>e.data,e=>(console.error("Axios response error: "+e),Promise.resolve(e)));var ce=G({state:{mainType:"",spot:[],restaurant:[],hotel:[],activity:[],navList:[{type:"city",value:"",text:""},{type:"type",value:"",text:""},{type:"others",value:"",text:""},{type:"detail",value:"",text:""}],searchData:[],showDropdown:!1,detail:[]},mutations:{SET_MAIN_TYPE(e,t){e.mainType=t},SET_SPOT(e,t){e.spot=t},SET_RESTAURANT(e,t){e.restaurant=t},SET_HOTEL(e,t){e.hotel=t},SET_ACTIVITY(e,t){e.activity=t},SET_NAV(e,t){e.navList=t},SHOW_DROPDOWN(e){e.showDropdown=!e.showDropdown},SET_SEARCH_DATA(e,t){e.searchData=t},SET_DETAIL(e,t){e.detail=t}},actions:{SET_MAIN_TYPE({commit:e},t){e("SET_MAIN_TYPE",t)},async GET_SPOT({state:e,commit:t},r){const s=await c({url:`/ScenicSpot/${e.navList[0].value}?$top=${(r==null?void 0:r.page)||4}&$format=JSON`,method:"get"});t("SET_SPOT",s)},async GET_RESTAURANT({state:e,commit:t},r){const s=await c({url:`/Restaurant/${e.navList[0].value}?$top=${(r==null?void 0:r.page)||4}&$format=JSON`,method:"get"});t("SET_RESTAURANT",s)},async GET_HOTEL({state:e,commit:t},r){const s=await c({url:`/Hotel/${e.navList[0].value}?$top=${(r==null?void 0:r.page)||4}&$format=JSON`,method:"get"});t("SET_HOTEL",s)},async GET_ACTIVITY({state:e,commit:t},r){const s=await c({url:`/Activity/${e.navList[0].value}?$top=${(r==null?void 0:r.page)||2}&$format=JSON`,method:"get"});t("SET_ACTIVITY",s)},async GET_SEARCH_DATA({commit:e},t){const r=await c({url:t,method:"get"});e("SET_SEARCH_DATA",r)},UPDATE_NAV({state:e,commit:t},r){let s=[...e.navList];r?s.forEach((o,a)=>{o.type===r.type?s[a]=h({},r):r.clear&&(console.log("clear"),s[a]=A(h({},o),{value:"",text:""}))}):s=[{type:"city",value:"",text:""},{type:"type",value:"",text:""},{type:"others",value:"",text:""},{type:"detail",value:"",text:""}],t("SET_NAV",s)},SHOW_DROPDOWN({commit:e}){e("SHOW_DROPDOWN")},SET_DETAIL({commit:e},t){e("SET_DETAIL",t)}},getters:{}});const T=Y(oe);T.use(D);T.use(ce);T.mount("#app");export{O as _};