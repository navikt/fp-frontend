import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{R as b,u as E,$ as h,L as v,M as g,y as f,H as k,k as A}from"./nb_NO-DrhcNu1S.js";import{I as T,z as u}from"./index.es-Cl_yxThX.js";import{S as V}from"./StoreValuesInLocalStorage-D6Hb4UHw.js";import{u as P}from"./useLosKodeverk-Bf_J3o3R.js";import{r as y}from"./index-uubelm5h.js";import{d as l}from"./dayjs.min-BsYQKNhR.js";import{i as R}from"./isSameOrBefore-DeYxtwBz.js";import{R as j}from"./FlyttReservasjonModal-BzemuNjD.js";import{P as N}from"./Panel-D1Pw-hs1.js";l.extend(R);const Y=a=>a.map(t=>({x:l(t.behandlingFrist).startOf("day").toDate().getTime(),y:t.antall})),F=a=>{const t=[],n=a.map(e=>l(e.x)).reduce((e,i)=>e.isSameOrBefore(i)?e:i,l().startOf("day")).toDate(),s=a.map(e=>l(e.x)).reduce((e,i)=>e.isSameOrAfter(i)?e:i,l().startOf("day")).toDate();for(let e=l(n);e.isSameOrBefore(s);e=e.add(1,"days")){const i=a.filter(o=>l(o.x).isSame(e)).map(o=>o.y).reduce((o,m)=>o+m,0);t.push([e.toDate(),i])}return t},x=({height:a,behandlingerPaVent:t})=>{const n=y.useMemo(()=>Y(t),[t]),s=y.useMemo(()=>F(n),[n]);return r.jsx(N,{children:r.jsx(j,{height:a,option:{tooltip:{trigger:"axis",axisPointer:{snap:!0,label:{formatter:e=>e.axisDimension==="y"?parseInt(e.value,10).toString():l(e.value).format(b)}}},toolbox:{feature:{saveAsImage:{title:"Lagre ",name:"Antall_forstegangsbehandlinger_der_frist_utloper"}}},xAxis:{type:"time",axisLabel:{formatter:"{dd}.{MM}.{yyyy}"}},yAxis:{type:"value"},series:[{data:s,type:"line",areaStyle:{}}],color:["#337c9b"]}})})};x.__docgenInfo={description:"VentefristUtløperGraf.",methods:[],displayName:"VentefristUtløperGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingerPaVent:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsakYtelseType: string;
  behandlingFrist: string;
  antall: number;
}`,signature:{properties:[{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"behandlingFrist",value:{name:"string",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  fagsakYtelseType: string;
  behandlingFrist: string;
  antall: number;
}>`}],raw:"BehandlingVentefrist[]"},description:""}}};const d=(a,t)=>{const n=a.find(s=>s.kode===t);return n?n.navn:""},p="ALLE",c="ventefristUtløperForm",L={valgtYtelsetype:p},G=({height:a,behandlingerPaVent:t,getValueFromLocalStorage:n})=>{const s=P(T.FAGSAK_YTELSE),e=n(c),i=e?JSON.parse(e):void 0,o=E({defaultValues:i||L}),m=o.watch();return r.jsxs(h,{formMethods:o,children:[r.jsx(V,{stateKey:c,values:m}),r.jsx(v,{size:"small",children:r.jsx(g,{id:"VentefristUtløperPanel.SattPaVent"})}),r.jsx(f,{sixteenPx:!0}),r.jsx(k,{gap:"4",children:r.jsx(A,{name:"valgtYtelsetype",isHorizontal:!0,radios:[{value:u.FORELDREPENGER,label:d(s,u.FORELDREPENGER)},{value:u.ENGANGSSTONAD,label:d(s,u.ENGANGSSTONAD)},{value:u.SVANGERSKAPSPENGER,label:d(s,u.SVANGERSKAPSPENGER)},{value:p,label:r.jsx(g,{id:"VentefristUtløperPanel.Alle"})}]})}),r.jsx(f,{sixteenPx:!0}),r.jsx(x,{height:a,behandlingerPaVent:t&&t.filter(S=>m.valgtYtelsetype===p?!0:m.valgtYtelsetype===S.fagsakYtelseType)})]})};G.__docgenInfo={description:"VentefristUtløperPanel.",methods:[],displayName:"VentefristUtløperPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingerPaVent:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsakYtelseType: string;
  behandlingFrist: string;
  antall: number;
}`,signature:{properties:[{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"behandlingFrist",value:{name:"string",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  fagsakYtelseType: string;
  behandlingFrist: string;
  antall: number;
}>`}],raw:"BehandlingVentefrist[]"},description:""},getValueFromLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => string | undefined",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:""}}};export{G as V};
