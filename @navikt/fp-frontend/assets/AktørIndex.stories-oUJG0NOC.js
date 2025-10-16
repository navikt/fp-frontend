import{w as T,j as a,M as R,R as u,a as h}from"./iframe-DZkjYhtA.js";import{Z as K}from"./index.es-5YBDUdRv.js";import{u as c,a as j,F as s,i,w as f,n as H,b as F,c as _}from"./fagsakApi-C4F1mz17.js";import{h as e,H as t,c as O}from"./index-4lEtQuhz.js";import{a as k}from"./alleKodeverk-C9CgZbBn.js";import{K as N}from"./Kjonnkode-DjBoP8-t.js";import{i as g}from"./initFetchFptilbake-CspdHVpU.js";import{A as d}from"./AktørIndex-pGPgJYQy.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-BWJvbKuX.js";import"./index-Bnu1LXGY.js";import"./CheckmarkCircleFill-B7mqz8zK.js";import"./ExclamationmarkTriangleFill-DfkqPH7J.js";import"./VisittkortSakIndex-CbvbM6AB.js";import"./index.es-jMR0z_3u.js";import"./index-BwcnKpjc.js";import"./Link-DDGlUuMD.js";import"./Checkmark-B-XCvMgH.js";import"./Popover-BbS0HKPH.js";import"./message-DdbJjuuB.js";import"./Spacer-Cx1g1eSD.js";import"./IngenBehandlingValgtPanel-CuUwca0f.js";import"./useTrackRouteParam-DfeVo-O5.js";import"./paths-B__aIB-R.js";import"./useKodeverk-DBer1JLn.js";const I=l=>O(f(H(i.links.find(m=>m.rel===l)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:N.MANN,fødselsdato:"2000-01-02",aktørId:"22222222",språkkode:"-"},A={fagsaker:[{saksnummer:"123",fagsakYtelseType:"FP",status:"OPPR",aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"},{saksnummer:"252523",fagsakYtelseType:"ES",status:"LOP",aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"}],person:p},te={title:"app/AktørIndex",decorators:[T],component:d,parameters:{layout:"fullscreen"},render:()=>{const{status:l}=c(_()),{kodeverkOptions:m}=j(),{data:E}=c(m(l==="success"));return E?a.jsx(R,{initialEntries:["/fagsak/352011079"],children:a.jsx(u,{children:a.jsx(h,{element:a.jsx(d,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(K,{})}},r={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(I(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json(A))]}}},n={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(I(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json({fagsaker:[],person:{...p,aktørId:void 0}}))]}}},o={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(I(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>new t(null,{status:500}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
