import{w as p,j as n}from"./iframe-IBzpmzds.js";import{a as d,P as S}from"./index.es-C9oqVzCd.js";import{Z as u}from"./index.es-Cp4kNmhO.js";import{u as c}from"./useQuery-CpBkxfQP.js";import{h as e,L as r,b as s,l as E}from"./fplosAvdelingslederApi-DN9OSqGe.js";import{g as T,m as v}from"./nb_NO-BsJAMQ-X.js";import{a as k}from"./useLosKodeverk-DXUlkb-N.js";import{S as l}from"./SorteringVelger-CrBa85Qp.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-BEAQSND1.js";import"./index-C6HeGAEA.js";import"./BasePrimitive-DUPziriZ.js";import"./useMutation-CI_1hfKh.js";import"./useDebounce-DLBbrfjw.js";const y=T(v),w={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:l,decorators:[y,p],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>s.json(k)),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new s(null,{status:200}))]}},args:{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen"},render:i=>{const g=d({defaultValues:{sortering:"BEHFRIST",fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:i.erDynamiskPeriode}}),{data:m}=c(E());return m?n.jsx(S,{formMethods:g,children:n.jsx(l,{...i})}):n.jsx(u,{})}},a={args:{valgteBehandlingtyper:["BT-002","BT-006"],erDynamiskPeriode:!1}},t={args:{valgteBehandlingtyper:["BT-002","BT-006"],erDynamiskPeriode:!0}},o={args:{valgteBehandlingtyper:["BT-007"],erDynamiskPeriode:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
