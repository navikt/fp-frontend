import{j as a,w as u}from"./iframe-D_b5tSRA.js";import{Z as g}from"./index.es-wSAPzoqN.js";import{u as l,F as p,i,w as c,n as j,b as d,c as I}from"./fagsakApi-DQsk5Mj6.js";import{h as e,H as s,c as h}from"./index-Bg4Mzsp1.js";import{g as F}from"./withIntl-pnOgCKQu.js";import{U as N}from"./UtvidEllerMinskKnapp-DWnfDoOP.js";import{D as m}from"./DokumentIndex-B6WwOc9R.js";import{m as D}from"./nb_NO-DoSdDVe_.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-Dp01Wt-e.js";import"./index-B9jaLmxr.js";import"./CheckmarkCircleFill-idUAWyJz.js";import"./ExclamationmarkTriangleFill-Bd5RJjt5.js";import"./FaktaKort-CPTqwuq1.js";import"./eksterneLenker-CZTrovcW.js";import"./Link-mZwSyAx9.js";import"./message-CC48y34_.js";import"./Table-ZPL416KL.js";import"./Checkbox-Lqv1fh5A.js";import"./StarFill-CH6zuHVT.js";import"./SupportHeader-BUQza0qW.js";import"./ErrorBoundary-BIPNpIAb.js";import"./IngenBehandlingValgtPanel-Bq6SHiPe.js";const{action:U}=__STORYBOOK_MODULE_ACTIONS__,f=F(D),k=o=>h(c(j(i.sakLinks.find(r=>r.rel===o)).href)),q={title:"fagsak/DokumentIndex",decorators:[f,u],component:m,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(N,{toggleVisUtvidetBehandlingDetaljer:U("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=l(I());return r==="success"?a.jsx(m,{...o}):a.jsx(g,{})}},t={parameters:{msw:{handlers:[e.get(p.INIT_FETCH,()=>s.json(i)),e.get(k(d.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:"INN"},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:"INN"},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:"INN"}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(p.INIT_FETCH,()=>s.json(i)),e.get(k(d.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([{
        journalpostId: '1',
        dokumentId: '1',
        tittel: 'dok',
        tidspunkt: '10.10.2017 10:23',
        kommunikasjonsretning: 'INN' as Kommunikasjonsretning
      }, {
        journalpostId: '2',
        dokumentId: '2',
        tittel: 'dok1',
        tidspunkt: '10.10.2019 10:23',
        kommunikasjonsretning: 'INN' as Kommunikasjonsretning
      }, {
        journalpostId: '3',
        dokumentId: '3',
        tittel: 'dok2',
        tidspunkt: '10.10.2018 10:23',
        kommunikasjonsretning: 'INN' as Kommunikasjonsretning
      }]))]
    }
  },
  args: {
    behandlingUuid: '11212',
    behandlingVersjon: 1
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([]))]
    }
  },
  args: {}
}`,...n.parameters?.docs?.source}}};const z=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,z as __namedExportsOrder,q as default};
