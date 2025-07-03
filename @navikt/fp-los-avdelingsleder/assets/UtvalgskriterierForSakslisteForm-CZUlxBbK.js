import{k,h as f,j as r,t as h,l as j,o as T,D as x}from"./iframe-BmHHQCSJ.js";import{u as D,N as I,A as v}from"./index.es-BEibpfcH.js";import{u as q}from"./useQuery-D7FobGRg.js";import{u as K}from"./useMutation-LM38tLFp.js";import{i as F,V as g,H as y,j as w,L as A}from"./fplosAvdelingslederApi-CTzE8oI3.js";import{A as V}from"./AndreKriterierVelger-DwbO8lIx.js";import{B}from"./BehandlingstypeVelger-DLG520S7.js";import{F as N}from"./FagsakYtelseTypeVelger-CEDWhxas.js";import{S as U}from"./SorteringVelger-zS3W1d56.js";import{u as P}from"./useDebounce-Dst3kxfs.js";import{B as p}from"./Box-CXrn1n3l.js";import{H as c,M as b,B as R}from"./nb_NO-BCGp-sP5.js";const _="_bredde_grd8c_1",L={bredde:_},M=j(3),Y=T(100),z=(n,e)=>{var a,l;const m=e.behandlingTyper?e.behandlingTyper.reduce((i,s)=>({...i,[s]:!0}),{}):{},o=e.fagsakYtelseTyper?e.fagsakYtelseTyper.reduce((i,s)=>({...i,[s]:!0}),{}):{},d=e.andreKriterier?e.andreKriterier.reduce((i,s)=>({...i,[s.andreKriterierType]:!0}),{}):{},u=e.andreKriterier?e.andreKriterier.reduce((i,s)=>({...i,[`${s.andreKriterierType}_inkluder`]:s.inkluder}),{}):{};return{sakslisteId:e.sakslisteId,navn:e.navn??n.formatMessage({id:"UtvalgskriterierForSakslisteForm.NyListe"}),sortering:e.sortering?e.sortering.sorteringType:void 0,fomDato:e.sortering?e.sortering.fomDato:void 0,tomDato:e.sortering?e.sortering.tomDato:void 0,fra:e.sortering?(a=e.sortering.fra)==null?void 0:a.toString():void 0,til:e.sortering?(l=e.sortering.til)==null?void 0:l.toString():void 0,erDynamiskPeriode:e.sortering?e.sortering.erDynamiskPeriode:void 0,...d,...u,...m,...o}},C=({valgtSaksliste:n,valgtAvdelingEnhet:e})=>{const m=k(),o=f(),{data:d}=q(F(n.sakslisteId,e)),{mutate:u}=K({mutationFn:t=>w(t.sakslisteId,t.navn,t.avdelingEnhet),onSuccess:()=>{m.invalidateQueries({queryKey:[A.SAKSLISTER_FOR_AVDELING]})}}),a=D({defaultValues:z(o,n)}),l=a.watch(),s=P("navn",t=>{u({sakslisteId:n.sakslisteId,navn:t,avdelingEnhet:e})},a.trigger);return r.jsx(I,{formMethods:a,children:r.jsx(p,{padding:"5",borderColor:"border-divider",borderRadius:"0",borderWidth:"1",children:r.jsxs(g,{gap:"2",children:[r.jsx(c,{size:"small",children:r.jsx(b,{id:"UtvalgskriterierForSakslisteForm.Utvalgskriterier"})}),r.jsxs(g,{gap:"4",children:[r.jsxs(y,{justify:"space-between",children:[r.jsx(v,{name:"navn",control:a.control,label:o.formatMessage({id:"UtvalgskriterierForSakslisteForm.Navn"}),validate:[h,M,Y,x],onChange:s,className:L.bredde}),r.jsxs(p,{padding:"2",background:"bg-subtle",children:[r.jsx(R,{size:"small",children:r.jsx(b,{id:"UtvalgskriterierForSakslisteForm.AntallSaker"})}),r.jsx(c,{size:"small",children:d?`${d}`:"0"})]})]}),r.jsxs(y,{justify:"space-between",children:[r.jsxs("div",{children:[r.jsx(N,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e}),r.jsx(B,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e})]}),r.jsx("div",{children:r.jsx(V,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e})}),r.jsx("div",{children:r.jsx(U,{valgtSakslisteId:n.sakslisteId,valgteBehandlingtyper:n.behandlingTyper,valgtAvdelingEnhet:e,erDynamiskPeriode:!!l.erDynamiskPeriode})})]})]})]})})})};C.__docgenInfo={description:"",methods:[],displayName:"UtvalgskriterierForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
