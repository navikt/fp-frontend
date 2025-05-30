import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index.es-Cjdsk7Cs.js";import{u as L}from"./useQuery-M1M5ck5z.js";import{h as e,L as r,H as t,l as K}from"./fplosAvdelingslederApi-Bs4aIVUB.js";import{w as N,F as m,B as A}from"./withThemeDecorator-DBy2WCuL.js";import{K as R}from"./køSortering-BHrQm0Td.js";import{A as a}from"./andreKriterierType-DyVow8-R.js";import{g as k}from"./withIntl-4h6R5brn.js";import{a as y}from"./useLosKodeverk-5AEUEzZ5.js";import{U as o}from"./UtvalgskriterierForSakslisteForm-DsA8puWo.js";import{m as G}from"./nb_NO-BaM8krxd.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-Bv0FCZW9.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./decorators-Bnaor6Ku.js";import"./BasePrimitive-DBpQiDYr.js";import"./v4-CtRu48qb.js";import"./entry-preview-magSHa_m.js";import"./iframe-iaC8r-AC.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./index.es-BnDWuX8D.js";import"./index.es-Dqs9-cAD.js";import"./useMutation-C4lKXVQc.js";import"./AndreKriterierVelger-DDd0qYsp.js";import"./BehandlingstypeVelger-BWO76e_Y.js";import"./FagsakYtelseTypeVelger-C20y1z4S.js";import"./SorteringVelger-DFLSzxE3.js";import"./useDebounce-DACqpNg_.js";import"./Box-DiBC9i3i.js";const _=k(G),ie={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:o,decorators:[_,N],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>t.json(y)),e.get(r.OPPGAVE_ANTALL,()=>t.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new t(null,{status:200}))]}},args:{valgtAvdelingEnhet:""},render:g=>{const{data:u}=L(K());return u?i.jsx(o,{...g}):i.jsx(I,{})}},n={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:R.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[A.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[m.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:R.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[A.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[m.FORELDREPENGER],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}};var l,p,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var E,S,T;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const oe=["MedGittNavn","MedDefaultNavn"];export{s as MedDefaultNavn,n as MedGittNavn,oe as __namedExportsOrder,ie as default};
