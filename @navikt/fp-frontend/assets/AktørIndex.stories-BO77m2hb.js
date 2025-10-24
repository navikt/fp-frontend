import{w as T,j as a,M as R,R as u,a as h}from"./iframe-IrsYaoYT.js";import{Z as K}from"./index.es-CQX5W6HT.js";import{u as c,a as j,F as s,i,w as f,n as H,b as F,c as _}from"./fagsakApi-qaBj9I5C.js";import{h as e,H as t,c as O}from"./index-DIHUZfMo.js";import{a as k}from"./alleKodeverk-BnsD7hyO.js";import{K as N}from"./Kjonnkode-DjBoP8-t.js";import{i as g}from"./initFetchFptilbake-CspdHVpU.js";import{A as d}from"./AktørIndex-U1IkhHv5.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-DvSDRMD4.js";import"./index-5BVNgjbu.js";import"./CheckmarkCircleFill-BxY8QANS.js";import"./ExclamationmarkTriangleFill-CLdxD40G.js";import"./VisittkortSakIndex-DhOdpoQz.js";import"./index.es-e6dCWC09.js";import"./index-B_TYOupA.js";import"./Link-xsav6dgL.js";import"./Checkmark-DDd8vjUi.js";import"./Popover-qLp2tsRl.js";import"./message-BI6-wz5o.js";import"./Spacer-CUiaAsUw.js";import"./IngenBehandlingValgtPanel-BpNNxzvH.js";import"./useTrackRouteParam-CACuNq2h.js";import"./paths-BLsuJCX_.js";import"./useKodeverk-CtQi83YP.js";const I=l=>O(f(H(i.links.find(m=>m.rel===l)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:N.MANN,fødselsdato:"2000-01-02",aktørId:"22222222",språkkode:"-"},A={fagsaker:[{saksnummer:"123",fagsakYtelseType:"FP",status:"OPPR",aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"},{saksnummer:"252523",fagsakYtelseType:"ES",status:"LOP",aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"}],person:p},te={title:"app/AktørIndex",decorators:[T],component:d,parameters:{layout:"fullscreen"},render:()=>{const{status:l}=c(_()),{kodeverkOptions:m}=j(),{data:E}=c(m(l==="success"));return E?a.jsx(R,{initialEntries:["/fagsak/352011079"],children:a.jsx(u,{children:a.jsx(h,{element:a.jsx(d,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(K,{})}},r={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(I(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json(A))]}}},n={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(I(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json({fagsaker:[],person:{...p,aktørId:void 0}}))]}}},o={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(I(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>new t(null,{status:500}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json(AKTØR_INFO))]
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json({
        fagsaker: [],
        person: {
          ...PERSON,
          aktørId: undefined
        }
      } satisfies Aktor))]
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => new HttpResponse(null, {
        status: 500
      }))]
    }
  }
}`,...o.parameters?.docs?.source}}};const se=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{o as AktørInfoKallFeilet,r as Default,n as IngenFagsaker,se as __namedExportsOrder,te as default};
