import{w as p,j as n}from"./iframe-CwP781QY.js";import{a as d,C as S}from"./index.es-55Ti0nEf.js";import{Q as u}from"./index.es-DZ_1ZLkn.js";import{u as c}from"./useQuery-FYaT2YFK.js";import{h as e,L as r,b as s,l as E}from"./fplosAvdelingslederApi-BtUF5fBG.js";import{g as T,m as v}from"./nb_NO-B5g6Br2u.js";import{a as k}from"./useLosKodeverk-Rdi5rBw1.js";import{S as l}from"./SorteringVelger-DMkj0iO-.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-CBpdJu80.js";import"./index-CExZlUQ0.js";import"./BasePrimitive-BDBKy7G1.js";import"./useMutation-CZ1r-Nr7.js";import"./useDebounce-BnRiFWfk.js";const y=T(v),w={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:l,decorators:[y,p],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>s.json(k)),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new s(null,{status:200}))]}},args:{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen"},render:i=>{const g=d({defaultValues:{sortering:"BEHFRIST",fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:i.erDynamiskPeriode}}),{data:m}=c(E());return m?n.jsx(S,{formMethods:g,children:n.jsx(l,{...i})}):n.jsx(u,{})}},a={args:{valgteBehandlingtyper:["BT-002","BT-006"],erDynamiskPeriode:!1}},t={args:{valgteBehandlingtyper:["BT-002","BT-006"],erDynamiskPeriode:!0}},o={args:{valgteBehandlingtyper:["BT-007"],erDynamiskPeriode:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const G=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{t as SorteringsvelgerNårDynamiskPeriodeErValgt,o as SorteringsvelgerNårKunTilbakekrevingErValgt,a as SorteringsvelgerNårMangeBehandlingstyperErValgt,G as __namedExportsOrder,w as default};
