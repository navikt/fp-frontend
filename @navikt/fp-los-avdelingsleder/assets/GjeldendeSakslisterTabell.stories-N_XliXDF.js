import{j as r,f as g,r as u}from"./iframe-KPpM9Sh1.js";import{X as S}from"./index.es-CtYBzVu3.js";import{u as h}from"./useQuery-Cq9kCZdU.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-BDl41MHn.js";import{g as v}from"./withIntl-DCOmpqWE.js";import{a as E}from"./useLosKodeverk-CJyOqLJN.js";import{G as d}from"./GjeldendeSakslisterTabell-CkdXO71b.js";import{m as I}from"./nb_NO-CFMecJ13.js";import"./Modal-BVCEW2IO.js";import"./index-CDW5f1rE.js";import"./BasePrimitive-C9mS6WCl.js";import"./useMutation-D_AcAc1e.js";import"./SletteSakslisteModal-BzzFcv6v.js";import"./Table-BVZRNJg7.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=v(I),w={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(E)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:r.jsx("div",{children:"test"})},render:k=>{const[n,m]=u.useState(k),{data:p}=h(b()),c=()=>{n.lagNySaksliste?.(),m(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[]})}))};return p?r.jsx(d,{...n,lagNySaksliste:c}):r.jsx(S,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"]}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
