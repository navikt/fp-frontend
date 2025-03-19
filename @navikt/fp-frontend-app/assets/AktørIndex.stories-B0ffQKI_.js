import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{w as A,M as D,R as C,a as w,F as I}from"./withPanelData-BEqvgQYn.js";import{Q as P}from"./index.es-Br4AV7Uo.js";import{u as T,a as U,F as s,i,w as x,n as v,b as L,c as F}from"./initFetch-Bzng7Zqt.js";import{h as t,H as e}from"./index-CiTJJs0Y.js";import{F as d}from"./fagsakStatus-NXwGwLtb.js";import{a as g}from"./alleKodeverk-CRR-a6x7.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{A as c}from"./AktørIndex-CKGBLccI.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-DVoTk_GA.js";import"./iframe-BZADBLbb.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-C7LF3qXI.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-BXAohSbZ.js";import"./ExclamationmarkTriangleFill-CHaM1MZu.js";import"./message-UGDcY3oZ.js";import"./decorators-Bnaor6Ku.js";import"./VisittkortSakIndex-BdM_utC4.js";import"./index.es-DTtvPnwS.js";import"./Link-Ny132c4O.js";import"./Popover-BHL3bTrq.js";import"./Tag-EZk5t4aI.js";import"./Spacer-CL5tT70S.js";import"./IngenBehandlingValgtPanel-Db-AoB2M.js";import"./paths-BSrLpINj.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-pIKqCd9l.js";import"./useKodeverk-ClEYsT2o.js";const E=m=>x(v(i.links.find(l=>l.rel===m)).href),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:S.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222"},b={fagsaker:[{saksnummer:"123",fagsakYtelseType:I.FORELDREPENGER,status:d.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p},{saksnummer:"252523",fagsakYtelseType:I.ENGANGSSTONAD,status:d.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p}],person:p},Kt={title:"app/AktørIndex",decorators:[A],component:c,render:()=>{const{status:m}=T(L()),{kodeverkOptions:l}=U(),{data:O}=T(l(m==="success"));return O?a.jsx(D,{initialEntries:["/fagsak/352011079"],children:a.jsx(C,{children:a.jsx(w,{element:a.jsx(c,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(P,{})}},r={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json(b))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:{...p,aktørId:null}}))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};var R,u,h;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const ft=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{n as AktørInfoKallFeilet,r as Default,o as IngenFagsaker,ft as __namedExportsOrder,Kt as default};
