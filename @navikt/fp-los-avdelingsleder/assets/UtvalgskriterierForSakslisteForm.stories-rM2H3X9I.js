import{f as E,F as l,B as p,j as i}from"./iframe-C40YJXcE.js";import{X as A}from"./index.es-sDHmt5dn.js";import{u as m}from"./useQuery-CKR2hfLd.js";import{h as e,L as r,b as t,l as R}from"./fplosAvdelingslederApi-CjK3nr-s.js";import{K as d}from"./køSortering-BHrQm0Td.js";import{A as a}from"./andreKriterierType-Cg0VWsVP.js";import{g as u}from"./withIntl-B3oyHKWD.js";import{a as g}from"./useLosKodeverk-CXrAmYko.js";import{U as o}from"./UtvalgskriterierForSakslisteForm-lPHgflKN.js";import{m as I}from"./nb_NO-DgDSjHBI.js";import"./Modal-BRJLMWra.js";import"./index-CfgcW_Et.js";import"./BasePrimitive-C5TiBgY3.js";import"./index.es-DRYD0Am0.js";import"./index.es-DsnyeLDn.js";import"./useMutation-DvF0BgKi.js";import"./AndreKriterierVelger-jqc3pCGl.js";import"./BehandlingstypeVelger-Dr_obgYg.js";import"./FagsakYtelseTypeVelger-Btx1LsZ-.js";import"./SorteringVelger-DpkmDo3v.js";import"./useDebounce-DTOEZuRm.js";import"./Box-BuLishK7.js";const L=u(I),M={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:o,decorators:[L,E],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>t.json(g)),e.get(r.OPPGAVE_ANTALL,()=>t.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new t(null,{status:200}))]}},args:{valgtAvdelingEnhet:""},render:S=>{const{data:T}=m(R());return T?i.jsx(o,{...S}):i.jsx(A,{})}},n={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",saksbehandlerIdenter:[],sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[p.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[l.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,saksbehandlerIdenter:[],sortering:{sorteringType:d.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[p.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[l.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["MedGittNavn","MedDefaultNavn"];export{s as MedDefaultNavn,n as MedGittNavn,V as __namedExportsOrder,M as default};
