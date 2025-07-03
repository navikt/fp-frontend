import{g as I,B as a,j as i}from"./iframe-BmHHQCSJ.js";import{u as K,N as R}from"./index.es-BEibpfcH.js";import{X as A}from"./index.es-DflGV15d.js";import{u as h}from"./useQuery-D7FobGRg.js";import{h as e,L as r,b as s,l as v}from"./fplosAvdelingslederApi-CTzE8oI3.js";import{K as k}from"./køSortering-BHrQm0Td.js";import{g as O}from"./withIntl-C23DrtGI.js";import{a as f}from"./useLosKodeverk-DzV4I7l5.js";import{S as g}from"./SorteringVelger-zS3W1d56.js";import{m as L}from"./nb_NO-BCGp-sP5.js";import"./Modal-CoPQZUZu.js";import"./index-hYgI5NPz.js";import"./BasePrimitive-BeIKlTsx.js";import"./useMutation-LM38tLFp.js";import"./useDebounce-Dst3kxfs.js";const G=O(L),C={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:g,decorators:[G,I],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>s.json(f)),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new s(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new s(null,{status:200}))]}},args:{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen"},render:l=>{const D=K({defaultValues:{sortering:k.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:l.erDynamiskPeriode}}),{data:y}=h(v());return y?i.jsx(R,{formMethods:D,children:i.jsx(g,{...l})}):i.jsx(A,{})}},t={args:{valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!1}},n={args:{valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!0}},o={args:{valgteBehandlingtyper:[a.TILBAKEKREVING],erDynamiskPeriode:!1}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(T=o.parameters)==null?void 0:T.docs)==null?void 0:c.source}}};const q=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{n as SorteringsvelgerNårDynamiskPeriodeErValgt,o as SorteringsvelgerNårKunTilbakekrevingErValgt,t as SorteringsvelgerNårMangeBehandlingstyperErValgt,q as __namedExportsOrder,C as default};
