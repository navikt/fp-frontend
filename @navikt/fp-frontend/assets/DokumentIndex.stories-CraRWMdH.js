import{j as a,w as u}from"./iframe-rD8zg52_.js";import{Z as g}from"./index.es-DlEriay5.js";import{u as l,F as p,i,w as c,n as j,b as d,c as I}from"./fagsakApi-Bx8RfCZF.js";import{h as e,H as s,c as h}from"./index-CmjXpMKr.js";import{g as F}from"./withIntl-CyhIoIzy.js";import{U as N}from"./UtvidEllerMinskKnapp-DVrAUoP8.js";import{D as m}from"./DokumentIndex-AexvtLoC.js";import{m as D}from"./nb_NO-DoSdDVe_.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-5bHGVEH1.js";import"./index-BisuOkOb.js";import"./CheckmarkCircleFill-rEmu8NB1.js";import"./ExclamationmarkTriangleFill-UakbUfU7.js";import"./FaktaKort-DglCECIu.js";import"./eksterneLenker-CZTrovcW.js";import"./Link-DlUTxOBq.js";import"./message-B0j6yLa2.js";import"./Table-Ct_obZj1.js";import"./Checkbox-DyLKAY8h.js";import"./StarFill-BbVOvdZE.js";import"./SupportHeader-3tAEZtJP.js";import"./ErrorBoundary-UPuaCVSQ.js";import"./IngenBehandlingValgtPanel-ByQ1q-so.js";const{action:U}=__STORYBOOK_MODULE_ACTIONS__,f=F(D),k=o=>h(c(j(i.sakLinks.find(r=>r.rel===o)).href)),q={title:"fagsak/DokumentIndex",decorators:[f,u],component:m,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(N,{toggleVisUtvidetBehandlingDetaljer:U("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=l(I());return r==="success"?a.jsx(m,{...o}):a.jsx(g,{})}},t={parameters:{msw:{handlers:[e.get(p.INIT_FETCH,()=>s.json(i)),e.get(k(d.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:"INN"},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:"INN"},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:"INN"}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(p.INIT_FETCH,()=>s.json(i)),e.get(k(d.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
