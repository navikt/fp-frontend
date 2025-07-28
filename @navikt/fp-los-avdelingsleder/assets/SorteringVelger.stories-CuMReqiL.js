import{g as d,B as a,j as i}from"./iframe-DUUg4WYC.js";import{a as S,N}from"./index.es-BkX0E6wS.js";import{X as E}from"./index.es-DeNMKrtt.js";import{u}from"./useQuery-B64_0BSJ.js";import{h as e,L as r,b as s,l as T}from"./fplosAvdelingslederApi-CrhuuX9s.js";import{K as c}from"./køSortering-BHrQm0Td.js";import{g as D}from"./withIntl-C6JGXOMx.js";import{a as y}from"./useLosKodeverk-BaaXuCjw.js";import{S as g}from"./SorteringVelger-oj8wUJGP.js";import{m as I}from"./nb_NO-U_UfAO4z.js";import"./Modal-CKlE0sTe.js";import"./index-Cmkl5k2H.js";import"./BasePrimitive-CuMQV4eb.js";import"./useMutation-nzuC1sQl.js";import"./useDebounce-B7u7M4Ut.js";const K=D(I),x={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:g,decorators:[K,d],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>s.json(y)),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new s(null,{status:200}))]}},args:{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen"},render:l=>{const m=S({defaultValues:{sortering:c.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:l.erDynamiskPeriode}}),{data:p}=u(T());return p?i.jsx(N,{formMethods:m,children:i.jsx(g,{...l})}):i.jsx(E,{})}},t={args:{valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!1}},n={args:{valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!0}},o={args:{valgteBehandlingtyper:[a.TILBAKEKREVING],erDynamiskPeriode:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.DOKUMENTINNSYN],
    erDynamiskPeriode: false
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.DOKUMENTINNSYN],
    erDynamiskPeriode: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.TILBAKEKREVING],
    erDynamiskPeriode: false
  }
}`,...o.parameters?.docs?.source}}};const j=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{n as SorteringsvelgerNårDynamiskPeriodeErValgt,o as SorteringsvelgerNårKunTilbakekrevingErValgt,t as SorteringsvelgerNårMangeBehandlingstyperErValgt,j as __namedExportsOrder,x as default};
