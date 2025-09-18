import{w as T,B as l,j as i}from"./iframe-JHtNTE5g.js";import{Q as E}from"./index.es-Syob7zw_.js";import{u as A}from"./useQuery-tW_ggucl.js";import{h as e,L as r,b as n,l as m}from"./fplosAvdelingslederApi-BOipzkZZ.js";import{K as d}from"./SorteringVelger-BPA00LIU.js";import{A as a}from"./AndreKriterierVelger-DWT0dqT7.js";import{g as u,m as I}from"./nb_NO-nfn5PaxR.js";import{a as g}from"./useLosKodeverk-oc4p9TXa.js";import{U as o}from"./UtvalgskriterierForSakslisteForm-D9jPJ7ZN.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-C_PsgvWa.js";import"./index-CtOs9pY1.js";import"./BasePrimitive-D4WSGdw8.js";import"./index.es-EU5hfkZ3.js";import"./useMutation-Caiij6qH.js";import"./useDebounce-BEpIFgb2.js";import"./BehandlingstypeVelger-C4hXKew4.js";import"./FagsakYtelseTypeVelger-BA7X7K2C.js";import"./Box-BrRLqDvY.js";const K=u(I),Y={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:o,decorators:[K,T],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>n.json(g)),e.get(r.OPPGAVE_ANTALL,()=>n.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new n(null,{status:200}))]}},args:{valgtAvdelingEnhet:""},render:S=>{const{data:p}=A(m());return p?i.jsx(o,{...S}):i.jsx(E,{})}},t={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",saksbehandlerIdenter:[],sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[l.FORSTEGANGSSOKNAD],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,saksbehandlerIdenter:[],sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[l.FORSTEGANGSSOKNAD],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'liste',
      saksbehandlerIdenter: [],
      sortering: {
        sorteringType: KøSortering.BEHANDLINGSFRIST,
        fra: 1,
        til: 4,
        erDynamiskPeriode: true
      },
      behandlingTyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD],
      fagsakYtelseTyper: ['FP'],
      andreKriterier: [{
        andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
        inkluder: true
      }, {
        andreKriterierType: AndreKriterierType.PAPIRSOKNAD,
        inkluder: false
      }]
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: undefined,
      saksbehandlerIdenter: [],
      sortering: {
        sorteringType: KøSortering.BEHANDLINGSFRIST,
        fra: 1,
        til: 4,
        erDynamiskPeriode: true
      },
      behandlingTyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD],
      fagsakYtelseTyper: ['FP'],
      andreKriterier: [{
        andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
        inkluder: true
      }, {
        andreKriterierType: AndreKriterierType.PAPIRSOKNAD,
        inkluder: false
      }]
    }
  }
}`,...s.parameters?.docs?.source}}};const j=["MedGittNavn","MedDefaultNavn"];export{s as MedDefaultNavn,t as MedGittNavn,j as __namedExportsOrder,Y as default};
