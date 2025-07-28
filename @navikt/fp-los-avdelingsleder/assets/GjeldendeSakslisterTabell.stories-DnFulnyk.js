import{j as a,g,r as h}from"./iframe-7DHfFxUb.js";import{X as u}from"./index.es-B-1xQFYY.js";import{u as S}from"./useQuery-9t5rJe1b.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-C3J256Yv.js";import{g as v}from"./withIntl-BXxnp-10.js";import{a as E}from"./useLosKodeverk-Cum48DQs.js";import{G as d}from"./GjeldendeSakslisterTabell-DaV7yF2Z.js";import{m as I}from"./nb_NO-BPJEvMIK.js";import"./Modal-Dy_z5U0Y.js";import"./index-CLE-woyL.js";import"./BasePrimitive-BRBxS2B5.js";import"./useMutation-DObrnaYZ.js";import"./SletteSakslisteModal-BUvC3wR0.js";import"./Table-rwsuHTHt.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,T=v(I),w={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(E)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:r("button-click"),resetValgtSakslisteId:r("button-click"),lagNySaksliste:r("button-click"),valgtAvdelingEnhet:"1",children:a.jsx("div",{children:"test"})},render:k=>{const[n,m]=h.useState(k),{data:p}=S(b()),c=()=>{n.lagNySaksliste?.(),m(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return p?a.jsx(d,{...n,lagNySaksliste:c}):a.jsx(u,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    sakslister: [{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      sistEndret: '2020-01-01',
      saksbehandlerIdenter: ['R23233'],
      antallBehandlinger: 1
    }],
    oppgaverForAvdelingAntall: 1
  }
}`,...e.parameters?.docs?.source}}};const G=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{e as TabellNårDetFinnesEnBehandlingskø,s as TabellNårDetIkkeFinnesBehandlingskøer,G as __namedExportsOrder,w as default};
