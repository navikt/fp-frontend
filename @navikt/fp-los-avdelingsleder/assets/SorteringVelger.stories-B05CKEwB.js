import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{u as v,e as k}from"./index.es-Dx8qhm7z.js";import{h as s,L as n,H as t}from"./fplosAvdelingslederApi-BKCCOvwM.js";import{w as f,B as o,m as L}from"./nb_NO-k7XfLIF0.js";import{g as _}from"./withIntl-bymE_TAn.js";import{a as V}from"./useLosKodeverk-C5iLaZGo.js";import{K as P}from"./KoSortering-BHrQm0Td.js";import{S as g}from"./SorteringVelger-DgI1ycTN.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index.es-CHpjaGkX.js";import"./dayjs.min-Cke173X9.js";import"./Modal-BhANA5jI.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./BasePrimitive-CQNbPRvM.js";import"./decorators-DIzpaN6C.js";import"./v4-CtRu48qb.js";import"./react-ikfmhwgl.js";import"./iframe-Cj2A5Qk-.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./useQuery-DAr9N5tU.js";import"./useMutation-CsIEtWN8.js";import"./index.es-B6dkbjZv.js";import"./useDebounce-BdnsuVaX.js";const M=_(L),le={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:g,decorators:[M,f],parameters:{msw:{handlers:[s.get(n.KODEVERK_LOS,()=>t.json(V)),s.post(n.LAGRE_SAKSLISTE_SORTERING,()=>new t(null,{status:200})),s.post(n.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new t(null,{status:200})),s.post(n.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new t(null,{status:200})),s.post(n.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new t(null,{status:200}))]}},args:{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen"},render:i=>{const G=v({defaultValues:{sortering:P.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:i.erDynamiskPeriode}});return l.jsx(k,{formMethods:G,children:l.jsx(g,{...i})})}},e={args:{valgteBehandlingtyper:[o.FORSTEGANGSSOKNAD,o.DOKUMENTINNSYN],erDynamiskPeriode:!1}},r={args:{valgteBehandlingtyper:[o.FORSTEGANGSSOKNAD,o.DOKUMENTINNSYN],erDynamiskPeriode:!0}},a={args:{valgteBehandlingtyper:[o.TILBAKEKREVING],erDynamiskPeriode:!1}};var p,m,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    valgteBehandlingtyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.DOKUMENTINNSYN],
    erDynamiskPeriode: false
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var S,N,c;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(B=a.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const ge=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{r as SorteringsvelgerNårDynamiskPeriodeErValgt,a as SorteringsvelgerNårKunTilbakekrevingErValgt,e as SorteringsvelgerNårMangeBehandlingstyperErValgt,ge as __namedExportsOrder,le as default};
