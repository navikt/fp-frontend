import{j as r,g,r as u}from"./iframe-Cj3mUDpb.js";import{X as S}from"./index.es-BnuV3lYQ.js";import{u as h}from"./useQuery-CjUkZWUz.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-B5RzSJsw.js";import{g as v}from"./withIntl-B8mS0Un-.js";import{a as I}from"./useLosKodeverk-Qqnsn9h4.js";import{G as d}from"./GjeldendeSakslisterTabell-h1pO1NJU.js";import{m as E}from"./nb_NO-tLXWBS2D.js";import"./preload-helper-D9Z9MdNV.js";import"./Modal-BLZRzbxC.js";import"./index-DWdnb64a.js";import"./BasePrimitive-DT-gmGqy.js";import"./useMutation-DJ_GgXqt.js";import"./SletteSakslisteModal-Bflc9wd3.js";import"./Table-CG3rdEFc.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=v(E),G={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(I)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:r.jsx("div",{children:"test"})},render:m=>{const[n,k]=u.useState(m),{data:p}=h(b()),c=()=>{n.lagNySaksliste?.(),k(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",saksbehandlerIdenter:[]})}))};return p?r.jsx(d,{...n,lagNySaksliste:c}):r.jsx(S,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["R23233"]}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
