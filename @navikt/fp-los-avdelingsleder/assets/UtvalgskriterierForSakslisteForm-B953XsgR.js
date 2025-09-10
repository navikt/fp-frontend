import{k as g,h as y,j as r,t as p,l as c,o as f,D as b}from"./iframe-BfbCBOdg.js";import{b as k,D as h,C as T}from"./index.es-dddXslEL.js";import{u as D}from"./useMutation-CLn0hbTz.js";import{V as u,H as I,j,L as x}from"./fplosAvdelingslederApi-DY-GDfyc.js";import{A as K}from"./AndreKriterierVelger-BiF3HRV_.js";import{B as q}from"./BehandlingstypeVelger-BKn-UmN0.js";import{F as v}from"./FagsakYtelseTypeVelger-ALcCHdBc.js";import{S as F}from"./SorteringVelger-BoDkETG_.js";import{u as w}from"./useDebounce-CzkWP5k8.js";import{B as V}from"./Box-CZyThlzX.js";import{H as N,M as A}from"./nb_NO-ChDJGE5I.js";const P="_bredde_grd8c_1",R={bredde:P},U=c(3),_=f(100),L=(n,e)=>{const d=e.behandlingTyper?e.behandlingTyper.reduce((s,i)=>({...s,[i]:!0}),{}):{},o=e.fagsakYtelseTyper?e.fagsakYtelseTyper.reduce((s,i)=>({...s,[i]:!0}),{}):{},m=e.andreKriterier?e.andreKriterier.reduce((s,i)=>({...s,[i.andreKriterierType]:!0}),{}):{},a=e.andreKriterier?e.andreKriterier.reduce((s,i)=>({...s,[`${i.andreKriterierType}_inkluder`]:i.inkluder}),{}):{};return{sakslisteId:e.sakslisteId,navn:e.navn??n.formatMessage({id:"UtvalgskriterierForSakslisteForm.NyListe"}),sortering:e.sortering?e.sortering.sorteringType:void 0,fomDato:e.sortering?e.sortering.fomDato:void 0,tomDato:e.sortering?e.sortering.tomDato:void 0,fra:e.sortering?e.sortering.fra?.toString():void 0,til:e.sortering?e.sortering.til?.toString():void 0,erDynamiskPeriode:e.sortering?e.sortering.erDynamiskPeriode:void 0,...m,...a,...d,...o}},M=({valgtSaksliste:n,valgtAvdelingEnhet:e})=>{const d=g(),o=y(),{mutate:m}=D({mutationFn:t=>j(t.sakslisteId,t.navn,t.avdelingEnhet),onSuccess:()=>{d.invalidateQueries({queryKey:[x.SAKSLISTER_FOR_AVDELING]})}}),a=k({defaultValues:L(o,n)}),s=a.watch(),l=w("navn",t=>{m({sakslisteId:n.sakslisteId,navn:t,avdelingEnhet:e})},a.trigger);return r.jsx(h,{formMethods:a,children:r.jsx(V.New,{padding:"5",borderColor:"neutral-subtle",borderRadius:"0",borderWidth:"1",children:r.jsxs(u,{gap:"space-8",children:[r.jsx(N,{size:"small",level:"2",children:r.jsx(A,{id:"UtvalgskriterierForSakslisteForm.Utvalgskriterier"})}),r.jsxs(u,{gap:"space-16",children:[r.jsx(T,{name:"navn",control:a.control,label:o.formatMessage({id:"UtvalgskriterierForSakslisteForm.Navn"}),validate:[p,U,_,b],onChange:t=>l(t),className:R.bredde}),r.jsxs(I,{justify:"space-between",children:[r.jsxs(u,{gap:"space-16",children:[r.jsx(v,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e}),r.jsx(q,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e})]}),r.jsx("div",{children:r.jsx(K,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e})}),r.jsx("div",{children:r.jsx(F,{valgtSakslisteId:n.sakslisteId,valgteBehandlingtyper:n.behandlingTyper,valgtAvdelingEnhet:e,erDynamiskPeriode:!!s.erDynamiskPeriode})})]})]})]})})})};M.__docgenInfo={description:"",methods:[],displayName:"UtvalgskriterierForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
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
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"AnnetKriterie[]",required:!1}},{key:"saksbehandlerIdenter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
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
}>`},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{M as U};
