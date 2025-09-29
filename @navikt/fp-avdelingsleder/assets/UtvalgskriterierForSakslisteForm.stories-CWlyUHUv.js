import{w as T,j as i}from"./iframe-e0YQGZUb.js";import{Q as S}from"./index.es-Dlk5zZrG.js";import{u as m}from"./useQuery-BNKGoRqt.js";import{h as e,L as r,b as t,l as E}from"./fplosAvdelingslederApi-0j18A_8B.js";import{K as l}from"./SorteringVelger-C-P4xLNE.js";import{A as a}from"./AndreKriterierVelger-DKYqZhVj.js";import{g as u,m as A}from"./nb_NO-B-BJcyrv.js";import{a as I}from"./useLosKodeverk-CYn0Oc0C.js";import{U as o}from"./UtvalgskriterierForSakslisteForm-C5WlBhdl.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-CJgmGkIn.js";import"./index-D6r6Onj8.js";import"./BasePrimitive-BvjgzdUa.js";import"./index.es-P6v7M9GX.js";import"./useMutation-Co0UiqYg.js";import"./useDebounce-C5JUVjQR.js";import"./BehandlingstypeVelger-DzQvB70q.js";import"./FagsakYtelseTypeVelger-BtgQ8Gex.js";import"./Box-zI1_bHPI.js";const g=u(A),U={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:o,decorators:[g,T],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>t.json(I)),e.get(r.OPPGAVE_ANTALL,()=>t.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new t(null,{status:200}))]}},args:{valgtAvdelingEnhet:""},render:d=>{const{data:p}=m(E());return p?i.jsx(o,{...d}):i.jsx(S,{})}},n={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",saksbehandlerIdenter:[],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:["BT-002"],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,saksbehandlerIdenter:[],sortering:{sorteringType:l.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:["BT-002"],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:a.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:a.PAPIRSOKNAD,inkluder:!1}]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
      behandlingTyper: ['BT-002'],
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
      behandlingTyper: ['BT-002'],
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
}`,...s.parameters?.docs?.source}}};const Y=["MedGittNavn","MedDefaultNavn"];export{s as MedDefaultNavn,n as MedGittNavn,Y as __namedExportsOrder,U as default};
