import{c as g,u as y,j as r,t as p,d as c,o as f,D as k}from"./iframe-e0YQGZUb.js";import{a as T,C as b,k as h}from"./index.es-P6v7M9GX.js";import{u as v}from"./useMutation-Co0UiqYg.js";import{V as m,H as D,f as I,L as B}from"./fplosAvdelingslederApi-0j18A_8B.js";import{a as j}from"./AndreKriterierVelger-DKYqZhVj.js";import{B as x}from"./BehandlingstypeVelger-DzQvB70q.js";import{F as K}from"./FagsakYtelseTypeVelger-BtgQ8Gex.js";import{S as q}from"./SorteringVelger-C-P4xLNE.js";import{u as F}from"./useDebounce-C5JUVjQR.js";import{B as w}from"./Box-zI1_bHPI.js";import{H as V,M as N}from"./nb_NO-B-BJcyrv.js";const P="_bredde_grd8c_1",R={bredde:P},U=c(3),_=f(100),A=(n,e)=>{const d=e.behandlingTyper?e.behandlingTyper.reduce((a,i)=>({...a,[i]:!0}),{}):{},o=e.fagsakYtelseTyper?e.fagsakYtelseTyper.reduce((a,i)=>({...a,[i]:!0}),{}):{},l=e.andreKriterier?e.andreKriterier.reduce((a,i)=>({...a,[i.andreKriterierType]:!0}),{}):{},t=e.andreKriterier?e.andreKriterier.reduce((a,i)=>({...a,[`${i.andreKriterierType}_inkluder`]:i.inkluder}),{}):{};return{sakslisteId:e.sakslisteId,navn:e.navn??n.formatMessage({id:"UtvalgskriterierForSakslisteForm.NyListe"}),sortering:e.sortering?e.sortering.sorteringType:void 0,fomDato:e.sortering?e.sortering.fomDato:void 0,tomDato:e.sortering?e.sortering.tomDato:void 0,fra:e.sortering?e.sortering.fra?.toString():void 0,til:e.sortering?e.sortering.til?.toString():void 0,erDynamiskPeriode:e.sortering?e.sortering.erDynamiskPeriode:void 0,...l,...t,...d,...o}},L=({valgtSaksliste:n,valgtAvdelingEnhet:e})=>{const d=g(),o=y(),{mutate:l}=v({mutationFn:s=>I(s.sakslisteId,s.navn,s.avdelingEnhet),onSuccess:()=>{d.invalidateQueries({queryKey:[B.SAKSLISTER_FOR_AVDELING]})}}),t=T({defaultValues:A(o,n)}),a=t.watch(),u=F("navn",s=>{l({sakslisteId:n.sakslisteId,navn:s,avdelingEnhet:e})},t.trigger);return r.jsx(b,{formMethods:t,children:r.jsx(w.New,{padding:"5",borderColor:"neutral-subtle",borderRadius:"0",borderWidth:"1",children:r.jsxs(m,{gap:"space-8",children:[r.jsx(V,{size:"small",level:"2",children:r.jsx(N,{id:"UtvalgskriterierForSakslisteForm.Utvalgskriterier"})}),r.jsxs(m,{gap:"space-16",children:[r.jsx(h,{name:"navn",control:t.control,label:o.formatMessage({id:"UtvalgskriterierForSakslisteForm.Navn"}),validate:[p,U,_,k],onChange:s=>u(s),className:R.bredde}),r.jsxs(D,{justify:"space-between",children:[r.jsxs(m,{gap:"space-16",children:[r.jsx(K,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e}),r.jsx(x,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e})]}),r.jsx("div",{children:r.jsx(j,{valgtSakslisteId:n.sakslisteId,valgtAvdelingEnhet:e})}),r.jsx("div",{children:r.jsx(q,{valgtSakslisteId:n.sakslisteId,valgteBehandlingtyper:n.behandlingTyper,valgtAvdelingEnhet:e,erDynamiskPeriode:!!a.erDynamiskPeriode})})]})]})]})})})};L.__docgenInfo={description:"",methods:[],displayName:"UtvalgskriterierForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: BehandlingType[];
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
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}]}],raw:"BehandlingType[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
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
  behandlingTyper?: BehandlingType[];
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
}>`},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{L as U};
