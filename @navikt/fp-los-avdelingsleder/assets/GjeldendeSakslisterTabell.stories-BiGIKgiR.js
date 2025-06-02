import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-mMUbb89k.js";import{r as f}from"./index.es-IbWxMuRa.js";import{a as n,w as T}from"./withThemeDecorator-Blar2IxA.js";import{u as j}from"./useQuery-2EM0HxIJ.js";import{h as l,L as i,H as m,l as x}from"./fplosAvdelingslederApi-DwhVEmyz.js";import{g as N}from"./withIntl-6UHYrIen.js";import{a as B}from"./useLosKodeverk-lVFq2LE6.js";import{G as d}from"./GjeldendeSakslisterTabell-B2RZwv0w.js";import{m as L}from"./nb_NO-CynFjDnS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-1f_-7fTC.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./v4-CtRu48qb.js";import"./entry-preview-Ce5Kw_Z3.js";import"./iframe-CBdjdQtW.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./BasePrimitive-Bv56jnF2.js";import"./useMutation-Cz3fwOKe.js";import"./SletteSakslisteModal-LccaR7Lk.js";import"./Table-Deh-XGU_.js";const y=N(L),se={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[y,T],parameters:{msw:{handlers:[l.get(i.KODEVERK_LOS,()=>m.json(B)),l.post(i.SLETT_SAKSLISTE,()=>new m(null,{status:200}))]}},args:{setValgtSakslisteId:n("button-click"),resetValgtSakslisteId:n("button-click"),lagNySaksliste:n("button-click"),valgtAvdelingEnhet:"1",children:a.jsx("div",{children:"test"})},render:S=>{const[e,v]=I.useState(S),{data:b}=j(x()),E=()=>{var o;(o=e.lagNySaksliste)==null||o.call(e),v(r=>({...r,sakslister:r.sakslister.concat({sakslisteId:r.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return b?a.jsx(d,{...e,lagNySaksliste:E}):a.jsx(f,{})}},s={args:{sakslister:[]}},t={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};var p,k,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...(c=(k=s.parameters)==null?void 0:k.docs)==null?void 0:c.source}}};var g,h,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const te=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{t as TabellNårDetFinnesEnBehandlingskø,s as TabellNårDetIkkeFinnesBehandlingskøer,te as __namedExportsOrder,se as default};
