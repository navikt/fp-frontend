import{h as r,L as s,b as t}from"./fplosAvdelingslederApi-BG5Uiiia.js";import{g as k}from"./iframe--vOKNX8W.js";import{g as v}from"./withIntl-AW3Sx-SP.js";import{S as c}from"./SaksbehandlereTabell-BV_1a0gp.js";import{m as A}from"./nb_NO-DX-Byl_6.js";import"./Modal-C4Imirkn.js";import"./index-oZsAXA3K.js";import"./BasePrimitive-CkrbCjHy.js";import"./useMutation-Br5kCffE.js";import"./SletteSaksbehandlerModal-8k8QoMBr.js";import"./Table-Ddytag78.js";const h=v(A),w={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:c,decorators:[h,k],parameters:{msw:{handlers:[r.post(s.SLETT_SAKSBEHANDLER,()=>new t(null,{status:200})),r.get(s.SAKSBEHANDLERE_FOR_AVDELING,()=>new t(null,{status:200}))]}},args:{valgtAvdelingEnhet:"Nav Vikafossen"}},e={args:{saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",ansattAvdeling:"Oslo"},{brukerIdent:"S53343",navn:"Steffen",ansattAvdeling:"Oslo"},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}},n={args:{saksbehandlere:[]}},a={args:{saksbehandlere:[{brukerIdent:"X1111",navn:"Ukjent saksbehandler (X11111)",ansattAvdeling:null},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}};var l,o,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(o=e.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var m,i,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    saksbehandlere: []
  }
}`,...(g=(i=n.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var p,u,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const _=["Default","TomTabell","MedSaksbehandlerUtenAnsattAvdeling"];export{e as Default,a as MedSaksbehandlerUtenAnsattAvdeling,n as TomTabell,_ as __namedExportsOrder,w as default};
