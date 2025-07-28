import{g as T,F as o,B as d,j as i}from"./iframe-DUUg4WYC.js";import{X as A}from"./index.es-DeNMKrtt.js";import{u as R}from"./useQuery-B64_0BSJ.js";import{h as e,L as r,b as n,l as m}from"./fplosAvdelingslederApi-CrhuuX9s.js";import{K as p}from"./køSortering-BHrQm0Td.js";import{A as a}from"./andreKriterierType-Cg0VWsVP.js";import{g}from"./withIntl-C6JGXOMx.js";import{a as u}from"./useLosKodeverk-BaaXuCjw.js";import{U as l}from"./UtvalgskriterierForSakslisteForm-DBtp6PQ4.js";import{m as I}from"./nb_NO-U_UfAO4z.js";import"./Modal-CKlE0sTe.js";import"./index-Cmkl5k2H.js";import"./BasePrimitive-CuMQV4eb.js";import"./index.es-BkX0E6wS.js";import"./useMutation-nzuC1sQl.js";import"./AndreKriterierVelger-BUjYwcPJ.js";import"./BehandlingstypeVelger-BCX956SC.js";import"./FagsakYtelseTypeVelger-w_QkR7eq.js";import"./SorteringVelger-oj8wUJGP.js";import"./useDebounce-B7u7M4Ut.js";import"./Box-IQLbXb_Y.js";const L=g(I),H={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:l,decorators:[L,T],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>n.json(u)),e.get(r.OPPGAVE_ANTALL,()=>n.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new n(null,{status:200}))]}},args:{valgtAvdelingEnhet:""},render:E=>{const{data:S}=R(m());return S?i.jsx(l,{...E}):i.jsx(A,{})}},t={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[d.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[o.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[d.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[o.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'liste',
      sistEndret: '2020-10-10',
      saksbehandlerIdenter: [],
      antallBehandlinger: 1,
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: undefined,
      sistEndret: '2020-10-10',
      saksbehandlerIdenter: [],
      antallBehandlinger: 1,
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
}`,...s.parameters?.docs?.source}}};const M=["MedGittNavn","MedDefaultNavn"];export{s as MedDefaultNavn,t as MedGittNavn,M as __namedExportsOrder,H as default};
