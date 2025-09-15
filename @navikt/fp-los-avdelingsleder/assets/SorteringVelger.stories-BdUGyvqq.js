import{g as d,B as a,j as i}from"./iframe-7_HEPCb1.js";import{a as S,M as E}from"./index.es-PglJzgV9.js";import{Q as N}from"./index.es-IDmHLdjZ.js";import{u}from"./useQuery-BVHLl9mH.js";import{h as e,L as r,b as s,l as T}from"./fplosAvdelingslederApi-BJxU-aXk.js";import{K as c}from"./køSortering-BHrQm0Td.js";import{g as D}from"./withIntl-8XugG7cR.js";import{a as y}from"./useLosKodeverk-BrBqaxkL.js";import{S as g}from"./SorteringVelger-DCidJUzD.js";import{m as I}from"./nb_NO-BK0Dl5Mc.js";import"./preload-helper-D9Z9MdNV.js";import"./Modal-BaMdcQMJ.js";import"./index-D4zc9eq3.js";import"./BasePrimitive-BFKN56-s.js";import"./useMutation-BqgPo4m-.js";import"./useDebounce-Brab7JzX.js";const K=D(I),j={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:g,decorators:[K,d],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>s.json(y)),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new s(null,{status:200}))]}},args:{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen"},render:l=>{const m=S({defaultValues:{sortering:c.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:l.erDynamiskPeriode}}),{data:p}=u(T());return p?i.jsx(E,{formMethods:m,children:i.jsx(g,{...l})}):i.jsx(N,{})}},t={args:{valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!1}},n={args:{valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!0}},o={args:{valgteBehandlingtyper:[a.TILBAKEKREVING],erDynamiskPeriode:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD, BehandlingTypeEnum.DOKUMENTINNSYN],
    erDynamiskPeriode: false
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD, BehandlingTypeEnum.DOKUMENTINNSYN],
    erDynamiskPeriode: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingTypeEnum.TILBAKEKREVING],
    erDynamiskPeriode: false
  }
}`,...o.parameters?.docs?.source}}};const F=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{n as SorteringsvelgerNårDynamiskPeriodeErValgt,o as SorteringsvelgerNårKunTilbakekrevingErValgt,t as SorteringsvelgerNårMangeBehandlingstyperErValgt,F as __namedExportsOrder,j as default};
