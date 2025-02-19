import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{w as A,M as D,R as C,a as w,F as T}from"./withPanelData-fkYb-vM6.js";import{M as P}from"./index.es-WsPIDG3P.js";import{u as I,a as U,F as s,i,w as x,n as v,b as L,c as F}from"./initFetch-uefw1gnW.js";import{h as t,H as e}from"./index-CfpqQiaz.js";import{F as c}from"./fagsakStatus-NXwGwLtb.js";import{a as g}from"./alleKodeverk-BFmIlMu4.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{A as d}from"./AktørIndex-TcWKPYQE.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-DgyNHLn7.js";import"./iframe-JYW3hf97.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-CFwhVGfJ.js";import"./ExclamationmarkTriangleFill-oh2w4uot.js";import"./decorators-DIzpaN6C.js";import"./VisittkortSakIndex-DDUBxx8j.js";import"./index.es-DC8WqMTo.js";import"./Link-AwmrxaE8.js";import"./Tooltip-BDE1rsOc.js";import"./Popover-CNrG6emj.js";import"./useFormField-C-Fc75Ko.js";import"./Tag-xlG5vvnE.js";import"./Spacer-QFOiGlYe.js";import"./IngenBehandlingValgtPanel-DTfu1q0G.js";import"./paths-D7F-QefQ.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-Db8Bf8np.js";import"./useKodeverk-BFPtMOyE.js";const E=m=>x(v(i.links.find(l=>l.rel===m)).href),p={navn:"Espen Utvikler",fødselsnummer:"121221",kjønn:S.MANN,fødselsdato:"2000-01-02"},b={fagsaker:[{saksnummer:"123",fagsakYtelseType:T.FORELDREPENGER,status:c.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p},{saksnummer:"252523",fagsakYtelseType:T.ENGANGSSTONAD,status:c.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p}],person:{...p,aktørId:"12121221"}},ht={title:"app/AktørIndex",decorators:[A],component:d,render:()=>{const{status:m}=I(L()),{kodeverkOptions:l}=U(),{data:O}=I(l(m==="success"));return O?a.jsx(D,{initialEntries:["/fagsak/352011079"],children:a.jsx(C,{children:a.jsx(w,{element:a.jsx(d,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(P,{})}},r={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json(b))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:p}))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};var R,u,h;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json(AKTØR_INFO))]
    }
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var K,f,j;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json({
        fagsaker: [],
        person: PERSON
      } satisfies Aktor))]
    }
  }
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var H,_,N;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => new HttpResponse(null, {
        status: 500
      }))]
    }
  }
}`,...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const Kt=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{n as AktørInfoKallFeilet,r as Default,o as IngenFagsaker,Kt as __namedExportsOrder,ht as default};
