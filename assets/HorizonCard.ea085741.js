import{C as m,_ as f}from"./VerticalCard.vue_vue&type=style&index=0&scoped=true&lang.485734c2.js";import{_ as g}from"./location.ef052697.js";import{a as x,u as v,o as n,c as i,e as h,b as e,I as y,d as b,t as r,f as p,p as S,F as w,E as C,G as I}from"./vendor.4c0a8f40.js";/* empty css                                                                */import{_ as N}from"./index.2259fedb.js";const D=s=>new Date(s).toISOString().substring(0,10),o=s=>(C("data-v-2625ea54"),s=s(),I(),s),j=["onClick"],k={class:"bg-wrap rounded-l-3xl"},T={class:"card-text p-4 text-left w-full"},E={class:"font-medium text-gray-800 pb-4"},V={class:"ellipsis mb-4 text-gray-200 font-sm font-normal"},A=o(()=>e("div",{class:"divider bg-gray-600 w-full"},null,-1)),P={class:"flex pt-2 font-xs"},B=o(()=>e("img",{src:f,alt:"",class:"mr-3 pl-1"},null,-1)),L={class:"flex pt-1 font-xs"},F=o(()=>e("img",{src:g,alt:"",class:"mr-3"},null,-1)),H={props:{data:{type:Array,default:()=>[]},cols:{type:Number,default:2}},setup(s){const l=s,u=x(),c=v(),_=a=>{const d={type:"detail",clear:!0,value:a.Name,text:a.Name};c.dispatch("UPDATE_NAV",d),c.dispatch("SET_DETAIL",a),u.push("/detail")};return(a,d)=>(n(!0),i(w,null,h(l.data,t=>(n(),i("div",{key:t.ID,class:"activity-card bg-white flex rounded-3xl border border-gray-100 cursor-pointer relative",onClick:U=>_(t)},[e("div",k,[e("div",{class:"card-img-wrapper flex items-end p-4",style:y(`background-image: url(${t.Picture.PictureUrl1})`)},null,4),b(m,{class:"absolute bottom-4 left-4",tag:t.Class1},null,8,["tag"])]),e("div",T,[e("h4",E,r(t.Name),1),e("p",V,r(t.Description),1),A,e("span",P,[B,p(" "+r(S(D)(t.StartTime)),1)]),e("span",L,[F,p(" "+r(t.Location),1)])])],8,j))),128))}};var W=N(H,[["__scopeId","data-v-2625ea54"]]);export{W as H};