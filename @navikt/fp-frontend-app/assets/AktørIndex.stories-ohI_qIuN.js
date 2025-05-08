import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{w as A,M as C,R as w,a as P,F as I}from"./withPanelData-Cxc-_rcp.js";import{X as U}from"./index.es-BeIakvhu.js";import{u as d,a as x,F as s,i,w as D,n as v,b as L,c as l}from"./fagsakApi-B6-Ppcx5.js";import{h as t,H as e}from"./index-DcGDEF8s.js";import{F as c}from"./fagsakStatus-NXwGwLtb.js";import{a as g}from"./alleKodeverk-Dp2FRR0Y.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{i as k}from"./initFetchFptilbake-CspdHVpU.js";import{A as T}from"./AktørIndex-BNK1IUxF.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./v4-CtRu48qb.js";import"./entry-preview-CrNwMK4F.js";import"./iframe-3LFfcy5g.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-dkOb7n_Y.js";import"./ExclamationmarkTriangleFill-B7kQIwWX.js";import"./message-CHPGkKcY.js";import"./decorators-Bnaor6Ku.js";import"./VisittkortSakIndex-KxucMUOY.js";import"./index.es-xor-lyiR.js";import"./Link-Bmd7PYjG.js";import"./Tooltip-Cn34joyJ.js";import"./Popover-DIeAfopg.js";import"./Tag-3IzLDalk.js";import"./Spacer-Ccw5UBI6.js";import"./IngenBehandlingValgtPanel-CPgaozXE.js";import"./paths-BJeVOTLe.js";import"./useTrackRouteParam-ygp8E0Ew.js";import"./useKodeverk-B1-OZ1ly.js";const E=m=>D(v(i.links.find(F=>F.rel===m)).href),p={navn:"Espen Utvikler",fødselsnummer:"11111111111",kjønn:S.MANN,fødselsdato:"2000-01-02",dødsdato:null,aktørId:"22222222"},b={fagsaker:[{saksnummer:"123",fagsakYtelseType:I.FORELDREPENGER,status:c.OPPRETTET,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p},{saksnummer:"252523",fagsakYtelseType:I.ENGANGSSTONAD,status:c.LOPENDE,aktørId:"1345345",barnFødt:"2024-01-03",opprettet:"2024-01-03",person:p}],person:p},Kt={title:"app/AktørIndex",decorators:[A],component:T,render:()=>{const{status:m}=d(L()),{kodeverkOptions:F}=x(),{data:O}=d(F(m==="success"));return O?r.jsx(C,{initialEntries:["/fagsak/352011079"],children:r.jsx(w,{children:r.jsx(P,{element:r.jsx(T,{}),path:"/fagsak/:aktoerId"})})}):r.jsx(U,{})}},a={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(l.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json(b))]}}},o={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(l.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>e.json({fagsaker:[],person:{...p,aktørId:null}}))]}}},n={parameters:{msw:{handlers:[t.get(s.INIT_FETCH,()=>e.json(i)),t.get(s.INIT_FETCH_FPTILBAKE,()=>e.json(k)),t.get(E(l.KODEVERK),()=>e.json(g)),t.get(s.AKTOER_INFO,()=>new e(null,{status:500}))]}}};var R,u,h;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const ft=["Default","IngenFagsaker","AktørInfoKallFeilet"];export{n as AktørInfoKallFeilet,a as Default,o as IngenFagsaker,ft as __namedExportsOrder,Kt as default};
