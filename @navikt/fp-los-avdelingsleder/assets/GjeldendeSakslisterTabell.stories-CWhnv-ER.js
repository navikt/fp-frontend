import{j as l}from"./jsx-runtime-CLpGMVip.js";import{r as j}from"./index-B5OHeJSP.js";import{a as t}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{h as o,L as i,H as d}from"./fplosAvdelingslederApi-ByBFIqlo.js";import{w as x,m as A}from"./nb_NO-B4p7h2ZR.js";import{g as F}from"./withIntl-CwsmLzvd.js";import{a as D}from"./useLosKodeverk-oT1Cy1xD.js";import{G as m}from"./GjeldendeSakslisterTabell-C_5qBb_N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./decorators-DIzpaN6C.js";import"./Modal-BQwjsmca.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./BasePrimitive-DJrLZ3qF.js";import"./useQuery-DVfWY0XH.js";import"./index.es-1l7GYZKP.js";import"./dayjs.min-CJilavqB.js";import"./useMutation-DW66zKiQ.js";import"./aktivitetStatus-B1m96ipJ.js";import"./kodeverkTyper-CavWL6Ds.js";import"./SletteSakslisteModal-DVDiHtRZ.js";import"./Table-CBNmRfiX.js";const L=F(A),se={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:m,decorators:[L,x],parameters:{msw:{handlers:[o.get(i.KODEVERK_LOS,()=>d.json(D)),o.post(i.SLETT_SAKSLISTE,()=>new d(null,{status:200}))]}},args:{setValgtSakslisteId:t("button-click"),resetValgtSakslisteId:t("button-click"),lagNySaksliste:t("button-click"),valgtAvdelingEnhet:"1",children:l.jsx("div",{children:"test"})},render:T=>{const[r,B]=j.useState(T),N=()=>{var n;(n=r.lagNySaksliste)==null||n.call(r),B(a=>({...a,sakslister:a.sakslister.concat({sakslisteId:a.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return l.jsx(m,{...r,lagNySaksliste:N})}},e={args:{sakslister:[]}},s={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};var p,c,k;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(I=(v=e.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var b,E,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const re=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{s as TabellNårDetFinnesEnBehandlingskø,e as TabellNårDetIkkeFinnesBehandlingskøer,re as __namedExportsOrder,se as default};
