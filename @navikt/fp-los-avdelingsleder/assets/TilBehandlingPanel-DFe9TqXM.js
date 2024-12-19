import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{u as B,$ as I,M as O,k as L}from"./index.es-BU4tl1aP.js";import{u as P,L as V,M as E}from"./nb_NO-CZSpk6bt.js";import{u as q}from"./useQuery-Cufi_TnF.js";import{d as l}from"./dayjs.min-CnNqAF5I.js";import{i as F}from"./isSameOrAfter-CxwXDPvl.js";import{i as j}from"./isSameOrBefore-DhP2CF47.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as c}from"./fagsakYtelseType-DI8GXtVr.js";import{K as S}from"./kodeverkTyper-CavWL6Ds.js";import{V as _,c as w,k as M}from"./withQueryClientProvider-D5rUA1vz.js";import{S as U}from"./StoreValuesInLocalStorage-DE3v9gBL.js";import{u as N}from"./useLosKodeverk-EfGSBP6a.js";import{R as Y,A}from"./index.es-C9TXiEHC.js";import{B as i}from"./behandlingType-BdbjGMJD.js";import{R as z}from"./FlyttReservasjonModal-DABA3iZ_.js";import"./index-DRjF_FHU.js";const D=[i.TILBAKEKREVING_REVURDERING,i.TILBAKEKREVING,i.DOKUMENTINNSYN,i.KLAGE,i.REVURDERING,i.FORSTEGANGSSOKNAD],H={[i.TILBAKEKREVING_REVURDERING]:"#ef5d28",[i.TILBAKEKREVING]:"#ff842f",[i.DOKUMENTINNSYN]:"#ffd23b",[i.KLAGE]:"#826ba1",[i.REVURDERING]:"#3385d1",[i.FORSTEGANGSSOKNAD]:"#85d5f0"},v=({height:n,oppgaverPerDato:t,isToUkerValgt:e,behandlingTyper:r})=>{const a=l().subtract(e?2:4,"w").add(1,"d"),y=l(),m=$(t),d=C(m,a,y),u=r.map(s=>s.kode).sort(R),g=Object.keys(d).sort(R).slice().reverse(),p=u.map(s=>H[s]);return o.jsx(z,{height:n,option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{formatter:s=>s.axisDimension==="y"?parseInt(s.value,10).toString():l(s.value).format(Y)}}},toolbox:{feature:{saveAsImage:{title:"Lagre ",name:"Antall_til_behandling"}}},legend:{data:g.map(s=>b(r,s))},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"time",axisLabel:{formatter:"{dd}.{MM}.{yyyy}"}}],yAxis:[{type:"value"}],series:u.map(s=>({name:b(r,s),type:"line",stack:"stackname",areaStyle:{},emphasis:{focus:"series"},data:d[s]})),color:p}})},R=(n,t)=>{const e=D.findIndex(a=>a===n),r=D.findIndex(a=>a===t);return e===r?0:e>r?-1:1},b=(n,t)=>{const e=n.find(r=>r.kode===t);return e?e.navn:""},$=n=>n.reduce((t,e)=>{const r={x:l(e.opprettetDato).startOf("day").toDate(),y:e.antall},a=t[e.behandlingType];return{...t,[e.behandlingType]:a?a.concat(r):[r]}},{}),C=(n,t,e)=>Object.keys(n).reduce((r,a)=>{const y=n[a],m=[];for(let d=l(t);d.isSameOrBefore(e);d=d.add(1,"days")){const u=y.find(f=>l(f.x).startOf("day").isSame(d.startOf("day")));m.push(u?[l(u.x).format(A),u.y]:[d.format(A),0])}return{...r,[a]:m}},{});v.__docgenInfo={description:"",methods:[],displayName:"TilBehandlingGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},oppgaverPerDato:{required:!0,tsType:{name:"Array",elements:[{name:"OppgaveForDatoGraf"}],raw:"OppgaveForDatoGraf[]"},description:""},isToUkerValgt:{required:!0,tsType:{name:"boolean"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"TilBehandlingGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},oppgaverPerDato:{required:!0,tsType:{name:"Array",elements:[{name:"OppgaveForDatoGraf"}],raw:"OppgaveForDatoGraf[]"},description:""},isToUkerValgt:{required:!0,tsType:{name:"boolean"},description:""}}};l.extend(F);l.extend(j);const T="ALLE",h="2",G="tilBehandlingForm",J={ytelseType:T,ukevalg:h},x=({height:n,valgtAvdelingEnhet:t,getValueFromLocalStorage:e})=>{const r=P(),{data:a}=q(M(t)),y=N(S.BEHANDLING_TYPE),m=N(S.FAGSAK_YTELSE),d=e(G),u=d?JSON.parse(d):void 0,f=B({defaultValues:u||J}),g=f.watch();return o.jsxs(I,{formMethods:f,children:[o.jsx(U,{stateKey:G,values:g}),o.jsxs(_,{gap:"4",children:[o.jsx(V,{size:"small",children:o.jsx(E,{id:"TilBehandlingPanel.TilBehandling"})}),o.jsxs(w,{gap:"4",children:[o.jsx(O,{name:"ukevalg",label:"",selectValues:K.map(p=>o.jsx("option",{value:p.kode,children:r.formatMessage({id:p.tekstKode})},p.kode))}),o.jsx(L,{name:"ytelseType",isHorizontal:!0,radios:[{value:c.FORELDREPENGER,label:k(m,c.FORELDREPENGER)},{value:c.ENGANGSSTONAD,label:k(m,c.ENGANGSSTONAD)},{value:c.SVANGERSKAPSPENGER,label:k(m,c.SVANGERSKAPSPENGER)},{value:T,label:o.jsx(E,{id:"TilBehandlingPanel.Alle"})}]})]}),o.jsx(v,{height:n,isToUkerValgt:g.ukevalg===h,behandlingTyper:y,oppgaverPerDato:a?W(a.filter(p=>g.ytelseType===T?!0:g.ytelseType===p.fagsakYtelseType).filter(p=>Q(p,g.ukevalg))):[]})]})]})},K=[{kode:h,tekstKode:"TilBehandlingPanel.ToSisteUker"},{kode:"4",tekstKode:"TilBehandlingPanel.FireSisteUker"}],Q=(n,t)=>{if(t===K[1].kode)return!0;const e=l().subtract(2,"w");return l(n.opprettetDato).isSameOrAfter(e)},k=(n,t)=>{const e=n.find(r=>r.kode===t);return e?e.navn:""},W=n=>{const t=[];return n.forEach(e=>{const r=t.findIndex(a=>a.behandlingType===e.behandlingType&&a.opprettetDato===e.opprettetDato);r===-1?t.push(e):t[r]={behandlingType:t[r].behandlingType,opprettetDato:t[r].opprettetDato,antall:t[r].antall+e.antall}}),t};x.__docgenInfo={description:"",methods:[],displayName:"TilBehandlingPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},getValueFromLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => string | undefined",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"TilBehandlingPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},getValueFromLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => string | undefined",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:""}}};export{x as T};
