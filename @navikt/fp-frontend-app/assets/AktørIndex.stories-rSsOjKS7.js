import{j as a}from"./jsx-runtime-BDPtolqC.js";import{w as A,M as D,R as C,a as w,b as F}from"./alleKodeverk-B3AibkSl.js";import{H as P}from"./index.es-dGlS6Fbw.js";import{u as T,a as U,h as t,F as s,H as e,i,w as x,n as b,b as g,c as v}from"./initFetch-Ix2oJbRX.js";import"./aktivitetStatus-02fOJoqz.js";import{F as I,a as c}from"./fagsakYtelseType-CyKFp0BE.js";import{K as L}from"./Kjonnkode-C-fkzSiP.js";import{A as d}from"./AktørIndex-BIM4mrrI.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import"./index-D1iumpf7.js";import"./index-B54hSm9S.js";import"./index-BC2UOl6f.js";import"./index-D41M3POg.js";import"./dayjs.min-BBSNu57g.js";import"./decorators-DIzpaN6C.js";import"./kodeverkTyper-CavWL6Ds.js";import"./VisittkortSakIndex-CSZENhBR.js";import"./index.es-B_dFCv1U.js";import"./useFormField-C31nuhn6.js";import"./Link-B9GbEzBH.js";import"./Tooltip-DlfmtGFs.js";import"./Popover-oAArT4ih.js";import"./Tag-C54rxs5e.js";import"./Spacer-Dgmjad93.js";import"./IngenBehandlingValgtPanel-zGecvNxh.js";import"./paths-CeNa7t0Q.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-BHDqBshG.js";import"./useKodeverk-CRXhM29t.js";const E=m=>x(b(i.links.find(l=>l.rel===m)).href),p={navn:"Espen Utvikler",fødselsnummer:"121221",kjønn:L.MANN,fødselsdato:"2000-01-02"},S={fagsaker:[{saksnummer:"123",fagsakYtelseType:I.FORELDREPENGER,status:c.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p},{saksnummer:"252523",fagsakYtelseType:I.ENGANGSSTONAD,status:c.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p}],person:{...p,aktørId:"12121221"}},Tt={title:"app/AktørIndex",decorators:[A],component:d,render:()=>{const{status:m}=T(v()),{kodeverkOptions:l}=U(),{data:O}=T(l(m==="success"));return O?a.jsx(D,{initialEntries:["/fagsak/352011079"],children:a.jsx(C,{children:a.jsx(w,{element:a.jsx(d,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(P,{})}},r={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(g.KODEVERK),()=>e.json(F)),t.get(s.AKTOER_INFO,()=>e.json(S))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(g.KODEVERK),()=>e.json(F)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:p}))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(g.KODEVERK),()=>e.json(F)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};var R,u,h;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json(AKTØR_INFO))]
    }
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var K,H,j;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json({
        fagsaker: [],
        person: PERSON
      } satisfies Aktor))]
    }
  }
}`,...(j=(H=o.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var _,f,N;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => new HttpResponse(null, {
        status: 500
      }))]
    }
  }
}`,...(N=(f=n.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const It=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{n as AktørInfoKallFeilet,r as Default,o as IngenFagsaker,It as __namedExportsOrder,Tt as default};
