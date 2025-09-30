import{w as p,j as n}from"./iframe-55PEk90g.js";import{a as d,C as S}from"./index.es-C3kNu2Ah.js";import{Q as u}from"./index.es-C44hVVmF.js";import{u as c}from"./useQuery-C71aYVz1.js";import{h as e,L as r,b as s,l as E}from"./fplosAvdelingslederApi-Bt8bHvbk.js";import{S as l,K as T}from"./SorteringVelger-CYmxiRkS.js";import{g as v,m as k}from"./nb_NO-CnqV6mPc.js";import{a as y}from"./useLosKodeverk-C3Ly0BHb.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-1nTydjrk.js";import"./index-CRPgZlub.js";import"./BasePrimitive-BlwfFd6L.js";import"./useMutation-1T5dGigW.js";import"./useDebounce-DQxTeXCs.js";const B=v(k),w={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:l,decorators:[B,p],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>s.json(y)),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new s(null,{status:200}))]}},args:{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen"},render:i=>{const g=d({defaultValues:{sortering:T.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:i.erDynamiskPeriode}}),{data:m}=c(E());return m?n.jsx(S,{formMethods:g,children:n.jsx(l,{...i})}):n.jsx(u,{})}},a={args:{valgteBehandlingtyper:["BT-002","BT-006"],erDynamiskPeriode:!1}},t={args:{valgteBehandlingtyper:["BT-002","BT-006"],erDynamiskPeriode:!0}},o={args:{valgteBehandlingtyper:["BT-007"],erDynamiskPeriode:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: ['BT-002', 'BT-006'],
    erDynamiskPeriode: false
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: ['BT-002', 'BT-006'],
    erDynamiskPeriode: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: ['BT-007'],
    erDynamiskPeriode: false
  }
}`,...o.parameters?.docs?.source}}};const x=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{t as SorteringsvelgerNårDynamiskPeriodeErValgt,o as SorteringsvelgerNårKunTilbakekrevingErValgt,a as SorteringsvelgerNårMangeBehandlingstyperErValgt,x as __namedExportsOrder,w as default};
