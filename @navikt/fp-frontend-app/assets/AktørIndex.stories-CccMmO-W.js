import{w as T,j as a,M as R,R as h,a as j}from"./iframe-L_KgTyg_.js";import{Q as K}from"./index.es-CA41BrA4.js";import{u as I,a as f,F as s,i as l,b as E,w as H,n as _,c as F,d as O}from"./fagsakApi-Df1a6j9p.js";import{h as t,H as e,c as N}from"./index-CIWA3yCk.js";import{a as k}from"./alleKodeverk-DO07GSZv.js";import{K as A}from"./Kjonnkode-DjBoP8-t.js";import{i as g}from"./initFetchFptilbake-CspdHVpU.js";import{A as c}from"./AktørIndex-GZe8-9Sw.js";import"./preload-helper-D9Z9MdNV.js";import"./VStack-CJHqWZyg.js";import"./index-BBnDiHBR.js";import"./CheckmarkCircleFill-DFyQe3F2.js";import"./ExclamationmarkTriangleFill-CG-iL2Ba.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./VisittkortSakIndex-Bg9yZQ4x.js";import"./index.es-CFCgPI3z.js";import"./Link-B0rM6wOM.js";import"./Checkmark-D9Mqc2S0.js";import"./Popover-C4rKZ801.js";import"./message-B69h1KM3.js";import"./Tag-S-BQ71eq.js";import"./Spacer-BBF-wXfQ.js";import"./IngenBehandlingValgtPanel-BgkHQGex.js";import"./useTrackRouteParam-Cf_fv_1n.js";import"./paths-CwRUMtdq.js";import"./useKodeverk-QiN88oS4.js";const d=i=>N(H(_(l.links.find(m=>m.rel===i)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:A.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222",diskresjonskode:null,språkkode:"-"},C={fagsaker:[{saksnummer:"123",fagsakYtelseType:"FP",status:E.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"},{saksnummer:"252523",fagsakYtelseType:"ES",status:E.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"}],person:p,aktørId:null},rt={title:"app/AktørIndex",decorators:[T],component:c,parameters:{layout:"fullscreen"},render:()=>{const{status:i}=I(O()),{kodeverkOptions:m}=f(),{data:u}=I(m(i==="success"));return u?a.jsx(R,{initialEntries:["/fagsak/352011079"],children:a.jsx(h,{children:a.jsx(j,{element:a.jsx(c,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(K,{})}},r={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(l)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(g)),t.get(d(F.KODEVERK),()=>e.json(k)),t.get(s.AKTOER_INFO,()=>e.json(C))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(l)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(g)),t.get(d(F.KODEVERK),()=>e.json(k)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:{...p,aktørId:null},aktørId:null}))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(l)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(g)),t.get(d(F.KODEVERK),()=>e.json(k)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
