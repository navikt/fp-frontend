import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-Dxs5m6lS.js";import{a,w as v,m as T}from"./nb_NO-jfo3o5ih.js";import{h as i,L as o,H as m}from"./fplosAvdelingslederApi-CMx-X5Aa.js";import{g as f}from"./withIntl-Bpn1Y8DC.js";import{a as N}from"./useLosKodeverk-J40KbnIt.js";import{G as p}from"./GjeldendeSakslisterTabell-CASNp_jv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./entry-preview-CmUdROss.js";import"./iframe-C3dzHVgT.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./decorators-DIzpaN6C.js";import"./Modal-ULY2w0U1.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./BasePrimitive-XXjksgnG.js";import"./useQuery-BpMrxuzK.js";import"./index.es-CRnlfc-7.js";import"./dayjs.min-Cke173X9.js";import"./useMutation-CPB3WWOp.js";import"./kodeverkTyper-CSMzNBS4.js";import"./SletteSakslisteModal-DNLxflW2.js";import"./Table-zh4hhZJ6.js";const j=f(T),X={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:p,decorators:[j,v],parameters:{msw:{handlers:[i.get(o.KODEVERK_LOS,()=>m.json(N)),i.post(o.SLETT_SAKSLISTE,()=>new m(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:l.jsx("div",{children:"test"})},render:u=>{const[e,b]=I.useState(u),E=()=>{var n;(n=e.lagNySaksliste)==null||n.call(e),b(r=>({...r,sakslister:r.sakslister.concat({sakslisteId:r.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return l.jsx(p,{...e,lagNySaksliste:E})}},s={args:{sakslister:[]}},t={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};var d,k,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const Y=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{t as TabellNårDetFinnesEnBehandlingskø,s as TabellNårDetIkkeFinnesBehandlingskøer,Y as __namedExportsOrder,X as default};
