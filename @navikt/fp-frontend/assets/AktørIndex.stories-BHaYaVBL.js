import{w as R,j as a,M as u,R as h,a as K}from"./iframe-CsBD3T2M.js";import{Q as j}from"./index.es-DhJcGz6z.js";import{u as I,a as f,F as s,i,b as d,w as H,n as _,c as F,d as O}from"./fagsakApi-BJMA_Cxc.js";import{h as e,H as t,c as N}from"./index-BuAb35cs.js";import{a as k}from"./alleKodeverk-DO07GSZv.js";import{K as A}from"./Kjonnkode-DjBoP8-t.js";import{i as g}from"./initFetchFptilbake-CspdHVpU.js";import{A as c}from"./AktørIndex-CPncvAbS.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-D90Uj1HC.js";import"./index-CmpEquNz.js";import"./CheckmarkCircleFill-CpyCiQqF.js";import"./ExclamationmarkTriangleFill-BcKqijKy.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./VisittkortSakIndex-DeSCWJ6W.js";import"./index.es-Bj3rXCCI.js";import"./index-ytCJHYfH.js";import"./Link-Bwcjo2Gm.js";import"./Checkmark-iAS4qzNf.js";import"./Popover-CmKg7-AU.js";import"./message-DllOlMsz.js";import"./Spacer-C8w2SKdJ.js";import"./IngenBehandlingValgtPanel-iah4s_Ou.js";import"./useTrackRouteParam-C9XODlHB.js";import"./paths-6hRtqE8e.js";import"./useKodeverk-CnL87gFS.js";const E=m=>N(H(_(i.links.find(l=>l.rel===m)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:A.MANN,fødselsdato:"2000-01-02",aktørId:"22222222",språkkode:"-"},C={fagsaker:[{saksnummer:"123",fagsakYtelseType:"FP",status:d.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"},{saksnummer:"252523",fagsakYtelseType:"ES",status:d.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"}],person:p},re={title:"app/AktørIndex",decorators:[R],component:c,parameters:{layout:"fullscreen"},render:()=>{const{status:m}=I(O()),{kodeverkOptions:l}=f(),{data:T}=I(l(m==="success"));return T?a.jsx(u,{initialEntries:["/fagsak/352011079"],children:a.jsx(h,{children:a.jsx(K,{element:a.jsx(c,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(j,{})}},r={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(E(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json(C))]}}},n={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(E(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json({fagsaker:[],person:{...p,aktørId:void 0}}))]}}},o={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(E(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>new t(null,{status:500}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
