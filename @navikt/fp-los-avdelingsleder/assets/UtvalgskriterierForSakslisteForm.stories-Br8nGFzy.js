import{g as T,F as l,B as d,j as i}from"./iframe-Cdpiyr6G.js";import{X as A}from"./index.es-YV7i7sBZ.js";import{u as R}from"./useQuery-CJ4g_evv.js";import{h as e,L as r,b as t,l as m}from"./fplosAvdelingslederApi-DXj5QM_w.js";import{K as p}from"./køSortering-BHrQm0Td.js";import{A as a}from"./andreKriterierType-Cg0VWsVP.js";import{g}from"./withIntl-3YCflneo.js";import{a as u}from"./useLosKodeverk-C8Sh09Wj.js";import{U as o}from"./UtvalgskriterierForSakslisteForm-BQLu12ma.js";import{m as I}from"./nb_NO-Bv7K8J19.js";import"./Modal-CBGx8AI0.js";import"./index-l2oeor3g.js";import"./BasePrimitive-BpCL3-mc.js";import"./index.es-BRxw_zgG.js";import"./useMutation-BDVknvAd.js";import"./AndreKriterierVelger-CuMfq1eg.js";import"./BehandlingstypeVelger-CqEqQrXw.js";import"./FagsakYtelseTypeVelger-B-IbZSKO.js";import"./SorteringVelger-fpu6lJTZ.js";import"./useDebounce-CWcZOiF6.js";import"./Box-0Rxo6i1l.js";const L=g(I),H={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:o,decorators:[L,T],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>t.json(u)),e.get(r.OPPGAVE_ANTALL,()=>t.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new t(null,{status:200}))]}},args:{valgtAvdelingEnhet:""},render:E=>{const{data:S}=R(m());return S?i.jsx(o,{...E}):i.jsx(A,{})}},n={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",sistEndret:"2020-10-10",saksbehandlerIdenter:[],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[d.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[l.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,sistEndret:"2020-10-10",saksbehandlerIdenter:[],sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[d.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[l.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'liste',
      sistEndret: '2020-10-10',
      saksbehandlerIdenter: [],
      sortering: {
        sorteringType: KøSortering.BEHANDLINGSFRIST,
        fra: 1,
        til: 4,
        erDynamiskPeriode: true
      },
      behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD],
      fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
      andreKriterier: [{
        andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
        inkluder: true
      }, {
        andreKriterierType: AndreKriterierType.PAPIRSOKNAD,
        inkluder: false
      }]
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: undefined,
      sistEndret: '2020-10-10',
      saksbehandlerIdenter: [],
      sortering: {
        sorteringType: KøSortering.BEHANDLINGSFRIST,
        fra: 1,
        til: 4,
        erDynamiskPeriode: true
      },
      behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD],
      fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
      andreKriterier: [{
        andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
        inkluder: true
      }, {
        andreKriterierType: AndreKriterierType.PAPIRSOKNAD,
        inkluder: false
      }]
    }
  }
}`,...s.parameters?.docs?.source}}};const M=["MedGittNavn","MedDefaultNavn"];export{s as MedDefaultNavn,n as MedGittNavn,M as __namedExportsOrder,H as default};
