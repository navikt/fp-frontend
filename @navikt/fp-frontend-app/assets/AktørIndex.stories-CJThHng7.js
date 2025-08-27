import{w as R,j as a,M as h,R as j,a as K,F as E}from"./iframe-Cc3omapF.js";import{Q as f}from"./index.es-BZcNyl5y.js";import{u as I,a as H,F as s,i as l,b as c,w as _,n as N,c as F,d as O}from"./fagsakApi-Dl3IK1m3.js";import{h as e,H as t,c as A}from"./index-48rqNLx5.js";import{a as k}from"./alleKodeverk-DO07GSZv.js";import{K as C}from"./Kjonnkode-C-fkzSiP.js";import{i as g}from"./initFetchFptilbake-CspdHVpU.js";import{A as T}from"./AktørIndex-B9kw_eha.js";import"./preload-helper-D9Z9MdNV.js";import"./VStack-BS7xUE_y.js";import"./index-C7H5-rlG.js";import"./CheckmarkCircleFill-PbK-QA-K.js";import"./ExclamationmarkTriangleFill-DErr1Ung.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./VisittkortSakIndex-CUKM51Is.js";import"./index.es-B8lVUMdD.js";import"./Link-CBQHnlA9.js";import"./Checkmark-YH-lhRsr.js";import"./Popover-BBgc0hFK.js";import"./message-BD0ajGHY.js";import"./Tag-EdljML5l.js";import"./Spacer-DP2-W1cb.js";import"./IngenBehandlingValgtPanel-HTEHLcr6.js";import"./useTrackRouteParam-BNUNbNk0.js";import"./paths-C3-6l03g.js";import"./useKodeverk-R_OIMhjx.js";const d=i=>A(_(N(l.links.find(m=>m.rel===i)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:C.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222",diskresjonskode:null,språkkode:"-"},U={fagsaker:[{saksnummer:"123",fagsakYtelseType:E.FORELDREPENGER,status:c.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"},{saksnummer:"252523",fagsakYtelseType:E.ENGANGSSTONAD,status:c.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"}],person:p,aktørId:null},ne={title:"app/AktørIndex",decorators:[R],component:T,parameters:{layout:"fullscreen"},render:()=>{const{status:i}=I(O()),{kodeverkOptions:m}=H(),{data:u}=I(m(i==="success"));return u?a.jsx(h,{initialEntries:["/fagsak/352011079"],children:a.jsx(j,{children:a.jsx(K,{element:a.jsx(T,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(f,{})}},r={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(l)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(d(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json(U))]}}},n={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(l)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(d(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json({fagsaker:[],person:{...p,aktørId:null},aktørId:null}))]}}},o={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(l)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(d(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>new t(null,{status:500}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
