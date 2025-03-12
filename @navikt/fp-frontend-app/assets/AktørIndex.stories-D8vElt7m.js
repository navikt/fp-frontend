import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{w as A,M as D,R as C,a as w,F as I}from"./withPanelData-DpJIM-1C.js";import{V as P}from"./index.es-W5APpfMp.js";import{u as T,a as U,F as s,i,w as x,n as v,b as L,c as F}from"./initFetch-CA4CR8to.js";import{h as t,H as e}from"./index-CiTJJs0Y.js";import{F as d}from"./fagsakStatus-NXwGwLtb.js";import{a as g}from"./alleKodeverk-BFmIlMu4.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{A as c}from"./AktørIndex-Cm7g0Z52.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-WFZkKxTc.js";import"./iframe-CngS3hA-.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-C7LF3qXI.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-DrnrQ420.js";import"./ExclamationmarkTriangleFill-BmSAwysq.js";import"./decorators-Bnaor6Ku.js";import"./VisittkortSakIndex-D-n5zoVj.js";import"./index.es-CTPK-Myh.js";import"./Link-CObncv6V.js";import"./Popover-R6yA4U-O.js";import"./Tag-CKoU8i0j.js";import"./Spacer-C9IXaCuv.js";import"./IngenBehandlingValgtPanel-Fa6WXiUE.js";import"./paths-BDM3ozhp.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-EFyG6HZ-.js";import"./useKodeverk-BmLjW70I.js";const E=m=>x(v(i.links.find(l=>l.rel===m)).href),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:S.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222"},V={fagsaker:[{saksnummer:"123",fagsakYtelseType:I.FORELDREPENGER,status:d.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p},{saksnummer:"252523",fagsakYtelseType:I.ENGANGSSTONAD,status:d.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p}],person:p},ht={title:"app/AktørIndex",decorators:[A],component:c,render:()=>{const{status:m}=T(L()),{kodeverkOptions:l}=U(),{data:O}=T(l(m==="success"));return O?a.jsx(D,{initialEntries:["/fagsak/352011079"],children:a.jsx(C,{children:a.jsx(w,{element:a.jsx(c,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(P,{})}},r={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json(V))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:{...p,aktørId:null}}))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};var R,u,h;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json(AKTØR_INFO))]
    }
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var K,f,j;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json({
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
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => new HttpResponse(null, {
        status: 500
      }))]
    }
  }
}`,...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const Kt=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{n as AktørInfoKallFeilet,r as Default,o as IngenFagsaker,Kt as __namedExportsOrder,ht as default};
