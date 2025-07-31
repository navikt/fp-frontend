import{j as r,f as g,r as u}from"./iframe-DrTCGkYu.js";import{X as S}from"./index.es-Dk-cJj8e.js";import{u as h}from"./useQuery-Bhm6mXoc.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-C_uGHNeN.js";import{g as v}from"./withIntl-DdmXuzMc.js";import{a as I}from"./useLosKodeverk-C-n9ofIp.js";import{G as d}from"./GjeldendeSakslisterTabell-Cg1RxLbL.js";import{m as E}from"./nb_NO-tskf6aB_.js";import"./Modal-D9AfVhOG.js";import"./index-Bh6_tCdP.js";import"./BasePrimitive-COuNF8P0.js";import"./useMutation-ChDec88x.js";import"./SletteSakslisteModal-CZFmeJji.js";import"./Table-D_zh3bLX.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=v(E),w={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(I)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:r.jsx("div",{children:"test"})},render:k=>{const[n,m]=u.useState(k),{data:p}=h(b()),c=()=>{n.lagNySaksliste?.(),m(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",saksbehandlerIdenter:[]})}))};return p?r.jsx(d,{...n,lagNySaksliste:c}):r.jsx(S,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["R23233"]}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const G=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{e as TabellNårDetFinnesEnBehandlingskø,s as TabellNårDetIkkeFinnesBehandlingskøer,G as __namedExportsOrder,w as default};
