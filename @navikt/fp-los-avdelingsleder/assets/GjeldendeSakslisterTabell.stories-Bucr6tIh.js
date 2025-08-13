import{j as r,g,r as u}from"./iframe-2GUTMqWz.js";import{X as S}from"./index.es-DUtc9OsC.js";import{u as h}from"./useQuery-XKIyxEGN.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-C-K8Dkr4.js";import{g as v}from"./withIntl-DDPqZaND.js";import{a as I}from"./useLosKodeverk-CXOrc8kT.js";import{G as d}from"./GjeldendeSakslisterTabell-Bbi9Eb2Z.js";import{m as E}from"./nb_NO-_x0dePyo.js";import"./preload-helper-D9Z9MdNV.js";import"./Modal-B9ELtW9V.js";import"./index-BEIk6QN8.js";import"./BasePrimitive--5GyqsMV.js";import"./useMutation-CepmZoRW.js";import"./SletteSakslisteModal-BERbKmxL.js";import"./Table-C-rB5rYq.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=v(E),G={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(I)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:r.jsx("div",{children:"test"})},render:m=>{const[n,k]=u.useState(m),{data:p}=h(b()),c=()=>{n.lagNySaksliste?.(),k(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",saksbehandlerIdenter:[]})}))};return p?r.jsx(d,{...n,lagNySaksliste:c}):r.jsx(S,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["R23233"]}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const V=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{e as TabellNårDetFinnesEnBehandlingskø,s as TabellNårDetIkkeFinnesBehandlingskøer,V as __namedExportsOrder,G as default};
