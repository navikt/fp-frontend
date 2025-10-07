import{j as a,w as u}from"./iframe-BDTafQCk.js";import{Q as g}from"./index.es-BX2L31WV.js";import{u as l,F as p,i,w as c,n as j,b as d,c as I}from"./fagsakApi-CpA30By6.js";import{h as e,H as s,c as h}from"./index-BVtkNzEP.js";import{g as F}from"./withIntl-B7sbiEQG.js";import{U as N}from"./UtvidEllerMinskKnapp-COKmpfvF.js";import{D as m}from"./DokumentIndex-EdYr4P-k.js";import{m as D}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-CXSNKu_q.js";import"./index-BD6PrEQC.js";import"./CheckmarkCircleFill-CoyKOD9b.js";import"./ExclamationmarkTriangleFill-DODXbRih.js";import"./FaktaKort-Dakzxyyd.js";import"./eksterneLenker-CZTrovcW.js";import"./Link-SLrHZznO.js";import"./message-CwGodI8N.js";import"./Table-C6pG4wMZ.js";import"./Checkbox-Y1qnj96A.js";import"./StarFill-u02toMKV.js";import"./SupportHeader-DR0SdV_D.js";import"./ErrorBoundary-rF9jfbro.js";import"./IngenBehandlingValgtPanel-BdA4AoYx.js";const{action:U}=__STORYBOOK_MODULE_ACTIONS__,f=F(D),k=o=>h(c(j(i.sakLinks.find(r=>r.rel===o)).href)),z={title:"fagsak/DokumentIndex",decorators:[f,u],component:m,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(N,{toggleVisUtvidetBehandlingDetaljer:U("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=l(I());return r==="success"?a.jsx(m,{...o}):a.jsx(g,{})}},t={parameters:{msw:{handlers:[e.get(p.INIT_FETCH,()=>s.json(i)),e.get(k(d.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:"INN"},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:"INN"},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:"INN"}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(p.INIT_FETCH,()=>s.json(i)),e.get(k(d.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const G=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,G as __namedExportsOrder,z as default};
