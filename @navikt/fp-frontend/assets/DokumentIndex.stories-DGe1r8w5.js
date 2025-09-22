import{j as a,w as g}from"./iframe-D6H4IsMQ.js";import{Q as l}from"./index.es-BWI-GEJ5.js";import{u as c,F as d,i as m,w as j,n as I,c as k,d as h}from"./fagsakApi-BjBZtPLm.js";import{h as e,H as s,c as F}from"./index-DrFRX5YY.js";import{D as p,K as i}from"./DokumentIndex-CzJpcU_U.js";import{g as N}from"./withIntl-DHCm_GPl.js";import{U as D}from"./UtvidEllerMinskKnapp-DUGZnZTQ.js";import{m as U}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-C7T5SLU5.js";import"./index-8UwTTx5t.js";import"./CheckmarkCircleFill-gqZgRrmq.js";import"./ExclamationmarkTriangleFill-s_ld6_wh.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./FaktaKort-BBDniJib.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-CAMhEyYX.js";import"./message-CwUY0uBZ.js";import"./Table-C-dkXC7T.js";import"./Checkbox-Cl4L_Qi4.js";import"./StarFill-D5sCGXC_.js";import"./SupportHeader-D_moMSWq.js";import"./ErrorBoundary-Cep7zVPt.js";import"./IngenBehandlingValgtPanel-a7_t7gL-.js";import"./errorType-6aNygf57.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,_=N(U),u=o=>F(j(I(m.sakLinks.find(r=>r.rel===o)).href)),X={title:"fagsak/DokumentIndex",decorators:[_,g],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(D,{toggleVisUtvidetBehandlingDetaljer:f("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=c(h());return r==="success"?a.jsx(p,{...o}):a.jsx(l,{})}},t={parameters:{msw:{handlers:[e.get(d.INIT_FETCH,()=>s.json(m)),e.get(u(k.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(d.INIT_FETCH,()=>s.json(m)),e.get(u(k.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)), http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([]))]
    }
  },
  args: {}
}`,...n.parameters?.docs?.source}}};const Z=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,Z as __namedExportsOrder,X as default};
