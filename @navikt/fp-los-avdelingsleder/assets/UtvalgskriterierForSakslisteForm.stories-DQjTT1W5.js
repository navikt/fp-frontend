import{g as T,B as l,j as i}from"./iframe-7_HEPCb1.js";import{Q as m}from"./index.es-IDmHLdjZ.js";import{u as E}from"./useQuery-BVHLl9mH.js";import{h as e,L as r,b as n,l as A}from"./fplosAvdelingslederApi-BJxU-aXk.js";import{K as d}from"./køSortering-BHrQm0Td.js";import{A as a}from"./andreKriterierType-Cg0VWsVP.js";import{g as u}from"./withIntl-8XugG7cR.js";import{a as I}from"./useLosKodeverk-BrBqaxkL.js";import{U as o}from"./UtvalgskriterierForSakslisteForm-C7KTtzIT.js";import{m as g}from"./nb_NO-BK0Dl5Mc.js";import"./preload-helper-D9Z9MdNV.js";import"./Modal-BaMdcQMJ.js";import"./index-D4zc9eq3.js";import"./BasePrimitive-BFKN56-s.js";import"./index.es-PglJzgV9.js";import"./useMutation-BqgPo4m-.js";import"./AndreKriterierVelger-DMgmhrqg.js";import"./BehandlingstypeVelger-OJuPEO7o.js";import"./FagsakYtelseTypeVelger-BVERWVwh.js";import"./SorteringVelger-DCidJUzD.js";import"./useDebounce-Brab7JzX.js";import"./Box-BZIyvpE_.js";const K=u(g),H={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:o,decorators:[K,T],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>n.json(I)),e.get(r.OPPGAVE_ANTALL,()=>n.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new n(null,{status:200}))]}},args:{valgtAvdelingEnhet:""},render:p=>{const{data:S}=E(A());return S?i.jsx(o,{...p}):i.jsx(m,{})}},t={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",saksbehandlerIdenter:[],sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[l.FORSTEGANGSSOKNAD],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,saksbehandlerIdenter:[],sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[l.FORSTEGANGSSOKNAD],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const M=["MedGittNavn","MedDefaultNavn"];export{s as MedDefaultNavn,t as MedGittNavn,M as __namedExportsOrder,H as default};
