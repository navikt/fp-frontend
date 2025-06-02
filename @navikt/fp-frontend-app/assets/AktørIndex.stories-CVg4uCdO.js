import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{w as A,M as C,R as U,a as w,F as I}from"./withThemeDecorator-zwF_VyQA.js";import{a as P}from"./index.es-1HjGJ6EL.js";import{u as c,a as x,F as s,i,b as d,w as D,n as v,c as y,d as F}from"./fagsakApi-GpheZX3v.js";import{h as t,H as e,c as L}from"./index-BVlhR-8X.js";import{a as g}from"./alleKodeverk-DO07GSZv.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{A as T}from"./AktørIndex-4MWZzcCe.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./entry-preview-BGoTbtgt.js";import"./iframe-Dh4S4pYG.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./VStack-BYX9WX4q.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./CheckmarkCircleFill-DoSxwlpN.js";import"./ExclamationmarkTriangleFill-DcC5p28j.js";import"./behandlingResultatType-CKS0Ckn9.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./decorators-Bnaor6Ku.js";import"./VisittkortSakIndex--j72AQEQ.js";import"./index.es-DGjURu4h.js";import"./Link-CexXASIp.js";import"./Checkmark-B5kO2-Tj.js";import"./Popover-CMSwuF1h.js";import"./message-qvfAPF2U.js";import"./Tag-CcTYVtw3.js";import"./Spacer-Cm26OkFX.js";import"./IngenBehandlingValgtPanel-BMCp3InH.js";import"./useTrackRouteParam-fkIH4jYG.js";import"./paths-NmmZRYgu.js";import"./useKodeverk-DOOb0zoO.js";const E=m=>L(D(v(i.links.find(l=>l.rel===m)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:S.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222"},b={fagsaker:[{saksnummer:"123",fagsakYtelseType:I.FORELDREPENGER,status:d.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p},{saksnummer:"252523",fagsakYtelseType:I.ENGANGSSTONAD,status:d.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p}],person:p},jt={title:"app/AktørIndex",decorators:[A],component:T,parameters:{layout:"fullscreen"},render:()=>{const{status:m}=c(y()),{kodeverkOptions:l}=x(),{data:O}=c(l(m==="success"));return O?a.jsx(C,{initialEntries:["/fagsak/352011079"],children:a.jsx(U,{children:a.jsx(w,{element:a.jsx(T,{}),path:"/fagsak/:aktoerId"})})}):a.jsx(P,{})}},r={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json(b))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:{...p,aktørId:null}}))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};var R,u,h;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json(AKTØR_INFO))]
    }
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var K,f,j;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var H,_,N;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => new HttpResponse(null, {
        status: 500
      }))]
    }
  }
}`,...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const Ht=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{n as AktørInfoKallFeilet,r as Default,o as IngenFagsaker,Ht as __namedExportsOrder,jt as default};
