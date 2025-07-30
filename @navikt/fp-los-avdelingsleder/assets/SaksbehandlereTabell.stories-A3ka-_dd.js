import{h as r,L as s,b as t}from"./fplosAvdelingslederApi-cGPzxlCw.js";import{f as l}from"./iframe-gYF99bpJ.js";import{g as o}from"./withIntl-CQNxENlx.js";import{S as d}from"./SaksbehandlereTabell-BX6LomkM.js";import{m}from"./nb_NO-3HGCLywH.js";import"./Modal-CZ0fvY4N.js";import"./index-kWm9xkfC.js";import"./BasePrimitive-j7bUEsxy.js";import"./useMutation-edhUVvtQ.js";import"./SletteSaksbehandlerModal-Z0G5l0n_.js";import"./Table-BvZg85xp.js";const i=o(m),I={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:d,decorators:[i,l],parameters:{msw:{handlers:[r.post(s.SLETT_SAKSBEHANDLER,()=>new t(null,{status:200})),r.get(s.SAKSBEHANDLERE_FOR_AVDELING,()=>new t(null,{status:200}))]}},args:{valgtAvdelingEnhet:"Nav Vikafossen"}},e={args:{saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",ansattAvdeling:"Oslo"},{brukerIdent:"S53343",navn:"Steffen",ansattAvdeling:"Oslo"},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}},n={args:{saksbehandlere:[]}},a={args:{saksbehandlere:[{brukerIdent:"X1111",navn:"Ukjent saksbehandler (X11111)",ansattAvdeling:null},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const E=["Default","TomTabell","MedSaksbehandlerUtenAnsattAvdeling"];export{e as Default,a as MedSaksbehandlerUtenAnsattAvdeling,n as TomTabell,E as __namedExportsOrder,I as default};
