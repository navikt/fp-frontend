import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{L as m,M as g}from"./nb_NO-CZSpk6bt.js";import{w as u}from"./index.es-BU4tl1aP.js";import{u as k,V as y,b as c,L as r}from"./withQueryClientProvider-D5rUA1vz.js";import{u as T}from"./useMutation-Bl-NM7Qh.js";import"./aktivitetStatus-B1m96ipJ.js";import{K as A}from"./kodeverkTyper-CavWL6Ds.js";import{u as L}from"./useLosKodeverk-EfGSBP6a.js";import"./index-DRjF_FHU.js";const n=({valgtSakslisteId:d,valgtAvdelingEnhet:l})=>{const t=k(),{mutate:p}=T({mutationFn:e=>c(e.sakslisteId,e.avdelingEnhet,e.fagsakYtelseType,e.checked),onSuccess:()=>{t.invalidateQueries({queryKey:[r.OPPGAVE_ANTALL]}),t.invalidateQueries({queryKey:[r.OPPGAVE_AVDELING_ANTALL]}),t.invalidateQueries({queryKey:[r.SAKSLISTER_FOR_AVDELING]})}}),i=L(A.FAGSAK_YTELSE);return s.jsxs(y,{gap:"2",children:[s.jsx(m,{size:"small",children:s.jsx(g,{id:"FagsakYtelseTypeVelger.Stonadstype"})}),i.map(e=>{var o;return s.jsx(u,{name:e.kode,label:((o=i.find(a=>a.kode===e.kode))==null?void 0:o.navn)??"",onChange:a=>p({sakslisteId:d,avdelingEnhet:l,fagsakYtelseType:e.kode,checked:a})},e.kode)})]})};n.__docgenInfo={description:"",methods:[],displayName:"FagsakYtelseTypeVelger",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"FagsakYtelseTypeVelger",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{n as F};
