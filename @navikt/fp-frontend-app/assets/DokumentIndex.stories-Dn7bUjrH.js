import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{E as F}from"./index.es-BYR1u67G.js";import{w as N,c as D}from"./withPanelData-CfkuOvBn.js";import{u as f,F as c,i as m,w as U,n as E,b as H,c as I}from"./fagsakApi-BDfitFCD.js";import{h as e,H as s}from"./index-Y5SXXV7L.js";import{D as p,K as i}from"./DokumentIndex-BEhe5TRZ.js";import{g as T}from"./withIntl-Dfafci88.js";import{U as S}from"./UtvidEllerMinskKnapp-Cw2qgBP6.js";import{m as _}from"./nb_NO-BsDjQrpy.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-Ek9xIQ-q.js";import"./ExclamationmarkTriangleFill-CWGZnRah.js";import"./message-Dd5UCRGD.js";import"./index-gMDb9Zpm.js";import"./index-DrFkskS4.js";import"./v4-CtRu48qb.js";import"./entry-preview-DOKeJrhm.js";import"./iframe-Df66yHdC.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-duuaId12.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./DokumentLink-ZuHfnfFG.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-B0dJ5XWa.js";import"./Table-Bm-CHLHb.js";import"./Checkbox-uilmfFyP.js";import"./StarFill-CdSpiz--.js";import"./SupportHeader-CsvTtPvw.js";import"./ErrorBoundary-DV1ijwAk.js";import"./IngenBehandlingValgtPanel-B_07JeJ9.js";import"./RestApiErrorContext-Dcq0Gika.js";import"./Tooltip-6fbVTtgH.js";const w=T(_),h=o=>U(E(m.sakLinks.find(r=>r.rel===o)).href),kt={title:"fagsak/DokumentIndex",decorators:[w,N],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(S,{toggleVisUtvidetBehandlingDetaljer:D("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=f(H());return r==="success"?a.jsx(p,{...o}):a.jsx(F,{})}},t={parameters:{msw:{handlers:[e.get(c.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(c.INIT_FETCH,()=>s.json(m)),e.get(h(I.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};var d,k,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([{
        journalpostId: '1',
        dokumentId: '1',
        tittel: 'dok',
        tidspunkt: '10.10.2017 10:23',
        kommunikasjonsretning: Kommunikasjonsretning.INN
      }, {
        journalpostId: '2',
        dokumentId: '2',
        tittel: 'dok1',
        tidspunkt: '10.10.2019 10:23',
        kommunikasjonsretning: Kommunikasjonsretning.INN
      }, {
        journalpostId: '3',
        dokumentId: '3',
        tittel: 'dok2',
        tidspunkt: '10.10.2018 10:23',
        kommunikasjonsretning: Kommunikasjonsretning.INN
      }]))]
    }
  },
  args: {
    behandlingUuid: '11212',
    behandlingVersjon: 1
  }
}`,...(u=(k=t.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var g,l,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([]))]
    }
  },
  args: {}
}`,...(j=(l=n.parameters)==null?void 0:l.docs)==null?void 0:j.source}}};const ut=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,ut as __namedExportsOrder,kt as default};
