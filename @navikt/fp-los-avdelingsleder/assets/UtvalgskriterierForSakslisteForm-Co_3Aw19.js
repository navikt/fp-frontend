import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{u as c,$ as v,F as h}from"./index.es-jc6sdnh5.js";import{u as T,b as q,H as g,M as y,B as D}from"./nb_NO-CujjC0QR.js";import{H as I,k as j,e as K,n as x}from"./index.es-jAoycGC2.js";import{u as F}from"./useQuery-CdRdjBeR.js";import{u as w}from"./useMutation-6dhYCaXX.js";import{e as A,V as p,c as k,f as B,L as P}from"./fplosAvdelingslederApi-CNRcnPVE.js";import{A as R}from"./AndreKriterierVelger-D5c7Vh9o.js";import{B as V}from"./BehandlingstypeVelger-DDul8aj7.js";import{F as U}from"./FagsakYtelseTypeVelger-BuOCM265.js";import{S as Y}from"./SorteringVelger-BbzCGw6D.js";import{u as _}from"./useDebounce-DooGmdvL.js";import{B as b}from"./Box-CMkDE00B.js";import"./index-DRjF_FHU.js";const N="_bredde_grd8c_1",E={bredde:N},L=K(3),M=x(100),H=(n,e)=>{var s,l;const u=e.behandlingTyper?e.behandlingTyper.reduce((a,i)=>({...a,[i]:!0}),{}):{},o=e.fagsakYtelseTyper?e.fagsakYtelseTyper.reduce((a,i)=>({...a,[i]:!0}),{}):{},d=e.andreKriterier?e.andreKriterier.reduce((a,i)=>({...a,[i.andreKriterierType]:!0}),{}):{},m=e.andreKriterier?e.andreKriterier.reduce((a,i)=>({...a,[`${i.andreKriterierType}_inkluder`]:i.inkluder}),{}):{};return{sakslisteId:e.sakslisteId,navn:e.navn?e.navn:n.formatMessage({id:"UtvalgskriterierForSakslisteForm.NyListe"}),sortering:e.sortering?e.sortering.sorteringType:void 0,fomDato:e.sortering?e.sortering.fomDato:void 0,tomDato:e.sortering?e.sortering.tomDato:void 0,fra:e.sortering?(s=e.sortering.fra)==null?void 0:s.toString():void 0,til:e.sortering?(l=e.sortering.til)==null?void 0:l.toString():void 0,erDynamiskPeriode:e.sortering?e.sortering.erDynamiskPeriode:void 0,...d,...m,...u,...o}},f=({valgtSaksliste:n,valgtAvdelingEnhet:e})=>{const u=T(),o=q(),{data:d}=F(A(n.sakslisteId,e)),{mutate:m}=w({mutationFn:t=>B(t.sakslisteId,t.navn,t.avdelingEnhet),onSuccess:()=>{u.invalidateQueries({queryKey:[P.SAKSLISTER_FOR_AVDELING]})}}),s=c({defaultValues:H(o,n)}),l=s.watch(),i=_("navn",t=>{m({sakslisteId:n.sakslisteId,navn:t,avdelingEnhet:e})},s.trigger);return r.jsx(v,{formMethods:s,children:r.jsx(b,{padding:"5",borderColor:"border-divider",borderRadius:"0",borderWidth:"1",children:r.jsxs(p,{gap:"2",children:[r.jsx(g,{size:"small",children:r.jsx(y,{id:"UtvalgskriterierForSakslisteForm.Utvalgskriterier"})}),r.jsxs(p,{gap:"4",children:[r.jsxs(k,{justify:"space-between",children:[r.jsx(h,{name:"navn",label:o.formatMessage({id:"UtvalgskriterierForSakslisteForm.Navn"}),validate:[I,L,M,j],onChange:i,className:E.bredde}),r.jsxs(b,{padding:"2",background:"bg-subtle",children:[r.jsx(D,{size:"small",children:r.jsx(y,{id:"UtvalgskriterierForSakslisteForm.AntallSaker"})}),r.jsx(g,{size:"small",children:d?`${d}`:"0"})]})]}),r.jsxs(k,{justify:"space-between",children:[r.jsxs("div",{children:[r.jsx(U,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e}),r.jsx(V,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e})]}),r.jsx("div",{children:r.jsx(R,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e})}),r.jsx("div",{children:r.jsx(Y,{valgtSakslisteId:n.sakslisteId,valgteBehandlingtyper:n.behandlingTyper,valgtAvdelingEnhet:e,erDynamiskPeriode:!!l.erDynamiskPeriode})})]})]})]})})})};f.__docgenInfo={description:"",methods:[],displayName:"UtvalgskriterierForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"UtvalgskriterierForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{f as U};
