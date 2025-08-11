import{w as u,j as a,M as h,R as K,a as j,F as I}from"./iframe-CnzAQIke.js";import{X as f}from"./index.es-D5Vm-hBw.js";import{u as c,a as H,F as s,i,b as d,w as _,n as N,c as F,d as O}from"./fagsakApi-DyKD9eSm.js";import{h as t,H as e,c as A}from"./index-nIHNnJ_0.js";import{a as g}from"./alleKodeverk-DO07GSZv.js";import{K as C}from"./Kjonnkode-C-fkzSiP.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{A as T}from"./AktørIndex-DMBhKAdG.js";import"./preload-helper-D9Z9MdNV.js";import"./VStack-BX_B4ZsH.js";import"./index-D-dCar1_.js";import"./CheckmarkCircleFill-BXV5w3t4.js";import"./ExclamationmarkTriangleFill-BQ8sS53S.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./VisittkortSakIndex-DB-5p-fB.js";import"./index.es-BbtgNHhw.js";import"./Link-DrgkAYnV.js";import"./Checkmark--u00n7f7.js";import"./Popover-D4ZTW0T0.js";import"./message-2pXBggY0.js";import"./Tag-CrDfwUs7.js";import"./Spacer-D87MLkf0.js";import"./IngenBehandlingValgtPanel-Bk5xWokY.js";import"./useTrackRouteParam-BjKXFmEF.js";import"./paths-B0dyOaP7.js";import"./useKodeverk-DMgVu_N-.js";const E=l=>A(_(N(i.links.find(m=>m.rel===l)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:C.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222"},U={fagsaker:[{saksnummer:"123",fagsakYtelseType:I.FORELDREPENGER,status:d.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p},{saksnummer:"252523",fagsakYtelseType:I.ENGANGSSTONAD,status:d.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p}],person:p},nt={title:"app/AktørIndex",decorators:[u],component:T,parameters:{layout:"fullscreen"},render:()=>{const{status:l}=c(O()),{kodeverkOptions:m}=H(),{data:R}=c(m(l==="success"));return R?a.jsx(h,{initialEntries:["/fagsak/352011079"],children:a.jsx(K,{children:a.jsx(j,{element:a.jsx(T,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(f,{})}},r={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json(U))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:{...p,aktørId:null}}))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const ot=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{o as AktørInfoKallFeilet,r as Default,n as IngenFagsaker,ot as __namedExportsOrder,nt as default};
