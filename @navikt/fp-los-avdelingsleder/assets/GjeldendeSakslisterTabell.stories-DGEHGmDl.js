import{j as r,g,r as u}from"./iframe-CAoepdM6.js";import{Q as S}from"./index.es-y6vRIgx0.js";import{u as h}from"./useQuery-CIyAbh--.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-oBKxW7VS.js";import{g as v}from"./withIntl-CVIH14Vi.js";import{a as I}from"./useLosKodeverk-A8B8iZfZ.js";import{G as d}from"./GjeldendeSakslisterTabell-T524k7XV.js";import{m as E}from"./nb_NO-2e8QuZR3.js";import"./preload-helper-D9Z9MdNV.js";import"./Modal-7LDKk8jw.js";import"./index-exW2nxks.js";import"./BasePrimitive-DLjsfheS.js";import"./useMutation-D7oeEAL1.js";import"./SletteSakslisteModal-D8xMjQT6.js";import"./Table-DjgivJkm.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=v(E),Q={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(I)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:r.jsx("div",{children:"test"})},render:m=>{const[n,k]=u.useState(m),{data:p}=h(b()),c=()=>{n.lagNySaksliste?.(),k(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",saksbehandlerIdenter:[]})}))};return p?r.jsx(d,{...n,lagNySaksliste:c}):r.jsx(S,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["R23233"]}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const G=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{e as TabellNårDetFinnesEnBehandlingskø,s as TabellNårDetIkkeFinnesBehandlingskøer,G as __namedExportsOrder,Q as default};
