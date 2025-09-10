import{j as r,g,r as u}from"./iframe-BfbCBOdg.js";import{Q as S}from"./index.es-CnRL9fgC.js";import{u as h}from"./useQuery-DiZnZQMl.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-DY-GDfyc.js";import{g as v}from"./withIntl-B_YtSZ48.js";import{a as I}from"./useLosKodeverk-DEnTdwAm.js";import{G as d}from"./GjeldendeSakslisterTabell-DE4Uvdg1.js";import{m as E}from"./nb_NO-ChDJGE5I.js";import"./preload-helper-D9Z9MdNV.js";import"./Modal-n8iFLxme.js";import"./index-QCY3M29p.js";import"./BasePrimitive-C_0QXrIv.js";import"./useMutation-CLn0hbTz.js";import"./SletteSakslisteModal-D3Gtn6Yt.js";import"./Table-BhgebYEO.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=v(E),Q={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(I)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:r.jsx("div",{children:"test"})},render:m=>{const[n,k]=u.useState(m),{data:p}=h(b()),c=()=>{n.lagNySaksliste?.(),k(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",saksbehandlerIdenter:[]})}))};return p?r.jsx(d,{...n,lagNySaksliste:c}):r.jsx(S,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["R23233"]}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
