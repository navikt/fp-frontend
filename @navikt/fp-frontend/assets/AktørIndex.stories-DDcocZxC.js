import{w as T,j as a,M as R,R as h,a as j}from"./iframe-DdYy2bp5.js";import{Q as K}from"./index.es-CwmF0KmW.js";import{u as I,a as f,F as s,i as l,b as E,w as H,n as _,c as F,d as O}from"./fagsakApi-697bULjr.js";import{h as t,H as e,c as N}from"./index-wT-XKEQ2.js";import{a as k}from"./alleKodeverk-DO07GSZv.js";import{K as A}from"./Kjonnkode-DjBoP8-t.js";import{i as g}from"./initFetchFptilbake-CspdHVpU.js";import{A as c}from"./AktørIndex-CkVK1GxM.js";import"./preload-helper-D9Z9MdNV.js";import"./VStack-VYKIvQQb.js";import"./index-BiIcxA6F.js";import"./CheckmarkCircleFill-DNu2UU4-.js";import"./ExclamationmarkTriangleFill-C1N23jUp.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./VisittkortSakIndex-CklrxFkj.js";import"./index.es-DmNw6uTt.js";import"./index-knyQLY_f.js";import"./Link-Zla5_01O.js";import"./Checkmark-ClBFl83a.js";import"./Popover-C9SlvOdx.js";import"./message-73eWgVqp.js";import"./Spacer-C1Hh6Yzy.js";import"./IngenBehandlingValgtPanel-CxicQnAw.js";import"./useTrackRouteParam-CWKls_g0.js";import"./paths-FOm7ZINM.js";import"./useKodeverk-CWV9gncg.js";const d=i=>N(H(_(l.links.find(m=>m.rel===i)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:A.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222",diskresjonskode:null,språkkode:"-"},C={fagsaker:[{saksnummer:"123",fagsakYtelseType:"FP",status:E.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"},{saksnummer:"252523",fagsakYtelseType:"ES",status:E.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"}],person:p,aktørId:null},rt={title:"app/AktørIndex",decorators:[T],component:c,parameters:{layout:"fullscreen"},render:()=>{const{status:i}=I(O()),{kodeverkOptions:m}=f(),{data:u}=I(m(i==="success"));return u?a.jsx(R,{initialEntries:["/fagsak/352011079"],children:a.jsx(h,{children:a.jsx(j,{element:a.jsx(c,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(K,{})}},r={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(l)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(g)),t.get(d(F.KODEVERK),()=>e.json(k)),t.get(s.AKTOER_INFO,()=>e.json(C))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(l)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(g)),t.get(d(F.KODEVERK),()=>e.json(k)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:{...p,aktørId:null},aktørId:null}))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(l)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(g)),t.get(d(F.KODEVERK),()=>e.json(k)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
          aktørId: null
        },
        aktørId: null
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
}`,...o.parameters?.docs?.source}}};const nt=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{o as AktørInfoKallFeilet,r as Default,n as IngenFagsaker,nt as __namedExportsOrder,rt as default};
