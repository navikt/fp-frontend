import{h as r,L as s,b as t}from"./fplosAvdelingslederApi-CWVGlM9T.js";import{g as l}from"./iframe-yH1fHU7Q.js";import{g as o}from"./withIntl-BrUORKG6.js";import{S as d}from"./SaksbehandlereTabell-CcCpjxya.js";import{m}from"./nb_NO-CYIn4FMC.js";import"./Modal-C_OpF3jZ.js";import"./index-DcVNjzNM.js";import"./BasePrimitive-DajsECfF.js";import"./useMutation-R0X0r_wF.js";import"./SletteSaksbehandlerModal-CTNAd-Cs.js";import"./Table-DbWlMlek.js";const i=o(m),I={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:d,decorators:[i,l],parameters:{msw:{handlers:[r.post(s.SLETT_SAKSBEHANDLER,()=>new t(null,{status:200})),r.get(s.SAKSBEHANDLERE_FOR_AVDELING,()=>new t(null,{status:200}))]}},args:{valgtAvdelingEnhet:"Nav Vikafossen"}},e={args:{saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",ansattAvdeling:"Oslo"},{brukerIdent:"S53343",navn:"Steffen",ansattAvdeling:"Oslo"},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}},n={args:{saksbehandlere:[]}},a={args:{saksbehandlere:[{brukerIdent:"X1111",navn:"Ukjent saksbehandler (X11111)",ansattAvdeling:null},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
