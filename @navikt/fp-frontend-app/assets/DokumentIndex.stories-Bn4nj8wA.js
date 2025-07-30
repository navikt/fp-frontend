import{j as a,w as g}from"./iframe-L6RViAaa.js";import{X as l}from"./index.es-DcmD3r8S.js";import{u as c,F as d,i as m,w as j,n as I,c as k,d as h}from"./fagsakApi-DIe9Qa42.js";import{h as e,H as s,c as F}from"./index-Cdj6V0cp.js";import{D as p,K as i}from"./DokumentIndex-uNak6odK.js";import{g as N}from"./withIntl-Cwo9nFNB.js";import{U as D}from"./UtvidEllerMinskKnapp-tUlR9MTt.js";import{m as U}from"./nb_NO-D39UuuyA.js";import"./VStack-BwRgwtxq.js";import"./index-U_vpaBQv.js";import"./CheckmarkCircleFill-DrP3Blvm.js";import"./ExclamationmarkTriangleFill-COZYoshk.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./FaktaKort-BYIS2UCJ.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-jnAsEHBi.js";import"./message-sgs3Q0kV.js";import"./Table-BIU-xSlD.js";import"./ChevronDown-CfqOZvmW.js";import"./Checkbox-CCQLjPQm.js";import"./StarFill-Cd9z9sR2.js";import"./SupportHeader-trLLs5Np.js";import"./ErrorBoundary-vX9A83pN.js";import"./IngenBehandlingValgtPanel-DQJHnt9M.js";import"./errorType-DUXzmts7.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,_=N(U),u=o=>F(j(I(m.sakLinks.find(r=>r.rel===o)).href)),W={title:"fagsak/DokumentIndex",decorators:[_,g],component:p,args:{saksnummer:"1",toggleVisUtvidetBehandlingDetaljerKnapp:a.jsx(D,{toggleVisUtvidetBehandlingDetaljer:f("button-click"),visUtvidetBehandlingDetaljer:!1})},render:o=>{const{status:r}=c(h());return r==="success"?a.jsx(p,{...o}):a.jsx(l,{})}},t={parameters:{msw:{handlers:[e.get(d.INIT_FETCH,()=>s.json(m)),e.get(u(k.ALL_DOCUMENTS),()=>s.json([{journalpostId:"1",dokumentId:"1",tittel:"dok",tidspunkt:"10.10.2017 10:23",kommunikasjonsretning:i.INN},{journalpostId:"2",dokumentId:"2",tittel:"dok1",tidspunkt:"10.10.2019 10:23",kommunikasjonsretning:i.INN},{journalpostId:"3",dokumentId:"3",tittel:"dok2",tidspunkt:"10.10.2018 10:23",kommunikasjonsretning:i.INN}]))]}},args:{behandlingUuid:"11212",behandlingVersjon:1}},n={parameters:{msw:{handlers:[e.get(d.INIT_FETCH,()=>s.json(m)),e.get(u(k.ALL_DOCUMENTS),()=>s.json([]))]}},args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Z=["DetFinnesDokumenterPåSak","DetFinnesIngenDokumenterPåSak"];export{t as DetFinnesDokumenterPåSak,n as DetFinnesIngenDokumenterPåSak,Z as __namedExportsOrder,W as default};
