import{w as y,h as e,L as r,H as n}from"./withQueryClientProvider-D5rUA1vz.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as I}from"./behandlingType-BdbjGMJD.js";import{F as K}from"./fagsakYtelseType-DI8GXtVr.js";import{m as k}from"./nb_NO-CZSpk6bt.js";import{g as N}from"./withIntl-DXtOtJE7.js";import{a as L}from"./useLosKodeverk-EfGSBP6a.js";import{A as s}from"./andreKriterierType-DFB25pp4.js";import{K as u}from"./KoSortering-BHrQm0Td.js";import{U as G}from"./UtvalgskriterierForSakslisteForm-vhnk4YAM.js";import"./decorators-86JrGkCj.js";import"./index-DRjF_FHU.js";import"./Modal-B9osCInE.js";import"./index-rX-Bn4lm.js";import"./jsx-runtime-DR9Q75dM.js";import"./BasePrimitive-zpMbHS_U.js";import"./useQuery-Cufi_TnF.js";import"./index.es-BU4tl1aP.js";import"./index.es-C9TXiEHC.js";import"./dayjs.min-CnNqAF5I.js";import"./index.es-Dx0W_TRK.js";import"./useMutation-Bl-NM7Qh.js";import"./AndreKriterierVelger-DQh90S-Q.js";import"./BehandlingstypeVelger-C44r_Wai.js";import"./kodeverkTyper-CavWL6Ds.js";import"./FagsakYtelseTypeVelger-Dow02Dld.js";import"./SorteringVelger-DLxQl2BP.js";import"./useDebounce-DrAb2ykv.js";import"./Box-1wYTnjcS.js";const _=N(k),ne={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:G,decorators:[_,y],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>n.json(L)),e.get(r.OPPGAVE_ANTALL,()=>n.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new n(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new n(null,{status:200}))]}},args:{valgtAvdelingEnhet:""}},t={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:u.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[I.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[K.FORELDREPENGER],andreKriterier:[{andreKriterierType:s.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:s.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}}},a={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:u.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[I.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[K.FORELDREPENGER],andreKriterier:[{andreKriterierType:s.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:s.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}}};var i,l,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(A=(m=a.parameters)==null?void 0:m.docs)==null?void 0:A.source}}};const te=["MedGittNavn","MedDefaultNavn"];export{a as MedDefaultNavn,t as MedGittNavn,te as __namedExportsOrder,ne as default};
