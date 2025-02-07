import{j as l}from"./jsx-runtime-CLpGMVip.js";import{u as v,r as f}from"./index.es-D6ktstkZ.js";import{h as s,L as n,H as t}from"./fplosAvdelingslederApi-ByBFIqlo.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as o}from"./behandlingType-BdbjGMJD.js";import{w as k,m as L}from"./nb_NO-B4p7h2ZR.js";import{g as _}from"./withIntl-CwsmLzvd.js";import{a as V}from"./useLosKodeverk-oT1Cy1xD.js";import{K as P}from"./KoSortering-BHrQm0Td.js";import{S as g}from"./SorteringVelger-Bjbuvuw0.js";import"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index.es-1l7GYZKP.js";import"./dayjs.min-CJilavqB.js";import"./Modal-BQwjsmca.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./BasePrimitive-DJrLZ3qF.js";import"./decorators-DIzpaN6C.js";import"./useQuery-DVfWY0XH.js";import"./useMutation-DW66zKiQ.js";import"./index.es-CXRhogPg.js";import"./useDebounce-DAmdEvVE.js";const M=_(L),oe={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:g,decorators:[M,k],parameters:{msw:{handlers:[s.get(n.KODEVERK_LOS,()=>t.json(V)),s.post(n.LAGRE_SAKSLISTE_SORTERING,()=>new t(null,{status:200})),s.post(n.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new t(null,{status:200})),s.post(n.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new t(null,{status:200})),s.post(n.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new t(null,{status:200}))]}},args:{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen"},render:i=>{const G=v({defaultValues:{sortering:P.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:i.erDynamiskPeriode}});return l.jsx(f,{formMethods:G,children:l.jsx(g,{...i})})}},e={args:{valgteBehandlingtyper:[o.FORSTEGANGSSOKNAD,o.DOKUMENTINNSYN],erDynamiskPeriode:!1}},r={args:{valgteBehandlingtyper:[o.FORSTEGANGSSOKNAD,o.DOKUMENTINNSYN],erDynamiskPeriode:!0}},a={args:{valgteBehandlingtyper:[o.TILBAKEKREVING],erDynamiskPeriode:!1}};var m,p,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.DOKUMENTINNSYN],
    erDynamiskPeriode: false
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var S,N,c;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.DOKUMENTINNSYN],
    erDynamiskPeriode: true
  }
}`,...(c=(N=r.parameters)==null?void 0:N.docs)==null?void 0:c.source}}};var E,T,u;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.TILBAKEKREVING],
    erDynamiskPeriode: false
  }
}`,...(u=(T=a.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var y,D,h;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.DOKUMENTINNSYN],
    erDynamiskPeriode: false
  }
}`,...(h=(D=e.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var I,K,A;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.DOKUMENTINNSYN],
    erDynamiskPeriode: true
  }
}`,...(A=(K=r.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var R,B,O;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.TILBAKEKREVING],
    erDynamiskPeriode: false
  }
}`,...(O=(B=a.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const ie=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{r as SorteringsvelgerNårDynamiskPeriodeErValgt,a as SorteringsvelgerNårKunTilbakekrevingErValgt,e as SorteringsvelgerNårMangeBehandlingstyperErValgt,ie as __namedExportsOrder,oe as default};
