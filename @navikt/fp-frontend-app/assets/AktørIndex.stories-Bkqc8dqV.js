import{w as R,j as a,M as h,R as j,a as K,F as E}from"./iframe-DJGNZoZ6.js";import{X as f}from"./index.es-D1YnVz4v.js";import{u as I,a as H,F as s,i as l,b as c,w as _,n as N,c as F,d as O}from"./fagsakApi-D1QcCHKG.js";import{h as e,H as t,c as A}from"./index-CPWpTKVb.js";import{a as k}from"./alleKodeverk-DO07GSZv.js";import{K as C}from"./Kjonnkode-C-fkzSiP.js";import{i as g}from"./initFetchFptilbake-CspdHVpU.js";import{A as T}from"./AktørIndex-C7PD_fGs.js";import"./preload-helper-D9Z9MdNV.js";import"./VStack-DP7hrVrJ.js";import"./index-CXoy7HZM.js";import"./CheckmarkCircleFill-CWjE4VII.js";import"./ExclamationmarkTriangleFill-CkqaVpWl.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./VisittkortSakIndex-5gP7JsHK.js";import"./index.es-H3DKP3E_.js";import"./Link-B8z19aKV.js";import"./Checkmark-C4Z70zQE.js";import"./Popover-CAa3pUnh.js";import"./message-B9fo_cy0.js";import"./Tag-CpsXs_w5.js";import"./Spacer-CFZDP6_v.js";import"./IngenBehandlingValgtPanel-CXtPxZDW.js";import"./useTrackRouteParam-BNLsoyQE.js";import"./paths-Bp0-wKHX.js";import"./useKodeverk-DV4DjbSE.js";const d=i=>A(_(N(l.links.find(m=>m.rel===i)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:C.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222",diskresjonskode:null,språkkode:"-"},U={fagsaker:[{saksnummer:"123",fagsakYtelseType:E.FORELDREPENGER,status:c.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"},{saksnummer:"252523",fagsakYtelseType:E.ENGANGSSTONAD,status:c.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"}],person:p,aktørId:null},ne={title:"app/AktørIndex",decorators:[R],component:T,parameters:{layout:"fullscreen"},render:()=>{const{status:i}=I(O()),{kodeverkOptions:m}=H(),{data:u}=I(m(i==="success"));return u?a.jsx(h,{initialEntries:["/fagsak/352011079"],children:a.jsx(j,{children:a.jsx(K,{element:a.jsx(T,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(f,{})}},r={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(l)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(d(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json(U))]}}},n={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(l)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(d(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json({fagsaker:[],person:{...p,aktørId:null},aktørId:null}))]}}},o={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(l)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(d(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>new t(null,{status:500}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
