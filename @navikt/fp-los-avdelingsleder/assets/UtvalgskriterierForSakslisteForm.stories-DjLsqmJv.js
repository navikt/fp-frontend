import{h as e,L as r,H as t}from"./fplosAvdelingslederApi-O4Lf0z9V.js";import{w as m,F as S,B as T,m as A}from"./nb_NO-Bnc00ehh.js";import{g}from"./withIntl-CvyvCzPi.js";import"./jsx-runtime-D_zvdyIk.js";import{a as I}from"./useLosKodeverk-C8hy6cn6.js";import{A as a}from"./andreKriterierType-DFB25pp4.js";import{K as R}from"./KoSortering-BHrQm0Td.js";import{U as L}from"./UtvalgskriterierForSakslisteForm-zVcLlTIo.js";import"./decorators-Bnaor6Ku.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-DXd3sJeF.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./BasePrimitive-DoaMUDI2.js";import"./v4-CtRu48qb.js";import"./entry-preview-D4kVSdDA.js";import"./iframe-DyR2xtuS.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-duuaId12.js";import"./index-CXQShRbs.js";import"./useQuery-CguoG_Gq.js";import"./index.es--mzycGcL.js";import"./index.es-BJFayhgu.js";import"./dayjs.min-Cke173X9.js";import"./index.es-BYuPkGCT.js";import"./useMutation-7kVpndL8.js";import"./AndreKriterierVelger-BAc7aXPE.js";import"./BehandlingstypeVelger-CSRMdu00.js";import"./kodeverkTyper-B1H1pBd8.js";import"./FagsakYtelseTypeVelger-Zs_K4WH5.js";import"./SorteringVelger-Br8PdIaP.js";import"./useDebounce-CAmtSVYD.js";import"./Box-C36leuAu.js";const u=g(A),re={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:L,decorators:[u,m],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>t.json(I)),e.get(r.OPPGAVE_ANTALL,()=>t.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new t(null,{status:200}))]}},args:{valgtAvdelingEnhet:""}},n={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:R.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[T.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[S.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:R.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[T.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[S.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}}};var i,o,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var p,E,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(E=s.parameters)==null?void 0:E.docs)==null?void 0:d.source}}};const te=["MedGittNavn","MedDefaultNavn"];export{s as MedDefaultNavn,n as MedGittNavn,te as __namedExportsOrder,re as default};
