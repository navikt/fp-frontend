import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{r as m}from"./index-uubelm5h.js";import{u as q,$ as F,F as D}from"./index.es-DSskcgoM.js";import{u as K,H as k,M as b,B as w}from"./nb_NO-Zqge3fS6.js";import{H as A,k as P,e as _,n as R}from"./index.es-BoTLjJqU.js";import{y as h}from"./useRestApiRunner-Co55yBK5.js";import{b as j,a as x}from"./fplosRestApi--K68MEhy.js";import{A as B}from"./AndreKriterierVelger-9QhFJwB4.js";import{B as E}from"./BehandlingstypeVelger-DLMghAa1.js";import{F as N}from"./FagsakYtelseTypeVelger-DWiwgz9Z.js";import{S as V}from"./SorteringVelger-BGcOnLi-.js";import{u as U}from"./useDebounce-Bvt73I3b.js";import{P as z}from"./Panel-Dwv4sAY7.js";import{V as H,H as T}from"./VStack-C7XzQG3E.js";const L="_grayBox_zjuun_1",M="_panel_zjuun_6",Y="_bredde_zjuun_11",y={grayBox:L,panel:M,bredde:Y},O=_(3),$=R(100),C=(n,e)=>{var o,i;const t=e.behandlingTyper?e.behandlingTyper.reduce((a,s)=>({...a,[s]:!0}),{}):{},l=e.fagsakYtelseTyper?e.fagsakYtelseTyper.reduce((a,s)=>({...a,[s]:!0}),{}):{},d=e.andreKriterier?e.andreKriterier.reduce((a,s)=>({...a,[s.andreKriterierType]:!0}),{}):{},u=e.andreKriterier?e.andreKriterier.reduce((a,s)=>({...a,[`${s.andreKriterierType}_inkluder`]:s.inkluder}),{}):{};return{sakslisteId:e.sakslisteId,navn:e.navn?e.navn:n.formatMessage({id:"UtvalgskriterierForSakslisteForm.NyListe"}),sortering:e.sortering?e.sortering.sorteringType:void 0,fomDato:e.sortering?e.sortering.fomDato:void 0,tomDato:e.sortering?e.sortering.tomDato:void 0,fra:e.sortering?(o=e.sortering.fra)==null?void 0:o.toString():void 0,til:e.sortering?(i=e.sortering.til)==null?void 0:i.toString():void 0,erDynamiskPeriode:e.sortering?e.sortering.erDynamiskPeriode:void 0,...d,...u,...t,...l}},G=({valgtSaksliste:n,valgtAvdelingEnhet:e,hentAvdelingensSakslister:t,hentOppgaverForAvdelingAntall:l})=>{const d=K(),{data:u,startRequest:o}=j.useRestApiRunner(x.OPPGAVE_ANTALL);m.useEffect(()=>{o({sakslisteId:n.sakslisteId,avdelingEnhet:e})},[n.sakslisteId]);const i=m.useCallback((p,f)=>{o({sakslisteId:p,avdelingEnhet:f}),l({avdelingEnhet:f})},[]),{startRequest:a}=j.useRestApiRunner(x.LAGRE_SAKSLISTE_NAVN),s=m.useCallback(p=>{a({sakslisteId:n.sakslisteId,navn:p,avdelingEnhet:e}).then(()=>t({avdelingEnhet:e}))},[e,n]),v=m.useMemo(()=>C(d,n),[n]),g=q({defaultValues:v}),I=U("navn",s,g.trigger),c=g.watch();return r.jsx(F,{formMethods:g,children:r.jsxs(z,{className:y.panel,children:[r.jsx(k,{size:"small",children:r.jsx(b,{id:"UtvalgskriterierForSakslisteForm.Utvalgskriterier"})}),r.jsx(h,{eightPx:!0}),r.jsxs(H,{gap:"4",children:[r.jsxs(T,{justify:"space-between",children:[r.jsx(D,{name:"navn",label:d.formatMessage({id:"UtvalgskriterierForSakslisteForm.Navn"}),validate:[A,O,$,P],onChange:I,className:y.bredde}),r.jsxs("div",{className:y.grayBox,children:[r.jsx(w,{size:"small",children:r.jsx(b,{id:"UtvalgskriterierForSakslisteForm.AntallSaker"})}),r.jsx(k,{size:"small",children:u?`${u}`:"0"})]})]}),r.jsxs(T,{justify:"space-between",children:[r.jsxs("div",{children:[r.jsx(N,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e,hentAvdelingensSakslister:t,hentAntallOppgaver:i}),r.jsx(E,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e,hentAvdelingensSakslister:t,hentAntallOppgaver:i})]}),r.jsx("div",{children:r.jsx(B,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e,values:c,hentAvdelingensSakslister:t,hentAntallOppgaver:i})}),r.jsx("div",{children:r.jsx(V,{valgtSakslisteId:n.sakslisteId,valgteBehandlingtyper:n.behandlingTyper,valgtAvdelingEnhet:e,erDynamiskPeriode:!!c.erDynamiskPeriode,hentAvdelingensSakslister:t,hentAntallOppgaver:i})})]})]}),r.jsx(h,{sixteenPx:!0})]})})};G.__docgenInfo={description:"UtvalgskriterierForSakslisteForm",methods:[],displayName:"UtvalgskriterierForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
  sistEndret: string;
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
  antallBehandlinger: number;
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sistEndret",value:{name:"string",required:!0}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
  sorteringType: string;
  fra?: number;
  til?: number;
  fomDato?: string;
  tomDato?: string;
  erDynamiskPeriode: boolean;
}`,signature:{properties:[{key:"sorteringType",value:{name:"string",required:!0}},{key:"fra",value:{name:"number",required:!1}},{key:"til",value:{name:"number",required:!1}},{key:"fomDato",value:{name:"string",required:!1}},{key:"tomDato",value:{name:"string",required:!1}},{key:"erDynamiskPeriode",value:{name:"boolean",required:!0}}]},required:!1}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andreKriterierType: string;
  inkluder: boolean;
}`,signature:{properties:[{key:"andreKriterierType",value:{name:"string",required:!0}},{key:"inkluder",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  andreKriterierType: string;
  inkluder: boolean;
}>`}],raw:"AnnetKriterie[]",required:!1}},{key:"saksbehandlerIdenter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"antallBehandlinger",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
  sistEndret: string;
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
  antallBehandlinger: number;
}>`},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},hentOppgaverForAvdelingAntall:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};export{G as U};
