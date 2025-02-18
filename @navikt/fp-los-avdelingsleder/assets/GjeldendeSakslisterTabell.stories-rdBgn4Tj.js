import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-Dxs5m6lS.js";import{a,w as x,m as A}from"./nb_NO-k7XfLIF0.js";import{h as o,L as i,H as d}from"./fplosAvdelingslederApi-BKCCOvwM.js";import{g as F}from"./withIntl-bymE_TAn.js";import{a as D}from"./useLosKodeverk-C5iLaZGo.js";import{G as p}from"./GjeldendeSakslisterTabell-sza_7X0H.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./react-ikfmhwgl.js";import"./iframe-Cj2A5Qk-.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./decorators-DIzpaN6C.js";import"./Modal-BhANA5jI.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./BasePrimitive-CQNbPRvM.js";import"./useQuery-DAr9N5tU.js";import"./index.es-CHpjaGkX.js";import"./dayjs.min-Cke173X9.js";import"./useMutation-CsIEtWN8.js";import"./kodeverkTyper-CSMzNBS4.js";import"./SletteSakslisteModal-Dlyf41l8.js";import"./Table-D0CbhKJW.js";const L=F(A),re={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:p,decorators:[L,x],parameters:{msw:{handlers:[o.get(i.KODEVERK_LOS,()=>d.json(D)),o.post(i.SLETT_SAKSLISTE,()=>new d(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:l.jsx("div",{children:"test"})},render:f=>{const[r,B]=j.useState(f),N=()=>{var n;(n=r.lagNySaksliste)==null||n.call(r),B(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return l.jsx(p,{...r,lagNySaksliste:N})}},e={args:{sakslister:[]}},s={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};var m,c,k;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...(k=(c=e.parameters)==null?void 0:c.docs)==null?void 0:k.source}}};var g,h,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var S,v,I;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...(I=(v=e.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var b,E,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const te=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{s as TabellNårDetFinnesEnBehandlingskø,e as TabellNårDetIkkeFinnesBehandlingskøer,te as __namedExportsOrder,re as default};
