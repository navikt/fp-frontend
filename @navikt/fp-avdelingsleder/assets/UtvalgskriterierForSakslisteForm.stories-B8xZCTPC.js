import{w as T,B as l,j as i}from"./iframe-C5MiiFGG.js";import{Q as E}from"./index.es-B6BecDhV.js";import{u as m}from"./useQuery-8D1YQakY.js";import{h as e,L as r,b as n,l as A}from"./fplosAvdelingslederApi-DhjTSEd9.js";import{K as d}from"./SorteringVelger-CGkiVRWl.js";import{A as a}from"./AndreKriterierVelger-PBjFmV6_.js";import{g as u,m as I}from"./nb_NO-BHyDhga3.js";import{a as g}from"./useLosKodeverk-C1dfmBoz.js";import{U as o}from"./UtvalgskriterierForSakslisteForm-BF-Q0Yzz.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-DWjp6MuS.js";import"./Modal-DC8aCGhM.js";import"./index-NoJYJMfq.js";import"./BasePrimitive-DyD0Wl37.js";import"./index-DhuMM0n2.js";import"./index.es-pfXiA5HI.js";import"./useMutation-B_Kgrwpz.js";import"./index.es-DKf4ovJt.js";import"./useDebounce-3tQN7hkb.js";import"./BehandlingstypeVelger-BnA8FK4e.js";import"./FagsakYtelseTypeVelger-CGmUvxtD.js";import"./Box-DtIMwfwE.js";const K=u(I),H={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:o,decorators:[K,T],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>n.json(g)),e.get(r.OPPGAVE_ANTALL,()=>n.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new n(null,{status:200}))]}},args:{valgtAvdelingEnhet:""},render:p=>{const{data:S}=m(A());return S?i.jsx(o,{...p}):i.jsx(E,{})}},t={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",saksbehandlerIdenter:[],sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[l.FORSTEGANGSSOKNAD],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,saksbehandlerIdenter:[],sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[l.FORSTEGANGSSOKNAD],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
