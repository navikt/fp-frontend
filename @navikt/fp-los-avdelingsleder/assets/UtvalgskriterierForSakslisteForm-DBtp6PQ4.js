import{k as b,h as k,j as r,t as f,l as h,o as j,D as T}from"./iframe-DUUg4WYC.js";import{a as x,N as D,A as I}from"./index.es-BkX0E6wS.js";import{u as v}from"./useQuery-B64_0BSJ.js";import{u as q}from"./useMutation-nzuC1sQl.js";import{i as K,V as m,H as u,j as F,L as w}from"./fplosAvdelingslederApi-CrhuuX9s.js";import{A}from"./AndreKriterierVelger-BUjYwcPJ.js";import{B as V}from"./BehandlingstypeVelger-BCX956SC.js";import{F as B}from"./FagsakYtelseTypeVelger-w_QkR7eq.js";import{S as N}from"./SorteringVelger-oj8wUJGP.js";import{u as U}from"./useDebounce-B7u7M4Ut.js";import{B as g}from"./Box-IQLbXb_Y.js";import{H as y,M as p,B as P}from"./nb_NO-U_UfAO4z.js";const R="_bredde_grd8c_1",_={bredde:R},L=h(3),M=j(100),Y=(s,e)=>{const d=e.behandlingTyper?e.behandlingTyper.reduce((n,i)=>({...n,[i]:!0}),{}):{},t=e.fagsakYtelseTyper?e.fagsakYtelseTyper.reduce((n,i)=>({...n,[i]:!0}),{}):{},o=e.andreKriterier?e.andreKriterier.reduce((n,i)=>({...n,[i.andreKriterierType]:!0}),{}):{},l=e.andreKriterier?e.andreKriterier.reduce((n,i)=>({...n,[`${i.andreKriterierType}_inkluder`]:i.inkluder}),{}):{};return{sakslisteId:e.sakslisteId,navn:e.navn??s.formatMessage({id:"UtvalgskriterierForSakslisteForm.NyListe"}),sortering:e.sortering?e.sortering.sorteringType:void 0,fomDato:e.sortering?e.sortering.fomDato:void 0,tomDato:e.sortering?e.sortering.tomDato:void 0,fra:e.sortering?e.sortering.fra?.toString():void 0,til:e.sortering?e.sortering.til?.toString():void 0,erDynamiskPeriode:e.sortering?e.sortering.erDynamiskPeriode:void 0,...o,...l,...d,...t}},z=({valgtSaksliste:s,valgtAvdelingEnhet:e})=>{const d=b(),t=k(),{data:o}=v(K(s.sakslisteId,e)),{mutate:l}=q({mutationFn:a=>F(a.sakslisteId,a.navn,a.avdelingEnhet),onSuccess:()=>{d.invalidateQueries({queryKey:[w.SAKSLISTER_FOR_AVDELING]})}}),n=x({defaultValues:Y(t,s)}),i=n.watch(),c=U("navn",a=>{l({sakslisteId:s.sakslisteId,navn:a,avdelingEnhet:e})},n.trigger);return r.jsx(D,{formMethods:n,children:r.jsx(g,{padding:"5",borderColor:"border-divider",borderRadius:"0",borderWidth:"1",children:r.jsxs(m,{gap:"2",children:[r.jsx(y,{size:"small",children:r.jsx(p,{id:"UtvalgskriterierForSakslisteForm.Utvalgskriterier"})}),r.jsxs(m,{gap:"4",children:[r.jsxs(u,{justify:"space-between",children:[r.jsx(I,{name:"navn",control:n.control,label:t.formatMessage({id:"UtvalgskriterierForSakslisteForm.Navn"}),validate:[f,L,M,T],onChange:a=>c(a),className:_.bredde}),r.jsxs(g,{padding:"2",background:"bg-subtle",children:[r.jsx(P,{size:"small",children:r.jsx(p,{id:"UtvalgskriterierForSakslisteForm.AntallSaker"})}),r.jsx(y,{size:"small",children:o?`${o}`:"0"})]})]}),r.jsxs(u,{justify:"space-between",children:[r.jsxs("div",{children:[r.jsx(B,{valgtSakslisteId:s.sakslisteId,valgtAvdelingEnhet:e}),r.jsx(V,{valgtSakslisteId:s.sakslisteId,valgtAvdelingEnhet:e})]}),r.jsx("div",{children:r.jsx(A,{valgtSakslisteId:s.sakslisteId,valgtAvdelingEnhet:e})}),r.jsx("div",{children:r.jsx(N,{valgtSakslisteId:s.sakslisteId,valgteBehandlingtyper:s.behandlingTyper,valgtAvdelingEnhet:e,erDynamiskPeriode:!!i.erDynamiskPeriode})})]})]})]})})})};z.__docgenInfo={description:"",methods:[],displayName:"UtvalgskriterierForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
