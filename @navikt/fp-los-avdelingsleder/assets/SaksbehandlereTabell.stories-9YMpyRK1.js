import{h as r,L as s,b as t}from"./fplosAvdelingslederApi-DogJidXE.js";import{g as l}from"./iframe-C2DwZgGq.js";import{g as o}from"./withIntl-UOtUKo0Z.js";import{S as d}from"./SaksbehandlereTabell-DtFDK1ht.js";import{m}from"./nb_NO-DJ-Kga71.js";import"./BasePrimitive-BXlDYGcW.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-BWuB0qXf.js";import"./SletteSaksbehandlerModal-_w3Hmfh3.js";import"./Modal-SYEXFotS.js";import"./index-CL4MAq7W.js";import"./Table--N5XT47r.js";const i=o(m),E={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:d,decorators:[i,l],parameters:{msw:{handlers:[r.post(s.SLETT_SAKSBEHANDLER,()=>new t(null,{status:200})),r.get(s.SAKSBEHANDLERE_FOR_AVDELING,()=>new t(null,{status:200}))]}},args:{valgtAvdelingEnhet:"Nav Vikafossen"}},e={args:{saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",ansattAvdeling:"Oslo"},{brukerIdent:"S53343",navn:"Steffen",ansattAvdeling:"Oslo"},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}},n={args:{saksbehandlere:[]}},a={args:{saksbehandlere:[{brukerIdent:"X1111",navn:"Ukjent saksbehandler (X11111)",ansattAvdeling:null},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    saksbehandlere: [{
      brukerIdent: 'R12122',
      navn: 'Espen Utvikler',
      ansattAvdeling: 'Oslo'
    }, {
      brukerIdent: 'S53343',
      navn: 'Steffen',
      ansattAvdeling: 'Oslo'
    }, {
      brukerIdent: 'H11111',
      navn: 'Hildegunn',
      ansattAvdeling: 'Drammen'
    }]
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    saksbehandlere: []
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    saksbehandlere: [{
      brukerIdent: 'X1111',
      navn: 'Ukjent saksbehandler (X11111)',
      ansattAvdeling: null
    }, {
      brukerIdent: 'H11111',
      navn: 'Hildegunn',
      ansattAvdeling: 'Drammen'
    }]
  }
}`,...a.parameters?.docs?.source}}};const H=["Default","TomTabell","MedSaksbehandlerUtenAnsattAvdeling"];export{e as Default,a as MedSaksbehandlerUtenAnsattAvdeling,n as TomTabell,H as __namedExportsOrder,E as default};
