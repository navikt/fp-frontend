import{h as r,L as t,H as s}from"./fplosAvdelingslederApi-DNP73Upt.js";import{w as v,m as b}from"./nb_NO-rozzxS7Z.js";import{g as c}from"./withIntl-BSNqeFWw.js";import"./jsx-runtime-D_zvdyIk.js";import{S as A}from"./SaksbehandlereTabell-BFXqv-vk.js";import"./decorators-DIzpaN6C.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-BVAIC6Kg.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./BasePrimitive-4Eka1X40.js";import"./v4-CtRu48qb.js";import"./react-Bu2w_5aE.js";import"./iframe-BtfLcYZS.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./useMutation-BosAOaUz.js";import"./SletteSaksbehandlerModal-IFNxwyRA.js";import"./Table-B9E7IXJy.js";const h=c(b),M={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:A,decorators:[h,v],parameters:{msw:{handlers:[r.post(t.SLETT_SAKSBEHANDLER,()=>new s(null,{status:200})),r.get(t.SAKSBEHANDLERE_FOR_AVDELING,()=>new s(null,{status:200}))]}},args:{valgtAvdelingEnhet:"Nav Vikafossen"}},e={args:{saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",ansattAvdeling:"Oslo"},{brukerIdent:"S53343",navn:"Steffen",ansattAvdeling:"Oslo"},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}},n={args:{saksbehandlere:[]}},a={args:{saksbehandlere:[{brukerIdent:"X1111",navn:"Ukjent saksbehandler (X11111)",ansattAvdeling:null},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}};var o,l,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,i,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    saksbehandlere: []
  }
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var g,u,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(k=(u=a.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const V=["Default","TomTabell","MedSaksbehandlerUtenAnsattAvdeling"];export{e as Default,a as MedSaksbehandlerUtenAnsattAvdeling,n as TomTabell,V as __namedExportsOrder,M as default};
