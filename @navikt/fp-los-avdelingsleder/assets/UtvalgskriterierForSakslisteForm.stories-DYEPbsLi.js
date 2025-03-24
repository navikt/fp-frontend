import{h as e,L as r,H as t}from"./fplosAvdelingslederApi-DKf9uF98.js";import{w as m,F as S,B as T,m as A}from"./nb_NO-DldPmdYP.js";import{g}from"./withIntl-C2M74tLi.js";import"./jsx-runtime-D_zvdyIk.js";import{a as I}from"./useLosKodeverk-lRFpT-wM.js";import{A as a}from"./andreKriterierType-DFB25pp4.js";import{K as R}from"./KoSortering-BHrQm0Td.js";import{U as L}from"./UtvalgskriterierForSakslisteForm-BGiSy1K-.js";import"./decorators-Bnaor6Ku.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-DGrvUioF.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./BasePrimitive-BjyBSPGf.js";import"./v4-CtRu48qb.js";import"./entry-preview-BmftVSNi.js";import"./iframe-CeIpHr0Z.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-duuaId12.js";import"./index-CXQShRbs.js";import"./useQuery-k4yIkkrn.js";import"./index.es-BMkufVCl.js";import"./index.es-DXUocOYT.js";import"./dayjs.min-Cke173X9.js";import"./index.es-B1PO0jXV.js";import"./useMutation-Ds0CSo9u.js";import"./AndreKriterierVelger-mw7-qzbm.js";import"./BehandlingstypeVelger-zm1sxTlU.js";import"./kodeverkTyper-BiqIm7FA.js";import"./FagsakYtelseTypeVelger-HLrK6Qnl.js";import"./SorteringVelger-CEK2iAQW.js";import"./useDebounce-CuGV-paA.js";import"./Box-8fO4UaZD.js";const u=g(A),re={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:L,decorators:[u,m],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>t.json(I)),e.get(r.OPPGAVE_ANTALL,()=>t.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new t(null,{status:200}))]}},args:{valgtAvdelingEnhet:""}},n={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:R.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[T.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[S.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:R.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[T.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[S.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}}};var i,o,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
