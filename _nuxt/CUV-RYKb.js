import{d as r,a8 as l,I as u,N as n,a6 as p,l as m}from"./CsdYOyMq.js";import{u as f,f as _,_ as d}from"./a9El_Uc1.js";const y=()=>({unwrap:f,flatUnwrap:_}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},w=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:a=>["primary","info","success","warning","danger"].includes(a)}},setup(a){const o=l(),{flatUnwrap:t,unwrap:s}=y(),c=u(()=>a.icon||h[a.type]);return()=>{const i=t((o.default&&o.default())??[],["ul"]).map(e=>s(e,["li"]));return n("ul",i.map(e=>n("li",[n("span",{class:`list-icon ${a.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(d,{use:()=>e}))])))}}}),v=m(w,[["__scopeId","data-v-b745a563"]]);export{v as default};
