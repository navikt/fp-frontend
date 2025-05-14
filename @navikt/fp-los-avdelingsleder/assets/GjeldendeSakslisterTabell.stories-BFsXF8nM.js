import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-mMUbb89k.js";import{r as f}from"./index.es-CuanKM8i.js";import{a as n,w as T,m as j}from"./nb_NO-tkSV1vCo.js";import{u as x}from"./useQuery-DxU1jdeO.js";import{h as o,L as i,H as m,l as N}from"./fplosAvdelingslederApi-DKy6EIY1.js";import{g as B}from"./withIntl-NXol72dE.js";import{a as L}from"./useLosKodeverk-Dy79y__V.js";import{G as d}from"./GjeldendeSakslisterTabell-uKrlV9B9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-RWozyy4S.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./v4-CtRu48qb.js";import"./entry-preview-C-P7KeuY.js";import"./iframe-CCS64lpW.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./decorators-Bnaor6Ku.js";import"./BasePrimitive-Bh0ufWl_.js";import"./useMutation-nupdxx3S.js";import"./SletteSakslisteModal-BvBG-9Kf.js";import"./Table-BCLC1gDF.js";const y=B(j),se={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:d,decorators:[y,T],parameters:{msw:{handlers:[o.get(i.KODEVERK_LOS,()=>m.json(L)),o.post(i.SLETT_SAKSLISTE,()=>new m(null,{status:200}))]}},args:{setValgtSakslisteId:n("button-click"),resetValgtSakslisteId:n("button-click"),lagNySaksliste:n("button-click"),valgtAvdelingEnhet:"1",children:a.jsx("div",{children:"test"})},render:S=>{const[e,v]=I.useState(S),{data:b}=x(N()),E=()=>{var l;(l=e.lagNySaksliste)==null||l.call(e),v(r=>({...r,sakslister:r.sakslister.concat({sakslisteId:r.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return b?a.jsx(d,{...e,lagNySaksliste:E}):a.jsx(f,{})}},s={args:{sakslister:[]}},t={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};var p,k,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
