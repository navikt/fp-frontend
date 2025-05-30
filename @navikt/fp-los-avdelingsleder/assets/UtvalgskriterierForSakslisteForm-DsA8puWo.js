import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{u as b,N as k,A as h}from"./index.es-BnDWuX8D.js";import{u as T,f as j}from"./withThemeDecorator-DBy2WCuL.js";import{e as x,r as I,a as D,N as v}from"./index.es-Dqs9-cAD.js";import{u as q}from"./useQuery-M1M5ck5z.js";import{u as K}from"./useMutation-C4lKXVQc.js";import{o as F,V as g,c as y,d as w,L as N}from"./fplosAvdelingslederApi-Bs4aIVUB.js";import{A}from"./AndreKriterierVelger-DDd0qYsp.js";import{B as V}from"./BehandlingstypeVelger-BWO76e_Y.js";import{F as B}from"./FagsakYtelseTypeVelger-C20y1z4S.js";import{S as U}from"./SorteringVelger-DFLSzxE3.js";import{u as P}from"./useDebounce-DACqpNg_.js";import{B as p}from"./Box-DiBC9i3i.js";import"./index-mMUbb89k.js";import{H as c,M as f,B as R}from"./nb_NO-BaM8krxd.js";const _="_bredde_grd8c_1",L={bredde:_},M=I(3),Y=D(100),z=(n,e)=>{var a,m;const u=e.behandlingTyper?e.behandlingTyper.reduce((i,s)=>({...i,[s]:!0}),{}):{},o=e.fagsakYtelseTyper?e.fagsakYtelseTyper.reduce((i,s)=>({...i,[s]:!0}),{}):{},d=e.andreKriterier?e.andreKriterier.reduce((i,s)=>({...i,[s.andreKriterierType]:!0}),{}):{},l=e.andreKriterier?e.andreKriterier.reduce((i,s)=>({...i,[`${s.andreKriterierType}_inkluder`]:s.inkluder}),{}):{};return{sakslisteId:e.sakslisteId,navn:e.navn??n.formatMessage({id:"UtvalgskriterierForSakslisteForm.NyListe"}),sortering:e.sortering?e.sortering.sorteringType:void 0,fomDato:e.sortering?e.sortering.fomDato:void 0,tomDato:e.sortering?e.sortering.tomDato:void 0,fra:e.sortering?(a=e.sortering.fra)==null?void 0:a.toString():void 0,til:e.sortering?(m=e.sortering.til)==null?void 0:m.toString():void 0,erDynamiskPeriode:e.sortering?e.sortering.erDynamiskPeriode:void 0,...d,...l,...u,...o}},C=({valgtSaksliste:n,valgtAvdelingEnhet:e})=>{const u=T(),o=j(),{data:d}=q(F(n.sakslisteId,e)),{mutate:l}=K({mutationFn:t=>w(t.sakslisteId,t.navn,t.avdelingEnhet),onSuccess:()=>{u.invalidateQueries({queryKey:[N.SAKSLISTER_FOR_AVDELING]})}}),a=b({defaultValues:z(o,n)}),m=a.watch(),s=P("navn",t=>{l({sakslisteId:n.sakslisteId,navn:t,avdelingEnhet:e})},a.trigger);return r.jsx(k,{formMethods:a,children:r.jsx(p,{padding:"5",borderColor:"border-divider",borderRadius:"0",borderWidth:"1",children:r.jsxs(g,{gap:"2",children:[r.jsx(c,{size:"small",children:r.jsx(f,{id:"UtvalgskriterierForSakslisteForm.Utvalgskriterier"})}),r.jsxs(g,{gap:"4",children:[r.jsxs(y,{justify:"space-between",children:[r.jsx(h,{name:"navn",label:o.formatMessage({id:"UtvalgskriterierForSakslisteForm.Navn"}),validate:[x,M,Y,v],onChange:s,className:L.bredde}),r.jsxs(p,{padding:"2",background:"bg-subtle",children:[r.jsx(R,{size:"small",children:r.jsx(f,{id:"UtvalgskriterierForSakslisteForm.AntallSaker"})}),r.jsx(c,{size:"small",children:d?`${d}`:"0"})]})]}),r.jsxs(y,{justify:"space-between",children:[r.jsxs("div",{children:[r.jsx(B,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e}),r.jsx(V,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e})]}),r.jsx("div",{children:r.jsx(A,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e})}),r.jsx("div",{children:r.jsx(U,{valgtSakslisteId:n.sakslisteId,valgteBehandlingtyper:n.behandlingTyper,valgtAvdelingEnhet:e,erDynamiskPeriode:!!m.erDynamiskPeriode})})]})]})]})})})};C.__docgenInfo={description:"",methods:[],displayName:"UtvalgskriterierForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{C as U};
