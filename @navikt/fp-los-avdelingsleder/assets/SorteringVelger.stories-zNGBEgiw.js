import{g as I,B as a,j as i}from"./iframe-Cy1vuLsW.js";import{u as K,N as R}from"./index.es-Gu7Fdfvw.js";import{X as A}from"./index.es-hrcuUIR3.js";import{u as h}from"./useQuery-DBLJivHl.js";import{h as e,L as r,b as s,l as v}from"./fplosAvdelingslederApi-D8A9syEV.js";import{K as k}from"./køSortering-BHrQm0Td.js";import{g as O}from"./withIntl-B6x6aX5o.js";import{a as f}from"./useLosKodeverk-Ch0tWbnL.js";import{S as g}from"./SorteringVelger-CbNQVnTO.js";import{m as L}from"./nb_NO-CnoWErBc.js";import"./Modal-w5rvdpHk.js";import"./index-BNZkQjL5.js";import"./BasePrimitive-1X8HKm_-.js";import"./useMutation-DmV05PWj.js";import"./index.es-VYpiKgZA.js";import"./useDebounce-Dpqma_RZ.js";const G=O(L),q={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:g,decorators:[G,I],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>s.json(f)),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new s(null,{status:200}))]}},args:{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen"},render:l=>{const D=K({defaultValues:{sortering:k.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:l.erDynamiskPeriode}}),{data:y}=h(v());return y?i.jsx(R,{formMethods:D,children:i.jsx(g,{...l})}):i.jsx(A,{})}},t={args:{valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!1}},n={args:{valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!0}},o={args:{valgteBehandlingtyper:[a.TILBAKEKREVING],erDynamiskPeriode:!1}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.DOKUMENTINNSYN],
    erDynamiskPeriode: false
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var S,N,E;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.DOKUMENTINNSYN],
    erDynamiskPeriode: true
  }
}`,...(E=(N=n.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var u,T,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.TILBAKEKREVING],
    erDynamiskPeriode: false
  }
}`,...(c=(T=o.parameters)==null?void 0:T.docs)==null?void 0:c.source}}};const z=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{n as SorteringsvelgerNårDynamiskPeriodeErValgt,o as SorteringsvelgerNårKunTilbakekrevingErValgt,t as SorteringsvelgerNårMangeBehandlingstyperErValgt,z as __namedExportsOrder,q as default};
