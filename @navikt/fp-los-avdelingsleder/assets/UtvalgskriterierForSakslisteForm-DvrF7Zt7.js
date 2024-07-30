import{r as u,R as r}from"./index-BBkUAzwr.js";import{a as F,u as K,D as w,e as b,M as f,b as E,V as A,H as T,w as P,f as _}from"./nb_NO-ammWO68Y.js";import{r as R,G as B,k as N,I as V}from"./index.es-Ddaq4f5b.js";import{b as v,a as I}from"./fplosRestApi-CKDBHRen.js";import{B as j}from"./BehandlingstypeVelger-wV9dPPlv.js";import{A as x}from"./AndreKriterierVelger-B5y6JIrT.js";import{F as U}from"./FagsakYtelseTypeVelger-zDaH2hUU.js";import{S as z}from"./SorteringVelger-CozCpGXr.js";import{u as L}from"./useDebounce-C319ZWDY.js";import{P as M}from"./Panel-BwoXZ0BW.js";const Y="_grayBox_zjuun_1",O="_panel_zjuun_6",G="_bredde_zjuun_11",y={grayBox:Y,panel:O,bredde:G},H=N(3),C=V(100),$=(n,e)=>{var o,s;const i=e.behandlingTyper?e.behandlingTyper.reduce((a,t)=>({...a,[t]:!0}),{}):{},l=e.fagsakYtelseTyper?e.fagsakYtelseTyper.reduce((a,t)=>({...a,[t]:!0}),{}):{},m=e.andreKriterier?e.andreKriterier.reduce((a,t)=>({...a,[t.andreKriterierType]:!0}),{}):{},d=e.andreKriterier?e.andreKriterier.reduce((a,t)=>({...a,[`${t.andreKriterierType}_inkluder`]:t.inkluder}),{}):{};return{sakslisteId:e.sakslisteId,navn:e.navn?e.navn:n.formatMessage({id:"UtvalgskriterierForSakslisteForm.NyListe"}),sortering:e.sortering?e.sortering.sorteringType:void 0,fomDato:e.sortering?e.sortering.fomDato:void 0,tomDato:e.sortering?e.sortering.tomDato:void 0,fra:e.sortering?(o=e.sortering.fra)==null?void 0:o.toString():void 0,til:e.sortering?(s=e.sortering.til)==null?void 0:s.toString():void 0,erDynamiskPeriode:e.sortering?e.sortering.erDynamiskPeriode:void 0,...m,...d,...i,...l}},h=({valgtSaksliste:n,valgtAvdelingEnhet:e,hentAvdelingensSakslister:i,hentOppgaverForAvdelingAntall:l})=>{const m=F(),{data:d,startRequest:o}=v.useRestApiRunner(I.OPPGAVE_ANTALL);u.useEffect(()=>{o({sakslisteId:n.sakslisteId,avdelingEnhet:e})},[n.sakslisteId]);const s=u.useCallback((p,k)=>{o({sakslisteId:p,avdelingEnhet:k}),l({avdelingEnhet:k})},[]),{startRequest:a}=v.useRestApiRunner(I.LAGRE_SAKSLISTE_NAVN),t=u.useCallback(p=>{a({sakslisteId:n.sakslisteId,navn:p,avdelingEnhet:e}).then(()=>i({avdelingEnhet:e}))},[e,n]),q=u.useMemo(()=>$(m,n),[n]),g=K({defaultValues:q}),D=L("navn",t,g.trigger),c=g.watch();return r.createElement(w,{formMethods:g},r.createElement(M,{className:y.panel},r.createElement(b,{size:"small"},r.createElement(f,{id:"UtvalgskriterierForSakslisteForm.Utvalgskriterier"})),r.createElement(E,{eightPx:!0}),r.createElement(A,{gap:"4"},r.createElement(T,{justify:"space-between"},r.createElement(P,{name:"navn",label:m.formatMessage({id:"UtvalgskriterierForSakslisteForm.Navn"}),validate:[R,H,C,B],onChange:D,className:y.bredde}),r.createElement("div",{className:y.grayBox},r.createElement(_,{size:"small"},r.createElement(f,{id:"UtvalgskriterierForSakslisteForm.AntallSaker"})),r.createElement(b,{size:"small"},d?`${d}`:"0"))),r.createElement(T,{justify:"space-between"},r.createElement("div",null,r.createElement(U,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e,hentAvdelingensSakslister:i,hentAntallOppgaver:s}),r.createElement(j,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e,hentAvdelingensSakslister:i,hentAntallOppgaver:s})),r.createElement("div",null,r.createElement(x,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e,values:c,hentAvdelingensSakslister:i,hentAntallOppgaver:s})),r.createElement("div",null,r.createElement(z,{valgtSakslisteId:n.sakslisteId,valgteBehandlingtyper:n.behandlingTyper,valgtAvdelingEnhet:e,erDynamiskPeriode:!!c.erDynamiskPeriode,hentAvdelingensSakslister:i,hentAntallOppgaver:s})))),r.createElement(E,{sixteenPx:!0})))},ae=h;h.__docgenInfo={description:"UtvalgskriterierForSakslisteForm",methods:[],displayName:"UtvalgskriterierForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},hentOppgaverForAvdelingAntall:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};export{ae as U};
