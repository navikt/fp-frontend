import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{w as A,M as C,R as U,a as w,F as I}from"./withPanelData-CLOZbprv.js";import{r as P}from"./index.es-CrxjGdv0.js";import{u as c,a as x,F as s,i,w as D,n as v,b as L,c as F}from"./fagsakApi-C3PkkGF3.js";import{h as t,H as e,c as S}from"./index-Cg096ojA.js";import{F as d}from"./fagsakStatus-NXwGwLtb.js";import{a as g}from"./alleKodeverk-BGvpDL3l.js";import{K as b}from"./Kjonnkode-C-fkzSiP.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{A as T}from"./AktørIndex-BbdqxjUF.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./v4-CtRu48qb.js";import"./entry-preview-DQ6hjxC_.js";import"./iframe-nYFChBwt.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-CNbW5AiB.js";import"./ExclamationmarkTriangleFill-BFt1m1Su.js";import"./decorators-Bnaor6Ku.js";import"./VisittkortSakIndex-ClX60ovP.js";import"./index.es-DPe0Mmt1.js";import"./Link-DxzhBiiN.js";import"./Tooltip-D4wrnMpP.js";import"./Checkmark-DRkKKV12.js";import"./Popover-DHvFAHbL.js";import"./message-CMl50jXr.js";import"./Tag-fHSm-eNn.js";import"./Spacer-D7-AhIRe.js";import"./IngenBehandlingValgtPanel-CinQ-ZGf.js";import"./useTrackRouteParam-D2zIHpnt.js";import"./paths-B8ZAT26i.js";import"./useKodeverk-B1ajX3GV.js";const E=m=>S(D(v(i.links.find(l=>l.rel===m)).href)),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:b.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222"},y={fagsaker:[{saksnummer:"123",fagsakYtelseType:I.FORELDREPENGER,status:d.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p},{saksnummer:"252523",fagsakYtelseType:I.ENGANGSSTONAD,status:d.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p}],person:p},jt={title:"app/AktørIndex",decorators:[A],component:T,render:()=>{const{status:m}=c(L()),{kodeverkOptions:l}=x(),{data:O}=c(l(m==="success"));return O?r.jsx(C,{initialEntries:["/fagsak/352011079"],children:r.jsx(U,{children:r.jsx(w,{element:r.jsx(T,{}),path:"/fagsak/:aktoerId"})})}):r.jsx(P,{})}},a={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json(y))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:{...p,aktørId:null}}))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(F.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};var R,u,h;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)), http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)), http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json(AKTØR_INFO))]
    }
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var K,f,j;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const Ht=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{n as AktørInfoKallFeilet,a as Default,o as IngenFagsaker,Ht as __namedExportsOrder,jt as default};
