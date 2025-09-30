import{w as T,j as a,M as R,R as u,a as h}from"./iframe-B0rs5mSc.js";import{Q as K}from"./index.es-CnwXS7-r.js";import{u as c,a as j,F as s,i,w as f,n as H,b as F,c as _}from"./fagsakApi-DNzcm8DU.js";import{h as e,H as t,c as O}from"./index-DMdEqgU2.js";import{a as k}from"./alleKodeverk-DO07GSZv.js";import{K as N}from"./Kjonnkode-DjBoP8-t.js";import{i as g}from"./initFetchFptilbake-CspdHVpU.js";import{A as d}from"./AktørIndex-CkC5B0cn.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-D6SAjkvB.js";import"./index-ClufUYiT.js";import"./CheckmarkCircleFill-DsMcI9Pz.js";import"./ExclamationmarkTriangleFill-DYlP65Al.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./VisittkortSakIndex-CVo1v5jv.js";import"./index.es-CZthaW6n.js";import"./index-B9wlCCrQ.js";import"./Link-B-V9fx3y.js";import"./Checkmark-Cj0bvwk8.js";import"./Popover-CRDyh1xr.js";import"./message-53Aw4P6w.js";import"./Spacer-BjXseebZ.js";import"./IngenBehandlingValgtPanel-CbnuVFFb.js";import"./useTrackRouteParam-CUlP9iNG.js";import"./paths-BymUWMa5.js";import"./useKodeverk-DUqnEMjI.js";const I=m=>O(f(H(i.links.find(l=>l.rel===m)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:N.MANN,fødselsdato:"2000-01-02",aktørId:"22222222",språkkode:"-"},A={fagsaker:[{saksnummer:"123",fagsakYtelseType:"FP",status:"OPPR",aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"},{saksnummer:"252523",fagsakYtelseType:"ES",status:"LOP",aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"}],person:p},ae={title:"app/AktørIndex",decorators:[T],component:d,parameters:{layout:"fullscreen"},render:()=>{const{status:m}=c(_()),{kodeverkOptions:l}=j(),{data:E}=c(l(m==="success"));return E?a.jsx(R,{initialEntries:["/fagsak/352011079"],children:a.jsx(u,{children:a.jsx(h,{element:a.jsx(d,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(K,{})}},r={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(I(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json(A))]}}},n={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(I(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json({fagsaker:[],person:{...p,aktørId:void 0}}))]}}},o={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(I(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>new t(null,{status:500}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const re=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{o as AktørInfoKallFeilet,r as Default,n as IngenFagsaker,re as __namedExportsOrder,ae as default};
