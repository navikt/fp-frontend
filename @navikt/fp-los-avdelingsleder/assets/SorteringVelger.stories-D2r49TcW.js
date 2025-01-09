import{j as l}from"./jsx-runtime-DR9Q75dM.js";import{u as v,$ as f}from"./index.es-jc6sdnh5.js";import{h as s,L as n,H as t}from"./fplosAvdelingslederApi-CNRcnPVE.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as o}from"./behandlingType-BdbjGMJD.js";import{w as k,m as L}from"./nb_NO-CujjC0QR.js";import{g as _}from"./withIntl-CDJROj6F.js";import{a as V}from"./useLosKodeverk-e-bKqnw3.js";import{K as P}from"./KoSortering-BHrQm0Td.js";import{S as g}from"./SorteringVelger-BbzCGw6D.js";import"./index-DRjF_FHU.js";import"./index.es-DeTGBOe2.js";import"./dayjs.min-CnNqAF5I.js";import"./Modal-BAeoMgKv.js";import"./index-rX-Bn4lm.js";import"./BasePrimitive-DOZIhIJh.js";import"./decorators-86JrGkCj.js";import"./useQuery-CdRdjBeR.js";import"./useMutation-6dhYCaXX.js";import"./index.es-jAoycGC2.js";import"./useDebounce-DooGmdvL.js";const M=_(L),ne={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:g,decorators:[M,k],parameters:{msw:{handlers:[s.get(n.KODEVERK_LOS,()=>t.json(V)),s.post(n.LAGRE_SAKSLISTE_SORTERING,()=>new t(null,{status:200})),s.post(n.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new t(null,{status:200})),s.post(n.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new t(null,{status:200})),s.post(n.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new t(null,{status:200}))]}},args:{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen"},render:i=>{const G=v({defaultValues:{sortering:P.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:i.erDynamiskPeriode}});return l.jsx(f,{formMethods:G,children:l.jsx(g,{...i})})}},e={args:{valgteBehandlingtyper:[o.FORSTEGANGSSOKNAD,o.DOKUMENTINNSYN],erDynamiskPeriode:!1}},r={args:{valgteBehandlingtyper:[o.FORSTEGANGSSOKNAD,o.DOKUMENTINNSYN],erDynamiskPeriode:!0}},a={args:{valgteBehandlingtyper:[o.TILBAKEKREVING],erDynamiskPeriode:!1}};var m,p,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(O=(B=a.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const te=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{r as SorteringsvelgerNårDynamiskPeriodeErValgt,a as SorteringsvelgerNårKunTilbakekrevingErValgt,e as SorteringsvelgerNårMangeBehandlingstyperErValgt,te as __namedExportsOrder,ne as default};
