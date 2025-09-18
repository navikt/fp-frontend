import{j as r,w as g,r as u}from"./iframe-C5MiiFGG.js";import{Q as S}from"./index.es-B6BecDhV.js";import{u as h}from"./useQuery-8D1YQakY.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-DhjTSEd9.js";import{g as v,m as I}from"./nb_NO-BHyDhga3.js";import{a as E}from"./useLosKodeverk-C1dfmBoz.js";import{G as d}from"./GjeldendeSakslisterTabell-BVqPWV6u.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-DWjp6MuS.js";import"./Modal-DC8aCGhM.js";import"./index-NoJYJMfq.js";import"./BasePrimitive-DyD0Wl37.js";import"./useMutation-B_Kgrwpz.js";import"./SletteSakslisteModal-Ck0Nir-N.js";import"./Table-DdeBiLcz.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=v(I),Q={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(E)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:r.jsx("div",{children:"test"})},render:k=>{const[n,m]=u.useState(k),{data:p}=h(b()),c=()=>{n.lagNySaksliste?.(),m(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",saksbehandlerIdenter:[]})}))};return p?r.jsx(d,{...n,lagNySaksliste:c}):r.jsx(S,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["R23233"]}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
