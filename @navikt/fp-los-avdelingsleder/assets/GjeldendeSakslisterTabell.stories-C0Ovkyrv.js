import{j as l}from"./jsx-runtime-DR9Q75dM.js";import{r as j}from"./index-DRjF_FHU.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{h as o,L as i,H as d}from"./fplosAvdelingslederApi-CNRcnPVE.js";import{w as x,m as A}from"./nb_NO-CujjC0QR.js";import{g as F}from"./withIntl-CDJROj6F.js";import{a as D}from"./useLosKodeverk-e-bKqnw3.js";import{G as m}from"./GjeldendeSakslisterTabell-D-zzaVbr.js";import"./v4-CQkTLCs1.js";import"./decorators-86JrGkCj.js";import"./Modal-BAeoMgKv.js";import"./index-rX-Bn4lm.js";import"./BasePrimitive-DOZIhIJh.js";import"./useQuery-CdRdjBeR.js";import"./index.es-DeTGBOe2.js";import"./dayjs.min-CnNqAF5I.js";import"./useMutation-6dhYCaXX.js";import"./aktivitetStatus-B1m96ipJ.js";import"./kodeverkTyper-CavWL6Ds.js";import"./SletteSakslisteModal-CSEIwv78.js";import"./Table-BWNfH5fn.js";const L=F(A),$={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:m,decorators:[L,x],parameters:{msw:{handlers:[o.get(i.KODEVERK_LOS,()=>d.json(D)),o.post(i.SLETT_SAKSLISTE,()=>new d(null,{status:200}))]}},args:{setValgtSakslisteId:t("button-click"),resetValgtSakslisteId:t("button-click"),lagNySaksliste:t("button-click"),valgtAvdelingEnhet:"1",children:l.jsx("div",{children:"test"})},render:T=>{const[r,B]=j.useState(T),N=()=>{var n;(n=r.lagNySaksliste)==null||n.call(r),B(a=>({...a,sakslister:a.sakslister.concat({sakslisteId:a.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return l.jsx(m,{...r,lagNySaksliste:N})}},e={args:{sakslister:[]}},s={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};var p,c,k;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const ee=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{s as TabellNårDetFinnesEnBehandlingskø,e as TabellNårDetIkkeFinnesBehandlingskøer,ee as __namedExportsOrder,$ as default};
