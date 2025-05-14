import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{u as b,O as k,P as h}from"./index.es-BsJjJbyn.js";import{u as T,e as j,H as g,M as y,f as x}from"./nb_NO-tkSV1vCo.js";import{e as I,r as D,a as v,N as q}from"./index.es-DGqVU0h3.js";import{u as K}from"./useQuery-DxU1jdeO.js";import{u as F}from"./useMutation-nupdxx3S.js";import{o as w,V as p,c,d as V,L as N}from"./fplosAvdelingslederApi-DKy6EIY1.js";import{A as P}from"./AndreKriterierVelger-D-JNp29h.js";import{B as A}from"./BehandlingstypeVelger-DiXR9BBL.js";import{F as B}from"./FagsakYtelseTypeVelger-scx_w3-7.js";import{S as U}from"./SorteringVelger-CkSN5_3u.js";import{u as R}from"./useDebounce-BEGo8-kX.js";import{B as f}from"./Box-CYzV1bgx.js";import"./index-mMUbb89k.js";const _="_bredde_grd8c_1",L={bredde:_},M=D(3),Y=v(100),O=(n,e)=>{var a,m;const u=e.behandlingTyper?e.behandlingTyper.reduce((i,s)=>({...i,[s]:!0}),{}):{},o=e.fagsakYtelseTyper?e.fagsakYtelseTyper.reduce((i,s)=>({...i,[s]:!0}),{}):{},d=e.andreKriterier?e.andreKriterier.reduce((i,s)=>({...i,[s.andreKriterierType]:!0}),{}):{},l=e.andreKriterier?e.andreKriterier.reduce((i,s)=>({...i,[`${s.andreKriterierType}_inkluder`]:s.inkluder}),{}):{};return{sakslisteId:e.sakslisteId,navn:e.navn??n.formatMessage({id:"UtvalgskriterierForSakslisteForm.NyListe"}),sortering:e.sortering?e.sortering.sorteringType:void 0,fomDato:e.sortering?e.sortering.fomDato:void 0,tomDato:e.sortering?e.sortering.tomDato:void 0,fra:e.sortering?(a=e.sortering.fra)==null?void 0:a.toString():void 0,til:e.sortering?(m=e.sortering.til)==null?void 0:m.toString():void 0,erDynamiskPeriode:e.sortering?e.sortering.erDynamiskPeriode:void 0,...d,...l,...u,...o}},z=({valgtSaksliste:n,valgtAvdelingEnhet:e})=>{const u=T(),o=j(),{data:d}=K(w(n.sakslisteId,e)),{mutate:l}=F({mutationFn:t=>V(t.sakslisteId,t.navn,t.avdelingEnhet),onSuccess:()=>{u.invalidateQueries({queryKey:[N.SAKSLISTER_FOR_AVDELING]})}}),a=b({defaultValues:O(o,n)}),m=a.watch(),s=R("navn",t=>{l({sakslisteId:n.sakslisteId,navn:t,avdelingEnhet:e})},a.trigger);return r.jsx(k,{formMethods:a,children:r.jsx(f,{padding:"5",borderColor:"border-divider",borderRadius:"0",borderWidth:"1",children:r.jsxs(p,{gap:"2",children:[r.jsx(g,{size:"small",children:r.jsx(y,{id:"UtvalgskriterierForSakslisteForm.Utvalgskriterier"})}),r.jsxs(p,{gap:"4",children:[r.jsxs(c,{justify:"space-between",children:[r.jsx(h,{name:"navn",label:o.formatMessage({id:"UtvalgskriterierForSakslisteForm.Navn"}),validate:[I,M,Y,q],onChange:s,className:L.bredde}),r.jsxs(f,{padding:"2",background:"bg-subtle",children:[r.jsx(x,{size:"small",children:r.jsx(y,{id:"UtvalgskriterierForSakslisteForm.AntallSaker"})}),r.jsx(g,{size:"small",children:d?`${d}`:"0"})]})]}),r.jsxs(c,{justify:"space-between",children:[r.jsxs("div",{children:[r.jsx(B,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e}),r.jsx(A,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e})]}),r.jsx("div",{children:r.jsx(P,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e})}),r.jsx("div",{children:r.jsx(U,{valgtSakslisteId:n.sakslisteId,valgteBehandlingtyper:n.behandlingTyper,valgtAvdelingEnhet:e,erDynamiskPeriode:!!m.erDynamiskPeriode})})]})]})]})})})};z.__docgenInfo={description:"",methods:[],displayName:"UtvalgskriterierForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{z as U};
