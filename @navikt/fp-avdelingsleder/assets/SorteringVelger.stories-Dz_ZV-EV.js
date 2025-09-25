import{w as d,B as a,j as i}from"./iframe-BOmlqHOP.js";import{a as S,C as E}from"./index.es-Dl9X4Dwz.js";import{Q as N}from"./index.es-B9otWhqo.js";import{u}from"./useQuery-R3Cms4B4.js";import{h as e,L as r,b as s,l as T}from"./fplosAvdelingslederApi-BPchPfUZ.js";import{S as g,K as c}from"./SorteringVelger-4IhXuaik.js";import{g as D,m as y}from"./nb_NO-B9Pe-53G.js";import{a as I}from"./useLosKodeverk-CS-E9MwC.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-D6Pp4dNw.js";import"./index-BxvrWkeC.js";import"./BasePrimitive-NCYGSF69.js";import"./useMutation-CquSeUls.js";import"./useDebounce-DwNC467F.js";const K=D(y),M={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:g,decorators:[K,d],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>s.json(I)),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new s(null,{status:200}))]}},args:{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen"},render:l=>{const m=S({defaultValues:{sortering:c.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:l.erDynamiskPeriode}}),{data:p}=u(T());return p?i.jsx(E,{formMethods:m,children:i.jsx(g,{...l})}):i.jsx(N,{})}},n={args:{valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!1}},t={args:{valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!0}},o={args:{valgteBehandlingtyper:[a.TILBAKEKREVING],erDynamiskPeriode:!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD, BehandlingTypeEnum.DOKUMENTINNSYN],
    erDynamiskPeriode: false
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD, BehandlingTypeEnum.DOKUMENTINNSYN],
    erDynamiskPeriode: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingTypeEnum.TILBAKEKREVING],
    erDynamiskPeriode: false
  }
}`,...o.parameters?.docs?.source}}};const x=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{t as SorteringsvelgerNårDynamiskPeriodeErValgt,o as SorteringsvelgerNårKunTilbakekrevingErValgt,n as SorteringsvelgerNårMangeBehandlingstyperErValgt,x as __namedExportsOrder,M as default};
