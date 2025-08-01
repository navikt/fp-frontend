import{j as r,f as g,r as u}from"./iframe-C40YJXcE.js";import{X as S}from"./index.es-sDHmt5dn.js";import{u as h}from"./useQuery-CKR2hfLd.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-CjK3nr-s.js";import{g as v}from"./withIntl-B3oyHKWD.js";import{a as I}from"./useLosKodeverk-CXrAmYko.js";import{G as d}from"./GjeldendeSakslisterTabell-Dkio2msr.js";import{m as E}from"./nb_NO-DgDSjHBI.js";import"./Modal-BRJLMWra.js";import"./index-CfgcW_Et.js";import"./BasePrimitive-C5TiBgY3.js";import"./useMutation-DvF0BgKi.js";import"./SletteSakslisteModal-BMLinx38.js";import"./Table-Dys7MuC1.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=v(E),w={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(I)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:r.jsx("div",{children:"test"})},render:k=>{const[n,m]=u.useState(k),{data:p}=h(b()),c=()=>{n.lagNySaksliste?.(),m(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",saksbehandlerIdenter:[]})}))};return p?r.jsx(d,{...n,lagNySaksliste:c}):r.jsx(S,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["R23233"]}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
