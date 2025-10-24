import{j as a,w as u}from"./iframe-IrsYaoYT.js";import{Z as g}from"./index.es-CQX5W6HT.js";import{u as l,F as p,i,w as c,n as j,b as d,c as I}from"./fagsakApi-qaBj9I5C.js";import{h as e,H as s,c as h}from"./index-DIHUZfMo.js";import{g as F}from"./withIntl-DxhyPH7m.js";import{U as N}from"./UtvidEllerMinskKnapp-Dtfx12cI.js";import{D as m}from"./DokumentIndex-CVLl6J8k.js";import{m as D}from"./nb_NO-DoSdDVe_.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-DvSDRMD4.js";import"./index-5BVNgjbu.js";import"./CheckmarkCircleFill-BxY8QANS.js";import"./ExclamationmarkTriangleFill-CLdxD40G.js";import"./FaktaKort-CI0EL7r8.js";import"./eksterneLenker-CZTrovcW.js";import"./Link-xsav6dgL.js";import"./message-BI6-wz5o.js";import"./Table-D9qjyx9P.js";import"./Checkbox-OhYgQmeA.js";import"./StarFill-iAJ1tutt.js";import"./SupportHeader-X5dNE6y8.js";import"./ErrorBoundary-BykQJMaV.js";import"./IngenBehandlingValgtPanel-BpNNxzvH.js";const{action:U}=__STORYBOOK_MODULE_ACTIONS__,f=F(D),k=o=>h(c(j(i.sakLinks.find(r=>r.rel===o)).href)),q={title:"fagsak/DokumentIndex",decorators:[f,u],component:m,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(N,{toggleVisUtvidetBehandlingDetaljer:U("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=l(I());return r==="success"?a.jsx(m,{...o}):a.jsx(g,{})}},t={parameters:{msw:{handlers:[e.get(p.INIT_FETCH,()=>s.json(i)),e.get(k(d.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:"INN"},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:"INN"},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:"INN"}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(p.INIT_FETCH,()=>s.json(i)),e.get(k(d.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
