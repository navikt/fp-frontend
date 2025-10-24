import{j as a,w as g,r as u}from"./iframe-IBzpmzds.js";import{Z as S}from"./index.es-Cp4kNmhO.js";import{u as h}from"./useQuery-CpBkxfQP.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-DN9OSqGe.js";import{g as v,m as I}from"./nb_NO-BsJAMQ-X.js";import{a as E}from"./useLosKodeverk-DXUlkb-N.js";import{G as d}from"./GjeldendeSakslisterTabell-CT-e0HqW.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-BEAQSND1.js";import"./index-C6HeGAEA.js";import"./BasePrimitive-DUPziriZ.js";import"./useMutation-CI_1hfKh.js";import"./SletteSakslisteModal-omBepcQa.js";import"./Table-F4bffmsZ.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,T=v(I),B={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(E)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:r("button-click"),resetValgtSakslisteId:r("button-click"),lagNySaksliste:r("button-click"),valgtAvdelingEnhet:"1",children:a.jsx("div",{children:"test"})},render:k=>{const[n,m]=u.useState(k),{data:p}=h(b()),c=()=>{n.lagNySaksliste(),m(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",saksbehandlerIdenter:[]})}))};return p?a.jsx(d,{...n,lagNySaksliste:c}):a.jsx(S,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["R23233"]}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const G=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{e as TabellNårDetFinnesEnBehandlingskø,s as TabellNårDetIkkeFinnesBehandlingskøer,G as __namedExportsOrder,B as default};
