import{g as E,F as l,B as p,j as i}from"./iframe-yH1fHU7Q.js";import{X as A}from"./index.es-fOBpEy5s.js";import{u as R}from"./useQuery-ZBMFTV1P.js";import{h as e,L as r,b as n,l as m}from"./fplosAvdelingslederApi-CWVGlM9T.js";import{K as d}from"./køSortering-BHrQm0Td.js";import{A as a}from"./andreKriterierType-Cg0VWsVP.js";import{g}from"./withIntl-BrUORKG6.js";import{a as u}from"./useLosKodeverk-DmJvK1As.js";import{U as o}from"./UtvalgskriterierForSakslisteForm-v_pJZLk9.js";import{m as I}from"./nb_NO-CYIn4FMC.js";import"./Modal-C_OpF3jZ.js";import"./index-DcVNjzNM.js";import"./BasePrimitive-DajsECfF.js";import"./index.es-CWwaXhcK.js";import"./useMutation-R0X0r_wF.js";import"./AndreKriterierVelger-TdSeOPJ5.js";import"./BehandlingstypeVelger-io0Uxxg4.js";import"./FagsakYtelseTypeVelger-CT9-3CZW.js";import"./SorteringVelger-BkzHDDz8.js";import"./useDebounce-BWY103yy.js";import"./Box-i9Po46wG.js";const L=g(I),H={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:o,decorators:[L,E],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>n.json(u)),e.get(r.OPPGAVE_ANTALL,()=>n.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new n(null,{status:200}))]}},args:{valgtAvdelingEnhet:""},render:S=>{const{data:T}=R(m());return T?i.jsx(o,{...S}):i.jsx(A,{})}},t={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",saksbehandlerIdenter:[],sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[p.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[l.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,saksbehandlerIdenter:[],sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[p.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[l.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const M=["MedGittNavn","MedDefaultNavn"];export{s as MedDefaultNavn,t as MedGittNavn,M as __namedExportsOrder,H as default};
