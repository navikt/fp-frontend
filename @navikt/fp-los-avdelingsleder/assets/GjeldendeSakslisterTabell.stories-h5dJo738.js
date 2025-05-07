import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-mMUbb89k.js";import{a,w as v,m as T}from"./nb_NO-DwLE4Zcf.js";import{h as i,L as o,H as m}from"./fplosAvdelingslederApi-BvYHIxcq.js";import{g as f}from"./withIntl-GeRvjH5V.js";import{a as N}from"./useLosKodeverk-BxqFH7eT.js";import{G as p}from"./GjeldendeSakslisterTabell-LDSCJziw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./entry-preview-6DUGEdVG.js";import"./iframe-Ce9_-GJk.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./Modal-CHlh67S2.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./BasePrimitive-Dl7Zcr3p.js";import"./useQuery-CT2yRPlz.js";import"./index.es-CzoYaqNb.js";import"./dayjs.min-Cke173X9.js";import"./useMutation-zH-N7Tl8.js";import"./kodeverkTyper-BiqIm7FA.js";import"./SletteSakslisteModal-BkMqE7e1.js";import"./Table-C3Kd0YQt.js";const j=f(T),Z={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:p,decorators:[j,v],parameters:{msw:{handlers:[i.get(o.KODEVERK_LOS,()=>m.json(N)),i.post(o.SLETT_SAKSLISTE,()=>new m(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:l.jsx("div",{children:"test"})},render:u=>{const[e,b]=I.useState(u),E=()=>{var n;(n=e.lagNySaksliste)==null||n.call(e),b(r=>({...r,sakslister:r.sakslister.concat({sakslisteId:r.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return l.jsx(p,{...e,lagNySaksliste:E})}},s={args:{sakslister:[]}},t={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};var d,k,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
