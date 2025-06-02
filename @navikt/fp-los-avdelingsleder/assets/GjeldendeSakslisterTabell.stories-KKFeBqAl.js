import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-mMUbb89k.js";import{a as f}from"./index.es-DR6NsJnB.js";import{a as n,w as T}from"./withThemeDecorator-wwi0a-KJ.js";import{u as j}from"./useQuery-B4EJQSyw.js";import{h as l,L as i,H as m,l as x}from"./fplosAvdelingslederApi-Do_xo2q4.js";import{g as N}from"./withIntl-zicYy9SM.js";import{a as B}from"./useLosKodeverk-BmiYCkUM.js";import{G as d}from"./GjeldendeSakslisterTabell-CYGc3D6v.js";import{m as L}from"./nb_NO-vvYJ1532.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-DDoPy8c_.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./v4-CtRu48qb.js";import"./entry-preview-BQDDJCbP.js";import"./iframe-neX3M7RO.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./BasePrimitive-Bh2G1RaK.js";import"./useMutation-C3cn11p7.js";import"./SletteSakslisteModal-CEIRb-Y_.js";import"./Table-BX8cvqn3.js";const y=N(L),se={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[y,T],parameters:{msw:{handlers:[l.get(i.KODEVERK_LOS,()=>m.json(B)),l.post(i.SLETT_SAKSLISTE,()=>new m(null,{status:200}))]}},args:{setValgtSakslisteId:n("button-click"),resetValgtSakslisteId:n("button-click"),lagNySaksliste:n("button-click"),valgtAvdelingEnhet:"1",children:a.jsx("div",{children:"test"})},render:S=>{const[e,v]=I.useState(S),{data:b}=j(x()),E=()=>{var o;(o=e.lagNySaksliste)==null||o.call(e),v(r=>({...r,sakslister:r.sakslister.concat({sakslisteId:r.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return b?a.jsx(d,{...e,lagNySaksliste:E}):a.jsx(f,{})}},s={args:{sakslister:[]}},t={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};var p,k,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
