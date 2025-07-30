import{j as r,f as g,r as u}from"./iframe-gYF99bpJ.js";import{X as S}from"./index.es-Bru076JX.js";import{u as h}from"./useQuery-De1p-dGU.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-cGPzxlCw.js";import{g as v}from"./withIntl-CQNxENlx.js";import{a as E}from"./useLosKodeverk-7Y30tkru.js";import{G as d}from"./GjeldendeSakslisterTabell-CBUS-et-.js";import{m as I}from"./nb_NO-3HGCLywH.js";import"./Modal-CZ0fvY4N.js";import"./index-kWm9xkfC.js";import"./BasePrimitive-j7bUEsxy.js";import"./useMutation-edhUVvtQ.js";import"./SletteSakslisteModal-Bqe2cniO.js";import"./Table-BvZg85xp.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=v(I),w={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(E)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:r.jsx("div",{children:"test"})},render:k=>{const[n,m]=u.useState(k),{data:p}=h(b()),c=()=>{n.lagNySaksliste?.(),m(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[]})}))};return p?r.jsx(d,{...n,lagNySaksliste:c}):r.jsx(S,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"]}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    sakslister: [{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      sistEndret: '2020-01-01',
      saksbehandlerIdenter: ['R23233']
    }],
    oppgaverForAvdelingAntall: 1
  }
}`,...e.parameters?.docs?.source}}};const G=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{e as TabellNårDetFinnesEnBehandlingskø,s as TabellNårDetIkkeFinnesBehandlingskøer,G as __namedExportsOrder,w as default};
