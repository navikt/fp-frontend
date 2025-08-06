import{j as r,g,r as u}from"./iframe-yH1fHU7Q.js";import{X as S}from"./index.es-fOBpEy5s.js";import{u as h}from"./useQuery-ZBMFTV1P.js";import{h as l,L as o,b as i,l as b}from"./fplosAvdelingslederApi-CWVGlM9T.js";import{g as v}from"./withIntl-BrUORKG6.js";import{a as I}from"./useLosKodeverk-DmJvK1As.js";import{G as d}from"./GjeldendeSakslisterTabell-CSR7m1BI.js";import{m as E}from"./nb_NO-CYIn4FMC.js";import"./Modal-C_OpF3jZ.js";import"./index-DcVNjzNM.js";import"./BasePrimitive-DajsECfF.js";import"./useMutation-R0X0r_wF.js";import"./SletteSakslisteModal-Dn5uDzcL.js";import"./Table-DbWlMlek.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=v(E),w={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[T,g],parameters:{msw:{handlers:[l.get(o.KODEVERK_LOS,()=>i.json(I)),l.post(o.SLETT_SAKSLISTE,()=>new i(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:r.jsx("div",{children:"test"})},render:k=>{const[n,m]=u.useState(k),{data:p}=h(b()),c=()=>{n.lagNySaksliste?.(),m(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",saksbehandlerIdenter:[]})}))};return p?r.jsx(d,{...n,lagNySaksliste:c}):r.jsx(S,{})}},s={args:{sakslister:[]}},e={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["R23233"]}],oppgaverForAvdelingAntall:1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
