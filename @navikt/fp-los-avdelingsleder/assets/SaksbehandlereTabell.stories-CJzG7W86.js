import{h as r,L as s,b as t}from"./fplosAvdelingslederApi-DY-GDfyc.js";import{g as l}from"./iframe-BfbCBOdg.js";import{g as o}from"./withIntl-B_YtSZ48.js";import{S as d}from"./SaksbehandlereTabell-C4A_xQGI.js";import{m}from"./nb_NO-ChDJGE5I.js";import"./BasePrimitive-C_0QXrIv.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-CLn0hbTz.js";import"./SletteSaksbehandlerModal-DEP6jPiu.js";import"./Modal-n8iFLxme.js";import"./index-QCY3M29p.js";import"./Table-BhgebYEO.js";const i=o(m),E={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:d,decorators:[i,l],parameters:{msw:{handlers:[r.post(s.SLETT_SAKSBEHANDLER,()=>new t(null,{status:200})),r.get(s.SAKSBEHANDLERE_FOR_AVDELING,()=>new t(null,{status:200}))]}},args:{valgtAvdelingEnhet:"Nav Vikafossen"}},e={args:{saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",ansattAvdeling:"Oslo"},{brukerIdent:"S53343",navn:"Steffen",ansattAvdeling:"Oslo"},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}},n={args:{saksbehandlere:[]}},a={args:{saksbehandlere:[{brukerIdent:"X1111",navn:"Ukjent saksbehandler (X11111)",ansattAvdeling:null},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
