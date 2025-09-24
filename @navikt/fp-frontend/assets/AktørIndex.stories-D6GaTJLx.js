import{w as R,j as a,M as u,R as h,a as K}from"./iframe-DVHdX9HJ.js";import{Q as j}from"./index.es-BTgerP4G.js";import{u as I,a as f,F as s,i,b as d,w as H,n as _,c as F,d as O}from"./fagsakApi-JoQlR6sb.js";import{h as e,H as t,c as N}from"./index-Bq1N9Wh0.js";import{a as k}from"./alleKodeverk-DO07GSZv.js";import{K as A}from"./Kjonnkode-DjBoP8-t.js";import{i as g}from"./initFetchFptilbake-CspdHVpU.js";import{A as c}from"./AktørIndex-pgsKIs8p.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-H5UJZKzx.js";import"./index-DmXeMDAP.js";import"./CheckmarkCircleFill-DcNUoFd8.js";import"./ExclamationmarkTriangleFill-YyhdtMh0.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./VisittkortSakIndex-C73v_uRI.js";import"./index.es-B-JQpwB-.js";import"./index-94OSCaUe.js";import"./Link-BqM1uhNU.js";import"./Checkmark-BAU3AbEn.js";import"./Popover-B7j3KCUK.js";import"./message-BZ9HHg0h.js";import"./Spacer-DcXHFfej.js";import"./IngenBehandlingValgtPanel-BlTERyk6.js";import"./useTrackRouteParam-D1KKeZTc.js";import"./paths-B6QJQXOc.js";import"./useKodeverk-CfJHDE-K.js";const E=m=>N(H(_(i.links.find(l=>l.rel===m)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:A.MANN,fødselsdato:"2000-01-02",aktørId:"22222222",språkkode:"-"},C={fagsaker:[{saksnummer:"123",fagsakYtelseType:"FP",status:d.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"},{saksnummer:"252523",fagsakYtelseType:"ES",status:d.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"}],person:p},re={title:"app/AktørIndex",decorators:[R],component:c,parameters:{layout:"fullscreen"},render:()=>{const{status:m}=I(O()),{kodeverkOptions:l}=f(),{data:T}=I(l(m==="success"));return T?a.jsx(u,{initialEntries:["/fagsak/352011079"],children:a.jsx(h,{children:a.jsx(K,{element:a.jsx(c,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(j,{})}},r={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(E(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json(C))]}}},n={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(E(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json({fagsaker:[],person:{...p,aktørId:void 0}}))]}}},o={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(E(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>new t(null,{status:500}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const ne=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{o as AktørInfoKallFeilet,r as Default,n as IngenFagsaker,ne as __namedExportsOrder,re as default};
