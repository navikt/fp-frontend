import{w as d,j as a}from"./iframe-B9GJflc3.js";import{Q as p}from"./index.es-B3HhDfvo.js";import{u as T}from"./useQuery--9WxZcS7.js";import{h as e,L as r,b as t,l as S}from"./fplosAvdelingslederApi-BXZKS9tZ.js";import{g as E,m}from"./nb_NO-B4ZEav4_.js";import{a as u}from"./useLosKodeverk-DghQg8L0.js";import{U as i}from"./UtvalgskriterierForSakslisteForm-DiB88Zzr.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-BF4CgR3o.js";import"./index-GYnwPk1P.js";import"./BasePrimitive-DQVie3Uw.js";import"./index.es-zz4Z3BS2.js";import"./useMutation-C5DsEiyB.js";import"./AndreKriterierVelger-gA_VB9ZO.js";import"./BehandlingstypeVelger-wQ-zpqUe.js";import"./FagsakYtelseTypeVelger-DLfcn_LF.js";import"./SorteringVelger-tlC-EG1k.js";import"./useDebounce-Da_EdPr5.js";import"./Box-C8oAG071.js";const I=E(m),w={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:i,decorators:[I,d],parameters:{msw:{handlers:[e.get(r.KODEVERK_LOS,()=>t.json(u)),e.get(r.OPPGAVE_ANTALL,()=>t.json(1)),e.post(r.LAGRE_SAKSLISTE_NAVN,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_INTERVALL,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_BEHANDLINGSTYPE,()=>new t(null,{status:200})),e.post(r.LAGRE_SAKSLISTE_ANDRE_KRITERIER,()=>new t(null,{status:200}))]}},args:{valgtAvdelingEnhet:""},render:o=>{const{data:l}=T(S());return l?a.jsx(i,{...o}):a.jsx(p,{})}},n={args:{valgtSaksliste:{sakslisteId:1,navn:"liste",saksbehandlerIdenter:[],sortering:{sorteringType:"BEHFRIST",fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:["BT-002"],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:"TIL_BESLUTTER",inkluder:!0},{andreKriterierType:"PAPIRSOKNAD",inkluder:!1}]}}},s={args:{valgtSaksliste:{sakslisteId:1,navn:void 0,saksbehandlerIdenter:[],sortering:{sorteringType:"BEHFRIST",fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:["BT-002"],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:"TIL_BESLUTTER",inkluder:!0},{andreKriterierType:"PAPIRSOKNAD",inkluder:!1}]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'liste',
      saksbehandlerIdenter: [],
      sortering: {
        sorteringType: 'BEHFRIST',
        fra: 1,
        til: 4,
        erDynamiskPeriode: true
      },
      behandlingTyper: ['BT-002'],
      fagsakYtelseTyper: ['FP'],
      andreKriterier: [{
        andreKriterierType: 'TIL_BESLUTTER',
        inkluder: true
      }, {
        andreKriterierType: 'PAPIRSOKNAD',
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
        sorteringType: 'BEHFRIST',
        fra: 1,
        til: 4,
        erDynamiskPeriode: true
      },
      behandlingTyper: ['BT-002'],
      fagsakYtelseTyper: ['FP'],
      andreKriterier: [{
        andreKriterierType: 'TIL_BESLUTTER',
        inkluder: true
      }, {
        andreKriterierType: 'PAPIRSOKNAD',
        inkluder: false
      }]
    }
  }
}`,...s.parameters?.docs?.source}}};const b=["MedGittNavn","MedDefaultNavn"];export{s as MedDefaultNavn,n as MedGittNavn,b as __namedExportsOrder,w as default};
