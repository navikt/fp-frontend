import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{r as c}from"./index-uubelm5h.js";import{d as v}from"./dayjs.min-BsYQKNhR.js";import{u as x,d as R,g as _,$ as D,W as K,H as w,L as p,q as L,p as V,G as k,e as N,f as P,j as q,R as S}from"./nb_NO-DLTQouge.js";import{K as h}from"./kodeverkTyper-CavWL6Ds.js";import{g as u}from"./kodeverkUtils-RGNAgZhp.js";import{c as b,a as O,R as B}from"./fplosSaksbehandlerRestApi-uic_MrxI.js";var M=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const G=c.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=M(e,["title","titleId"]);let i=x();return i=t?r||"title-"+i:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),t?c.createElement("title",{id:i},t):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M3.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M9 15.75A5.25 5.25 0 0 0 3.75 21a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 13.5 0 .75.75 0 0 1-1.5 0A5.25 5.25 0 0 0 9 15.75m7.214-10.824a.75.75 0 1 0-.428 1.438A2.752 2.752 0 0 1 15 11.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 .75.75 4.25 4.25 0 0 1 4.25 4.25.75.75 0 0 0 1.5 0 5.75 5.75 0 0 0-4.206-5.539 4.251 4.251 0 0 0-.33-8.035",clipRule:"evenodd"}))});var H=(e=>(e.OPPRETT_BEHANDLING="OPPRBEH",e.BEHANDLINGSFRIST="BEHFRIST",e.BELOP="BELOP",e.FEILUTBETALINGSTART="FEILUTBETALINGSTART",e.FORSTE_STONADSDAG="FORSTONAD",e))(H||{}),U=(e=>(e.TIL_BESLUTTER="TIL_BESLUTTER",e.REGISTRER_PAPIRSOKNAD="PAPIRSOKNAD",e.UTBETALING_TIL_BRUKER="UTBETALING_TIL_BRUKER",e))(U||{});const Y="_navnInput_ij859_1",$="_marginFilters_ij859_5",z="_saksbehandlerIkon_ij859_9",C="_personIcon_ij859_13",g={navnInput:Y,marginFilters:$,saksbehandlerIkon:z,personIcon:C},W=(e,n,t)=>{const r=n("sakslisteId");if(r){if(e.some(s=>`${s.sakslisteId}`===r))return parseInt(r,10);t("sakslisteId")}return e.length>0?e[0].sakslisteId:void 0},Z=(e,n,t)=>{if(e.length===0)return{sakslisteId:void 0};const r=W(e,n,t);return{sakslisteId:r?`${r}`:void 0}},I=(e,n)=>e.find(t=>n===`${t.sakslisteId}`),J=(e,n,t)=>t&&t.fagsakYtelseTyper.length>0?t.fagsakYtelseTyper.map(r=>u(n,h.FAGSAK_YTELSE,r)):[e.formatMessage({id:"SakslisteVelgerForm.Alle"})],Q=(e,n,t)=>t&&t.behandlingTyper.length>0?t.behandlingTyper.map(r=>u(n,h.BEHANDLING_TYPE,r)):[e.formatMessage({id:"SakslisteVelgerForm.Alle"})],X=(e,n,t)=>t&&t.andreKriterier.length>0?t.andreKriterier.map(r=>r.inkluder?u(n,"AndreKriterierType",r.andreKriterierType):e.formatMessage({id:"SakslisteVelgerForm.Uten"},{kriterie:u(n,"AndreKriterierType",r.andreKriterierType)})):[e.formatMessage({id:"SakslisteVelgerForm.Alle"})],A=(e,n)=>e.fomDato?e.tomDato?n.formatMessage({id:"SakslisteVelgerForm.Sorteringsinfo"},e):n.formatMessage({id:"SakslisteVelgerForm.SorteringsinfoFom"},e):n.formatMessage({id:"SakslisteVelgerForm.SorteringsinfoTom"},e),ee=(e,n,t,r,s)=>{if(!r&&!s)return u(n,"KøSortering",t);const i={navn:u(n,"KøSortering",t),fomDato:r?v(r).format(S):void 0,tomDato:s?v(s).format(S):void 0,br:a.jsx("br",{})};return A(i,e)},re=(e,n,t,r,s)=>{if(!r&&!s)return u(n,"KøSortering",t);const i={navn:u(n,"KøSortering",t),fomDato:r?v().add(r,"days").format(S):void 0,tomDato:s?v().add(s,"days").format(S):void 0,br:a.jsx("br",{})};return A(i,e)},ne=(e,n,t)=>{if(!t||!t.sortering)return"";const{erDynamiskPeriode:r,sorteringType:s,fra:i,til:o,fomDato:m,tomDato:y}=t.sortering;return r?re(e,n,s,i,o):ee(e,n,s,m,y)},te=e=>{if(!(!e||e.length===0))return a.jsxs("div",{children:[a.jsx(N,{size:"small",children:a.jsx(P,{id:"SakslisteVelgerForm.SaksbehandlerToolip"})}),e.map(n=>n.navn).sort((n,t)=>n.localeCompare(t)).map(n=>a.jsx(q,{size:"small",children:n},n))]})},ae=({sakslister:e,setValgtSakslisteId:n,fetchAntallOppgaver:t,getValueFromLocalStorage:r,setValueInLocalStorage:s,removeValueFromLocalStorage:i})=>{const o=R(),m=[...e].sort((d,F)=>d.navn.localeCompare(F.navn)),{data:y,startRequest:j}=b.useRestApiRunner(O.SAKSLISTE_SAKSBEHANDLERE),f=b.useGlobalStateRestApiData(B.KODEVERK_LOS),E=c.useMemo(()=>te(y),[y]),T=_({defaultValues:Z(m,r,i)}),l=T.watch("sakslisteId");return c.useEffect(()=>{if(l){s("sakslisteId",l);const d=parseInt(l,10);n(d),j({sakslisteId:d}),t({sakslisteId:d})}},[l]),a.jsx(D,{formMethods:T,children:a.jsx(K,{children:a.jsxs(w,{children:[a.jsx(p,{className:g.navnInput,children:a.jsx(L,{name:"sakslisteId",label:o.formatMessage({id:"SakslisteVelgerForm.Saksliste"}),selectValues:m.map(d=>a.jsx("option",{value:`${d.sakslisteId}`,children:d.navn},d.sakslisteId))})}),l&&a.jsxs(a.Fragment,{children:[a.jsxs(p,{children:[a.jsx("div",{className:g.saksbehandlerIkon}),a.jsx(V,{content:E,alignBottom:!0,children:a.jsx(G,{className:g.personIcon})})]}),a.jsx(p,{className:g.marginFilters,children:a.jsx(k,{header:o.formatMessage({id:"SakslisteVelgerForm.Stonadstype"}),texts:J(o,f,I(m,l))})}),a.jsx(p,{className:g.marginFilters,children:a.jsx(k,{header:o.formatMessage({id:"SakslisteVelgerForm.Behandlingstype"}),texts:Q(o,f,I(m,l))})}),a.jsx(p,{className:g.marginFilters,children:a.jsx(k,{header:o.formatMessage({id:"SakslisteVelgerForm.AndreKriterier"}),texts:X(o,f,I(m,l))})}),a.jsx(p,{className:g.marginFilters,children:a.jsx(k,{header:o.formatMessage({id:"SakslisteVelgerForm.Sortering"}),texts:[ne(o,f,I(m,l))]})})]})]})})})};ae.__docgenInfo={description:"SakslisteVelgerForm",methods:[],displayName:"SakslisteVelgerForm",props:{sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn: string;
  behandlingTyper: string[];
  fagsakYtelseTyper: string[];
  andreKriterier: AnnetKriterie[];
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andreKriterierType: string;
  inkluder: boolean;
}`,signature:{properties:[{key:"andreKriterierType",value:{name:"string",required:!0}},{key:"inkluder",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  andreKriterierType: string;
  inkluder: boolean;
}>`}],raw:"AnnetKriterie[]",required:!0}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
  sorteringType: string;
  fra?: number;
  til?: number;
  fomDato?: string;
  tomDato?: string;
  erDynamiskPeriode: boolean;
}`,signature:{properties:[{key:"sorteringType",value:{name:"string",required:!0}},{key:"fra",value:{name:"number",required:!1}},{key:"til",value:{name:"number",required:!1}},{key:"fomDato",value:{name:"string",required:!1}},{key:"tomDato",value:{name:"string",required:!1}},{key:"erDynamiskPeriode",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn: string;
  behandlingTyper: string[];
  fagsakYtelseTyper: string[];
  andreKriterier: AnnetKriterie[];
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
}>`}],raw:"Saksliste[]"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},fetchAntallOppgaver:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: { sakslisteId: number }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ sakslisteId: number }",signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},getValueFromLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => string | undefined",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:""},setValueInLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string, value: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},removeValueFromLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""}}};export{U as A,H as K,ae as S};
