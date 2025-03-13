import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-Dxs5m6lS.js";import{a,w as v,m as T}from"./nb_NO-Bnc00ehh.js";import{h as i,L as o,H as m}from"./fplosAvdelingslederApi-O4Lf0z9V.js";import{g as f}from"./withIntl-CvyvCzPi.js";import{a as N}from"./useLosKodeverk-C8hy6cn6.js";import{G as p}from"./GjeldendeSakslisterTabell-BY7YZc9o.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./entry-preview-D4kVSdDA.js";import"./iframe-DyR2xtuS.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-duuaId12.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./Modal-DXd3sJeF.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./BasePrimitive-DoaMUDI2.js";import"./useQuery-CguoG_Gq.js";import"./index.es-BJFayhgu.js";import"./dayjs.min-Cke173X9.js";import"./useMutation-7kVpndL8.js";import"./kodeverkTyper-B1H1pBd8.js";import"./SletteSakslisteModal-BRx4m06U.js";import"./Table-C5N4-0mT.js";const j=f(T),Z={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:p,decorators:[j,v],parameters:{msw:{handlers:[i.get(o.KODEVERK_LOS,()=>m.json(N)),i.post(o.SLETT_SAKSLISTE,()=>new m(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:l.jsx("div",{children:"test"})},render:u=>{const[e,b]=I.useState(u),E=()=>{var n;(n=e.lagNySaksliste)==null||n.call(e),b(r=>({...r,sakslister:r.sakslister.concat({sakslisteId:r.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return l.jsx(p,{...e,lagNySaksliste:E})}},s={args:{sakslister:[]}},t={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};var d,k,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...(c=(k=s.parameters)==null?void 0:k.docs)==null?void 0:c.source}}};var g,h,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const $=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{t as TabellNårDetFinnesEnBehandlingskø,s as TabellNårDetIkkeFinnesBehandlingskøer,$ as __namedExportsOrder,Z as default};
