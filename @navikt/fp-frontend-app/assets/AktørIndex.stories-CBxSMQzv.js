import{w as A,j as a,M as C,R as U,a as w,F as I}from"./iframe-B82uG3YN.js";import{X as P}from"./index.es-BPmh1nxX.js";import{u as c,a as x,F as s,i,b as d,w as D,n as v,c as F,d as y}from"./fagsakApi-BpJ6e8AE.js";import{h as t,H as e,c as L}from"./index-N36q-3pD.js";import{a as g}from"./alleKodeverk-DO07GSZv.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{A as T}from"./AktørIndex-D8tNiYKj.js";import"./VStack-CmW-TtI6.js";import"./index-BzqciqIK.js";import"./CheckmarkCircleFill-CyhertkR.js";import"./ExclamationmarkTriangleFill-tR1NRyK1.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./VisittkortSakIndex-CY604IaU.js";import"./index.es-Bft9JZeI.js";import"./Link-DRXOzTco.js";import"./Checkmark-DIsoHNH-.js";import"./Popover-D6fAGF60.js";import"./message-C3vMsHpa.js";import"./Tag-ClfA6XU5.js";import"./Spacer-DjcDwEZp.js";import"./IngenBehandlingValgtPanel-DrUiCGr-.js";import"./useTrackRouteParam-BLd99o1e.js";import"./paths-B6wPsQHn.js";import"./useKodeverk-CgjFNi68.js";const E=l=>L(D(v(i.links.find(m=>m.rel===l)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:S.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222"},b={fagsaker:[{saksnummer:"123",fagsakYtelseType:I.FORELDREPENGER,status:d.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p},{saksnummer:"252523",fagsakYtelseType:I.ENGANGSSTONAD,status:d.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p}],person:p},kt={title:"app/AktørIndex",decorators:[A],component:T,parameters:{layout:"fullscreen"},render:()=>{const{status:l}=c(y()),{kodeverkOptions:m}=x(),{data:O}=c(m(l==="success"));return O?a.jsx(C,{initialEntries:["/fagsak/352011079"],children:a.jsx(U,{children:a.jsx(w,{element:a.jsx(T,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(P,{})}},r={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json(b))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:{...p,aktørId:null}}))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};var R,u,h;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json(AKTØR_INFO))]
    }
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var K,j,f;n.parameters={...n.parameters,docs:{...(K=n.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(f=(j=n.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var H,_,N;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => new HttpResponse(null, {
        status: 500
      }))]
    }
  }
}`,...(N=(_=o.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const Et=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{o as AktørInfoKallFeilet,r as Default,n as IngenFagsaker,Et as __namedExportsOrder,kt as default};
