import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{w as A,M as C,R as w,a as P,F as I}from"./withPanelData-COqLCZ81.js";import{e as U}from"./index.es-B9ql0pPv.js";import{u as d,a as x,F as s,i,w as D,n as v,b as L,c as l}from"./fagsakApi-sQr6-iFN.js";import{h as t,H as e}from"./index-DcGDEF8s.js";import{F as c}from"./fagsakStatus-NXwGwLtb.js";import{a as g}from"./alleKodeverk-Ga5AMxGN.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{i as k}from"./initFetchFptilbake-CspdHVpU.js";import{A as T}from"./AktørIndex-D9PYO519.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./v4-CtRu48qb.js";import"./entry-preview-BTm427_P.js";import"./iframe-Dl-LeIBX.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-Ds55LFTu.js";import"./ExclamationmarkTriangleFill-NvviiUZ_.js";import"./message-Ck1nUJBQ.js";import"./decorators-Bnaor6Ku.js";import"./VisittkortSakIndex-ZbK1lUR9.js";import"./index.es-BBmaQQAY.js";import"./Link-CgNpWRzV.js";import"./Tooltip-enTvjyqA.js";import"./Popover-BOIn8M6I.js";import"./Tag-80gvGIMx.js";import"./Spacer-D_agEXZP.js";import"./IngenBehandlingValgtPanel-Bm2bPrxF.js";import"./paths-DaQEU6Mj.js";import"./useTrackRouteParam-BUDWzNZW.js";import"./useKodeverk-BLbmh_VK.js";const E=m=>D(v(i.links.find(F=>F.rel===m)).href),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:S.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222"},b={fagsaker:[{saksnummer:"123",fagsakYtelseType:I.FORELDREPENGER,status:c.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p},{saksnummer:"252523",fagsakYtelseType:I.ENGANGSSTONAD,status:c.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p}],person:p},Kt={title:"app/AktørIndex",decorators:[A],component:T,render:()=>{const{status:m}=d(L()),{kodeverkOptions:F}=x(),{data:O}=d(F(m==="success"));return O?r.jsx(C,{initialEntries:["/fagsak/352011079"],children:r.jsx(w,{children:r.jsx(P,{element:r.jsx(T,{}),path:"/fagsak/:aktoerId"})})}):r.jsx(U,{})}},a={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(l.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json(b))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(l.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:{...p,aktørId:null}}))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(l.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};var R,u,h;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json(AKTØR_INFO))]
    }
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var K,f,j;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json({
        fagsaker: [],
        person: {
          ...PERSON,
          aktørId: null
        }
      } satisfies Aktor))]
    }
  }
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var H,_,N;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => new HttpResponse(null, {
        status: 500
      }))]
    }
  }
}`,...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const ft=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{n as AktørInfoKallFeilet,a as Default,o as IngenFagsaker,ft as __namedExportsOrder,Kt as default};
