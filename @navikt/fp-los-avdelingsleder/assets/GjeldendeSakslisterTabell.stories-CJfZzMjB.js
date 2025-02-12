import{j as l}from"./jsx-runtime-CLpGMVip.js";import{r as j}from"./index-B5OHeJSP.js";import{w as x,a,m as A}from"./nb_NO-wcwS9fSJ.js";import{h as o,L as i,H as d}from"./fplosAvdelingslederApi-CFrdzg5Y.js";import{g as F}from"./withIntl-ueAtLpw-.js";import{a as D}from"./useLosKodeverk-DSvXO5Ak.js";import{G as p}from"./GjeldendeSakslisterTabell-O1ACSlVV.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./react-CN7epj8G.js";import"./iframe-C3V1ruAK.js";import"./chunk-XP5HYGXS-DH4vAeCa.js";import"./decorators-DIzpaN6C.js";import"./Modal-BKGJGIQz.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./BasePrimitive-CrhUyc5m.js";import"./useQuery-Bl9GBTJ-.js";import"./index.es-BnrNBVoo.js";import"./dayjs.min-CJilavqB.js";import"./useMutation-B4AwZSPl.js";import"./kodeverkTyper-CavWL6Ds.js";import"./SletteSakslisteModal-B5v7tSWb.js";import"./Table-BAg6aev6.js";const L=F(A),re={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:p,decorators:[L,x],parameters:{msw:{handlers:[o.get(i.KODEVERK_LOS,()=>d.json(D)),o.post(i.SLETT_SAKSLISTE,()=>new d(null,{status:200}))]}},args:{setValgtSakslisteId:a("button-click"),resetValgtSakslisteId:a("button-click"),lagNySaksliste:a("button-click"),valgtAvdelingEnhet:"1",children:l.jsx("div",{children:"test"})},render:f=>{const[r,B]=j.useState(f),N=()=>{var n;(n=r.lagNySaksliste)==null||n.call(r),B(t=>({...t,sakslister:t.sakslister.concat({sakslisteId:t.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return l.jsx(p,{...r,lagNySaksliste:N})}},e={args:{sakslister:[]}},s={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};var m,c,k;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
