import{r as p,R as a}from"./index-DogsOklH.js";import{u as D,a as K,h as V,O as w,F as L,M as O,B as c,S as P,q,V as k,L as N,e as B,i as M,d as S,o as v}from"./nb_NO-FyPNv8I8.js";import{K as b}from"./kodeverkTyper-4shgb08m.js";import{g as u}from"./kodeverkUtils-d7epiQ_o.js";import{c as T,a as j,R as G}from"./fplosSaksbehandlerRestApi-P4G0FdKv.js";var x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};const U=p.forwardRef((e,t)=>{var{title:n,titleId:r}=e,s=x(e,["title","titleId"]);let i=D();return i=n?r||"title-"+i:void 0,p.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":i},s),n?p.createElement("title",{id:i},n):null,p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM3.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0ZM9 15.75A5.25 5.25 0 0 0 3.75 21a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 13.5 0 .75.75 0 0 1-1.5 0A5.25 5.25 0 0 0 9 15.75Zm7.214-10.824a.75.75 0 1 0-.428 1.438A2.752 2.752 0 0 1 15 11.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 .75.75 4.25 4.25 0 0 1 4.25 4.25.75.75 0 0 0 1.5 0 5.75 5.75 0 0 0-4.206-5.539 4.251 4.251 0 0 0-.33-8.035Z",fill:"currentColor"}))}),H=U;var Y=(e=>(e.OPPRETT_BEHANDLING="OPPRBEH",e.BEHANDLINGSFRIST="BEHFRIST",e.BELOP="BELOP",e.FEILUTBETALINGSTART="FEILUTBETALINGSTART",e.FORSTE_STONADSDAG="FORSTONAD",e))(Y||{}),$=(e=>(e.TIL_BESLUTTER="TIL_BESLUTTER",e.REGISTRER_PAPIRSOKNAD="PAPIRSOKNAD",e.UTBETALING_TIL_BRUKER="UTBETALING_TIL_BRUKER",e))($||{});const Z="_navnInput_ij859_1",C="_marginFilters_ij859_5",z="_saksbehandlerIkon_ij859_9",J="_personIcon_ij859_13",g={navnInput:Z,marginFilters:C,saksbehandlerIkon:z,personIcon:J},Q=(e,t,n)=>{const r=t("sakslisteId");if(r){if(e.some(s=>`${s.sakslisteId}`===r))return parseInt(r,10);n("sakslisteId")}return e.length>0?e[0].sakslisteId:void 0},W=(e,t,n)=>{if(e.length===0)return{sakslisteId:void 0};const r=Q(e,t,n);return{sakslisteId:r?`${r}`:void 0}},I=(e,t)=>e.find(n=>t===`${n.sakslisteId}`),X=(e,t,n)=>n&&n.fagsakYtelseTyper.length>0?n.fagsakYtelseTyper.map(r=>u(t,b.FAGSAK_YTELSE,r)):[e.formatMessage({id:"SakslisteVelgerForm.Alle"})],ee=(e,t,n)=>n&&n.behandlingTyper.length>0?n.behandlingTyper.map(r=>u(t,b.BEHANDLING_TYPE,r)):[e.formatMessage({id:"SakslisteVelgerForm.Alle"})],re=(e,t,n)=>n&&n.andreKriterier.length>0?n.andreKriterier.map(r=>r.inkluder?u(t,"AndreKriterierType",r.andreKriterierType):e.formatMessage({id:"SakslisteVelgerForm.Uten"},{kriterie:u(t,"AndreKriterierType",r.andreKriterierType)})):[e.formatMessage({id:"SakslisteVelgerForm.Alle"})],A=(e,t)=>e.fomDato?e.tomDato?t.formatMessage({id:"SakslisteVelgerForm.Sorteringsinfo"},e):t.formatMessage({id:"SakslisteVelgerForm.SorteringsinfoFom"},e):t.formatMessage({id:"SakslisteVelgerForm.SorteringsinfoTom"},e),te=(e,t,n,r,s)=>{if(!r&&!s)return u(t,"KøSortering",n);const i={navn:u(t,"KøSortering",n),fomDato:r?S(r).format(v):void 0,tomDato:s?S(s).format(v):void 0,br:a.createElement("br",null)};return A(i,e)},ne=(e,t,n,r,s)=>{if(!r&&!s)return u(t,"KøSortering",n);const i={navn:u(t,"KøSortering",n),fomDato:r?S().add(r,"days").format(v):void 0,tomDato:s?S().add(s,"days").format(v):void 0,br:a.createElement("br",null)};return A(i,e)},ae=(e,t,n)=>{if(!n||!n.sortering)return"";const{erDynamiskPeriode:r,sorteringType:s,fra:i,til:o,fomDato:d,tomDato:y}=n.sortering;return r?ne(e,t,s,i,o):te(e,t,s,d,y)},se=e=>{if(!(!e||e.length===0))return a.createElement("div",null,a.createElement(N,{size:"small"},a.createElement(B,{id:"SakslisteVelgerForm.SaksbehandlerToolip"})),e.map(t=>t.navn).sort((t,n)=>t.localeCompare(n)).map(t=>a.createElement(M,{size:"small",key:t},t)))},F=({sakslister:e,setValgtSakslisteId:t,fetchAntallOppgaver:n,getValueFromLocalStorage:r,setValueInLocalStorage:s,removeValueFromLocalStorage:i})=>{const o=K(),d=[...e].sort((m,_)=>m.navn.localeCompare(_.navn)),{data:y,startRequest:h}=T.useRestApiRunner(j.SAKSLISTE_SAKSBEHANDLERE),f=T.useGlobalStateRestApiData(G.KODEVERK_LOS),R=p.useMemo(()=>se(y),[y]),E=V({defaultValues:W(d,r,i)}),l=E.watch("sakslisteId");return p.useEffect(()=>{if(l){s("sakslisteId",l);const m=parseInt(l,10);t(m),h({sakslisteId:m}),n({sakslisteId:m})}},[l]),a.createElement(w,{formMethods:E},a.createElement(L,null,a.createElement(O,null,a.createElement(c,{className:g.navnInput},a.createElement(P,{name:"sakslisteId",label:o.formatMessage({id:"SakslisteVelgerForm.Saksliste"}),selectValues:d.map(m=>a.createElement("option",{key:m.sakslisteId,value:`${m.sakslisteId}`},m.navn))})),l&&a.createElement(a.Fragment,null,a.createElement(c,null,a.createElement("div",{className:g.saksbehandlerIkon}),a.createElement(q,{content:R,alignBottom:!0},a.createElement(H,{className:g.personIcon}))),a.createElement(c,{className:g.marginFilters},a.createElement(k,{header:o.formatMessage({id:"SakslisteVelgerForm.Stonadstype"}),texts:X(o,f,I(d,l))})),a.createElement(c,{className:g.marginFilters},a.createElement(k,{header:o.formatMessage({id:"SakslisteVelgerForm.Behandlingstype"}),texts:ee(o,f,I(d,l))})),a.createElement(c,{className:g.marginFilters},a.createElement(k,{header:o.formatMessage({id:"SakslisteVelgerForm.AndreKriterier"}),texts:re(o,f,I(d,l))})),a.createElement(c,{className:g.marginFilters},a.createElement(k,{header:o.formatMessage({id:"SakslisteVelgerForm.Sortering"}),texts:[ae(o,f,I(d,l))]}))))))},ue=F;F.__docgenInfo={description:"SakslisteVelgerForm",methods:[],displayName:"SakslisteVelgerForm",props:{sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Saksliste[]"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},fetchAntallOppgaver:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: { sakslisteId: number }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ sakslisteId: number }",signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},getValueFromLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => string | undefined",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:""},setValueInLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string, value: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},removeValueFromLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""}}};export{$ as A,Y as K,ue as S};
