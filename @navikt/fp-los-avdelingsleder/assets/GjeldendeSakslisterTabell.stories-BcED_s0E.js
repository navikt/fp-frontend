import{j as a,g,r as h}from"./iframe-C-rkwopj.js";import{X as u}from"./index.es-DEdiYpCU.js";import{u as S}from"./useQuery-CAUs9boC.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-DO4gM1wF.js";import{g as v}from"./withIntl-CdFYk5BT.js";import{a as E}from"./useLosKodeverk-Bik7J8Vv.js";import{G as d}from"./GjeldendeSakslisterTabell-BH7_ua5Q.js";import{m as I}from"./nb_NO-D5QS-96T.js";import"./Modal-DJwpi_Di.js";import"./index-DzdnGhKv.js";import"./BasePrimitive-BSXP8-bc.js";import"./useMutation-Abb60JfM.js";import"./SletteSakslisteModal-B5SqL1yT.js";import"./Table-IkN47ldf.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,T=v(I),w={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(E)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:r("button-click"),resetValgtSakslisteId:r("button-click"),lagNySaksliste:r("button-click"),valgtAvdelingEnhet:"1",children:a.jsx("div",{children:"test"})},render:k=>{const[n,m]=h.useState(k),{data:p}=S(b()),c=()=>{n.lagNySaksliste?.(),m(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return p?a.jsx(d,{...n,lagNySaksliste:c}):a.jsx(u,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
