import{w as R,j as a,M as h,R as j,a as K,F as E}from"./iframe-DmsLcgj8.js";import{Q as f}from"./index.es-CsWMiBLN.js";import{u as I,a as H,F as s,i as l,b as c,w as _,n as N,c as F,d as O}from"./fagsakApi-uRjFeAmK.js";import{h as e,H as t,c as A}from"./index-rT_r2_TR.js";import{a as k}from"./alleKodeverk-DO07GSZv.js";import{K as C}from"./Kjonnkode-C-fkzSiP.js";import{i as g}from"./initFetchFptilbake-CspdHVpU.js";import{A as T}from"./AktørIndex-fvAmplED.js";import"./preload-helper-D9Z9MdNV.js";import"./VStack-D8JsMLPG.js";import"./index-DuBHT146.js";import"./CheckmarkCircleFill-CqADk2Bu.js";import"./ExclamationmarkTriangleFill-MDG4yaFs.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./VisittkortSakIndex-Boe2XfKm.js";import"./index.es-BY2ihyhE.js";import"./Link-BJYoD415.js";import"./Checkmark-ZQ8wodyN.js";import"./Popover-CgETXsez.js";import"./message-Wo-ba96n.js";import"./Tag-CTpQDgN0.js";import"./Spacer-CW8MwP4l.js";import"./IngenBehandlingValgtPanel-QL1e39wK.js";import"./useTrackRouteParam-VXUxbNxM.js";import"./paths-Cwjqbm_1.js";import"./useKodeverk-CQvvN1D4.js";const d=i=>A(_(N(l.links.find(m=>m.rel===i)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:C.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222",diskresjonskode:null,språkkode:"-"},U={fagsaker:[{saksnummer:"123",fagsakYtelseType:E.FORELDREPENGER,status:c.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"},{saksnummer:"252523",fagsakYtelseType:E.ENGANGSSTONAD,status:c.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"}],person:p,aktørId:null},ne={title:"app/AktørIndex",decorators:[R],component:T,parameters:{layout:"fullscreen"},render:()=>{const{status:i}=I(O()),{kodeverkOptions:m}=H(),{data:u}=I(m(i==="success"));return u?a.jsx(h,{initialEntries:["/fagsak/352011079"],children:a.jsx(j,{children:a.jsx(K,{element:a.jsx(T,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(f,{})}},r={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(l)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(d(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json(U))]}}},n={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(l)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(d(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json({fagsaker:[],person:{...p,aktørId:null},aktørId:null}))]}}},o={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(l)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(d(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>new t(null,{status:500}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const oe=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{o as AktørInfoKallFeilet,r as Default,n as IngenFagsaker,oe as __namedExportsOrder,ne as default};
