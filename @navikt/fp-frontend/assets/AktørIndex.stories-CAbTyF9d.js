import{w as T,j as a,M as R,R as u,a as h}from"./iframe-rD8zg52_.js";import{Z as K}from"./index.es-DlEriay5.js";import{u as c,a as j,F as s,i,w as f,n as H,b as F,c as _}from"./fagsakApi-Bx8RfCZF.js";import{h as e,H as t,c as O}from"./index-CmjXpMKr.js";import{a as k}from"./alleKodeverk-C9CgZbBn.js";import{K as N}from"./Kjonnkode-DjBoP8-t.js";import{i as g}from"./initFetchFptilbake-CspdHVpU.js";import{A as d}from"./AktørIndex-DUVUVJ4u.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-5bHGVEH1.js";import"./index-BisuOkOb.js";import"./CheckmarkCircleFill-rEmu8NB1.js";import"./ExclamationmarkTriangleFill-UakbUfU7.js";import"./VisittkortSakIndex-BXvT3nK_.js";import"./index.es-BkZ71gcI.js";import"./index-mn409b4B.js";import"./Link-DlUTxOBq.js";import"./Checkmark-B3Ce_JnD.js";import"./Popover-QpCaldn4.js";import"./message-B0j6yLa2.js";import"./Spacer-BfzGAxie.js";import"./IngenBehandlingValgtPanel-ByQ1q-so.js";import"./useTrackRouteParam-D-aNqQ-P.js";import"./paths-DJVBjQZM.js";import"./useKodeverk-CpgpjOXR.js";const I=l=>O(f(H(i.links.find(m=>m.rel===l)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:N.MANN,fødselsdato:"2000-01-02",aktørId:"22222222",språkkode:"-"},A={fagsaker:[{saksnummer:"123",fagsakYtelseType:"FP",status:"OPPR",aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"},{saksnummer:"252523",fagsakYtelseType:"ES",status:"LOP",aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p,relasjonsRolleType:"-"}],person:p},te={title:"app/AktørIndex",decorators:[T],component:d,parameters:{layout:"fullscreen"},render:()=>{const{status:l}=c(_()),{kodeverkOptions:m}=j(),{data:E}=c(m(l==="success"));return E?a.jsx(R,{initialEntries:["/fagsak/352011079"],children:a.jsx(u,{children:a.jsx(h,{element:a.jsx(d,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(K,{})}},r={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(I(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json(A))]}}},n={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(I(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>t.json({fagsaker:[],person:{...p,aktørId:void 0}}))]}}},o={parameters:{msw:{handlers:[e.get(s.INIT_FETCH,()=>t.json(i)),e.get(s.INIT_FETCH_FPTILBAKE,()=>t.json(g)),e.get(I(F.KODEVERK),()=>t.json(k)),e.get(s.AKTOER_INFO,()=>new t(null,{status:500}))]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
