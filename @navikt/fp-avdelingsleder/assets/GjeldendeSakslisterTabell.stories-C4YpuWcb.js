import{j as a,w as g,r as u}from"./iframe-px1bRsqd.js";import{Q as S}from"./index.es-CP2OiLP_.js";import{u as h}from"./useQuery-CEcBdk3k.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-aek4GE1a.js";import{g as v,m as I}from"./nb_NO-jRgUiDEB.js";import{a as E}from"./useLosKodeverk-DrKq3pFw.js";import{G as d}from"./GjeldendeSakslisterTabell-cLT1wBKz.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-DDoNqNzy.js";import"./index-CbijBMQ9.js";import"./BasePrimitive-CET_hbxJ.js";import"./useMutation-CRN0a7le.js";import"./SletteSakslisteModal-IUHsOsG1.js";import"./Table-CzFT11Iw.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,T=v(I),B={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(E)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:r("button-click"),resetValgtSakslisteId:r("button-click"),lagNySaksliste:r("button-click"),valgtAvdelingEnhet:"1",children:a.jsx("div",{children:"test"})},render:k=>{const[n,m]=u.useState(k),{data:p}=h(b()),c=()=>{n.lagNySaksliste?.(),m(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",saksbehandlerIdenter:[]})}))};return p?a.jsx(d,{...n,lagNySaksliste:c}):a.jsx(S,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["R23233"]}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    sakslister: [{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      saksbehandlerIdenter: ['R23233']
    }],
    oppgaverForAvdelingAntall: 1
  }
}`,...e.parameters?.docs?.source}}};const Q=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{e as TabellNårDetFinnesEnBehandlingskø,s as TabellNårDetIkkeFinnesBehandlingskøer,Q as __namedExportsOrder,B as default};
