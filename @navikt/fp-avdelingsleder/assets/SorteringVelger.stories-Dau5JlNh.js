import{w as d,B as a,j as i}from"./iframe-C5MiiFGG.js";import{a as S}from"./index-DhuMM0n2.js";import{N as E}from"./index.es-pfXiA5HI.js";import{Q as N}from"./index.es-B6BecDhV.js";import{u}from"./useQuery-8D1YQakY.js";import{h as e,L as r,b as s,l as T}from"./fplosAvdelingslederApi-DhjTSEd9.js";import{S as g,K as c}from"./SorteringVelger-CGkiVRWl.js";import{g as D,m as y}from"./nb_NO-BHyDhga3.js";import{a as I}from"./useLosKodeverk-C1dfmBoz.js";import"./preload-helper-D9Z9MdNV.js";import"./Modal-DC8aCGhM.js";import"./index-NoJYJMfq.js";import"./index.es-DWjp6MuS.js";import"./BasePrimitive-DyD0Wl37.js";import"./useMutation-B_Kgrwpz.js";import"./index.es-DKf4ovJt.js";import"./useDebounce-3tQN7hkb.js";const K=D(y),F={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:g,decorators:[K,d],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>s.json(I)),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new s(null,{status:200}))]}},args:{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen"},render:l=>{const m=S({defaultValues:{sortering:c.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:l.erDynamiskPeriode}}),{data:p}=u(T());return p?i.jsx(E,{formMethods:m,children:i.jsx(g,{...l})}):i.jsx(N,{})}},t={args:{valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!1}},n={args:{valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!0}},o={args:{valgteBehandlingtyper:[a.TILBAKEKREVING],erDynamiskPeriode:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const U=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{n as SorteringsvelgerNårDynamiskPeriodeErValgt,o as SorteringsvelgerNårKunTilbakekrevingErValgt,t as SorteringsvelgerNårMangeBehandlingstyperErValgt,U as __namedExportsOrder,F as default};
