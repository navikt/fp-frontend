import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{r as m}from"./index-uubelm5h.js";import{d as q,u as D,$ as F,f as k,M as b,y as h,V as K,H as j,D as A,g as P}from"./nb_NO-C3qr7Zu2.js";import{V as w,X as _,A as R,P as V}from"./index.es-B356lO2T.js";import{b as x,a as T}from"./fplosRestApi-1yojVYCb.js";import{B}from"./BehandlingstypeVelger-DIRvjvER.js";import{A as E}from"./AndreKriterierVelger-DScYRe-C.js";import{F as N}from"./FagsakYtelseTypeVelger-mjZwT-3X.js";import{S as U}from"./SorteringVelger-yjz8fWHU.js";import{u as z}from"./useDebounce-sDbwM9lX.js";import{P as L}from"./Panel-BC7pbztL.js";const M="_grayBox_zjuun_1",Y="_panel_zjuun_6",O="_bredde_zjuun_11",y={grayBox:M,panel:Y,bredde:O},H=R(3),$=V(100),C=(n,e)=>{var o,i;const t=e.behandlingTyper?e.behandlingTyper.reduce((a,s)=>({...a,[s]:!0}),{}):{},l=e.fagsakYtelseTyper?e.fagsakYtelseTyper.reduce((a,s)=>({...a,[s]:!0}),{}):{},d=e.andreKriterier?e.andreKriterier.reduce((a,s)=>({...a,[s.andreKriterierType]:!0}),{}):{},u=e.andreKriterier?e.andreKriterier.reduce((a,s)=>({...a,[`${s.andreKriterierType}_inkluder`]:s.inkluder}),{}):{};return{sakslisteId:e.sakslisteId,navn:e.navn?e.navn:n.formatMessage({id:"UtvalgskriterierForSakslisteForm.NyListe"}),sortering:e.sortering?e.sortering.sorteringType:void 0,fomDato:e.sortering?e.sortering.fomDato:void 0,tomDato:e.sortering?e.sortering.tomDato:void 0,fra:e.sortering?(o=e.sortering.fra)==null?void 0:o.toString():void 0,til:e.sortering?(i=e.sortering.til)==null?void 0:i.toString():void 0,erDynamiskPeriode:e.sortering?e.sortering.erDynamiskPeriode:void 0,...d,...u,...t,...l}},G=({valgtSaksliste:n,valgtAvdelingEnhet:e,hentAvdelingensSakslister:t,hentOppgaverForAvdelingAntall:l})=>{const d=q(),{data:u,startRequest:o}=x.useRestApiRunner(T.OPPGAVE_ANTALL);m.useEffect(()=>{o({sakslisteId:n.sakslisteId,avdelingEnhet:e})},[n.sakslisteId]);const i=m.useCallback((p,f)=>{o({sakslisteId:p,avdelingEnhet:f}),l({avdelingEnhet:f})},[]),{startRequest:a}=x.useRestApiRunner(T.LAGRE_SAKSLISTE_NAVN),s=m.useCallback(p=>{a({sakslisteId:n.sakslisteId,navn:p,avdelingEnhet:e}).then(()=>t({avdelingEnhet:e}))},[e,n]),v=m.useMemo(()=>C(d,n),[n]),g=D({defaultValues:v}),I=z("navn",s,g.trigger),c=g.watch();return r.jsx(F,{formMethods:g,children:r.jsxs(L,{className:y.panel,children:[r.jsx(k,{size:"small",children:r.jsx(b,{id:"UtvalgskriterierForSakslisteForm.Utvalgskriterier"})}),r.jsx(h,{eightPx:!0}),r.jsxs(K,{gap:"4",children:[r.jsxs(j,{justify:"space-between",children:[r.jsx(A,{name:"navn",label:d.formatMessage({id:"UtvalgskriterierForSakslisteForm.Navn"}),validate:[w,H,$,_],onChange:I,className:y.bredde}),r.jsxs("div",{className:y.grayBox,children:[r.jsx(P,{size:"small",children:r.jsx(b,{id:"UtvalgskriterierForSakslisteForm.AntallSaker"})}),r.jsx(k,{size:"small",children:u?`${u}`:"0"})]})]}),r.jsxs(j,{justify:"space-between",children:[r.jsxs("div",{children:[r.jsx(N,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e,hentAvdelingensSakslister:t,hentAntallOppgaver:i}),r.jsx(B,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e,hentAvdelingensSakslister:t,hentAntallOppgaver:i})]}),r.jsx("div",{children:r.jsx(E,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e,values:c,hentAvdelingensSakslister:t,hentAntallOppgaver:i})}),r.jsx("div",{children:r.jsx(U,{valgtSakslisteId:n.sakslisteId,valgteBehandlingtyper:n.behandlingTyper,valgtAvdelingEnhet:e,erDynamiskPeriode:!!c.erDynamiskPeriode,hentAvdelingensSakslister:t,hentAntallOppgaver:i})})]})]}),r.jsx(h,{sixteenPx:!0})]})})};G.__docgenInfo={description:"UtvalgskriterierForSakslisteForm",methods:[],displayName:"UtvalgskriterierForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
