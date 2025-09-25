import{V as I,K as f,L as c,h,b as k}from"./fplosAvdelingslederApi-BPchPfUZ.js";import{c as y,r as D,j as e,w as E}from"./iframe-BOmlqHOP.js";import{B as H,M as t,g as T,m as w}from"./nb_NO-B9Pe-53G.js";import{u as C}from"./useMutation-CquSeUls.js";import{S as R}from"./SletteSaksbehandlerModal-CWxhsMsH.js";import{T as n}from"./Table-sDAMW6AL.js";import{S as _}from"./Modal-D6Pp4dNw.js";import"./BasePrimitive-NCYGSF69.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BxvrWkeC.js";const M="_removeIcon_16jh0_1",N={removeIcon:M},b=({saksbehandlere:S,valgtAvdelingEnhet:A})=>{const j=y(),[m,r]=D.useState(),{mutate:x}=C({mutationFn:a=>f(a.brukerIdent,A),onSuccess:()=>{j.invalidateQueries({queryKey:[c.SAKSBEHANDLERE_FOR_AVDELING]}),r(void 0)}}),i=S.toSorted((a,g)=>{const p=(s,u)=>s!=null&&u!=null?s.localeCompare(u):s==null&&u==null?0:s==null?1:-1,v=p(a.ansattAvdeling,g.ansattAvdeling);return v!==0?v:p(a.navn,g.navn)});return e.jsxs(I,{gap:"space-8",children:[i.length===0&&e.jsx(H,{size:"small",children:e.jsx(t,{id:"SaksbehandlereTabell.IngenSaksbehandlere"})}),i.length>0&&e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsxs(n.Row,{children:[e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(t,{id:"SaksbehandlereTabell.Navn"})}),e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(t,{id:"SaksbehandlereTabell.Brukerident"})}),e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(t,{id:"SaksbehandlereTabell.AnsattVed"})}),e.jsx(n.HeaderCell,{scope:"col"})]})}),e.jsx(n.Body,{children:i.map(a=>e.jsxs(n.Row,{children:[e.jsx(n.DataCell,{scope:"row",children:a.navn}),e.jsx(n.DataCell,{children:a.brukerIdent}),e.jsx(n.DataCell,{children:a.ansattAvdeling}),e.jsx(n.DataCell,{children:e.jsx(_,{className:N.removeIcon,onMouseDown:()=>r(a),onKeyDown:()=>r(a)})})]},a.brukerIdent))})]}),m&&e.jsx(R,{valgtSaksbehandler:m,closeSletteModal:()=>r(void 0),fjernSaksbehandler:x})]})};b.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlereTabell",props:{saksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};const L=T(w),G={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:b,decorators:[L,E],parameters:{msw:{handlers:[h.post(c.SLETT_SAKSBEHANDLER,()=>new k(null,{status:200})),h.get(c.SAKSBEHANDLERE_FOR_AVDELING,()=>new k(null,{status:200}))]}},args:{valgtAvdelingEnhet:"Nav Vikafossen"}},l={args:{saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",ansattAvdeling:"Oslo"},{brukerIdent:"S53343",navn:"Steffen",ansattAvdeling:"Oslo"},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}},o={args:{saksbehandlere:[]}},d={args:{saksbehandlere:[{brukerIdent:"X1111",navn:"Ukjent saksbehandler (X11111)",ansattAvdeling:null},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    saksbehandlere: []
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const P=["Default","TomTabell","MedSaksbehandlerUtenAnsattAvdeling"];export{l as Default,d as MedSaksbehandlerUtenAnsattAvdeling,o as TomTabell,P as __namedExportsOrder,G as default};
