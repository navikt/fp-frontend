import{h as e,L as r,H as n}from"./fplosAvdelingslederApi-DPBZ_YKB.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as I}from"./behandlingType-BdbjGMJD.js";import{F as u}from"./fagsakYtelseType-DI8GXtVr.js";import{w as y,m as k}from"./nb_NO-Bi5y27PA.js";import{g as N}from"./withIntl-D8jdhkXM.js";import{a as L}from"./useLosKodeverk-DC0Yv5X7.js";import{A as s}from"./andreKriterierType-DFB25pp4.js";import{K}from"./KoSortering-BHrQm0Td.js";import{U as G}from"./UtvalgskriterierForSakslisteForm-C2VN8yEU.js";import"./decorators-DIzpaN6C.js";import"./index-B54hSm9S.js";import"./index-D1iumpf7.js";import"./Modal-BrZj9Pi8.js";import"./index-BC2UOl6f.js";import"./index-D41M3POg.js";import"./jsx-runtime-BDPtolqC.js";import"./BasePrimitive-r5CFla7J.js";import"./useQuery-BTEFDDvd.js";import"./index.es-CbjsSlRY.js";import"./index.es-RUajDzyl.js";import"./dayjs.min-BBSNu57g.js";import"./index.es-DGFmJ-tP.js";import"./useMutation-BYq_cSFy.js";import"./AndreKriterierVelger-CtnWD_0s.js";import"./BehandlingstypeVelger-CFOwLCmM.js";import"./kodeverkTyper-CavWL6Ds.js";import"./FagsakYtelseTypeVelger-cUPkSmUF.js";import"./SorteringVelger-Dq6cONap.js";import"./useDebounce-kq70kJTe.js";import"./Box-BJHS9WE4.js";const _=N(k),ae={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:G,decorators:[_,y],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>n.json(L)),e.get(r.OPPGAVE_ANTALL,()=>n.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new n(null,{status:200}))]}},args:{valgtAvdelingEnhet:""}},t={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:K.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[I.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[u.FORELDREPENGER],andreKriterier:[{andreKriterierType:s.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:s.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}}},a={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:K.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[I.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[u.FORELDREPENGER],andreKriterier:[{andreKriterierType:s.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:s.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}}};var i,l,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        andreKriterierType: AndreKriterierType.REGISTRER_PAPIRSOKNAD,
        inkluder: false
      }]
    }
  }
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var d,p,T;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        andreKriterierType: AndreKriterierType.REGISTRER_PAPIRSOKNAD,
        inkluder: false
      }]
    }
  }
}`,...(T=(p=a.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var E,S,R;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
        andreKriterierType: AndreKriterierType.REGISTRER_PAPIRSOKNAD,
        inkluder: false
      }]
    }
  }
}`,...(R=(S=t.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var g,m,A;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
        andreKriterierType: AndreKriterierType.REGISTRER_PAPIRSOKNAD,
        inkluder: false
      }]
    }
  }
}`,...(A=(m=a.parameters)==null?void 0:m.docs)==null?void 0:A.source}}};const se=["MedGittNavn","MedDefaultNavn"];export{a as MedDefaultNavn,t as MedGittNavn,se as __namedExportsOrder,ae as default};
