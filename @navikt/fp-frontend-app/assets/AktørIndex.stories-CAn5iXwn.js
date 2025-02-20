import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{w as A,M as D,R as C,a as w,F as T}from"./withPanelData-Hr9GZz6f.js";import{M as P}from"./index.es-hzAUfTdG.js";import{u as I,a as U,F as s,i,w as x,n as v,b as L,c as F}from"./initFetch-BZhAgt1X.js";import{h as t,H as e}from"./index-CfpqQiaz.js";import{F as c}from"./fagsakStatus-NXwGwLtb.js";import{a as g}from"./alleKodeverk-BFmIlMu4.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{A as d}from"./AktørIndex-MUIJhYSi.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-BqG2msK9.js";import"./iframe-CzQLxkFX.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-DuWHVgPy.js";import"./ExclamationmarkTriangleFill-B0ilA4Q2.js";import"./decorators-DIzpaN6C.js";import"./VisittkortSakIndex-pn_UYVJ7.js";import"./index.es-BN9QgVQ9.js";import"./Link-Cd3tnVA6.js";import"./Popover-AVzEdzX0.js";import"./useFormField-_wN0ox1i.js";import"./Tag-DVCXpmys.js";import"./Spacer-QFOiGlYe.js";import"./IngenBehandlingValgtPanel-BotRtsFj.js";import"./paths-jvO32e6Z.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-BuS5o6IY.js";import"./useKodeverk-BMGf_0hm.js";const E=m=>x(v(i.links.find(l=>l.rel===m)).href),p={navn:"Espen Utvikler",fødselsnummer:"121221",kjønn:S.MANN,fødselsdato:"2000-01-02"},b={fagsaker:[{saksnummer:"123",fagsakYtelseType:T.FORELDREPENGER,status:c.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p},{saksnummer:"252523",fagsakYtelseType:T.ENGANGSSTONAD,status:c.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p}],person:{...p,aktørId:"12121221"}},ut={title:"app/AktørIndex",decorators:[A],component:d,render:()=>{const{status:m}=I(L()),{kodeverkOptions:l}=U(),{data:O}=I(l(m==="success"));return O?a.jsx(D,{initialEntries:["/fagsak/352011079"],children:a.jsx(C,{children:a.jsx(w,{element:a.jsx(d,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(P,{})}},r={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json(b))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:p}))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};var R,u,h;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
        person: PERSON
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
}`,...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const ht=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{n as AktørInfoKallFeilet,r as Default,o as IngenFagsaker,ht as __namedExportsOrder,ut as default};
