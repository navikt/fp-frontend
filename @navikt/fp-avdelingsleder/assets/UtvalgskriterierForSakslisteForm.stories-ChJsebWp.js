import{w as T,B as l,j as i}from"./iframe-CwABiWCR.js";import{Q as E}from"./index.es-B7HWSoNI.js";import{u as A}from"./useQuery-CwEqanO4.js";import{h as e,L as r,b as n,l as m}from"./fplosAvdelingslederApi-Oj-FzBOx.js";import{K as d}from"./SorteringVelger-BIK_8_Qh.js";import{A as a}from"./AndreKriterierVelger-B3P5THYM.js";import{g as u,m as I}from"./nb_NO-C66Hy-sb.js";import{a as g}from"./useLosKodeverk-BsJ99SYu.js";import{U as o}from"./UtvalgskriterierForSakslisteForm-BwK1eZVq.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-Br7dTlna.js";import"./index-CoghBukY.js";import"./BasePrimitive-CV3X_CkH.js";import"./index.es-CPtL8C0B.js";import"./useMutation-DAdbz6m2.js";import"./useDebounce-2KTDleNx.js";import"./BehandlingstypeVelger-BwdAE0Ra.js";import"./FagsakYtelseTypeVelger-DR4gAAbG.js";import"./Box-frlnBACS.js";const K=u(I),Y={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:o,decorators:[K,T],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>n.json(g)),e.get(r.OPPGAVE_ANTALL,()=>n.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new n(null,{status:200}))]}},args:{valgtAvdelingEnhet:""},render:S=>{const{data:p}=A(m());return p?i.jsx(o,{...S}):i.jsx(E,{})}},t={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",saksbehandlerIdenter:[],sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[l.FORSTEGANGSSOKNAD],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,saksbehandlerIdenter:[],sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[l.FORSTEGANGSSOKNAD],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
